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
      chasisNumber: 0,
      engineNumber: 0,
      patentPending: false,
    },
    userData: {
      userFullName: "",
      dni: 0,
      address: "",
      zipCode: 0,
      email: "",
      phone: 0,
      iva: "",
    },
    pictures: {},
    paymentData: {
      cardNumber: 0,
      carOwnerFullName: "",
      cardExpiration: "",
      cvv: 0,
    },
  },
});
