if(document.body.classList.contains('register-page')){
    chrome.storage.local.get(["login"], function(items){
        items = items['login'];
        if(items.userId === undefined || items.userPw === undefined) return;
        document.getElementById("tempUserId").value = items.userId;
        document.getElementById("tempPwd").value = items.userPw;
        document.getElementsByClassName("btn btn-primary btn-flat pull-right")[0].click();
    });
}