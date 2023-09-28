const date_time = new Date();

const showDate = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("date-display").innerHTML = `${date_time.getDate()}/${
    months[date_time.getMonth()]
  }/${date_time.getFullYear()}`;
};

const showTime = () => {
  document.getElementById("time-display").innerHTML = String(date_time);
};
