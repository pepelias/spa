const $cuenta = document.getElementById('cuenta')
const $sumar = document.getElementById('sumar')
const $restar = document.getElementById('restar')
const $enviar = document.getElementById('enviar')
const $mensaje = document.getElementById('mensaje')
let total=0

const refresh = () => $cuenta.innerHTML=`Estamos contando ${total} clicks`
const incrementar = () => {
  total = total+1
  refresh()
}
const decrementar = () => {
  total = total-1
  refresh()
}
const enviar = async () => {
  try {
    const request = await fetch(`https://echo.hoppscotch.io`,{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Enviamos el total',
        total: total
      })
    })
    const res = await request.json()
    console.log('Respuesta de la api:', res)
    console.log('Lo que enviamos fue', JSON.parse(res.data))

    $mensaje.textContent = 'Enviamos los datos a la api (mira la consola para ver lo que registramos)'
  } catch(err) {
    $mensaje.textContent = err.message
  }

}

$sumar.addEventListener('click', incrementar)
$restar.addEventListener('click', decrementar)
$enviar.addEventListener('click', enviar)