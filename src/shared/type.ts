export interface ProductData {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  quantity?: number;
  totalAmount?: number;
}

export interface AuthData {
  email: string;
  password: string;
  passwordConfirmation?: string;
}
