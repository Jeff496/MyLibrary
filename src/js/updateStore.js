import { userLibrary } from "..";

export function saveUserLibrary() {
    sessionStorage.setItem('userSessionStore', JSON.stringify(userLibrary));
    localStorage.setItem('userLocalStore', JSON.stringify(userLibrary));
}

export function loadUserLibrary() {
    const userSessionData = sessionStorage.getItem('userSessionStore');
    const userLocalData = localStorage.getItem('userLocalStore');

    userLibrary.length = 0;
    if (userSessionData) {
        const data = JSON.parse(userSessionData);
        userLibrary.push(...data);
    } else if (userLocalData) {
        const data = JSON.parse(userLocalData);
        userLibrary.push(...data);
    }
}