import md5 from 'js-md5'
const TokenKey: string = md5('hq_token')

console.log('token: ', TokenKey)
export function getToken ():any {
    return localStorage.getItem(TokenKey)
}

export function setToken (token: string) {
    return localStorage.setItem(TokenKey, token)
}

export function removeToken () {
    return localStorage.removeItem(TokenKey)
}