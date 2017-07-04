class Node {
  data: number;
  next: Node;
}

class LinkedList {
  head: Node;
  
  addFirst(data: number) {
    var toAdd = new Node();
    toAdd.data = data;
    toAdd.next = this.head;
    
    this.head = toAdd;
  }
  
  addLast(data: number) {
    var toAdd = new Node();
    toAdd.data = data;
    
    if(this.head!=null) {
      var last = this.head;    
      while(last.next != null) {
        last = last.next;       
      }      
      last.next = toAdd;
    } else {
      this.head = toAdd;
    }
  }
  
  printAll() {
    var current = this.head;
    while(current != null) {
      console.log(current.data);
      
      current = current.next;
    }
  }
}

// Run a test
var linkedList = new LinkedList();
linkedList.addFirst(1);
linkedList.addFirst(3);
linkedList.addFirst(5);
linkedList.addLast(4);
linkedList.addLast(9);
linkedList.addFirst(7);
linkedList.printAll(); 

// output
7
1
3
5
4
9