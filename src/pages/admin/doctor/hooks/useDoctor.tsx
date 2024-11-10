import { GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { useQueryClient } from '@tanstack/react-query';
import { useDialogs, useNotifications } from '@toolpad/core';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import UpdateModal from '../components/update-modal';
import { useDeleteApiDoctorsId, useGetApiDoctors } from '@/services/api';
import { Department, Doctor } from '@/types';
export default function useDoctor() {
    const { data, isLoading } = useGetApiDoctors();
    const { show } = useNotifications()
    const queryClient = useQueryClient()

    const { mutateAsync } = useDeleteApiDoctorsId({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: ['doctors']
                })
                show('Xóa bác sĩ thành công', {
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
            { field: 'doctorId', headerName: 'Mã bác sĩ', width: 150 },
            { field: 'name', headerName: 'Tên bác sĩ', flex: 1 },
            { field: 'phoneNumber', headerName: 'Số điện thoại', width: 150 },
            { field: 'email', headerName: 'Email', width: 150 },
            { field: 'specialization', headerName: 'Chuyên khoa', width: 150 },
            { field: 'department', headerName: 'Phòng khám', width: 150, valueGetter: (value: Department) => value.departmentName },
            {
                field: 'actions',
                type: 'actions',
                width: 100,
                getActions: (params: GridRowParams<Doctor>) => {
                    const id = params.row.doctorId as number;
                    return [
                        <GridActionsCellItem showInMenu icon={<ViewIcon />} label="Xem" onClick={() => { }} />,
                        <GridActionsCellItem sx={{
                            width: '200px',
                        }} showInMenu icon={<EditIcon />} label="Sửa" onClick={() => handleEdit(id)} />,
                        <GridActionsCellItem showInMenu icon={<DeleteIcon />} label="Xóa" onClick={() => {
                            dialogs.confirm(
                                <>
                                    Bạn có chắc chắn muốn xóa bác sĩ <b>{params.row.name}</b> không?
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
