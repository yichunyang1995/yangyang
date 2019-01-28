<?php
include 'conn1.php';
$sids=$_GET['sid'];
$result=mysql_query("select*from youle where id=$sids");
$arr=mysql_fetch_array($result,MYSQL_ASSOC);
echo json_encode($arr);
?>