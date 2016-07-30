


// Initial array of movies
	var movies = ['Ace Ventura', 'Amelie', 'Addams Family','Bettlejuice','Boondock Saints','Eternal Sunshine of the spotless mind','Evil Dead','Fight Club','Kill Bill','Night Of The Living Dead', 'Sin City','Star wars','The shining','Requiem for a dream','pulp Fiction'];


	// Generic function for displaying movie data 
	function renderButtons(){ 

		// deletes previous information inside this div
		$('#moviesView').empty();

		// Loops through the array of movies
		for (var i = 0; i < movies.length; i++){

			// Then dynamicaly generates buttons for each movie in the array
 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('movie','btn btn-default'); // Added a class 
		    a.attr('data-name', movies[i]); // Added a data-attribute
		    a.text(movies[i]); // Provided the initial button text
		    $('#moviesView').append(a); // Added the button to the HTML

		    
		}
	}

	// This function handles events where one button is clicked
	function addNewMovie(){
	$("#addMovie").on('click', function(){

		// This line of code will grab the input from the textbox
		var movie = $('#movie-input').val().trim();

		// The movie from the textbox is then added to our array
		movies.push(movie);
		
		// Our array then runs which handles the processing of our movie array, and also will add the data for the infomation to be display
		renderButtons(); display();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	});

	}
 	//creates a function to display the Gifs//
	function display(){
		    $('button').on('click', function() { //when one of the butttons is click//
        var moviedata = $(this).attr('data-name'); //will add the attribute data correspondent
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + moviedata + "&api_key=dc6zaTOxFJmzC&limit=10"; //this line will call giphy API, plus the desired movie, and 10 results

        $.ajax({
                url: queryURL,
                method: 'GET' //will bring the information//
            })
            .done(function(response) { 
               
                console.log(response)
         
                var results = response.data; //it will choose the information from the response data

                		$('#showGif').empty();//deletes the previous information store inside this div
               
                     for (var i = 0; i < results.length; i++) { //will create a for loop throught the movies array//

                        var moviesDiv = $("<div>"); //create a new div name movies Div
                        moviesDiv.addClass('col-md-3');
                        var p = $("<p>"); 	//will create a <p> 
                        p.text(results[i].rating) //will add some text from the information retrive from the results (rating)

                        var moviesImage = $("<img>"); //create a new image div called moviesImage
                        moviesImage.attr("src",results[i].images.fixed_height_small.url) //asign an attribute from the results and a src to be able to bring that url
            
                        moviesDiv.append(p) //add p to the movieDiv

                        moviesDiv.append(moviesImage) //add moviesImage to moviesDiv

                        $("#showGif").prepend(moviesDiv) //and at last will add the previous to the Id showGif

                        stopAndGo();

                    }

            });
    });

	}

	function stopAndGo() {

	 $('<img>').on('click', function(){


	var state = $(this).attr('data-state'); 

	  if ( state == 'still'){
                $(this).attr('src', $(this).data('animate'));
                $(this).attr('data-state', 'animate');
            }else{
                $(this).attr('src', $(this).data('still'));
                $(this).attr('data-state', 'still');
            }


            });
        }

	$( document ).ready(function(){ //this function will run the previous create functions

		renderButtons();
		display();
		addNewMovie();




    });

