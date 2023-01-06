import Link from "next/link";
import { StyledSearchBig } from "../../ui/icons";
import { InputWithIcon } from "../../ui/input";
import { InputOutlined } from "../../ui/input/styled";
import {
  DashboardMainContainer,
  DashboardMainFiltersContainer,
  DashboardMainFiltersLeft,
  DashboardPolizasHeaderContainer,
  DashboardPolizasRoot,
  ExportTitle,
  SubtitleDashboardPrimary,
  SubtitleDashboardSecondary,
  SubtitleDashboardTerciary,
} from "./styled";
import DataTable from "react-data-table-component";
import { useRouter } from "next/router";
import { getUserBO } from "../../lib/api";
import { useGetPolicyCars, usePaginationPolicies } from "../../lib/hooks";
import { useEffect } from "react";

export function DashboardPolicies() {
  const router = useRouter();
  const userBO = getUserBO();
  const { data, error, isLoading, setQuery }: any = usePaginationPolicies();

  function handleOnRowClicked(row: any) {
    router.push(`/dashboard/polizas/${row.id}`);
  }

  const handleOnChangePage = (page: any) => {
    setQuery.setPage(page);
  };

  return (
    <DashboardPolizasRoot>
      <DashboardPolizasHeaderContainer>
        <SubtitleDashboardPrimary>Hola!</SubtitleDashboardPrimary>
        <Link href="/dashboard/polizas">
          <SubtitleDashboardTerciary active={true}>
            Pólizas
          </SubtitleDashboardTerciary>
        </Link>
        <Link href="/dashboard/mensajes">
          <SubtitleDashboardTerciary>Mensajes</SubtitleDashboardTerciary>
        </Link>
      </DashboardPolizasHeaderContainer>

      <DashboardMainContainer>
        <SubtitleDashboardSecondary color="primary">
          Listado de Pólizas
        </SubtitleDashboardSecondary>
        <DashboardMainFiltersContainer>
          <DashboardMainFiltersLeft>
            <InputWithIcon
              name="search"
              placeholder="BUSCAR"
              Icon={StyledSearchBig}
            ></InputWithIcon>
            <InputOutlined placeholder="Estado de poliza"></InputOutlined>
            <InputOutlined placeholder="Fecha"></InputOutlined>
          </DashboardMainFiltersLeft>
          <ExportTitle>Exportar listado</ExportTitle>
        </DashboardMainFiltersContainer>
        {data && (
          <DataTable
            sortServer
            paginationServer
            pagination
            striped
            data={data.rows}
            paginationComponentOptions={{
              rowsPerPageText: "Polizas por pagina",
              rangeSeparatorText: "De",
              selectAllRowsItemText: "Todas",
              selectAllRowsItem: true,
            }}
            noDataComponent={
              <div className="p-3">
                <b>No se encontraron polizas</b>
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
            onRowClicked={handleOnRowClicked}
            onChangePage={handleOnChangePage}
            paginationRowsPerPageOptions={[10]}
            paginationTotalRows={data.totalRows}
            // paginationDefaultPage={1}
            // onChangeRowsPerPage={pagingController.handleRecordsPerPageChange}
            // paginationPerPage={parseInt(
            //   pagingController.query.perpage || 10,
            //   10
            // )}

            columns={[
              {
                name: "Nombre",
                selector: (policy) => policy.name,
                sortable: false,
                center: true,
                id: "nombre",
              },
              {
                name: "Nº Seguimiento",
                selector: (policy) => policy.trackingPolicyNumber,
                sortable: false,
                center: true,
                id: "seguimiento",
              },
              {
                name: "Mail",
                selector: (policy) => policy.email,
                sortable: false,
                center: true,
                id: "mail",
              },
              {
                name: "Estado",
                selector: (policy) => policy.status,
                sortable: false,
                center: true,
                id: "estado",
                style: {
                  "font-weight": "700",
                },
                conditionalCellStyles: [
                  {
                    when: (policy) => policy.status === "Rechazada",
                    style: {
                      color: "red",
                    },
                  },
                  {
                    when: (policy) => policy.status === "Aprobada",
                    style: {
                      color: "#4145FB",
                    },
                  },
                ],
              },
              {
                name: "Fecha",
                selector: (policy) => policy.date,
                sortable: false,
                center: true,
                id: "fecha",
              },
              {
                name: "Nº Póliza",
                selector: (policy) => policy.policyNumber,
                sortable: false,
                center: true,
                id: "poliza",
                style: {
                  "font-weight": "700",
                },
              },
            ]}
          ></DataTable>
        )}
      </DashboardMainContainer>
    </DashboardPolizasRoot>
  );
}
