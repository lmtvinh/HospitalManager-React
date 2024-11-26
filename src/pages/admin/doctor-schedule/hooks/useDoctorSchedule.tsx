// import { GridActionsCellItem, GridCallbackDetails, GridColDef, GridFilterModel, GridPaginationModel, GridRowParams, GridSortModel } from "@mui/x-data-grid";
// import { keepPreviousData, useQueryClient } from "@tanstack/react-query";
// import { useDialogs, useNotifications } from "@toolpad/core";
// import React from 'react';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ViewIcon from '@mui/icons-material/Visibility';
// import UpdateModal from '../components/update-modal';
// // import DetailModal from '../components/detail-modal';
// import { getGetDoctorSchedulesQueryKey, useDeleteDoctorSchedule, useGetDoctorSchedules } from '@/services/api';
// import { DoctorSchedule, GetDoctorSchedulesParams } from '@/types';
// import { camelCaseToPascalCase } from '@/utils/string-utils';
// import DetailModal from "../../patient/components/detail-modal";

// export default function useDoctorSchedule() {
//     const [filter, setFilter] = React.useState<GetDoctorSchedulesParams>({
//         Page: 0,
//         PageSize: 10,
//     });

//     const handlePageChange = (model: GridFilterModel) => {
//         setFilter((pre) => ({
//             ...pre,
//             Sreach: model.quickFilterValues?.[0] as string,
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
//             }
//         }
//     );

//     const { show } = useNotifications();
//     const queryClient = useQueryClient();

//     const { mutateAsync } = useDeleteDoctorSchedule({
//         mutation: {
//             onSuccess: () => {
//                 queryClient.invalidateQueries({
//                     queryKey: getGetDoctorSchedulesQueryKey(),
//                 });
//                 show('Xóa lịch khám thành công', {
//                     autoHideDuration: 3000,
//                     severity: 'success',
//                 })
//             }
//         }
//     });

//     const dialogs = useDialogs();
//     const handleEdit = (id: number) => {
//         dialogs.open(UpdateModal, id);
//     };

//     const columns: GridColDef[] = React.useMemo(() => {
//         return [
//             { field: 'doctorScheduleId', headerName: 'Mã lịch khám', width: 150 },
//             { field: 'name', headerName: 'Tên bác sĩ', flex: 1 },
//             { field: 'dayOfWeek', headerName: 'Số ngày làm việc', width: 150 },
//             { field: 'startTime', headerName: 'Bắt đầu', width: 150 },
//             { field: 'endTime', headerName: 'Kết thúc', width: 150 },
//             {
//                 field: 'actions',
//                 type: 'actions',
//                 width: 100,
//                 getActions: (params: GridRowParams<DoctorSchedule>) => {
//                     const id = params.row.scheduleId as number;
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
//                             label="Xóa"
//                             icon={<DeleteIcon />}
//                             onClick={() => {
//                                 dialogs.confirm(
//                                     <>
//                                         Bạn có chắc muốn xóa lịch khám bệnh <b>{params.row.do }</b>
//                                     </>
//                                 )
//                             }}
//                         />
//                     ]
//                 }
//             }
//         ]
//     })
// }