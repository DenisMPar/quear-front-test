import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userCotizaData } from "../../lib/state";
import { ButtonOutlined, ButtonPrimary } from "../../ui/buttons/styled";
import { StyledQuearBigLogoBlue } from "../../ui/icons";
import { InputOutlined } from "../../ui/input/styled";
import { StepBackComponent } from "./step-back";
import {
  CotizaBackground,
  CotizaContainerInputs,
  CotizaContainerLogo,
  CotizaContainerMain,
  CotizaContainerTitle,
  CotizaForm,
  CotizaRoot,
  CotizaTitle,
} from "./styled";

export function CotizaPage() {
  const [cotizaData, setCotizaData] = useRecoilState(userCotizaData);
  const router = useRouter();
  const { handleSubmit, register, reset, setValue, control, formState } =
    useForm();
  function onSubmit(data: any) {
    console.log(data);
    setCotizaData({ ...cotizaData, patent: data.patent });
    router.push("/cotiza/steps");
  }
  return (
    <CotizaBackground>
      <CotizaRoot>
        <StepBackComponent href="/" />
        <CotizaContainerMain>
          <CotizaContainerTitle>
            <CotizaTitle>
              Ingresá la patente de tu auto para comenzar la cotización
            </CotizaTitle>
          </CotizaContainerTitle>
          <CotizaContainerInputs>
            <CotizaForm onSubmit={handleSubmit(onSubmit)}>
              <InputOutlined
                {...register("patent", {
                  required: true,
                })}
                placeholder="Ingresar patente"
              />
              {formState.errors.patent ? (
                <span>Ingresa la patente para continuar</span>
              ) : null}
              <ButtonPrimary variant="dark">Continuar</ButtonPrimary>
            </CotizaForm>
            <Link href={"/cotiza/steps"}>
              <ButtonOutlined>Cotizar sin patente</ButtonOutlined>
            </Link>
          </CotizaContainerInputs>
        </CotizaContainerMain>
        <CotizaContainerLogo>
          <StyledQuearBigLogoBlue />
        </CotizaContainerLogo>
      </CotizaRoot>
    </CotizaBackground>
  );
}
