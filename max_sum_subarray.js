// [1,2,-1,3,-2];

function calMaxSumSubArray(){

}

// let arr = [1,2];
// console.log([arr.reduce((a, b) => ({ ...a, [b]: b}), {})])

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Bud{
    constructor(data){
        this.left = null;
        this.data = data;
        this.right = null;
    }
}

Node.prototype.print = function(){
    let head = this;
    while(head && head.data){
        console.log(head.data);
        head = head.next;
    }
}

Node.prototype.convertToTree = function(){
    let head = this;
    let queue = [];
    let ptr = 0;
    while(head && head.data){
        let bud = new Bud(head.data);
        queue.push(bud);
        if(queue[ptr].right) ptr++;
        if(!queue[ptr].left && queue.length > 1){
            queue[ptr].left = bud;
        } else if(!queue[ptr].right && queue.length > 1){
            queue[ptr].right = bud;
        }
        head = head.next;
    }
    return queue[0];
}

let node1 = new Node(2);
let node2 = new Node(4);
let node3 = new Node(6);
let node4 = new Node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;

// node1.print();

Bud.prototype.BFS = function(){
    let root = this;
    let arr = [root];
    let curr = 0;
    while(arr[curr] && (arr[curr].left || arr[curr].right)){
        let bud = arr[curr];
        arr.push(bud.left, bud.right);
        curr++;
    }
    arr.forEach(item => {
        console.log(item ? item.data : '');
    })
}


Bud.prototype.DFS = function(){
    function traverse(root){
        if(root.left) traverse(root.left);
        console.log(root.data);
        if(root.right) traverse(root.right);
    }
    traverse(this);
}

let tree = node1.convertToTree();
tree.BFS();

let bud1 = new Bud(1);
let bud2 = new Bud(2);
let bud3 = new Bud(3);
let bud4 = new Bud(4);
let bud5 = new Bud(44);
let bud6 = new Bud(42);

bud1.left = bud2;
bud1.right = bud3;
bud2.left = bud4;
bud2.right = bud5;
bud3.left = bud6;

// bud1.BFS();
// bud1.DFS();