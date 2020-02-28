function combine(...array) {  
  let string = []; //array kosong
  for (let i = 0; i < array.length; i++) { //perulangan, panjang array 3
    string.push(array[i].join(' ')); // setiap array digabung sepasi
  }

  // console.log(string)
  return string.join(' ');
}

const first = ['Behind', 'every', 'great', 'man'];
const second = ['is', 'a', 'woman'];
const third = ['rolling', 'her', 'eyes'];

const a = combine(first, second, third);
console.log(a)