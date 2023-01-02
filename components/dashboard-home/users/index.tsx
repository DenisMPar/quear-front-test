import { StyledSearchBig } from "../../../ui/icons";
import { InputWithIcon } from "../../../ui/input";
import {
  DashboardMainContainer,
  DashboardMainFiltersContainer,
  DashboardPolizasHeaderContainer,
  DashboardPolizasRoot,
  DashboradButtonEdit,
  SubtitleDashboardPrimary,
  SubtitleDashboardSecondary,
} from "./styled";
import DataTable from "react-data-table-component";
import { ButtonOutlined, ButtonPrimary } from "../../../ui/buttons/styled";
import { useState } from "react";
import { PopUpNewUser } from "./new-user";

const data = [
  {
    id: "1",
    email: "matias.toledo.nicolas@yahoo.com",
    name: "Matias",
    lastName: "Toledo",
    dni: 40300200,
    birthday: "1997-03-01",
    type: "gestor",
    token: null,
    createdAt: "2022-12-30T15:02:00.674Z",
    updatedAt: "2022-12-30T15:02:00.674Z",
  },
  {
    id: "2",
    email: "matias.toledo@yahoo.com",
    name: "Matias",
    lastName: "Toledo",
    dni: 40300200,
    birthday: "1997-03-01",
    type: "gestor",
    token: null,
    createdAt: "2022-12-30T15:02:11.634Z",
    updatedAt: "2022-12-30T15:02:11.634Z",
  },
  {
    id: "3",
    email: "matias.toledo@gmail.com",
    name: "Matias",
    lastName: "Toledo",
    dni: 40300200,
    birthday: "1997-03-01",
    type: "gestor",
    token: null,
    createdAt: "2022-12-30T15:02:15.832Z",
    updatedAt: "2022-12-30T15:02:15.832Z",
  },
  {
    id: "4",
    email: "tamara.toledo@gmail.com",
    name: "Matias",
    lastName: "Toledo",
    dni: 40300200,
    birthday: "1997-03-01",
    type: "gestor",
    token: null,
    createdAt: "2022-12-30T15:02:19.689Z",
    updatedAt: "2022-12-30T15:02:19.689Z",
  },
];

export function DashboardUsuarios() {
  const [newUser, setNewUser] = useState(false);

  function toggleNewUser() {
    setNewUser(!newUser);
  }

  return (
    <DashboardPolizasRoot>
      {newUser && <PopUpNewUser toggle={toggleNewUser} />}
      <DashboardPolizasHeaderContainer>
        <SubtitleDashboardPrimary>Usuarios</SubtitleDashboardPrimary>
      </DashboardPolizasHeaderContainer>

      <DashboardMainContainer>
        <SubtitleDashboardSecondary color="primary">
          Listado de Usuarios
        </SubtitleDashboardSecondary>
        <DashboardMainFiltersContainer>
          <InputWithIcon
            name="search"
            placeholder="BUSCAR"
            Icon={StyledSearchBig}
          ></InputWithIcon>
          <ButtonPrimary onClick={toggleNewUser} variant="dark">
            Agregar Nuevo Usuario +
          </ButtonPrimary>
        </DashboardMainFiltersContainer>
        <DataTable
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
                height: "65px",
              },
            },
          }}
          columns={[
            {
              name: "Nombre",
              selector: (user) => user.name,
              sortable: false,
              center: true,
              id: "nombre",
            },
            {
              name: "Tipo",
              selector: (user) => user.type,
              sortable: false,
              center: true,
              id: "seguimiento",
            },
            {
              name: "Mail",
              selector: (user) => user.email,
              sortable: false,
              center: true,
              id: "fecha",
            },
            {
              selector: (user) => user.email,
              center: true,
              id: "edit",
              cell: () => <DashboradButtonEdit>Editar</DashboradButtonEdit>,
            },
          ]}
        ></DataTable>
      </DashboardMainContainer>
    </DashboardPolizasRoot>
  );
}
