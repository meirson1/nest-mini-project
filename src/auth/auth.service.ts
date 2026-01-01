import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    
    signup() {
        return{ message: 'I am signup endpoint' };
    }

    signin() {
        return{ message: 'I am signin endpoint' };
    }
}