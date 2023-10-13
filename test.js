var p
var s = Math.floor(Math.random() * 20);
console.log(p);
console.log(s);

var pa;
var pasta,past = "";

for (var pas=1; t<20 pas++){
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
    past = past + pa
    console.log(past);
}
pasta = pasta + "/n" + past;
document.getElementById('pasta').innerHTML = pasta;
}