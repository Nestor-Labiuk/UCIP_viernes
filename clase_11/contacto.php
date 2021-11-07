<?php include "mail.php"; ?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
</head>

<body>
    <?php include "menu.php"; ?>
    <div class="container">
        <h1>CONTACTO</h1>

    <?php 
        if($GLOBALS['enviado']=="si"){
    ?>
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>¡Gracias por tu consulta!</strong> Nos pondremos en contacto a la brevedad.!!!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>

    <?php 
        }  
    ?>



        <div class="row">
            <div class="col-md-6">
                <form method="POST" action="#">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Nombre</label>
                        <input type="text" class="form-control" id="nombre" name="nombre">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" name="email">
                    </div>
                    <div class="mb-3">
                        <label for="asunto" class="form-label">Asunto</label>
                        <input type="text" class="form-control" id="asunto" name="asunto">
                    </div>
                    <div class="mb-3">
                        <label for="telefono" class="form-label">T&eacute;lefono</label>
                        <input type="text" class="form-control" id="telefono" name="telefono">
                    </div>
                    <div class="mb-3">
                        <label for="consulta" class="form-label">Consulta</label>
                        <textarea class="form-control" id="consulta" rows="3" name="consulta"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary">ENVIAR</button>
                </form>
            </div>
        </div>

    </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
</body>

</html>