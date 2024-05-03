// user.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userDataSubject: BehaviorSubject<any>;
    public userData$: Observable<any>;

    constructor() {
        // Initialize user data subject with null or any default value
        this.userDataSubject = new BehaviorSubject<any>(null);
        this.userData$ = this.userDataSubject.asObservable();
    }

    setUserData(userData: any): void {
        this.userDataSubject.next(userData);
    }

    getUserData(): Observable<any> {
        return this.userData$;
    }
}
