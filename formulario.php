<?php
// Configure email target
$to = 'siragon222@gmail.com';

// Allow only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo 'Método no permitido';
    exit;
}

// Simple sanitization
function clean($value) {
    return trim(filter_var($value ?? '', FILTER_SANITIZE_STRING));
}

$nombre = clean($_POST['nombre'] ?? '');
$telefono = clean($_POST['telefono'] ?? '');
$correo = filter_var($_POST['correo'] ?? '', FILTER_VALIDATE_EMAIL);

if ($nombre === '' || $telefono === '' || $correo === false) {
    http_response_code(400);
    echo 'Datos inválidos';
    exit;
}

$subject = 'Nuevo contacto desde el formulario web';
$message = "Has recibido un nuevo mensaje desde el formulario de contacto.\n\n" .
    "Nombre: $nombre\n" .
    "Teléfono: $telefono\n" .
    "Correo: $correo\n";

$headers = "From: Formulario Web <no-reply@" . ($_SERVER['SERVER_NAME'] ?? 'example.com') . ">\r\n" .
           "Reply-To: $correo\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Send email
$sent = @mail($to, $subject, $message, $headers);

if ($sent) {
    echo 'OK';
} else {
    http_response_code(500);
    echo 'No se pudo enviar el correo. Verifique la configuración del servidor.';
}
?>


