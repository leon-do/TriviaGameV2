/* make variables */

	var correctNumber = 0;
	var incorrectNumber = 0;
	var unansweredNumber = 0;
	var setNumber = 1;
	var counterNumber = 99999999;

	var set1 = [
		"what is your favorite color??",
		"<button> bright yellow </button>",
		"<button> dark white </button>",
		"<button> vomit green </button>",
		"<button data-best=IE8> poop brown </button>"];


/* make buttons for set 2 */
	var set2Array = "";
	for (var i = 1; i <= 500; i++){
		if (i == 213){
			set2Array = set2Array + "<button data-best=IE8> pick me </button>";
		} else if (i == 210){
			set2Array = set2Array + "<button> don't pick me </button>";
		} else {			
			set2Array = set2Array + "<button> pick me </button>";
		}
	}

	var set2 = [
		"where is the 213th button?", set2Array];

	var set3 = [
		"what number makes sense (aka is rational)?",
		"<button data-best=IE8> 0.112358132134558914423337761098715972584418167651094617711286574636875025121393196418317811 </button>",
		"<button> 3.14159265358979323846264338327950288419716939937510582 </button>",
		"<button> 1.414213562373095048801688724209698078569671875376948073176679737990732478462107038850387534327641572735013846230912297024924836055850737212644121497099935831413222665927505592755799950501152782060571470109559971605970274534596862014728517418640889198609552329230484308714321450839762603627995251407989687253396546331808829640620615258352395054745750287759961729835575220337531857011354374603408498847160386899970699004815030544027790316454247823 </button>",
		"<button> 0.333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 </button>"];

	var set4 = [
		"what is the best browser?",
		"<button> google chrome </button>",
		"<button data-best=IE8> internet explorer 8 </button>",
		"<button> safari </button>",
		"<button> mozilla firefox </button>"];

	var set5 = [
		"is this quiz silly??",
		"<button> no </button",
		"<button data-best=IE8> yes </button",
		"<button> none of the above </button",
		"<button> not enough information </button"];

/* start the program */
	

	selectSet();

	function selectSet(){


		if (setNumber == 1){
			displayText(set1);
		} else if (setNumber == 2){
			displayText(set2);
		} else if (setNumber == 3){
			displayText(set3);
		} else if (setNumber == 4){
			displayText(set4);
		} else if (setNumber == 5){
			displayText(set5);
		}
	};


/* display text */


	function displayText(myArray){
		$(".questionDiv").empty();
		$(".choicesDiv").empty();

		$(".questionDiv").html(myArray[0]);

		for (var i = 1; i < myArray.length; i++){
			$(".choicesDiv").append(myArray[i]);
		}

	};


/* onclick */


	$(".choicesDiv").on("click","button",function(){

		clearTimeout(myTimer);

		if ($(this).data("best") == "IE8"){
			checkAnswer("correct"); 
		} else {
			checkAnswer("incorrect");
		}

	});


/* check if right or wrong */


	function checkAnswer(status){

		if (status === "correct"){
			if (setNumber == 1){
				$(".popupDiv").css("background-color","#ffd718");
				popUpScreen("<img src='https://m.popkey.co/ff4207/jrooe.gif'>");
			} else if (setNumber == 2){
				$(".popupDiv").css("background-color","#000000");
				popUpScreen("cheater!!!  :)");
			} else if (setNumber == 3){
				$(".popupDiv").css("background-color","#ececec");
				popUpScreen("<img src='https://media.giphy.com/media/l0MYt8SdoBbWH3CbC/source.gif'>");			
			} else if (setNumber == 4){
				$(".popupDiv").css("background-color","#000000");
				popUpScreen("internet explorer is the best! <br> <img src='https://media.giphy.com/media/3If8u5wFsfII0/giphy.gif'>");
			} else if (setNumber == 5){
				$(".popupDiv").css("background-color","#000000");
				popUpScreen("ur silly: <br> <img src='https://media.giphy.com/media/l0HlH2sxhkuRE70Zi/giphy.gif'>","theEnd");
			}

			correctNumber++;
			setNumber++;
			selectSet();



		} else if (status === "incorrect"){
			if (setNumber == 1){
				$(".popupDiv").css("background-color","#ffffff");
				popUpScreen("<img src='https://media.giphy.com/media/xT8qB2lDLK6FE7vKr6/giphy.gif'>")
			} else if (setNumber == 2){
				$(".popupDiv").css("background-color","#ffffff");
				popUpScreen("<img src='https://media.giphy.com/media/3osxYoiN5ElORrgzN6/giphy.gif'>");
			} else if (setNumber == 3){
				$(".popupDiv").css("background-color","#000000");
				popUpScreen("<img src='https://media.giphy.com/media/7QxZHSDsI55te/giphy.gif'>");
			} else if (setNumber == 4){
				$(".popupDiv").css("background-color","#000000");
				popUpScreen("Incorrect <br> <img src='https://media.giphy.com/media/l3vRfhFD8hJCiP0uQ/giphy.gif'>");
			} else if (setNumber == 5){
				$(".popupDiv").css("background-color","#ffffff");
				popUpScreen("<img src='https://media.giphy.com/media/hVIEywSQ3ZU3u/giphy.gif'>","theEnd");
			}
			
			incorrectNumber++;
			setNumber++;
			selectSet();
		

		} else if (status === "outOfTime"){
			if (setNumber == 5){
				popUpScreen("<img src='https://media.giphy.com/media/l46Csvv5zjx3V1FqE/giphy.gif'>","theEnd");
			} else {
			popUpScreen("<img src='https://media.giphy.com/media/l46Csvv5zjx3V1FqE/giphy.gif'>");
			unansweredNumber++;
			setNumber++;
			selectSet();
			}
		}


	};



/* based on right/wrong, popup screen */
	function popUpScreen(myText,theEnd){

			/* display for 3000 milliseconds */
			var milliseconds = 3000;

			/* popuplate text */
			$(".popupDiv").html(myText);

			/* display text */
			$(".popupDiv").css("display","block");

			/*hide questionDiv*/
			$(".choicesDiv").css("display","none");
				
			/* if user answers the last question, then go to finalpopup */
			if (theEnd == "theEnd"){
				setTimeout(function(){ 
					$(".popupDiv").css("display","none");
					finalPopup();
				}, milliseconds);
			} 

			/* else move on to next set */
			else{
			setTimeout(function(){ 
				$(".popupDiv").css("display","none");
				counterNumber = 99999999;
				theTimer();
				$(".choicesDiv").css("display","block");
			}, milliseconds);
		}
	};




/* final popup */
	function finalPopup(){
		clearTimeout(myTimer);

		/* white background */
		$(".popupDiv").css("background-color","#ffffff");

		/* empty other divs */
		$(".questionDiv").empty();
		$(".timerDiv").empty();
		$(".choicesDiv").empty();

		$(".popupDiv").html(
			"Correct: " + correctNumber + "<br>" +
			"Incorrect: " + incorrectNumber + "<br>" +
			"Unanswered: " + unansweredNumber + 
			"<button class='restart'> restart </button>");

		$(".popupDiv").css("display","block");
	}



	/* restart button */
	$(".popupDiv").on("click","button",function(){
		correctNumber = 0;
		incorrectNumber = 0;
		unansweredNumber = 0;
		setNumber = 1;
		counterNumber = 99999999;

		$(".choicesDiv").css("display","block");
		$(".popupDiv").css("display","none");

		selectSet();
	})


/* stuff for the timer */

	theTimer();
	var myTimer;

	function theTimer(){

		myTimer = setInterval(function(){
			if (counterNumber == 0){
				clearTimeout(myTimer);

				checkAnswer("outOfTime");

			}

			$(".timerDiv").html("time left: " + counterNumber);
			counterNumber--;

		},1)

	};
