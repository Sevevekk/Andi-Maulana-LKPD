// AKTIVITAS 1 - PREDIKSI

console.log("--- Aktivitas 1 ---");
let a1 = 10;
let b1 = 5;
console.log("a + b =", a1 + b1); // Hasil: 15
console.log("a - b =", a1 - b1); // Hasil: 5
console.log("a * b =", a1 * b1); // Hasil: 50
console.log("a / b =", a1 / b1); // Hasil: 2

// AKTIVITAS 2 - EKSPERIMEN

console.log("\n--- Aktivitas 2 ---");
let a2 = 20;
let b2 = 4;
console.log("a + b =", a2 + b2); // Hasil: 24
console.log("a - b =", a2 - b2); // Hasil: 16
console.log("a * b =", a2 * b2); // Hasil: 80
console.log("a / b =", a2 / b2); // Hasil: 5
console.log("a % b =", a2 % b2); // Hasil: 0 (Modulo / sisa pembagian)

// AKTIVITAS 3 - Input dengan prompt()

console.log("\-- Aktivitas 3 --");
let nama = prompt("Masukkan nama:");
console.log(nama);
let umur = prompt("Masukkan umur:");
console.log(umur);

// AKTIVITAS 4 - Menghitung Umur

console.log("\-- Aktivitas 4 --");
let tahunLahir = prompt("Masukkan tahun lahir:");
let tahunSekarang = 2026;
let Umur = tahunSekarang - tahunLahir;
console.log(umur);

// AKTIVITAS 5 - Mesin Kasir Mini

console.log("\-- Aktivitas 5 --");
let harga = prompt("Masukkan harga:");
let jumlah = prompt("Masukkan jumlah:");
let total = harga * jumlah;
console.log(total);

// AKTIVITAS 7 - Challenge: Warung Digital

console.log("\-- Aktivitas 7 --");
let makanan1 = prompt("Nama makanan:");
let harga1 = Number(prompt("Harga:"));
let jumlah1 = Number(prompt("Jumlah:"));

let total1 = harga * jumlah;

console.log("Nama Makanan:", makanan1);
console.log("Harga1:", harga1);
console.log("Jumlah:", jumlah1);
console.log("Total:", total1);

let makanan2 = prompt("Nama makanan2:");
let harga2 = Number(prompt("Harga:"));
let jumlah2 = Number(prompt("Jumlah:"));

let total2 = harga2 * jumlah2;
let diskon2 = (total2 * 10) / 100;
let bayar2 = total2 - diskon2;

console.log("Nama Makanan:", makanan2);
console.log("Harga2:", harga2);
console.log("Jumlah2:", jumlah2);
console.log("Total:", total2);
console.log("Diskon (10%):", diskon2);
console.log("Total Bayar:", bayar2);

// AKTIVITAS 8 - DEBUGGING (PERBAIKAN)

console.log("\n--- Aktivitas 8 ---");
let hargaDebug = 5000;
let jumlahDebug = 3;
let total1Debug = hargaDebug * jumlahDebug; // Diperbaiki dari harga * harga
console.log("Total Perbaikan Debugging:", total1Debug);

// AKTIVITAS 9 - CHALLENGE MANDIRI: TABUNGAN

console.log("\n--- Aktivitas 9 ---");
let uangAwal = 40000;
let hari1 = 20000;
let hari2 = 20000;
let hari3 = 20000;
let totalTabungan = uangAwal + hari1 + hari2 + hari3;
console.log("Total Tabungan: Rp", totalTabungan);

// ASESMEN FORMATIF - SOAL NO 4

console.log("\n--- Asesmen Formatif No 4 ---");
let panjang = 10;
let lebar = 5;
let luas = panjang * lebar;
console.log("Luas Persegi Panjang:", luas);