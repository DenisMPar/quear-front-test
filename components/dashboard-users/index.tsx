import { StyledSearchBig } from "../../ui/icons";
import { InputWithIcon } from "../../ui/input";
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
import { ButtonOutlined, ButtonPrimary } from "../../ui/buttons/styled";
import { useState } from "react";
import { PopUpNewUser } from "./new-user";
import { usePaginationUserBo } from "../../lib/hooks";
import { DashboardInputOutlined } from "../dashboard-policies/styled";
import { PopUpEditUser } from "./edit-user";

export function DashboardUsers() {
  const [newUser, setNewUser] = useState(false);
  const [editUser, setEditUser] = useState(false);
  const [userToEdit, setUserToEdit] = useState(null);
  const { data, error, isLoading, setQuery }: any = usePaginationUserBo();

  function toggleNewUser() {
    setNewUser(!newUser);
  }

  function toggleEditUser(user: any) {
    setUserToEdit(user);
    setEditUser(!editUser);
  }

  const handleOnChangeQuery = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      setQuery.setQ(e.target.value);
      e.target.value = "";
    }
  };

  const handleOnChangePage = (page: any) => {
    setQuery.setPage(page);
  };

  return (
    <DashboardPolizasRoot>
      {newUser && <PopUpNewUser toggle={toggleNewUser} />}
      {editUser && <PopUpEditUser toggle={toggleEditUser} user={userToEdit} />}
      <DashboardPolizasHeaderContainer>
        <SubtitleDashboardPrimary>Usuarios</SubtitleDashboardPrimary>
      </DashboardPolizasHeaderContainer>

      <DashboardMainContainer>
        <SubtitleDashboardSecondary color="primary">
          Listado de Usuarios
        </SubtitleDashboardSecondary>
        <DashboardMainFiltersContainer>
          <DashboardInputOutlined
            placeholder="Buscar"
            onKeyDown={handleOnChangeQuery}
          ></DashboardInputOutlined>
          <ButtonPrimary onClick={toggleNewUser} variant="dark">
            Agregar Nuevo Usuario +
          </ButtonPrimary>
        </DashboardMainFiltersContainer>
        <DataTable
          data={data.rows}
          sortServer
          paginationServer
          paginationTotalRows={data.totalRows}
          paginationRowsPerPageOptions={[10]}
          pagination
          onChangePage={handleOnChangePage}
          striped
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
                height: "65px",
              },
            },
          }}
          columns={[
            {
              name: "Nombre",
              selector: (user: any) => user.name,
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
              cell: (user) => (
                <DashboradButtonEdit onClick={() => toggleEditUser(user)}>
                  Editar
                </DashboradButtonEdit>
              ),
            },
          ]}
        ></DataTable>
      </DashboardMainContainer>
    </DashboardPolizasRoot>
  );
}
