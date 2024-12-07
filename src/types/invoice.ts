/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { Appointment } from './appointment';
import type { Patient } from './patient';

export interface Invoice {
    appointment?: Appointment;
    /** @nullable */
    appointmentId?: number | null;
    invoiceDate?: string;
    invoiceId?: number;
    patient?: Patient;
    patientId?: number;
    /**
     * @minLength 0
     * @maxLength 50
     * @nullable
     */
    status?: string | null;
    totalAmount?: number;
}
