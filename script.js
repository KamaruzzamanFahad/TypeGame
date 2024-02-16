

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
 