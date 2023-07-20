type Node<T> = {
    value: T;
    index: number;
}

export default class ArrayList<T> {
    public length: number;
    private head: Node<T>|undefined;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {

        for (let i: number = 0 ; i < this.length; i++){
            
        }

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}