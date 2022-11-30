const apiUrl = 'https://fakestoreapi.com';

const config = {
    apiUrl,

    limit: '50',

    sort: [
        { label: 'low first', value: 'DESK' },
        { label: 'high first', value: 'ASK' },
    ],
};

export default Object.freeze({ ...config });
