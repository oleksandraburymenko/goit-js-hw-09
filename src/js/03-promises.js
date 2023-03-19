import Notiflix from 'notiflix';

function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const timeout = delay + (position - 1) * step;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, timeout);
  });
}

const form = document.querySelector('.form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const delay = parseInt(form.delay.value);
  const step = parseInt(form.step.value);
  const amount = parseInt(form.amount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay, step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});