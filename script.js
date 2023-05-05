const button = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
`"I don't have a dream, I have a goal" - Harvey Specter."`,
`"Opportunities don't come to you, you create them" - Chris Grosser."`,
`"It's not whether you get knocked down, it's whether you get up" - Vince Lombardi."`,
`"I have not failed. I've just found 10,000 ways that won't work" - Thomas Edison."`,
`"Never give up on something that you can't go a day without thinking about" - Harvey Specter."`,
`"I am not a product of my circumstances. I am a product of my decisions" - Stephen Covey.`,
`"Always do your best. What you plant now, you will harvest later" - Og Mandino."`,
`"When you're backed against the wall, break it down" - Harvey Specter."`
]

button.addEventListener('click', () => {
let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
par.style.display = 'block'
par.textContent = randomQuote;
})