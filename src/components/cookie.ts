export const getCookie = (name: string) => {
  const cookie = document.cookie
    .split("; ")
    .find((row) => row.startsWith(name));
  return cookie ? cookie.split("=")[1] : null;
};

export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};
