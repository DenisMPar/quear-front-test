export interface DatoPoliza {
  company: string;
  type: string;
  fee: number;
  total: number;
  details: DatosSeguro[];
}
export interface DatosSeguro {
  title: string;
  value: string | boolean;
}
interface DatosUser {
  title: string;
  value: string;
}

export const dataUno: DatosSeguro[] = [
  {
    title: "Reposición 0KM",
    value: false,
  },
  {
    title: "Suma asegurada",
    value: "$1.596.000",
  },
  {
    title: "Indemnizacion",
    value: "Ajuste 5%",
  },
  {
    title: "Facturación",
    value: "Trimestral",
  },
  {
    title: "Responsabilidad civil",
    value: "$23.000.000",
  },
  {
    title: "Perdida total por robo/hurto",
    value: true,
  },
  {
    title: "Perdida total por incendio",
    value: true,
  },
  {
    title: "Daño parcial",
    value:
      "Franquicia porcentual del 5% sobre el valor del 0km, aunque el vehículo asegurado fuera usado.estral",
  },
  {
    title: "Destrucción total por accidente (cláusula 80%)",
    value: true,
  },
  {
    title: "Daño parcial al amparo del robo aparecido",
    value: "Sin franquicia",
  },
  {
    title: "Daño por granizo",
    value: "Sin franquicia",
  },
  {
    title: "Daño por inundación",
    value: "$1.596.000",
  },
];
export const dataDos: DatosSeguro[] = [
  {
    title: "Reposición 0KM",
    value: true,
  },
  {
    title: "Suma asegurada",
    value: "$1.000.000",
  },
  {
    title: "Indemnizacion",
    value: "Ajuste 10%",
  },
  {
    title: "Facturación",
    value: "Trimestral",
  },
  {
    title: "Responsabilidad civil",
    value: "$22.999.999",
  },
  {
    title: "Perdida total por robo/hurto",
    value: true,
  },
  {
    title: "Perdida total por incendio",
    value: false,
  },
  {
    title: "Daño parcial",
    value:
      "Franquicia porcentual del 5% sobre el valor del 0km, aunque el vehículo asegurado fuera usado.estral",
  },
  {
    title: "Destrucción total por accidente (cláusula 80%)",
    value: false,
  },
  {
    title: "Daño parcial al amparo del robo aparecido",
    value: "Sin franquicia",
  },
  {
    title: "Daño por granizo",
    value: "Sin franquicia",
  },
  {
    title: "Daño por inundación",
    value: "$1.000.000",
  },
];
export const dataTres: DatosSeguro[] = [
  {
    title: "Reposición 0KM",
    value: true,
  },
  {
    title: "Suma asegurada",
    value: "$10.000.000",
  },
  {
    title: "Indemnizacion",
    value: "Ajuste 5%",
  },
  {
    title: "Facturación",
    value: "Trimestral",
  },
  {
    title: "Responsabilidad civil",
    value: "$50.000.000",
  },
  {
    title: "Perdida total por robo/hurto",
    value: true,
  },
  {
    title: "Perdida total por incendio",
    value: true,
  },
  {
    title: "Daño parcial",
    value:
      "Franquicia porcentual del 5% sobre el valor del 0km, aunque el vehículo asegurado fuera usado.estral",
  },
  {
    title: "Destrucción total por accidente (cláusula 80%)",
    value: true,
  },
  {
    title: "Daño parcial al amparo del robo aparecido",
    value: "Con franquicia",
  },
  {
    title: "Daño por granizo",
    value: "Con franquicia",
  },
  {
    title: "Daño por inundación",
    value: "$10.000.000",
  },
];
export const dataPolizaUno: DatoPoliza = {
  company: "Provincia",
  type: "Contra todo riesgo",
  fee: 9000,
  total: 1500000,
  details: dataUno,
};
export const dataPolizaDos: DatoPoliza = {
  company: "Rio Uruguay",
  type: "Responsabilidad civil",
  fee: 6000,
  total: 1100000,
  details: dataDos,
};
export const dataPolizaTres: DatoPoliza = {
  company: "San Cristobal",
  type: "Terceros completo",
  fee: 7000,
  total: 1300000,
  details: dataTres,
};

export const dataUser: DatosUser[] = [
  {
    title: "Aseguradora",
    value: "Provincia Seguros",
  },
  {
    title: "Tipo de seguro",
    value: "Contra todo riesgo",
  },
  {
    title: "Precio por mes",
    value: "$8.898",
  },
  {
    title: "Vehículo asegurado por:",
    value: "$1.186.000",
  },
];
