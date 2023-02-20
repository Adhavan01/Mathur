const Hero_image_list = ['https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg','https://yourtechdiet.com/wp-content/uploads/2022/01/Best-AI-tools-for-Image-Processing-696x368.jpg','https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png'] 
const Hero_image=document.getElementById('Hero_image')
var i = 0;
setInterval (()=>{
    if (i === Hero_image_list.length) {
      i = 0;
    }else{
    Hero_image.src = Hero_image_list[i];
    i++;}
  } , 5000);

const buy_button =document.querySelectorAll("#buy_button")
const modal_section = document.getElementById("modal_section")
const modal_continer =document.getElementsByClassName('modal_continer')
const close_modal= document.getElementById('close_modal')

for(let i=0;i<=buy_button.length;i++){
buy_button[i].addEventListener('click',()=>{
  modal_section.style.display="block"
})
close_modal.addEventListener('click',()=>{
  modal_section.style.display="none"
})
window.addEventListener("click",(e)=>{
  if(e.target== modal_section){
    modal_section.style.display="none"
  }
})
}



