export default function tokenIsValid () {
    const expirtyDate = new Date(localStorage.getItem('tokenExpiryDate'))
    return expirtyDate > new Date();
}