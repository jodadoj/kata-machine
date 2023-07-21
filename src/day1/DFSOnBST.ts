function search(current_node:BinaryNode<number>|null, needle: number): boolean {
    if (!current_node){
        return false;
    }

    if (current_node.value === needle){
        return true;
    }

    if (current_node.value < needle) {
        return search(current_node.right, needle);
    }

    return search(current_node.left, needle);
}


export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}