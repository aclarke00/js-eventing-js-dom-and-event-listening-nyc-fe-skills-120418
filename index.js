// const main = document.getElementById('main')
 
// main.addEventListener('click', function(event) {
//   alert('I was clicked!')
// })


// const input = document.querySelector('input')
// input.addEventListener('keydown', e => console.log(e.which))


// const input = document.querySelector('input')
 
// input.addEventListener('keydown', e => {
//   if (e.which === 71) {
//     return e.preventDefault()
//   }
// })

let divs = document.querySelectorAll('div')
 
function bubble(e) {
  
  console.log(this.firstChild.nodeValue.trim() + ' bubbled')
}
 
for (const aDiv of divs) {
  aDiv.addEventListener('click', bubble);
}