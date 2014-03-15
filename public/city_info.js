$(document).ready(function() {
	//PORTLAND ALL ANIMATIONS
	$('#Portland').mouseenter(function() {
        $('#Portland-info').fadeIn(1000);

    });

    $('#Portland').mouseleave(function() {        
        $('#Portland-info').delay(1000).fadeOut(500);
        $('#Portland').empty();
        $('#Portland').append('<img src="images/blazerslogo.png" height="30px">');        
    });

    $('#portland-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Portland</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">Their best players are Lamarcus Aldridge and Nick Batum.</p> <br> <p>Portland is the city of Roses. Also well known for bridges. Be sure to visit Columbia Gorge!</p>');
    	$('#info_expand').append('<img src="images/portlandpic.png" width="250px">');
    });



    //SEATTLE ALL ANIMATIONS
	$('#Seattle').mouseenter(function() {
        $('#Seattle-info').fadeIn(1000);
    });
    $('#Seattle').mouseleave(function() {        
        $('#Seattle-info').delay(1000).fadeOut(500);
        $('#Seattle').empty();
        $('#Seattle').append('<img src="images/seahawkslogo.jpg" height="40px">');        
    });
    $('#seattle-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Seattle</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">A bigger, more populous version of Portland. Very rainy.</p> <br> <p>Be sure to visit the Space Needle!</p>');
    	$('#info_expand').append('<img src="images/seattlepic.jpg" width="300px">');
    });



    //SF ALL ANIMATIONS
	$('#SanFrancisco').mouseenter(function() {
        $('#SanFrancisco-info').fadeIn(1000);
    });
    $('#SanFrancisco').mouseleave(function() {        
        $('#SanFrancisco-info').delay(1000).fadeOut(500);
        $('#SanFrancisco').empty();
        $('#SanFrancisco').append('<img src="images/oaklandaslogo.png" height="40px">');        
    });
    $('#sanfrancisco-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">San Francisco</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">This recruiting style recently made headlines with the unexpected success of basketball player Jeremy Lin</p> <br> <p>Be sure to check out the golden gate bridge!</p>');
    	$('#info_expand').append('<img src="images/sfpic.gif" width="200px">');
    });


    //LA ALL ANIMATIONS
	$('#LosAngeles').mouseenter(function() {
        $('#LosAngeles-info').fadeIn(1000);
    });
    $('#LosAngeles').mouseleave(function() {        
        $('#LosAngeles-info').delay(1000).fadeOut(500);
        $('#LosAngeles').empty();
        $('#LosAngeles').append('<img src="images/lakerslogo.gif" height="30px">');                
    });
    $('#losangeles-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Los Angeles</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">LA is also home to another basketball team, the Clippers</p> <br> <p>Be sure to visit Hollywood and spot a celebrity!</p>');
    	$('#info_expand').append('<img src="images/lapic.jpg" width="300px">');
    });


    //DALLAS ALL ANIMATIONS
	$('#Dallas').mouseenter(function() {
        $('#Dallas-info').fadeIn(1000);
    });
    $('#Dallas').mouseleave(function() {        
        $('#Dallas-info').delay(1000).fadeOut(500);
        $('#Dallas').empty();
        $('#Dallas').append('<img src="images/cowboyslogo.gif" height="30px">');        
    });
    $('#dallas-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Dallas</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">Interestingly, they were called the Dallas Texans at first.</p> <br> <p>This is the third largest city in Texas, and the ninth largest in the US.</p>');
    	$('#info_expand').append('<img src="images/dallaspic.jpg" width="300px">');
    });


    //DENVER ALL ANIMATIONS
	$('#Denver').mouseenter(function() {
        $('#Denver-info').fadeIn(1000);
    });
    $('#Denver').mouseleave(function() {        
        $('#Denver-info').delay(1000).fadeOut(500);
        $('#Denver').empty();
        $('#Denver').append('<img src="images/broncoslogo.jpg" height="30px">');        
    });
    $('#denver-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Denver</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">This city is home to the well known mile-high stadium.</p>');
    	$('#info_expand').append('<br>');
    	$('#info_expand').append('<img src="images/denverpic.gif" width="300px">');
    });


    //MIAMI ALL ANIMATIONS
	$('#Miami').mouseenter(function() {
        $('#Miami-info').fadeIn(1000);
    });
    $('#Miami').mouseleave(function() {        
        $('#Miami-info').delay(1000).fadeOut(500);
        $('#Miami').empty();
        $('#Miami').append('<img src="images/heatlogo.gif" height="30px">');        
    });
    $('#miami-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Miami</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline"> The Heat are one of the best in the NBA.</p> <br> <p>They recently acquired Wade, Bosh, and Lebron James.</p>');
    	$('#info_expand').append('<img src="images/miamipic.gif" width="300px">');
    });


    //PITTSBURGH ALL ANIMATIONS
	$('#Pittsburgh').mouseenter(function() {
        $('#Pittsburgh-info').fadeIn(1000);
    });
    $('#Pittsburgh').mouseleave(function() {        
        $('#Pittsburgh-info').delay(1000).fadeOut(500);
        $('#Pittsburgh').empty();
        $('#Pittsburgh').append('<img src="images/steelerslogo.jpg" height="30px">');        
    });
    $('#pittsburgh-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Pittsburgh</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">The Pittsburgh Steelers are one of the best in the NFL. They have won more Super Bowls than any other NFL team</p> <br> <p>Real players from the Steelers were featured in "The Dark Knight Rises".</p>');
    	$('#info_expand').append('<img src="images/pittsburghpic.png" width="300px">');
    });


    //PITTSBURGH ALL ANIMATIONS
	$('#NewYork').mouseenter(function() {
        $('#NewYork-info').fadeIn(1000);
    });
    $('#NewYork').mouseleave(function() {        
        $('#NewYork-info').delay(1000).fadeOut(500);
        $('#NewYork').empty();
        $('#NewYork').append('<img src="images/knickslogo.jpg" height="30px">');        
    });
    $('#newyork-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">New York</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">Also home to the Yankees, a famous baseball team.</p> <br> <p>Be sure to drop by the Statue of Liberty!</p>');
    	$('#info_expand').append('<img src="images/nypic.gif" width="260px">');
    });



    //CHICAGO ALL ANIMATIONS
    $('#Chicago').mouseenter(function() {
        $('#Chicago-info').fadeIn(1000);
    });
    $('#Chicago').mouseleave(function() {        
        $('#Chicago-info').delay(1000).fadeOut(500);
        $('#Chicago').empty();
        $('#Chicago').append('<img src="images/bullslogo.gif" height="30px">');        
    });
    $('#chicago-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Chicago</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">Also home to the Cubs and the White Sox.</p> <br> <p>Chicago is most heavily populated city in the Midwest.</p>');
    	$('#info_expand').append('<img src="images/chicagopic.gif" width="300px">'); 
    });



    //BOSTON ALL ANIMATIONS
    $('#Boston').mouseenter(function() {
        $('#Boston-info').fadeIn(1000);
    });
    $('#Boston').mouseleave(function() {        
        $('#Boston-info').delay(1000).fadeOut(500);
        $('#Boston').empty();
        $('#Boston').append('<img src="images/redsoxlogo.gif" height="30px">');        
    });
    $('#boston-button').click(function() {
    	//alert("hi!");
    	$('#info_expand').empty();
    	$('#info_expand').append('<h1 style="display:inline">Boston</h1>');
        $('#info_expand').append('<br>');
        $('#info_expand').append('<p style="display: inline">Be sure to visit Harvard and MIT.</p> <br> <p>Also home to the Boston Bruins, a very good hockey team.</p>');
    	$('#info_expand').append('<img src="images/bostonpic.jpg" width="300px">');
    });

	
});