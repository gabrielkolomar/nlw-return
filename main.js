window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2 // Linha alvo

  // Verificar se a sessão passou da linha
  // Quais dados vou precisar?

  const sectionTop = section.offsetTop // O topo da seção
  const sectionHeight = section.offsetHeight // A altura da seção
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop // O topo da seção chegou ou ultrapassou a linha alvo

  //Verificar se a base está abaixo da linha alvo

  const sectionEndsAt = sectionTop + sectionHeight // A secão termina onde?
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine // O final da seção passou da linha
  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine // Limites da seção passou da linha

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: '700'
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services, 
#services header,
#services .card,
#about,
#about header,
#about .content`)
