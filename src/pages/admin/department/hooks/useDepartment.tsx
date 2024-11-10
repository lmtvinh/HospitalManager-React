import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useQueryClient } from '@tanstack/react-query';
import { useDialogs, useNotifications } from '@toolpad/core';
import React from 'react';
import { Department } from '../validations';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import UpdateModal from '../components/update-modal';
import { useDeleteApiDepartmentsId, useGetApiDepartments } from '@/services/api';
export default function useDepartment() {
    const { data, isLoading } = useGetApiDepartments();
    const { show } = useNotifications()
    const queryClient = useQueryClient()

    const { mutateAsync } = useDeleteApiDepartmentsId({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['departments']
                })
                show('Xóa phòng khám thành công', {
                    autoHideDuration: 3000,
                    severity: 'success',
                })
            },
        }
    });

    const dialogs = useDialogs();
    const handleEdit = (id: number) => {
        dialogs.open(UpdateModal, id);
    }

    const columns: GridColDef[] = React.useMemo(() => {
        return [
            { field: 'departmentId', headerName: 'Mã phòng khám', minWidth: 150 },
            { field: 'departmentName', headerName: 'Tên phòng khám', flex: 1 },
            { field: 'description', headerName: 'Mô tả', flex: 1 },
            {
                field: 'actions',
                type: 'actions',
                width: 100,
                getActions: (params: GridRowParams<Department>) => {
                    const id = params.row.departmentId as number;
                    return [
                        <GridActionsCellItem showInMenu icon={<ViewIcon />} label="Xem" onClick={() => { }} />,
                        <GridActionsCellItem sx={{
                            width: '200px',
                        }} showInMenu icon={<EditIcon />} label="Sửa" onClick={() => handleEdit(id)} />,
                        <GridActionsCellItem showInMenu icon={<DeleteIcon />} label="Xóa" onClick={() => {
                            dialogs.confirm(
                                <>
                                    Bạn có chắc chắn muốn xóa phòng khám <b>{params.row.departmentName}</b> không?
                                </>,
                                {
                                    cancelText: "Hủy",
                                    okText: "Xóa",
                                    severity: "error",
                                    title: "Xác nhận xóa",
                                    async onClose(result) {
                                        if (result) {
                                            await mutateAsync({ id })
                                        }
                                    },
                                })
                        }} />,
                    ]
                },

            }
        ];
    }, []);
    return {
        table: {
            columns,
            data:data?.data,
            isLoading
        }
    }
}
