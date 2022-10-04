var namaBarang = "Tumbler"
var tinggi = 12
var lingkaran = 5
var kegunaan = ["Air Panas","Air Dingin","Air Mentah"]
var merek = {
    nama:["Strubuk","Makkopi"],
    jumlah:["12pcs","15pcs"],
    harga:[50000,75000]
}

console.log(namaBarang)
console.log(tinggi)
console.log(lingkaran)
console.log(kegunaan [0],kegunaan [1],kegunaan [2])
console.log(merek["nama"][0] + " " + merek["nama"][1] )

//====================Fungsi

function RupiahtoDollar(Rp){
    return Rp * 14000
}

console.log(RupiahtoDollar(2))