//Nama : Oki Nurul Abada
//Email : okinabada@gmail.com

var input1 = "hallo jesika24 selamat datang!"
var input2 = "hallo anggun selamat datang!"
var input3 = "hallo ** selamat datang!"
var input4 = "hallo Mariage889120! selamat datang!"

function check(input){
    let i = 1, a = input.split(""), b="", c="";
    a.forEach(function(e){
        if(!isNaN(e)){
            b += e;
            i++;
        }else{c += e}
    })
    if(i === !isNaN){
        return "Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan"+c;
    }else{
        return "sistem kami menolak untuk inputan berisi angka"+b;
    }

}

console.log(check(input1));
console.log(check(input2));
console.log(check(input3));
console.log(check(input4));