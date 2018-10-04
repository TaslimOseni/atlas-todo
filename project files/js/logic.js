function press_start(duration){


		document.getElementById('timer_text').style.color = "#00FF00";
		document.getElementById('start_button').innerHTML = "STOP";


		var timer = duration, minutes, seconds;
	    var varry = setInterval(function mimi(){

	        minutes = parseInt(timer / 60, 10)
	        seconds = parseInt(timer % 60, 10);

	        minutes = minutes < 10 ? "0" + minutes : minutes;
	        seconds = seconds < 10 ? "0" + seconds : seconds;

	        document.getElementById('timer_text').innerHTML = "00:" + minutes + ":" + seconds;

	        if (--timer < 0) {
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

	    //when reset is pressed
	    document.getElementById('reset_button').onclick = function(){
	    		clearInterval(varry);
	    		document.getElementById('timer_text').style.color = "#FF0000";
				document.getElementById('timer_text').innerHTML = "01:00:00";
				document.getElementById('start_button').innerHTML = "START";
				document.getElementById('start_button').onclick = function(){
					press_start(3599);
				}
	    }

	    //when start button is pressed
	    document.getElementById('start_button').onclick = function(){
	    	if(document.getElementById('start_button').textContent === 'STOP'){
	    		clearInterval(varry);
	    		document.getElementById('start_button').innerHTML = "START";
	    		document.getElementById('timer_text').style.color = "#FFFF00";
	    	}

	    	else if(document.getElementById('start_button').textContent === 'START'){
	    		press_start(getRemainderDuration());
	    	}
	    }

}


function getRemainderDuration(){
	var timeLeft = document.getElementById('timer_text').textContent;

	var ttt = (parseInt(timeLeft.charAt(3) + timeLeft.charAt(4)) * 60) + parseInt(timeLeft.charAt(6) + timeLeft.charAt(7));
	return ttt - 1;
}