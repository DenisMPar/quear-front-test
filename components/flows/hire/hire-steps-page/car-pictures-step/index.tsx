import { useState } from "react";
import { useRecoilState } from "recoil";
import { userHireData } from "../../../../../lib/state";
import {
  ButtonOutlined,
  ButtonPrimary,
} from "../../../../../ui/buttons/styled";
import { StyledInfo } from "../../../../../ui/icons";
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

interface FormattedKeys {
  [key: string]: any;
}

export function CarPicturesStepComponent({ handleSelect }: any) {
  const [hireData, setHireData] = useRecoilState(userHireData);
  const [pictures, setPictures] = useState({});
  const [base64, setBase64] = useState({});
  function onSkip() {
    handleSelect("pictures", false);
  }

  function onLoadPicture(file: any, label: string) {
    const formattedKeys: FormattedKeys = {
      Frente: "photoFront",
      Auxilio: "photoSpareWheel",
      "Lado derecho": "photoRight",
      "Lado izquierdo": "photoLeft",
      "Parte trasera": "photoBack",
      Patente: "photoLicensePlate",
    };
    setPictures({ ...pictures, [label]: file.path });
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setBase64({
        ...base64,
        [formattedKeys[label]]: reader.result,
      });
    };
  }
  function onSubmit() {
    setHireData({ ...hireData, pictures: base64 });
    handleSelect("pictures", pictures);
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
        <StepCarPicturesLabel
          onLoad={(file, label) => {
            onLoadPicture(file, label);
          }}
          label="Frente"
          type="small"
        >
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel
          onLoad={(file, label) => {
            onLoadPicture(file, label);
          }}
          label="Lado izquierdo"
          type="small"
        >
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel
          onLoad={(file, label) => {
            onLoadPicture(file, label);
          }}
          label="Lado derecho"
          type="small"
        >
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel
          onLoad={(file, label) => {
            onLoadPicture(file, label);
          }}
          label="Parte trasera"
          type="small"
        >
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel
          onLoad={(file, label) => {
            onLoadPicture(file, label);
          }}
          label="Auxilio"
          type="small"
        >
          Agregar foto
        </StepCarPicturesLabel>
        <StepCarPicturesLabel
          onLoad={(file, label) => {
            onLoadPicture(file, label);
          }}
          label="Patente"
          type="small"
        >
          Agregar foto
        </StepCarPicturesLabel>
      </StepCarPicturesContainerPicturesLabel>
      <StepCarPicturesContainerButtons>
        <ButtonPrimary onClick={onSubmit} variant="dark">
          Continuar
        </ButtonPrimary>
        <ButtonOutlined onClick={onSkip}>Saltar paso</ButtonOutlined>
      </StepCarPicturesContainerButtons>
    </StepCarPicturesContainerMain>
  );
}
