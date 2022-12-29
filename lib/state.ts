import { atom } from "recoil";

export const userCotizaData = atom({
  key: "userCotizaData",
  default: {
    carBrandId: 0,
    carModelId: 0,
    carVersionId: 0,
    doors: 0,
    gnc: false,
    locator: false,
    sleep: "",
  },
});
