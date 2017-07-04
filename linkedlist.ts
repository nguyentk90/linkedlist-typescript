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
  
  removeTail() {
    if(this.head!=null) {
      var last = this.head;  
      var prevNode;
      while(last.next != null) {
        prevNode = last;
        last = last.next;       
      }   
      if(prevNode!=null) {
         prevNode.next = null;
      } else {
        this.head = null;
      }      
    }
  } 
  
  removeAllGreaterThan(data: number) {
    if(this.head != null) {
      var current = this.head.next;           
      var prevNode = this.head;
      
      while(current != null) { 
        if(current.data > data) {
          prevNode.next = current.next;
          current = current.next;
        } else {
          prevNode = current;
          current = current.next; 
        }       
      }   
      
      if(this.head.data > data) {
        this.head = this.head.next;
      }
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

var linkedList = new LinkedList();
linkedList.addFirst(9);
linkedList.addFirst(7);
linkedList.addFirst(4);
linkedList.addLast(5);
linkedList.addLast(7);
linkedList.addLast(8);
linkedList.addFirst(1);
linkedList.removeAllGreaterThan(7);
linkedList.printAll();  