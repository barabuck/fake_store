export default interface IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: { rate: number; count: number };
}
