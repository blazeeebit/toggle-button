let toggleBtn = document.getElementById("btnSwitch");
let toggleBtnCont = document.getElementById("btnToggleCont");

const classAddFunction = (element, classlist) => {
    element.classList.add(classlist)
}

const classRemoveFunction = (element, classlist) => {
    element.classList.remove(classlist)
}

toggleBtn.onclick = (e) => {
    e.preventDefault()
    if(!toggleBtn.classList.contains('active')){
        classAddFunction(toggleBtn, 'active');
        classAddFunction(toggleBtnCont, 'contActive');
        setTimeout(() => {
            classAddFunction(toggleBtnCont, 'justifySwitchEnd');
            classRemoveFunction(toggleBtnCont, 'contActive')
        }, 500)   
    }
    else if(toggleBtn.classList.contains('active')){
        classAddFunction(toggleBtnCont, 'contActiveReverse');
        setTimeout(() => {
            toggleBtnCont.classList.remove('justifySwitchEnd');
            classRemoveFunction(toggleBtnCont, 'justifySwitchEnd')
            classRemoveFunction(toggleBtnCont, 'contActiveReverse')
            classRemoveFunction(toggleBtn, 'active');
            
            }, 500)   
    }    
}
