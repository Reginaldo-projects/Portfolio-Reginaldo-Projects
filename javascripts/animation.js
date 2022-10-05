const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const elementos=document.querySelectorAll('[data-anima]');
const animaclass='animate';


function animascroll() {
    const windowTop= window.pageXOffset + (window.innerHeight*1.20);
        elementos.forEach(function(element){

            if((windowTop) > element.offsetTop){
                element.classList.add(animaclass);
            }else{
                element.classList.remove(animaclass);
            }

        })

        }

        animascroll();

        if(elementos.length){
        window .addEventListener('scroll', debounce(function(){
            animascroll();
           
        }, 200));
    }

/*digitação*/

function typewriter (regis){
  const textarray = regis.innerHTML.split('');
  regis.innerHTML ='';
  textarray.forEach((letra,i) => {
setTimeout(function(){
regis.innerHTML += letra;
},75 * i)
  })
  console.log(textarray)

}

const regis = document.querySelector('.diginome');
typewriter(regis);