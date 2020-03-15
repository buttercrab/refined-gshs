document.addEventListener('DOMContentLoaded', function () {
    let submitButton = document.getElementById("save");
    submitButton.addEventListener('click', function () {
        let id = document.getElementById("userId").value;
        let pw = document.getElementById("userPw").value;
        chrome.storage.local.set({
            "login": {
                "userId": id,
                "userPw": pw,
            }
        }, function () {
            console.log("saved");
        });
    }, false)
}, false);