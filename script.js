const ul = document.querySelector('ul');
const lists = ul.querySelectorAll('li');

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
