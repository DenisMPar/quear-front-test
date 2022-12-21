import Image from "next/image";
import {
  FooterContainerMain,
  FooterContainerText,
  FooterContainerTextAndLink,
  FooterLink,
  FooterText,
} from "./styled";

export function FooterMainComponent() {
  return (
    <FooterContainerMain>
      <Image
        width={201}
        height={29}
        src={"/super-intendencia.png"}
        alt="Super-intendencia-logo"
      ></Image>
      <FooterContainerTextAndLink>
        <FooterContainerText>
          <FooterText>Nº de Inscripción en SSN Registro Nº XXX</FooterText>
          <FooterText>Atención al asegurado XXX-XXX-XXX</FooterText>
        </FooterContainerText>
        <FooterLink href="https://www.argentina.gob.ar/ssn" target="_blank">
          Organismo de control www.argentina.gob.ar/ssn
        </FooterLink>
      </FooterContainerTextAndLink>
    </FooterContainerMain>
  );
}
