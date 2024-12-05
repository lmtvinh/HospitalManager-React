import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack } from '@mui/material';
import { GridCloseIcon } from '@mui/x-data-grid';
import { useBoolean } from 'usehooks-ts';
import AddIcon from '@mui/icons-material/Add';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InvoiceDTO, InvoiceValidationSchema } from '../validations';
import { useQueryClient } from '@tanstack/react-query';
import LoadingButton from '@mui/lab/LoadingButton';
import { useNotifications } from '@toolpad/core/useNotifications';
import { getDefaultValue } from '@/utils/form-utils';
import InvoiceForm from './invoice-form';
import { getGetInvoicesQueryKey, usePostInvoice } from '@/services/api';

export default function CreateModal() {
    const { toggle, value, setFalse } = useBoolean();
    const form = useForm<InvoiceDTO>({
        defaultValues: getDefaultValue(InvoiceValidationSchema),
        resolver: zodResolver(InvoiceValidationSchema),
    });

    const queryClient = useQueryClient();
    const { show } = useNotifications();
    const { mutateAsync, isPending } = usePostInvoice({
        mutation: {
            onSuccess: () => {
                queryClient.invalidateQueries({
                    queryKey: getGetInvoicesQueryKey(),
                });
                show('Tạo hóa đơn thành công', {
                    autoHideDuration: 3000,
                    severity: 'success',
                });
            }
        }
    });

    const onClosed = () => {
        setFalse();
        form.reset();
    };

    const onSubmit = async (data: InvoiceDTO) => {
        await mutateAsync({
            data: {
                ...data,
            }
        });
        onClosed();
    };

    return (
        <>
            <Button variant='contained' onClick={toggle} startIcon={<AddIcon />}>
                Tạo hóa đơn
            </Button>
            <Dialog
                component={'form'}
                onSubmit={form.handleSubmit(onSubmit)}
                onClose={onClosed}
                aria-labelledby='customized-dialog-title'
                open={value}
            >
                <DialogTitle
                    sx={{ m: 0, p: 2 }} id="customized-dialog-title"
                >
                    Tạo hóa đơn mới
                </DialogTitle>
                <IconButton
                    aria-label='close'
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
                        <InvoiceForm type="create" form={form} />
                    </Stack>
                </DialogContent>
                <DialogActions>
                    <Button disabled={isPending} autoFocus type="reset" variant="outlined" onClick={onClosed}>
                        Đóng
                    </Button>
                    <LoadingButton autoFocus type="submit" variant='contained' loading={isPending}>
                        Tạo mới
                    </LoadingButton>
                </DialogActions>
            </Dialog>
        </>
    )

}