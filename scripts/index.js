//for navigation button
document.querySelector(".nav-btn").addEventListener("click", function () {
    document.querySelector(".navigation").classList.toggle("active");
});

//for faq button
var btnFaqs = document.querySelectorAll(".btn-faq")
btnFaqs.forEach(btnFaq => {
    btnFaq.addEventListener("click", function (e) {
        this.classList.toggle("transform");
        document.querySelector("#faq" + e.target.id).classList.toggle("active");
    });
});

//date at copyright
let year = new Date().getFullYear()
document.querySelector("#date").innerHTML = year;

//function animation when scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    reveals.forEach(reveal =>{
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < (windowHeight - elementVisible)) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    });
};

window.addEventListener("scroll", reveal);


//add smoot scrolling
// self executing function
// document.querySelector("html")
// let aLinks = document.querySelectorAll("a");
// (function() {
//     aLinks.forEach( alink => {
//         alink.addEventListener("click", function(e) {
//             alert("link")
//         //     if (this.hash !== "") {
//         //         event.preventDefault();

//         //         // Store hash
//         //         var hash = this.hash;

//         //         document.querySelector("html").animate({
//         //             scrollTop: document.querySelector(hash).offset
//         //         })
//         //     }
//         })
//     })
// })();


// $(document).ready(function(){
//     // Add smooth scrolling to all links
//     $("a").on('click', function(event) {

//       // Make sure this.hash has a value before overriding default behavior
//       if (this.hash !== "") {
//         // Prevent default anchor click behavior
//         event.preventDefault();

//         // Store hash
//         var hash = this.hash;

//         // Using jQuery's animate() method to add smooth page scroll
//         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//         $('html, body').animate({
//           scrollTop: $(hash).offset().top
//         }, 800, function(){

//           // Add hash (#) to URL when done scrolling (default click behavior)
//           window.location.hash = hash;
//         });
//       } // End if
//     });
//   });