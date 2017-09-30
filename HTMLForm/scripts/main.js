$(function(){
    $('#btnSubmit').on('click', submit);


    function submit(){

var error = []


function validate(id, name){
    if(($(id).val())===''){
        console.log(id);
        $(id).addClass('invalid');
       error.push(name + ' was not filled out <br>'); 
    }
}
validate('#firstName', 'First Name');
validate('#lastName', 'Last Name');
validate('#email', 'Email');
validate('#findUs', 'How did you find us');
validate('#explain', 'Why do you need this blender');

var emailAddress = $('#email').val();
//console.log(emailAddress);
if(emailAddress.indexOf('@')===-1||(emailAddress.indexOf('.com')=== -1)){
    error.push('Email address is invalid<br>');
}
var checked = $('#terms').is(':checked');
console.log(checked);

if(checked===false){
    error.push('You must accept the Terms and Conditions');
}
console.log(error);
if(error.length>0){
    $('.result').html(error);
}else{
    $('.result').html('Thank you for your submission');
}

    }
});