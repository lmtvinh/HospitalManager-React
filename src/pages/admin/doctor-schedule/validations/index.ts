import z from 'zod';
import {
    mustBeDayjs,
    mustBeNumber,
    mustBeOptionalNumber,
    mustBePhoneNumber,
    ValidationMessages,
} from '@/utils/form-utils';
import { Gender } from '@/services/enums/gender';
import dayjs from 'dayjs';

export const DoctorScheduleSchema = z
    .object({
        scheduleId: z.any().optional(),
        doctorId: mustBeNumber('Mã bác sĩ'),
        dayOfWeek: z.number().min(0, 'Ngày trong tuần không hợp lệ').max(6, 'Ngày trong tuần không hợp lệ'),
        startTime: mustBeDayjs('Thời gian bắt đầu').refine(
            (value) => {
                const startTime = dayjs('2021-01-01T' + value?.format('HH:mm:ss'));
                const endTime = dayjs('2021-01-01T18:00:00');
                return startTime.isBefore(endTime);
            },
            {
                message: 'Thời gian bắt đầu phải trước 18:00',
            }
        ),
        endTime: mustBeDayjs('Thời gian kết thúc'),
    })
    .refine(
        (value) => {
            return value.startTime!.isBefore(value.endTime);
        },
        {
            message: 'Thời gian kết thúc phải sau thời gian bắt đầu',
        }
    );

export type DoctorSchedule = z.infer<typeof DoctorScheduleSchema>;
