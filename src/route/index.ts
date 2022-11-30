import { IRoute } from '../models';
import { Profile, Products } from '../pages';

const navigation: IRoute[] = [
    {
        key: 'products',
        name: 'Products',
        path: '/products',
        component: Products,
    },
    {
        key: 'profile',
        name: 'Profile',
        path: '/profile',
        component: Profile,
    },
];

export default navigation;
