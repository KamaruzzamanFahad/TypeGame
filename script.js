

function playag(){
    document.getElementById('playsection').classList.add('hidden');
    document.getElementById('final').classList.add('hidden');
    document.getElementById('playground').classList.remove('hidden');
    score.innerText = 0;
    life.innerText = 4;
    keyset();
}
    const alpa = "abcdefghijklmnopqrstuvwxyz";
    const alpaarry = alpa.split(''); 
    let keys ='';

function keyset(){
    const keyset = document.getElementById('keyset');   
    const ind = Math.floor(Math.random()*25);
    keys = alpaarry[ind];
    keyset.innerText = keys;
    document.getElementById(keys).classList.add('bg-yellow-500');
}

let finalscore = document.getElementById('finalsc');
let score = document.getElementById('scoree');
let scores =0;
let final = document.getElementById('final');

const life = document.getElementById('life');
let lifes =4;

document.addEventListener('keyup', function(event) {
    
    if(alpaarry.includes(event.key)){
        document.getElementById(keys).classList.remove('bg-yellow-500');
        if(event.key == keys){
            scores = parseInt(score.innerText);
            score.innerText = scores+1; 
            keyset();
            
            if(score.innerText==50||score.innerText==100||score.innerText==150||score.innerText==200||score.innerText==250||score.innerText==300||score.innerText==350||score.innerText==400||score.innerText==450||score.innerText==500||score.innerText==550||score.innerText==600||score.innerText==650||score.innerText==700||score.innerText==750||score.innerText==800||score.innerText==850||score.innerText==900){
                lifes = parseInt(life.innerText);
                life.innerText = lifes+1;
                console.log("done");
            }
            
        }
        else{
             lifes = parseInt(life.innerText);
            if(lifes <= 0){
                finalscore.innerText =  scores+1;
                document.getElementById('playground').classList.add('hidden');
                final.classList.remove('hidden');
                const audio = new Audio('audio/over.mp3');
                audio.play();
    
            }else{
                life.innerText = lifes-1;
                const audio = new Audio('audio/err.mp3');
                audio.play();
                keyset();
            }
           
        }
        
        
    }
    else if(event.key=='Enter'){
        const entplay = document.getElementById('playsection').className;
        if(entplay != 'hidden'){
            playag();
        }
        
        

    }
        
    
    
})
 