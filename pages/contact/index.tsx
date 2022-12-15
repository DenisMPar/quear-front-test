import { ContactPage } from "../../components/contact-page";
import { Footer } from "../../components/footer";
import { HeaderDestkop } from "../../components/header/header-desktop";
import { Layout } from "../../components/layout";

export default function Contact() {
  return (
    <Layout footerTopLine type="small">
      <ContactPage></ContactPage>
    </Layout>
  );
}
