import { InputOutlined } from "../../../../ui/input/styled";
import { SubtitleSecondary } from "../../../../ui/text";
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

interface props {
  toggle: () => any;
}

export function PopUpNewUser({ toggle }: props) {
  return (
    <PopUpNewUserBack>
      <PopUpNewUserRoot>
        <PopUpHeader>
          <PopUpTitle color="primary">NUEVO USUARIO</PopUpTitle>
        </PopUpHeader>
        <PopUpOptionCointainer>
          <SubtitleSecondary>Tipo de usuario</SubtitleSecondary>
          <PopUpTypeContainer>
            <ButtonType>Gestor</ButtonType>
            <ButtonType>Administrador</ButtonType>
          </PopUpTypeContainer>
        </PopUpOptionCointainer>
        <PopUpOptionsCointainer>
          <PopUpOptionCointainer>
            <SubtitleSecondary>Nombre</SubtitleSecondary>
            <InputOutlined></InputOutlined>
          </PopUpOptionCointainer>
          <PopUpOptionCointainer>
            <SubtitleSecondary>Apellido</SubtitleSecondary>
            <InputOutlined></InputOutlined>
          </PopUpOptionCointainer>
          <PopUpOptionCointainer>
            <SubtitleSecondary>DNI</SubtitleSecondary>
            <InputOutlined></InputOutlined>
          </PopUpOptionCointainer>
          <PopUpOptionCointainer>
            <SubtitleSecondary>Fecha de nacimiento</SubtitleSecondary>
            <InputOutlined></InputOutlined>
          </PopUpOptionCointainer>
          <PopUpOptionCointainer>
            <SubtitleSecondary>Mail</SubtitleSecondary>
            <InputOutlined></InputOutlined>
          </PopUpOptionCointainer>
        </PopUpOptionsCointainer>
        <PopUpButtonsContainer>
          <PopUpButtonPrimary variant={"dark"} onClick={toggle}>
            Agregar
          </PopUpButtonPrimary>
          <PopUpButtonOutlined onClick={toggle}>Cancelar</PopUpButtonOutlined>
        </PopUpButtonsContainer>
      </PopUpNewUserRoot>
    </PopUpNewUserBack>
  );
}
