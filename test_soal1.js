//Nama : Oki Nurul Abada
//Email : okinabada@gmail.com

var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];

let i = 0;
function modus(arr){
    if(arr.length == 0){
        return null}
    var count = {};
    var x = arr[0], y = 1;
    for(i=0; i<arr.length; i++){
        var element = arr[i];
        if(count[element] == null){
            count[element] = 1;
        }else{count[element]++;}

        if(count[element]>y){
            x = element;
            y = count[element];
        }
    }
    return "Total data yang paling banyak keluar adalah "+x+" dengan jumlah "+y; 
}

console.log(modus(data1))
console.log(modus(data2))
console.log(modus(data3))