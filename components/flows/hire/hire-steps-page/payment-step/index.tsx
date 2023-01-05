import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { formatMoney } from "../../../../../lib/functions";
import { userHireData } from "../../../../../lib/state";
import { ButtonPrimary } from "../../../../../ui/buttons/styled";
import { StyledCheckedBox, StyledCreditCard } from "../../../../../ui/icons";
import { InputWithIcon } from "../../../../../ui/input";
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
  const { handleSubmit, reset, setValue, control, register } = useForm();

  const [hireData, setHireData] = useRecoilState(userHireData);

  function onSubmit(data: any) {
    console.log(data);
  }
  function toggleTerms() {
    console.log("toggle", checkedTerms);

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
      <StepPaymentForm onSubmit={handleSubmit(onSubmit)} action="">
        <Controller
          render={({ field }: any) => (
            <InputWithIcon
              {...field}
              Icon={StyledCreditCard}
              placeholder="Número de tarjeta"
              ref={null}
            />
          )}
          name="Número de tarjeta"
          control={control}
          rules={{ required: true }}
        />
        <Controller
          render={({ field }: any) => (
            <InputWithIcon
              {...field}
              Icon={StyledCreditCard}
              placeholder="Nombre y apellido del titular"
              ref={null}
            />
          )}
          name="Nombre y apellido del titular"
          control={control}
          rules={{ required: true }}
        />
        <Controller
          render={({ field }: any) => (
            <InputWithIcon
              {...field}
              Icon={StyledCreditCard}
              placeholder="Fecha de caducidad"
              ref={null}
            />
          )}
          name="Fecha de caducidad"
          control={control}
          rules={{ required: true }}
        />
        <Controller
          render={({ field }: any) => (
            <InputWithIcon
              {...field}
              Icon={StyledCreditCard}
              placeholder="CVV"
              ref={null}
            />
          )}
          name="CVV"
          control={control}
          rules={{ required: true }}
        />

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
          {formatMoney(hireData.policy.fee)} por mes
        </StepPaymentPrice>
        <ButtonPrimary disabled={!checkedTerms} type="submit" variant="dark">
          Pagar
        </ButtonPrimary>
      </StepPaymentForm>
    </StepPaymentRoot>
  );
}
