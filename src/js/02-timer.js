import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const datetimePicker = document.querySelector("#datetime-picker");
const startButton = document.querySelector('[data-start]');
const daysElement = document.querySelector('[data-days]');
const hoursElement = document.querySelector('[data-hours]');
const minutesElement = document.querySelector('[data-minutes]');
const secondsElement = document.querySelector('[data-seconds]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
flatpickr(datetimePicker, options);
startButton.addEventListener('click', () => {
  const selectedDate = datetimePicker.value;
  const currentDate = new Date();
  const endDate = new Date(selectedDate);
  if (endDate < currentDate) {
    window.alert('Please choose a date in the future');
    return;
  }
  
  const timeRemaining = endDate - currentDate;
  const time = convertMs(timeRemaining);
  
  daysElement.innerText = addLeadingZero(time.days);
  hoursElement.innerText = addLeadingZero(time.hours);
  minutesElement.innerText = addLeadingZero(time.minutes);
  secondsElement.innerText = addLeadingZero(time.seconds);
  
  const interval = setInterval(() => {
    const timeRemaining = endDate - new Date();
    const time = convertMs(timeRemaining);
    daysElement.innerText = addLeadingZero(time.days);
    hoursElement.innerText = addLeadingZero(time.hours);
    minutesElement.innerText = addLeadingZero(time.minutes);
    secondsElement.innerText = addLeadingZero(time.seconds);
  
    if (timeRemaining < 1000) {
      clearInterval(interval);
    }
  }, 1000);
});
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}