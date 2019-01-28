<?php
require 'conn1.php';
if(isset($_POST['phones'])||isset($_POST['submit'])){
    $phone=@$_POST['phones'];
}else{
    exit('非法操作');
}
$search="select * from form where phone='$phone'";
$result=mysql_query($search);
if(mysql_fetch_array($result)){//有值说明手机号存在
    echo 'false';//号码有重复
}
else{
    echo 'true';//没有重复
}
if(isset($_POST['submit'])&&$_POST['submit']=='立即注册'){
    $cellphone=$_POST['phones'];
    $pass=md5($_POST['password']);
 mysql_query("insert into form values(default,'$cellphone','$pass',NOW())");
 header('location:http://10.31.161.22/study/lianxi/youlewang%20%20project/src/login.html');
}

?>