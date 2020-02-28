
function kabisat(...tahun) { //...array spread syntax
    for (let i = tahun[0]; i <= tahun[tahun.length - 1]; i++) { // perulangan for
        // console.log(i)
        if ((i % 4 == 0) && (i % 100 != 0) || (i % 400 == 0)) { // kondisi kabisat
            console.log(i + " kabisat")
        }
    }
}
kabisat(2000, 2020) // range tahun