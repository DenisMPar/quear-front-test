import Link from "next/link";
import { StyledSearchBig } from "../../../ui/icons";
import { InputWithIcon } from "../../../ui/input";
import { InputOutlined } from "../../../ui/input/styled";
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

const data = [
  {
    id: "1",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "4855753164394336",
    date: "2022-12-27",
    status: "Rechazada",
    name: "Matias Toledo",
    email: "mati@gmail.com",
    trackingCode: "CBX6WK",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-27T18:58:01.375Z",
    updatedAt: "2022-12-27T18:58:01.375Z",
    userCarId: "1",
  },
  {
    id: "2",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "362399053145211",
    date: "2022-12-30",
    status: "Pendiente",
    name: "Tamra Toledo",
    email: "tami@gmail.com",
    trackingCode: "CBX6WK",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:32:01.033Z",
    updatedAt: "2022-12-30T13:32:01.033Z",
    userCarId: "1",
  },
  {
    id: "3",
    policyNumber: "58151971334",
    trackingPolicyNumber: "2878525750177781",
    date: "2022-12-30",
    status: "Aprobada",
    name: "Maxi Nuñez",
    email: "maxinunez@gmail.com",
    trackingCode: "CBX6WK",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:32:03.147Z",
    updatedAt: "2022-12-30T13:32:03.147Z",
    userCarId: "1",
  },
  {
    id: "4",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "577881779035968",
    date: "2022-12-30",
    status: "Pendiente",
    name: "Juan Gaitan",
    email: "juangaitan@gmail.com",
    trackingCode: "CBX6WK",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:32:04.215Z",
    updatedAt: "2022-12-30T13:32:04.215Z",
    userCarId: "1",
  },
  {
    id: "5",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "8620283113474805",
    date: "2022-12-30",
    status: "Pendiente",
    name: "Priscila Salto",
    email: "prisalto@gmail.com",
    trackingCode: "CBX6WK",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:32:04.739Z",
    updatedAt: "2022-12-30T13:32:04.739Z",
    userCarId: "1",
  },
  {
    id: "6",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "9526985062560868",
    date: "2022-12-30",
    status: "Rechazada",
    name: "Julia Castillo",
    email: "juliacastillo@gmail.com",
    trackingCode: "RVUHAR",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:33:32.125Z",
    updatedAt: "2022-12-30T13:33:32.125Z",
    userCarId: "3",
  },
  {
    id: "7",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "2455063496800340",
    date: "2022-12-30",
    status: "Pendiente",
    name: "Ramiro Saravia",
    email: "ramirosaravia@gmail.com",
    trackingCode: "RVUHAR",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:33:33.521Z",
    updatedAt: "2022-12-30T13:33:33.521Z",
    userCarId: "3",
  },
  {
    id: "8",
    policyNumber: "58151971334",
    trackingPolicyNumber: "4062711079359865",
    date: "2022-12-30",
    status: "Aprobada",
    name: "Martin Robins",
    email: "mrobins@gmail.com",
    trackingCode: "RVUHAR",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:57:08.631Z",
    updatedAt: "2022-12-30T13:57:08.631Z",
    userCarId: "3",
  },
  {
    id: "9",
    policyNumber: "58151971335",
    trackingPolicyNumber: "681147144071004",
    date: "2022-12-30",
    status: "Aprobada",
    name: "Facundo Nuñez",
    email: "facununez@gmail.com",
    trackingCode: "RVUHAR",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:57:09.176Z",
    updatedAt: "2022-12-30T13:57:09.176Z",
    userCarId: "3",
  },
  {
    id: "10",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "1742994661628916",
    date: "2022-12-30",
    status: "Pendiente",
    name: "Lionel Messi",
    email: "lionel10messi@gmail.com",
    trackingCode: "RVUHAR",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:57:09.766Z",
    updatedAt: "2022-12-30T13:57:09.766Z",
    userCarId: "3",
  },
  {
    id: "11",
    policyNumber: "Pendiente",
    trackingPolicyNumber: "1742994661628916",
    date: "2022-12-30",
    status: "Pendiente",
    name: "Lionel Messi",
    email: "lionel10messi@gmail.com",
    trackingCode: "RVUHAR",
    seen: false,
    type: "Todo riesgo",
    createdAt: "2022-12-30T13:57:09.766Z",
    updatedAt: "2022-12-30T13:57:09.766Z",
    userCarId: "3",
  },
];

export function DashboardPolizas() {
  const router = useRouter();
  function handleOnRowClicked(row: any) {
    router.push(`/dashboard/polizas/${row.id}`);
  }

  return (
    <DashboardPolizasRoot>
      <DashboardPolizasHeaderContainer>
        <SubtitleDashboardPrimary>Hola Federico!</SubtitleDashboardPrimary>
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

        <DataTable
          paginationComponentOptions={{
            rowsPerPageText: "Polizas por pagina",
            rangeSeparatorText: "De",
            selectAllRowsItemText: "Todas",
          }}
          onRowClicked={handleOnRowClicked}
          data={data}
          noDataComponent={
            <div className="p-3">
              <b>No se encontraron polizas</b>
            </div>
          }
          pagination
          striped
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
      </DashboardMainContainer>
    </DashboardPolizasRoot>
  );
}
