'use strict';

const block = document.createElement('div');
block.classList.add('block');
document.body.append(block);

block.innerHTML = `
<div class="logo">
<img class="logo__img" src="./images/logo.png" alt="logo">
<div class="logo__descr">
  <svg class="logo__sound" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path 
      d="M7.563 2.069A.75.75 0 018 2.75v10.5a.75.75 0 01-1.238.57L3.472 11H1.75A1.75 1.75 0 010 9.25v-2.5C0 5.784.784 5 1.75 5h1.723l3.289-2.82a.75.75 0 01.801-.111zM6.5 4.38L4.238 6.319a.75.75 0 01-.488.181h-2a.25.25 0 00-.25.25v2.5c0 .138.112.25.25.25h2a.75.75 0 01.488.18L6.5 11.62V4.38zm6.096-2.038a.75.75 0 011.06 0 8 8 0 010 11.314.75.75 0 01-1.06-1.06 6.5 6.5 0 000-9.193.75.75 0 010-1.06v-.001zm-1.06 2.121a.75.75 0 10-1.061 1.061 3.5 3.5 0 010 4.95.75.75 0 101.06 1.06 5 5 0 000-7.07l.001-.001z">
    </path>
  </svg>
  our top choice
</div>
</div>

<div class="block__item block__item--mob">
<div class="block__bonus block__bonus--mob">
  Welcome Bonus
</div>
<div class="block__deposit">
  Up to £25 <br>
  <span>New Player bonus</span>
</div>
</div>

<div class="block__item block__item--desktop">
<div class="block__bonus">Welcome Bonus</div>
<div class="block__deposit">
  Deposit £10 <br>
  Get up to 500 Free Spins
</div>
<div class="block__age">
  18+ Play Safe Opt is requred.
</div>
</div>

<div class="block__item block__item--rait">
<a class="block__vote" href="#">Please vote!</a>
<div class="block__stars">
  <div class="block__star"></div>
  <div class="block__star"></div>
  <div class="block__star"></div>
  <div class="block__star"></div>
  <div class="block__star"></div>
  <span class="block__grade">9.7</span>
</div>
<div class="block__rated">Rated by (3,904)</div>
</div>

<div class="block__item block__item--grade">
9.9
</div>

<div class="block__item">
<a href="#" class="block__button-get">
  Get Bonus
  <span>&#128293;</span>
</a>
<a
  href="#"
  class="block__visit"
  target="_blank"
>
  Visit William Hill >
</a>
</div>
`;
