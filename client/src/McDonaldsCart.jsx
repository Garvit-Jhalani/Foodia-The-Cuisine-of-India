// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const McDonalds = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/640px-Cappuccino_at_Sightglass_Coffee.jpg",
    title: "Cappuccino",
    content: "A refreshing shot of our signature McCafé coffee made with 100% arabica beans, topped with milk that is steamed to a thick, perfect foam.",
    price: "171.43",
  },
  {
    img: "https://www.foodandwine.com/thmb/CCe2JUHfjCQ44L0YTbCu97ukUzA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Partners-Latte-FT-BLOG0523-09569880de524fe487831d95184495cc.jpg",
    title: "Latte",
    content: "Rich in flavour espresso balanced with steamed milk and a light layer of foam",
    price: "182.86",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWGgQYiog3BGyC1pkXGBOPv6ZkG6BIjWhne6QUgOYzCZ7V5ytTPPojlypQI3hPULNe8vY&usqp=CAU",
    title: "Americano",
    content: "Our Americano is bold and robust, made with our signature McCafé coffee combined with hot water. For coffee aficionados who prefer a bolder cup.",
    price: "171.43",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXWfqmCvQ7K_Q3v2_p9Ol0dnYXF6lRhc4LzzUgN4WvK-uBTdmYuNaCahlHfItxksrur7o&usqp=CAU",
    title: "Mocha Small",
    content: "A refreshing combination of chocolate, our signature McCafé coffee made with 100% Arabica beans and steamed milk, topped off with chocolate syrup.",
    price: "182.86",
  },
  {
    img: "https://supervalu.ie/thumbnail/800x600/var/files/recipes/Hot-Chocolate-sv.ie.jpg",
    title: "Hot Chocolate Small",
    content: "A perfect silky treat made with sinful chocolate steamed with 100% real milk and topped with an even sweeter touch of more chocolate.",
    price: "171.43",
  },
  {
    img: "https://5.imimg.com/data5/FX/HE/MY-33353830/veg-mcmuffin-burger-500x500.png",
    title: "Veg McMuffin®",
    content: "Serve 1",
    price: "91.42",
  },
  {
    img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-hashbrowns:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
    title: "Hash Brown",
    content: "Serve 1",
    price: "44.76",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToWVEeZC0s5wb-0vEyh0zRdb3jwKdoA5hzbZymFina1DfrFY2izJ0CTV2gyeZxNdJCr7A&usqp=CAU",
    title: "Egg & Sausage McMuffin®",
    content: "Serve 1 | Non Veg",
    price: "114.29",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7z6FfoXqf04CosipFGH2YyLHiAgThO6nlv63XnZ1xwQI-dTB5dL50yDiuvgp-CQZEbmo&usqp=CAU",
    title: "McVeggie ®",
    content: "A patty made of potatoes, peas, carrots, beans, onions, red capsicum and a selection of Indian spices, topped with crispy lettuce, mayonnaise, packed into sesame toasted buns.",
    price: "114.29",
  },
  {
    img: "https://mcdonaldsblog.in/wp-content/uploads/2016/06/mcspicy-paneer-1-1.jpg",
    title: "McSpicy® Paneer",
    content: "Crispy and spicy paneer patty with creamy tandoori sauce and crispy lettuce topping.",
    price: "192.38",
  },
  {
    img: "https://5.imimg.com/data5/VD/KI/MY-33353830/mcdonald-spicy-paneer-wrap-500x500.png",
    title: "Big Spicy Paneer Wrap",
    content: "Tender paneer patty with a fiery, crunchy batter coating, dressed with fresh veggies and seasonings, topped with creamy sauce and a dash of mustard and melted cheese.",
    price: "233.33",
  },
  {
    img: "https://im.indiatimes.in/content/2023/Mar/tikki_6418927966115.jpg?w=1200&h=900&cc=1",
    title: "McAloo Tikki Burger®",
    content: "A tikki delight: Potato and peas patty topped with veg sauce, ketchup, tomatoes and onions with toasted buns",
    price: "56.19",
  },
  {
    img: "https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
    title: "McChicken ®",
    content: "Delightfully crispy chicken sandwich with a crispy chicken patty topped with mayonnaise and shredded iceberg lettuce served on a perfectly toasty bun.",
    price: "143.81",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRhmkrYkqTEo7xtNbDhc6NyuRVUZlLJ6Z_KTP6mYtSQIZ3_Sa5mbLvIygVEy6algO600I&usqp=CAU",
    title: "Big Spicy Chicken Wrap",
    content: "Juicy chicken coated with hot and crispy batter, dressed with fresh salad of lettuce, onions, tomatoes and seasonings. Served with creamy sauce and supple cheese slices.",
    price: "240",
  },
  {
    img: "https://sabsastaa.com/wp-content/uploads/2023/10/Happy-Meals-Prices.webp",
    title: "HappyMeal McVeggie®",
    content: "Combo of your Favorite Burger with choice of Beverage, Pineapple tit bits fruit bowl and Surprise Toy!",
    price: "276.19",
  },
  {
    img: "https://mcdonaldsblog.in/wp-content/uploads/2021/07/minion-lede.jpg",
    title: "HappyMeal McAloo Tikki Burger®",
    content: "Combo of your Favorite Burger with choice of Beverage, Pineapple tit bits fruit bowl and Surprise Toy!",
    price: "228.57",
  },
  {
    img: "https://lh3.googleusercontent.com/OmQ7pN3ZBLfSm_mcZlbViqU2UW27qZorNpx_PR5_que0Qt79ko5j2TwhtVLNpAle7rEJ5sxVS_p8rwxqHK7cu7fouZgGN6FICyGORHGs",
    title: "HappyMeal Chicken McGrill®",
    content: "Combo of your Favorite Burger with choice of Beverage, Pineapple tit bits fruit bowl and Surprise Toy!",
    price: "271.43",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZ57EEF5aUaD6qifKjjMvc-9asoosGBaDijUBJDrGlH1VqHphIZbMArmY-_XdXkPD8Dc&usqp=CAU",
    title: "Chocolate Brownie Sundae",
    content: "Sweet temptation! Chocolate Brownie Sundae",
    price: "114.29",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnrrrogGT-jPVd46kAp21tDIbDuzczKrZ7FKkylpRjgCEIz_3Sel3X0r2mQLrBT5woYUk&usqp=CAU",
    title: "McFlurry® Oreo",
    content: "Serve 1",
    price: "120",
  },
  {
    img: "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-BBQ-Dip-30g-4:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
    title: "Barbeque Dip",
    content: "Serve 1| Barbeque Dip",
    price: "21.90",
  },
  {
    img: "https://img.sndimg.com/food/image/upload/q_92,fl_progressive,w_1200,c_scale/v1/img/recipes/13/15/82/mVZmbfYvSG2UODuCqIw6_10%20minute%20mustard%20SITE-2.jpg",
    title: "Mustard Dip",
    content: "Serve 1| Mustard Dip",
    price: "21.90",
  },
  {
    img: "https://img.freepik.com/premium-photo/spicy-chili-sauce-bowl-isolated-white-background_123827-15480.jpg",
    title: "Chilli Sauce",
    content: "Serve 1| Chilli Sauce",
    price: "1.90",
  },
  {
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0652_MediumDietCoke_Glass_2_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    title: "Coke",
    content: "Serve 1| Medium Coke",
    price: "91.43",
  },
  {
    img: "https://e7.pngegg.com/pngimages/746/579/png-clipart-clear-drinking-glass-fanta-cup-with-orange-liquid-fanta-orange-in-a-glass-food-fanta.png",
    title: "Fanta",
    content: "Serve 1| Medium Fanta",
    price: "91.43",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDuu576x9YceszmCHIdWn2LD6txP2Lmly0aDd-2w_lC2S3k0qLL_U2WO9a1aO87Jsx78&usqp=CAU",
    title: "Sprite",
    content: "Serve 1| Medium Sprite",
    price: "91.43",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHG84kIH4xR9sC4WAN9UF_iEd4l9Pm4K13yA&usqp=CAU",
    title: "Cold Coffee",
    content: "A rich smooth creamy cold coffee made with coffee powder and milk.",
    price: "114.29",
  },
];

const McDonaldsCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / McDonald's
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>McDonald's</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">American</p>
               <p className="text-sm pl-40 text-stone-400">Vaishali Nagar</p>
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
                  9.8km | Rs47 will be applied as Delivery Fee
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
                <p>10k+ ratings</p>
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
            38 min |
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
            400 for two
          </p>
          <div className="py-8">
            <hr className="border-2 justify-center mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" />
          </div>
          {/* <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
          <div class=" pt-12 mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              
              {McDonalds.map((user) => (
                    <RestrauntProp img={user.img} title={user.title} content={user.content} price={user.price} />
                  ))}

            </div>
          </div>
        </div>
      </div>
     </>
   );
};
          
export default McDonaldsCart;
