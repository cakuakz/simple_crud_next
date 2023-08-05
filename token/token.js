import Cookies from "js-cookie";

export const getToken = () => {
    return Cookies.get("todo-token");
}

export const deleteToken = () => {
    Cookies.remove("todo-token")
}

export const setToken = (token) => {
    Cookies.set("todo-token", token)
}