// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const a2b = [
  {
    img: "https://lh3.googleusercontent.com/dZYWfjP7hwAIwyWerWfMvlQFLoXvHaifziehwbqrNZixgV303Upg7_hSuSFiXQNAPIlTBoZ2h4_6sHNt5e0GS0BzXO3-0z198XyUhtY=w512-rw",
    title: "Masala Patty",
    content: "A delectable and flavorsome patty bursting with aromatic spices, perfect for a vegetarian delight.",
    price: "50",
  },
  {
    img: "https://img-global.cpcdn.com/recipes/44c231a0729e40cb/1200x630cq70/photo.jpg",
    title: "Aloo Tikki Burger",
    content: "A mouthwatering fusion of flavors, this veggie burger encases a delectable potato patty in a soft, toasted bun.",
    price: "70",
  },
  {
    img: "https://dms.mydukaan.io/original/jpeg/962146/b2c31330-ac68-4085-9bb4-cf2d768667d5.png",
    title: "Maharaja Burger",
    content: "A royal delight for burger enthusiasts, packed with the perfect blend of flavors and textures.",
    price: "160",
  },
  {
    img: "https://images.aws.nestle.recipes/original/f7b71bf75bddb35c41fbf95f86cbfa7f_A42I0874.jpg",
    title: "Cheese Maggi",
    content: "A perfect blend of creamy cheese with warm, comforting Maggi noodles, offering a delectable treat for cheese lovers.",
    price: "120",
  },
  {
    img: "https://www.seriouseats.com/thmb/YBUAG17xy1nWYGPmFcJKeoODTzk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cheese-sauce-for-cheese-fries-and-nachos-hero-01-e6ccf966688c43ec8025cf9a19678423.jpg",
    title: "Cheese Nachos",
    content: "Served with 3 types of dips.",
    price: "170",
  },
  {
    img: "https://www.bunsinmyoven.com/wp-content/uploads/2023/09/thumb-4.jpg",
    title: "Cheesy French Fries",
    content: "Irresistibly indulgent and oozing with gooey goodness, these Cheesy French Fries are a dream come true for potato enthusiasts.",
    price: "180",
  },
  {
    img: "https://c.ndtvimg.com/2023-06/nl2hone_grilled-sandwich-3_625x300_08_June_23.jpg",
    title: "Tandoori Paneer Sandwich",
    content: "A scrumptious sandwich filled with flavorful tandoori paneer, perfect for satisfying those veggie cravings.",
    price: "160",
  },
  {
    img: "https://lh3.googleusercontent.com/Og_9IIEi3a947pdOfzF7Olp573aNpdmTQJRvfShBDwTFWVMOAXbzwVsM8HWZP8q-UHIaAW6hHLIAXQSdOxTM2UyUIq8TtPQoIvqzx6CS=w512-rw",
    title: "Margherita pizza 11'",
    content: "The best versions feature mozzarella and parmesan cheese over a zesty tomato sauce.",
    price: "140",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQa0a6kQ8dxk0GQDVHa8uKqc4A-lKzt4cLU_QORyTqritR5Fa4dUtojp0soFBrcYbyJUI&usqp=CAU",
    title: "Basil corn pizza",
    content: "The best versions feature mozzarella cheese and corn over a zesty tomato sauce, and include plenty of fresh basil.",
    price: "180",
  },
  {
    img: "https://curefoods-images.eatfit.in/tr:w-600,ar-0.8,c_fit//image/singles/eat/meals/HRX64/primary/2_1.jpg",
    title: "Spicy paneer pizza",
    content: "Experience the tantalizing flavors of our veg pizza topped with succulent paneer, bringing together the perfect blend of aromatic spices and rich, melty cheese.",
    price: "280",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgch8alsy_hdBFdKJqmNw-5LdjjDn4aPKiQqinVD_9HWtbk1K6nw7aBt89ompV7-jSB5E&usqp=CAU",
    title: "Cold Coffee",
    content: "Creamiest Coffee",
    price: "60",
  },
  {
    img: "https://www.chitskitchen.com/wp-content/uploads/2019/07/Main-01-1.jpeg",
    title: "Chocalate Cold Coffee",
    content: "Rich and creamy cold coffee infused with indulgent chocolate flavor.",
    price: "80",
  },
  {
    img: "https://www.allrecipes.com/thmb/WHCPQvm9fVRlT-rvB8Otkfmh9pQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1114924-47012b7fc569405eb353befed629b182.jpg",
    title: "Cranberry Shake",
    content: "A refreshing and fruity beverage that perfectly balances the tartness of cranberries with a smooth and creamy texture.",
    price: "200",
  },
  {
    img: "https://palatablepastime.com/wp-content/uploads/2021/10/peach-milkshake-sq.jpg",
    title: "Peach Lavender Shake",
    content: "A fragrant, refreshing shake that combines sweet peaches with aromatic lavender for a delightful sipping experience.",
    price: "240",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3H1Ta5vX6xhQ8dsRQM7Gse3t3qO1Auvj1ouSpSlfHyxCXUhQMLC960lRBhhCWViTmIIs&usqp=CAU",
    title: "Choclate Oreo Shake",
    content: "Indulge in the ultimate chocolaty delight, blending Oreo cookies into a creamy, decadent shake.",
    price: "200",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB5QNOVBvRxWDqmhHhwYy9QBn4PAFnyFaNFVzVJg7oN8lJctcOsSW9ttU9LQsujLjUI-Y&usqp=CAU",
    title: "Choclate Traffic Jam Shake",
    content: "Made Of Kitkat Oreo & Nuttella Magical Choclate Shake",
    price: "200",
  },
  {
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/8/7/0/QF0311H_watermelon-mint-iced-tea-greek-inspired-recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1389121735548.jpeg",
    title: "Watermelon Ice Tea",
    content: "A refreshing blend of tea and juicy watermelon that will quench your thirst and transport you to summer bliss.",
    price: "140",
  },
  {
    img: "https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2023/2/16/lemon-tea.jpg",
    title: "Lemon Tea",
    content: "A refreshing blend of tea and lemon that will quench your thirst.",
    price: "120",
  },
  {
    img: "https://lh3.googleusercontent.com/jbUHuwUD3Fp46wCgTIKSzqH3IUdPgMGGgUr_t8eW3G4kTBBPeSiOzaGlA5_lv2XUiWOT0E1Hg0uGRRsE58ZPdXj7oCljLq5GW0n9UT4=w512-rw",
    title: "Bubblegum Ice Tea",
    content: "A delightful mix of white and green teas, sweet Michigan cherries, lively floral notes from hand-picked rose petals, and an all-organic bubble gum flavor.",
    price: "140",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDh85HadmxsE7NkIqMVqWsj9nxhSdILAeykaq8uK0pCKjSxHhmTvd5Vvo8nZeYZW5-o6A&usqp=CAU",
    title: "Cranberry Ice Tea",
    content: "A very pleasant infusion to drink has the majority of fruit teas, many benefits for our health, especially for our urinary system.",
    price: "140",
  },
];

const FpfCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / Fruit Punch Food
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>Fruit Punch Food</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">Indian Flavour</p>
               <p className="text-sm pl-40 text-stone-400">Jawahar Nagar</p>
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
                  1km | Rs26 will be applied as Delivery Fee
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
                  4.3
                </p>
                <b>
                  <hr className="py-1 pt-2" />
                </b>
                <p>1k+ ratings</p>
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
          
export default FpfCart;
