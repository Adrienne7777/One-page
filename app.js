const btns = document.querySelectorAll('.btn-modale');
const modaleEquipement = document.querySelector('.bloc-modale');
const fermetureModale = document.querySelector('.fermeture-modale');
const ImgIndex = document.querySelector('.bloc-modale img');

btns.forEach(btn => {
    btn.addEventListener('click',  (e) =>{

        ImgIndex.src = `Ressources/img${e.target.getAttribute('data-index')}-equip.jpeg`;
        modaleEquipement.classList.add('active-modale');
    })
})

fermetureModale.addEventListener('click',() => {
    modaleEquipement.classList.remove('active-modale');
})
modaleEquipement.addEventListener('click',() => {
    modaleEquipement.classList.remove('active-modale');
})