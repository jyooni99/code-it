// coverage.js

function isPositive(num) {
  if (num > 0) {
    // 이 라인이 테스트 되었는가?
    return true; // 이 라인이 테스트 되었는가?
  } else {
    // 이 라인이 테스트 되었는가?
    return false; // 이 라인이 테스트 되었는가?
  }
}

function calculateGrade(score) {
  if (score >= 90) return "A"; // 이 라인이 테스트 되었는가?
  else if (score >= 80) return "B"; // 이 라인이 테스트 되었는가?
  else if (score >= 70) return "C"; // 이 라인이 테스트 되었는가?
  else return "F"; // 이 라인이 테스트 되었는가?
}

module.exports = { isPositive, calculateGrade };
