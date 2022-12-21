import { useTransition } from "react-spring";
import { StyledClose, StyledHamburguer, StyledSearchBig } from "../../ui/icons";
import { SidebarMenuComponent } from "./menu";
import {
  SideBarContainer,
  SideBarHamburguerContainer,
  SideBarHeader,
  SideBarIconContainer,
} from "./styled";

type props = {
  show: boolean;
  toggle: () => void;
  toggleContact: () => void;
};

export const SideBarComponent = (props: props) => {
  const menuTranstition = useTransition(props.show, {
    from: { opacity: 0, left: `-100%` },
    enter: { opacity: 1, left: `0` },
    leave: { opacity: 0, left: `-100%` },
  });

  return (
    <>
      {menuTranstition((style, show) =>
        show ? (
          <SideBarContainer style={style} onClick={props.toggle}>
            <SideBarHeader>
              <StyledClose color="bg" width="26px" height="26px" />
            </SideBarHeader>
            <SideBarIconContainer>
              <StyledSearchBig width="47px" height="44px" />
            </SideBarIconContainer>
            <SidebarMenuComponent toggleContact={props.toggleContact} />
          </SideBarContainer>
        ) : (
          <SideBarHamburguerContainer onClick={props.toggle}>
            <StyledHamburguer />
          </SideBarHamburguerContainer>
        )
      )}
    </>
  );
};
