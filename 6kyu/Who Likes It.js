// You probably know the "like" system from Facebook and other pages. 
// People can "like" blog posts, pictures or other items. 
// We want to create the text that should be displayed next to such an item.
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item.

function likes(names) {
    let namecount = names.length; // How many elements(names) are in the array.
  
    if (namecount === 0) return "no one likes this";
    else if (namecount === 1) return names[0] + " likes this"; // If there is one name, return the name ([0]) + string
    else if (namecount === 2) return names[0] + " and " + names[1] + " like this"; // Ditto
    else if (namecount === 3) return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'; // Ditto
    else if (namecount > 3) return names[0] + ', ' + names[1] + ' and ' + (namecount-2) + ' others like this'; // In case theres more than 3, we aren't going to list them at index, instead typing "and others". namecount-2 get's the amount of people remaining in the array.
  }