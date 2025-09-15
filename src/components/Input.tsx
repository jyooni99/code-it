"use client";

import { useState } from "react";
import { DeleteIconButton } from "@/components/DeleteIconButton";

interface InputProps {
  id?: string;
  name?: string;
  defaultValue?: string;
  type?: "text" | "password" | "email" | "number"; // 필요한 타입을 추가할 수 있습니다.
  placeholder?: string;
  // 추가적인 props가 필요하다면 여기에 정의할 수 있습니다.
}
export const Input = ({
  id,
  name,
  defaultValue = "",
  type = "text",
  placeholder,
}: InputProps) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="relative inline-block w-full">
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="p-2 pr-8 border border-gray-300 rounded-md w-full"
      />
      {value && (
        <button
          type="button"
          onClick={() => setValue("")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
          aria-label="입력값 지우기"
        >
          <DeleteIconButton />
        </button>
      )}
    </div>
  );
};
