let path = window.location.pathname;
if (path !== '/student/logout.do') {
    if (document.getElementsByClassName("register-page")[0] !== undefined) {
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
}
