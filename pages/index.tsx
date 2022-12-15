import { HomePage } from "../components/home-page";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout type="big" showFooterMobile>
      <HomePage />
    </Layout>
  );
}
