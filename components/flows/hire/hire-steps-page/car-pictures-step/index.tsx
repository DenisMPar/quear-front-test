import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import {
  ButtonOutlined,
  ButtonPrimary,
} from "../../../../../ui/buttons/styled";
import { StyledInfo } from "../../../../../ui/icons";
import { AddLabel } from "../../../../../ui/label/add-label";
import { BodyTerciary } from "../../../../../ui/text";
import {
  StepCarPicturesContainerButtons,
  StepCarPicturesContainerInfo,
  StepCarPicturesContainerMain,
  StepCarPicturesContainerPicturesLabel,
  StepCarPicturesContainerTitle,
  StepCarPicturesLabel,
  StepCarPicturesSubTitle,
  StepCarPicturesTitle,
} from "./styled";

export function CarPicturesStepComponent({ handleSelect }: any) {
  const { handleSubmit, reset, setValue, control } = useForm();
  const { brandNames, brandWithId } = useGetCarBrand();
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  function onSelect(key: string, value: any) {
    const element = brandWithId.find((el) => {
      return el.nombre == value;
    });

    element &&
      setCotizaData({ ...cotizaData, carBrandId: parseInt(element.id) });
    handleSelect(key, value);
  }
  return (
    <StepCarPicturesContainerMain>
      <StepCarPicturesContainerTitle>
        <StepCarPicturesTitle>
          ¡Vamos a necesitar unas <b>fotos del auto!</b>
        </StepCarPicturesTitle>
        <StepCarPicturesSubTitle>
          Perfiles: Frente, lado izquierdo, lado derecho, parte trasera, rueda
          de auxilio y patente.
        </StepCarPicturesSubTitle>
      </StepCarPicturesContainerTitle>
      <StepCarPicturesContainerInfo>
        <StyledInfo width="40px" height="40px" />
        <BodyTerciary>
          Si no tenes fotos de tu auto en este momento, no te hagas problema.
          Podes saltear este paso y subir las fotos en otro momento.
        </BodyTerciary>
      </StepCarPicturesContainerInfo>
      <StepCarPicturesContainerPicturesLabel>
        <StepCarPicturesLabel label="Frente" type="small">
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel label="Lado izquierdo" type="small">
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel label="Lado derecho" type="small">
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel label="Parte trasera" type="small">
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel label="Auxilio" type="small">
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel label="Patente" type="small">
          Agregar foto
        </StepCarPicturesLabel>
      </StepCarPicturesContainerPicturesLabel>
      <StepCarPicturesContainerButtons>
        <ButtonPrimary variant="dark">Continuar</ButtonPrimary>
        <ButtonOutlined>Saltar paso</ButtonOutlined>
      </StepCarPicturesContainerButtons>
    </StepCarPicturesContainerMain>
  );
}
