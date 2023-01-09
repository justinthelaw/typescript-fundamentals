export function getCookie(cookieName: string): string {
  let name = cookieName + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deleteAllCookies(): void {
  const cookies: string[] = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie: string = cookies[i];
    const eqPos: number = cookie.indexOf("=");
    const name: string = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}
