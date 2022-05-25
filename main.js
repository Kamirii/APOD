
document.querySelector("#submit").addEventListener("click", () => {});

  $("#submit").on ('click', function(e) { 
  const data  = $(`#data-apod`).val() 
  $.ajax({
    // "?" define o começo de um query parameter
    url: `https://api.nasa.gov/planetary/apod?api_key=fCzg8UWG84gFSAfB15ozm0RlosaE8BMuwbLm8bMQ&date=${data}`,
    type: 'GET',
    success: function (apod) {
      const infoImagem = $(".texto");
      const diaDaImagem = $(".dia");
      const imagem = $(".imagem")
      diaDaImagem.text(`${apod.date}`)
      infoImagem.text(`${apod.explanation}`);
      
      if(apod.media_type == 'image'){
       imagem.html(`<img class = 'img' src= "${apod.url}"/>`)
      }
      else{  //um iframe é uma tag dentro do código de programação para mostrar outro site de forma menor. 
        imagem.html(`<iframe class="img" src="${saida.url}?autoplay=1&mute=1"></iframe>`)
      }
     
          }, 
        }) 
     });
 
 //arrumar botao 
 //arrumar display
 //separar por funcões?
 //tratamento de erro
 


