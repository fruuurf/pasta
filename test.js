var p,s;
console.log("s = " +s);

var pa,past;
var pasta = "";

for (var pas=0; pas<10; pas++){
    s = Math.floor(Math.random() * 10 + 2);
    past = "";
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
        console.log("p = "+p);
        console.log("past = "+past);
    }
    pasta = pasta + "<br><br>" + past;
    console.log("pasta = " + pasta);
    document.getElementById('pasta').innerHTML = pasta;
}