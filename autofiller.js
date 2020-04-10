var i = 1
while (i > 0) {
    register()
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 sec
    document.getElementById('cx_custom_form_firstname').value="YourName"
    document.getElementById('cx_custom_form_lastname').value="YourLastName"
    document.getElementById('cx_custom_form_email').value="YourEmail"
    document.getElementById('cx_custom_form_subject').value="YourCategory"
    document.getElementById('cx_custom_form_phone').value="YourPhone"
    var buttonsubmit = document.getElementsByClassName('btn-primary');
    await new Promise(resolve => setTimeout(resolve, 1000)); // 1 sec
    buttonsubmit[0].click();
    await new Promise(resolve => setTimeout(resolve, 15000)); // 15 sec
    var i = document.body.innerHTML.search("Chat Ended");("Chat Ended");
    if(i > 0){
        var buttonclose = document.getElementsByClassName('cx-button-close');
        buttonclose[0].click();
    }
    await new Promise(resolve => setTimeout(resolve, 20000)); // 2 sec
}

