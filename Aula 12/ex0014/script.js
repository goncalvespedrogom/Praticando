function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    //var hora = 19
    //var minuto = 10

    msg.innerHTML = `Agora são exatamente ${hora}hrs${minuto}min.`
   
    if (hora >= 0 && hora <12) { //dia
        img.src = 'fotomanha.png'
        document.body.style.background = '#ffdb67'
    } else if (hora >= 12 && hora < 18) { //tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#f3b27a'
    } else {  //noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#11275d'
    }

}

