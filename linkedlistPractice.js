class Node{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head=null;
        this.size=0;
    }

    isEmpty(){
        return this.size==0
    }

    getSize(){
        return this.size;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head=newNode;
        }else{
            let current = this.head;
            while(current.next){
                current=current.next
            }
            current.next = newNode
        }
        this.size++;
    }

    prepend(data){
        const newNode = new Node(data);

        if(!this.head){
            this.head=newNode
        }else{
            newNode.next = this.head
            this.head = newNode
        }
        this.size++;
    }

    search(data){
        if(this.head.value==data){
            return console.log( "found");
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
                if(current.value==data){
                    return console.log("found");
                }
            }
            return console.log("not found");
        }
        
    }

    traverse(){
        if(!this.head){
            return console.log("no values here");
        }else{
            let current = this.head;
           
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
       
    }

    delete(data){
        if(this.head.value==data){
            this.head=this.head.next
            this.size--
            return
        }
        let prev = this.head;

        while(prev.next&&prev.next.value!==data){
            prev=prev.next
        }
        if(prev.next){
            prev.next = prev.next.next
            this.size--;
        }
    }

    insertAtIndex(data,index){
        if(index==0){
            this.prepend(data)
            return
        }
        if(index>this.size || index<0){
            return console.log("Index is out of bounds");
        }

        const newNode = new Node(data)
        let count=0;
        let current = this.head;
        let prev = null;

        while(count<index){
            prev = current
            current = current.next
            count++;
        }
        prev.next = newNode;
        newNode.next=current;
        this.size++;
        return;
    }
}

const list = new LinkedList()


list.append(6)
list.append(8)
list.append(7)
list.append(9)
list.append(22)

list.search(22)

// list.traverse()
list.delete(22)
list.insertAtIndex(10,2)
list.insertAtIndex(11,2)
list.insertAtIndex(1,0)
list.traverse()

console.log(list.getSize());