import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';

interface Patient {
    patientId: number;
    name: string;
    dateOfBirth: string;
    phoneNumber?: string;
    email?: string;
    gender?: string;
    healthInsurance?: string;
}

export default function PatientDetail() {
    const location = useLocation();
    const { patientId } = location.state || {};

    const [patient, setPatient] = useState<Patient | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        fetch("/api/patient/1")
            .then((res) => res.json())
            .then((data) => setPatient(data))
            .catch((err) => console.error(err));
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPatient((prev) => prev && { ...prev, [name]: value });
    }

    const handleUpdate = () => {
        fetch("/api/patient/1", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(patient),
        })
            .then(() => {
                alert("Cập nhật thành công!");
                setIsEditing(false);
            })
            .catch((err) => console.error(err));
    }

    if (!patient) return <Typography>Đang tải thông tin ...</Typography>

    return (
        <Box sx={{ padding: 4, maxWidth: 600, margin: "auto" }}>
            <Typography variant='h4' mb={2}>
                Thông tin bệnh nhân
            </Typography>

            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        label="Họ và tên"
                        name="name"
                        value={patient.name}
                        onChange={handleInputChange}
                        fullWidth
                        disabled={!isEditing}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Ngày sinh"
                        name='dateOfBirth'
                        type='date'
                        value={patient.dateOfBirth}
                        onChange={handleInputChange}
                        fullWidth
                        disabled={!isEditing}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Số điện thoại"
                        name="phoneNumber"
                        value={patient.phoneNumber || ""}
                        onChange={handleInputChange}
                        fullWidth
                        disabled={!isEditing}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Email"
                        name='email'
                        value={patient.email || ""}
                        onChange={handleInputChange}
                        fullWidth
                        disabled={!isEditing}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Giới tính"
                        name='gender'
                        value={patient.gender || ""}
                        onChange={handleInputChange}
                        fullWidth
                        disabled={!isEditing}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        label="Bảo hiểm y tế"
                        name="healthInsurance"
                        value={patient.healthInsurance}
                        onChange={handleInputChange}
                        fullWidth
                        disabled={!isEditing}
                    />
                </Grid>
            </Grid>

            <Box mt={3} display="flex" justifyContent="space-between">
                {isEditing ? (
                    <>
                        <Button variant="contained" color='primary' onClick={handleUpdate}>
                            Cập nhật thông tin
                        </Button>
                    </>
                ) : (
                    <Button variant='contained' color="primary" onClick={() => setIsEditing(false)}>
                        Chỉnh sửa thông tin
                    </Button>
                )}
            </Box>
        </Box>
    )
}