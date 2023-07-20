type Node<T> = {
    value: T;
    next?: Node<T>|undefined;
    prev?: Node<T>|undefined;
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>|undefined;
    private tail?: Node<T>| undefined;
    
    constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        const current_node:Node<T> = {value: item, next: this.head, prev: undefined}
        if(!this.head){
            this.length = 1;
            this.head = this.tail = current_node;
        }
        else if (this.head){
            this.length += 1;
            this.head.prev = current_node;
            this.head = current_node;
        }

}
    insertAt(item: T, idx: number): void {
        if (idx === 0){
            this.append(item);
            return undefined;
        }
        if (idx === this.length){
            this.append(item);
            return undefined;
        }
        let current_node:Node<T>|undefined = this.getAt(idx);
        if (current_node){
            this.length += 1;
            let inserted_node:Node<T>|undefined = {value: item, next:current_node, prev: current_node.prev};
            if (current_node.prev){
                current_node.prev.next = inserted_node;        
                current_node.prev = inserted_node;
            }
        }

}
    append(item: T): void {
        const current_node:Node<T> = {value: item, next: undefined, prev: this.tail}
        if(!this.tail){
            this.length = 1;
            this.head = this.tail = current_node;
        }
        else if (this.tail){
            this.length += 1;
            this.tail.next = current_node;
            this.tail = current_node;
        }

}
    remove(item: T): T | undefined {
        if(!this.head){
            return undefined;
        }
        let deleted_node:Node<T>|undefined = this.head;
        for ( let i: number = 0 ; deleted_node && i < this.length ; i++){
            if(deleted_node.value === item){
                return this.removeItem(deleted_node)?.value;
            }
            deleted_node = deleted_node.next;
        }
    return undefined;
}

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value;
}
    removeAt(idx: number): T | undefined {
        if(!this.head || idx > this.length || idx < 0){
            return undefined;
        }
        if(idx === 0){
            return this.removeItem(this.head)?.value;
        }
        if(idx === this.length){
            return this.removeItem(this.tail)?.value;
        }
        let deleted_node:Node<T>|undefined = this.getAt(idx);
        return this.removeItem(deleted_node)?.value;
    }


    private getAt(idx: number): Node<T> | undefined {
        if(!this.head || idx > this.length || idx < 0){
            return undefined;
        }
        let current_node:Node<T>|undefined = this.head;
        for ( let i: number = 0 ; i < idx ; i++){
            current_node = current_node?.next;
        }
        return current_node;
    }
    
    private removeItem(deleted: Node<T>|undefined): Node<T>|undefined{
        if (!deleted){
            return undefined;
        }
        this.length -= 1;
        if (deleted.prev){
            if (this.tail === deleted){
                this.tail = this.tail.prev;
            }
            deleted.prev.next = deleted.next;        
        }
        if (deleted.next){
            if (this.head === deleted){
                this.head = this.head.next;
            }
            deleted.next.prev = deleted.prev;
        }
        deleted.prev = deleted.next = undefined;

        return deleted;
    }
}


/*

                this.length -= 1;
                if (deleted_node){
                    if (deleted_node.prev){
                        deleted_node.prev.next = deleted_node.next;        
                    }
                    if (deleted_node.next){
                        deleted_node.next.prev = deleted_node.prev;
                    }
                    deleted_node.prev = deleted_node.next = undefined;
                }
                return deleted_node.value;


        if(!this.head || idx > this.length || idx < 0){
            return undefined;
        }
        this.length -= 1;
        let deleted_node:Node<T>|undefined = this.head;
        if(idx === 0){
            this.head = this.head.next;
            deleted_node.next = deleted_node.prev = undefined;
            return deleted_node.value;
        }
        if(idx === this.length && this.tail){
            deleted_node = this.tail;
            this.tail = this.tail?.prev;
            deleted_node.next = deleted_node.prev = undefined;
            return deleted_node.value;
        }
        for ( let i: number = 0 ; deleted_node && i < idx ; i++){
            deleted_node = deleted_node.next;
        }
        if (deleted_node){
            if (deleted_node.prev){
                deleted_node.prev.next = deleted_node.next;        
            }
            if (deleted_node.next){
                deleted_node.next.prev = deleted_node.prev;
            }
            deleted_node.prev = deleted_node.next = undefined;
        }
        return deleted_node?.value;
*/