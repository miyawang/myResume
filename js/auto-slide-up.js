!function (){
  // 添加 offset 类
  var specialTags = document.querySelectorAll('[data-x]')
  for(let i =0;i<specialTags.length; i++){
    specialTags[i].classList.add('offset')
  }
  findClosestAndRemoveOffset()
  window.addEventListener('scroll', function(x){
    findClosestAndRemoveOffset()
  })


  /* helper */
  function findClosestAndRemoveOffset(){
    let specialTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for(let i =1;i<specialTags.length; i++){
      if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
        minIndex = i
      }
    }
    // minIndex 就是里窗口顶部最近的元素
    specialTags[minIndex].classList.remove('offset')
    let id = specialTags[minIndex].id
    let a = document.querySelector('a[href="#'+ id + '"]')
    let li = a.parentNode
    let brothersAndMe = li.parentNode.children
    for(let i=0; i<brothersAndMe.length; i++){
      brothersAndMe[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
  }
  let liTags = document.querySelectorAll('nav.menu > ul > li')
  for(let i=0; i<liTags.length; i++){
    liTags[i].onmouseenter = function(x){
      x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function(x){
      x.currentTarget.classList.remove('active')
    }
  }
}.call()














// let specialTags = document.querySelectorAll("[data-x]");
// for (let i = 0; i < specialTags.length; i++) {
//   specialTags[i].classList.add("offset");
// }
// //找到所有的特殊标签 增加offset类

// findClosestAndRemoveOffset();
// window.addEventListener("scroll", function(x) {
//   findClosestAndRemoveOffset();
// });
// // 找到最近的那处 如果用户滚动了 就找到新的那处

// //helper
// function findClosestAndRemoveOffset() {
//   let specialTags = document.querySelectorAll("[data-x]");
//   let minIndex = 0;
//   for (let i = 0; i < specialTags.length; i++) {
//     if (
//       Math.abs(specialTags[i].offsetTop - window.scrollY) <
//       Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
//     ) {
//       minIndex = i;
//     }
//   }
//   // minIndex 就是窗口顶部最近的元素
//   specialTags[minIndex].classList.remove('offset');
//   let id = specialTags[minIndex].id;
//   let a = document.querySelector('a[href = "#'+id+'"]');
//   let li = a.parentNode;
//   let brothersAndMe = li.parentNode.children;
//   for(let i = 0; i < brothersAndMe.length;i++){
//     brothersAndMe[i].classList.remove('highlight');
//   }
//   li.classList.add('highlight');
// }
// let liTags = document.querySelectorAll('nav.menu > ul > li');
// for(let i = 0; i < liTags.length;i++){
//   liTags[i].onmouseenter = function(x){
//     x.currentTarget.classList.add('active');
//   }
// }

// let aTags = document.querySelectorAll("nav > ul > li > a");
// // console.log(aTags);
// for (let i = 0; i < aTags.length; i++) {
//   aTags[i].onclick = function(x) {
//     x.preventDefault(); //阻止默认动作
//     let a = x.currentTarget;
//     let href = a.getAttribute("href");
//     //不做任何处理  如果直接是a 则是被浏览器处理过的 带http的
//     let element = document.querySelector(href);
//     let rect = element.getBoundingClientRect();
//     let top = element.offsetTop;
//     let n = 25; //一共动多少次
//     let duration = 500 / n; //多长时间移动一次
//     let currentTop = window.scrollY;
//     let targetTop = top - 40;
//     let distance = (targetTop - currentTop) / n;
//     let i = 0;
//     let id = setInterval(() => {
//       if (i === n) {
//         window.clearInterval(id);
//         return;
//       }
//       i = i + 1;
//       window.scrollTo(0, currentTop + distance * i);
//     }, duration);
//   };
// }
