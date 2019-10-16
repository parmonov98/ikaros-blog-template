console.log('frontjs was connected');
function showMenu(){
    let menu = document.getElementById('mainMenu');
    let header = document.getElementById('header');
    header.classList.toggle('maxHeight');
    console.log(menu);
    menu.classList.toggle('showMenu');
}