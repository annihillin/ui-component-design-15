const ul = document.querySelector("ul");
const lists = ul.querySelectorAll("li");
const footerDivs = document.querySelectorAll(".footer div");

lists.forEach(li => {
   li.onclick = function() {
      ul.querySelector('span').remove();
      lists.forEach(i => {
         i.classList.remove('selected');
      })

      this.classList.add('selected');
      this.insertAdjacentHTML('afterbegin', "<span></span>");
   }
})

footerDivs.forEach(div => {
   div.onclick = function() {
      // remove class from all divs.
      footerDivs.forEach(i => i.classList.remove('footer-div-select'));

      // add class to clicked div.
      this.classList.add('footer-div-select');
   }
})
