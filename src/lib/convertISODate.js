import { format } from "date-fns";
import { id } from "date-fns/locale";

export const convertISODate = (ISODate) => {
  const date = new Date(ISODate);
  const formatedDate = format(date, "EEEE, dd MMMM yyyy", {
    locale: id,
  });
  return formatedDate;
};
