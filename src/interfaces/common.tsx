export interface ICategory {
  category: string;
  categorySlug: string;
  company: string[];
}

export interface ICategory2 {
  title: string;
  url: string;
}

export interface IProduct {
  averageRating: number;
  individualRating: number;
  brand: string;
  category: string;
  description: string;
  id: string;
  img: string;
  keyFeatures: string[];
  price: number;
  productName: string;
  status: string;
  reviews: {
    date: string;
    name: string;
    text: string;
  };
}
