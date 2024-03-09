// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const Monarch = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1udyeEfwWqcI3yTX3Z9apvzNZ_noofMO95tX-YFe5m7bhNTz513bdbzV70ZTxP215bxk&usqp=CAU",
    title: "Tomato Andalouse Soup",
    content: "Serves 1 | Herbed,croutons,truffle oil",
    price: "500",
  },
  {
    img: "https://i.ndtvimg.com/i/2018-02/caesar-salad_620x350_51517473796.jpg",
    title: "Caesar Salad",
    content: "A delightfully vivid salad bowl loaded with fresh-cut local Romaine lettuce, shaved parmesan, crouton, in-house caesar dressing and anchovies.",
    price: "550",
  },
  {
    img: "https://vegecravings.com/wp-content/uploads/2017/07/kale-caesar-salad-recipe-step-by-step-instructions.jpg",
    title: "Veg Caesar Salad",
    content: "Serves 1 | Veg",
    price: "475",
  },
  {
    img: "https://i.ytimg.com/vi/s4YsKuoYTe8/sddefault.jpg",
    title: "Biryani Mutton",
    content: "Serves 1 | Mutton biryani",
    price: "1100",
  },
  {
    img: "https://www.potsandpans.in/cdn/shop/articles/biryani_banner.png?v=1666954821",
    title: "Biryani Murgh",
    content: "Serves 1 | Chicken biryani",
    price: "1000",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDJJgSC3S60rzmnr-y2_e8RLW8dn5RlrVSfkgPqoQZ8mhaopDhWlzaiHmM-MC4jZhiBx8&usqp=CAU",
    title: "Biryani Subz",
    content: "Serves 1 | Vegetable biryani",
    price: "900",
  },
  {
    img: "https://img-global.cpcdn.com/recipes/893101ba11fb18f7/1200x630cq70/photo.jpg",
    title: "Murgh Makhmali Kathi Roll",
    content: "Serves 1 | Chicken kathi rolls",
    price: "850",
  },
  {
    img: "https://content.jdmagicbox.com/comp/delhi/c6/011pxx11.xx11.130409112032.i8c6/catalogue/corner-qube-inderpuri-delhi-kathi-rolls-2l0wvif.jpg",
    title: "Chaurasiya Kathi Rolls",
    content: "Serves 1 | Masala paneer",
    price: "750",
  },
  {
    img: "https://4.bp.blogspot.com/-OovmLS_uX_k/XIWCFpHWC3I/AAAAAAAAG6I/fp11UOntlUM8bNn_pbnjq0v_Zu7DchaeQCLcBGAs/s1600/IMG_20190310_165027.jpg",
    title: "Non Veg Club Sandwich",
    content: "Serves 1 | Roasted chicken, cheddar cheese lettuce,tomato,caramelized onion, fried egg bacon(pork)",
    price: "725",
  },
  {
    img: "https://cdn.scrambledchefs.com/wp-content/uploads/2020/05/Grilled-Chicken-5-735x490.jpg",
    title: "Chicken Grilled Sandwich",
    content: "Serves 1 | Grilled chicken",
    price: "725",
  },
  {
    img: "https://i.ndtvimg.com/i/2017-07/grilled-sandwich_620x330_51501068389.jpg",
    title: "Vegetable Grilled Sandwich",
    content: "Serves 1 | Vegetable grilled sandwich",
    price: "675",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpF5ITgS3z3qjNUo4r_YZD_WdH7XMWuMcy14mbWw29M8WKbJPhCEzTczaAG8SNSFBmFYY&usqp=CAU",
    title: "Hi Club Sandwich",
    content: "Serves 1 | Lettuec,zucchini,caramelized,onion,tomato,cucumber,cheddar",
    price: "675",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2DvX7QbhJfM5sJkC-STOjBS4yy7hM47XxVgSPH8UBfIUvwn27PcklK50ftzb7y8zdfo&usqp=CAU",
    title: "Puttanesca",
    content: "Serves 1 | Anchovies, olive oil,olives,tomato choice of spaghettis,penne,farfalle,fetucinni choice of condiment: chilli flakes , oregano",
    price: "950",
  },
  {
    img: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-superJumbo-v2.jpg",
    title: "Carbonara",
    content: "Serves 1 | Bacon,beaten eggs, parmesan cheese choice of spaghettis,penne,farfalle,s choice of condiments: chilli flakes, oregano",
    price: "950",
  },
  {
    img: "https://norecipes.com/wp-content/uploads/2023/09/pomodoro-sauce-spaghetti-005.jpg",
    title: "Pomodoro",
    content: "Serves 1 | Choice of spaghettis,penne,farfalle,fetucinni",
    price: "850",
  },
  {
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/3/4/3/FNM_040113-Pasta-Primavera-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371614160264.jpeg",
    title: "Primavera",
    content: "Serves 1 | Choice of spaghettis,penne,farfalle,fetucinni",
    price: "850",
  },
  {
    img: "https://www.iheartnaptime.net/wp-content/uploads/2020/05/fresh-fruit-platter.jpg",
    title: "Fresh Fruits Platter",
    content: "Serves 1 | Fresh fruits",
    price: "500",
  },
  {
    img: "https://www.recipetineats.com/wp-content/uploads/2020/03/Brownies_0-SQ.jpg?w=500&h=375&crop=1",
    title: "Chocolate Brownie",
    content: "Serves 1 | Moist chocolate cake",
    price: "500",
  },
];

const MonarchCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / Monarch
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>Monarch Restraunt</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">Indian, Chinese</p>
               <p className="text-sm pl-40 text-stone-400">Bais Godam</p>
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
                  4.9km | Rs32 will be applied as Delivery Fee
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
                <p>10+ ratings</p>
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
            48 min |
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
            800 for two
          </p>
          <div className="py-8">
            <hr className="border-2 justify-center mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" />
          </div>
          {/* <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
          <div class=" pt-12 mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              
              {Monarch.map((user) => (
                    <RestrauntProp img={user.img} title={user.title} content={user.content} price={user.price} />
                  ))}

            </div>
          </div>
        </div>
      </div>
     </>
   );
};
          
export default MonarchCart;
