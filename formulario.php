<?php
header('Content-Type: application/json');

// Permitir solicitudes desde el origen de tu aplicación React
header('Access-Control-Allow-Origin: *'); // Considerar restringir esto en producción
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Si es una solicitud OPTIONS (preflight), terminar aquí
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Permitir solo POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Método no permitido']);
    exit;
}

// Obtener los datos JSON enviados
$data = json_decode(file_get_contents('php://input'), true);

// Validar los datos recibidos
if (!isset($data['nombre']) || !isset($data['telefono']) || !isset($data['correo'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Faltan datos requeridos']);
    exit;
}

$nombre = trim(filter_var($data['nombre'], FILTER_SANITIZE_STRING));
$telefono = trim(filter_var($data['telefono'], FILTER_SANITIZE_STRING));
$correo = filter_var($data['correo'], FILTER_VALIDATE_EMAIL);

// Puedes definir el correo de destino aquí o pasarlo desde el frontend si es dinámico
// Por ahora, lo dejaremos fijo como en el código original.
$to = 'siragon222@gmail.com'; 

if ($nombre === '' || $telefono === '' || $correo === false) {
    http_response_code(400);
    echo json_encode(['error' => 'Datos inválidos']);
    exit;
}

$subject = 'Nuevo contacto desde el formulario web';
$message = "Has recibido un nuevo mensaje desde el formulario de contacto.

" .
    "Nombre: $nombre
" .
    "Teléfono: $telefono
" .
    "Correo: $correo
";
// Si quieres añadir más campos, asegúrate de que también se envíen en el JSON desde el frontend
// Por ejemplo, si añades 'category' y 'to_email' al JSON:
// if (isset($data['category'])) {
//     $message .= "Tipo de servicio: " . trim(filter_var($data['category'], FILTER_SANITIZE_STRING)) . "
";
// }
// if (isset($data['to_email'])) {
//     $to = filter_var($data['to_email'], FILTER_VALIDATE_EMAIL) ?: $to; // Usar el to_email si es válido, sino el predefinido
// }

$headers = "From: info@omegagroupsas.co\r\n" .
           "Reply-To: $correo\r\n" .
           "X-Mailer: PHP/" . phpversion();

// Send email
$sent = @mail($to, $subject, $message, $headers);

if ($sent) {
    echo json_encode(['success' => true, 'message' => 'Correo enviado con éxito']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'No se pudo enviar el correo. Verifique la configuración del servidor.']);
}
?>


