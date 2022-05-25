  
//`https://api.nasa.gov/planetary/apod?api_key=fCzg8UWG84gFSAfB15ozm0RlosaE8BMuwbLm8bMQ`
//`https://api.nasa.gov/planetary/apod?api_key=fCzg8UWG84gFSAfB15ozm0RlosaE8BMuwbLm8bMQ` + $('#submit').val(),



  $("#submit").on ('click', function()
{
  $.ajax({
    // "?" define o começo de um query parameter
    url: `https://api.nasa.gov/planetary/apod?api_key=fCzg8UWG84gFSAfB15ozm0RlosaE8BMuwbLm8bMQ`,
    type: 'GET',
    //dataType
    success: function (osta) {
      console.log(osta);
    },
    // error: function (error){
    //   console.log(error)
    // }
     });
  }); 

    

