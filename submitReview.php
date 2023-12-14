<?php
header("Access-Control-Allow-Origin: *");

// Stabilisce una connessione al database MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nauticaldream";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica la connessione
if ($conn->connect_error) {
    die("Connessione fallita: " . $conn->connect_error);
}

// Ottieni i dati del modulo
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$review = $_POST['review'];

error_log(print_r($_POST, true), 3, 'debug.log');


// Query SQL per inserire i dati nella tabella 'recensione'
$sql = "INSERT INTO recensioni (nome, cognome, email, recensione)
        VALUES ('$firstName', '$lastName', '$email', '$review')";

// Esegui la query
if ($conn->query($sql) === TRUE) {
    echo "Recensione inviata con successo!";
} else {
    echo "Errore: " . $sql . "<br>" . $conn->error;
}

// Chiudi la connessione al database
$conn->close();
?>
