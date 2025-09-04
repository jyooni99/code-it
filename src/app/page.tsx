import Card from "./components/Card/index";

export default function Home() {
  return (
    <div className="space-y-4 p-4">
      <Card variant="default" padding="sm" radius="sm" className="max-w-md">
        <h2 className="mb-4 text-xl font-bold">제목</h2>
        <p className="text-gray-600">내용</p>
      </Card>
      <Card variant="outlined" padding="md" radius="md" className="max-w-md">
        <h2 className="mb-4 text-xl font-bold">제목</h2>
        <p className="text-gray-600">내용</p>
      </Card>
      <Card variant="elevated" padding="lg" radius="lg" className="max-w-md">
        <h2 className="mb-4 text-xl font-bold">제목</h2>
        <p className="text-gray-600">내용</p>
      </Card>
    </div>
  );
}
