const formatCorrectly = (number) => {
  number = number <= 9 ? `0${number}` : number;
  return number;
};

const getCurrentTime = () => {
  const date = new Date();
  let currentTime;
  let currentTimeInAmPm;

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();

  seconds = formatCorrectly(seconds);
  minutes = formatCorrectly(minutes);
  hours = formatCorrectly(hours);

  currentTime = `${hours} : ${minutes} : ${seconds}`;

  if (hours > 12) {
    hours = hours - 12;
    currentTimeInAmPm = `${hours} : ${minutes} : ${seconds} PM`;
  } else if (hours < 12) {
    currentTimeInAmPm = `${hours} : ${minutes} : ${seconds} AM`;
  } else {
    currentTimeInAmPm = `${hours} : ${minutes} : ${seconds} PM`;
  }

  console.log(currentTimeInAmPm);
};

getCurrentTime();

setInterval(getCurrentTime, 1000);
