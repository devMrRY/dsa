class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

let node1 = new Node(2);
let node2 = new Node(21);
let node3 = new Node(12);
let node4 = new Node(7);
let node5 = new Node(4);
let node6 = new Node(84);
let node7 = new Node(42);
let node8 = new Node(14);
let node9 = new Node(43);
let node10 = new Node(24);

node1.left = node2;
node1.right = node3;
node2.left = node5;
node2.right = node4;
node3.left = node6;
node3.right = node7;
node4.left = node8;
node4.right = node9;
node5.right = node10;

Node.prototype.traverse = function(){
    let queue = [[this]];
    let secQueue = [];
    let curr = 0;
    let LTR = true;
    while(queue[curr]){
        queue[curr++].forEach(item => {
            let node = item;
            if(node.left) secQueue.push(node.left);
            if(node.right) secQueue.push(node.right);
            // if(LTR){
            // }else{
            //     if(node.right) secQueue.push(node.right);
            //     if(node.left) secQueue.push(node.left);
            // }
        })
        if(secQueue.length){
            if(LTR){
                queue.push([...secQueue]);
            }else{
                queue.push([...secQueue].reverse());
            }
            secQueue.length = 0;
            LTR = !LTR;
        }
    }
    queue.forEach((item, i) => {
        item.forEach(n => {
            console.log(n.data)
        })
    })
}

node1.traverse();