import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { fetchDashboadNewUser } from "../../../services/back-office";
import { InputOutlined } from "../../../ui/input/styled";
import { SubtitleSecondary } from "../../../ui/text";
import {
  ButtonType,
  PopUpButtonOutlined,
  PopUpButtonPrimary,
  PopUpButtonsContainer,
  PopUpHeader,
  PopUpNewUserBack,
  PopUpNewUserRoot,
  PopUpOptionCointainer,
  PopUpOptionsCointainer,
  PopUpTitle,
  PopUpTypeContainer,
} from "./styled";
import SweetAlert from "sweetalert2";

interface props {
  toggle: () => any;
}

export function PopUpNewUser({ toggle }: props) {
  const [errorMessage, setErrorMessage] = useState("");
  const [clickedGestor, setClickedGestor] = useState(false);
  const [clickedAdmin, setClickedAdmin] = useState(false);
  const { handleSubmit, reset, setValue, control } = useForm();

  function handleOnClickType(e: any) {
    if (e.target.innerHTML === "Administrador") {
      setClickedAdmin(true);
      setClickedGestor(false);
    } else {
      setClickedAdmin(false);
      setClickedGestor(true);
    }
  }

  async function handleForm(data: any) {
    clickedGestor ? (data.type = "Gestor") : (data.type = "Administrador");
    data.dni = parseInt(data.dni);
    const auth = await fetchDashboadNewUser(data);
    console.log(auth);
    if (auth.success) {
      toggle();
    } else {
      SweetAlert.fire({
        title: `Error al crear el usuario`,
        text: `${auth.message}`,
        icon: "warning",
        confirmButtonColor: "#bf0d3e",
        showConfirmButton: true,
      });
    }
  }

  return (
    <PopUpNewUserBack>
      <PopUpNewUserRoot>
        <PopUpHeader>
          <PopUpTitle color="primary">NUEVO USUARIO</PopUpTitle>
        </PopUpHeader>
        <PopUpOptionCointainer>
          <SubtitleSecondary>Tipo de usuario</SubtitleSecondary>
          <PopUpTypeContainer>
            <ButtonType clicked={clickedGestor} onClick={handleOnClickType}>
              Gestor
            </ButtonType>
            <ButtonType clicked={clickedAdmin} onClick={handleOnClickType}>
              Administrador
            </ButtonType>
          </PopUpTypeContainer>
        </PopUpOptionCointainer>
        <PopUpOptionsCointainer onSubmit={handleSubmit(handleForm)}>
          <Controller
            name="name"
            control={control}
            render={({ field }: any) => (
              <PopUpOptionCointainer {...field}>
                <SubtitleSecondary>Nombre</SubtitleSecondary>
                <InputOutlined></InputOutlined>
              </PopUpOptionCointainer>
            )}
          ></Controller>
          <Controller
            name="lastName"
            control={control}
            render={({ field }: any) => (
              <PopUpOptionCointainer {...field}>
                <SubtitleSecondary>Apellido</SubtitleSecondary>
                <InputOutlined></InputOutlined>
              </PopUpOptionCointainer>
            )}
          ></Controller>
          <Controller
            name="dni"
            control={control}
            render={({ field }: any) => (
              <PopUpOptionCointainer {...field}>
                <SubtitleSecondary>DNI</SubtitleSecondary>
                <InputOutlined></InputOutlined>
              </PopUpOptionCointainer>
            )}
          ></Controller>
          <Controller
            name="email"
            control={control}
            render={({ field }: any) => (
              <PopUpOptionCointainer {...field}>
                <SubtitleSecondary>Mail</SubtitleSecondary>
                <InputOutlined></InputOutlined>
              </PopUpOptionCointainer>
            )}
          ></Controller>
          <Controller
            name="birthday"
            control={control}
            render={({ field }: any) => (
              <PopUpOptionCointainer {...field}>
                <SubtitleSecondary>Fecha de nacimiento</SubtitleSecondary>
                <InputOutlined type={"date"}></InputOutlined>
              </PopUpOptionCointainer>
            )}
          ></Controller>
          <div></div>
          <PopUpButtonsContainer>
            <PopUpButtonPrimary variant={"dark"}>Agregar</PopUpButtonPrimary>
            <PopUpButtonOutlined type={"reset"} onClick={toggle}>
              Cancelar
            </PopUpButtonOutlined>
          </PopUpButtonsContainer>
        </PopUpOptionsCointainer>
      </PopUpNewUserRoot>
    </PopUpNewUserBack>
  );
}
