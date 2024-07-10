

function ShowNexpage(){
    const next__part = document.querySelector(".next__part")
    const main = document.querySelector(".main")
    next__part.style.display = 'flex'
    main.style.opacity = '10%'
}
function hideNextpage(){
    const next__part = document.querySelector(".next__part")
    const main = document.querySelector(".main")
    next__part.style.display = 'none'
     main.style.opacity = '100%'
}

