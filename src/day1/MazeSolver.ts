const dir = [
    [-1,0],
    [0,1],
    [0,-1],
    [1,0]
]

function walk(maze: string[], wall:string, current_point: Point, end: Point, seen: boolean[][], path: Point[]): boolean{
    //base case
    //it's off the map
    if(current_point.x<0 || current_point.x>=maze[0].length ||
        current_point.y<0 || current_point.y>=maze.length){
            return false;
    }    
    //it's a wall
    if(maze[current_point.y][current_point.x]===wall){
        return false;
    }
    //it's the end
    if(current_point.x === end.x && current_point.y === end.y){
        path.push(end);
        return true;
    }
    //we've visited it before
    if(seen[current_point.y][current_point.x]){
        return false;
    }

    //pre
    seen[current_point.y][current_point.x] = true;
    path.push(current_point);

    //recur
    for (let i = 0; i < dir.length; i++){
        const [x, y] = dir[i];
        if (walk(maze, wall, {
            x: current_point.x + x,
            y: current_point.y + y
        }, end, seen, path)){
            return true;
        }
    }

    //post
    path.pop()

    return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {

    //recursive case
    // up, right, down, left
    const seen: boolean[][] = []
    const path: Point[] = [];

    for(let i = 0; i<maze.length; i++){
        seen.push(new Array(maze[0].length).fill(false))
    }
    walk(maze, wall, start, end, seen, path);

    return path;
}