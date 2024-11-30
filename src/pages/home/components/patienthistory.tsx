import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import _ from "lodash";
import { error } from "console";
import { useUserProfile } from "@/stores/user-store";

interface Appointment {
    appointmentId: number;
    date: string; // Ngày khám
    bookingTime: string; // Thời gian đặt
    department: string; // Chuyên khoa
    doctorName: string; // Bác sĩ
    status: string; // Trạng thái
    serviceUsed: string; // Dịch vụ sử dụng
    cost: number; // Chi phí
    recordDate: string; // Ngày lập hồ sơ
}

export default function PatientHistory() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const profile = useUserProfile();

    useEffect(() => {
        fetch(`api/patient/${profile?.patient?.userId}/appointments`)
            .then((response) => response.json())
            .then((data) => {
                const mappedAppointments = data.map((item: any) => ({
                    appointmentId: item.appointmentId,
                    date: item.date,
                    bookingTime: item.bookingTime,
                    department: item.department,
                    doctorName: item.doctorName,
                    status: item.status,
                    serviceUsed: item.serviceUsed,
                    cost: item.cost,
                    recordDate: item.recordDate,
                }));
                setAppointments(mappedAppointments);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching appointment history: ", error);
                setLoading(false);
            });
    }, [profile?.patient?.userId]);

    if (loading) {
        return <Typography className="container">Đang tải lịch sử khám...</Typography>
    }

    // if (appointments.length === 0) {
    //     return <Typography className="container">Không có lịch sử khám nào.</Typography>
    // }

    return (
        <Box sx={{ padding: 4, maxWidth: 800, margin: "auto" }}>
            <Typography variant="h4" mb={3}>Lịch sử khám bệnh</Typography>
            <TableContainer component={Paper} sx={{ marginTop: 5 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Ngày khám</strong></TableCell>
                            <TableCell><strong>Thời gian đặt</strong></TableCell>
                            <TableCell><strong>Chuyên khoa</strong></TableCell>
                            <TableCell><strong>Bác sĩ</strong></TableCell>
                            <TableCell><strong>Trạng thái</strong></TableCell>
                            <TableCell><strong>Dịch vụ sử dụng</strong></TableCell>
                            <TableCell><strong>Chi phí</strong></TableCell>
                            <TableCell><strong>Ngày lập hồ sơ</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow key={appointment.appointmentId}>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell>{appointment.bookingTime}</TableCell>
                                <TableCell>{appointment.department}</TableCell>
                                <TableCell>{appointment.doctorName}</TableCell>
                                <TableCell>{appointment.status}</TableCell>
                                <TableCell>{appointment.serviceUsed}</TableCell>
                                <TableCell>{appointment.cost.toLocaleString()} VND</TableCell>
                                <TableCell>{appointment.recordDate}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}