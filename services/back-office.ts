const DEVELOPMENT = process.env.NODE_ENV == "development";

const urlBase = DEVELOPMENT
  ? "http://localhost:3080/api/"
  : process.env.NEXT_PUBLIC_API_BASE_URL;

interface LoginData {
  email: string;
  password: string;
}

export const fetchDashboadLogin = async (data: LoginData) => {
  let call = await fetch(urlBase + "back-office/auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });

  let res = await call.json();

  return res;
};

export const fetchDashboadNewUser = async (data: LoginData) => {
  console.log(urlBase);

  let call = await fetch(urlBase + "back-office/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });

  let res = await call.json();

  return res;
};
