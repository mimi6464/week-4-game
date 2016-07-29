
$(document).ready(function () {


	var totalPick = 0;
	var randomPick = 0;
	var winCount = 0;
	var lossCount = 0;
	$('.gem').on("click", function () {

		var self = $(this);
		var value = self.attr('value');
		if (value === '0') {
			var guess = Math.floor(Math.random() * 12) + 1;
			self.attr("value", guess);
			addPicks(guess);
		}
		//To verify game 
		isAllClicked();

	});


	function addPicks(value) {
		totalPick += value;
		$('.score-board').text(totalPick);
	};

	function isAllClicked() {
		var picks = $('.gem');
		var allHasValue = true;
		picks.each(function () {
			var self = $(this);
			var value = self.attr('value');

			if (value === '0') {
				allHasValue = false;
			}
		});
		if (allHasValue) {
			verifyWinner();
		}

	}
	function verifyWinner() {
	
		var youScore = $('.score-board').text();
		if (randomPick == youScore) {
			winCount++;
			$('#winCount').text(winCount);
		}
		else if (youScore > randomPick) {
			lossCount++;
			$('#lossCount').text(lossCount);
		} else {
			winCount++;
			$('#winCount').text(winCount);
		}

		reset();
		resetAlValue();
		totalPick = 0;
	}
	function resetAlValue() {
		var picks = $('.gem');		
		picks.each(function () {
			var self = $(this);
			self.attr("value", "0");
			
		});		
	
	}
	function reset() {
		randomPick = Math.floor(Math.random() * 12) + 24;
		$('.guess-display').text(randomPick);
		
	}

	reset();
});

