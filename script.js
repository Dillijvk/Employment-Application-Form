function validation(){

  // Input Values

  let fname =
  document.getElementById("f-name").value;

  let lname =
  document.getElementById("l-name").value;

  let phone =
  document.getElementById("phone").value;

  let email =
  document.getElementById("email").value;



  // Checkbox Elements

  let walkin =
  document.getElementById("walkin");

  let referral =
  document.getElementById("referral");

  let newspaper =
  document.getElementById("newspaper");

  let facebook =
  document.getElementById("facebook");

  let twitter =
  document.getElementById("twitter");

  let linkedin =
  document.getElementById("linkedin");

  let other =
  document.getElementById("other");



  // First Name Validation

  if(fname == ""){

    alert("Enter First Name");

  }



  else if(!isNaN(fname)){

    alert("Numbers Not Allowed In First Name");

  }



  // Last Name Validation

  else if(lname == ""){

    alert("Enter Last Name");

  }



  else if(!isNaN(lname)){

    alert("Numbers Not Allowed In Last Name");

  }



  // Phone Validation

  else if(phone == ""){

    alert("Enter Mobile Number");

  }



  else if(isNaN(phone)){

    alert("Only Numbers Allowed In Phone");

  }



  else if(phone.length != 10){

    alert("Phone Number Must Be 10 Digits");

  }



  // Email Validation

  else if(email == ""){

    alert("Enter Email Address");

  }



  else if(
    !email.includes("@") ||
    !email.includes(".com")
  ){

    alert("Invalid Email");

  }



  // Checkbox Validation

  else if(

    !walkin.checked &&
    !referral.checked &&
    !newspaper.checked &&
    !facebook.checked &&
    !twitter.checked &&
    !linkedin.checked &&
    !other.checked

  ){

    alert("Please Select Any One Option");

  }



  // Success

  else{

    alert("Form Submitted Successfully...");

  }

}