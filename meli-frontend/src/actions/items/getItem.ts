import { Item, ResponseItem } from "@/types/item";
import axios from "axios";

export const getItem = async (idItem: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/items/${idItem}`;
    const { data }: { data: ResponseItem } = await axios.get(url);
    return data;
  } catch (error) {
    return { item: { price: {} } } as ResponseItem;
  }
};
