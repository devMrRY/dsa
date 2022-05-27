function Node(data){
    this.data = data;
    this.next = null;
}

let node1 = new Node(2);
let node2 = new Node(4);
let node3 = new Node(5);
let node4 = new Node(6);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node1;

// 2 --> 4 --> 5 --> 6
//       |<----------|

function detectLoop(){
    let map = new Map
    let ptr = node1;
    while(ptr && ptr.next){
        if(map.has(ptr.next)) return true;
        map.set(ptr.next, true);
        ptr = ptr.next;
    }
    return false;
}

console.log(detectLoop())