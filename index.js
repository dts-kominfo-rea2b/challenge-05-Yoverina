const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arr, sort) => {
  let sortedArr = sort(arr);
  for (let i = 0; i < sortedArr.length; i++){
    sortedArr[i] = `${i+1}. ${sortedArr[i]}`;
  }
  return sortedArr;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arr) =>{
  tempArr = arr.slice();
  sortedArr = tempArr.sort();
  return sortedArr;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arr) =>{
  tempArr = arr.slice();
  sortedArr2 = tempArr.sort();
  sortedArr2.reverse();
  return sortedArr2;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
