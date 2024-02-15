const btn=document.getElementById("button");
btn.addEventListener("click",jeu);
function jeu() {
    var a=prompt("Choisissez le niveau difficulté : \n (Facile, intermédiaire, difficile)");
    var nb_tent;
    switch (a.toUpperCase()) {
        case "FACILE":
            nb_tent="3";
            interval=10;
            tentative(interval,nb_tent);
            break;
        case "INTERMEDIAIRE":
            nb_tent=10;
            interval=100;
            tentative(interval,nb_tent);
            break;
        default:
            nb_tent=15;
            interval=1000;
            tentative(interval,nb_tent);
            break;
    }
    
}
function estPremier(alea) {
    test=true;
    i=2;
   while(i<Math.sqrt(alea)&& test==true){
      test=alea%i!=0;
      i++;
    }
    return test;
}
function tentative(interval,nb_tent){
    var alea =Math.floor(Math.random() * interval);
    var ch=String(alea);
    var bool=estPremier(alea);
    var prop;
    var i=0;
    var hint1="Le nombre est compris entre 0 et "+ interval+" \n C'est un nombre premier ";
    var hint2="Le nombre est compris entre 0 et "+ interval+" \n C'est un nombre non premier ";
    var hint3="Le nombre est compris entre "+(interval-alea)/2+"et"+(interval)/2;
    var hint4="Son premier chiffre est :"+ch[0]+" Son dernier chiffre est :"+ch[ch.length-1];

    while(i!=nb_tent && alea!=prop){
        if(i<5){
            if (bool==true){
                prop=prompt(hint1);}
           else{
                prop=prompt(hint2);
        }}
         if(i>5 && i<10){
            prop=prompt(hint3);

        }
        if(i>=10){
            prop=prompt(hint4);
        }
        i++;
        if(alea==prop){
            alert("BRAVO !");}
            if(i==nb_tent && alea!=prop){
                alert(":(")
        }
        }

        }
        
