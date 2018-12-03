<?php

$servername = "localhost"; // default server name
$username = "ggkfox"; // user name that you created
$password = "123"; // password that you created
$dbname = "test";

function deleteDB(){
    $sql = 'DROP DATABASE myDB';
    if ($conn->query($sql)) {
        echo "Database myDB was successfully dropped<br>";
    } else {
        echo 'Error dropping database: ' . mysql_error() . "<br>";
    }		
}

function createDB($name){
    $sql = "CREATE DATABASE myDB";
    if ($conn->query($sql) === TRUE) {
        echo "Database created successfully<br>";
    } else {
        echo "Error creating database: " . $conn->error ."<br>";
    }
}


function connectDB(){
    $conn = new mysqli($servername, $username, $password);
    // test connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error ."<br>");
    } 
    echo "Connected successfully <br>";
}

connectDB();
createDB("temp");


$conn->close();

?>