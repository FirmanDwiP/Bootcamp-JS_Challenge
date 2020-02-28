class str {
    static lower(kecil){ // 1. lower
        console.log(kecil.toLowerCase())
    }
    static upper(besar){ // 2. upper
        console.log(besar.toUpperCase())
    }
    static capitalize(kapital){     // 3. kapital
        let perkata = (str) => str[0].toUpperCase() 
    + str.slice(1)
        let kata = kapital.split(' ').map(perkata)
        const kap = kata.join(' ')
        console.log(kap)
    }
    static reverse(kebalikan){  // 4. Kebalikan
        let hurufsplit = kebalikan.split("")
        let hurufarray = hurufsplit.reverse()
        let gabungjadi = hurufarray.join("")
        console.log(gabungjadi)
    }
    // static contains(){   // 5. Contain method
  // }
  // static random(wordrandom){ // 6. Random
  // }
  static count(hurufitung){  // 8.count
    console.log(hurufitung.length)
}
static countWords(kataitung){ // 9 count words
    const kata = kataitung.split(' ')
    console.log(kata.length)
}
}
str.lower('MAKAN')
str.upper('makan')
str.capitalize('saya ingin makan nasi goreng')
str.reverse('kasur')
str.count('lorem ipsum')
str.countWords('lorem ipsum')
