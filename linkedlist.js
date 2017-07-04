"use strict";
var Node = (function () {
    function Node() {
    }
    return Node;
}());
var LinkedList = (function () {
    function LinkedList() {
    }
    LinkedList.prototype.addFirst = function (data) {
        var toAdd = new Node();
        toAdd.data = data;
        toAdd.next = this.head;
        this.head = toAdd;
    };
    LinkedList.prototype.addLast = function (data) {
        var toAdd = new Node();
        toAdd.data = data;
        if (this.head != null) {
            var last = this.head;
            while (last.next != null) {if (window.CP.shouldStopExecution(1)){break;}
                last = last.next;
            }
window.CP.exitedLoop(1);

            last.next = toAdd;
        }
        else {
            this.head = toAdd;
        }
    };
    LinkedList.prototype.removeTail = function () {
        if (this.head != null) {
            var last = this.head;
            var prevNode;
            while (last.next != null) {if (window.CP.shouldStopExecution(2)){break;}
                prevNode = last;
                last = last.next;
            }
window.CP.exitedLoop(2);

            if (prevNode != null) {
                prevNode.next = null;
            }
            else {
                this.head = null;
            }
        }
    };
    LinkedList.prototype.removeAllGreaterThan = function (data) {
        if (this.head != null) {
            var current = this.head.next;
            var prevNode = this.head;
            while (current != null) {if (window.CP.shouldStopExecution(3)){break;}
                if (current.data > data) {
                    prevNode.next = current.next;
                    current = current.next;
                }
                else {
                    prevNode = current;
                    current = current.next;
                }
            }
window.CP.exitedLoop(3);

            if (this.head.data > data) {
                this.head = this.head.next;
            }
        }
    };
    LinkedList.prototype.printAll = function () {
        var current = this.head;
        while (current != null) {if (window.CP.shouldStopExecution(4)){break;}
            console.log(current.data);
            current = current.next;
        }
window.CP.exitedLoop(4);

    };
    return LinkedList;
}());
var linkedList = new LinkedList();
linkedList.addFirst(9);
linkedList.addFirst(7);
linkedList.addFirst(4);
linkedList.addLast(5);
linkedList.addLast(7);
linkedList.addLast(8);
linkedList.addFirst(1);
linkedList.removeTail();
linkedList.removeAllGreaterThan(7);
linkedList.printAll();
