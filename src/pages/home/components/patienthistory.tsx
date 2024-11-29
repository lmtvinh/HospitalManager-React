import React, { useEffect, useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import _ from "lodash";
import { error } from "console";

interface Appointment {
    appointmentId: number;
    date: string;
    doctorName: string;
    reason: string;
    notes: string;
}

export default function PatientHistory() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("api/patient/1/appointments")
            .then((response) => response.json())
            .then((data) => {
                setAppointments(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching appointment history: ", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <Typography>Đang tải lịch sử khám...</Typography>
    }

    if (appointments.length === 0) {
        return <Typography>Không có lịch sử khám nào.</Typography>
    }

    return (
        <Box sx={{ padding: 4, maxWidth: 800, margin: "auto" }}>
            <Typography variant="h4" mb={3}>Lịch sử khám bệnh</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Ngày khám</strong></TableCell>
                            <TableCell><strong>Bác sĩ</strong></TableCell>
                            <TableCell><strong>Lý do</strong></TableCell>
                            <TableCell><strong>Ghi chú</strong></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments.map((appointment) => (
                            <TableRow key={appointment.appointmentId}>
                                <TableCell>{appointment.date}</TableCell>
                                <TableCell>{appointment.doctorName}</TableCell>
                                <TableCell>{appointment.reason}</TableCell>
                                <TableCell>{appointment.notes}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}