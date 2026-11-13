class Father {
    home(): void {
        console.log("2BHK");
    }
}

class Arun extends Father {
    override home(): void {
        console.log("3BHK");
    }
}

let Arun = new Arun();
let parent = new Father();
//Arun.home();

parent.home();
