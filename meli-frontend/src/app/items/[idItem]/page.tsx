import Image from "next/image";
import "./styles/item.scss";
import { getItem } from "@/actions/items";
import { formatCurrency } from "@/helpers/format";
import { status } from "@/helpers/status";
import { Breadcrumb } from "@/components";
import { Metadata } from "next";

type Props = {
  params: { idItem: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { item } = await getItem(params.idItem);

  return {
    title: item.title,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
      type: "website",
      siteName: "mercadolibre.com",
    },
  };
}

export default async function Item({ params }: Props) {
  const { item, categories } = await getItem(params.idItem);
  const { integerPart, decimalPart } = formatCurrency(item.price);

  return (
    <>
      <Breadcrumb categories={categories} />
      <main className="item">
        <section className="item__header">
          <div className="item__header-content">
            <Image
              src={item.picture}
              alt={item.title}
              width={600}
              height={700}
              className="item__header-content-image"
              priority
            />
            <article className="item__body">
              <h2 className="item__body-description">
                Descripción del producto
              </h2>
              <p>{item.description}</p>
            </article>
          </div>
          <aside className="item__header-description">
            <span>
              {status(item.condition)} - {item.sold_quantity} vendidos
            </span>
            <h1 className="item__header-description-title">{item.title}</h1>
            <span className="item__header-description-price">
              {integerPart} <sup>{decimalPart}</sup>
            </span>
            <button className="item__header-description-buy">Comprar</button>
          </aside>
        </section>
      </main>
    </>
  );
}
