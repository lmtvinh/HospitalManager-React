/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { Doctor } from './doctor';
import type { Message } from './message';
import type { Patient } from './patient';

export interface Ticket {
    createdAt?: string;
    doctor?: Doctor;
    /** @nullable */
    doctorId?: number | null;
    isClosed?: boolean;
    /** @nullable */
    lastMessageAt?: string | null;
    /** @nullable */
    messages?: Message[] | null;
    patient?: Patient;
    patientId?: number;
    ticketId?: string;
}
