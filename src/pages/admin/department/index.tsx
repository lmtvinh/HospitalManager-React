import { Department } from '@/types/department';
import { Paginated } from '@/types/paginated';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { PageContainer, PageContainerToolbar } from '@toolpad/core';
import CreateModal from './components/create-modal';
import useDepartment from './hooks/useDepartment';


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

 

  const {table} = useDepartment();

  return (
    <PageContainer
      slots={{ toolbar: PageToolbar }}
    >

      <DataGrid
        rows={table.data}
        columns={table.columns}
        pagination
        getRowId={(row) => row.departmentId}
        loading={table.isLoading}
        disableColumnFilter
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          loadingOverlay: {
            variant: 'skeleton',
            noRowsVariant: 'skeleton',
          },
          toolbar: {
            showQuickFilter: true
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