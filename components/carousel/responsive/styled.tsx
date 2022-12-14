import styled from "@emotion/styled";

// export const CarouselContainerTiny = styled.div`
//   display: block;
//   @media screen and (min-width: 390px) {
//     display: none;
//   }
// `;
export const CarouselContainerSmall = styled.div`
  display: block;

  @media screen and (min-width: 690px) {
    display: none;
  }
`;
export const CarouselContainerMedium = styled.div`
  display: none;
  @media screen and (min-width: 690px) {
    display: block;
  }
  @media screen and (min-width: 890px) {
    display: none;
  }
`;
export const CarouselContainerLarge = styled.div`
  display: none;
  @media screen and (min-width: 890px) {
    display: block;
  }
  @media screen and (min-width: 1190px) {
    display: none;
  }
`;
export const CarouselContainerExtraLarge = styled.div`
  display: none;

  @media screen and (min-width: 1190px) {
    display: block;
  }
`;
