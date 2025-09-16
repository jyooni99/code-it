import Home from "@/app/page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen, waitFor } from "@testing-library/react";

// 테스트용 쿼리 클라이언트 생성
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Infinity,
      },
    },
  });

const renderWithQueryClient = (component: React.ReactElement) => {
  const testQueryClient = createTestQueryClient();

  return render(
    <QueryClientProvider client={testQueryClient}>{component}</QueryClientProvider>
  );
};

describe("메인 페이지 테스트", () => {
  describe("useQuery 테스트", () => {
    test("로딩 상태가 올바르게 표시되는 지 확인", () => {
      renderWithQueryClient(<Home />);

      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("데이터가 성공적으로 로드되고 표시되는 지 확인", async () => {
      const mockData = [
        {
          id: 1,
          title: "1번 데이터",
          body: "1번 데이터 내용",
        },
        {
          id: 2,
          title: "2번 데이터",
          body: "2번 데이터 내용",
        },
      ];

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: jest.fn().mockResolvedValue(mockData),
      });

      renderWithQueryClient(<Home />);

      await waitFor(() => {
        const listitems = screen.getAllByRole("listitem");
        expect(listitems).toHaveLength(mockData.length);
      });
    });

    test("API 호출 실패 시 에러 상태가 올바르게 표시되는 지 확인", async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({ ok: false });

      renderWithQueryClient(<Home />);

      await waitFor(() => {
        const errorMessage = screen.getByText(
          "서버에서 데이터를 가져오는 데 실패했습니다."
        );
        expect(errorMessage).toBeInTheDocument();
      });
    });
  });
});
