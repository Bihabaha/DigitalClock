const clock = document.querySelector('.clock')

const tick =()=>{
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

  

    const html =`

<span>${h}</span>:
<span>${m}</span>:
<span>${s}</span>

    `
    clock.innerHTML=html

};

setInterval(tick,1000)








// const now = new Date();

// console.log(now)


// //years ,months,day,times

// console.log('getFullYear',now.getFullYear())
// console.log('getMonth',now.getMonth())
// console.log('getDate',now.getDate())
// console.log('getDate',now.getDate())
// console.log('getDate',now.getDay())
// console.log('getHours',now.getHours())

// //timestamps


// console.log('timestamps',now.getTime());

// //date strings

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleString())