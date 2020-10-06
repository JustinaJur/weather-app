const getDaysOfNextWeek = () => {
  let current = new Date();
  let week = [];

  for (let i = 1; i <= 7; i++) {
    let first = current.getDate() - current.getDay() + i;
    let day = new Date(current.setDate(first)).toString().split(" ")[0];
    week.push(day);
  }
  return week;
};

export { getDaysOfNextWeek };
