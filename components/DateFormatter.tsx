import { format, parseISO } from "date-fns";
import React from "react";

interface DateFormatterProps {
  dateString: string;
}
const DateFormatter = (props: DateFormatterProps) => {
  const { dateString } = props;
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
