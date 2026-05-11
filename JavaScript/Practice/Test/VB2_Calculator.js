// ============ CONSTANTS ============
const CONVERSION_RATE = 0.3;
const STATE_POINT = 22.5;
const MAX_SCORE = 30;
const BONUS_DIVIDER = 7.5;
const DECIMAL_PLACES = 100;
const SCORE_STEP = 10;
const MIN_SCORE = 50;
const MAX_SCORE_TABLE = 95;

const COLORS = {
  SUCCESS: "\x1b[32m",
  RESET: "\x1b[0m",
};

const SCORE_DATA = [
  { area: 7, gender: "NAM", minPoint: 19.1 },
  { area: 7, gender: "NỮ", minPoint: 26.37 },
  { area: 10, gender: "NAM", minPoint: 15.3 },
  { area: 10, gender: "NỮ", minPoint: 19.8 },
  { area: 11, gender: "NAM", minPoint: 15.15 },
  { area: 11, gender: "NỮ", minPoint: 18.75 },
  { area: 12, gender: "NAM", minPoint: 15.15 },
  { area: 12, gender: "NỮ", minPoint: 16.65 },
];

class PointData {
  constructor(
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
}

const roundToTwoDecimals = (value) =>
  Math.trunc(value * DECIMAL_PLACES) / DECIMAL_PLACES;

const getConvertTo30 = (DIEM_DGNL_CA1, BONUS_POINTS) => {
  let CONVERT_TO_30 = DIEM_DGNL_CA1 * CONVERSION_RATE;

  if (BONUS_POINTS == 0) return CONVERT_TO_30;

  if (CONVERT_TO_30 < STATE_POINT || CONVERT_TO_30 == STATE_POINT) {
    return CONVERT_TO_30 + BONUS_POINTS;
  } else {
    return (
      CONVERT_TO_30 +
      ((MAX_SCORE - CONVERT_TO_30) / BONUS_DIVIDER) * BONUS_POINTS
    );
  }
};

const getMinPass = () => {
  let newJson = {};
  for (let i = 0; i < SCORE_DATA.length; i++) {
    newJson[i] = {
      area: SCORE_DATA[i].area,
      gender: SCORE_DATA[i].gender,
      minPoint: SCORE_DATA[i].minPoint,
      prePoint: roundToTwoDecimals((SCORE_DATA[i].minPoint * 10) / 3),
    };
  }
  return newJson;
};

const getCheckPass = (point, area, gender, bonus) => {
  let minArray = Object.values(getMinPass());
  for (let i = 0; i < minArray.length; i++) {
    if (minArray[i].area === area && minArray[i].gender === gender) {
      if (point >= minArray[i].minPoint) {
        return (
          "ĐIỂM CHUẨN VÙNG: " +
          area +
          " | GIỚI TÍNH: " +
          gender +
          " LÀ: " +
          roundToTwoDecimals(minArray[i].minPoint) +
          "\n CHÚC MỪNG BẠN ĐÃ TRÚNG TUYỂN VỚI ĐIỂM: " +
          roundToTwoDecimals(point)
        );
      } else {
        return (
          "ĐIỂM CHUẨN VÙNG: " +
          area +
          " | GIỚI TÍNH: " +
          gender +
          " LÀ: " +
          roundToTwoDecimals(minArray[i].minPoint) +
          "\nKHÔNG TRÚNG TUYỂN: " +
          roundToTwoDecimals(point)
        );
      }
    }
  }
};

const DGNL = (DIEM_DGNL_CA1, BONUS_POINTS, AREA, GENDER) => {
  let test = new PointData(
    DIEM_DGNL_CA1,
    BONUS_POINTS,
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 0)),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 0) / CONVERSION_RATE),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 0)),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 1)),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 1) / CONVERSION_RATE),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 2)),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 2) / CONVERSION_RATE),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 3)),
    roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, 3) / CONVERSION_RATE),
  );

  console.log("== ĐIỂM CHUẨN THEO KHU VỰC: ==");
  console.table(getMinPass());
  console.log("== ĐIỂM THI THỰC TẾ: ==");
  console.table([test]);
  console.log(COLORS.SUCCESS);
  console.log(
    "===========================KẾT QỦA CỦA BẠN==============================",
  );
  console.log(
    "ĐIỂM DGNL: " + DIEM_DGNL_CA1 + " | ĐIỂM ƯU TIÊN: " + BONUS_POINTS,
  );
  console.log(
    "ĐIỂM TÍNH THEO CÔNG THỨC BCA: " +
      roundToTwoDecimals(
        getConvertTo30(DIEM_DGNL_CA1, BONUS_POINTS) / CONVERSION_RATE,
      ) +
      " | ĐIỂM HỆ SỐ 30 BỘ CÔNG AN: " +
      roundToTwoDecimals(getConvertTo30(DIEM_DGNL_CA1, BONUS_POINTS)),
  );

  console.log(
    getCheckPass(
      getConvertTo30(DIEM_DGNL_CA1, BONUS_POINTS),
      AREA,
      GENDER,
      BONUS_POINTS,
    ),
  );
  console.log(
    "========================================================================",
  );
  console.log(COLORS.RESET);
};

const TableDGNL = () => {
  let arrayPrintTable = [];

  for (let i = 50; i <= 95; i += 10) {
    getConvertTo30(i, 0);

    // Tạo đối tượng PointData và thêm vào mảng
    let point = new PointData(
      i,
      0,
      roundToTwoDecimals(getConvertTo30(i, 0) * 100),
      roundToTwoDecimals((getConvertTo30(i, 0) / CONVERSION_RATE) * 100),
      roundToTwoDecimals(getConvertTo30(i, 0) * 100),
      roundToTwoDecimals((getConvertTo30(i, 1) / CONVERSION_RATE) * 100),
      roundToTwoDecimals(getConvertTo30(i, 1) * 100),
      roundToTwoDecimals((getConvertTo30(i, 2) / CONVERSION_RATE) * 100),
      roundToTwoDecimals(getConvertTo30(i, 2) * 100),
      roundToTwoDecimals((getConvertTo30(i, 3) / CONVERSION_RATE) * 100),
      roundToTwoDecimals(getConvertTo30(i, 3) * 100),
    );
    arrayPrintTable.push(point);
  }

  console.table(arrayPrintTable);
};

// TableDGNL();

DGNL(80, 2, 7, "NỮ");
