// گرفتن دکمه ها
const lightBtn = document.getElementById("lightBtn") ;
const darkBtn = document.getElementById("darkBtn") ;

// گوش دادن به کلیک روی دکمه light Theme
lightBtn.addEventListener("click" , function() {
  document.body.classList.add("light-theme") ;
  document.body.classList.remove("dark-theme") ;
}) ;

// گوش دادن به کلیک روی دکمه Dark Theme
darkBtn.addEventListener("click" , function() {
  document.body.classList.add("dark-theme") ;
  document.body.classList.remove("light-theme") ;
}) ;