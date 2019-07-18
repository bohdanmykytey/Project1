$(() => { 
    const handleData = (data) =>    {
        for(let i = 0; i < data.data.length; i++)  {
            const $gif = $('<img>').attr('src', data.data[i].images.original.url)
            $('ul').append($gif)//append $gif to the parent ul
        }
    }

    $('.searchButton').on('click', (event) =>  {//making on click event to tie button and search bar into returned results
        event.preventDefault()//stop the page from reloading when not nessesary
        const gifQuery = $('.searchBar').val() //capturing value form input
        console.log(gifQuery)
        const endpoint = `http://api.giphy.com/v1/gifs/search?q=${gifQuery}&api_key=PSWZ8A3XhnWfE1CgCZMyJef5BM0xvI4L&limit=1000` //query limited to one for now -- theoretical limit of 30 set by Giphy themselves
        $.ajax({url: endpoint}).then(handleData) //making the ajax call get data asynchronously, when the data gets back, handle it
        
    })
}) 
