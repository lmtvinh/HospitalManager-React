import { getPatient, useGetInvoice } from "@/services/api";
import { Dialog, DialogContent, DialogTitle, Grid, IconButton, Typography } from "@mui/material";
import { GridCloseIcon } from "@mui/x-data-grid";
import { DialogProps } from "@toolpad/core";
import { Invoice } from "@/types";
import { useQuery } from "@tanstack/react-query";

export default function DetailModal({ payload, open, onClose }: DialogProps<number>) {
    const { data, isLoading } = useGetInvoice(payload, {
        query: {
            select: (response) => {
                const invoice = response.data;
                return {
                    ...invoice,
                    patientId: invoice.patientId ?? 0,
                    patient: invoice.patient ?? { name: 'Không xác định' },
                };
            },
        },
    });

    if (isLoading) {
        return (
            <Dialog onClose={onClose as any} open={open} fullWidth maxWidth="sm">
                <DialogContent>
                    <Typography variant="body1">Loading...</Typography>
                </DialogContent>
            </Dialog>
        );
    }

    if (!data) {
        return (
            <Dialog onClose={onClose as any} open={open} fullWidth maxWidth="sm">
                <DialogContent>
                    <Typography variant="body1" color="error">
                        Không tìm thấy dữ liệu hóa đơn.
                    </Typography>
                </DialogContent>
            </Dialog>
        );
    }

    return (
        <Dialog onClose={onClose as any} open={open} fullWidth maxWidth="sm">
            <DialogTitle>
                <Typography variant="h5">Chi tiết hóa đơn #{data?.invoiceId}</Typography>
                <IconButton
                    aria-label="close"
                    onClick={onClose as any}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <GridCloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ padding: 3 }}>
                <InvoiceDetail
                    invoice={{
                        ...data,
                        patientId: data?.patientId ?? 0,
                        patient: data?.patient ?? { name: 'Không xác định' },
                    }}
                />
            </DialogContent>
        </Dialog>
    );
}

export function InvoiceDetail({ invoice }: { invoice: Invoice }) {
    return (
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <Typography variant="body2" fontWeight="bold">
                    ID hóa đơn:
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="body2">{invoice?.invoiceId}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant="body2" fontWeight="bold">
                    Bệnh nhân:
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="body2">{invoice?.patient?.name}</Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant="body2" fontWeight="bold">
                    Ngày lập hóa đơn:
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="body2">
                    {invoice?.invoiceDate ? new Date(invoice.invoiceDate).toLocaleDateString() : 'N/A'}
                </Typography>
            </Grid>


            <Grid item xs={4}>
                <Typography variant="body2" fontWeight="bold">
                    Tổng tiền:
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="body2">
                    {invoice?.totalAmount?.toString()} ₫
                </Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography variant="body2" fontWeight="bold">
                    Trạng thái:
                </Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant="body2">{invoice?.status}</Typography>
            </Grid>

            {invoice?.appointmentId && (
                <>
                    <Grid item xs={4}>
                        <Typography variant="body2" fontWeight="bold">
                            Mã cuộc hẹn:
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant="body2">{invoice?.appointmentId}</Typography>
                    </Grid>
                </>
            )}
        </Grid>
    );
}
