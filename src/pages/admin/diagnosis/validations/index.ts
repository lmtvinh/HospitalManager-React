import z from 'zod'
import { mustBeOptionalNumber, mustBePhoneNumber, ValidationMessages } from '@/utils/form-utils'
import { Gender } from '@/services/enums/gender'

export const PatientSchema = z.object({
    dateOfBirth: z.string().refine((value) => value.length > 0, { message: ValidationMessages.required('Date of Birth') }),
    email: z.string().email({ message: ValidationMessages.email('Email') }).optional(),
    gender:z.nativeEnum(Gender).optional(),
    healthInsurance: z.string().max(100,ValidationMessages.maxLength('Health Insurance',100)).optional(),
    name: z.string().min(0,ValidationMessages.minLength('Name',0)).max(100,ValidationMessages.maxLength('Name',100)).optional(),
    phoneNumber: mustBePhoneNumber().optional(),
    patientId: z.custom(mustBeOptionalNumber).optional(),
    userId: z.string().optional(),
})  




export type Patient = z.infer<typeof PatientSchema>

