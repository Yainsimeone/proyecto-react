const products =[{
    id:'1',
    name: 'Iphone 12',
    category: 'celular',
    img: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12-spring21_purple_04202021_big.jpg.large.jpg',
    stock: 5,
    price: 150000,
    description: 'description de iphone 12, son re caros!',
},
{
    id:'2',
    name: 'Samsung Galaxy S22',
    category: 'celular',
    img: 'https://images.fravega.com/f300/2a6fdd568ed2360c29edb474a56f06aa.jpg.webp',
    stock: 3,
    price: 130000,
    description: 'description de Samsung galaxy S22, 5G, 256 GB, ultra poderoso!', 
},
{
    id:'3',
    name: 'Televisor Samsung 65"',
    category: 'televisor',
    img: 'https://www.cetrogar.com.ar/media/catalog/product/T/V/TV2715-1.jpg?width=500&height=500&canvas=500,500&quality=80&bg-color=255,255,255&fit=bounds',
    stock: 3,
    price: 170000,
    description: 'description de televisor 65", es 4k, smart tv y mas!', 
}];



export const getProduct=()=>{
    return new Promise ((resolve)=>{
        setTimeout (()=>{
            resolve(products)
        }, 520);
    });
};

export const getProductById=(id)=>{
    return new Promise((resolve)=>{
        setTimeout (()=>{
            resolve(products.find(product =>{
                return product.id === id;
            }));
        }, 520);  
    });
};
