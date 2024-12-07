/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { Ticket } from './ticket';
import type { IdentityUser } from './identityUser';

export interface Message {
    /**
     * @minLength 0
     * @maxLength 1000
     * @nullable
     */
    content?: string | null;
    createdAt?: string;
    isRead?: boolean;
    messageId?: string;
    ticket?: Ticket;
    ticketId?: string;
    user?: IdentityUser;
    /** @nullable */
    userId?: string | null;
}
