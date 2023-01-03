import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { useGetCarBrand } from "../../../../../lib/hooks";
import { userCotizaData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import {
  StyledCalendar,
  StyledCheckedBox,
  StyledCreditCard,
  StyledLock,
  StyledUser,
} from "../../../../../ui/icons";
import { InputWithIcon } from "../../../../../ui/input";
import { InputShadowed } from "../../../../../ui/input/styled";
import { BodyPrimary } from "../../../../../ui/text";
import { SelectComponent } from "../../../../select";
import {
  ContainerChecked,
  ContainerTerms,
  StepPaymentForm,
  StepPaymentPrice,
  StepPaymentRoot,
  StepPaymentSubTitle,
  StepPaymentTitle,
  TermsLink,
} from "./styled";

export function PaymentStepComponent({ handleSelect }: any) {
  const [checkedTerms, setCheckedTerms] = useState(false);
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
  function toggleTerms() {
    setCheckedTerms(!checkedTerms);
  }
  return (
    <StepPaymentRoot>
      <StepPaymentTitle>
        ¿Cómo querés <b>pagar</b> tu seguro?
      </StepPaymentTitle>
      <StepPaymentSubTitle>
        Podes pagar con Visa, Mastercard, Mercado Pago, Naranja o en efectivo.
      </StepPaymentSubTitle>
      <SelectComponent
        variant="app"
        values={["Tarjeta de crédito o débito"]}
        placeHolder="Elegir modo de pago"
        onChange={() => console.log("change")}
      />
      <StepPaymentForm action="">
        <InputWithIcon
          Icon={StyledCreditCard}
          placeholder="Número de tarjeta"
          name="credit car"
        />
        <InputWithIcon
          Icon={StyledUser}
          placeholder="Nombre y Apellido del titular"
          name="name"
        />
        <InputWithIcon
          Icon={StyledCalendar}
          placeholder="Fecha de caducidad"
          name="venc"
        />
        <InputWithIcon Icon={StyledLock} placeholder="CVV" name="ccv" />
        <ContainerTerms>
          <ContainerChecked onClick={toggleTerms}>
            {checkedTerms && <StyledCheckedBox />}
          </ContainerChecked>
          <BodyPrimary>
            Acepto los{" "}
            <TermsLink href="/">
              <b>términos y condiciones</b>
            </TermsLink>
          </BodyPrimary>
        </ContainerTerms>
        <StepPaymentPrice>
          <b>Total a pagar: </b>
          $8.898 por mes
        </StepPaymentPrice>
        <ButtonPrimary variant="dark">Pagar</ButtonPrimary>
      </StepPaymentForm>
    </StepPaymentRoot>
  );
}
