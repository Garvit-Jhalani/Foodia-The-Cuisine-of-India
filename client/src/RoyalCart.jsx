// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const Royal = [
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    title: "Full So Cheese Pizza [7 Inches]",
    content: "Triple cheese flavour.",
    price: "179",
  },
  {
    img: "https://theclubcafe.in/cdn/shop/products/veg-fuly-loaded3_640x.png?v=1597865503",
    title: "Fully Loaded Pizza [7 Inches]",
    content: "Jalapeno, tomato, corn and mushroom.",
    price: "179",
  },
  {
    img: "https://lh3.googleusercontent.com/50NSoyJm2XbiVAHirnNU3Q8cXtHBloonwtHg-o-Eni6r8rqSnBqTQQYuZmI8FBeJcd720bEKlaVVWzqLNhi_uCGbH1cGRgPzdoNs9zgH=w512-rw",
    title: "Makhani Veg Pizza [7 Inches]",
    content: "t has lovely makhani sauce with the cheese makes special in taste.",
    price: "179",
  },
  {
    img: "https://www.foodorderkar.com/wp-content/uploads/2022/02/Screenshot_2022-02-11-14-40-35-8.jpg",
    title: "Cheese Capsicum Pizza [7 Inches]",
    content: "Fresh capsicum for that lip-smacking?taste.",
    price: "158",
  },
  {
    img: "https://storage.googleapis.com/shy-pub/285347/1683898758033_SKU-0672_0.jpg",
    title: "Cheese Corn Single Topping Pizza [7 Inches]",
    content: "Sweet & juicy golden corn for that lip smacking?taste.",
    price: "158",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLTcOf4sxC5o7zU8zTjt1ggBl2HwmwrOTLLkL3dH5BOxuFPHqX9Sx3Iw80t4S3mxs-kA&usqp=CAU",
    title: "Cheese Onion Pizza [7 Inches]",
    content: "The pizza mania classic, crunchy onion on a cheesy base.",
    price: "158",
  },
  {
    img: "https://i.ytimg.com/vi/H86VIObTaQU/maxresdefault.jpg",
    title: "Cheese Tomato Single Topping Pizza [7 Inches]",
    content: "Juicy tomato in a flavorful?combination with cheese & tangy sauce.",
    price: "158",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/09/96/28/a5/domino-s-pizza.jpg",
    title: "5 Pepper Pizza",
    content: "Capsicum, red pepper, jalapeno, red and yellow bell pepper.",
    price: "339",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVSSg9A0CJNfLxcJJeiugU1NLbm0Yz5a6_AAW5wiFTFG_ltjbHYZTtCgiw3lsWGcRHBQ&usqp=CAU",
    title: "Fresh Veggie Pizza",
    content: "Onion and capsicum.",
    price: "269",
  },
  {
    img: "https://i2.wp.com/thehappyhousewife.com/cooking/files/2013/07/IMG_3502.jpg",
    title: "Garden Fresh Pizza",
    content: "Onion, capsicum, tomato and mushroom.",
    price: "279",
  },
  {
    img: "https://lh3.googleusercontent.com/KNSE2AxuFR8CFFwnFHAEhWFqAOXEwzYme_nUPGJ2m86HG3_4emrrRpKx6r5yic_orWRh04cptrAC9CZKp1IbhfZlsA0xySUUUjalFVQ=w512-rw",
    title: "Green Mexicano Twist Pizza",
    content: "Onion, capsicum, tomato and jalapeno.",
    price: "279",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5i9knivyoXKC4LJx5v4ylLhdXx2fvfjJTgwRDDg2IgYp3arrsIRXwEzBgLNLOYdLKCs8&usqp=CAU",
    title: "Green Paradise Pizza",
    content: "Capsicum, corn, black olive, paneer and red pepper.",
    price: "299",
  },
  {
    img: "https://imademycake.com/wp-content/uploads/2022/07/paneermakhnipizza11-800x530.jpeg",
    title: "Makhani Paneer Pizza",
    content: "An exotic combination of paneer and capsicum having mozzarella cheese spread all over.",
    price: "199",
  },
  {
    img: "https://kolkatagifts.ca/cdn/shop/products/06c9dcc4f29d4c1ef77171844560a410.jpg?v=1659241938",
    title: "Paneer Paprika Pizza",
    content: "Capsicum, red paprika and paneer.",
    price: "299",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/lingo/hrb/images/story/202308/bt-hb_lead_6-sixteen_nine.png?size=945:532",
    title: "Pizzeria Special Pizza",
    content: "Onion, capsicum, tomato, mushroom, corn, black olive, jalapeno with extra cheese.",
    price: "339",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1rM7K7tX8kpdqTq-X7Rs9KBrWN4B_Jg9oPCDXYr7zFfsApzG3FSsAa_iytEZd8227iI&usqp=CAU",
    title: "Pizzeria Veggie Delight Pizza",
    content: "Onion, capsicum, corn, mushroom and paneer tikka.",
    price: "299",
  },
  {
    img: "https://www.bunsinmyoven.com/wp-content/uploads/2023/09/thumb-4.jpg",
    title: "Cheese French Fries",
    content: "Serves 1",
    price: "157",
  },
  {
    img: "https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries.jpg",
    title: "French Fries",
    content: "Serves 1",
    price: "137",
  },
  {
    img: "https://cdn5.newsnationtv.com/images/2021/06/02/french-fries-35.jpg",
    title: "Peri Peri French Fries",
    content: "Serve 1",
    price: "147",
  },
  {
    img: "https://s7d1.scene7.com/is/image/mcdonalds/DC_202112_0652_MediumDietCoke_Glass_2_832x472:1-3-product-tile-desktop?wid=765&hei=472&dpr=off",
    title: "Coke",
    content: "Serve 1| Medium Coke",
    price: "89",
  },
  {
    img: "https://e7.pngegg.com/pngimages/746/579/png-clipart-clear-drinking-glass-fanta-cup-with-orange-liquid-fanta-orange-in-a-glass-food-fanta.png",
    title: "Fanta",
    content: "Serve 1| Medium Fanta",
    price: "89",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLDuu576x9YceszmCHIdWn2LD6txP2Lmly0aDd-2w_lC2S3k0qLL_U2WO9a1aO87Jsx78&usqp=CAU",
    title: "Sprite",
    content: "Serve 1| Medium Sprite",
    price: "89",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHG84kIH4xR9sC4WAN9UF_iEd4l9Pm4K13yA&usqp=CAU",
    title: "Cold Coffee",
    content: "A rich smooth creamy cold coffee made with coffee powder and milk.",
    price: "129",
  },
];

const RoyalCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / The Royal Pizza
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>The Royal Pizza</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">Pizzas, Pastas</p>
               <p className="text-sm pl-40 text-stone-400">Malviya Nagar</p>
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
                  14.3km | Rs52 will be applied as Delivery Fee
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
                  2.7
                </p>
                <b>
                  <hr className="py-1 pt-2" />
                </b>
                <p>100+ ratings</p>
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
            46 min |
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
              
              {Royal.map((user) => (
                    <RestrauntProp img={user.img} title={user.title} content={user.content} price={user.price} />
                  ))}

            </div>
          </div>
        </div>
      </div>
     </>
   );
};
          
export default RoyalCart;
