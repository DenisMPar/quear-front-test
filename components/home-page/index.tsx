import { HomeAboutComponent } from "./about";
import { HomeMainComponent } from "./main";
import { HomeAboutBackground, HomeMainBackground, HomeRoot } from "./styled";

export function HomePage() {
  return (
    <HomeRoot>
      <HomeMainBackground>
        <HomeMainComponent />
      </HomeMainBackground>
      <HomeAboutBackground>
        <HomeAboutComponent />
      </HomeAboutBackground>
    </HomeRoot>
  );
}
