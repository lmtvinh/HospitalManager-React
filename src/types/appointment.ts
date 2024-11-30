/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { Diagnosis } from './diagnosis';
import type { Doctor } from './doctor';
import type { Patient } from './patient';

export interface Appointment {
    appointmentDate?: string;
    appointmentId?: number;
    appointmentTime?: string;
    /** @nullable */
    createdAt?: string | null;
    /** @nullable */
    diagnoses?: Diagnosis[] | null;
    doctor?: Doctor;
    doctorId?: number;
    patient?: Patient;
    patientId?: number;
    /**
     * @minLength 0
     * @maxLength 50
     * @nullable
     */
    status?: string | null;
}
