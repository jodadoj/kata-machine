export default function bs_list(haystack: number[], needle: number): boolean {
    let lo: number = 0;
    let hi: number = haystack.length;
    do{
        const mid: number = Math.floor(lo + (hi-lo)/2);
        const value = haystack[mid];
        if (needle === value){ return true }
        else if (needle < value) { hi = mid }
        else if (needle > value) { lo = mid + 1 } //(needle > haystack[mid])
    }while(lo<hi)
    return false;
}

//     // let start:number = haystack[0];
//     // let end:number = haystack[haystack.length];
//     let start:number = 0;
//     let end:number = haystack.length;
//     let mid:number = Math.floor((end - start)/2 + start);
//     do {
//         if (needle === haystack[mid]){
//             return true;
//         }
//         if (needle > haystack[mid]){
//             start = mid + 1;
//             mid = Math.floor((end - start)/2 + start);
//         }
//         if (needle < haystack[mid]){
//             end = mid;
//             mid = Math.floor((end - start)/2 + start);
//         }
//     } while (start<end)
//     return false;
// }