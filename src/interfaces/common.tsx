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
  _id: string;
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
  reviews: IReview[];
}

export interface IReview {
  date: string;
  name: string;
  text: string;
}
