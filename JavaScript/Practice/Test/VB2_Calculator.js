function PointData(
  DIEM_DGNL_CA1,
  UT,
  QUYDOI30,
  KHONGUT,
  KHONGUT_30,
  UT1,
  UT1_30,
  UT2,
  UT2_30,
  UT3,
  UT3_30,
) {
  this.DIEM_DGNL_CA1 = DIEM_DGNL_CA1;
  this.UT = UT;
  this.QUYDOI30 = QUYDOI30;
  this.KHONGUT = KHONGUT;
  this.KHONGUT_30 = KHONGUT_30;
  this.UT1 = UT1;
  this.UT1_30 = UT1_30;
  this.UT2 = UT2;
  this.UT2_30 = UT2_30;
  this.UT3 = UT3;
  this.UT3_30 = UT3_30;
}

const convert30 = (DIEM_DGNL_CA1, bonus) => {
  let QUYDOI30 = DIEM_DGNL_CA1 * 0.3;

  if (bonus == 0) {
    return QUYDOI30;
  }

  if (QUYDOI30 < 22.5 || QUYDOI30 == 22.5) {
    return QUYDOI30 + bonus;
  } else {
    return QUYDOI30 + ((30 - QUYDOI30) / 7.5) * bonus;
  }
};

const arrayPointData = [
  { area: 7, gender: "Nam", minPoint: 19.1 },
  { area: 7, gender: "Nữ", minPoint: 26.37 },
  { area: 10, gender: "Nam", minPoint: 15.3 },
  { area: 10, gender: "Nữ", minPoint: 19.8 },
  { area: 11, gender: "Nam", minPoint: 15.15 },
  { area: 11, gender: "Nữ", minPoint: 18.75 },
  { area: 12, gender: "Nam", minPoint: 15.15 },
  { area: 12, gender: "Nữ", minPoint: 16.65 },
];

const minPass = () => {
  let newJson = {};
  for (let i = 0; i < arrayPointData.length; i++) {
    newJson[i] = {
      area: arrayPointData[i].area,
      gender: arrayPointData[i].gender,
      minPoint: arrayPointData[i].minPoint,
      prePoint: Math.trunc(((arrayPointData[i].minPoint * 10) / 3) * 100) / 100,
    };
  }
  return newJson;
};

const checkPass = (point, area, gender, bonus) => {
  let minArray = Object.values(minPass());
  for (let i = 0; i < minArray.length; i++) {
    if (minArray[i].area === area && minArray[i].gender === gender) {
      if (point >= minArray[i].minPoint) {
        return (
          "DIEM CHUAN VUNG: " +
          area +
          " | GIOI TINH: " +
          gender +
          " LA: " +
          Math.trunc(minArray[i].minPoint * 100) / 100 +
          "\n CHUC MUNG BAN DA TRUNG TUYEN VOI DIEM: " +
          Math.trunc(point * 100) / 100
        );
      } else {
        return (
          "DIEM CHUAN VUNG: " +
          area +
          " | GIOI TINH: " +
          gender +
          " LA: " +
          Math.trunc(minArray[i].minPoint * 100) / 100 +
          "\n KHONG TRUNG TUYEN: " +
          Math.trunc(point * 100) / 100
        );
      }
    }
  }
};

const DGNL = (DIEMDGNLCA1, bonus, area, gender) => {
  let test = new PointData(
    DIEMDGNLCA1,
    bonus,
    Math.trunc(convert30(DIEMDGNLCA1, 0) * 100) / 100,
    Math.trunc((convert30(DIEMDGNLCA1, 0) / 0.3) * 100) / 100,
    Math.trunc(convert30(DIEMDGNLCA1, 0) * 100) / 100,
    Math.trunc(convert30(DIEMDGNLCA1, 1) * 100) / 100,
    Math.trunc((convert30(DIEMDGNLCA1, 1) / 0.3) * 100) / 100,
    Math.trunc(convert30(DIEMDGNLCA1, 2) * 100) / 100,
    Math.trunc((convert30(DIEMDGNLCA1, 2) / 0.3) * 100) / 100,
    Math.trunc(convert30(DIEMDGNLCA1, 3) * 100) / 100,
    Math.trunc((convert30(DIEMDGNLCA1, 3) / 0.3) * 100) / 100,
  );

  console.log("== DIEM CHUAN THEO KHU VUC VA GIOI TINH QUY DOI: ==");
  console.table(minPass());
  console.log("== DIEM THI THUC TE: ==");
  console.table([test]);
  console.log(
    "\x1b[32m",
    "===========================KET QUA CUA BAN==============================",
  );
  console.log(
    "\x1b[32m",
    "DIEM DGNL CA1: " + DIEMDGNLCA1 + " | DIEM UT: " + bonus,
  );
  console.log(
    "\x1b[32m",
    "DIEM TINH THEO CONG THUC BCA: " +
      Math.trunc((convert30(DIEMDGNLCA1, bonus) / 0.3) * 100) / 100 +
      " | DIEM HE SO 30 BCA: " +
      Math.trunc(convert30(DIEMDGNLCA1, bonus) * 100) / 100,
  );

  console.log(
    "\x1b[32m",
    checkPass(convert30(DIEMDGNLCA1, bonus), area, gender),
  );
  console.log(
    "\x1b[32m",
    "========================================================================",
  );
};

const TableDGNL = () => {
  let arrayPrintTable = [];

  for (let i = 50; i <= 95; i += 10) {
    convert30(i, 0);

    // Tạo đối tượng PointData và thêm vào mảng
    let point = new PointData(
      i,
      0,
      Math.trunc(convert30(i, 0) * 100) / 100,
      Math.trunc((convert30(i, 0) / 0.3) * 100) / 100,
      Math.trunc(convert30(i, 0) * 100) / 100,
      Math.trunc((convert30(i, 1) / 0.3) * 100) / 100,
      Math.trunc(convert30(i, 1) * 100) / 100,
      Math.trunc((convert30(i, 2) / 0.3) * 100) / 100,
      Math.trunc(convert30(i, 2) * 100) / 100,
      Math.trunc((convert30(i, 3) / 0.3) * 100) / 100,
      Math.trunc(convert30(i, 3) * 100) / 100,
    );
    arrayPrintTable.push(point);
  }

  console.table(arrayPrintTable);
};

// TableDGNL();

DGNL(80, 2, 7, "Nữ");
