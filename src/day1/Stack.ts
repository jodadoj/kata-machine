type Node<T> = {
    value: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;
    

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const current_node:Node<T> = {value: item, prev: undefined }
        if (!this.head){
            this.length = 1;
            this.head = current_node;
        } else {
            this.length += 1;
            const prev_head: Node<T> = this.head;
            this.head = current_node;
            this.head.prev = prev_head;
        }
}
    pop(): T | undefined {
        if (!this.head){
            this.length = 0;
            this.head = undefined;
            return undefined;
        } else {
        this.length -= 1;
        const current_head: Node<T> = this.head;
        this.head = this.head.prev;
        return current_head.value;
        }

}
    peek(): T | undefined {
        return this.head?.value;

}
}