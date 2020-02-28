// NAME, CATEGORY, PRICE
// Xiaomi Redmi 5A, Smartphone, 1199000
// Macbook Air, Laptop, 13775000
// Samsung Galaxy J7, Smartphone, 3549000
// DELL XPS 13, Laptop, 26799000
// Xiaomi Mi 6, Smartphone, 5399000
// LG V30 Plus, Smartphone, 10499000

const a = 'NAME, CATEGORY, PRICE, Xiaomi Redmi 5A, Smartphone, 1199000, Macbook Air, Laptop, 13775000, Samsung Galaxy J7, Smartphone, 3549000, DELL XPS 13, Laptop, 26799000, Xiaomi Mi 6, Smartphone, 5399000, LG V30 Plus, Smartphone, 10499000';
    console.log(list)
a.toString[3];
console.log(a)
const myObject = []
myObject.push({
    name: a[0],
    price: `Rp ${a[2]}`,
    category: a[1]
})

console.log(myObject);

const a = ["xiaomi REdmi 5a", "Smartphone", 1199000]