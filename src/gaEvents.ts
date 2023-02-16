import ReactGA from 'react-ga4';

export const loginEvent = () => ReactGA.event("Login");
export const registerEvent = () => ReactGA.event("Register");