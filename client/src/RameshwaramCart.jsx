// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const Rameshwaram = [
  {
    img: "https://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Badam-Milk.jpg",
    title: "Badam Milk",
    content: "Serves 1",
    price: "30",
  },
  {
    img: "https://www.awesomecuisine.com/wp-content/uploads/2009/06/Plain-Dosa.jpg",
    title: "Plain Dosa",
    content: "Serves 1 | Irresistibly crispy dosa cooked to perfection served with chutney and sambhar.",
    price: "70",
  },
  {
    img: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/masala-dosa-2-500x375.jpg",
    title: "Masala Dosa",
    content: "Serves 1 | Crispy crepe made from coarsely ground mix of rice, split black gram, beaten rice and fenugreek. Served with sambhar and chutney",
    price: "85",
  },
  {
    img: "https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg",
    title: "Paneer Tikka Dry",
    content: "Serves 2",
    price: "230",
  },
  {
    img: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/gobi-65-fry.jpg",
    title: "Gobi 65",
    content: "Serves 1",
    price: "160",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXd1EzsSBoFCkpQ0LMwky41ZsvXS1uH2Gvy5xzu5hfBFIIQ96Aj12x-GVBY_hiJxKDghg&usqp=CAU",
    title: "Mushroom Manchurian Gravy",
    content: "Serves 2",
    price: "180",
  },
  {
    img: "https://i.pinimg.com/736x/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg",
    title: "Masala Dosa",
    content: "Serves 1 | A semi-spicy, crispy and delicious dosa with potato masala folded into it.",
    price: "85",
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
    img: "https://vaya.in/recipes/wp-content/uploads/2018/03/Barley-Rava-Idli.jpg",
    title: "Rava Idly",
    content: "Serves 1 | Rava idly [1Nos] (also rave idly) is a variation of the popular South Indian breakfast item idly, made with Rava and curd Serve with aloo sagu and coconut chutney",
    price: "80",
  },
  {
    img: "https://qph.cf2.quoracdn.net/main-qimg-f477d6ea7efd1e6b30ff80b421fcb1e0-lq",
    title: "Mini Tiffin",
    content: "Serves 1 | A delicious traditional platter of fluffy idlis, Medhu Vada, Pongal, Rava Kesari, and a Mini Dosa, served with a spicy sambar and chutneys.",
    price: "165",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYE5vHPypSj1ukQItJJQye7jZF94w2lzboFTpIXCecDf2598w6qSsqwALYP96VH6QSWV0&usqp=CAU",
    title: "Rava Onion Masala",
    content: "Serves 1 | A delicious textured dosa made of semolina, rice and all-purpose flour batter with chopped chilies, onions, pepper corns and coriander served with sambar and chutney.",
    price: "135",
  },
  {
    img: "https://farm8.staticflickr.com/7671/17269221094_6c0b6605a8_z.jpg",
    title: "South Meal",
    content: "Poori ,kurma, rice, sambar,rasam,sweet,papad, curd/curd rice,palya",
    price: "130",
  },
  {
    img: "https://cdn2.hubspot.net/hubfs/546379/Thali.jpg",
    title: "North Meal",
    content: "Roti(2),rice(2 types),curries(3 types),sweet,masala paapd,soup",
    price: "180",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKKBRYUy3W7swOxA9o8BGcyvAlyyY1vvSAV5hjmtLRJThPTDo1NadFNSYAJr61oih8D8&usqp=CAU",
    title: "Cream Of Tomato Soup",
    content: "Serves 1",
    price: "90",
  },
  {
    img: "https://www.nestleprofessional.in/sites/default/files/2021-08/Manchow-Soup.jpg",
    title: "Veg Manchow Soup",
    content: "Serves 1",
    price: "110",
  },
  {
    img: "https://5.imimg.com/data5/DB/YW/CM/SELLER-65134076/500ml-bisleri-mineral-water-bottle.jpg",
    title: "Water Bottle 500ml",
    content: "Water Bottle 500ml ata copper",
    price: "10",
  },
  {
    img: "https://static.toiimg.com/thumb/63799510.cms?imgsize=1091643&width=800&height=800",
    title: "Gulab Jamun(2 pc)",
    content: "Serves 1 | Fried dumplings made of dried milk & dipped in rose cardamom flavoured sugar syrup.",
    price: "40",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe4ftfbxu0g9J4TpAiLe_ut5yfNh4OXO5wFA&usqp=CAU",
    title: "Carrot Halwa",
    content: "(Serves1)",
    price: "60",
  },
  {
    img: "https://www.yourhomebasedmom.com/wp-content/uploads/2017/07/vanilla-ice-cream-recipe-squarejpg-480x270.jpg",
    title: "Vanilla Ice Cream",
    content: "Serves 1",
    price: "70",
  },
];

const RameshwaramCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / Rameshwaram
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>The Rameshwaram Cafe</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">South Veg Restraunt</p>
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
                  8.2km | Rs56 will be applied as Delivery Fee
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
                  4.7
                </p>
                <b>
                  <hr className="py-1 pt-2" />
                </b>
                <p>8k+ ratings</p>
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
            47 MINS |
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
            250 for two
          </p>
          <div className="py-8">
            <hr className="border-2 justify-center mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" />
          </div>
          {/* <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
          <div class=" pt-12 mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              
              {Rameshwaram.map((user) => (
                    <RestrauntProp img={user.img} title={user.title} content={user.content} price={user.price} />
                  ))}

            </div>
          </div>
        </div>
      </div>
     </>
   );
};
          
export default RameshwaramCart;
