let arrBiasa = ["b", "c", "a"]
console.log(arrBiasa) // log: ["a", "b", "c"]

arrBiasa.push("d")
console.log(arrBiasa) // log: ["a", "b", "c", "d"]

arrBiasa.splice(1, 1)//splice (index ke-x, jumlah splice)
console.log(arrBiasa) // log: ["a", "c", "d"]

arrBiasa.forEach((huruf) => {
  console.log(huruf)
})

const arrBaru = arrBiasa.map((huruf) => {
    return huruf.toUpperCase()
  })
  console.log(arrBaru) // log: ["A", "C", "D"]