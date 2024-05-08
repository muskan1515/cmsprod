const changeFormat = (dateString) => {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const dateParts = new Date(dateString)
    .toLocaleDateString("en-GB", options)
    .split("/");
  const formattedDate = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2];
  return formattedDate;
};

const formatDate = (dateString) => {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  const dateParts = new Date(dateString)
    .toLocaleDateString("en-GB", options)
    .split("/");
  const formattedDate = dateParts[0] + "-" + dateParts[1] + "-" + dateParts[2];
  return formattedDate;
};

module.exports = {
  formatDate,
  changeFormat,
};
