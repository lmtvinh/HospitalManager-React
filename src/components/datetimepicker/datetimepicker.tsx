import React from "react";
import './main.css';
import { DateTimePickerComponent } from "@syncfusion/ej2-react-calendars";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { FormControl, FormHelperText, InputLabel } from "@mui/material";
import { useId } from "react";

interface FormInputDateTimeProps<T extends FieldValues> {
    control: Control<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    min?: Date;
    max?: Date;
    format?: string;
}

export default function FormInputDateTime<T extends FieldValues>({
    control,
    name,
    label,
    min,
    max,
    format = "dd-MM-yyyy HH:mm",
}: FormInputDateTimeProps<T>) {
    const id = useId();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange }, formState }) => (
                <FormControl fullWidth error={!!formState.errors[name]}>
                    <InputLabel shrink={!!value} htmlFor={id}>
                        {label}
                    </InputLabel>
                    <div id={id}>
                        <DateTimePickerComponent
                            id={`${id}-picker`}
                            value={value}
                            onChange={(e: { value: any; }) => onChange(e.value)}
                            min={min}
                            max={max}
                            format={format}
                        />
                    </div>
                    <FormHelperText id={`${id}-helper-text`}>
                        {formState.errors[name]?.message?.toString()}
                    </FormHelperText>
                </FormControl>
            )}
        />
    );
}
