<?php
require "conn1.php";
if(isset($_POST['phone'])){//前端传来的数据
    $phone=$_POST['phone'];
    $pass=md5($_POST['pass']);
}else{
    exit('非法操作');
}
$query="select*from form where phone='$phone'and pass='$pass'";
$result=mysql_query($query);
if(mysql_fetch_array($result)){
    echo true;
}else{
    echo false;
}

?>