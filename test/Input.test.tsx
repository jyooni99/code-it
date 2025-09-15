import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "@/components/Input";

test("Input 컴포넌트에 값이 없으면 X버튼이 보이지 않는다", () => {
  render(<Input />);

  const input = screen.getByRole("textbox"); // 화면에 보이는 요소를 선택할 때에는 get
  const deleteButton = screen.queryByRole("button", { name: "입력값 지우기" }); //화면에 보이지 않는 요소를 선택할 때에는 query,

  expect(input).toHaveValue("");
  expect(deleteButton).not.toBeInTheDocument();
});

test("Input 컴포넌트에 값이 있으면 X버튼이 보인다.", () => {
  render(<Input defaultValue="입력값" />);

  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  expect(input).toHaveValue("입력값");
  expect(deleteButton).toBeInTheDocument();
});

test("X 버튼 클릭 시 입력 값이 지워진다", () => {
  render(<Input defaultValue="입력값" />);

  const input = screen.getByRole("textbox");
  const deleteButton = screen.getByRole("button", { name: "입력값 지우기" });

  fireEvent.click(deleteButton);

  expect(input).toHaveValue("");
  expect(deleteButton).not.toBeInTheDocument();
});
