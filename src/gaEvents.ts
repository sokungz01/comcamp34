import ReactGA from 'react-ga4';

export const login = () => ReactGA.event("Login");
export const register = () => ReactGA.event("Register");