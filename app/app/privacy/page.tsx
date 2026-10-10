import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacidad — Locomotora",
  description: "Uso personal. Personal use.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PrivacyPage() {
  return (
    <div className="page doc">
      <h1>privacidad</h1>
      <div className="panel">
        <div className="caption">
          <p className="muted">10 de octubre de 2026 / October 10, 2026</p>
          <p lang="es">
            Locomotora es de uso personal y la utiliza solo su propietario. No se
            venden, comparten ni transfieren datos a terceros. El acceso se puede
            revocar en{" "}
            <a
              href="https://myaccount.google.com/permissions"
              rel="nofollow noreferrer"
            >
              https://myaccount.google.com/permissions
            </a>
            . Contacto:{" "}
            <a href="mailto:ia.mieites@gmail.com" rel="nofollow">
              ia.mieites@gmail.com
            </a>
            .
          </p>
          <p lang="en">
            Locomotora is for personal use by its owner only. No data is sold,
            shared, or transferred to third parties. Access can be revoked at{" "}
            <a
              href="https://myaccount.google.com/permissions"
              rel="nofollow noreferrer"
            >
              https://myaccount.google.com/permissions
            </a>
            . Contact:{" "}
            <a href="mailto:ia.mieites@gmail.com" rel="nofollow">
              ia.mieites@gmail.com
            </a>
            .
          </p>
          <p>
            <Link href="/app">Locomotora</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
