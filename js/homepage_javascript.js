/* Javascript for my homepages - feel free to borrow any code you like! */

/* ################### MENU ELEMENT STUFF  ########################## */

/* Function to swap out text of dead menu links with menu-item element passed as parameter */

	function change_dead_link (element_to_change, message) {
		element_to_change.firstChild.nodeValue = message;		// Access the text from the element
	}

/* Select all menu elements by class, stored in menu_items array - useful for both mouseover and returning to normal */

	menu_items = document.getElementsByClassName("menu"); 			// Select all menu elements by class, stored in menu_items array

	menu_items_original_text = [];						// Copy contents of menu_items text into array to enable refreshing original text
	for (let counter = 0; counter < menu_items.length; counter ++) {	
	  menu_items_original_text[counter] = menu_items[counter].firstChild.nodeValue;
	}

	console.log(menu_items_original_text[1]);

/* Establish mouseover event handlers for all the menu elements */
	
	over_message = 'Coming Soon!';							// Message to replace dead links

	for (let counter = 0; counter < menu_items.length; counter ++) {		// Loop thru contents of array
		menu_items[counter].addEventListener('mouseover', function() {  	// Anonymous function needed to send parameters 
			change_dead_link(menu_items[counter], over_message)}, false);	// Send element of triggered menu_item
	}

/* Establish mouseout event handlers to return to normal */ 

	for (let counter = 0; counter < menu_items.length; counter ++) {		// Loop thru contents of array
		menu_items[counter].addEventListener('mouseout', function() {  		// Anonymous function needed to send parameters 
			change_dead_link(menu_items[counter], menu_items_original_text[counter])}, false);	// Send element of triggered menu_item
	}

/*  ############################ END MENU STUFF ####################################### */

/* ############################# SCALE PAGE TO WIDTH ################################## */






