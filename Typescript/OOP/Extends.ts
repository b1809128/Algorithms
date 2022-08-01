import { PersonnalityNoneType } from "./Classes";
class Permission extends PersonnalityNoneType {
    role: string;
    roleLevel: number;
    constructor(role: string, roleLevel: number, name: string) {
        super(name);
        this.role = role;
        this.roleLevel = roleLevel;
    }

    getPermissions: Function = (): void => {
        console.log({ role: this.role, roleLevel: this.roleLevel });
    }
}

let pm1 = new Permission("administrator", 4, "Nguyen Ho Quoc Huy");

pm1.getInformationNoneType()
pm1.getPermissions()