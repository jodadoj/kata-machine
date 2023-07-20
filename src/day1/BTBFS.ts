export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const queue: (BinaryNode<number>|null)[] = [head];
    while (queue.length){
        // next = q.decue
        // enqueue next left
        // enque next right

        const current_node:BinaryNode<number>|null|undefined = queue.shift();

        if (current_node){
            if (current_node?.value === needle){ return true }
                
            queue.push(current_node.left);
            queue.push(current_node.right);
        }

    }
    return false;
}