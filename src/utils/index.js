import moment from "moment";

export const getDateDiff = (start, end) => {
  var a = moment(end === "Present" ? new Date() : end);
  var b = moment(start);

  var years = a.diff(b, "year");
  b.add(years, "years");

  var months = a.diff(b, "months");
  b.add(months, "months");

  //var days = a.diff(b, "days");

  const diff = years + " years " + months + " months "; // 8 years 5 months

  return diff;
};
