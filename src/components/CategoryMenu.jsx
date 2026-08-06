import {
    GiLargeDress,
    GiMonclerJacket
} from "react-icons/gi";

import {
    FaTshirt,
    FaShoePrints
} from "react-icons/fa";

import { PiPantsFill } from "react-icons/pi";

const categories = [
    {name:"All",icon:"✨"},
    {name:"Dresses",icon:<GiLargeDress/>},
    {name:"T-Shirts",icon:<FaTshirt/>},
    {name:"Denim",icon:<PiPantsFill/>},
    {name:"Jackets",icon:<GiMonclerJacket/>},
    {name:"Shoes",icon:<FaShoePrints/>},
    {name:"Dresses1",icon:<GiLargeDress/>},
    {name:"T-Shirts1",icon:<FaTshirt/>},
    {name:"Denim1",icon:<PiPantsFill/>},
    {name:"Jackets1",icon:<GiMonclerJacket/>},
    {name:"Shoes1",icon:<FaShoePrints/>},
];

function CategoryMenu(){

return(

<section className="py-20">

<h2 className="text-4xl font-bold text-center">
Category
</h2>

<div className="flex justify-center gap-12 mt-12">

{categories.map((item)=>(

<div
key={item.name}
className="flex flex-col items-center cursor-pointer hover:text-pink-500 transition"
>

<div className="text-8xl">
{item.icon}
</div>

<p className="mt-3">
{item.name}
</p>

</div>

))}

</div>

</section>

)

}

export default CategoryMenu;