let  count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();

},5300)

function nextImage() {
    count++;
    if(count>4){
        count =1;
    }
    
    document.getElementById("radio"+count).checked = true;
}
const btnmobile = document.getElementById('btn-mobile');

function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnmobile.addEventListener('click', toggleMenu)