export const getCookie = (name) => {
  const cookies = document.cookie.split(';');
  for (let cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName.trim() === name) {
      return cookieValue ? JSON.parse(cookieValue) : null;
    }
  }
  return null;
}

export const setCookie = (name, value, options = {}) => {
  const stringValue = JSON.stringify(value);
  let cookieString = `${name}=${stringValue}`;
  if (options.expires) {
    const date = new Date();
    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
    cookieString += `; expires=${date.toUTCString()}`;
  }
  document.cookie = cookieString;
}

export const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
