$(() => { 
    const handleData = (data) =>    {
        for(let i = 0; i < data.data.length; i++)  {
            const $gif = $('<img>').attr('src', data.data[i].images.original.url)
            $gif.addClass('baseGif')
            $('.parent').append($gif)//append $gif to the parent ul
            
        }
    }
    $('form').on('submit', (event) =>  {//making on click event to tie button and search bar into returned results
        event.preventDefault()//stop the page from reloading when not nessesary
        const gifQuery = $('.searchBar').val() //capturing value form input
        const endpoint = `https://api.giphy.com/v1/gifs/search?q=${gifQuery}&api_key=PSWZ8A3XhnWfE1CgCZMyJef5BM0xvI4L&limit=100` //query limited to one for now -- theoretical limit of 30 set by Giphy themselves
        $.ajax({url: endpoint}).then(handleData) //making the ajax call get data asynchronously, when the data gets back, handle it
    })
    $('.clearButton').on('click', () => {
        $('.parent').empty()//clear button works BUT it makes the code no longer responcive once its clicked
    })
    
    $('.parent').on('click', 'img', (event) =>  {
        const $imageTag = $('<img>').addClass("modalGif")
        $imageTag.attr('src', $(event.target).attr('src'))
        $('#modalContent').append($imageTag)
        $('#modal').css('display', 'block')
        $('.parent').hide()
        $('body').css('height', '5000px')
        
        
        console.log('image clicked', event.target.id)
    })

    $('#modalContent').on('click', (event) =>  {
        $("#modal").css('display', 'none')
        $('#modalContent').empty()
        $('.parent').show()
    })
}) 
