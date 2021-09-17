const btns = document.querySelectorAll('.btn');
const activityCards = document.querySelectorAll(".card-content")

const savedFrequency = localStorage.getItem('timeframe');

if(savedFrequency) {
  write(savedFrequency)
} else {
  write('weekly')
}

btns.forEach(btn => {
  const frequency = btn.dataset.time;
  if (savedFrequency === frequency) {
    btn.classList.add("active");
  }
  btn.addEventListener('click', () => {
    btns.forEach(btn => btn.classList.remove('active'))
    btn.classList.add('active')
    write(frequency)
    localStorage.setItem("timeframe", frequency);
  })
})

function write(frequency) {
  fetch('data.json')
  .then(res => res.json())
  .then(data => {
     data.forEach((el, i) => {
       const currentHours = el.timeframes[`${frequency}`].current;
       const previousHours = el.timeframes[`${frequency}`].previous;
       const card = activityCards[i];
       const currentEl = card.querySelector(".current-number")
       const prevEl = card.querySelector('.previous-number')
       const prevTimespan = card.querySelector('.previous-timespan')
       if(frequency === 'daily') {
         prevTimespan.innerText = 'day'
       } else if(frequency === 'weekly') {
         prevTimespan.innerText = 'week'
       } else {
         prevTimespan.innerText = 'month'
       }
       currentEl.innerText = currentHours;
       prevEl.innerText = previousHours;
     });
   })
}

