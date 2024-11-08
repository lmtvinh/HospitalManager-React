import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { GridCloseIcon } from '@mui/x-data-grid';
import { useBoolean } from 'usehooks-ts';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Department, DepartmentSchema } from '../validations';
import { FormControl, TextField, } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { departmentsClient } from '@/services/mock';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNotifications } from '@toolpad/core/useNotifications';
export default function CreateModal() {
    const { toggle, value, setFalse } = useBoolean()
    const form = useForm<Department>({
        resolver: zodResolver(DepartmentSchema)
    })
    const queryClient = useQueryClient()
    const { show } = useNotifications()
    const { mutateAsync, isPending } = useMutation({
        mutationKey: ['departments', 'create'],
        mutationFn: (data: Department) => {
            return departmentsClient.departmentsPOST(data)
        },
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['departments']
            })
            show('Tạo mới phòng khám thành công', {
                autoHideDuration: 3000,
                severity: 'success',
            })
        }
    })
    const onClosed = () => {
        setFalse()
        form.reset()
    }
    const onSubmit = async (data: Department) => {
       await mutateAsync(data)
        onClosed()
    }

    return (
        <>
            <Button variant="contained" onClick={toggle} startIcon={<AddIcon />}>
                Tạo mới
            </Button>
            <Dialog
                component={'form'}
                onSubmit={form.handleSubmit(onSubmit)}
                onClose={onClosed}
                aria-labelledby="customized-dialog-title"
                open={value}

            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Tạo mới phòng khám
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={toggle}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <GridCloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Stack gap={3} minWidth={400}>
                        <FormControl fullWidth>
                            <TextField
                                {...form.register('departmentName')}
                                label="Tên phòng khám"
                                variant="outlined"
                                error={!!form.formState.errors.departmentName}
                                helperText={form.formState.errors.departmentName?.message}
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <TextField
                                {...form.register('description')}
                                label="Mô tả"
                                variant="outlined"
                                multiline
                                rows={3}
                                error={!!form.formState.errors.description}
                                helperText={form.formState.errors.description?.message}
                            />
                        </FormControl>
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button
                    disabled={isPending}
                    autoFocus type='reset' variant='outlined' onClick={onClosed}>
                        Đóng
                    </Button>
                    <LoadingButton 
                    
                    autoFocus type='submit' variant='contained'
                    loading={isPending}
                    >
                        Tạo mới
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </>
    )
}
