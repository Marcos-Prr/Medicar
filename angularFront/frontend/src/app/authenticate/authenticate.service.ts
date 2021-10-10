import { Injectable } from '@angular/core';
import { UserAuth } from '../user/user-auth';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userInfo: UserAuth = {
        name: "",
        token: ""
    };

    constructor() {

    }

    getToken(): String {
        const token = localStorage.getItem('token')
        return token !== null ? token : ''
    }

    setUserInfo(userInfo: UserAuth) {
        localStorage.setItem('name', userInfo.name)
        localStorage.setItem('token', userInfo.token)
    }

    getUserName(): string {
        const name = localStorage.getItem('name')
        return name!==null? name : ''
    }

    logout(): void{
        localStorage.clear();
    }

    isAuthenticated(): boolean {
        if (localStorage.getItem('token') !== null)
            return true
        return false
    }
}