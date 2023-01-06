import Link from "next/link";
import DataTable from "react-data-table-component";
import { useGetUserBO, usePaginationMessages } from "../../lib/hooks";
import {
  DashboardInputOutlined,
  DashboardMainContainer,
  DashboardMainFiltersContainer,
  DashboardPolizasHeaderContainer,
  DashboardPolizasRoot,
  DataTableContainer,
  SubtitleDashboardPrimary,
  SubtitleDashboardSecondary,
  SubtitleDashboardTerciary,
} from "./styled";

export function DashboardMessages() {
  const userBO = useGetUserBO();
  const { data, error, isLoading, setQuery, Querys }: any =
    usePaginationMessages();
  console.log(data);

  function handleOnChangeQuery(e: any) {
    if (e.key === "Enter" || e.keyCode === 13) {
      setQuery.setQ(e.target.value);
      e.target.value = "";
    }
  }

  const handleOnChangePage = (page: any) => {
    setQuery.setPage(page);
  };

  return (
    <DashboardPolizasRoot>
      <DashboardPolizasHeaderContainer>
        <SubtitleDashboardPrimary>
          {userBO ? `Hola ${userBO.name}!` : `Hola !`}
        </SubtitleDashboardPrimary>
        <Link href="/dashboard/polizas">
          <SubtitleDashboardTerciary>Pólizas</SubtitleDashboardTerciary>
        </Link>
        <Link href="/dashboard/mensajes">
          <SubtitleDashboardTerciary active={true} color={"primary-hover"}>
            Mensajes
          </SubtitleDashboardTerciary>
        </Link>
      </DashboardPolizasHeaderContainer>

      <DashboardMainContainer>
        <SubtitleDashboardSecondary color="primary">
          Listado de Mensajes
        </SubtitleDashboardSecondary>
        <DashboardMainFiltersContainer>
          <DashboardInputOutlined
            placeholder="Buscar"
            onKeyDown={handleOnChangeQuery}
          ></DashboardInputOutlined>
        </DashboardMainFiltersContainer>
        {data && (
          <DataTableContainer>
            <DataTable
              data={data.rows}
              // onRowClicked={handleOnRowClicked}
              onChangePage={handleOnChangePage}
              striped
              sortServer
              pagination
              paginationServer
              paginationRowsPerPageOptions={[10]}
              // paginationTotalRows={data.totalRows}
              paginationComponentOptions={{
                rowsPerPageText: "Polizas por pagina",
                rangeSeparatorText: "De",
                selectAllRowsItemText: "Todas",
                selectAllRowsItem: true,
              }}
              noDataComponent={
                <div className="p-3">
                  <b>No se encontraron mensajes</b>
                </div>
              }
              customStyles={{
                headCells: {
                  style: {
                    "font-family": "Nunito",
                    "font-weight": 700,
                    "font-size": "18px",
                    color: "#4145FB",
                  },
                },
                rows: {
                  style: {
                    "font-family": "Nunito",
                    "font-weight": 400,
                    "font-size": "14px",
                    color: "black",
                  },
                },
              }}
              columns={[
                {
                  name: "De",
                  selector: (message: any) => message.senderName,
                  sortable: false,
                  center: true,
                  id: "senderName",
                },
                {
                  name: "Asunto",
                  selector: (message: any) => message.subject,
                  sortable: false,
                  center: true,
                  id: "subject",
                },
                {
                  name: "Mensaje",
                  selector: (message: any) => message.body,
                  sortable: false,
                  center: true,
                  id: "body",
                },
                {
                  name: "Estado",
                  selector: (message: any) => {
                    return message.seen ? "Leido" : "Pendiente";
                  },
                  sortable: false,
                  center: true,
                  id: "status",
                },
                {
                  selector: (user) => user.email,
                  center: true,
                  id: "edit",
                  cell: (user) => (
                    <SubtitleDashboardTerciary color="primary-hover">
                      Responder
                    </SubtitleDashboardTerciary>
                  ),
                },
              ]}
            ></DataTable>
          </DataTableContainer>
        )}
      </DashboardMainContainer>
    </DashboardPolizasRoot>
  );
}
