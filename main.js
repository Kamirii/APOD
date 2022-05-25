
//`https://api.nasa.gov/planetary/apod?api_key=fCzg8UWG84gFSAfB15ozm0RlosaE8BMuwbLm8bMQ`


// const data  = $(`#data-apod`).val() 

document.querySelector("#submit").addEventListener("click", () => {});

  $("#submit").on ('click', function(e) { 
  const data  = $(`#data-apod`).val() 
  $.ajax({
    // "?" define o começo de um query parameter
    url: `https://api.nasa.gov/planetary/apod?api_key=fCzg8UWG84gFSAfB15ozm0RlosaE8BMuwbLm8bMQ&date=${data}`,
    type: 'GET',
    //dataType
    success: function (apod) {
      const infoImagem = $(".texto");
      const diaDaImagem = $(".dia");

      diaDaImagem.html(`${apod.date}`)
      infoImagem.html(`${apod.explanation}`);
      console.log(apod.explanation)
      console.log(apod.date)
     
          }, 
        }) 
     });
 
 //arrumar botao 
 //arrumar display
 //separar por funcões?
 //tratamento de erro
 


