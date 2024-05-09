const sortObjectsByOrderIdDescending = (data) => {
  return data.sort((a, b) => b.doi - a.doi);
};

function addCommasToNumber(number) {
  if (Number(number) <= 100 || number === undefined) return number;
  return number.toString()?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function convertToIST(utcTimestamp) {
  const utcDate = new Date(utcTimestamp);

  const istDate = new Date(
    utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedISTDateTime = istDate.toLocaleString("en-US", options);

  return formattedISTDateTime;
}

const formatDateUpdated = (dateString) => {
  if (
    dateString === null ||
    dateString === undefined ||
    !dateString ||
    String(dateString) === "undefined"
  ) {
    return "-";
  }
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(-4);

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
};

const convertToYYYYMMDD = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

module.exports = {
  addCommasToNumber,
  convertToIST,
  formatDateUpdated,
  sortObjectsByOrderIdDescending,
  convertToYYYYMMDD
};
