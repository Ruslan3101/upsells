import { format } from "date-fns";

export function FormattedDate(value) {
  const date = value.toDate();

  return format(date, "MM-dd-yyyy");
}
