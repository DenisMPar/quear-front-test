import { InputOutlined } from "../../../../ui/input/styled";
import { SubtitleSecondary } from "../../../../ui/text";
import { DetailFormRoot, FormOptionCointainer } from "./styles";

export function DetailPolicyForm() {
  return (
    <DetailFormRoot>
      <FormOptionCointainer>
        <SubtitleSecondary>Nombre</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Apellido</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>DNI</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Número de Seguimiento</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Fecha de nacimiento</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Direccion donde vive</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Marca del auto</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Año del auto</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Modelo</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Version</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Cantidad de puertas</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
      <FormOptionCointainer>
        <SubtitleSecondary>Tiene localizador</SubtitleSecondary>
        <InputOutlined></InputOutlined>
      </FormOptionCointainer>
    </DetailFormRoot>
  );
}
