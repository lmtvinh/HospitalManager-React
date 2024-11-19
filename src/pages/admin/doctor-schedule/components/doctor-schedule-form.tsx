import { Controller, UseFormReturn } from 'react-hook-form';

import FormInput from '@/pages/admin/components/form/FormInput';
import { Autocomplete, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { doctorsClient } from '@/services/mock';
import FormInputDateTime from '@/components/datetimepicker/datetimepicker';

interface DoctorFormProps {
	form: UseFormReturn<any>;
	type?: 'create' | 'update';
}

export default function DoctorScheduleForm({ form, type }: DoctorFormProps) {
	const { data, isLoading } = useQuery({
		queryKey: ['departments'],
		queryFn: () => doctorsClient.doctorsAll(),
	})

	return (
		<>
			{/* <FormInput control={form.control} name="name" label="Lịch khám" variant="outlined" /> */}
			<Controller
				name="departmentId"
				control={form.control}
				render={({ field: { onBlur, onChange, value, ...rest }, }) => {
					const selected = data?.find((item) => item.doctorId === value) || null;

					return <Autocomplete
						disablePortal
						options={data?.map((option) => {
							return {
								value: option.doctorId,
								label: option.name,
							};
						}) || []}
						loading={isLoading}
						renderInput={(params) => <TextField {...params} label="Bác sĩ" variant='outlined' />}
						onChange={(_, data) => {
							onChange(data?.value);
						}}
						onBlur={onBlur}
						value={{ value: selected?.doctorId, label: selected?.name }}
						getOptionKey={(option) => option.value || ''}
						getOptionLabel={(option) => option.label || ''}
						{...rest}
					/>
				}}
			/>
			<FormInput
				control={form.control}
				name="count"
				label='Số ngày làm việc'
			/>
			<FormInputDateTime
				control={form.control}
				name="dateTime"
				label="Select Date and Time"
				min={new Date("2024-11-16T08:30:00")}
				max={new Date("2024-11-16T18:00:00")}
			/>
			{/* <FormInput control={form.} /> */}
			{/* <FormInput control={form.control} name="email" label="Email" variant="outlined" />
			{type === 'create' && <FormInput control={form.control} name="password" type='password' label="Mật khẩu" variant="outlined" />}

			<FormInput control={form.control} name="phoneNumber" label="Số điện thoại" variant="outlined" />
			<FormInput control={form.control} name="specialization" label="Chuyên khoa" variant="outlined" />
			<FormInput control={form.control} name="departmentId" label="Mã phòng khám" variant="outlined" disabled /> */}

		</>
	);
}
