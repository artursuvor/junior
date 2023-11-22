// středníky jsou důležité, protože ukončují příkaz
// jasně, funguje to i bez nich, ale pak se to zminimalizuje do jednoho řádku a přestane to fungovat
// je to taková bezpečnostní pojistka
for (let i = 1; i < 11; i++) {
  console.log(i)
}

// a ještě efektivnější je
// console.log('1, 2, 3, 4, 5, 6, 7, 8, 9, 10');

// nebo Je možné to udělat tak, že v podstatě rychlost nebude pro takové množství rozdílná, ale for bude efektivnější.
// const arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr)
