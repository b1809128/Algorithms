

class ObjectPerson {
    _id: string;
    workAt: string;
    areaWork: string;
    experience: string;
    position: string;
    createdAt: Date;
    editedAt: Date;
    name: string;
    age: number;
    address: string;
    phoneNumber: string;
    emailAddress: string;

    constructor(_id: string, workAt: string, areaWork: string, experience: string, position: string, createdAt: Date, editedAt: Date, name: string, age: number, address: string, phoneNumber: string, emailAddress: string) {
        this._id = _id;
        this.workAt = workAt;
        this.areaWork = areaWork;
        this.experience = experience;
        this.position = position;
        this.createdAt = createdAt;
        this.editedAt = editedAt;
        this.name = name;
        this.age = age;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.emailAddress = emailAddress;
    }



    public createPerson: Function = () => {
        return {
            _id: this._id,
            workAt: this.workAt,
            areaWork: this.areaWork,
            experience: this.experience,
            position: this.position,
            createdAt: this.createdAt,
            editedAt: this.editedAt,
            name: this.name,
            age: this.age,
            address: this.address,
            phoneNumber: this.phoneNumber,
            emailAddress: this.emailAddress
        };
    }

}

class Permission extends ObjectPerson {
    accessToken: string;
    permission: number;
    constructor(_id: string, workAt: string, areaWork: string, experience: string, position: string, createdAt: Date, editedAt: Date, name: string, age: number, address: string, phoneNumber: string, emailAddress: string, accessToken: string, permission: number) {
        super(_id, workAt, areaWork, experience, position, createdAt, editedAt, name, age, address, phoneNumber, emailAddress);
        this.accessToken = accessToken;
        this.permission = permission;
    }

    getPermissions: Function = () => {
        return {
            accessToken: this.accessToken,
            permission: this.permission
        };
    };
}

const objPerson = [
    "#843934837$234#",
    "CanTho University",
    "Information Technology",
    "4 years",
    "Senior Lecture",
    new Date(),
    new Date(),
    "Nguyen Ho Quoc Huy",
    22,
    "Can Tho City, Viet Nam",
    "0937790999",
    "huyb1809128@student.ctu.edu.vn"
]


const QuocHuy = new ObjectPerson("#843934837$234#",
    "CanTho University",
    "Information Technology",
    "4 years",
    "Senior Lecture",
    new Date(),
    new Date(),
    "Nguyen Ho Quoc Huy",
    22,
    "Can Tho City, Viet Nam",
    "0937790999",
    "huyb1809128@student.ctu.edu.vn")

// console.log(QuocHuy.createPerson());

const QuocHuy2 = new Permission("#843934837$234#",
    "CanTho University",
    "Information Technology",
    "4 years",
    "Senior Lecture",
    new Date(),
    new Date(),
    "Nguyen Ho Quoc Huy",
    22,
    "Can Tho City, Viet Nam",
    "0937790999",
    "huyb1809128@student.ctu.edu.vn", "jdfjg948950804049$57390#-2489827489759-$#%#%$%^^", 1);

console.log({ object1: QuocHuy2.getPermissions(), object2: QuocHuy2.createPerson() });

