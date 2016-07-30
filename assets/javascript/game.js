


// Initial array of movies
	var movies = ['american Pshyco', 'Ace Ventura', 'Amelie', 'Addams Family','Bettlejuice','Boondock Saints','Eternal Sunshine of the spotless mind','Evil Dead','Fight Club','Kill Bill','Night Of The Living Dead', 'Sin City','Star wars','The shining','Requiem for a dream'];


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

	$("#addMovie").on('click', function(){

		// This line of code will grab the input from the textbox
		var movie = $('#movie-input').val().trim();

		// The movie from the textbox is then added to our array
		movies.push(movie);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	});

	function display(){
		    $('button').on('click', function() {
        var moviedata = $(this).data('data-name');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + movies[i] + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .done(function(response) {
               
                console.log(response)
         
                var results = response.data;
               
                     for (var i = 0; i < results.length; i++) {

                        var moviesDiv = $("<div>");
                        var p = $("<p>");
                        p.text(results[i].rating)

                        var moviesImage = $("<img>");
                        moviesImage.attr("src",results[i].images.fixed_height.url)

                        moviesDiv.append(p)

                        moviesDiv.append(moviesImage)

                        $("#showGif").prepend(moviesDiv)

                    }

            });
    });

	}

	$( document ).ready(function(){

		renderButtons();
		display();


    });

