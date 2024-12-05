import { useGetDepartments } from "@/services/api";
import { Controller, UseFormReturn } from "react-hook-form";
import FormInput from "../../components/form/FormInput";
import { Autocomplete, TextField } from "@mui/material";

interface InvoiceFormProps {
    form: UseFormReturn<any>;
    type?: 'create' | 'update';
}

export default function InvoiceFrom({ form, type }: InvoiceFormProps) {
    const { data: patients, isLoading: patientsLoading } = useGetDepartments(
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
                name="patientId"
                control={form.control}
                render={({ field: { onBlur, onChange, value, ...rest } }) => {
                    const selected = patients?.find((item) => item.patientId === value) || null;
                    return (
                        <Autocomplete
                            disablePortal
                            options={
                                patients?.map((option) => {
                                    return {
                                        value: option.patientId,
                                        label: option.patientName
                                    }
                                }) || []
                            }
                            loading={patientsLoading}
                            renderInput={(params) => <TextField {...params} label="Bệnh nhân" variant="outlined" />
                            }
                            onChange={(_, data) => {
                                onChange(data?.value);
                            }}
                            onBlur={onBlur}
                            value={{ value: selected?.appointmentId, label: selected?.appointmentDate }}
                            getOptionKey={(option) => option.value || ""}
                            getOptionLabel={(option) => option.label || ""}
                            {...rest}
                        />
                    );
                }}
            />

            <FormInput
                control={form.control}
                name="invoiceDate"
                label="Ngày lập hóa đơn"
                type="datetime-local"
                variant="outlined"
            />

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