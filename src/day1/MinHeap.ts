// type BinaryNode = {
//     value: number;
//     left?: BinaryNode;
//     right?: BinaryNode;
// }

export default class MinHeap {
    public length: number;
    private data: number[];
    

    constructor() {
        this.length = 0;
        this.data = [];
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length += 1;
}
    delete(): number {
        if(this.length === 0){
            return -1;
        }
        const output:number = this.data[0];
        this.length -= 1;
        if (this.length === 0){
            this.data = [];
            return output;
        }
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return output;
}
private heapifyDown(index: number): void {
    if (index >= this.length) {
        return undefined;
    }

    const left_index:number = this.leftChild(index);
    const right_index:number = this.rightChild(index);

    if (left_index >= this.length){
        return undefined;
    }

    const left_value:number = this.data[left_index];
    const right_value:number = this.data[right_index];
    const current_value:number = this.data[index];

    if (left_value > right_value && current_value > right_value){
        this.data[index] = right_value;
        this.data[right_index] = current_value;
        this.heapifyDown(right_index);
    } else if (right_value > left_value && current_value > left_value){
        this.data[index] = left_value;
        this.data[left_index] = current_value;
        this.heapifyDown(left_index);
    }
}

private heapifyUp(index: number): void {
    if (index === 0) {
        return undefined;
    }

    const parent_index:number = this.parent(index);
    const parent_value:number = this.data[parent_index];
    const current_value:number = this.data[index];

    if (parent_value > current_value){
        this.data[index] = parent_value;
        this.data[parent_index] = current_value;
        this.heapifyUp(parent_index);
    }
}

private parent(index: number): number{
    return Math.floor((index-1)/2);
}
private leftChild(index: number): number{
    return 2*index+1;
}
private rightChild(index: number): number{
    return 2*index+2;
}

}