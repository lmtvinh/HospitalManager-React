/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Book API
 * OpenAPI spec version: v1
 */
import type { Appointment } from './appointment';

export interface Diagnosis {
    appointment?: Appointment;
    appointmentId?: number;
    /**
     * @minLength 0
     * @maxLength 255
     * @nullable
     */
    description?: string | null;
    diagnosisDate?: string;
    diagnosisId?: number;
    /**
     * @minLength 0
     * @maxLength 255
     * @nullable
     */
    notes?: string | null;
}
