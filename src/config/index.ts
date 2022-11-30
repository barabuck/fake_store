const apiUrl = 'https://fakestoreapi.com';

const config = {
    apiUrl,

    limit: '50',

    sort: [
        { label: 'Cheap first', value: 'DESK' },
        { label: 'Expensive first', value: 'ASK' },
    ],
};

export default Object.freeze({ ...config });

// workbox-window workbox-core workbox-expiration workbox-precaching workbox-routing workbox-strategies workbox-cacheable-response
