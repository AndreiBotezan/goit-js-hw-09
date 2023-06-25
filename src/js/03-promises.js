import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({ position: 'center-top' });

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      const result = { position, delay };
      if (shouldResolve) {
        resolve(result);
      } else {
        reject(result);
      }
    }, delay);
  });
}

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let delayValue = Number(delayEl.value);
  const stepValue = Number(stepEl.value);
  const amountValue = Number(amountEl.value);
  formEl.reset();

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue) //
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`); //
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected promise ${position} in ${delay}ms`); //
      });

    delayValue += stepValue;
  }
}
