// Ganjil atau Genap?
// Buatlah script untuk menentukan suatu angka merupakan bilangan ganjil atau genap.

// Contoh:
// Input: 43
// Output: Ganjil

// Input: 1032
// Output: Genap

function ganjilGenap(angka) {
  if (angka % 2 === 0) {
    return 'Genap';
  } else {
    return 'Ganjil';
  }
}

console.log(ganjilGenap(43));
console.log(ganjilGenap(1032));