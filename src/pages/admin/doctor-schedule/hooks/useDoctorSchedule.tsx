// import {
//     GridActionsCellItem,
//     GridCallbackDetails,
//     GridColDef,
//     GridFilterModel,
//     GridPaginationModel,
//     GridRowParams,
//     GridSortModel,
// } from '@mui/x-data-grid';
// import { keepPreviousData, useQueryClient } from '@tanstack/react-query';
// import { useDialogs, useNotifications } from '@toolpad/core';
// import React from 'react';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewIcon from '@mui/icons-material/Visibility';
// import UpdateModal from '../components/update-modal';
// import DetailModal from '../components/detail-modal';
// import { getGetDoctorSchedulesQueryKey, useDeleteDoctorSchedule, useGetDoctorSchedules } from '@/services/api';
// import { DoctorSchedule, GetDoctorSchedulesParams } from '@/types';
// import { camelCaseToPascalCase } from '@/utils/string-utils';

// export default function useDoctorSchedule() {
//     const [filter, setFilter] = React.useState<GetDoctorSchedulesParams>({
//         Page: 0,
//         PageSize: 10,
//     });

//     // Handle changes in pagination
//     const handlePageChange = (page: GridPaginationModel) => {
//         setFilter((prev) => ({
//             ...prev,
//             Page: page.page,
//             PageSize: page.pageSize,
//         }));
//     };

//     // Handle filter changes
//     const handleFilterModelChange = (model: GridFilterModel) => {
//         setFilter((prev) => ({
//             ...prev,
//             Search: model.quickFilterValues?.[0] as string,
//         }));
//     };

//     // Handle sort model changes
//     const handleSortModelChange = (model: GridSortModel, details: GridCallbackDetails) => {
//         setFilter((prev) => ({
//             ...prev,
//             SortBy: model[0]?.field,
//             SortOrder: model[0]?.sort || 'asc',
//         }));
//     };

//     const { data, isLoading } = useGetDoctorSchedules(
//         {
//             ...filter,
//             Page: filter.Page! + 1,
//             SortBy: camelCaseToPascalCase(filter.SortBy || 'doctorScheduleId'),
//         },
//         {
//             query: {
//                 placeholderData: keepPreviousData,
//             },
//         }
//     );

//     const { show } = useNotifications();
//     const queryClient = useQueryClient();

//     // Handle delete schedule
//     const { mutateAsync } = useDeleteDoctorSchedule({
//         mutation: {
//             onSuccess: () => {
//                 queryClient.invalidateQueries({
//                     queryKey: getGetDoctorSchedulesQueryKey(),
//                 });
//                 show('Xóa lịch khám thành công', {
//                     autoHideDuration: 3000,
//                     severity: 'success',
//                 });
//             },
//         },
//     });

//     const dialogs = useDialogs();

//     const handleEdit = (id: number) => {
//         dialogs.open(UpdateModal, id);
//     };

//     // Define columns for the data grid
//     const columns: GridColDef[] = React.useMemo(() => {
//         return [
//             { field: 'doctorScheduleId', headerName: 'Mã lịch khám', width: 150 },
//             { field: 'name', headerName: 'Tên bác sĩ', flex: 1 },
//             { field: 'dayOfWeek', headerName: 'Ngày làm trong tuần', width: 150 },
//             { field: 'startTime', headerName: 'Bắt đầu', width: 150 },
//             { field: 'endTime', headerName: 'Kết thúc', width: 150 },
//             {
//                 field: 'actions',
//                 type: 'actions',
//                 width: 100,
//                 getActions: (params: GridRowParams<DoctorSchedule>) => {
//                     const id = params.row.doctorScheduleId as number;
//                     return [
//                         <GridActionsCellItem
//                             showInMenu
//                             icon={<ViewIcon />}
//                             label="Xem"
//                             onClick={() => {
//                                 dialogs.open(DetailModal, id);
//                             }}
//                         />,
//                         <GridActionsCellItem
//                             showInMenu
//                             icon={<EditIcon />}
//                             label="Sửa"
//                             onClick={() => handleEdit(id)}
//                         />,
//                         <GridActionsCellItem
//                             showInMenu
//                             icon={<DeleteIcon />}
//                             label="Xóa"
//                             onClick={() => {
//                                 dialogs.confirm(
//                                     <>
//                                         Bạn có chắc chắn muốn xóa lịch khám <b>{params.row.name}</b> không?
//                                     </>,
//                                     {
//                                         cancelText: 'Hủy',
//                                         okText: 'Xóa',
//                                         severity: 'error',
//                                         title: 'Xác nhận xóa',
//                                         async onClose(result) {
//                                             if (result) {
//                                                 await mutateAsync({ id });
//                                             }
//                                         },
//                                     }
//                                 );
//                             }}
//                         />,
//                     ];
//                 },
//             },
//         ];
//     }, [mutateAsync, dialogs]);

//     return {
//         table: {
//             columns,
//             data: data?.data || {
//                 data: [],
//                 totalItems: 0,
//             },
//             isLoading,
//             handlePageChange,
//             handleFilterModelChange,
//             handleSortModelChange,
//             filterModel: {
//                 items: [],
//                 quickFilterValues: filter.Search ? [filter.Search] : [],
//             },
//             pagination: {
//                 page: filter.Page!,
//                 pageSize: filter.PageSize!,
//             },
//             sortModel: [
//                 {
//                     field: filter.SortBy || 'doctorScheduleId',
//                     sort: filter.SortOrder || 'asc',
//                 },
//             ],
//         },
//         filter: {
//             set: setFilter,
//             value: filter,
//         },
//     };
// }
