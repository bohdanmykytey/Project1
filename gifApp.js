console.log('app is running');


//after i make the call to the api and you get a gif back, make a div and put it on the page
//start with one and move on further down.

$(() => { 
    const handleData = (data) =>    {
        console.log(data)
    }

    const gifQuery = 'cars'
    const endpoint = `http://api.giphy.com/v1/gifs/search?q=${gifQuery}&api_key=PSWZ8A3XhnWfE1CgCZMyJef5BM0xvI4L&limit=1` //query limited to one for now -- theoretical limit of 30 set by Giphy themselves
  
    console.log(endpoint)
    
    const data = $.ajax({
        url: endpoint
    })
    console.log(data)
    console.log(data.responseJSON) //undifined because js is asynchronous -- we need to use a promise "IOU"
    
    $.ajax({  //making the ajax call
        url: endpoint
    }).then(handleData) // get data asynchronously, when the data gets back, handle it
    
    //working well thus far, going to push to git hub for working copy update
    //gifQuery plays well with the api, i have it limited to one for now for testing purposes
    //need to now capture the data, tie it to the seatch bar and buttons
    //append it to the dom and display it on the page

})  







// const getData = ()  =>  { //function getData()
//     $('.searchBar').val()
    
    
//     });
//     //ajax link with api key
//     //changing the default limit to 30 instead of 5 - 30 is the max amount (currently at one for testing)
//     let xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=PSWZ8A3XhnWfE1CgCZMyJef5BM0xvI4L&limit=1");
//     xhr.done(data => { //function(data) 
//         // console.log("giphy api is running")
//     });
    
//     //create a loop to go thru the results and put one up on screen. one for now
//     let jiffies = xhr.data
//     console.log(jiffies)
//     for (i in jiffies){
//         $('.parent').html(`<img src=${jiffies[i].data[0].url}>`)
//         console.log(jiffies[i].data[0].url)
//     }
// }   
//     $('.searchButton').on('click', getData)
