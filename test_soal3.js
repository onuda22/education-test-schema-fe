//Nama : Oki Nurul Abada
//Email : okinabada@gmail.com

var a = 6;
var string = "";

for(let i=1; i<=a; i++){
    for(let j=1; j<=i; j++){
        string += "*";
    }
    string +="\n";
} console.log(string);

for(let i=1; i<=a-1; i++){
    for(let j=a-1; j>i; j--){
        string += " "
    }
    for(let k=1; k<=i; k++){
        string += "*";    
    }
    string +="\n";
} console.log(string);