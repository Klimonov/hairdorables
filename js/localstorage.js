// get data from local storage
const name = localStorage.getItem('name');
const phone = localStorage.getItem('phone');
const secname = localStorage.getItem('secname');
const email = localStorage.getItem('email');
const address = localStorage.getItem('address');
 
// send to the server the data for send mail
$.ajax({
  type: "POST",
  url: "../php/mail.php",
  data: "name=" + name + "&phone=" + phone + "&secname=" + secname + "&email=" + email + "&address=" + address,
});

// redirect to the home page
setTimeout( 'location="/";', 5000 );

  