export function isAuthenticated() {

    const storedValue = localStorage.getItem("itzb_user")
    const user = storedValue ? JSON.parse(storedValue) : { loggedIn: false }
    return user.loggedIn
}