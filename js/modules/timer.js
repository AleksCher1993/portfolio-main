export const timer = (strDate = "31 march 2022") => {
  let timerTime = document.querySelector(".timer__time");
  let newDate = new Date(strDate);
  let newTimeDate = newDate.getTime();
  let interval;

  const filterDate = (days, hour, min, sec) => {
    let hours = hour < 10 ? "0" + hour : hour;
    let mins = min < 10 ? "0" + min : min;
    let secs = sec < 10 ? "0" + sec : sec;
    return `${days} ${hours}:${mins}:${secs}`;
  };
  const filterDays = (dayNumber) => {
    let nameDay;
    if (dayNumber % 10 === 1) {
      nameDay = "день";
    } else if (
      dayNumber === 11 ||
      dayNumber === 12 ||
      dayNumber === 13 ||
      dayNumber === 14
    ) {
      nameDay = "дней";
    } else if (
      dayNumber % 10 === 2 ||
      dayNumber % 10 === 3 ||
      dayNumber % 10 === 4
    ) {
      nameDay = "дня";
    } else {
      nameDay = "дней";
    }
    return dayNumber + " " + nameDay;
  };
  const updateTimer = () => {
    let date = new Date();
    let timeDate = date.getTime();
    let diffDate = newTimeDate - timeDate;

    let days = newDate.getDate() - date.getDate() - 1;
    let hours = Math.floor((diffDate / 1000 / 60 / 60) % 24);
    let minutes = Math.floor((diffDate / 1000 / 60) % 60);
    let second = Math.floor((diffDate / 1000) % 60);
    if (diffDate < 0) {
      timerTime.innerHTML = `00:00:00`;
      window.clearInterval(interval);
    } else
      timerTime.innerHTML = filterDate(
        filterDays(days),
        hours,
        minutes,
        second
      );
  };

  updateTimer();

  interval = window.setInterval(updateTimer, 500);
};
