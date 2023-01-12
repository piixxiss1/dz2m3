let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
let reset = document.querySelector('.reset')


red.addEventListener('click', ()=> {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'red',
        console.log(' its red');
    },800)
})

yellow.addEventListener('click', ()=> {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'yellow',
        console.log('Paint it yellow');
    },800)
})

green.addEventListener('click', ()=> {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'green',
        console.log(' its green');
        },800)
})

reset.addEventListener('click', ()=> {
    setTimeout(()=>{
        document.body.style.backgroundColor = 'white'
        console.log("reset");
    },800)
})







