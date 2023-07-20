type Node<T> = {
    value: T,
    next?: Node<T>,
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        const current_node:Node<T> = { value: item, next: this.head }
        this.length += 1;
        if(!this.head){
            this.head = this.tail = current_node;
        }
        else if (this.head)
        {
        const current_head: Node<T> = this.head;
        this.head = current_node;
        this.head.next = current_head;
        }
}
    insertAt(item: T, idx: number): void {
        if (this.length < idx || !this.head){
            this.append(item);
        } else {
            this.length += 1;
            let current_node: Node<T> = { value: item, next: undefined};
            current_node.next = this.head;
            this.head = current_node;
            for (let i:number = 0; i<idx; i++){
                const current_next: Node<T>|undefined = current_node.next;
                if (current_next?.next && current_node.next?.next){
                    current_node.next.next = current_node;
                    current_node.next = current_next.next;
                } else {
                    if (current_node.next){
                        current_node.next.next = current_node;
                        current_node.next = undefined;    
                    }
                }
                current_node.next = current_next ? current_next.next : undefined;
            }
        }
}
    append(item: T): void {
        const current_node:Node<T> = { value: item, next: undefined }
        this.length += 1;
        if(!this.tail){
            this.tail = this.head = current_node;
        }
        else if (this.tail)
        {
        this.tail.next = current_node;
        this.tail = current_node;
        }

}
    remove(item: T): T | undefined {
        if(!this.head){
            return undefined
        } 
        let current_node: Node<T>|undefined = this.head;
        if (this.head.value === item){ 
            this.head = this.head.next;
            this.length -= 1;
            return current_node.value;
        } else {
            let prev_node: Node<T>|undefined = current_node;
            for (let i: number = 0 ; i < this.length; i++ ){
                if (current_node && prev_node && current_node.value === item){
                        this.length -= 1;
                        prev_node.next = current_node.next;
                        return current_node.value;
                }
                else {
                    prev_node = current_node;
                    current_node = current_node ? current_node.next : undefined;
                }
            }
            return undefined;
        } 
}
    get(idx: number): T | undefined {
        if(!this.head || idx > this.length){
            return undefined;
        } 
        if(idx === 0){
            return this.head.value;
        }
        let current_node: Node<T>|undefined = this.head;
        for (let i: number = 0 ; i < idx; i++ ){
            if(current_node){
                current_node = current_node.next;
            }
        }
        return current_node?.value;
} 


    removeAt(idx: number): T | undefined {
        if(!this.head || idx > this.length){
            return undefined;
        } 
        this.length -= 1;
        let current_node: Node<T>|undefined = this.head;
        if (this.length === 0){
            this.head = this.tail = undefined;
            return current_node.value;
        }
        if(idx === 0 && this.head){
            this.head = this.head.next;
            return current_node.value;
        }
        let current_next: Node<T>|undefined = this.head?.next;
            for (let i: number = 0 ; i < idx; i++ ){
            if(current_node && current_next){
                current_node.next = current_next?.next;
                current_node = current_next;
                current_next = current_node?.next;
            }
        }
        return current_node.value;
    } 
}