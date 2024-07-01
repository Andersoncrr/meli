"use client";

import { useSearchParams } from "next/navigation";

export const Input = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search") ?? "";

  return (
    <input
      className="header__search-input"
      placeholder="Nunca dejes de buscar"
      name="search"
      defaultValue={search}
    />
  );
};
