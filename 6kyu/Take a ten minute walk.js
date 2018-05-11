// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. 
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). 
// You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
	if(walk.length === 10) {
		var arr = [0,0,0,0];
		for (var w = 0; w < walk.length; w++) {
			if (walk[w] === 'n') {
				arr[0]++;
			} else if (walk[w] === 's') {
				arr[1]++;
			} else if (walk[w] === 'w') {
				arr[2]++;
			} else if (walk[w] === 'e') {
				arr[3]++;
			}
		}
		if (arr[0] === arr[1] && arr[2] === arr[3]) { // If we took same amount of steps in all directions, we end up in the same location.
			return true;
		} else {
			return false;
		}
	} else {
		return false; // If we didn't move at all, it wasn't a trip.
	}
}