const displayBox =document.querySelector("#display-box");
/* function for retrieving the password from localStorage, if it doesn't exist there, then read from the clipboard and display it.*/

function displayPassword() {
        // try reading password from the clipboard.
        navigator.clipboard.readText().then(password => {
            if (password) {
                if(password.length===10 && !password.includes(' ')) {
                    displayBox.innerText = password;
                }
                else{
                    displayBox.innerText = 'No Password Found!';
                }
            } else {
                displayBox.innerText = 'No Password Found!';
            }
        }).catch(err => {
            console.log("error reading clipboard: ", err);

            document.getElementById('display-box').innerText = 'Clipboard access denied!';
        });
}
//Run the displayPassword function when the page loads
window.onload = displayPassword;