
				const navBar = document.querySelector('.projects');
				const six = document.querySelector('#six');

					function debounce(func, wait = 5, immediate = true) {  /*prevents the function that happens on scroll from firing a lot to preserve performance*/
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
						if(window.scrollY + navBar.clientHeight  > six.offsetTop){
						navBar.classList.add('projects-active');
					}else{
						navBar.classList.remove('projects-active');
					}

				}
				window.addEventListener('scroll', debounce(navig));

				const hide = (event) => {
					 event.target.offsetParent.offsetParent.classList.add('inactive');
					 event.target.offsetParent.offsetParent.classList.remove('active');

				}


                function myFunction() {
                    /* Get the text field */
                    var copyText = document.getElementById("myInput");
                    let copyButt = document.querySelector(".copy-notif");
                  
                    /* Select the text field */
                    copyText.select();
                    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
                  
                    /* Copy the text inside the text field */
                    document.execCommand("copy");
                  
                    /* Alert the copied text */
                    copyButt.classList.add("copied");
                  } 