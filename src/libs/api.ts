import axios from "axios";

export const API = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 1000,
});

API.interceptors.response.use(
    (response) => response,
    (error) => {
        switch (error.response.status) {
            case 400:
                throw new Error("Bad Request");
            case 401:
                throw new Error("Unauthorized");
            case 403:
                throw new Error("Forbidden");
            case 404:
                throw new Error("Not Found");
            case 500:
                throw new Error("Internal Server Error");
            default:
                throw new Error("Unknown Error");
        }
    },
);
