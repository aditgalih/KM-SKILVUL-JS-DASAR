/// Soal - 01
/// Kamu diminta untuk membuat sebuah fungsi yang akan me-return berapa banyak pajak yang harus kamu bayarkan, fungsi tersebut memiliki spesifikasi sebagai berikut

/// Spesifikasi
/// - 0% pajak apabila $SALARY < Rp 5.000.000
/// - 5% pajak apabila Rp 5.000.000 <= $SALARY < Rp 10.000.000
/// - 10% pajak apabila Rp 10.000.000 <= $SALARY < Rp 20.000.000
/// - 20% pajak apabila Rp 20.000.000 <= $SALARY 

/// Parameter
/// - (Number) `salary` => gaji yang kamu hasilkan

/// Returnn Value
/// - (Number) total pajak yang harus kamu bayarkan

/// EDIT HERE
function taxRate(salary) {
    let tax = 0
    if (salary < 5000000) {
        tax = salary * 0
        return tax + " Pajak 0 %"
    } else if (salary >= 5000000 && salary < 10000000) {
        tax = salary * 0.05
        return tax + " Pajak 5 %"
    } else if (salary >= 10000000 && salary < 20000000) {
        tax = salary * 0.1
        return tax + " Pajak 10 %"
    } else if (salary >= 20000000) {
        tax = salary * 0.2
        return tax + " Pajak 20 %"
    }
}

console.log(taxRate(50000000))




/// Soal - 02
/// BMI merupakan sebuah perhitungan yang mana dapat menunjukan apakah seseorang itu masuk dalam kategori obesitas atau tidak. Kamu diminta untuk membuat sebuah fungsi untuk menghitung BMI seseorang serta dapat menentukan apakah orang tersebut obesitas atau tidak.

/// Spesifikasi BMI
/// - "under weight" apabila $BMI < 18.5
/// - "normal" apabila 18.5 < $BMI < 24.9
/// - "over weight" apabila 25 < $BMI < 29.9
/// - "obese" apabila 30 < $BMI < 34.9
/// - "extremely obese" apabila 35 < BMI

/// Parameter
/// - (Number) `height` ⇒ tinggi seseorang (cm)
/// - (Number) `weight` ⇒ berat badan seseorang (kg) 

/// Return Value
/// - (String) Indikasi BMI yang didapatkan melalui formula dibawah
///   (weight/(height^2)) * 10000

/// EDIT HERE
function checkBMI(height, weight) {
    let bmi = (weight / (height**2)) * 10000
    if (bmi < 18.5) {
        return bmi + " under weight"
    } else if ( bmi > 18.5 && bmi < 24.9) {
        return bmi + " normal"
    } else if ( bmi > 25 && bmi < 29.9) {
        return bmi + " over weight"
    } else if (bmi > 30 && bmi < 34.9) {
        return bmi + " obese"
    } else if ( bmi > 35) {
        return bmi + " extremely obese"
    }
}

console.log(checkBMI(170, 90))


/// Soal - 03
/// Buatlah sebuah fungsi yang akan merubah huruf pertama disetiap kata menjadi huruf besar

/// Parameter
/// - (String) sentence => kalimat yang nanti akan diubah

/// Return Value
/// - (String) kalimat yang sudah kita ubah huruf pertamanya menjadi huruf besar

/// EDIT HERE
function toUpperCase(sentence) {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

console.log(toUpperCase("halo"))


/// Soal - 04
/// Buatlah sebuah fungsi yang mana nanti akan mengembalikan HURUF PERTAMA YANG TIDAK KEMBAR

/// Spesifikasi
/// - apabila inputan berupa kata yang dipisah, maka kembalikan "kata tidak boleh dipisah"
/// - apabila inputan tidak memiliki karakter yang tidak kembar, maka kembalikan string kosong ""
/// - apabila ditemukan lebih dari 0 karakter yang tidak sama, maka kembalikan karakter pertama yang tidak sama

/// Parameter
/// - (String) word => kata yang nanti akan kita gunakan untuk mencari huruf yang tidak kembar (KATA TIDAK BOLEH DIPISAH)

/// Result Value
/// (String) huruf yang pertama kali tidak ada kembarannya

/// EDIT HERE
function firstNonRepeatedChar(word) {
    let object = {}
    if (word.includes(' ')) {
        return 'kata tidak boleh dipisah';
    } else {
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (object[char]) {
                object[char]++
            } else {
                object[char] = 1
            }
        }
        let str = ''
        for (const [key, value] of Object.entries(object)) {
            if (value === 1) {
                str = key
                break
            }
        }
        return str
    }
}
console.log(firstNonRepeatedChar("hello world"))
console.log(firstNonRepeatedChar("ooouwooo"))
