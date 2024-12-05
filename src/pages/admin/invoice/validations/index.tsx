import z from 'zod';
import { mustBeNumber } from '@/utils/form-utils';
import dayjs from 'dayjs';

export const InvoiceSchema = z.object({
    invoiceId: z.any().optional(),
    patientId: mustBeNumber('Mã bệnh nhân'),
    appointmentId: z.number().nullable().optional(),
    invoiceDate: z
        .string()
        .refine(
            (value) => dayjs(value, 'YYYY-MM-DDTHH:mm:ss', true).isValid(),
            { message: 'Ngày hóa đơn không hợp lệ (định dạng: YYYY-MM-DDTHH:mm:ss' }
        ),
    totalAmount: z
        .number()
        .min(0, 'Tổng tiền phải lớn hơn hoặc bằng 0')
        .refine((value) => value.toFixed(2).length <= 18, {
            message: 'Tổng tiền không được vượt quá giới hạn (18, 2)',
        }),
    status: z
        .string()
        .min(1, 'Trạng thái không được để trống')
        .max(50, 'Trạng thái không được vượt quá 50 ký tự'),
});

export type Invoice = z.infer<typeof InvoiceSchema>;

export const InvoiceBulkCreateSchema = z.object({
    invoices: z
        .array(
            z.object({
                patientId: mustBeNumber('Mã bệnh nhân'),
                appointmentId: z.number().nullable().optional(),
                invoiceDate: z
                    .string()
                    .refine(
                        (value) => dayjs(value, 'YYYY-MM-DDTHH:mm:ss', true).isValid(),
                        {
                            message: "Ngày hóa đơn không hợp lệ (định dạng: YYYY-MM-DDTHH:mm:ss)"
                        }
                    ),
                totalAmount: z
                    .number()
                    .min(0, 'Tổng tiền phải lớn hơn hoặc bằng 0')
                    .refine((value) => value.toFixed(2).length <= 18, {
                        message: 'Tổng tiền không được vượt quá giới hạn (18,2)'
                    }),
                status: z
                    .string()
                    .min(1, 'Trạng thái không được để trống')
                    .max(50, 'Trạng thái không được quá 50 ký tự'),
            })
        )
        .min(1, 'Danh sách hóa đơn không được để trống'),
});

export const InvoiceValidationSchema = z.object({
    patientId: z.number().min(1, { message: "Vui lòng chọn bệnh nhân" }),
    appointmentId: z.number().optional(),
    invoiceDate: z.string().nonempty({ message: "Ngày hóa đơn là bắt buộc" }),
    totalAmount: z.number().min(0, { message: "Số tiền không thể âm" }),
    status: z.string().nonempty({ message: "Trạng thái là bắt buộc" }),
});

export type InvoiceDTO = z.infer<typeof InvoiceValidationSchema>;


export type InvoiceBulkCreate = z.infer<typeof InvoiceBulkCreateSchema>;

export const getDefaultInvoiceValues = (): Partial<Invoice> => ({
    invoiceId: undefined,
    patientId: 0,
    appointmentId: null,
    invoiceDate: dayjs().format('YYYY-MM-DDTHH:mm:ss'),
    totalAmount: 0.0,
    status: '',
})