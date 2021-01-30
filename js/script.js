const selectedOption = document.querySelector("#validation-option");

// Event Listeners
selectedOption.addEventListener('click', selectOption);

// All Functions 
// notice function
function notice(msg, status){
    let div = document.createElement('div');
    div.className = `alert ${status}`;
    div.appendChild(document.createTextNode(msg));

    let noticeLoc = document.querySelector("#notice");
    noticeLoc.append(div);

    setTimeout(() => {
        let currentAlert = document.querySelector('.alert');
        if(currentAlert){
            currentAlert.remove();
        }
    }, 3000);
}

// selectOption function
function selectOption(e){
    let selectedOption = e.target.id;
    let selectedOptionName = e.target.innerText;
    let rePost = /^[0-9]{4}$/;
    let rePhone = /^(\+)?(00)?(88)?01[0-9]{9}$/;
    let reName = /^[a-zA-Z ]+$/;
    let reEmail = /^[a-z](([a-z0-9]+(\.[a-z0-9]+)*)|(".+"))@(([a-z0-9]+\.)+[a-z]{2,})$/;
    // let reEmail = /^[a-zA-Z0-9]+[^\.][a-zA-Z0-9]+@[a-zA-Z0-9.]+[^\.]$/;
    let data = prompt(`Please enter your ${selectedOptionName}:`);

    if (data === "" || data === null) {
        notice('Invalid Input!', 'error');
    } else {
        switch (selectedOption) {
            case 'email':
                console.log(data);
                if(reEmail.test(data)){
                    notice('Valid Email address!', 'success');
                }else{
                    notice('Email address not valid!', 'error');
                }
                break;
            case 'phone':
                if(rePhone.test(data)){
                    notice('Valid Phone number!', 'success');
                }else{
                    notice('Phone number not valid!', 'error');
                }
                break;
            case 'post':
                if(rePost.test(data)){
                    notice('Valid Post code!', 'success');
                }else{
                    notice('Post code not valid!', 'error');
                }
                break;
            case 'names':
                if(reName.test(data)){
                    notice('Valid Name!', 'success');
                }else{
                    notice('Name not valid!', 'error');
                }
                break;
            default:
                break;
        }
    }
}



