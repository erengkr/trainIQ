class Example {
  name: string;
  constructor() {
    this.name = "Eren";
  }

  normalFunction() {
    console.log("Normal Fonksiyon:", this.name);
  }

  arrowFunction = () => {
    console.log("Arrow Fonksiyon:", this.name);
  }
}

const example = new Example();

const normalFunc = example.normalFunction;
normalFunc(); // Çıktı: Normal Fonksiyon: undefined

const arrowFunc = example.arrowFunction;
arrowFunc(); // Çıktı: Arrow Fonksiyon: Eren
