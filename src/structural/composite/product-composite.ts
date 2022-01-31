/* eslint-disable @typescript-eslint/no-unused-vars */
export abstract class ProductComponent {
  abstract getPrice(): number;
  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    this.children.push(...products);
  }
  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    productIndex !== -1 && this.children.splice(productIndex, 1);
  }

  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const camiseta = new ProductLeaf('Camiseta', 40);
const bicicleta = new ProductLeaf('Bicicleta', 20);
const carro = new ProductLeaf('Carro', 10);

const productBox = new ProductComposite();

productBox.add(camiseta, bicicleta, carro);

const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherBox = new ProductComposite();

anotherBox.add(tablet, kindle);
productBox.add(anotherBox);

console.log(productBox);
console.log(productBox.getPrice()); // somou o preço dos produtos e subprodutos
