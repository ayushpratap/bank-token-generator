class Qelements{
    constructor(element, priority){
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.item = [];
    }

    enqueue(element, priority){
        var qElement = new Qelements(element, priority);
        var contain = false;

        for(var i = 0;i < this.item.length; i++){
            if(this.item[i].priority > qElement.priority){
                this.item.splice(i,0,qElement);
                contain = true;
                break;
            }
        }
        if(!contain){
            this.item.push(qElement);
        }
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.item.shift();
    }

    front(){
        if(this.isEmpty()){
            return "No element in queue";
        }
        return this.item[0];
    }

    rear(){
        if(this.isEmpty()){
            return "No element in queue";
        }
        return this.item[this.item.length-1];
    }

    isEmpty(){
        return this.item.length == 0;
    }

    getLength(){
        return this.item.length;
    }

    printPQueue(){
        var str = "";
        for(var i = 0; i < this.item.length; i++){
            // console.log(this.item[i].element);
            str += this.item[i].element+" ";
        }
        return str;
    }
}

module.exports = PriorityQueue;
