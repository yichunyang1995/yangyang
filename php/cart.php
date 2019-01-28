<?php
require 'conn1.php';
$result=mysql_query('select*from youle');
$arr=array();
for($i=0;$i<mysql_num_rows($result);$i++){
    $arr[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
}
echo json_encode($arr);
?>


