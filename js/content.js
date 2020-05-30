function saveUserData(id, pw, callback) {
    chrome.storage.local.set({
        "login": {
            "userId": id,
            "userPw": pw,
        },
    }, callback);
}

if (document.getElementById("tempUserId") != null) {
    // Login Page
    chrome.storage.local.get(["login"], function (items) {
        items = items['login'];
        document.getElementById("tempUserId").value = items.userId;
        document.getElementById("tempPwd").value = items.userPw;
        document.getElementsByClassName("btn btn-primary btn-flat pull-right")[0].click();
    });
} else {
    // Main Page
}
