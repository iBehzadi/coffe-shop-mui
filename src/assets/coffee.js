import Espresso from './images/espresso.jpg';
import Latte from './images/latte.jpg';
import ColdBrew from './images/cold-brew.jpg';

const products = [
    {
        id: 1,
        title: "Espresso Coffee",
        image: Espresso, 
        price: 5.99,
        description: "A strong and bold espresso shot to kickstart your day.",
    },
    {
        id: 2,
        title: "Latte",
        image: Latte,
        price: 6.99,
        description: "A creamy cappuccino with a perfect blend of espresso and milk foam.",
    },
    {
        id: 3,
        title: "Cold Brew",
        image: ColdBrew,
        price: 7.49,
        description: "A smooth and creamy latte made with steamed milk and espresso.",
    },
];

export default products;