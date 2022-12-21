# ContactPopUpComponent

- showSendMail ? (linea 58)

Lo que es true y false pueden ser sub-componentes porque cada uno va a tratar un tema especifico

Uno mandaria un email y ESE componente tiene que hacerse cargo de esa tarea

El otro es informativo y tiene 2 clicks para atencion y ws

# faq

Todas las preguntas podrian ir en un array de objetos y hacer un .map dentro, principalmente por una cuestion de orden si en algun momento de la historia se quieren agregar/restar o hacer modificaciones.

# home

Lo mismo que en faq pero con los iconos por ejemplo en el carrousel. hacer un array de componentes y que los renderice =>

```tsx
const iconComponents = [
    <HomeSancorIcon />,
    <HomeSancorIcon />,
    <HomeSancorIcon />,
    <HomeSancorIcon />,
    <HomeSancorIcon />,
    <HomeSancorIcon />,
  ];
  ...
   <CarouselComponent
                cellAlign="center"
                autoplay={true}
                wrapAround={true}
                slidesToShow={3}
              >
                {iconComponents.map((iconComponent) => {
                  return (
                    <HomeAboutCarouselSlide>
                      {iconComponent}
                    </HomeAboutCarouselSlide>
                  );
                })}
              </CarouselComponent>

```

Estuve viendo que el onClick por ejemplo no funciona, se soluciona agregando en IconProps un onClick y en cada svg agregar un onCLick que reciba de prop y que lo meta dentro de cada tag <svg> quedando algo asi

```js
export const InstagramSVGIcon = ({ className, onClick }: any) => {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
      // ERA MUY LARGO
      />
    </svg>
  );
};
```

subcomponetizar todo. Es decir, que el main sea un componente, el about otro, asi como esta escrito, pero que sea otro comp.

```tsx
export function HomeMain() {
  return (
    <Container>
      <HomeMainLogoContainer>
        <HomeMainCarMobileContainer>
          <StyledCarMobile />
        </HomeMainCarMobileContainer>
        <HomeMainCarDesktopContainer>
          <StyledCarDesktop />
        </HomeMainCarDesktopContainer>
      </HomeMainLogoContainer>
      <HomeMainTextContainer>
        <HomeMainQuearLogoContainer>
          <StyledQuearBigLogo width="220px" height="85px" />
        </HomeMainQuearLogoContainer>
        <HomeTitle>¡Hacé todo online!</HomeTitle>
        <HomeSubTitle>
          Cotizá y comprá el mejor seguro para tu auto.
        </HomeSubTitle>
        <HomeButton variant="light">COTIZAR</HomeButton>
      </HomeMainTextContainer>
    </Container>
  );
}
```

Y aplicar los estilos que ahora estan en HomeMain al <Container> en su HomeMain.styled.tsx
