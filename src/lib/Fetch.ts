// import axios from "axios";
// const url = import.meta.env.VITE_backend_URL;

// export const Login = async (idToken: string) => {
//    const response = await axios.post(`${url}/api/users`, {}, { headers: { "id-token": idToken } });
//    return response;
// };

// export const checkWhitelist = async (token: string) => {
//    const response = await axios.post(
//       `${url}/api/confirm/checker`,
//       {},
//       {
//          headers: {
//             "access-token": token,
//          },
//       },
//    );

//    return response;
// };

// export const getData = async (token: string, page: number) => {
//    const response = await axios.get(`${url}/api/pages/${page}`, {
//       headers: {
//          "access-token": token,
//       },
//    });

//    return response;
// };

// export const getConfirmationData = async (token: string, page: number) => {
//    const response = await axios.get(`${url}/api/confirm/${page}`, {
//       headers: {
//          "access-token": token,
//       },
//    });

//    return response;
// };

// export const getExaminationData = async (token: string, page: number) => {
//    const response = await axios.get(`${url}/api/confirm/exam/${page}`, {
//       headers: {
//          "access-token": token,
//       },
//    });

//    return response;
// };

// export const updateData = async (token: string, page: number, data: object) => {
//    const response = await axios.post(`${url}/api/pages/${page}`, data, {
//       headers: {
//          "access-token": token,
//       },
//    });

//    return response;
// };

// export const updateConfirmationData = async (token: string, page: number, data: object) => {
//    const response = await axios.post(`${url}/api/confirm/${page}`, data, {
//       headers: {
//          "access-token": token,
//       },
//    });

//    return response;
// };

// export const updateExaminationData = async (token: string, page: number, data: object) => {
//    const response = await axios.post(`${url}/api/confirm/exam/${page}`, data, {
//       headers: {
//          "access-token": token,
//       },
//    });

//    return response;
// };

// export const submitData = async (token: string) => {
//    const response = await axios.post(
//       `${url}/api/pages/submit`,
//       {},
//       {
//          headers: {
//             "access-token": token,
//          },
//       },
//    );
//    return response;
// };

// export const submitConfirm = async (token: string) => {
//    const response = await axios.post(
//       `${url}/api/confirm/submit`,
//       {},
//       {
//          headers: {
//             "access-token": token,
//          },
//       },
//    );

//    return response;
// };
