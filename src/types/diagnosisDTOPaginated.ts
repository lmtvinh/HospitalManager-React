/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */
import type { DiagnosisDTO } from './diagnosisDTO';

export interface DiagnosisDTOPaginated {
    /** @nullable */
    data?: DiagnosisDTO[] | null;
    nextPage?: number;
    totalItems?: number;
}
