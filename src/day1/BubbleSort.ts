export default function bubble_sort(arr: number[]): void {
    for (let i:number = 0; i<arr.length-2; i++){
        let sorted: boolean = true; //extra
        for (let j:number = 0; j<arr.length-1-i; j++){
            if (arr[j] > arr[j + 1]){ 
                //the difference and sum of the two means you always know one from the other
                sorted = false; 
                arr[j+1] = arr[j] + arr[j+1];
                arr[j] = arr[j+1] - arr[j]; 
                arr[j+1] = arr[j+1] - arr[j]; 
            }
        }
        if (sorted) { break } //extra
    }
}