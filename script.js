// {
//     "title": "Work",
//     "timeframes": {
//       "daily": {
//         "current": 5,
//         "previous": 7
//       },
//       "weekly": {
//         "current": 32,
//         "previous": 36
//       },
//       "monthly": {
//         "current": 103,
//         "previous": 128
//       }
//     }
//   }


const sel = document.querySelector('select')


function write() {
  const val = sel.value;
  fetch('data.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(el => {
      const currentHours = el.timeframes[`${val}`].current;
     const previousHours = el.timeframes[`${val}`].previous;
     console.log(currentHours, previousHours)
    }
    )
    
  })
}
sel.addEventListener('change', write)
