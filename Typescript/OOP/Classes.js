"use strict";
exports.__esModule = true;
exports.PersonnalityNoneType = exports.Personnality = void 0;
var Personnality = /** @class */ (function () {
    function Personnality(data) {
        var _this = this;
        this.getInformation = function () {
            console.log(_this.data);
        };
        this.data = data;
    }
    return Personnality;
}());
exports.Personnality = Personnality;
var PersonnalityNoneType = /** @class */ (function () {
    function PersonnalityNoneType(name) {
        var _this = this;
        this.getInformationNoneType = function () {
            console.log({ nameNoneType: _this.name });
        };
        this.name = name;
    }
    return PersonnalityNoneType;
}());
exports.PersonnalityNoneType = PersonnalityNoneType;
var QHuy = new Personnality({
    _id: new Date().toString(), workAt: "CanTho University",
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
});
