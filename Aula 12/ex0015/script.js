function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Erro: Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'um homem'
            if (idade >= 0 && idade < 10) {     
                img.setAttribute('src', 'HomemCrianca.png')          
            } else if (idade < 21) {
                img.setAttribute('src', 'HomemAdolescente.png')     
            } else if (idade < 50) {    
                img.setAttribute('src', 'HomemAdulto.png')     
            } else {
                img.setAttribute('src', 'HomemIdoso.png')  
            }

        } else if (fsex[1].checked) {
            genero = 'uma mulher'
            if (idade >= 0 && idade < 10) {     
                img.setAttribute('src', 'MulherCrianca.png')          
            } else if (idade < 21) {
                img.setAttribute('src', 'MulherAdolescente.png')     
            } else if (idade < 50) {    
                img.setAttribute('src', 'MulherAdulta.png')     
            } else {
                img.setAttribute('src', 'MulherIdosa.png')  
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}