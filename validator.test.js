const { validatePassword, validateEmail } = require("./validate");

describe("validate 모듈 테스트", () => {
  describe("validatePassword 테스트", () => {
    describe("비밀번호 길이 검사", () => {
      test("비밀번호가 유효한 길이인 경우 유효함을 반환해야 함", () => {
        const password = "passWord123@";
        const result = validatePassword(password);
        expect(result.isValid).toBe(true);
      });

      test("비밀번호가 8자 미만인 경우 유효하지 않음을 반환해야 함", () => {
        const shortPassword = "short";
        const result = validatePassword(shortPassword);
        expect(result).toEqual({
          isValid: false,
          reason: "비밀번호는 8자 이상, 20자 이하여야 합니다.",
        });
      });

      test("비밀번호가 20자 초과인 경우 유효하지 않음을 반환해야 함", () => {
        const longPassword = "thisisaverylongpassword1234567890";
        const result = validatePassword(longPassword);
        expect(result).toEqual({
          isValid: false,
          reason: "비밀번호는 8자 이상, 20자 이하여야 합니다.",
        });
      });
    });

    describe("문자 유형 검사", () => {
      test("대문자가 포함되지 않은 경우 유효하지 않음을 반환해야 함", () => {
        const noUppercasePassword = "password123!";
        const result = validatePassword(noUppercasePassword);
        expect(result.isValid).toBe(false);
        expect(result.reason).toContain("대문자");
      });

      test("소문자가 포함되지 않은 경우 유효하지 않음을 반환해야 함", () => {
        const noLowercasePassword = "PASSWORD123!";
        const result = validatePassword(noLowercasePassword);
        expect(result.isValid).toBe(false);
        expect(result.reason).toContain("소문자");
      });

      test("숫자가 포함되지 않은 경우 유효하지 않음을 반환해야 함", () => {
        const noNumberPassword = "Password!";
        const result = validatePassword(noNumberPassword);
        expect(result.isValid).toBe(false);
        expect(result.reason).toContain("숫자");
      });

      test("특수문자가 포함되지 않은 경우 유효하지 않음을 반환해야 함", () => {
        const noSpecialCharPassword = "Password123";
        const result = validatePassword(noSpecialCharPassword);
        expect(result.isValid).toBe(false);
        expect(result.reason).toContain("특수문자");
      });
    });

    describe("보안 검사", () => {
      test("금지된 특수문자가 포함된 경우 유효하지 않음을 반환해야 함", () => {
        const unsafePassword = "Password123<";
        const result = validatePassword(unsafePassword);
        expect(result.isValid).toBe(false);
        expect(result.reason).toContain("보안상 위험한 문자");
      });
    });

    describe("유효한 비밀번호 검사", () => {
      test("모든 조건을 충족하는 비밀번호는 유효함을 반환해야 함", () => {
        const validPassword = "StrongP@ss123";
        const result = validatePassword(validPassword);
        expect(result.isValid).toBe(true);
        expect(result.reason).toBe("유효한 비밀번호입니다.");
      });
    });
  });

  describe("validateEmail 테스트", () => {
    test("유효한 이메일 입력 시 true를 반환하는지 확인", () => {
      const validEmail = "test@example.com";
      const result = validateEmail(validEmail);
      expect(result).toBeTruthy();
    });

    test("유효하지 않은 이메일 입력 시 false를 반환하는지 확인", () => {
      const invalidEmail = "testexample.com";
      const result = validateEmail(invalidEmail);
      expect(result).toBeFalsy();
    });

    test("도메인 없이 이메일을 허용하지 않아야 함", () => {
      const noDomainEmail = "test@";
      const result = validateEmail(noDomainEmail);
      expect(result).not.toBeTruthy();
    });
  });
});
