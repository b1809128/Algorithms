// ============ CONSTANTS ============
const CONVERSION_RATE = 0.3;
const BONUS_THRESHOLD = 22.5;
const MAX_SCORE = 30;
const BONUS_DIVIDER = 7.5;
const DECIMAL_PLACES = 100;
const SCORE_STEP = 10;
const MIN_SCORE = 50;
const MAX_SCORE_TABLE = 95;

const COLORS = {
  SUCCESS: '\x1b[32m',
  RESET: '\x1b[0m',
};

const SCORE_DATA = [
  { area: 7, gender: 'Nam', minPoint: 19.1 },
  { area: 7, gender: 'Nữ', minPoint: 26.37 },
  { area: 10, gender: 'Nam', minPoint: 15.3 },
  { area: 10, gender: 'Nữ', minPoint: 19.8 },
  { area: 11, gender: 'Nam', minPoint: 15.15 },
  { area: 11, gender: 'Nữ', minPoint: 18.75 },
  { area: 12, gender: 'Nam', minPoint: 15.15 },
  { area: 12, gender: 'Nữ', minPoint: 16.65 },
];

// ============ UTILITY FUNCTIONS ============
const roundToTwoDecimals = (value) => Math.trunc(value * DECIMAL_PLACES) / DECIMAL_PLACES;

const convert30 = (rawScore, bonus = 0) => {
  const convertedScore = rawScore * CONVERSION_RATE;

  if (bonus === 0) return convertedScore;

  if (convertedScore <= BONUS_THRESHOLD) {
    return convertedScore + bonus;
  }
  return convertedScore + ((MAX_SCORE - convertedScore) / BONUS_DIVIDER) * bonus;
};

// ============ CLASS ============
class PointData {
  constructor(rawScore, bonus, score30, scoreFormula, ...otherScores) {
    this.rawScore = rawScore;
    this.bonus = bonus;
    this.score30 = score30;
    this.scoreFormula = scoreFormula;
    this.otherScores = otherScores;
  }
}

// ============ FUNCTIONS ============
const getMinPassScores = () => {
  return SCORE_DATA.reduce((acc, data, index) => {
    acc[index] = {
      area: data.area,
      gender: data.gender,
      minPoint: data.minPoint,
      prePoint: roundToTwoDecimals((data.minPoint * 10) / 3),
    };
    return acc;
  }, {});
};

const findPassingCriteria = (score, area, gender) => {
  return Object.values(getMinPassScores()).find(
    (criteria) => criteria.area === area && criteria.gender === gender
  );
};

const checkPass = (score, area, gender) => {
  const criteria = findPassingCriteria(score, area, gender);

  if (!criteria) return 'Không tìm thấy tiêu chí điểm cho vùng/giới tính này';

  const roundedScore = roundToTwoDecimals(score);
  const roundedMinPoint = roundToTwoDecimals(criteria.minPoint);

  const baseMessage = `DIỂM CHUẨN VÙNG: ${criteria.area} | GIỚI TÍNH: ${criteria.gender} LÀ: ${roundedMinPoint}`;

  return score >= criteria.minPoint
    ? `${baseMessage}\nChúc mừng bạn đã trúng tuyển với điểm: ${roundedScore}`
    : `${baseMessage}\nKhông trúng tuyển: ${roundedScore}`;
};

const calculateAllScores = (rawScore, bonus) => {
  const baseScore = convert30(rawScore, 0);
  const scoredWithBonus = convert30(rawScore, bonus);

  return {
    bonus0: roundToTwoDecimals(baseScore),
    bonus0Formula: roundToTwoDecimals(baseScore / CONVERSION_RATE),
    bonus1: roundToTwoDecimals(convert30(rawScore, 1)),
    bonus1Formula: roundToTwoDecimals(convert30(rawScore, 1) / CONVERSION_RATE),
    bonus2: roundToTwoDecimals(convert30(rawScore, 2)),
    bonus2Formula: roundToTwoDecimals(convert30(rawScore, 2) / CONVERSION_RATE),
    bonus3: roundToTwoDecimals(convert30(rawScore, 3)),
    bonus3Formula: roundToTwoDecimals(convert30(rawScore, 3) / CONVERSION_RATE),
    actualScoreWithBonus: roundToTwoDecimals(scoredWithBonus),
    actualFormulaWithBonus: roundToTwoDecimals(scoredWithBonus / CONVERSION_RATE),
  };
};

const createPointData = (rawScore, bonus) => {
  const scores = calculateAllScores(rawScore, bonus);
  return new PointData(
    rawScore,
    bonus,
    scores.bonus0,
    scores.bonus0Formula,
    scores.bonus1Formula,
    scores.bonus1,
    scores.bonus2Formula,
    scores.bonus2,
    scores.bonus3Formula,
    scores.bonus3
  );
};

const calculateDGNL = (rawScore, bonus, area, gender) => {
  const pointData = createPointData(rawScore, bonus);
  const finalScore = convert30(rawScore, bonus);

  console.log('\n== DIỂM CHUẨN THEO KHU VỰC VÀ GIỚI TÍNH QUY ĐỔI: ==');
  console.table(getMinPassScores());

  console.log('\n== DIỂM THI THỰC TẾ: ==');
  console.table([pointData]);

  console.log(COLORS.SUCCESS);
  console.log('===========================KẾT QUẢ CỦA BẠN==============================');
  console.log(`DIỂM DGNL CA1: ${rawScore} | DIỂM ÚT: ${bonus}`);

  const scores = calculateAllScores(rawScore, bonus);
  console.log(`DIỂM TÍNH THEO CÔNG THỨC BCA: ${scores.actualFormulaWithBonus} | DIỂM HỆ SỐ 30 BCA: ${scores.actualScoreWithBonus}`);
  console.log(checkPass(finalScore, area, gender));
  console.log('========================================================================');
  console.log(COLORS.RESET);
};

const generateScoreTable = () => {
  const table = [];

  for (let score = MIN_SCORE; score <= MAX_SCORE_TABLE; score += SCORE_STEP) {
    table.push(createPointData(score, 0));
  }

  console.table(table);
};

// ============ EXPORTS / USAGE ============
// Uncomment để test
// generateScoreTable();

calculateDGNL(80, 2, 7, 'Nữ');
