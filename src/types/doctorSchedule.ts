/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Book API
 * OpenAPI spec version: v1
 */
import type { Doctor } from './doctor';

export interface DoctorSchedule {
    dayOfWeek?: number;
    doctor?: Doctor;
    doctorId?: number;
    endTime?: string;
    scheduleId?: number;
    startTime?: string;
}