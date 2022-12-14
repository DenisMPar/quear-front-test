import Image from "next/image";
import { StyledInstagram, StyledLinkedin, StyledTwitter } from "../../ui/icons";
import {
  FooterContainerMain,
  FooterContainerQr,
  FooterContainerSocialMedia,
  FooterContainerText,
  FooterContainerTextAndLink,
  FooterLink,
  FooterRoot,
  FooterText,
} from "./styled";

interface Props {
  showFooterMobile: boolean;
}

export function Footer(props: Props) {
  return (
    <FooterRoot showFooterMobile={props.showFooterMobile}>
      <FooterContainerQr>
        <Image
          width={38}
          height={54}
          src={"/data-fiscal.png"}
          alt="Data-fiscal-logo"
        ></Image>
      </FooterContainerQr>
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
          <FooterLink href="https://www.argentina.gob.ar/ssn">
            Organismo de control www.argentina.gob.ar/ssn
          </FooterLink>
        </FooterContainerTextAndLink>
      </FooterContainerMain>
      <FooterContainerSocialMedia>
        <StyledInstagram />
        <StyledLinkedin />
        <StyledTwitter />
      </FooterContainerSocialMedia>
    </FooterRoot>
  );
}
