const lagu = 'Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib Aku ingin terbang bebas Di angkasa Hei… baling baling bambu La... la... la... Aku sayang sekali Doraemon La... la... la... Aku sayang sekali'
const aku = lagu.toLowerCase().match(/aku/g);
const ingin = lagu.toLowerCase().match(/ingin/g);
const dapat = lagu.toLowerCase().match(/dapat/g);

console.log(`aku ada ${aku.length}`);
console.log(`ingin ada ${ingin.length}`);
console.log(`dapat ada ${dapat.length}`);