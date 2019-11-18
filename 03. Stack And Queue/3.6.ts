import Queue from './queue'

interface Animal {
  time: number
}

class Cat implements Animal {
  time: number
  constructor() {
    this.time = new Date().getTime()
  }
}

class Dog implements Animal {
  time: number
  constructor() {
    this.time = new Date().getTime()
  }
}

class AnimalShelter {
  dogQueue: Queue<Dog>
  catQueue: Queue<Cat>

  constructor() {
    this.dogQueue = new Queue<Dog>()
    this.catQueue = new Queue<Cat>()
  }

  enqueue(animal: Animal) {
    if (animal instanceof Dog) this.dogQueue.add(animal)
    else if (animal instanceof Cat) this.catQueue.add(animal)
  }

  dequeueAny(): Animal {
    if (this.dogQueue.isEmpty) return this.catQueue.remove()
    else if (this.catQueue.isEmpty) return this.dogQueue.remove()
    else {
      const cat = this.catQueue.peek()
      const dog = this.dogQueue.peek()
      console.log(cat.time, dog.time)
      return cat.time < dog.time
        ? this.catQueue.remove()
        : this.dogQueue.remove()
    }
  }

  dequeueDog(): Dog {
    return this.dogQueue.remove()
  }

  dequeueCat(): Cat {
    return this.catQueue.remove()
  }
}

const animalShelter = new AnimalShelter()

for (let i = 0; i < 15; i++) {
  if (Math.random() < 0.5) animalShelter.enqueue(new Dog())
  else animalShelter.enqueue(new Cat())
}

console.log('Dequeue 2 cats')
for (let i = 0; i < 2; i++) {
  console.log(animalShelter.dequeueCat())
}

console.log('\nDequeue 2 dogs')
for (let i = 0; i < 2; i++) {
  console.log(animalShelter.dequeueDog())
}

console.log('\nDequeue 11 animals')
for (let i = 0; i < 11; i++) {
  console.log(animalShelter.dequeueAny())
}
