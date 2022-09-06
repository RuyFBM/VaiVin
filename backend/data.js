import bcrypt from 'bcryptjs';

const data = {
    users:[
        {
            name: 'Poliana',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Ruy',
            email: 'user@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,

        },
    ],
    products: [
        {
            //_id:'1',
            name:'Catena Savion',
            slug:'catena-savion',
            category:'argentinos',
            image:'/images/vinho-exemplo.png',
            price: 80, 
            countInStock: 2,
            brand:'Catena',
            rating: 1.8,
            numReviews: 20,
            description:'vinho de extrema qualidade!'
        },
        {
            //_id:'2',
            name:'Catena Malbec',
            slug:'catena-malbec',
            category:'argentinos',
            image:'/images/vinho-exemplo.png',
            price: 256, 
            countInStock: 3,
            brand:'Catena',
            rating: 2.8,
            numReviews: 3,
            description:'vinho de extrema qualidade!'
        },  
        {
            //_id:'3',
            name:'Catena Branco',
            slug:'catena-branco',
            category:'argentinos',
            image:'/images/vinho-exemplo.png',
            price: 190, 
            countInStock: 5,
            brand:'Catena',
            rating: 3.2,
            numReviews: 48,
            description:'vinho de extrema qualidade!'
        },  
        {
            //_id:'4',
            name:'Catena Tinto',
            slug:'catena-tinto',
            category:'argentinos',
            image:'/images/vinho-exemplo.png',  
            price: 480, 
            countInStock: 0,
            brand:'Catena',
            rating: 4.8,
            numReviews: 60,
            description:'vinho de extrema qualidade!'
        },
    ],
};

export default data;