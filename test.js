var p
var s = Math.floor(Math.random() * 20);
console.log(p);
console.log(s);

var pa;
var pasta = "";

for (var t=1; t<s; t++){
    p = Math.floor(Math.random() * 10);
    if(p <= 3){
        pa = "パスタ";
    }
    else if(p <= 6){
        pa = "作った";
    }
    else{
        pa = "お前";
    }
    pasta = pasta + pa
    console.log(pasta);
}
document.getElementById('pasta').innerHTML = pasta;