/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { DepartmentDTO } from './departmentDTO';
import type { TicketDTO } from './ticketDTO';

export interface DoctorDTO {
    department?: DepartmentDTO;
    /** @nullable */
    departmentId?: number | null;
    doctorId?: number;
    /** @nullable */
    email?: string | null;
    /** @nullable */
    imageUrl?: string | null;
    /** @nullable */
    name?: string | null;
    /** @nullable */
    phoneNumber?: string | null;
    /** @nullable */
    position?: string | null;
    /** @nullable */
    specialization?: string | null;
    ticket?: TicketDTO;
    /** @nullable */
    userId?: string | null;
}
