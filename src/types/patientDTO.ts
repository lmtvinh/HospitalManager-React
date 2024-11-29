/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { Appointment } from './appointment';
import type { EmergencyContact } from './emergencyContact';
import type { Invoice } from './invoice';

export interface PatientDTO {
    /** @nullable */
    appointments?: Appointment[] | null;
    dateOfBirth?: string;
    /** @nullable */
    email?: string | null;
    /** @nullable */
    emergencyContacts?: EmergencyContact[] | null;
    /** @nullable */
    gender?: string | null;
    /** @nullable */
    healthInsurance?: string | null;
    /** @nullable */
    invoices?: Invoice[] | null;
    /** @nullable */
    name?: string | null;
    patientId?: number;
    /** @nullable */
    phoneNumber?: string | null;
    /** @nullable */
    userId?: string | null;
}
