import {
  StyledInstagram,
  StyledLinkedin,
  StyledTwitter,
} from "../../../ui/icons";
import { FooterContainerIcon, FooterContainerSocialMedia } from "./styled";

export function FooterSocialMediaComponent() {
  return (
    <FooterContainerSocialMedia>
      <FooterContainerIcon>
        <StyledInstagram />
      </FooterContainerIcon>
      <FooterContainerIcon>
        <StyledLinkedin />
      </FooterContainerIcon>
      <FooterContainerIcon>
        <StyledTwitter />
      </FooterContainerIcon>
    </FooterContainerSocialMedia>
  );
}
