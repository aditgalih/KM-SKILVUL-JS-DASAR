/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
    >> Type Error : terjadi saat variabel atau parameter tidak sesuai dengan tipe data tertentu
       contoh : mengubah value dari tipe data number dengan fungsi untuk tipe string
       const a = 20;
       console.log(a.toLowerCase());
       akan muncul TypeError: a.toLowerCase is not a function
       karena fungsi dari .toLowerCase() digunakan untuk tipe data string,
       sedangkan pada contoh diatas a diisi dengan 20 yang merupakan tipe data number
       
    >> Reference Error : terjadi saat menggunakan referensi ang tidak valid seperti variabel yang belum dideklarasikan
       contoh :
       console.log(namaBuah);
       let namaBuah = 'anggur'
       pemanggilan variabel namaBuah dengan console.log akan menghasilkan error karena sebelumnya belum dilakukan deklarasi
       variabel namaBuah. Baru dideklarasikan setelahnya.
       
    >> Range Error adalah kesalahan yang terjadi saat variable numerik atau parameter berada di luar rentang validnya
       contoh :
       function numbers(a) {
          if (!(a >= 0 && a <= 10)) {
            throw new RangeError("The argument must be between 0 and 10.")
          }
       }
      console.log(numbers(20));
      akan muncul RangeError: The argument must be between 0 and 10.
      karena angka 20 tidak memenuhi pengkondisian if yang menghendaki hanya dari angka 0 hingga 10

    >> Syntax Error adalah kesalahan pada sintaks, biasanya terjadi ketika kita
       melakukan kesalahan saat menuliskan kode
       contoh : 
       console.log('namaBuah);
       akan muncul SyntaxError: Invalid or unexpected token
       karena kurang tanda petik satu. Seharusnya console.log('namaBuah');
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi


///console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;

WRITE YOUR ANALYSIS HERE
/*  - muncul pesan error
    - reference error
    - variabel salaryWithVar dan salaryWithConst tidak dideklarasikan terlebih dahulu sebelum dipanggil dengan console.log
*/

