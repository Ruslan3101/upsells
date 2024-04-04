import { format } from "date-fns";
import { Timestamp } from "firebase/firestore";

export function FormattedDate(value) {
  if (value !== null && value !== undefined && value instanceof Timestamp) {
    const date = value.toDate();
    return format(date, "MMMM d, yyyy, hh:mm:ss a");
  } else {
    return "Date not available";
  }
}
