import React from "react";
import "./styles/breadcrumb.scss";

type Props = {
  categories: string[];
};

export const Breadcrumb = ({ categories }: Props) => {
  return (
    <nav className="breadcrumb">
      <ol className="breadcrumb__list">
        {categories.map((category, index) => (
          <li key={index} className="breadcrumb__item">
            {category}
            {index < categories.length - 1 && (
              <span className="breadcrumb__separator"> &gt; </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
