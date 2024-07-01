import { convertItemsFormat } from "@/helpers/dataConverter";
import { Items } from "@/types/items";
import axios from "axios";

export const getItemsService = async (q: string, limit: string) => {
  const url = `${process.env.URL_API_MELI}/sites/MLA/search?q=${q}&limit=${limit}`;
  const { data }: { data: Items } = await axios.get(url);

  return await convertItemsFormat(data);
};
