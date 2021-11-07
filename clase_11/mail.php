<?php

global $enviado;
$enviado = "no";

// definir variables

// funcion de seguridad no tocar
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}



if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = test_input($_POST["nombre"]);
  $email = test_input($_POST["email"]);
  $telefono = test_input($_POST["telefono"]);
  $consulta = test_input($_POST["consulta"]);
  $asunto = test_input($_POST["asunto"]);

  $enviado = "si";
}




if($enviado == "si"){

$para  = 'gustavo@malcotti.com';// . ', '; // atención a la coma

// título
$titulo = 'Consulta desde Pagina de contacto';

// mensaje
$mensaje = "
<html>
<head>
 <title>$titulo</title>
</head>
<body>
<hr>
<h3> $titulo</h3>
  <p><b>Nombre:</b>  $nombre</p>
  <p><b>Email:</b>  $email</p>
  <p><b>Teléfono:</b>  $telefono</p>
  <hr>
  <h3>Consulta:</h3>
  $consulta
 
<hr>
</body>
</html>
";

// Para enviar un correo HTML, debe establecerse la cabecera Content-type
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Cabeceras adicionales
$cabeceras .= "From: $nombre <$email>" . "\r\n";
// $cabeceras .= 'Cc: birthdayarchive@example.com' . "\r\n";
// $cabeceras .= 'Bcc: birthdaycheck@example.com' . "\r\n";

// Enviarlo


// mail($para, $asunto, $mensaje, $cabeceras);

}

 ?>

