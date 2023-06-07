import Image from "next/image";
import "./stylesPage.css";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <>
    <Header/>
      <div className="top-banner">
        <div className="top-banner-heading flex justify-center mt-10">
          {/* <h1 className="tracking-wider font-sans text-center leading-none w-[550px] font-bold bg-gradient-to-r from-[#5180AC] to-blue-300 text-transparent bg-clip-text text-[74px]">
            introducing
            <span className="text-[70px] tracking-normal"> new clintnton.</span>
          </h1> */}
          <img src="./introducing-new-clint.png" width='550px' height={'auto'}/>
        </div>
        <div className="top-banner-heading-desc flex justify-center font-semibold">
          <p className="text-[26px] my-4 text-[#9CC5D9] font-sans">
            Create the best experices
          </p>
        </div>
        <div className="top-banner-buttons flex justify-center">
          <div className="buttons-twice">
            <button className="mr-10 text-[#868686] font-inter">
              Learn more
            </button>
            <button className="bg-[#263676] text-white py-3 px-6 rounded-lg font-inter">
              Shop now
            </button>
          </div>
        </div>
        <div className="top-banner-img flex justify-center my-14">
          <img src="./top-banner-img.png" width={"598px"} height={"400px"} />
        </div>
      </div>
      <div className="top-boxes flex justify-around">
        <div className="higher-presure  w-[48%] bg-grey-common rounded-3xl">
          <div className="higher-presure-heading mt-[93px] flex justify-center">
            <h3 className="font-inter w-[440px] leading-none text-center text-[62px] font-semibold bg-gradient-to-r from-[#5180AC] to-blue-300 text-transparent bg-clip-text">
              High pressure washer
            </h3>
          </div>
          <div className="higher-preesure-button flex justify-center">
            <button className="bg-[#263676] text-white my-9 py-2 px-4 rounded-lg font-inter">
              Shop now
            </button>
          </div>
          <div className="higer-pressure-img flex justify-center">
            <img
              src="./motor-machine.png"
              alt=""
              width="560px"
              height={"408px"}
            />
          </div>
        </div>
        <div className="right-tryion new-arrival w-[48%] flex justify-between rounded-3xl">
          <div className="flex h-full items-center">
            <div className="px-9">
              <div className="text-[#A4B5FC] font-inter text-[21px] my-3">
                Air Compressor
              </div>
              <div>
                <h3 className="font-inter text-[65px] font-semibold text-white w-[256px] leading-[56px]">
                  A new arrival.
                </h3>
                <div>
                  <button className="bg-[#fff] font-medium text-[#27387A] my-9 py-2 px-4 rounded-lg font-inter">
                    Shop now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="new-arrival-img mt-16">
            <img src="./tryion.png" alt="" />
          </div>
        </div>
      </div>
      <div className="top-boxes my-8 flex justify-around">
        <div className="h-[600px]  w-[48%]  rounded-3xl justify-center flex items-center">
          <div className="">
            <p className="text-[#27387A] font-bold font-sukhumvit">
              Payday 11.11 ลดเพิ่ม 20% <br /> เมื่อช้อปออเดอร์แรก! | โค้ด:
              ISMX823 <br />
              ไม่มีขั้นต่ำ รับ Cashback เมื่อสมัคร <br /> ช๊อปดีลสุดปัง
            </p>
            <div>
              <button className="bg-[#263676] text-white my-9 py-2 px-4 rounded-lg font-inter">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-grey-common new-arrival w-[48%] flex justify-between rounded-3xl">
          <div className="">
            <div className="new-arrival-img mt-16">
              <img src="./summer-sales.png" alt="" width={"650px"} />
            </div>
            <div className="px-9 mt-10">
              <div>
                <h3 className="font-inter w-[440px] leading-none text-center text-[53px] font-semibold bg-gradient-to-r from-[#5180AC] to-blue-300 text-transparent bg-clip-text">
                  Summer Sales.
                </h3>
              </div>
              <div className="px-9">
                <p className="text=[#27387A] font-semibold font-sukhumvit">
                  ดูสินค้าลดราคา
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="automatic-pump flex justify-center my-40">
        <div className="w-[60%]">
          <h3 className="text-[#F0A722] font-sans text-[50px] font-semibold leading-none">
            ct-mit 370 <br /> automatic pump
          </h3>
          <p className="text-[#F0A722] font-sukhumvit text-[20px] my-3 font-medium leading-tight">
            Payday 11.11 ลดเพิ่ม 20%เมื่อช้อปออเดอร์แรก! | โค้ด: <br />
            OMG20THไม่มีขั้นต่ำ รับ Cashback เมื่อสมัคร ช๊อปดีลสุดปัง
          </p>
          <h3 className="text-[#F0A722] font-sans text-[50px] font-bold leading-none">
            7,999 บาท
          </h3>
          <div className="flex">
            <button className="bg-[#F0AD22] h-10 text-white my-9 px-4 rounded-lg font-inter">
              Shop now
            </button>
            <img src="./automatic-pump.png" alt="" width={"750px"} />
          </div>
        </div>
      </div>
      <div className="hammer-drill bg-[#243576] flex justify-center">
        <div>
          <img src="./hammer-drill.png" alt="" />
        </div>
        <div>
          <h2 className="hammer-drill-heading font-sans font-b">The hammer drill.</h2>
          <p>Payday 11.11 ลดเพิ่ม 20%เมื่อช้อปออเดอร์แรก! | โค้ด: OMG20THไม่มีขั้นต่ำ รับ Cashback เมื่อสมัคร ช๊อปดีลสุดปัง</p>
          <h4>4,500 บาท</h4>
        </div>
      </div>
    </>
  );
}
