import {
    GridActionsCellItem,
    GridCallbackDetails,
    GridColDef,
    GridFilterModel,
    GridPaginationModel,
    GridRowParams,
    GridSortModel,
} from '@mui/x-data-grid';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import { keepPreviousData, useQueryClient } from '@tanstack/react-query';
import { useDialogs, useNotifications } from '@toolpad/core';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import UpdateModal from '../components/update-modal';
import { getGetAppointmentsQueryKey, useDeleteAppointment, useGetAppointments } from '@/services/api';
import { Appointment, GetAppointmentsParams } from '@/types';
import { camelCaseToPascalCase } from '@/utils/string-utils';
import dayjs from 'dayjs';
import CreateModal from '../../diagnosis/components/create-modal';
import DetailModal from '../components/detail-modal';
export default function useAppointmentTable() {
    const [filter, setFilter] = React.useState<GetAppointmentsParams>({
        Page: 0,
        PageSize: 10,
    });

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
        }));
    };

    const handleSortModelChange = (model: GridSortModel, details: GridCallbackDetails) => {
        console.log(model, details);
        setFilter((pre) => ({
            ...pre,
            SortBy: model[0]?.field,
            SortOrder: model[0]?.sort || 'asc',
        }));
    };

    const { data, isLoading } = useGetAppointments(
        {
            ...filter,
            Page: filter.Page! + 1,
            SortBy: camelCaseToPascalCase(filter.SortBy || 'appointmentId'),
        },
        {
            query: {
                placeholderData: keepPreviousData,
            },
        }
    );
    const { show } = useNotifications();
    const queryClient = useQueryClient();

    const { mutateAsync } = useDeleteAppointment({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: getGetAppointmentsQueryKey(),
                });
                show('Xóa lịch hẹn thành công', {
                    autoHideDuration: 3000,
                    severity: 'success',
                });
            },
        },
    });

    const dialogs = useDialogs();
    const handleEdit = (id: number) => {
        dialogs.open(UpdateModal, id);
    };
    const handleDiagnosis = (id: number) => {
        dialogs.open(CreateModal.FromDialog, { initAppointmentId: id });
    };

    const columns: GridColDef[] = React.useMemo(() => {
        return [
            { field: 'appointmentId', headerName: 'Mã lịch hẹn', width: 100 },
            {
                field: 'patient',
                headerName: 'Bệnh nhân',
                width: 150,
                valueGetter: (_, record: Appointment) => record?.patient?.name,
            },
            {
                field: 'appointmentDate',
                headerName: 'Hẹn lúc',
                width: 200,
                valueGetter: (_, record: Appointment) => dayjs(record.appointmentDate).format('dddd, DD/MM/YYYY HH:mm'),
            },
            {
                field: 'phoneNumber',
                headerName: 'Số điện thoại',
                width: 150,
                valueGetter: (_, record: Appointment) => record?.patient?.phoneNumber,
            },
            {
                field: 'doctor',
                headerName: 'Bác sĩ',
                width: 150,
                valueGetter: (_, record: Appointment) => record?.doctor?.name,
            },
            { field: 'status', headerName: 'Trạng thái', width: 150 },
            {
                field: 'actions',
                type: 'actions',
                width: 100,
                getActions: (params: GridRowParams<Appointment>) => {
                    const id = params.row.appointmentId as number;
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
                            sx={{
                                width: '200px',
                            }}
                            showInMenu
                            icon={<EditIcon />}
                            label="Sửa"
                            onClick={() => handleEdit(id)}
                        />,
                        <GridActionsCellItem
                            sx={{
                                width: '200px',
                            }}
                            showInMenu
                            icon={<MonitorWeightIcon />}
                            label="Chẩn đoán"
                            onClick={() => handleDiagnosis(id)}
                        />,
                        <GridActionsCellItem
                            showInMenu
                            icon={<DeleteIcon />}
                            label="Xóa"
                            onClick={() => {
                                dialogs.confirm(
                                    <>
                                        Bạn có chắc chắn muốn xóa lịch hẹn <b>{params.row.appointmentId}</b> không?
                                    </>,
                                    {
                                        cancelText: 'Hủy',
                                        okText: 'Xóa',
                                        severity: 'error',
                                        title: 'Xác nhận xóa',
                                        async onClose(result) {
                                            if (result) {
                                                await mutateAsync({ id });
                                            }
                                        },
                                    }
                                );
                            }}
                        />,
                    ];
                },
            },
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
                    field: filter.SortBy || 'createdAt',
                    sort: filter.SortOrder || 'asc',
                },
            ],
        },
        filter: {
            set: setFilter,
            value: filter,
        },
    };
}
