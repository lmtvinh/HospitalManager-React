import { useGetDiagnosis } from '@/services/api';
import { Dialog, DialogContent, Typography, Grid, Paper, DialogTitle, IconButton, styled } from '@mui/material';
import { DialogProps } from '@toolpad/core';
import GridCloseIcon from '@mui/icons-material/Close';
import dayjs from 'dayjs';
const StyledPaper = styled(Paper)`
    padding: 2;
    display: flex;
    flex-direction: column;
    min-height: 150;
    height: 100%;
`;
export default function DetailModal({ payload, open, onClose }: DialogProps<number>) {
    const { data, isLoading } = useGetDiagnosis(payload, {
        query: {
            select: (data) => data.data,
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

    return (
        <Dialog onClose={onClose as any} open={open} fullWidth maxWidth="sm">
            <DialogTitle>
                <Typography variant="h5">Chi tiết chẩn đoán</Typography>
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
            <DialogContent
                sx={{
                    padding: 3,
                }}
            >
                <Grid container spacing={2}>
                    {/* Patient Information */}
                    <Grid item xs={12} md={6}>
                        <StyledPaper
                            elevation={3}
                            sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: 150,
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Thông tin bệnh nhân
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Tên:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.appointment?.patient?.name || 'N/A'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Số điện thoại:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.appointment?.patient?.phoneNumber || 'N/A'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Giới tính:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.appointment?.patient?.gender || 'N/A'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Grid>
                    {/* Doctor Information */}
                    <Grid item xs={12} md={6}>
                        <StyledPaper
                            elevation={3}
                            sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                minHeight: 150,
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Thông tin bác sĩ
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Tên:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.appointment?.doctor?.name || 'N/A'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Số điện thoại:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.appointment?.doctor?.phoneNumber || 'N/A'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Chuyên khoa:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.appointment?.doctor?.specialization || 'N/A'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Grid>
                    {/* Diagnosis Information */}
                    <Grid item xs={12}>
                        <StyledPaper
                            elevation={3}
                            sx={{
                                padding: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                Thông tin chuẩn đoán
                            </Typography>
                            <Grid container spacing={1}>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Ngày chuẩn đoán:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {dayjs(data?.diagnosisDate).format('dddd, DD/MM/YYYY HH:mm') || 'N/A'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Chuẩn đoán:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.description || 'N/A'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="body2" fontWeight="bold">
                                        Ghi chú:
                                    </Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography variant="body2">
                                        {data?.notes || 'N/A'}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
}
