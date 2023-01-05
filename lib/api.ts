const DEVELOPMENT = process.env.NODE_ENV == "development";

interface RequestOptions {
  method: string;
  body?: any;
  headers: any;
}
export async function fetchApi(direction: string, config: RequestOptions) {
  const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const url = BASE_API_URL + direction;

  const fullConfig = {
    ...config,
  };
  const res = await fetch(url, fullConfig);
  const status = res.status;

  if (status >= 200 && status < 300) return await res.json();
  if (status >= 400) throw { error: res.status };
}
