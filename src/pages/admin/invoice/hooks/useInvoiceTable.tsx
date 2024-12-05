import { GridActionsCellItem, GridCallbackDetails, GridColDef, GridFilterModel, GridPaginationModel, GridRowParams, GridSortModel } from "@mui/x-data-grid";
import React from "react";
import { Appointment, GetInvoicesParams, Invoice, Patient } from "@/types";
import ViewIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '../component/update-modal';
import DetailModal from "../component/detail-modal";
import { useDialogs, useNotifications } from "@toolpad/core";
import { getGetInvoicesQueryKey, getInvoices, useDeleteInvoice, useGetInvoices } from "@/services/api";
import { keepPreviousData, QueryClient, useQueryClient } from "@tanstack/react-query";
import { camelCaseToPascalCase } from "@/utils/string-utils";

export default function useInvoiceTable() {
    const [filter, setFilter] = React.useState<GetInvoicesParams>({
        Page: 0,
        PageSize: 10,
    });
    const dialogs = useDialogs();
    const queryClient = useQueryClient();
    const { show } = useNotifications();
    const { mutateAsync } = useDeleteInvoice({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: getGetInvoicesQueryKey(),
                });
                show('Xóa hóa đơn thành công', {
                    autoHideDuration: 3000,
                    severity: 'success',
                });
            },
        }
    });
    
    const { data, isLoading } = useGetInvoices(
        {
            ...filter,
            Page: filter.Page! + 1,
            SortBy: camelCaseToPascalCase(filter.SortBy || 'invoiceId'),
        },
        {
            query: {
                placeholderData: keepPreviousData,
            },
        }
    );

    const handlePageChange = (page: GridPaginationModel) => {
        setFilter((pre) => ({
            ...pre,
            Page: page.page,
            PageSize: page.pageSize,
        }));
    };
    
    const handleFilterModelChange = (model: GridFilterModel) => {
        setFilter((pre) => ({
            ...pre,
            Search: model.quickFilterValues?.[0] as string,
        }))
    }

    const handleSortModelChange = (model: GridSortModel, details: GridCallbackDetails) => {
        setFilter((pre) => ({
            ...pre,
            SortBy: model[0]?.field,
            SortOrder: model[0]?.sort || 'asc',
        }));
    };

    const columns: GridColDef[] = React.useMemo(() => {
        return [
            { field: 'invoiceId', headerName: 'ID', width: 150 },
            {
                field: 'patient',
                headerName: 'Bệnh nhân',
                width: 150,
                valueGetter: (params: Patient) => {
                    return params?.name;
                },
            },
            {
                field: 'invoiceDate',
                headerName: 'Ngày lập hóa đơn',
                width: 150,
                valueGetter: (params: Invoice) => {
                    return params?.invoiceDate;
                }
            },
            {
                field: 'appointmentCreatedAt',
                headerName: 'Ngày hẹn',
                width: 150,
                valueGetter: (params: Appointment) => {
                    return params?.appointmentDate;
                }
            },
            {
                field: 'appointmentTime',
                headerName: 'Thời gian hẹn',
                width: 150,
                valueGetter: (params: Appointment) => {
                    return params?.appointmentTime;
                }
            },
            {
                field: 'appointmentStatus',
                headerName: 'Trạng thái cuộc hẹn',
                width: 150,
                valueGetter: (params: Appointment) => {
                    return params?.status;
                }
            },
            {
                field: 'totalAmount',
                headerName: 'Tổng tiền',
                width: 150,
                valueGetter: (params: Invoice) => {
                    return params?.totalAmount;
                }
            },
            {
                field: 'invoiceStatus',
                headerName: 'Trạng thái hóa đơn',
                width: 150,
                valueGetter: (params: Invoice) => {
                    return params?.status;
                }
            },
            {
                field: 'actions',
                type: 'actions',
                width: 100,
                getActions: (params: GridRowParams<Invoice>) => {
                    const id = params.row.appointmentId as number;
                    console.log('params: ',params.row);
                    return [
                        <GridActionsCellItem
                            showInMenu
                            icon={<ViewIcon />}
                            label="Xem"
                            onClick={() => {
                                dialogs.open(DetailModal, id);
                            }}
                        />,
                        <GridActionsCellItem
                            showInMenu
                            icon={<DeleteIcon />}
                            label="Xóa"
                            onClick={() => {
                                dialogs.confirm(
                                    <>
                                        Bạn có chắc là muốn xóa hóa đơn <b>#{params.row.invoiceId}</b>
                                    </>,
                                    {
                                        cancelText: 'Huỷ',
                                        okText: 'Xóa',
                                        severity: 'error',
                                        title: 'Xác nhận xóa',
                                        async onClose(result) {
                                            if (result) {
                                                await mutateAsync({ id });
                                            }
                                        }
                                    }
                                )
                            }}
                        />
                    ]
                }
            }
        ];
    }, []);
    return {
        table: {
            columns,
            data: data?.data || {
                data: [],
                totalItems: 0,
            },
            isLoading,
            handlePageChange,
            handleFilterModelChange,
            handleSortModelChange,
            filterModel: {
                items: [],
                quickFilterValues: filter.Search ? [filter.Search] : [],
            },
            pagination: {
                page: filter.Page!,
                pageSize: filter.PageSize!,
            },
            sortModel: [
                {
                    field: filter.SortBy || 'invoiceId',
                    sort: filter.SortBy || 'asc',
                }
            ],
        },
        filter: {
            set: setFilter,
            value: filter,
        }
    }
}