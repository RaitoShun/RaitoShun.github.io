const projectsTopBar = document.querySelector('.projects');
const projectsTopBarScrollLimit = document.querySelector('#skills');

function debounce(func, wait = 5, immediate = true) {  
	/*prevents the function that happens on scroll from firing a lot to preserve performance of the page*/
	var timeout;
	return function() {
		var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
		    timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
	};
}				

function navig(){
	if(window.scrollY + projectsTopBar.clientHeight  > projectsTopBarScrollLimit.offsetTop){
		projectsTopBar.classList.add('projects-active');
	}else{
		projectsTopBar.classList.remove('projects-active');
	}

}
window.addEventListener('scroll', debounce(navig));

const hideDescription = (event) => {
	let infoBoxParentDiv = event.target.offsetParent.offsetParent;

	infoBoxParentDiv.classList.add('inactive');
	infoBoxParentDiv.classList.remove('active');
}

const unhideDescription = (event) => {
	let infoBox = event.target.offsetParent;

	infoBox.classList.remove('inactive');
	infoBox.classList.add('active');
	
}

function copyEmail() {
	/* Get the text field */
	var copyText = document.getElementById("myInput");
	let copyButt = document.querySelector(".copy-notif");
					
	/* Select the text field */
	copyText.select();
	copyText.setSelectionRange(0, 25);
					
	/* Copy the text inside the text field */
	document.execCommand("copy");
					
	/* Alert the copied text */
	copyButt.classList.add("copied");
} 
