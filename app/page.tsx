import { SiteFooter } from "@/components/site-footer";

export default function HomePage() {
  return (
    <div className="page">
      <h1>whoisnacho</h1>
      <p className="blink">en construccion</p>
      <div className="panel">
        <div className="caption">
          <p>sitio personal</p>
          <p className="muted">por ahora, no hay mucho que ver</p>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
}
