
const calendarButton = document.querySelector(".btn-start");
const calendaContainer = document.querySelector(".container");

const calendaDays = 24;
const openDoor = (path, event) =>{
    event.target.parentNode.style.backgroundImage =`url(${path})`;
    event.target.style.opacity = "0";
    event.target.style.backgroundColor = "#521751";
}
const createCalendar = () => {
  for (let i = 0; i < calendaDays; i++) {
    const calendarDoor = document.createElement("div");
    const calendarDoorText = document.createElement("div");

    calendarDoor.classList.add("image");
    calendarDoor.style.gridArea = "door" + (i + 1);
    calendaContainer.appendChild(calendarDoor);

    calendarDoorText.classList.add("text");
    calendarDoorText.innerHTML= i+1;
    calendarDoor.appendChild(calendarDoorText);

    imageNumber = i+1;
    let imagePath = `./images/course-${imageNumber}.jpg`;
    calendarDoorText.addEventListener("click", openDoor.bind(this,imagePath));
  }
};

calendarButton.addEventListener("click", createCalendar);