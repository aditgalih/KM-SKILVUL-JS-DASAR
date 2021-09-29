/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
let i = 0
let j = 0

for(i = 1; i <= 100; i++){
  let count = 0
  for(j = i; j >= 1; j = j - 1){
    if(i%j === 0){
      count = count + 1
    }
  }
  if(count === 2){
    console.log(i)
  }
}

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

/// EDIT HERE 
let bilanganPrima = 0;
const urutanPrima = 50;
let jumlah = 0

while(bilanganPrima <= 250){
  bilanganPrima++
  let count = 0
  for(j = bilanganPrima; j >= 1; j = j - 1){
    if(bilanganPrima%j === 0){
      count = count + 1
    }
  }
  if(count === 2){
    jumlah++   
    if(jumlah === urutanPrima){
      console.log("Bilangan prima ke-" + jumlah + " adalah " + bilanganPrima)
  }
  }
}

/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let oddCounter = 0;
const fiftiethOdd=50;
let a = 0
do {
    oddCounter++
    if((oddCounter%2) === 1){
      console.log(oddCounter)
      console.log("Ke - "+a++)

      if(j === fiftiethOdd){
        console.log("Bilangan Ganjil ke "+ a +" adalah " + oddCounter)
      }
    }
} while (oddCounter<=100)
