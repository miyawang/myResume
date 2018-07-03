window.onscroll = function(xxx) {
  //用户滚动过的高度  js只做一件事：改变class
  if (window.scrollY > 0) {
    topNavBar.classList.add("sticky");
  } else {
    topNavBar.classList.remove("sticky");
  }
};






let liTags = document.getElementsByClassName("menu-trigger");
for (let i = 0; i < liTags.length; i++) {
  liTags[i].onmouseenter = function(x) {
    let li = x.currentTarget;
    let brother = li.getElementsByTagName("ul")[0];
    brother.classList.add("active");
  };
  liTags[i].onmouseleave = function(x) {
    let li = x.currentTarget;
    let brother = li.getElementsByTagName("ul")[0];
    brother.classList.remove("active");
  };
}




