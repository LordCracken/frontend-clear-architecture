export interface IProduct {
  readonly id: UniqueID;
  readonly name: string;
  readonly author: string;
  readonly image: ImageURL;
  readonly description: string;
  readonly price: number;
}

export class Product implements IProduct {
  readonly id;
  name;
  author;
  image;
  description;
  price;

  constructor(
    id: UniqueID,
    name: string,
    author: string,
    image: ImageURL,
    description: string,
    price: number,
  ) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.image = image;
    this.description = description;
    this.price = price;
  }
}
