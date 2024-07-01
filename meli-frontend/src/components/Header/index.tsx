import Image from "next/image";

import "./styles/header.scss";
import { Input } from "../Input";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link href="/">
          <Image src="/icons/logo.png" width={50} height={34} alt="logo-meli" />
        </Link>
        <form className="header__search" action="/items">
          <Input />
          <button type="submit" className="header__search-button">
            <Image
              src="/icons/search.png"
              width={16}
              height={16}
              alt="icon-search"
            />
          </button>
        </form>
      </div>
    </header>
  );
};
