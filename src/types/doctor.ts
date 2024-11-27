/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { Appointment } from './appointment';
import type { Department } from './department';
import type { DoctorSchedule } from './doctorSchedule';
import type { IdentityUser } from './identityUser';

export interface Doctor {
    /** @nullable */
    appointments?: Appointment[] | null;
    department?: Department;
    /** @nullable */
    departmentId?: number | null;
    doctorId?: number;
    /** @nullable */
    doctorSchedules?: DoctorSchedule[] | null;
    /**
     * @minLength 0
     * @maxLength 100
     * @nullable
     */
    email?: string | null;
    /**
     * @minLength 0
     * @maxLength 100
     * @nullable
     */
    name?: string | null;
    /**
     * @minLength 0
     * @maxLength 15
     * @nullable
     */
    phoneNumber?: string | null;
    /**
     * @minLength 0
     * @maxLength 100
     * @nullable
     */
    specialization?: string | null;
    user?: IdentityUser;
    /** @nullable */
    userId?: string | null;
}
