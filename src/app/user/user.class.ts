export class User {

    id: number = 0;
    username: string = "";
    password: string = "";
    firstName: string = "";
    lastName: string = "";
    phone: string | null = "";
    email: string | null = "";
    isReviewer: boolean = false;
    isAdmin: boolean = false;
}