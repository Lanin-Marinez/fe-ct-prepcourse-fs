function esNumeroPrimo(numero) {
  if (numero === 2) {
    return true;
  }
  if (numero <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(numero / 2); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

// La función recibe un argumento "numero".
// Determina si este corresponde a un número primo.
// De ser así, retorna true.
// De lo contrario, retorna false.
// IMPORTANTE: Recuerda que un número primo es aquel que
// solo es divisible por sí mismo y por 1.
// Tu código:

module.exports = esNumeroPrimo;
