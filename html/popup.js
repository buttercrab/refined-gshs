function saveUserData(id, pw, callback) {
    chrome.storage.local.set({
        "login": {
            "userId": id,
            "userPw": pw,
        },
    }, callback);
}

document.addEventListener('DOMContentLoaded', function () {
    let submitButton = document.getElementById("save");
    submitButton.addEventListener('click', function () {
        chrome.storage.local.clear();
        let id = document.getElementById('userId').value;
        let pw = document.getElementById('userPw').value;
        saveUserData(id, pw, function () {
            document.getElementById('userId').value = '';
            document.getElementById('userPw').value = '';
        });
    }, false);

    let githubButton = document.getElementById('github');
    githubButton.addEventListener('click', function () {
        let newURL = "https://github.com/buttercrab/refined-gshs";
        chrome.tabs.create({url: newURL});
    });
}, false);

