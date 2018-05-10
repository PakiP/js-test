function iteratorFactory(i) {
    var onclick = function (e) {
        console.log(i);
    };
    return onclick;
}

var clickbox = document.querySelectorAll(".clickbox");
for (var i = 0; i < clickbox.length; i++){
    clickbox[i].onclick = iteratorFactory(i + 1);
}

class Animal {
    constructor(){
        this.type = 'animal';
    }
    says(say){
        /*var that = this;*/
        setTimeout(() => {
           console.log(this.type + ' says ' + say);
        }, 1000);
    }
}

let animal = new Animal();
animal.says('hello');

/*
class Cat extends Animal {
    constructor(){
        super();
        this.type = 'cat';
    }
}

let cat = new Cat();
cat.says('hello');*/
