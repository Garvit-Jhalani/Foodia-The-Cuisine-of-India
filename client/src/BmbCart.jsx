// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const a2b = [
  {
    img: "https://b.zmtcdn.com/data/reviews_photos/906/1f7992d7735dcc29807383f18524f906_1679197221.jpg?fit=around|750:500&crop=750:500;*,*",
    title: "Chole Bhature",
    content: "2-bhature souffed with panier & greenles accompanied by authentic punjabi cholle - pickle mint chutney - salad, we have wide range of varieties when it comes to main course as well as our all dishes are cooked with minimal use of red pepper, no refined oil, only ghee & cold pressed oil used",
    price: "219",
  },
  {
    img: "https://i.pinimg.com/736x/bd/8d/36/bd8d365a6e5edded309f1471c78a6c3e.jpg",
    title: "Dahi Samosa",
    content: "Serves 1 | A fried pastry with a savory filling, including ingredients such as spiced potatoes, onions, and peas topped with curd",
    price: "109",
  },
  {
    img: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/nithya.anantham/Cheesy_Pav_Bhaji_Recipe.jpg",
    title: "Cheese Pav Bhaji",
    content: "Serves 1 | Butter-laden pavs accompanied by a delicious and healthy gravy of mashed vegetables, topped with dollops of butter.",
    price: "219",
  },
  {
    img: "https://www.cookwithmanali.com/wp-content/uploads/2020/10/Raj-Kachori-Recipe-500x500.jpg",
    title: "Raj Kachori",
    content: "Serves 1 | Crisp Kachori, filled with potatoes, moong dal,yogurt, dahi vada spices and chutneys. A Royal Treat|serves1|",
    price: "179",
  },
  {
    img: "https://b.zmtcdn.com/data/dish_photos/5fd/514631930e24261417e2854172d1c5fd.jpg",
    title: "Combo Panner btr Masala",
    content: "Serves 1 | Paneer Butter Masala thali combo contains Paneer Butter Masala + Any Choice of Bread accompanied with salad and pickle.",
    price: "240",
  },
  {
    img: "https://thewhiskaddict.com/wp-content/uploads/2021/10/IMG_7794-1024x897.jpg",
    title: "Combo Dal Fry",
    content: "Serves 1 | Dal Fry Thali combo contains Dal Fry + Jeera Rice accompanied with salad and pickle.",
    price: "189",
  },
  {
    img: "https://lh3.googleusercontent.com/zv2EAZExeDXLUOpLd6hqAvqBN06xycBFkiXhpjkB-vJITwHFBCPqUm7WCDSX8AH5Nq35WGeHGoZg-DIULTo0uO0BRP5w7Co3hmc8L4v8",
    title: "Combo Dal Makhani",
    content: "Serves 1 | Dal Makhani Thali combo contains Dal Makhani + ny Choice of Bread accompanied with salad and pickle.",
    price: "209",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSkuXllxRQALGDrinGhzvpLi4v6s1_dnJ_vQ&usqp=CAU",
    title: "Combo Panner Tikka Masala",
    content: "Serves 1 | Paneer Tikka Masala thali combo contains Paneer Tikka Masala + Any Choice of Bread accompanied with salad and pickle.",
    price: "240",
  },
  {
    img: "https://images.news18.com/ibnlive/uploads/2023/08/untitled-design-8-1.png",
    title: "Tandoori Roti",
    content: "Serves 1 | Flat bread cooked in tandoor",
    price: "49",
  },
  {
    img: "https://static.toiimg.com/thumb/53338316.cms?width=1200&height=900",
    title: "Naan",
    content: "Serves 1 | Soft & Fluffy leavened bread cooked in tandoor",
    price: "79",
  },
  {
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2022/12/garlic-naan-3.jpg",
    title: "Garlic Naan",
    content: "Serves 1 | Soft & Fluffy leavened bread cooked in tandoor topped with dollop of butter",
    price: "89",
  },
  {
    img: "https://i.pinimg.com/736x/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg",
    title: "Masala Dosa",
    content: "Serves 1 | A semi-spicy, crispy and delicious dosa with potato masala folded into it.",
    price: "189",
  },
  {
    img: "https://static.toiimg.com/thumb/53537841.cms?imgsize=368508&width=800&height=800",
    title: "Onion Uttapum",
    content: "Serves 1 | Made with dosa batter, topped with onion and served with chutney.",
    price: "159",
  },
  {
    img: "https://images.slurrp.com/prod/recipe_images/transcribe/breakfast/Medu-Vada.webp?impolicy=slurrp-20210601&width=1200&height=675",
    title: "Vada Sambhar",
    content: "Serves 1 | Deep-fried savory snack, made from urud dhal and other spices served with Sambhar.",
    price: "99",
  },
  {
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
    title: "Kadhai Panner",
    content: "Serves 1 | Succulent paneer chunks cooked in spicy onion tomato gravy with dices of tomatoes, onions & capsicums",
    price: "349",
  },
  {
    img: "https://www.cookwithmanali.com/wp-content/uploads/2023/01/Mixed-Veg-Sabzi-500x500.jpg",
    title: "Mix Vegetable",
    content: "Serves 1 | Seasonal mixed vegetables cooked with whole some spices & onion tomato gravy",
    price: "279",
  },
  {
    img: "https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg",
    title: "Dal Makhani",
    content: "Serves 1 | Whole black lentils cooked with butter, cream and tomatoes puree and topped with fresh cream.",
    price: "329",
  },
  {
    img: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800",
    title: "Gulab Jamun(2 pc)",
    content: "Serves 1 | Fried dumplings made of dried milk & dipped in rose cardamom flavoured sugar syrup.",
    price: "59",
  },
  {
    img: "https://static.toiimg.com/thumb/52743612.cms?imgsize=134181&width=800&height=800",
    title: "Rasgulla(6 pc)",
    content: "Serves 1 | Traditional bengali sweet, made from ball-shaped dumplings of chhena (an indian cottage cheese), cooked in light sugar syrup made of sugar.",
    price: "179",
  },
  {
    img: "https://5.imimg.com/data5/SELLER/Default/2020/11/TQ/EB/BB/44184428/cham-cham-500x500.jpg",
    title: "Cham Cham(12 pc)",
    content: "Serves 1 | Chum Chum is a soft, sweet, juicy, and has a mix of great texture coming from paneer, mawa, coconut, and pistachios.",
    price: "294",
  },
];

const BmbCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / BMB
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>Bombay Misthan Bhandar</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">Indian Flavour</p>
               <p className="text-sm pl-40 text-stone-400">Ajmeri Gate</p>
               <div className="pl-40">
                 <p className="py-6 text-stone-400">
                   <span className="inline-block">
                     <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="20"
                      viewBox="0 0 640 512"
                    >
                      <path d="M312 32c-13.3 0-24 10.7-24 24s10.7 24 24 24h25.7l34.6 64H222.9l-27.4-38C191 99.7 183.7 96 176 96H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h43.7l22.1 30.7-26.6 53.1c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352s57.3 128 128 128c65.3 0 119.1-48.9 127-112h49c8.5 0 16.3-4.5 20.7-11.8l84.8-143.5 21.7 40.1C402.4 276.3 384 312 384 352c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6L375.4 48.8C369.8 38.4 359 32 347.2 32H312zM458.6 303.7l32.3 59.7c6.3 11.7 20.9 16 32.5 9.7s16-20.9 9.7-32.5l-32.3-59.7c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3zM133.2 368h65c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l-24.2 48.5c-9 18.1 4.1 39.4 24.3 39.4zm33.7-48l50.7-101.3 72.9 101.2-.1 .1H166.8zm90.6-128H365.9L317 274.8 257.4 192z" />
                    </svg>
                  </span>{" "}
                  2.2km | Rs42 will bw applied as Delivery Fee
                </p>
              </div>
            </div>
            <div className="pr-56 pt-20">
              <button className="float-right rounded-none border-2 px-4 py-4">
                <p>
                  <span className="inline-block">
                   <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="18"
                      viewBox="0 0 576 512"
                    >
                      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                    </svg>
                  </span>{" "}
                  4.5
                </p>
                <b>
                  <hr className="py-1 pt-2" />
                </b>
                <p>7k+ ratings</p>
              </button>
            </div>
          </div>
         </div>
       </div> 

        <div className="mt-24 h-screen h-full w-full bg-white">
         <div class="h-screen bg-white pt-4 pb-8">
           <p className="pl-40">
             <span className="inline-block">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pt-1"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
            </span>{" "}
            18 min |
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="10"
                className="pt-1"
                viewBox="0 0 320 512"
              >
                <path d="M0 64C0 46.3 14.3 32 32 32H96h16H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H231.8c9.6 14.4 16.7 30.6 20.7 48H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H252.4c-13.2 58.3-61.9 103.2-122.2 110.9L274.6 422c14.4 10.3 17.7 30.3 7.4 44.6s-30.3 17.7-44.6 7.4L13.4 314C2.1 306-2.7 291.5 1.5 278.2S18.1 256 32 256h80c32.8 0 61-19.7 73.3-48H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H185.3C173 115.7 144.8 96 112 96H96 32C14.3 96 0 81.7 0 64z" />
              </svg>
            </span>{" "}
            200 for two
          </p>
          <div className="py-8">
            <hr className="border-2 justify-center mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" />
          </div>
          {/* <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
          <div class=" pt-12 mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              
              {a2b.map((user) => (
                    <RestrauntProp img={user.img} title={user.title} content={user.content} price={user.price} />
                  ))}

            </div>
          </div>
        </div>
      </div>
     </>
   );
};
          
export default BmbCart;
