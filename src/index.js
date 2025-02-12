console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton');
console.log(launchButton);
const confirmButton = document.querySelector('#confirmButton');
const cancelButton = document.querySelector('#cancelButton');

// B- MESSAGES
const successMessage = document.querySelector('.success');
const failureMessage = document.querySelector(".failure");

// C- MODAL
const modal = document.querySelector('.modal');


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html // done
//  B- The DOM's element.onclick attribute
launchButton.onclick = function() {
    console.log('Second method');
}

//  C- element.addEventListener('click', callback)
launchButton.addEventListener('click', () => {
    console.log('Third method');
})

Array.from(document.links).forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
    })
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
function launch() {
    modal.classList.remove('off');
    successMessage.classList.add('off');
    failureMessage.classList.add('off');
}
launchButton.addEventListener('click', launch);

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm() {
    modal.classList.add('off');
    successMessage.classList.remove('off');
}
confirmButton.addEventListener('click', confirm)

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel() {
    modal.classList.add('off');
    failureMessage.classList.remove('off');
}
cancelButton.addEventListener('click', cancel)

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function exitModal(e) {
    if (e.key === "Escape") {
        modal.classList.add("off");
    }
}
document.addEventListener("keydown", exitModal);

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
document
    .querySelectorAll("*")
    .forEach(element => element.addEventListener("click", element => {
        console.log("🎯 target: ", element.target);
        console.log("🧭 current target: ", element.currentTarget);
        console.log("\n");
    }))
modal.addEventListener("click", evt => {
    console.log("You shall not pass!");
    evt.stopPropagation();
})

// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
// function openModal() {

// }

// function closeModal() {

// }

// function killReports() {

// }


// 👉 TASK 9- [STRETCH] Using the mousemove event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
const coordsDisplay = document.createElement("div");
coordsDisplay.style.position = "fixed";
coordsDisplay.style.bottom = "10px";
coordsDisplay.style.left = "10px";
coordsDisplay.style.background = "black";
coordsDisplay.style.color = "white";
coordsDisplay.style.padding = "5px";
document.body.appendChild(coordsDisplay);

document.addEventListener("mousemove", event => {
    coordsDisplay.textContent = `Mouse X: ${event.clientX}, Mouse Y: ${event.clientY}`;
})
