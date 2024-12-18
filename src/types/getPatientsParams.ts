/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */

export type GetPatientsParams = {
    Search?: string;
    'Gender.Contains'?: string;
    'Gender.NotContains'?: string;
    'Gender.Equal'?: string;
    'Gender.NotEquals'?: string;
    'Gender.StartsWith'?: string;
    'Gender.EndsWith'?: string;
    'Gender.IsNull'?: boolean;
    'Gender.IsNotNull'?: boolean;
    'Gender.In'?: string[];
    Page?: number;
    PageSize?: number;
    Skip?: number;
    Take?: number;
    SortBy?: string;
    SortOrder?: string;
};
