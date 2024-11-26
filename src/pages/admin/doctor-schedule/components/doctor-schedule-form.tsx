import { Controller, UseFormReturn } from 'react-hook-form';
import { Autocomplete, Checkbox, TextField } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { doctorsClient } from '@/services/mock';
import { TimePickerComponent } from '@syncfusion/ej2-react-calendars';
import { ChangedEventArgs } from '@syncfusion/ej2-calendars';
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

function stringToDate(timeString: string | null | undefined): Date {
	if (typeof timeString !== 'string' || !timeString) return new Date();
	const [hours, minutes] = timeString.split(':').map(Number);
	if (isNaN(hours) || isNaN(minutes)) return new Date();
	const date = new Date();
	date.setHours(hours, minutes, 0, 0);
	return date;
}




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

					const newLocal = null;
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

							{value.map((item: { day: string; startTime: string; endTime: string }) => (
								<div key={item.day} style={{ marginTop: '16px' }}>
									<span>{dayOfWeek.find((d) => d.value === item.day)?.label}</span>

									{/* TimePicker cho Giờ bắt đầu */}
									<TimePickerComponent
										placeholder="Chọn giờ bắt đầu"
										value={item.startTime ? stringToDate(item.startTime) : undefined}
										format="HH:mm"
										step={30}
										min={new Date(0, 0, 0, 8, 0)} // Giới hạn thời gian từ 8:00
										max={new Date(0, 0, 0, 16, 0)} // Đến 16:00
										onChange={(e: ChangedEventArgs) => {
											const startTime = e.value?.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) || '';
											handleTimeChange(item.day, 'startTime', startTime);
										}}
									/>

									{/* TimePicker cho Giờ kết thúc */}
									<TimePickerComponent
										placeholder="Chọn giờ kết thúc"
										value={item.endTime ? stringToDate(item.endTime) : undefined}
										format="HH:mm"
										step={30}
										min={item.startTime ? stringToDate(item.startTime) : new Date(0, 0, 0, 8, 0)}
										max={new Date(0, 0, 0, 16, 0)}
										onChange={(e: ChangedEventArgs) => {
											const endTime = e.value?.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }) || '';
											handleTimeChange(item.day, 'endTime', endTime);
										}}
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
