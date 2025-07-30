
  const toggle1 = document.getElementById("toggle1");
  const menu1 = document.getElementById("menu1");

  const toggle2 = document.getElementById("toggle2");
  const menu2 = document.getElementById("menu2");



  toggle1.addEventListener("click", function (e) {
    e.preventDefault();
    menu1.classList.toggle("active");
    menu2.classList.remove("active"); // close other if open
  });

  toggle2.addEventListener("click", function (e) {
    e.preventDefault();
    menu2.classList.toggle("active");
    menu1.classList.remove("active");
  });


  document.addEventListener("click", function (e) {
    if (!document.getElementById("dropdown1").contains(e.target)) {
      menu1.classList.remove("active");
    }
    if (!document.getElementById("dropdown2").contains(e.target)) {
      menu2.classList.remove("active");
    }
  });




const menuIcon = document.getElementById("menuIcon");
  const sideMenu = document.getElementById("sideMenu");

  const menuImg = "./assets/menu-open.svg";  // hamburger icon
  const closeImg = "./assets/menu-close.svg"; // close icon

  menuIcon.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent bubbling

    const isOpen = sideMenu.classList.contains("active");

    if (isOpen) {
      sideMenu.classList.remove("active");
      menuIcon.src = menuImg;
    } else {
      sideMenu.classList.add("active");
      menuIcon.src = closeImg;
    }
  });

  document.addEventListener("click", function (e) {
    if (
      sideMenu.classList.contains("active") &&
      !sideMenu.contains(e.target) &&
      !menuIcon.contains(e.target)
    ) {
      sideMenu.classList.remove("active");
      menuIcon.src = menuImg;
    }
  });





console.log("js is loaded");






