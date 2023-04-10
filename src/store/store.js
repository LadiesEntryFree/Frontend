import { makeAutoObservable } from "mobx"
import AuthService from "../services/AuthService"

export default class Store {
    user = {}
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    async login(nickname, password) {
        try {
            const response = await AuthService.login(nickname, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.error)
        }
    }

    async registration(nickname, password) {
        try {
            const response = await AuthService.registration(nickname, password)
            localStorage.setItem('token', response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (error) {
            console.log(error.response?.data?.error)
        }
    }

    async logout() {
        try {
            await AuthService.logout()
            localStorage.removeItem('token')
            this.setAuth(false)
            this.setUser({})
        } catch (error) {
            console.log(error.response?.data?.error)
        }
    }
}