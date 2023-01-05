import { atom } from "recoil";

export const userCotizaData = atom({
  key: "userCotizaData",
  default: {
    patent: 0,
    carBrandId: 0,
    carModelId: 0,
    carVersionId: 0,
    doors: 0,
    gnc: false,
    locator: false,
    sleep: "",
    userAddress: {},
    userAge: {},
  },
});
export const userHireData = atom({
  key: "userHireData",
  default: {
    policy: {
      company: "",
      fee: 0,
      total: 0,
      type: "",
    },
    carInfo: {
      "Número de chasis": 0,
      "Número de motor": 0,
      "Patente en trámite": "",
    },
    userData: {
      "Confirmar email": "",
      "Código postal": "",
      Dirección: "",
      Dni: "",
      Email: "",
      "Nombre y apellido": "",
      "Situación ante IVA": "",
      Teléfono: "",
    },
    pictures: {},
  },
});
