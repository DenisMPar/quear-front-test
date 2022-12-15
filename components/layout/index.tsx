import { Footer } from "../footer";
import { HeaderDestkop } from "../header/header-desktop";
import { HeaderMobile } from "../header/headerMobile";

type Props = {
  children?: React.ReactNode;
  showFooterMobile?: boolean;
  type: "small" | "big";
  footerTopLine?: boolean;
};
export const Layout: React.FC<Props> = ({
  children,
  showFooterMobile,
  type,
  footerTopLine,
}: Props) => {
  return (
    <div>
      <HeaderDestkop />
      <HeaderMobile type={type} />
      {children}
      <Footer
        topLine={footerTopLine}
        showFooterMobile={showFooterMobile}
      ></Footer>
    </div>
  );
};
