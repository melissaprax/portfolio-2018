$(document).ready(function(){
    
$("#js-mail").on('click', function(event) {
    event.preventDefault();
    var email = 'melissaprax@gmail.com';
    var subject = 'from the website';
    var emailBody = '';
    window.location = 'mailto:' + email + '?subject=' + subject + '&body=' +   emailBody;
});










});