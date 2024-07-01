import { Breadcrumb, Card } from "@/components";
import "./styles/items.scss";
import { getItems } from "@/actions/items";
import { Metadata } from "next";

type Props = {
  searchParams: {
    search: string;
  };
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `${searchParams.search} | MercadoLibre 📦`,
    description: `Envíos Gratis en el día ✓ Compre ${searchParams.search} en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.`,
    openGraph: {
      title: `${searchParams.search} | MercadoLibre 📦`,
      description: `Envíos Gratis en el día ✓ Compre ${searchParams.search} en cuotas sin interés! Conozca nuestras increíbles ofertas y promociones en millones de productos.`,
      type: "website",
      siteName: "mercadolibre.com",
    },
  };
}

export default async function Items({ searchParams }: Props) {
  const { items, categories } = await getItems(searchParams.search);
  return (
    <main>
      <Breadcrumb categories={categories} />
      <ul className="items__list">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}
