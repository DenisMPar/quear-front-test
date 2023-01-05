import { useState } from "react";
import { fetchApi, getTokenUserBO } from "./api";
import useSWR from "swr";
export function useGetYears() {
  const yearsArray: string[] = [];
  for (let index = 2022; index >= 1910; index--) {
    yearsArray.push(index.toString());
  }

  return yearsArray;
}
export function useGetDays() {
  const daysArray: string[] = [];
  for (let index = 1; index <= 31; index++) {
    daysArray.push(index.toString());
  }

  return daysArray;
}
export function useGetMonths() {
  const [years, setYears] = useState([
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]);
  return years;
}
export function useGetCarBrand(): {
  brandNames: Array<{ title: string; options: string[] }>;
  brandWithId: Array<{ nombre: string; id: string }>;
} {
  const { data, error, isLoading } = useSWR("infoAutos/", (url) =>
    fetchApi(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );

  if (data && data.length > 0) {
    const brandNames = data.map((item: any) => {
      return item.name;
    });
    const brandWithId = data.map((item: any) => {
      return { nombre: item.name, id: item.id };
    });

    const brandNamesFormatted = [
      {
        title: "Más buscadas:",
        options: ["CHEVROLET", "FORD", "PEUGEOT"],
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
export function useGetCarModel(brandId: any): {
  carModelNames: string[];
  carModelWithId: Array<{ name: string; id: string }>;
} {
  const { data, error, isLoading } = useSWR(`infoAutos/${brandId}`, (url) =>
    fetchApi(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
  if (data && data.length > 0) {
    const carModelNames = data.map((item: any) => {
      return item.name;
    });
    const carModelWithId = data.map((item: any) => {
      return { name: item.name, id: item.id };
    });
    return { carModelNames: carModelNames, carModelWithId: carModelWithId };
  } else {
    return { carModelNames: [], carModelWithId: [] };
  }
}
export function useGetCarVersion(
  brandId: any,
  modelId: any
): {
  carVersionNames: string[];
  carVersionWithId: Array<{ name: string; id: string }>;
} {
  const { data, error, isLoading } = useSWR(
    `/infoAutos/${brandId}/${modelId}/`,
    (url) =>
      fetchApi(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
  );
  if (data && data.length > 0) {
    const carVersionNames = data.map((item: any) => {
      return item.description;
    });
    const carVersionWithId = data.map((item: any) => {
      return { name: item.description, id: item.codia };
    });
    return { carVersionNames, carVersionWithId: carVersionWithId };
  } else {
    return { carVersionNames: [], carVersionWithId: [] };
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

  if (data && !data.success.result.error) {
    const provincesNames = data.success.result.province.map((item: any) => {
      return item.nombre;
    });
    const provincesWithId = data.success.result.province.map((item: any) => {
      return { nombre: item.nombre, id: item.id };
    });
    return { provincesNames, provincesWithId };
  } else {
    return { provincesNames: [], provincesWithId: [] };
  }
}
export function useGetDepartments(provinceId: string): {
  departmentNames: string[];
  departmentWithId: Array<{ name: string; id: string }>;
} {
  const { data, error, isLoading } = useSWR(
    "location/provinces/" + provinceId,
    (url) =>
      fetchApi(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
  );

  if (data && data.success.result.province.locations) {
    const departmentNames = data.success.result.province.locations.map(
      (item: any) => {
        return item.nombre;
      }
    );
    const departmentWithId = data.success.result.province.locations.map(
      (item: any) => {
        return { name: item.nombre, id: item.id };
      }
    );
    return { departmentNames, departmentWithId };
  } else {
    return { departmentNames: [], departmentWithId: [] };
  }
}

export function useGetCities(departmentId: string): {
  citiesNames: string[];
  citiesWithId: Array<{ name: string; id: string }>;
} {
  const { data, error, isLoading } = useSWR(
    "location/cities/" + departmentId,
    (url) =>
      fetchApi(url, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
      })
  );
  if (data && data.length > 0) {
    const citiesNames = data.success.result.map((item: any) => {
      return item.nombre;
    });
    const citiesWithId = data.success.result.map((item: any) => {
      return { name: item.nombre, id: item.id };
    });
    return { citiesNames: [], citiesWithId: [] };
  } else {
    return { citiesNames: [], citiesWithId: [] };
  }
}

export function useGetUserBO() {
  const token = getTokenUserBO();

  const { data, error, isLoading } = useSWR("back-office/user", (url) =>
    fetchApi(url, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token} ` : ``,
      },
    })
  );

  if (data) {
    return data.success.result;
  } else {
    return {};
  }
}

export function usePaginationPolicies() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");

  const token = getTokenUserBO();

  const { data, error, isLoading } = useSWR(
    `policyCar?page=${page}&status=${status}&date=${date}&q=${q}`,
    (url) =>
      fetchApi(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token} ` : ``,
        },
      })
  );
  if (data) {
    let totalRows: number = data.success.result.count;
    data.success.result.totalRows = totalRows;
  }

  return {
    data: data ? data.success.result : [],
    isLoading,
    setQuery: {
      setQ,
      setPage,
      setStatus,
      setDate,
    },
    Querys: {
      q,
      page,
      status,
      date,
    },
  };
}
export function usePaginationUserBo() {
  const [q, setQ] = useState("");
  const [page, setPage] = useState("");

  const token = getTokenUserBO();

  const { data, error, isLoading } = useSWR(
    `back-office/user/all?page=${page}&q=${q}`,
    (url) =>
      fetchApi(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token ? `Bearer ${token} ` : ``,
        },
      })
  );

  if (data) {
    let totalRows: number = data.success.result.count;
    data.success.result.totalRows = totalRows;
  }

  return {
    data: data ? data.success.result : [],
    isLoading,
    setQuery: {
      setQ,
      setPage,
    },
    q,
  };
}
