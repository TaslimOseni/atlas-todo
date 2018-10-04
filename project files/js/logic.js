
function press_start(duration){

		duration -= 1;	//I decremented by 1 to cater for the lag that occurs when the timer starts


		document.getElementById('timer_text').style.color = "#00FF00";	//turn the text colour to green
		document.getElementById('start_button').innerHTML = "STOP";		//change button text from 'start' to 'stop'


		//I gave the value of duration to variables timer, minutes and seconds.
		var timer = duration, minutes, seconds;


		//The variable below is responsible for the tick-tock change of time. It's a fixed function in JS.
	    var varry = setInterval(function(){

	        minutes = parseInt(timer / 60, 10)
	        seconds = parseInt(timer % 60, 10);

	        //Assigning values to minutes and seconds with the tenary operator
	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        //Setting the final time.. Since we'd always be counting down from an hour, I left the hour field as '00'
	        document.getElementById('timer_text').innerHTML = "00:" + minutes + ":" + seconds;

	        //Here, we're checking whether the timer has elapsed (00:00:00)
	        if(--timer < 0){
	            clearInterval(varry);
	            document.getElementById('timer_text').style.color = "#0000FF";
				document.getElementById('timer_text').innerHTML = "TIME ELAPSED!!!";
				document.getElementById('reset_button').onclick = function(){
					document.getElementById('timer_text').style.color = "#FF0000";
					document.getElementById('timer_text').innerHTML = "01:00:00";
					document.getElementById('start_button').innerHTML = "START";
					document.getElementById('start_button').onclick = function(){
					press_start(3599);
						}
					}
				document.getElementById('start_button').innerHTML = "-----";
				document.getElementById('start_button').onclick = null;

	        }
	    }, 1000);


	    //when reset is pressed during countdown
	    document.getElementById('reset_button').onclick = function(){
	    		clearInterval(varry);
	    		document.getElementById('timer_text').style.color = "#FF0000";
				document.getElementById('timer_text').innerHTML = "01:00:00";
				document.getElementById('start_button').innerHTML = "START";
				document.getElementById('start_button').onclick = function(){
					press_start(3599);
				}
	    }

	    //when start button is pressed during countdown
	    document.getElementById('start_button').onclick = function(){
	    	//if the text on the start-button is 'stop'
	    	if(document.getElementById('start_button').textContent === 'STOP'){
	    		clearInterval(varry);
	    		document.getElementById('start_button').innerHTML = "START";
	    		document.getElementById('timer_text').style.color = "#FFFF00";
	    	}

	    	//if the text on the start-button is 'start'
	    	else if(document.getElementById('start_button').textContent === 'START'){
	    		press_start(getRemainderDuration());
	    	}
	    }

}


function getRemainderDuration(){
	//get the string version of the time left
	var timeLeft = document.getElementById('timer_text').textContent;

	//extract the seconds and minutes from the string version above
	var ttt = (parseInt(timeLeft.charAt(3) + timeLeft.charAt(4)) * 60) + parseInt(timeLeft.charAt(6) + timeLeft.charAt(7));

	//return what we got
	return ttt;
}