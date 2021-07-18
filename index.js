const lwb = document.getElementById('lewagonDot');
const csb = document.getElementById('cs50Dot');
const csc = document.getElementById('cs50Card');
const lwc = document.getElementById('lewagonCard');
const text = document.getElementById('text');
const learnCard = document.querySelector('learnCard');

text.addEventListener('click', ()=>{
  console.log('hh');
  csc.style.display = "none";
  lwc.style.display = "block";
  csb.classList.remove("active");
  lwg.classList.add('active');
})
console.log(lwb);

csb.addEventListener('click', ()=>{
  console.log('hh');
  csc.style.display = "block";
  lwc.style.display = "none";
  csb.classList.add("active");
  lwg.classList.remove('active');
})
