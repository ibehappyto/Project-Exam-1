let viewNavStatus = false;

let viewNav = function() {
    let getSidebar = document.querySelector(".sidebar-nav");
    let getSidebarUl = document.querySelector(".sidebar-nav ul");
    let getSidebarTitle = document.querySelector(".sidebar-nav span");
    let getSidebarLinks = document.querySelectorAll(".sidebar-nav a");

    if (viewNavStatus === false) {
      getSidebar.style.visibility = "visible";  
      getSidebarUl.style.visibility = "visible";
      getSidebar.style.width = "272px";
      getSidebarTitle.style.opacity = "0.5";

      let arrayLength = getSidebarLinks.length;
      for (let i = 0; i < arrayLength; i++) {
        getSidebarLinks[i].style.opacity = "1";
      }

      viewNavStatus = true;
    }

    else if (viewNavStatus === true) {
        getSidebar.style.width = "0px";
        getSidebarTitle.style.opacity = "0";
  
        let arrayLength = getSidebarLinks.length;
        for (let i = 0; i < arrayLength; i++) {
          getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.visibility = "hidden";
  
        viewNavStatus = false;
      }
}