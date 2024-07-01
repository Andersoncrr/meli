import Image from "next/image";
import "./styles/card.scss";
import { Item } from "@/types/items";
import { formatCurrency } from "@/helpers/format";
import { status } from "@/helpers/status";
import Link from "next/link";

type Props = {
  item: Item;
};

export const Card = ({ item }: Props) => {
  const { integerPart, decimalPart } = formatCurrency(item.price);
  return (
    <li className="card">
      <Link href={`/items/${item.id}`} className="card__link">
        <Image
          src={item.picture}
          width={170}
          height={170}
          alt={item.title}
          priority
        />
        <div className="card__content">
          <div className="card__content-description">
            <h2 className="card__content-description-title">
              {integerPart} <sup>{decimalPart}</sup>
            </h2>
            <span>{item.title}</span>
          </div>
          <div className="card__content-city">
            <span>{status(item.condition)}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};
