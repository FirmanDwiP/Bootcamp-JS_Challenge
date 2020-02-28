// function angka(...num) {
//     console.log(...num);
//     for (let i = num[0]; i <= num[1]; i++) {
//       // console.log(i);
//       if ((i % 2 == 0) && (i % 5 == 0)){
//           let a = i
//           console.log(a+" genap kelipatan 5")
//       }
//       else if ((i % 2 == 1) && (i % 5 == 0)){
//           let b = i
//           console.log(b +" ganjil kelipatan 5")
//       }
//       else if (i % 2 == 0){
//           let c = i
//           console.log(c+" genap")
//       }
//       else if (i % 2 ==1){
//           let b = i
//           console.log(b +" ganjil")
//       }
//     }
//   }
//   angka(0, 1000);

const hasil = [  // array kosong
    [],
    [],
    [],
    []
  ]
  const genap = angka => angka % 2 === 0  // function genap
  const ganjil = angka => angka % 2 === 1 // function ganjil
  const kelipatan = angka => angka % 5 === 0 // function kelipatan 5
  
  
  for (let i = 1; i <= 1000; i++) {
    if (kelipatan(i) === true) {
      hasil[0].push(i) // hasil index i push ke hasil array indeks ke 0
    } else if (genap(i) === true) {
      hasil[1].push(i) // hasil index i push ke hasil array indeks ke 1
    } else if (ganjil(i) === true) {
      hasil[2].push(i) // hasil index i push ke hasil array indeks ke 2
    }
  }
  console.log(hasil[0])