const changeFormat = (dateString) => {
   if(!dateString)
    return ""
    const [year, month, day] = dateString?.split("-");
    return `${day}-${month}-${year}`;
};

function calculateAge(allInfo) {
  const birthDate = changeFormat(allInfo?.otherInfo[0]?.DateOfBirth);
  console.log("birthDate",birthDate)
  if (!birthDate) {
    return "Invalid date";
  }
  var dateComponents = birthDate?.split("-");
  var birthDay = parseInt(dateComponents[0]);
  var birthMonth = parseInt(dateComponents[1]);
  var birthYear = parseInt(dateComponents[2]);
  var currentDate = new Date();

  var yearsDiff = currentDate.getFullYear() - birthYear;
  var monthsDiff = currentDate.getMonth() - (birthMonth - 1);

  if (
    monthsDiff < 0 ||
    (monthsDiff === 0 && currentDate.getDate() < birthDay)
  ) {
    yearsDiff--;
    monthsDiff += 12;
  }

  var ageString = yearsDiff + " years ";
  if (monthsDiff > 0) {
    ageString += monthsDiff + " months";
  }
  return ageString;
}

module.exports = {
  changeFormat,
  calculateAge
};
