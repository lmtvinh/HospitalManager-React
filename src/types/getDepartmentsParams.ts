/**
 * Generated by orval v7.2.0 🍺
 * Do not edit manually.
 * Hopital Management System Api
 * OpenAPI spec version: v1
 */

export type GetDepartmentsParams = {
    'Name.Contains'?: string;
    'Name.NotContains'?: string;
    'Name.Equal'?: string;
    'Name.NotEquals'?: string;
    'Name.StartsWith'?: string;
    'Name.EndsWith'?: string;
    'Name.IsNull'?: boolean;
    'Name.IsNotNull'?: boolean;
    'Name.In'?: string[];
    'Description.Contains'?: string;
    'Description.NotContains'?: string;
    'Description.Equal'?: string;
    'Description.NotEquals'?: string;
    'Description.StartsWith'?: string;
    'Description.EndsWith'?: string;
    'Description.IsNull'?: boolean;
    'Description.IsNotNull'?: boolean;
    'Description.In'?: string[];
    Search?: string;
    Page?: number;
    PageSize?: number;
    Skip?: number;
    Take?: number;
    SortBy?: string;
    SortOrder?: string;
};
