/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */

export type GetAllDoctorSchedulesParams = {
    'DoctorId.Equal'?: number;
    'DoctorId.NotEquals'?: number;
    'DoctorId.GreaterThan'?: number;
    'DoctorId.GreaterThanOrEqual'?: number;
    'DoctorId.LessThan'?: number;
    'DoctorId.LessThanOrEqual'?: number;
    'DoctorId.In'?: number[];
    'DoctorId.IsNull'?: boolean;
    'DoctorId.IsNotNull'?: boolean;
    'DayOfWeek.Equal'?: number;
    'DayOfWeek.NotEquals'?: number;
    'DayOfWeek.GreaterThan'?: number;
    'DayOfWeek.GreaterThanOrEqual'?: number;
    'DayOfWeek.LessThan'?: number;
    'DayOfWeek.LessThanOrEqual'?: number;
    'DayOfWeek.In'?: number[];
    'DayOfWeek.IsNull'?: boolean;
    'DayOfWeek.IsNotNull'?: boolean;
    'StartTime.Equal'?: string;
    'StartTime.NotEquals'?: string;
    'StartTime.GreaterThan'?: string;
    'StartTime.GreaterThanOrEqual'?: string;
    'StartTime.LessThan'?: string;
    'StartTime.LessThanOrEqual'?: string;
    'StartTime.IsNull'?: boolean;
    'StartTime.IsNotNull'?: boolean;
    'EndTime.Equal'?: string;
    'EndTime.NotEquals'?: string;
    'EndTime.GreaterThan'?: string;
    'EndTime.GreaterThanOrEqual'?: string;
    'EndTime.LessThan'?: string;
    'EndTime.LessThanOrEqual'?: string;
    'EndTime.IsNull'?: boolean;
    'EndTime.IsNotNull'?: boolean;
    Search?: string;
    Page?: number;
    PageSize?: number;
    Skip?: number;
    Take?: number;
    SortBy?: string;
    SortOrder?: string;
};
