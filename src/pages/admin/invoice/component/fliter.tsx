import { Autocomplete, Box, Button, MenuItem, Popover, TextField, Typography } from '@mui/material';
import React, { useId } from "react";
import { useGetPatients } from "@/services/api";
import { GetInvoicesParams } from "@/types";
import { Patient } from "@/types";
import FilterListIcon from '@mui/icons-material/FilterList';

interface FilterProps {
    setFilter: React.Dispatch<React.SetStateAction<GetInvoicesParams>>;
    filter: GetInvoicesParams;
}

export default function Filter({ setFilter, filter }: FilterProps) {
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const { data } = useGetPatients({ PageSize: 100000 });
    const [values, setValues] = React.useState<Patient[]>([]);

    const options = React.useMemo(() => {
        console.log("data : ", data);
        return data?.data.data?.map((option) => option) || [];
    }, [data]);

    React.useEffect(() => {
        if (filter['PatientId.In']) {
            const patients = data?.data.data?.filter(
                (p) => filter['PatientId.In']?.includes(p.patientId!)
            );
            setValues(patients || []);
        }
    }, [filter['PatientId.In'], data]);

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

    const open = Boolean(anchorEl);
    const id = useId();
    const usedId = open ? id : undefined;

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
                >
                    <Typography variant='h6' sx={{ marginBottom: 3 }}>Bộ lọc</Typography>
                    <Autocomplete<Patient, true>
                        options={options}
                        sx={{ width: 300 }}
                        multiple
                        getOptionLabel={(option) => option.name!}
                        getOptionKey={(option) => option.patientId!}
                        renderInput={(params) => <TextField {...params} label="Bệnh nhân" />}
                        renderOption={(props, option, { selected }) => (
                            <MenuItem {...props} selected={selected}>
                                {option.name}
                            </MenuItem>
                        )}
                    />
                    <Box display={'flex'} justifyContent="flex-end" gap={2}>
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
