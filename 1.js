//membuat paamater palindrome
function palindrome(str) {
    const re = /[\W_]/g; // menghilangkan kalimat spesial
    const b = str.toLowerCase().replace(re, ""); // str tolowercase, mengecilkan kata
    //   console.log(b);
    const c = b.split("").reverse().join("");
    //split()--setiap string dijadikan array
    //reserve()-- membalikkan kata
    //join() -- menggabungkan array menjadi string
    //   console.log(c);
    if (b === c) { //kondisi pengecekan
        return true;
    } else {
        return false;
    }
}

console.log(palindrome("ibu ratna antar ubi"));
console.log(palindrome("Yo, banana boy!"));