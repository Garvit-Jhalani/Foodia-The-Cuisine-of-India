// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const Nightjar = [
  {
    img: "https://b.zmtcdn.com/data/dish_photos/bd7/a01972fa6e0bf957ec2a33a4ca768bd7.jpg",
    title: "Masala Patty",
    content: "A delectable and flavorsome patty bursting with aromatic spices, perfect for a vegetarian delight.",
    price: "50",
  },
  {
    img: "https://mitsushahfood.files.wordpress.com/2020/09/photogrid_1599463184657.jpg",
    title: "Bingo Bhel",
    content: "Serves 1",
    price: "100",
  },
  {
    img: "https://www.spiceupthecurry.com/wp-content/uploads/2014/07/aloo-tikki-burger-recipe-9-500x375.jpg",
    title: "Aloo Tikki Burger",
    content: "A mouthwatering fusion of flavors, this veggie burger encases a delectable potato patty in a soft, toasted bun.",
    price: "70",
  },
  {
    img: "https://5.imimg.com/data5/JP/SF/MY-33353830/mcdonald-veg-maharaja-mac-burger-500x500.png",
    title: "Maharaja Burger",
    content: "A royal delight for burger enthusiasts, packed with the perfect blend of flavors and textures.",
    price: "160",
  },
  {
    img: "https://media-cdn.tripadvisor.com/media/photo-s/0e/6f/2b/26/chicken-cheese-burger.jpg",
    title: "Spicy Lava Burger",
    content: "Serves 1",
    price: "120",
  },
  {
    img: "https://truffle-assets.tastemadecontent.net/c2d3bdbb-vid51143-three-cheese-maggi-16x9.jpg",
    title: "Cheese Maggi",
    content: "A perfect blend of creamy cheese with warm, comforting Maggi noodles, offering a delectable treat for cheese lovers.",
    price: "120",
  },
  {
    img: "https://www.bigbasket.com/media/uploads/p/l/800239987_1-rashmi-sweets-namkeen-plain-nachos.jpg",
    title: "Plain Nachos",
    content: "Served with 2 types of dips.",
    price: "120",
  },
  {
    img: "https://i0.wp.com/gatherforbread.com/wp-content/uploads/2016/02/Easy-Nachos-5.jpg?fit=1125%2C750&ssl=1",
    title: "Cheese Nachos",
    content: "Served with 3 types of dips.",
    price: "160",
  },
  {
    img: "https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=800",
    title: "French Fries",
    content: "Serves 1",
    price: "140",
  },
  {
    img: "https://hips.hearstapps.com/hmg-prod/images/cheese-fries-recipe-2-1674497845.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*",
    title: "Cheesy French Fries",
    content: "Irresistibly indulgent and oozing with gooey goodness, these Cheesy French Fries are a dream come true for potato enthusiasts.",
    price: "140",
  },
  {
    img: "https://c.ndtvimg.com/2023-06/nl2hone_grilled-sandwich-3_625x300_08_June_23.jpg",
    title: "Tandoori Paneer Sandwich",
    content: "A scrumptious sandwich filled with flavorful tandoori paneer, perfect for satisfying those veggie cravings.",
    price: "160",
  },
  {
    img: "https://www.watermelon.org/wp-content/uploads/2023/02/Sandwich_2023.jpg",
    title: "Double Tower Sandwich",
    content: "Serves 2",
    price: "160",
  },
  {
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1-500x500.jpg",
    title: "Spicy paneer pizza",
    content: "Experience the tantalizing flavors of our veg pizza topped with succulent paneer, bringing together the perfect blend of aromatic spices and rich, melty cheese.",
    price: "280",
  },
  {
    img: "https://amritfood.com/wp-content/uploads/2021/11/Cold-Coffee.png",
    title: "Cold Coffee",
    content: "Creamiest Coffee",
    price: "60",
  },
  {
    img: "https://www.thehungryelephant.ca/wp-content/uploads/2018/09/keto-mint-chocolate-chip-frappuccino-3.jpg",
    title: "Choco Mint Frappe",
    content: "Serves 1",
    price: "220",
  },
  {
    img: "https://www.bitensip.com/wp-content/uploads/2022/11/kit-kat-shake.jpg",
    title: "Kitkat Shake",
    content: "Serves 1",
    price: "220",
  },
  {
    img: "https://vimmysrecipeworld.com/wp-content/uploads/2016/10/milkshake1.jpg?resize=400%2C410",
    title: "Bubblegum Shake",
    content: "Serve 1",
    price: "220",
  },
];

const NightjarCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / Night Jar
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>Night Jar</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">Snacks, Beverages</p>
               <p className="text-sm pl-40 text-stone-400">Tonk Road</p>
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
                  1.4km | Rs25 will be applied as Delivery Fee
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
                  4.6
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
            22 MINS |
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
              
              {Nightjar.map((user) => (
                    <RestrauntProp img={user.img} title={user.title} content={user.content} price={user.price} />
                  ))}

            </div>
          </div>
        </div>
      </div>
     </>
   );
};
          
export default NightjarCart;
