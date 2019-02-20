import jwtDecode from "jwt-decode";

export function decodedToken() {
    const token = localStorage.token;
    const decoded = jwtDecode(token);
    return decoded;
}