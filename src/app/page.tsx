import Badge from "./components/Badge";

export default function Home() {
  return (
    <div className="space-x-2">
      <Badge>Default</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning" outlined>
        Warning
      </Badge>
      <Badge variant="danger" rounded>
        Error
      </Badge>
      <Badge variant="info" size="md" withDot>
        Information
      </Badge>
    </div>
  );
}
