//can remove path returns and number[] return by defining path in original function
// i.e. const path = []; walk(head, path); return path;
// or can use number[] throughout

function walk(current_node: BinaryNode<number>| null, path: number[]): void {
    //base case
    //if there is no longer a node (off the tree)
    if (!current_node){
        // return path;
        return undefined;
    }

    //pre
    //check left side
    //checks all left sides until there are no more
    walk(current_node.left, path);
    //reccur
    //push current value
    path.push(current_node.value);
    //check right
    //will continue to check left until options are exhausted
    walk(current_node.right, path);
    //post
    //returns final path
    // return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const path:number[] = [];
    walk(head, path);
    return path;
}