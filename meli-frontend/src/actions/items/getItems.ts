import { ResposeItems } from "@/types/items";
import axios from "axios";

export const getItems = async (q: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/items?q=${q}`;
    const { data }: { data: ResposeItems } = await axios.get(url);

    return data;
  } catch (error) {
    return { items: [], categories: [] };
  }
};
