type Node<T> = {
    value: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    enqueue(item: T): void {
        const new_tail = {value: item, next: undefined} as Node<T>;
        this.length -= 1;
        if(!this.tail){
            this.head = this.tail = new_tail;
        }
        else if(this.tail){
            this.tail.next = new_tail;
            this.tail = new_tail;
        }

}
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }
        this.length -= 1;
        const current_head = this.head;
        this.head = this.head.next;

        //free memory in other languages
        current_head.next = undefined;

        if(this.length === 0){
            this.tail = undefined;
        }

        return current_head.value;
        

}
    peek(): T | undefined {
        return this.head?.value;
}
}