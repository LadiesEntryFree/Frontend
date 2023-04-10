import $api from "../http";

export default class AuthService {
    static async login(nickname, password) {
        return $api.post('/login', {nickname, password})
    }

    static async registration(nickname, password) {
        return $api.post('/registration', {nickname, password})
    }

    static async logout() {
        return $api.post('/logout')
    }
}