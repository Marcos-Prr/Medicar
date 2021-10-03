import { Injectable } from '@angular/core';
import { UserAuth } from '../user/user-auth';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userInfo: UserAuth = {
        name: "admin",
        token: "17f6a0cf8d74886b532b01dbe07cd638e2ed755c"
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