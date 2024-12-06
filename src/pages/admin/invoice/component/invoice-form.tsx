import { useGetAppointments, useGetDepartments, useGetPatient, useGetPatients } from "@/services/api";
import { Controller, UseFormReturn } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import { Autocomplete, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import React from "react";
import { Patient } from "../../patient/validations";
import { MenuItem } from '@mui/material';

interface InvoiceFormProps {
    form: UseFormReturn<any>;
    type?: 'create' | 'update';
    initAppointmentId?: number;
}

export default function InvoiceFrom({ form, type, initAppointmentId }: InvoiceFormProps) {
    React.useEffect(() => {
        if (initAppointmentId) {
            form.setValue('appointmentId', initAppointmentId);
        }
    }, [initAppointmentId]);

    const { data, isLoading } = useGetAppointments(
        {
            PageSize: 100000,
        },
        {
            query: {
                select: (data) => data.data.data,
            },
        }
    );

    return (
        <>
            <Controller
                name="appointmentId"
                control={form.control}
                render={({ field: { onBlur, onChange, value, ...rest } }) => {
                    const selected = data?.find((item) => item.appointmentId === value) || null;
                    return (
                        <Autocomplete
                            disabled={initAppointmentId != undefined}
                            disablePortal
                            options={
                                data?.map((option) => {
                                    return {
                                        value: option.appointmentId,
                                        label:
                                            dayjs(option.appointmentDate).format('DD/MM/YYYY HH:mm') +
                                            ' - ' +
                                            option.patient?.name,
                                    };
                                }) || []
                            }
                            loading={isLoading}
                            renderInput={(params) => <TextField {...params} label="Lịch hẹn" variant="outlined" />}
                            onChange={(_, data) => {
                                onChange(data?.value);
                            }}
                            onBlur={onBlur}
                            value={{
                                value: selected?.appointmentId,
                                label: selected
                                    ? dayjs(selected.appointmentDate).format('DD/MM/YYYY HH:mm') +
                                    ' - ' +
                                    selected.patient?.name
                                    : '',
                            }}
                            getOptionKey={(option) => option.value || ''}
                            getOptionLabel={(option) => option.label || ''}
                            {...rest}
                        />
                    );
                }}
            />

            <Controller
                name="invoiceDate"
                control={form.control}
                render={({ field: { value, ...rest } }) => (
                    <DatePicker
                        label="Ngày tạo hóa đơn"
                        value={value ? dayjs(value) : dayjs()}
                        dayOfWeekFormatter={(dayOfWeek) => dayOfWeek.format('dd')}
                        {...rest}
                    />
                )}
            ></Controller>

            <FormInput
                control={form.control}
                name="totalAmount"
                label="Tổng tiền"
                type="number"
                variant="outlined"
            />

            <FormInput
                control={form.control}
                name="status"
                label="Trạng thái"
                variant="outlined"
            />
        </>
    )
}