import { ContactContentComponent } from "./content";
import { ContactSendMailComponent } from "./send-mail";
import { ContactPageRoot } from "./styled";

export function ContactPage() {
  return (
    <ContactPageRoot>
      <ContactContentComponent />
      <ContactSendMailComponent />
    </ContactPageRoot>
  );
}
