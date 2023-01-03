const DEVELOPMENT = process.env.NODE_ENV == "development";

const urlBase = DEVELOPMENT
  ? "http://localhost:3080/api/back-office/"
  : process.env.NEXT_PUBLIC_API_BASE_URL;

interface LoginData {
  email: string;
  password: string;
}

export const fetchDashboadLogin = async (data: LoginData) => {
  let call = await fetch(urlBase + "auth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });

  let res = await call.json();

  return res;
};
