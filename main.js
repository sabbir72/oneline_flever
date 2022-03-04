const openBtn = document.querySelectorAll(".open-modal");
//console.log(openBtn);
const Modalshow=document.querySelector(".modal");
const Modaloverlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-modal");

//show hide =====================
const openModal = function () {
  Modalshow.classList.remove("hidden");
  Modaloverlay.classList.remove("hidden");
};
const closeModal = function () {
  Modalshow.classList.add("hidden");
  Modaloverlay.classList.add("hidden");
};

for (let i = 0; i <openBtn.length; i++) {
   openBtn[i].addEventListener("click", openModal)
    closeBtn.addEventListener("click", closeModal)
    Modaloverlay.addEventListener("click",closeModal)

    document.addEventListener("keydown",function(e){
       if(e.key==="Escape"){
            closeModal()
        }
    })


}