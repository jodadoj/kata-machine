export default function two_crystal_balls(breaks: boolean[]): number {
    // if (breaks[0]){return 0;}
    // let d:number = 1;
    // while (!breaks[d] && d < breaks.length){
    //     d *= 2;
    //     console.log(d);
    // }
        // d = Math.floor(d/2);
    // while (!breaks[d] && d < breaks.length){
    //     d += 1;
    //     console.log(d);
    // }
    // return d;

    if(breaks[0]){return 0;}
    if(!breaks[breaks.length-1]){return -1;}
    const n:number = Math.floor(Math.sqrt(breaks.length));
    let d:number = n;
    // for(; d < breaks.length; d += n){ if (breaks[d]){ break }}
    while(!breaks[d] && d< breaks.length){ d +=n; }
    d -= n;
    // for(let j: number = 0; d < n && j < n; j++){ if (breaks[d+j]){ return d+j }}
    while(!breaks[d] && d < breaks.length){ d +=1; }
    return d;
}