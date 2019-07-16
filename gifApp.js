console.log('app is running');


//after i make the call to the api and you get a gif back, make a div and put it on the page
//start with one and move on further down.

$(()    =>  { 
    const getData = ()  =>  { //function getData()
        $('.searchBar').val()
        //ajax link with api key
        //changing the default limit to 30 instead of 5 - 30 is the max amount
        let xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=PSWZ8A3XhnWfE1CgCZMyJef5BM0xvI4L&limit=1");
        xhr.done(data => { //function(data) 
            console.log("giphy api is running", data)
        });
        
        //create a loop to go thru the results and put one up on screen. one for now
        let jiffies = xhr.data
        for (i in jiffies){
            $('.parent').append(`<img src=${jiffies[i].data[4]}>`)
        }
    }   
        $('.searchButton').on('click', getData)

});