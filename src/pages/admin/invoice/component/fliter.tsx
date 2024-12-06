import { Autocomplete, Box, Button, MenuItem, Popover, Slider, TextField, Typography } from '@mui/material';
import React, { useId } from "react";
import { useGetPatients } from "@/services/api";
import { GetInvoicesParams } from "@/types";
import { Patient } from "@/types";
import FilterListIcon from '@mui/icons-material/FilterList';
import { Controller, useForm } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers';

interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<GetInvoicesParams>>;
    filter: GetInvoicesParams;
}

export default function Filter({ setFilter, filter }: FilterProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const [values, setValues] = React.useState<Patient[]>([]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setFilter(pre => ({
            ...pre,
            Page: 0,
            "PatientId.In": values.map(v => v.patientId!)
        }))
    };

    
    const [selectedPatients, setSelectedPatients] = React.useState<Patient[]>([]);

    const handleResetFilter = () => {
        reset(); // Reset react-hook-form values
        setSelectedPatients([]);
        setPriceRange([0, 54990000]);
        setFilter({ Page: 0, PageSize: 10 }); // Reset filter
        handleClose();
    };

    const open = Boolean(anchorEl);
    const id = useId();
    const usedId = open ? id : undefined;
    const { control, reset, handleSubmit } = useForm<GetInvoicesParams>({
        defaultValues: { ...filter },
    });
    const [priceRange, setPriceRange] = React.useState<number[]>([0, 54990000]);
    const handlePriceChange = (event: Event, newValue: number | number[]) => {
        setPriceRange(newValue as number[]);
    };

    const { data: patients } = useGetPatients({
        PageSize: 10000,
    });

    const patientOptions = React.useMemo(() => {
        return patients?.data.data?.map((option) => option) || [];
    }, [patients]);

    return (
        <>
            <Button
                variant="contained"
                startIcon={<FilterListIcon />}
                onClick={handleClick}
                aria-describedby={usedId}
            >
                Bộ lọc
            </Button>
            <Popover
                id={usedId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                }}
            >
                <Box
                    sx={{ padding: 3 }}
                    display={'flex'}
                    flexDirection={'column'}
                    gap={2}
                >
                    <Typography variant='h6'>Bộ lọc</Typography>
                    <Controller
                        control={control}
                        name="PatientId.Equal"
                        render={({ field }) => {
                            return (
                                <Autocomplete<Patient, false>
                                    options={patientOptions}
                                    sx={{ width: 300 }}
                                    getOptionLabel={(option) => option.name!}
                                    getOptionKey={(option) => option.patientId!}
                                    renderInput={(params) => <TextField {...params} label="Bệnh nhân" />}
                                    value={patientOptions.find((d) => d.patientId === field.value) || null}
                                    renderOption={(props, option, { selected }) => (
                                        <MenuItem {...props} selected={selected}>
                                            {option.name}
                                        </MenuItem>
                                    )}
                                    onChange={(event: any, newValue: Patient | null) => {
                                        field.onChange(newValue?.patientId ?? undefined);
                                    }}
                                />
                            );
                        }}
                    ></Controller>
                    <Controller
                        control={control}
                        name="InvoiceDate.GreaterThanOrEqual"
                        render={({ field }) => {
                            return <DateTimePicker label='Ngày lập hóa đơn' />;
                        }}
                    ></Controller>
                    <Box
                        sx={{
                            padding: 3,
                            display: "flex",
                            flexDirection: "column",
                            gap: 2,
                            border: "1px solid #c4c4c4",
                            borderRadius: 2,
                        }}
                    >
                        <Typography id="price-range-slider" gutterBottom>
                            Tổng tiền
                        </Typography>
                        <Slider
                            value={priceRange}
                            onChange={handlePriceChange}
                            valueLabelDisplay="on"
                            min={0}
                            max={54990000}
                            step={1000000}
                            sx={{ color: "#00ab55" }}
                        />
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            sx={{ marginTop: 1 }}
                        >
                            <Typography>0đ</Typography>
                            <Typography>54.990.000đ</Typography>
                        </Box>
                    </Box>

                    <Box display={'flex'} justifyContent="flex-end" gap={2} sx={{ marginTop: 3 }}>
                        <Button
                            onClick={() => {
                                setValues([]);
                                handleClose();
                            }}
                        >
                            Xóa bộ lọc
                        </Button>
                        <Button onClick={handleClose} variant='contained' color='primary'>
                            Áp dụng
                        </Button>
                    </Box>
                </Box>
            </Popover>
        </>
    );
}
