type PersonAttribute = {
    _id: string;
    workAt: string;
    about: { areaWork: string, major: string, graduated: string, technology: Array<string>, developer: string, devLevel: number };
    experience: string;
    position: string;
    createdAt: Date;
    editedAt: Date;
    name: string;
    age: number;
    address: string;
    phoneNumber: string;
    emailAddress: string;
}

class Personnality {
    data: PersonAttribute;
    constructor(data: PersonAttribute) {
        this.data = data;
    }

    getInformation = (): void => {
        console.log(this.data);
    }
}

class PersonnalityNoneType {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    getInformationNoneType = (): void => {
        console.log({ nameNoneType: this.name });
    }
}

let QHuy = new Personnality({
    _id: new Date().toString(), workAt:
        "CanTho University",
    about: { areaWork: "Information Technology", major: "Software Engineer", graduated: "12/2022", technology: ["node js", "react js", "typescript", "php"], developer: "fullstack", devLevel: 1 },
    experience: "4 years",
    position: "Senior Lecture",
    createdAt: new Date(),
    editedAt: new Date(),
    name: "Nguyen Ho Quoc Huy",
    age: 22,
    address: "Can Tho City, Viet Nam",
    phoneNumber: "0937790999",
    emailAddress: "huyb1809128@student.ctu.edu.vn"
})

// QHuy.getInformation()

export { Personnality, PersonnalityNoneType };