import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("CartPage 컴포넌트 테스트", () => {
  test("로그인 하지 않은 상태에서 추가 버튼 클릭 시 경고하는 alert가 호출되어야 함", () => {
    const mockAlert = jest.spyOn(window, "alert").mockImplementation(() => {});
    render(<Home />);

    const addButton = screen.getByRole("button", { name: "추가" });
    fireEvent.click(addButton);

    expect(mockAlert).toHaveBeenCalledWith("로그인하지 않으면 추가할 수 없습니다.");
    mockAlert.mockRestore();
  });

  test("로그인 한 상태에서 추가 버튼 클릭 시 카운트가 증가해야 함", () => {
    render(<Home />);

    const loginButton = screen.getByRole("button", { name: "로그인" });
    fireEvent.click(loginButton);

    expect(screen.getByText("로그인됨: user@example.com")).toBeInTheDocument();

    const addButton = screen.getByRole("button", { name: "추가" });
    fireEvent.click(addButton);

    expect(screen.getByText("상품 개수: 1")).toBeInTheDocument();
  });

  test("상품이 0개일 때 제거 버튼이 비활성화 되어야 함", () => {
    render(<Home />);

    const removeButton = screen.getByRole("button", { name: "제거" });
    expect(removeButton).toBeDisabled();
  });

  test("상품이 1개 이상일 때 제거 버튼이 활성화 되어야 함", () => {
    render(<Home />);

    const loginButton = screen.getByRole("button", { name: "로그인" });
    fireEvent.click(loginButton);

    const addButton = screen.getByRole("button", { name: "추가" });
    fireEvent.click(addButton);
    fireEvent.click(addButton);

    const removeButton = screen.getByRole("button", { name: "제거" });
    fireEvent.click(removeButton);

    expect(screen.getByText("상품 개수: 1")).toBeInTheDocument();
  });
});
