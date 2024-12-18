/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { DoctorDTO } from './doctorDTO';
import type { MessageDTO } from './messageDTO';
import type { PatientDTO } from './patientDTO';

export interface TicketDTO {
    createdAt?: string;
    doctor?: DoctorDTO;
    /** @nullable */
    doctorId?: number | null;
    isClosed?: boolean;
    /** @nullable */
    lastMessage?: string | null;
    /** @nullable */
    lastMessageAt?: string | null;
    /** @nullable */
    messages?: MessageDTO[] | null;
    patient?: PatientDTO;
    patientId?: number;
    ticketId?: string;
}
