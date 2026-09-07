import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { publishedProducts, type Product } from "@/lib/products";

export const metadata: Metadata = {
  title: "sale — whoisnacho",
  description: "Cosas a la venta.",
};

function Article({ product }: { product: Product }) {
  return (
    <article className="article">
      {product.photos.length > 0 ? (
        <div className="photos">
          {product.photos.map((src) => (
            <Image key={src} src={src} alt={product.title} width={220} height={160} />
          ))}
        </div>
      ) : null}
      <h2>{product.title}</h2>
      <p className="price">{product.price}</p>
      {product.specs.length > 0 ? (
        <ul className="specs">
          {product.specs.map((spec) => (
            <li key={`${spec.label}-${spec.value}`}>
              {spec.label}: {spec.value}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function SalePage() {
  const items = publishedProducts();

  return (
    <div className={items.length === 0 ? "page" : "page sale"}>
      <h1>sale</h1>
      {items.length === 0 ? (
        <>
          <div className="stage-grid" aria-hidden="true">
            {Array.from({ length: 8 }, (_, i) => (
              <div className="stage-slot" key={i} />
            ))}
          </div>
          <div className="panel">
            <p>en este momento no hay publicaciones</p>
          </div>
        </>
      ) : (
        <div className="catalog">
          {items.map((product) => (
            <Article key={product.slug} product={product} />
          ))}
        </div>
      )}
      <SiteFooter />
    </div>
  );
}
