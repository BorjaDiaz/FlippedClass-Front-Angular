export class User {
    id: number;
    email: string;
    name: string;
    password: string;
    username: string;

    constructor(id: number,email: string,name:string, username: string, password: string) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.username = username;
        this.password = password;
    }
}
