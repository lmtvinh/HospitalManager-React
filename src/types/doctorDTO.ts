/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { DepartmentDTO } from './departmentDTO';

export interface DoctorDTO {
    department?: DepartmentDTO;
    /** @nullable */
    departmentId?: number | null;
    doctorId?: number;
    /** @nullable */
    email?: string | null;
    /** @nullable */
    name?: string | null;
    /** @nullable */
    phoneNumber?: string | null;
    /** @nullable */
    specialization?: string | null;
    /** @nullable */
    userId?: string | null;
}