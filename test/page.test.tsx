import Home from "../app/page";
import { render, screen } from "@testing-library/react";

describe("MSW 모킹 테스트", () => {
  test("fech API 모킹 테스트", async () => {
    render(<Home />);

    const postListItems = await screen.findAllByRole("listitem");

    expect(postListItems).toHaveLength(1);
    expect(screen.getByText("1: 첫 번째 게시글")).toBeInTheDocument();
  });
});
