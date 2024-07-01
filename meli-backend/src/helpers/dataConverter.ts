import { AUTHOR, CATEGORY } from "@/const/general";
import { Category } from "@/types/category";
import { Currency } from "@/types/currency";
import { Description } from "@/types/description";
import { Item } from "@/types/item";
import { Filter, Result, Items } from "@/types/items";
import axios from "axios";

const getCategories = (filters: Filter[]) => {
  const category = filters.find((filter) => filter.id === CATEGORY);
  const categories =
    category?.values[0].path_from_root?.map((category) => category.name) ?? [];
  return categories;
};

export const getItems = async (items: Result[]): Promise<any[]> => {
  const itemPromises = items.map(
    async ({
      id,
      title,
      currency_id,
      price,
      thumbnail,
      condition,
      shipping,
    }) => {
      const url = `${process.env.URL_API_MELI}/currencies/${currency_id}`;
      const { data }: { data: Currency } = await axios.get(url);

      return {
        id,
        title,
        price: {
          currency: data.id,
          amount: price,
          decimals: data.decimal_places,
        },
        picture: thumbnail.replace("I", "O"),
        condition,
        free_shipping: shipping.free_shipping,
      };
    }
  );

  return Promise.all(itemPromises);
};

export const convertItemsFormat = async (data: Items) => {
  const categories = getCategories(data.filters);
  const items = await getItems(data.results);
  return { author: AUTHOR, categories, items };
};

const getCategoriesByid = async (idCategory: string) => {
  const url = `${process.env.URL_API_MELI}/categories/${idCategory}`;
  const { data }: { data: Category } = await axios.get(url);
  const categories =
    data.path_from_root?.map((category) => category.name) ?? [];
  return categories;
};

const getItem = async (data: { item: Item; description: Description }) => {
  const {
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping,
    initial_quantity,
    category_id,
  } = data.item;
  const { plain_text } = data.description;

  const url = `${process.env.URL_API_MELI}/currencies/${currency_id}`;
  const { data: dataCurrency }: { data: Currency } = await axios.get(url);

  return {
    id,
    title,
    price: {
      currency: dataCurrency.id,
      amount: price,
      decimals: dataCurrency.decimal_places,
    },
    picture: thumbnail.replace("I", "O"),
    condition,
    free_shipping: shipping.free_shipping,
    description: plain_text,
    sold_quantity: initial_quantity,
    category_id,
  };
};

export const convertItemFormat = async (data: {
  item: Item;
  description: Description;
}) => {
  const item = await getItem(data);
  const categories = await getCategoriesByid(item.category_id);
  return { author: AUTHOR, item, categories };
};
