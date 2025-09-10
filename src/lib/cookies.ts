// 함수를 어떨 때 사용하는가?
// document.cookie를 출력하면 웹사이트에 저장된 모든 쿠키가 하나의 문자열로 나오기 때문에
// 쿠키를 추가하거나, 삭제하는 것이 까다롭다.
// 이를 위해 간단하게 쿠키를 조작할 수 있는 함수를 생성하면 이 번거로움이 해결된다.

interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  "max-age"?: number;
  secure?: boolean;
  samesite?: "Strict" | "Lax" | "None";
  [key: string]: string | number | boolean | Date | undefined;
}

// 쿠키 추가하는 함수
export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
) {
  options = {
    path: "/",
    ...options,
  };

  let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value); // 'favorite-icecream=mint-choco'

  for (const optionKey in options) {
    const optionValue = options[optionKey];

    if (
      optionValue === undefined ||
      optionValue === null ||
      optionValue === false
    )
      continue;

    let finalValue = optionValue;

    // 값이 날짜 데이터인 경우 처리
    if (optionValue instanceof Date) {
      finalValue = optionValue.toUTCString();
    }

    cookieString += `; ${optionKey}`;

    // 옵션 값이 true가 아닐 경우 '=옵션값'을 추가 (ex: max-age=3600)
    if (finalValue !== true) {
      cookieString += `=${finalValue}`;
    }
  }

  document.cookie = cookieString;
}

// 사용 예시
setCookie("user", "kim", {
  path: "/",
  secure: true,
  "max-age": 3600,
});

// 특정 키의 쿠키가 존재하는지 확인하는 함수
export function isCookieExists(name: string): boolean {
  const encodedName = encodeURIComponent(name);

  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodedName + "="))
    ? true
    : false;
}

// 특정 쿠키 제거하는 함수
export function deleteCookie(name: string) {
  setCookie(name, "", {
    "max-age": 0,
  });
}
