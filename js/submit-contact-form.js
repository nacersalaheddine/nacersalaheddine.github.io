
(function(){

const submitBtn = document.getElementById("submit-form-btn");
const contactForm = document.getElementById("contact-form");


submitBtn.addEventListener("click",(e)=>{
	e.preventDefault();
	console.log("sending data");
	contactForm.submit();
});


}());