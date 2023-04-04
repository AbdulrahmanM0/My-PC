const root = document.getElementById('root');
let arr = [
'../assets/icons/icons8-safe-96(1).png',
'../assets/icons/microsoft(2).png',
'../assets/icons/firefox.png',
'../assets/icons/minecraft_logo_icon_168974.png',
'../assets/icons/icons8-workstation-96.png',
'../assets/icons/icons8-safe-96(1).png',
'../assets/icons/icons8-starbucks-100.png',
'../assets/icons/icons8-youtube-188.png',
'../assets/icons/icons8-add-new-100(1).png',
];
let nameIcon = ['Safe','Microsoft-Edge','Firefox','Mincraft','PC','Safe','ART','Youtube','Add-new']
localStorage.setItem('icons',JSON.stringify(arr));
let pcIcons = document.getElementById('pc-icons');
let icons = [];
let footerIcons = document.getElementById("footer-icons");

console.log(footerIcons)

for(let i = 0 ; i < arr.length ; i++){
    icons.push(`<img id=${i} class=icon src=${arr[i]} />`);
    pcIcons.innerHTML += `<div><img id=${i} class=icon src=${JSON.parse(localStorage.getItem('icons'))[i]} /><p class=icon-description>${nameIcon[i]}</p></div>`;
}
let activeIcons = document.querySelectorAll('.icon');
active = (e) => {
    if(e.target.className == 'icon'){
    activeIcons.forEach(a=>a.classList.remove('active-icon'));
    e.target.classList.add('active-icon');
    // footerIcons.appendChild(e.target.cloneNode())      //CLONENODE;
}}
let index = 0;
addFooterIcon = (a) =>{
    let img= new Image();
    img.src = a.target.src;
    img.classList.add('footer-icons');
        index++;
        img.id = index + '-bar';
        footerIcons.childElementCount !== 10 && footerIcons.appendChild(img);
};
let winArr = [];
let win;
footerIcons.onclick = (e) => {
    if(e.target.id == 3){
        window.open("https://classic.minecraft.net/?join=SCYI4opRx4NZC9-j","_blank","width=1000,height=800");
    }else if(e.target.id == 2){
        window.open('https://www.google.com/','_blank','width=1000,height=800')
    }else if(e.target.id == 4){
        window.open('../index.html','_blank','width=1000,height=800')
    }else if(e.target.id == 5){
        window.open('../windows/Safe.html','_blank','width=1000,height=800');
    }else if(e.target.id == 6){
        win.focus()
    }else if(e.target.id == '1-bar'){
        win.focus()
    }else if(e.target.id == 8){
        windowAlert(`<input id=addInp type=text /><button onclick=add() >add</button>`);
        addnp = document.getElementById('addInp');
    }
}
openIcon = (e) => {
    if(e.target.classList.contains('icon')){
        if(e.target.id == 3){
            win = window.open("https://classic.minecraft.net/?join=SCYI4opRx4NZC9-j","_blank","width=1000,height=800");
            winArr.push(win);
        }else if(e.target.id == 2){
            win = window.open('https://www.google.com/','_blank','width=1000,height=800');
            winArr.push(win);

        }else if(e.target.id == 4){
            win = window.open('../index.html','_blank','width=1000,height=800')
        }else if(e.target.id == 5){
            win = window.open('../windows/Safe.html','_blank','width=1000,height=800');
        }else if(e.target.id == 6){
            win = window.open('https://neal.fun/logos-from-memory/','_blank','width=1000,height=800')
        }else if(e.target.id == 7){
            win = window.open('https://www.youtube.com/','_blank','width=1000,height=800')
        }else if(e.target.id == 8){
            windowAlert(`<input id=addInp type=text /><button onclick=add() >add</button>`);
            addnp = document.getElementById('addInp');
        }
        addFooterIcon(e);
    }
}
pcIcons.onclick = active;
pcIcons.ondblclick = openIcon;
root.onclick = (e) => {
    if(!e.target.classList.contains('icon')){
        activeIcons.forEach(a=>a.classList.remove('active-icon'))
    }
}
windowAlert = (element) => {
    return (root.innerHTML += `<div class=window ><div class=controls ><div class=close >X</div></div>${element}</div>`);
}

const start = document.getElementById('START');

start.innerHTML = `<div class=active-start>
</div>`








console.log(`        ▄               ▄    
        ▌▒█           ▄▀▒▌        ________________
        ▌▒▒█        ▄▀▒▒▒▐       |                |
       ▐▄█▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐       | Abdulrahaman   |
     ▄▄▀▒▒▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐       |     Mohammed   |
   ▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌       |________________|
  ▐▒▒▒▄▄▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▀▄▒▌  
  ▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐  
 ▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌ 
 ▌░▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌ 
▌▒▒▒▄██▄▒▒▒▒▒▒▒▒░░░░░░░░▒▒▒▐ 
▐▒▒▐▄█▄█▌▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▒▒▌
▐▒▒▐▀▐▀▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▐ 
 ▌▒▒▀▄▄▄▄▄▄▀▒▒▒▒▒▒▒░▒░▒░▒▒▒▌ 
 ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▒▄▒▒▐  
  ▀▄▒▒▒▒▒▒░▒▒▒▒▒▒▒▒░▒▄▒▒▒▒▌  
  ▄▀▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒▄▒▒▒▒▌  
  ▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▌`);


