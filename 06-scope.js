/// Soal - 01
/// Kita sudah belajar mengenai variable scope yang dimiliki oleh Javascript
/// dan kamu diminta untuk merangkum tentang:
/// - ada berapa banyak jumlah variable scope pada Javascript?
/// - jelaskan secara singkat setiap variable scope yang dimiliki oleh Javascript
/// - buatlah implementasi sederhana dari tiap-tiap variable scope yang dimiliki oleh Javascript

/// WRITE YOUR ANALYSIS HERE
/*
    - Dua (2) jenis variable scope yaitu Global dan Local
    - Global variable 
         Variable yang dapat diakses baik di luar maupun di dalam sebuah blok kode
    >> Local variable
         Variable yang dideklarasikan di dalam sebuah fungsi atau blok dan hanya diakses di dalam blok/fungsi itu saja.
         Tidak bisa diakses di luar blok/fungsi tempat variable itu berada.
 */

///  - Implementasi :
let buah = 'Apel' // Global scope

function macamBuah() {
   console.log(buah); // Output : Apel
   /*
      variable buah bisa diakses di dalam function macamBuah,
      karena variable buah adalah global scope.
      Jadi bisa diakses baik di luar atau di dalam function macamBuah
   */
   let buahLokal = 'Pisang' // Local scope di dalam function macamBuah
   console.log(buahLokal); // Output : Pisang
   /*
      variable buahLokal bisa diakses di dalam function ini,
      karena pendeklarasiannya berupa variable local di dalam function ini.
   */
   }
}

// console.log(buahLokal);
// akan menghasilkan ReferenceError karena buahLokal merupakan local scope di dalam function macamBuah yang tidak bisa diakses dari luar function


/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah ini
/// - apa yang akan tampil didalam console.log ?
/// - apa alasan yang menyebabkan hasil dari console itu bukan nilai dari variable name?

/// WRITE YOUR ANALYSIS HERE
const name = "John Watson";

function printFirstName(name) {
  return name.split(" ")[0];
}

console.log(printFirstName("Mariah Carey"));
/*
    - Yang akan tampil didalam console.log adalah Mariah
    - Karena yang akan ditampilkan oleh console.log adalah fungsi printFirstName()
    yang disertai dengan yang sudah langsung disebut value yaitu "Mariah Carey".
    maka dari itu yang akan dieksekusi adalah "Mariah Carey".
 */
