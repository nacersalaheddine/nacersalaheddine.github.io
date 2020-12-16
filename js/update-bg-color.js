(function(){
	const btnA = document.querySelector("button.a");
	const btnB = document.querySelector("button.b");
	const btnC = document.querySelector("button.c");
		const btnD = document.querySelector("button.d");
	const bgSkewed = document.querySelector(".skewed");
	let oldClass = "skewed-b";
	updateBG =  (styleClass) =>{
	
		bgSkewed.classList.replace(oldClass, styleClass);
		oldClass = styleClass;
		console.log(bgSkewed.classList);
	}
	btnA.addEventListener("click", ()=>{
	updateBG("skewed-a");
	});
	btnB.addEventListener("click", ()=>{
	updateBG("skewed-b");
	});
	btnC.addEventListener("click", ()=>{
	updateBG("skewed-c");
	});
		btnD.addEventListener("click", ()=>{

	updateBG("skewed-d");
	});
	/*Modal image trigger*/
			
			// Get the modal
		const modal = document.getElementById("myModal");

		// Get the image and insert it inside the modal - use its "alt" text as a caption
		//const img = document.getElementById("myImg");
		const personalPics = document.querySelectorAll(".small-pic");
		
		
		
		
		const modalImg = document.getElementById("img01");
		const captionText = document.getElementById("caption");
		
		personalPics.forEach((p)=>{
		
			p.addEventListener("click", ()=>{
				modal.style.display = "block";
				modalImg.src = p.src;
				captionText.innerHTML = p.alt;
			
			});
		});
		// Get the <span> element that closes the modal
		const span = document.getElementsByClassName("close")[0];

		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
		  modal.style.display = "none";
		}
	
	
	
	}());
	