import { useState } from "react";
import { fetchApi } from "./api";
import useSWR from "swr";
export function useGetYears() {
  const [years, setYears] = useState([
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
  ]);
  return years;
}
export function useGetCarBrand(): {
  brandNames: Array<{ title: string; options: string[] }>;
  brandWithId: Array<{ nombre: string; id: string }>;
} {
  const { data, error, isLoading } = useSWR("infoAutos/carBrand", (url) =>
    fetchApi(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
  if (data) {
    const brandNames = data.map((item: any) => {
      return item.name;
    });
    const brandWithId = data.map((item: any) => {
      return { nombre: item.name, id: item.id };
    });

    const brandNamesFormatted = [
      {
        title: "Más buscadas:",
        options: ["CHEVROLET", "FORD", "RENAULT", "VOLKSWAGEN"],
      },
      { title: "Todas las marcas:", options: brandNames },
    ];

    return { brandNames: brandNamesFormatted, brandWithId };
  } else {
    return {
      brandNames: [
        {
          title: "Más buscadas:",
          options: [""],
        },
        {
          title: "Todas las marcas:",
          options: [""],
        },
      ],
      brandWithId: [],
    };
  }
}
export function useGetCarModel(brandId: any) {
  const { data, error, isLoading } = useSWR(
    `infoAutos/carBrand/${brandId}/groups`,
    (url) =>
      fetchApi(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
  );
  if (data) {
    console.log({ data });
  } else {
    return [];
  }
}
export function useGetProvincies(): {
  provincesNames: string[];
  provincesWithId: Array<{ nombre: string; id: string }>;
} {
  const { data, error, isLoading } = useSWR("location/provinces", (url) =>
    fetchApi(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
  if (data) {
    const provincesNames = data.success.result.map((item: any) => {
      return item.nombre;
    });
    const provincesWithId = data.success.result.map((item: any) => {
      return { nombre: item.nombre, id: item.id };
    });
    return { provincesNames, provincesWithId };
  } else {
    return { provincesNames: [], provincesWithId: [] };
  }
}
export function useGetDepartments(provinceId: string) {
  const { data, error, isLoading } = useSWR(
    "location/departments/" + provinceId,
    (url) =>
      fetchApi(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
  );
  if (data) {
    return data.success.result.map((item: any) => {
      return item.nombre;
    });
  } else {
    return [];
  }
}
