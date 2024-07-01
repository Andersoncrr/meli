import { convertItemFormat } from "@/helpers/dataConverter";
import { Description } from "@/types/description";
import { Item } from "@/types/item";
import axios from "axios";

export const getItemByIdService = async (idItem: string) => {
  const urlItem = `${process.env.URL_API_MELI}/items/${idItem}`;
  const urlItemDescription = `${process.env.URL_API_MELI}/items/${idItem}/description`;
  const responseItem = axios.get(urlItem);
  const responseItemDescription = axios.get(urlItemDescription);

  const [{ data: dataItem }, { data: dataDescription }]: [
    { data: Item },
    { data: Description }
  ] = await Promise.all([responseItem, responseItemDescription]);

  return await convertItemFormat({
    item: dataItem,
    description: dataDescription,
  });
};
