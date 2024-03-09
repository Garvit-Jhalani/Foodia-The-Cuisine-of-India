// import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import RestrauntProp from "./RestrauntProp.jsx";

const Kanha = [
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
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhyESUfTQvpp0rerWWmnsyuLHGj_B1lCPjR6zf5ottKiUAJm-oFIrXuRPTfM7qGVTxwXE&usqp=CAU",
        title: "Onion Dosai",
        content: "Serves 1 | An appetizing dosa made out of rice and lentil batter with a sprinkling of finely chopped onions,coriander, and chilies served with sambar and chutneys",
        price: "145",
      },
      {
        img: "https://img-global.cpcdn.com/recipes/7f71cb9648c3cdcf/1200x630cq70/photo.jpg",
        title: "Rava Masala Dosai",
        content: "Serves 1 | A textured crisp fried dosa made of mildly roasted semolina and rice batter with mildly spiced mashed potatoes, coriander and served with sambar and chutney",
        price: "125",
      },
      {
        img: "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
        title: "Ghee Masala Dosai",
        content: "Serves 1 | A crispy golden brown dosa fried using clarified butter with a spicy filling of mashed potatoes,onions, served with sambar and chutneys",
        price: "145",
      },
      {
        img: "https://s3.ap-south-1.amazonaws.com/shopnowchat.com/Medium/MPRCWSTrjpgrX_CurdVada1Pc.jpg",
        title: "Curd Vadai [1 Pc]",
        content: "Serves 1 | Delicious traditional Indian deep-fried fritters made of ground black lentils batter immersed in fresh creamy yoghurt, garnished with sweet and spicy sauces and ground spices",
        price: "80",
      },
      {
        img: "https://i0.wp.com/gomathirecipes.com/wp-content/uploads/2022/08/3227.jpg?resize=768%2C1024&ssl=1",
        title: "Medhu Vadai",
        content: "Serves 1 | Crispy donut-shaped deep-fried fritters made of ground black lentil batter mixed with finely diced onions, peppercorn, green chilies served with a spicy sambar and chutney",
        price: "60",
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
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKxc_3yaAeoEj_ccX0afr-7VqrxTK-_g5sqT4tb1ssXc41gGkDzSrl2g0XhnZL3nUFQIU&usqp=CAU",
        title: "Kaju Mysore Pak",
        content: "Serves 1 | A decadent textured traditional Indian sweet made of soft cashew nut fudge, all-purpose flour, clarified butter, sugar and flavored with powdered cardamom",
        price: "309.52",
      },
      {
        img: "https://indianhotpot.com/wp-content/uploads/2020/11/Chocolate-burfi-editted-scaled.jpg",
        title: "Chocolate Burfi",
        content: "Serves 1 | A delectable soft textured fudge comprising an upper layer of chocolate and bottom layer of mawa cooked in clarified butter and sugar.",
        price: "204.76",
      },
      {
        img: "https://agrasweetsbanjara.com/cdn/shop/files/MotichurLaddu.jpg?v=1692964253",
        title: "Mothi Laddu",
        content: "Serves 1 | Delicious round orangish colored orbs made out of numerous tiny balls of gram flour deep-fried in clarified butter, soaked in sugar syrup with cashews and saffron strands",
        price: "279.04",
      },
      {
        img: "https://img.onmanorama.com/content/dam/mm/en/food/in-season/images/2019/10/26/athirasam.jpg",
        title: "Athirasam",
        content: "Serves 1 | A delicious textured Southern sweet thats golden brown and shaped like a flat disc made of ground rice powder blended with boiled jaggery, cardamom powder and deep fried in oil",
        price: "192.88",
      },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdTzPO44AVVhChw5LKLQ0b9ExUIDGfNl46jWVhA9lIjOlbYJsRq-JCQOnKJDESO8Ixxpc&usqp=CAU",
    title: "Ghewar Big Rabdi[1 Pc]",
    content: "Ghevar is a rajasthani cuisine disc-shaped sweet cake made with maida (refined wheat flour) and soaked in sugar syrup. Flour, ghee, milk, and water are mixed to make a batter. ",
    price: "349.52",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCAUgYQjrLuSx3I7x105H8FTpl3qqwtBDcraIUOHmBEhW0TpvA9wdRZlYW_6roShLejFM&usqp=CAU",
    title: "Finni Meethi",
    content: "Serves 3",
    price: "188.57",
  },
  {
    img: "https://shop.aubree.in/cdn/shop/products/Web_ChocolateTruffle_1024x1024.jpg?v=1681449307",
    title: "Cake Chocolate Truffle",
    content: "Serves 1 | Photo is just for the representation, Actual product shape and presentation may vary",
    price: "487.29",
  },
  {
    img: "https://shreemsweetsandbakery.com/wp-content/uploads/2021/02/Rainbow-Cake.jpg",
    title: "Cake Rainbow 450 Grm",
    content: "Our in house creamy cake covers all colors of the rainbow.",
    price: "487.29",
  },
  {
    img: "https://www.shreemithai.com/cdn/shop/products/SM_005_800x.jpg?v=1638795974",
    title: "Cake Fresh Fruit 450 Grm ( 1 Pound)",
    content: "Serves 1 | Photo is just for the representation, Actual product shape and presentation may vary.",
    price: "466.10",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOv_6gX95Er3y0yDGLyUetnOICqX3pf1Axu2opQnPyn8l8d6TEUhZRdVmS3Z6DUmmYzQc&usqp=CAU",
    title: "Pastry Pine Apple ( Per Pc )",
    content: "Photo is just for the representation, Actual product shape and presentation may vary",
    price: "63.56",
  },
];

const KanhaCart = () => {
  
  return (
    <>
      <Header />

        <div className="bg-slate-50 w-full">
        <div className="2xl:pb-48 xl:pb-96 xl:mb-96">
          <div className="absolute left-0 right-0 top-24 pb-2 pt-2 ml-0 grid grid-flow-col gap-2 justify-left bg-slate-50 ">
             <div className="bg-slate-50">
               <p className="text-xs text-stone-400 pl-40 py-8">
                 Home / Jaipur / Kanha
               </p>
               <h1 className="text-3xl pl-40 text-4xl font-mono">
                <b>Kanha</b>
               </h1>
               <p className="text-sm pl-40 text-stone-400">Sweets, South Indian</p>
               <p className="text-sm pl-40 text-stone-400">Raja Park</p>
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
                  2.9km | Rs33 will be applied as Delivery Fee
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
                <p>1.5k+ ratings</p>
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
            24 min |
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
            500 for two
          </p>
          <div className="py-8">
            <hr className="border-2 justify-center mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0" />
          </div>
          {/* <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1> */}
          <div class=" pt-12 mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg md:w-2/3">
              
              {Kanha.map((user) => (
                    <RestrauntProp img={user.img} title={user.title} content={user.content} price={user.price} />
                  ))}

            </div>
          </div>
        </div>
      </div>
     </>
   );
};
          
export default KanhaCart;
