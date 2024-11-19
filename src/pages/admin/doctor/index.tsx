import { DataGrid, GridToolbarContainer, GridToolbarQuickFilter } from '@mui/x-data-grid';
import { PageContainer, PageContainerToolbar } from '@toolpad/core';
import CreateModal from './components/create-modal';
import useDoctorTable from './hooks/useDoctorTable';
import DatagridPagination from '../components/datagrid-pagination';
export default function DoctorManagementPage() {



  const { table } = useDoctorTable();
  return (
    <PageContainer
      slots={{ toolbar: PageToolbar }}

    >
        
      <DataGrid
        rows={table.data?.data || []}
        columns={table.columns}
        onPaginationModelChange={table.handlePageChange}
        paginationMode='server'
        filterMode='server'
        sortingMode='server'
        sortModel={table.sortModel as any}
        onSortModelChange={table.handleSortModelChange}
        onFilterModelChange={table.handleFilterModelChange}
        filterModel={table.filterModel}
        paginationModel={table.pagination}
        getRowId={(row) => row.doctorId}
        loading={table.isLoading}
        disableColumnFilter
        slots={{
          toolbar: DataGridToolbar,
          pagination:DatagridPagination,
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
        disableColumnSelector
        rowCount={table.data?.totalItems || -1}
        sx={{
          padding: '10px'
        }}
        disableVirtualization
      />
    </PageContainer>


  );
}

const DataGridToolbar = () => {
  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };
  // const open = Boolean(anchorEl);
  // const id = open ? 'simple-popover' : undefined;
  return (
    <GridToolbarContainer sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 16px',
    }}>
      <GridToolbarQuickFilter />
      {/* <Button
        variant="contained"
        startIcon={<FilterListIcon />}
        onClick={handleClick}
        aria-describedby={id}
      >
        Bộ lọc
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        Bộ lọc
      </Popover> */}
    </GridToolbarContainer>

  );
}


function PageToolbar() {
  return (
    <PageContainerToolbar>
      <CreateModal />
    </PageContainerToolbar>
  );
}