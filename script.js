function submitForm() {
    // 1. get all the user input values
    let var0 = document.getElementById('fname').value;
    let var1 = document.getElementById('lname').value;
    let var2 = document.getElementById('email').value;
    let var3 = document.getElementById('rfc').value;
    console.log(var0,var1,var2,var3);
    // check if all the inputs are filled
    if ((var0 != "") && (var1 != "") && (var2 != "") && (var3 != "")) {
        console.log("hello");
        alert("Form submitted successfully!")
    } 
    else {
        alert("All fields are required!")
    }
}