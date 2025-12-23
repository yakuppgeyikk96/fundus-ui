import { Button } from "@fundus-ui/button";
import "@fundus-ui/button/style.css";
// CSS import'u kaldırıldı - Button zaten styles içeriyor

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Button Test</h1>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="warning">Warning</Button>
        <Button variant="info">Info</Button>
      </div>
      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button fullWidth>Full Width</Button>
      </div>
    </div>
  );
}
