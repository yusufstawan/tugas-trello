// 50 Bilangan Ganjil
// Buatlah script untuk mencetak bilangan ganjil antara 1 hingga 100.

function bilanganGanjil(num) {
  for (var i = 1; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

console.log(bilanganGanjil(100));