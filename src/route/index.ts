import { IRoute } from '../models';
import { Profile, Category, Products } from '../pages';

const navigation: IRoute[] = [
    {
        key: 'profile',
        name: 'Profile',
        path: '/profile',
        component: Profile,
    },
    {
        key: 'category',
        name: 'Category',
        path: '/category',
        component: Category,
    },
    {
        key: 'products',
        name: 'Products',
        path: '/products',
        component: Products,
    },
];

export default navigation;
