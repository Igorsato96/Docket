function getData(e) {
    e.preventDefault()
    var name = document.querySelector("input[name=nome]").value
    var email = document.querySelector("input[name=email]").value
    var telefone = document.querySelector("input[name=tele]").value
    var telefone2 = document.querySelector("input[name=tele2]").value
    if (telefone2 == '') {
        telefone2 = '<p class="cinza mg">Nâo Informado</p>'
    }

    if (name == '' || email == '' || telefone == '' ) {
       alert('Preencha os campos obrigatórios')
    } else {
        if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            document.querySelector('.alert').classList.add('on')
            setTimeout(() => {
                document.querySelector('.alert').classList.remove('on')
            }, 2000);
        }
        viewData(name,email,telefone,telefone2)
    }

}

function viewData(name,email,telefone,telefone2) {
   var detalhes = document.querySelector(".detalhes")
   detalhes.innerHTML = '<p>Nome Completo:</p><p class="mg">'+name+'</p><p>Email:</p><p class="mg">'+email+'</p></p><p>Telefone 1:</p><p class="mg">'+telefone+'</p></p><p>Telefone 2:</p><p>'+telefone2+'</p>'
}

document.addEventListener("DOMContentLoaded",() => {
  var enviar =  document.getElementById('enviar')
  enviar.onclick = (e) => {
      getData(e)
  }
  var img
  var carrosel

  var dados = JSON.parse(api);
  for(var dadosIndex in dados){
      id = dados[dadosIndex]['id']
      if (id != 1000 && id != 1024){
        img = dados[dadosIndex]['url']
        // carrosel = document.querySelector('.for_slick_slider')
        // carrosel.innerHTML = ' <div class="items"><script src="'+img+'" ></script></div>'
      }
    }
})

