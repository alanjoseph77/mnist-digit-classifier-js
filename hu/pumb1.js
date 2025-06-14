let wl=0;
let pStatus=false;

function controlPumb(){
    if(wl<20 && !pStatus){
        pStatus = true;
        console.log(`pumb is on`);

    }
    else if(wl>80 && pStatus){
                pStatus = false;
        console.log(`pumb is off`);

    }

    if(pStatus){
       wl+=1;
        console.log(`waterleve:${wl}`);

    }
    else if(wl>0){
               wl-=1;
        console.log(`waterlevel:${wl}`);

    }

    if(wl<=0){
                clearInterval(S);
    }
   
}

const S=setInterval(controlPumb,500);