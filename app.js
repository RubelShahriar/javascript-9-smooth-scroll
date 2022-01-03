// set date
const date = document.getElementById('date')
date.innerHTML = new Date().getFullYear()

// toggle button
const btn = document.querySelector('.btn')
const links = document.querySelector('.links')
const linksContainer = document.querySelector('.links-container')
btn.addEventListener('click', function(){
    // itemRes.classList.toggle('show-link')
    const containerHeight = linksContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    // console.log(linksHeight)
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight + 40}px`
    }
    else{
        linksContainer.style.height = 0
    }
})

// fixed position navbar
const navbar = document.getElementById('navbar')
const upBtn = document.querySelector('.up-btn')
window.addEventListener('scroll', function(){
    const scrollHeight = window.pageYOffset
    const navbarHeight = navbar.getBoundingClientRect().height
    if(scrollHeight > navbarHeight){
        navbar.classList.add('fixed-nav')
    }
    else{
        navbar.classList.remove('fixed-nav')
    }
    //top button
    if(scrollHeight > 200){
        upBtn.classList.add('show-link')
    }
    else{
        upBtn.classList.remove('show-link')
    }
})

//smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach(function(btn){
    btn.addEventListener('click', function(e){
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        //calculate the heights
        const navHeight = navbar.getBoundingClientRect().height
        const navContainerHeight = linksContainer.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight
        if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 50){
            position = position + navContainerHeight
        }
        window.scrollTo({
            top: position,
            left: 0
        })
        linksContainer.style.height = 0
    })
})