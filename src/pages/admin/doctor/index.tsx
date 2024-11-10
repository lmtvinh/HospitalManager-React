import { PageContainer, PageContainerToolbar } from "@toolpad/core";
import CreateModal from "./components/create-modal";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import useDoctor from "./hooks/useDoctor";

export default function DoctorManagementPage() {
    const { table } = useDoctor();

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