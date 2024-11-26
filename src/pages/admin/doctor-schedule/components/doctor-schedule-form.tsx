import { Controller, UseFormReturn } from 'react-hook-form';
import { Autocomplete, Checkbox, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { doctorsClient } from '@/services/mock';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import './main.css';

interface DoctorFormProps {
	form: UseFormReturn<any>;
	type?: 'create' | 'update';
}

const dayOfWeek = [
	{ value: 'monday', label: 'Thứ 2' },
	{ value: 'tuesday', label: 'Thứ 3' },
	{ value: 'wednesday', label: 'Thứ 4' },
	{ value: 'thursday', label: 'Thứ 5' },
	{ value: 'friday', label: 'Thứ 6' },
	{ value: 'saturday', label: 'Thứ 7' },
	{ value: 'sunday', label: 'Chủ nhật' },
];

const stringToDate = (timeString: string): Date | undefined => {
	if (!timeString) return undefined; // Đổi null thành undefined
	const [hours, minutes] = timeString.split(':').map(Number);
	const date = new Date();
	date.setHours(hours);
	date.setMinutes(minutes);
	return date;
};


export default function DoctorScheduleForm({ form, type }: DoctorFormProps) {
	const { data, isLoading } = useQuery({
		queryKey: ['doctors'],
		queryFn: () => doctorsClient.doctorsAll(),
	});

	return (
		<>
			{/* Field chọn bác sĩ */}
			<Controller
				name="doctorId"
				control={form.control}
				render={({ field: { onBlur, onChange, value, ...rest } }) => {
					const selected = data?.find((item: { doctorId: any }) => item.doctorId === value) || null;

					return (
						<Autocomplete
							disablePortal
							options={
								data?.map((option: { doctorId: any; name: any }) => ({
									value: option.doctorId,
									label: option.name,
								})) || []
							}
							loading={isLoading}
							renderInput={(params) => <TextField {...params} label="Bác sĩ" variant="outlined" />}
							onChange={(_, data) => {
								onChange(data?.value);
							}}
							onBlur={onBlur}
							value={{ value: selected?.doctorId, label: selected?.name }}
							getOptionLabel={(option) => option.label || ''}
							{...rest}
						/>
					);
				}}
			/>

			{/* Field chọn ngày làm */}
			<Controller
				name="schedule"
				control={form.control}
				render={({ field: { onChange, value = [] } }) => {
					const handleDayToggle = (day: { value: string; label: string }) => {
						const isSelected = value.find((item: { day: string }) => item.day === day.value);
						if (isSelected) {
							// Xóa ngày khỏi danh sách
							onChange(value.filter((item: { day: string }) => item.day !== day.value));
						} else {
							// Thêm ngày mới
							onChange([...value, { day: day.value, startTime: '', endTime: '' }]);
						}
					};

					const handleTimeChange = (day: string, key: 'startTime' | 'endTime', time: string) => {
						const updated = value.map((item: { day: string; startTime: string; endTime: string }) =>
							item.day === day ? { ...item, [key]: time } : item
						);
						onChange(updated);
					};

					return (
						<>
							<Autocomplete
								multiple
								options={dayOfWeek}
								disableCloseOnSelect
								value={value.map((item: { day: string }) => ({
									value: item.day,
									label: dayOfWeek.find((d) => d.value === item.day)?.label || '',
								}))}
								isOptionEqualToValue={(option, selectedValue) => option.value === selectedValue.value}
								renderOption={(props, option) => {
									const isSelected = value.find((item: { day: string }) => item.day === option.value);
									return (
										<li
											{...props}
											onClick={(e) => e.stopPropagation()}
										>
											<Checkbox
												checked={!!isSelected}
												onClick={() => {
													handleDayToggle(option);
												}}
												style={{ marginRight: 8 }}
											/>
											{option.label}
										</li>
									);
								}}
								renderInput={(params) => <TextField {...params} label="Chọn ngày làm" variant="outlined" />}
							/>

							{/* Hiển thị thời gian làm việc cho từng ngày */}
							{value.map((item: { day: string; startTime: string; endTime: string }) => (
								<div key={item.day} style={{ marginTop: '16px' }}>
									<span>{dayOfWeek.find((d) => d.value === item.day)?.label}</span>
									<TimePickerComponent
										placeholder="Giờ bắt đầu"
										value={stringToDate(item.startTime)}
										format="HH:mm"
										step={30}
										onChange={(e: { target: { value: string; }; }) => handleTimeChange(item.day, 'startTime', e.target.value)}
									/>
									<TimePickerComponent
										placeholder="Giờ kết thúc"
										value={stringToDate(item.endTime)}
										format="HH:mm"
										step={30}
										onChange={(e: { target: { value: string; }; }) => handleTimeChange(item.day, 'endTime', e.target.value)}
									/>
								</div>
							))}
						</>
					);
				}}
			/>
		</>
	);
}
