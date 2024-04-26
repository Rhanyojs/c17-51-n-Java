// import moment from 'moment';

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

    // const momentDate = moment().format();
    // console.log('expires', options.expires)
    // const addTime = moment(momentDate).add(options.expires, 'ms');
    // console.log('addTime', addTime);
    
    date.setTime(date.getTime() + (options.expires));
    cookieString += `; expires=${date.toUTCString()}`;
  }
  document.cookie = cookieString;
}

export const removeCookie = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}
