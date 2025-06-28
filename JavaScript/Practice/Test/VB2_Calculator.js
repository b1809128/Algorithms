function PointData(
  DIEM_DGNL_CA1,
  UT,
  QUYDOi30,
  KHONGUT,
  KHONGUT_30,
  UT1,
  UT1_30,
  UT2,
  UT2_30
) {
  this.DIEM_DGNL_CA1 = DIEM_DGNL_CA1;
  this.UT = UT;
  this.QUYDOi30 = QUYDOi30;
  this.KHONGUT = KHONGUT;
  this.KHONGUT_30 = KHONGUT_30;
  this.UT1 = UT1;
  this.UT1_30 = UT1_30;
  this.UT2 = UT2;
  this.UT2_30 = UT2_30;
}

// const test = new PointData(90, 2, 27, 28, 92, 94);
// console.table([test]);

const DGNL = (DIEMDGNLCA1) => {
  let KETQUA_KO_UT = 0;
  let KETQUA_UT2 = 0;
  let KETQUA_UT1 = 0;

  let QUYDOI30 = DIEMDGNLCA1 * 0.3;
  KETQUA_KO_UT = QUYDOI30;

  if (QUYDOI30 < 22.5 || QUYDOI30 == 22.5) {
    KETQUA_UT2 = QUYDOI30 + 2;
    KETQUA_UT1 = QUYDOI30 + 1;
  } else {
    KETQUA_UT2 = QUYDOI30 + ((30 - QUYDOI30) / 7.5) * 2;
    KETQUA_UT1 = QUYDOI30 + ((30 - QUYDOI30) / 7.5) * 1;
  }
  //   console.log({ "Diem DGNL CA1: ": DIEMDGNLCA1 });
  //   console.log({ "Diem UT: ": 2 });
  //   console.log({ "Diem quy doi thang diem 30": QUYDOI30.toFixed(2) });

  //   console.log("");
  //   console.log({
  //     "DOI TUONG KHONG UT": (KETQUA_KO_UT / 0.3).toFixed(2),
  //     "QUY DOI 30": KETQUA_KO_UT.toFixed(2),
  //   });
  //   console.log({
  //     "DOI TUONG UT 1": (KETQUA_UT1 / 0.3).toFixed(2),
  //     "QUY DOI 30": KETQUA_UT1.toFixed(2),
  //   });
  //   console.log({
  //     "DOI TUONG UT 2": (KETQUA_UT2 / 0.3).toFixed(2),
  //     "QUY DOI 30": KETQUA_UT2.toFixed(2),
  //   });
  //   console.log("===============================");

  let test = new PointData(
    DIEMDGNLCA1,
    2,
    QUYDOI30.toFixed(2),
    (KETQUA_KO_UT / 0.3).toFixed(2),
    KETQUA_KO_UT.toFixed(2),
    (KETQUA_UT1 / 0.3).toFixed(2),
    KETQUA_UT1.toFixed(2),
    (KETQUA_UT2 / 0.3).toFixed(2),
    KETQUA_UT2.toFixed(2)
  );

  console.table([test]);
};

const TableDGNL = () => {
  let arrayPrintTable = [];

  for (let i = 50; i <= 95; i += 10) {
    let KETQUA_KO_UT = 0;
    let KETQUA_UT2 = 0;
    let KETQUA_UT1 = 0;

    let QUYDOI30 = i * 0.3;
    KETQUA_KO_UT = QUYDOI30;

    if (QUYDOI30 < 22.5 || QUYDOI30 == 22.5) {
      KETQUA_UT2 = QUYDOI30 + 2;
      KETQUA_UT1 = QUYDOI30 + 1;
    } else {
      KETQUA_UT2 = QUYDOI30 + ((30 - QUYDOI30) / 7.5) * 2;
      KETQUA_UT1 = QUYDOI30 + ((30 - QUYDOI30) / 7.5) * 1;
    }

    // Tạo đối tượng PointData và thêm vào mảng
    let point = new PointData(
      i,
      2,
      QUYDOI30.toFixed(2),
      (KETQUA_KO_UT / 0.3).toFixed(2),
      KETQUA_KO_UT.toFixed(2),
      (KETQUA_UT1 / 0.3).toFixed(2),
      KETQUA_UT1.toFixed(2),
      (KETQUA_UT2 / 0.3).toFixed(2),
      KETQUA_UT2.toFixed(2)
    );

    arrayPrintTable.push(point);
  }

  
  // console.table([test]);
  console.table(arrayPrintTable);
};

// console.log("DIEM THI 65-95:");
// for (let i = 65; i <= 95; i += 5) {
//   DGNL(i);
// }


TableDGNL();

console.log("===============================");
console.log("DIEM THI THUC TE:");
DGNL(92);