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
        return this.userInfo.token
    }

    setUserInfo(userInfo: UserAuth) {
        this.userInfo = userInfo
    }

    getUserName(): string {
        return this.userInfo.name
    }

    isAuthenticated(): boolean {
        if (this.userInfo.token.length === 0)
            return false
        return true
    }
}