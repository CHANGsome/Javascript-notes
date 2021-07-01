function LinkedList(){
    function Node(){
        this.element = null;
        this.next = null;
    }
    var head = null;
    var tail = null;
    this.getHead = function () {
        return head;
    }
    this.getTail = function () {
        return tail;
    }
    this.find = function (item) {
        findNode(item);
    }
    var findNode = function (item) {
        var currentNode = head;
        if(currentNode.element!=item){
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    var insert = function (value) {
        var node = new Node();
        node.element = value;
        if(head === null){
            head = node;
            tail = node;
        }else{
            tail.next = node;
            tail = node;
        }
    }
    this.constructList = function (arr) {
        arr.forEach(function(key) {
            insert(key);
        });
    }
    this.display = function () {
        if(head === null){
            console.log("null linkedlist");
        }else {
            var currentNode = head;
            while(currentNode != tail){
                console.log(currentNode.element+'->');
                currentNode = currentNode.next;
            }
            console.log(currentNode.element);
        }
    }
}

//反转链表
function ReverseList(pHead)
{
    // write code here
    var arr = [];
    if(pHead == null || pHead.next == null){
        return pHead;
    }
    while(pHead){
        arr.push(pHead);
        pHead = pHead.next;
    }
    arr = arr.reverse();
    var head = arr[0];
    for(var i=0;i<arr.length-1;i++){
        arr[i].next = arr[i+1];
    }
    arr[i].next = null;
    return head;
}


function printListFromTailToHead(head)
{
    // write code here
    var arr = [];
    var currentNode = head;
    while(currentNode){
        arr.push(currentNode.element);
        currentNode = currentNode.next;
    }
    return arr.reverse();
}

//输出链表倒数第k个节点
function FindKthToTail(head, k)
{
    // write code here
    var currentNode = head;
    var len = 0;
    while(currentNode){
        len++;
        currentNode = currentNode.next;
    }
    currentNode = head;
    if(len<k){
        return null;
    }
    for(let i=0;i<len-k;i++){
        currentNode = currentNode.next;
    }
    return currentNode.element;
}



var arr = [1,2,3,4,5,6];
var linkedList = new LinkedList();
linkedList.constructList([]);
var head = linkedList.getHead();
//console.log(printListFromTailToHead(head));
//linkedList.display();
//console.log(FindKthToTail(head,7));
console.log(ReverseList(head));