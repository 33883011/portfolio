// --------------------------------Select the elements--------------------------------------------------------------------------------------
var hamburger_menu;
var big_wrapper;

function declare() {
    hamburger_menu = document.querySelector(".hamburger-menu");
    big_wrapper = document.querySelector(".big-wrapper");
}

const main = document.querySelector("main");

declare();

function toggleMenu() {
    big_wrapper.classList.toggle("active");
}

function events() {
    hamburger_menu.addEventListener("click", toggleMenu);
}

events();
 //----------------------------------------------------------------------------------header navigation end-----------------------------
 const form = document.querySelector('form');
 const name = document.getElementById("name");
 const email = document.getElementById("email");
 const subject = document.getElementById("subject");
 const message = document.getElementById("message");
 
 function sendEmail() {
     const bodyMessage = `Full Name: ${name.value}<br> Email: ${email.value}<br> Subject: ${subject.value}<br> Message: ${message.value}<br>`;
 
     Email.send({
         Host: "smtp.elasticemail.com",
         Username: "jeffgraphics254@gmail.com",
         Password: "1D649464C22803B432CB5EBA01BE2CD54DBE",
         To: 'jeffgraphics254@gmail.com',
         From: "jeffgraphics254@gmail.com",
         Subject: subject.value,
         Body: bodyMessage
     }).then(
         message => {
             if (message === "OK") {
                 Swal.fire({
                     title: "Success!",
                     text: "Message sent successfully!",
                     icon: "success"
                 });
 
                 // Clear the form fields after successful submission
                 resetForm();
             }
         }
     );
 }
 
 function resetForm() {
     // Reset the form fields to their default values
     form.reset();
 }
 
 form.addEventListener("submit", (e) => {
     e.preventDefault();
     sendEmail();
 });
 
 //--------------------------------------------------------------------------------------------------------------------------------------------------------

 document.addEventListener('DOMContentLoaded', function() {
    // Add a short delay to make sure the animation is applied after the content is fully loaded
    setTimeout(function() {
        document.querySelector('big-wrapper').style.opacity = '1';
    }, 300);
});