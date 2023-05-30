const opening = () => {
  const operation = document.querySelector("[data-week]");
  console.log(operation);
  const daysOfTheWeek = operation.dataset.week.split(",").map(Number);
  const openingHours = operation.dataset.schedule.split(",").map(Number);
  const currentDate = new Date();

  const currentDay = currentDate.getDay();
  const currentTime = currentDate.getHours();

  const isOpen = daysOfTheWeek.indexOf(currentDay) !== -1;
  const openingTime =
    currentTime >= openingHours[0] && currentTime < openingHours[1];

  if (isOpen && openingTime) {
    operation.classList.add("open");
  }
};
export default opening;
