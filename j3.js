function chenckInfo() {
    var nameflag = true;
    var passwordflag = true;
    var usernameInfo = document.getElementById("username");
    var passwordInfo = document.getElementById("password");

    //用户名校验
    function checkUserName() {
        if(usernameInfo.value==null || usernameInfo.value==""){
            //alert("校验失败");
            nameflag=false;
            usernameInfo.focus();
        }
        else{
            nameflag = true;
        }
        return nameflag;
    }

    //密码校验
    function checkUserPassword(){
        if(usernameInfo.value==null || usernameInfo.value==""){
            //alert("校验失败");
            passwordflag=false;
            passwordInfo.focus();
        }
        else {
            if(passwordInfo.value.length<6)
            {
                alert("密码至少6位");
                passwordflag = false;
                passwordInfo.focus();
            }
            else {
               // alert("校验成功");
                passwordflag = true;
            }
        }
        return passwordflag;
    }
    if(checkUserName() && checkUserPassword()){
        alert("登录成功");
    }
    else {
        alert("请重新输入");
    }

}  
