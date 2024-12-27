export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

export interface ProductDisplay {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
}