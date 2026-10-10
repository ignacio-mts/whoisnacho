import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locomotora",
  description: "Aplicación de uso personal. Personal-use application.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function LocomotoraPage() {
  return (
    <div className="page">
      <h1>Locomotora</h1>
      <div className="panel">
        <div className="caption">
          <p>Aplicación de uso personal. / Personal-use application.</p>
          <p>
            <Link href="/app/privacy">privacidad / privacy</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
