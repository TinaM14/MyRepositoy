const  para = document.querySelector('p');


const print = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    para.innerHTML = 'Height: ' + height + ' Width: ' + width;
}



// function debounce(func, timeout = 300){
//     let timer;
//     return (...args) => {
//       clearTimeout(timer);
//       timer = setTimeout(() => { func.apply(this, args); }, timeout);
//     };
//   }
  
  const throttle = (func, limit = 3000) => {
    let inThrottle
    return function() {
      const args = arguments
      const context = this
      if (!inThrottle) {
        func.apply(context, args)
        inThrottle = true
        setTimeout(() => inThrottle = false, limit)
      }
    }
  }

  window.onresize = throttle(() => print(), 500);