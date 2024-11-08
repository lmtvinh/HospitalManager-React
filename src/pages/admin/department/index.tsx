import { Department } from '@/types/department';
import { Paginated } from '@/types/paginated';
import { DataGrid, GridActionsCellItem, GridColDef, GridRowParams } from '@mui/x-data-grid';
import { PageContainer, PageContainerToolbar, useDialogs } from '@toolpad/core';
import CreateModal from './components/create-modal';
import { useQuery } from '@tanstack/react-query';
import { departmentsClient } from '@/services/mock';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ViewIcon from '@mui/icons-material/Visibility';
import UpdateModal from './components/update-modal';
import React from 'react';


const rawData: Paginated<Department> = {
  data: [
    {
      departmentId: 1,
      departmentName: 'Phòng khám 1',
    },
    {
      departmentId: 2,
      departmentName: 'Phòng khám 2',
    },
  ],
  totalItems: 2,
};



export default function ListDepartment() {
  const { data, isLoading } = useQuery({
    queryKey: ['departments'],
    queryFn: () => departmentsClient.departmentsAll(),
    select: (data) => data || rawData.data
  })
  const dialogs = useDialogs();
  const handleEdit = (id: number) => {
    dialogs.open(UpdateModal, id);
  }
  const columns: GridColDef[] = React.useMemo(() => {
    return [
      { field: 'departmentId', headerName: 'Mã phòng khám', minWidth: 150 },
      { field: 'departmentName', headerName: 'Tên phòng khám', flex: 1 },
      { field: 'description', headerName: 'Mô tả', flex: 1 },
      {
        field: 'actions',
        type: 'actions',
        width: 100,
        getActions: (params: GridRowParams<Department>) => {
          const id = params.row.departmentId as number;
          return [
            <GridActionsCellItem showInMenu icon={<ViewIcon />} label="Xem" onClick={() => { }} />,
            <GridActionsCellItem sx={{
              width: '200px',
            }} showInMenu icon={<EditIcon />} label="Sửa" onClick={() => handleEdit(id)} />,
            <GridActionsCellItem showInMenu icon={<DeleteIcon />} label="Xóa" onClick={() => { }} />,
          ]
        },

      }
    ];
  }, []);


  return (
    <PageContainer
      slots={{ toolbar: PageToolbar }}
    >

      <DataGrid
        rows={data}
        columns={columns}
        pagination
        getRowId={(row) => row.departmentId}
        loading={isLoading}
        slotProps={{
          loadingOverlay: {
            variant: 'skeleton',
            noRowsVariant: 'skeleton',
          },
        }}
        initialState={{
          pagination: {
            rowCount: 5,
          },
        }}
      />
    </PageContainer>


  );
}

function PageToolbar() {
  return (
    <PageContainerToolbar>
      <CreateModal />
    </PageContainerToolbar>
  );
}