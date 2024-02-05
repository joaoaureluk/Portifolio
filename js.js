function toggleMode() {

  
    const html = document.documentElement

html.classList.toggle('light')

const img = document.querySelector('#profile img')

if (html.classList.contains('light')) {
    
    img.setAttribute('src', 'pastas\ de\ imagens/stone dia.png')

} else {
    
    img.setAttribute('src', 'pastas\ de\ imagens/stone noite.jpg')
}
}

