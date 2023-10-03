class Animal {
    constructor(name, species, age, gender){
        this.name = name
        this.species = species
        this.age = age
        this.gender = gender  
    }

    describe(){
        console.log(`This is ${this.species} is named ${this.name}. They are ${this.age} year-old ${this.gender}!`)
    }

    feed(){
        console.log(`${this.name} is eating.`)
    }

    makeSound(){
        console.log(`${this.name} is making a sound.`)
    }

    move(){
        console.log(`${this.name} is moving.`)
    }   
}

//Instantiate
const tony = new Animal('tony','tiger','5','best boy')

//Tests
    // console.log(tony)
    // tony.describe()
    // tony.feed()
    // tony.makeSound()
    // tony.move()

//Extending to a subclass
class Mammal extends Animal {
    constructor(name, species, age, gender, furColor){
        super(name, species, age, gender)
        this.furColor = furColor
    }

    describe(){
        console.log(`This ${this.species} is named ${this.name} and has ${this.furColor} fur. They are a ${this.age} year-old ${this.gender}!`)
    }

    feed(){
        console.log(`${this.name} is drinking milk.`)
    }

    makeSound(){
        console.log(`${this.name} is howling.`)
    }

    move(){
        console.log(`${this.name} is walking.`)
    }   

}

//Instantiate
    const louis = new Mammal('king louis','orangutang','12','king of the jungle','orange')

//Tests
    // louis.describe()
    // louis.feed()
    // louis.makeSound()
    // louis.move()

class Zoo {
    constructor(){
        this.animalsArr = []
    }

    addAnimal(newAnimal){
        this.animalsArr.push(newAnimal)
        //console.log(this.animalsArr)
    }
    
    displayAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.describe()
        })
    }

    feedAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.feed()
        })
    }

    listenToAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.makeSound()
        })
    }

    watchAnimals(){
        this.animalsArr.forEach(function(animal){
            animal.move()
        })
    }
}

//Instatiate
    const zoolanderZoo = new Zoo()

//Tests
    zoolanderZoo.addAnimal(louis)
    zoolanderZoo.addAnimal(tony)
    zoolanderZoo.displayAnimals()
    zoolanderZoo.feedAnimals()
    zoolanderZoo.listenToAnimals()
    zoolanderZoo.watchAnimals()
