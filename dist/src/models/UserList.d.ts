import User from "./UserSystem";
export default class UserList {
    private _users;
    constructor();
    get(index: number): User;
    set(index: number, user: User): void;
    add(user: User): void;
    length(): number;
}
