import Image from "next/image";
import { FooterMainComponent } from "./main";
import { FooterSocialMediaComponent } from "./social-media";
import { FooterBackground, FooterContainerQr, FooterRoot } from "./styled";

interface Props {
  showFooterMobile?: boolean;
  topLine?: boolean;
}

export function Footer(props: Props) {
  return (
    <FooterRoot
      topLine={props.topLine}
      showFooterMobile={props.showFooterMobile}
    >
      <FooterBackground>
        <FooterContainerQr>
          <Image
            width={38}
            height={54}
            src={"/data-fiscal.png"}
            alt="Data-fiscal-logo"
          ></Image>
        </FooterContainerQr>
        <FooterMainComponent />
        <FooterSocialMediaComponent />
      </FooterBackground>
    </FooterRoot>
  );
}
