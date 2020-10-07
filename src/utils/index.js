const getDaysOfNextWeek = () => {
  let currentDay = new Date();
  let week = [];

  for (let i = 0; i <= 6; i++) {
    let nextDay = currentDay.getDate() + 1;
    let day = new Date(currentDay.setDate(nextDay)).toString().split(" ")[0];
    week.push(day);
  }

  return week;
};

const firstLetterToCapital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const measureScreenHeight = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
};

export { getDaysOfNextWeek, firstLetterToCapital, measureScreenHeight };
