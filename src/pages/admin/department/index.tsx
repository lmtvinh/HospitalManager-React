import { Department } from '@/types/department';
import { Paginated } from '@/types/paginated';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { PageContainer, PageContainerToolbar } from '@toolpad/core';
import CreateModal from './components/create-modal';

const columns: GridColDef[] = [
  { field: 'departmentId', headerName: 'Mã phòng khám', minWidth: 150 },
  { field: 'departmentName', headerName: 'Tên phòng khám', flex: 1 },
  { field: 'description', headerName: 'Mô tả', flex: 1 },
];

const data: Paginated<Department> = {
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
  return (
    <PageContainer
    slots={{ toolbar: PageToolbar }}
    >

      <DataGrid
        rows={data.data}
        columns={columns}
        pagination
        getRowId={(row) => row.departmentId}
        initialState={{
          pagination: {
            rowCount: data.totalItems,
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