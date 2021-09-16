const btns = document.querySelectorAll('.btn');
btns[1].classList.add("active");
write('weekly')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const frequency = btn.dataset.time;
    btns.forEach(btn => btn.classList.remove('active'))
    
   btn.classList.add('active')
    write(frequency)
  })
})


const activityCards = document.querySelectorAll('.card-content')


const currentEl = document.querySelector(".current-number");


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
       currentEl.innerText = currentHours;
       prevEl.innerText = previousHours;
     });
   })
}

