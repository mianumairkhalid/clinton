"use client";

import Image from "next/image";
import "./stylesPage.css";
import Header from "./components/Header/Header";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function Home() {
  return (
    <>
    <div className="w-[100%] overflow-hidden">
      <Header />
      <div className="top-banner">
        <div className="top-banner-heading flex justify-center mt-12">
          <img
            src="./introducing-new-clint.png"
            width="550px"
            height={"auto"}
          />
        </div>
        <div className="top-banner-heading-desc flex justify-center font-semibold">
          <p className="text-[20px] lg:text-[26px] my-4 text-[#9CC5D9] font-sans">
            Create the best experices
          </p>
        </div>
        <div className="top-banner-buttons flex justify-center">
          <div className="buttons-twice">
            <button className="mr-10 text-[#868686] font-inter">
              Learn more
            </button>
            <button className="bg-[#263676] text-white py-2 text-[13px] px-3 lg:text-[16px] lg:py-2 lg:px-4 rounded-lg font-inter">
              Shop now
            </button>
          </div>
        </div>
        <div className="top-banner-img flex justify-center mx-auto my-10 lg:my-14 w-[300px] lg:w-[598px]">
          <img src="./top-banner-img.png" width={"100%"} height={"400px"} />
        </div>
      </div>
      <div className="top-boxes md:flex justify-evenly px-3">
        <div className="higher-presure px-10 sm:mt-0 mt-5 md:w-[48%] bg-grey-common rounded-3xl flex flex-col items-center lg:py-0 py-8 lg:h-[650px]">
          <div className="higher-presure-heading mt-[40px] lg:mt-[93px] flex  justify-center">
            <h3 className="font-inter text-[40px]  lg:w-[440px] leading-none text-center lg:text-[62px] font-semibold bg-gradient-to-r from-[#5180AC] to-blue-300 text-transparent bg-clip-text">
              High pressure washer
            </h3>
          </div>
          <div className="higher-preesure-button flex justify-center">
            <button className="bg-[#263676] text-white my-5 py-2 px-4 lg:my-9 text-[13px] lg:text-[16px] lg:py-2 lg:px-4 rounded-lg font-inter">
              Shop now
            </button>
          </div>
          <div className="flex justify-center">
            <div className="higer-pressure-img w-[230px] lg:w-[560px] flex justify-center">
              <img src="./motor-machine.png" alt="" width={"100%"} />
            </div>
          </div>
        </div>
        <div className="right-tryion sm:mt-0 mt-3 sm:py-0  new-arrivalmt-5 md:w-[48%] flex items-center justify-between rounded-3xl">
          <div className="flex h-full items-center">
            <div className="px-9">
              <div className="text-[#A4B5FC] font-inter leading-6 text-[21px] my-5 lg:my-3">
                Air Compressor
              </div>
              <div>
                <h3 className="font-inter sm:text-[40px] sm:leading-8 text-[35px] lg:text-[65px] font-semibold text-white lg:w-[256px] leading-7 lg:leading-[56px]">
                  A new arrival.
                </h3>
                <div>
                  <button className="bg-[#fff] font-medium text-[#27387A] sm:py-2 sm:px-4 my-7 lg:my-9 py-1 text-[13px] px-2 lg:text-[16px] lg:py-2 lg:px-4 rounded-lg font-inter">
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
      <div className="top-boxes my-3 md:flex px-3 items justify-around">
        <div className="lg:px-0 px-4 h-[310px] lg:h-[600px] mt-5 md:w-[48%]  rounded-3xl justify-center flex items-center">
          <div className="">
            <p className="text-[#27387A] text-[19px] lg:text-[26px] font-bold font-sukhumvit">
              Payday 11.11 ลดเพิ่ม 20% <br /> เมื่อช้อปออเดอร์แรก! | โค้ด:
              ISMX823 <br />
              ไม่มีขั้นต่ำ รับ Cashback เมื่อสมัคร <br /> ช๊อปดีลสุดปัง
            </p>
            <div>
              <button className="bg-[#263676] text-white my-5 lg:my-9 py-1 text-[12px] px-2 lg:text-[16px] lg:py-2 lg:px-4 rounded-lg font-inter">
                Shop now
              </button>
            </div>
          </div>
        </div>
        <div className="bg-grey-common py-8 new-arrivalmt-5 md:w-[48%] items-center flex justify-between rounded-3xl">
          <div className="">
            <div className="new-arrival-img w-[340px] semiLgS:w-[650px] semiMdS:w-[480px]">
              <img src="./summer-sales.png" alt="" width={"100%"} />
            </div>
            <div className="px-3 lg:px-9 mt-10">
              <div>
                <h3 className="text-[35px] font-inter lg:w-[440px] leading-none text-left lg:text-center lg:text-[53px] font-semibold bg-gradient-to-r from-[#5180AC] to-blue-300 text-transparent bg-clip-text">
                  Summer Sales.
                </h3>
              </div>
              <div className="px-0 lg:px-9">
                <p className="text=[#27387A] font-semibold font-sukhumvit text-left">
                  ดูสินค้าลดราคา
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="automatic-pump flex justify-center my-20 lg:my-40">
        <div className="w-[80%] lg:w-[60%]">
          <h3 className="text-[#F0A722] font-sans text-[35px] lg:text-[50px] font-semibold leading-none">
            ct-mit 370 <br /> automatic pump
          </h3>
          <p className="text-[#F0A722] font-sukhumvit text-[20px] my-3 font-medium leading-tight">
            Payday 11.11 ลดเพิ่ม 20%เมื่อช้อปออเดอร์แรก! | โค้ด: <br />
            OMG20THไม่มีขั้นต่ำ รับ Cashback เมื่อสมัคร ช๊อปดีลสุดปัง
          </p>
          <h3 className="text-[#F0A722] font-sans  text-[35px] lg:text-[50px] font-bold leading-none">
            7,999 บาท
          </h3>
          <div className="sm:flex">
            <button className="bg-[#F0AD22] h-10 text-white my-9 px-0 w-[150px] lg:px-4 rounded-lg font-inter">
              Shop now
            </button>
            <div className="mt-5 lg:mt-0 w-[300px] sm:w-[400px] lg:w-[750px]">
              <img src="./automatic-pump.png" alt="" width={"100%"} />
            </div>
          </div>
        </div>
      </div>
      <div className="hammer-drill bg-[#243576] lg:p-0 py-10 px-5 sm:flex-row flex-col-reverse flex justify-center overflow-hidden">
        <div className="pt-10 lg:-ml-0 -ml-10 lg:-mb-0 -mb-10 lg:pt-28 w-[380px] lg:w-[900px]">
          <img
            src="./hammer-drill.png"
            className="-ml-5 -mb-4"
            alt=""
            width={"100%"}
          />
        </div>
        <div className="block lg:flex sm:py-8">
          <div className="self-center">
            <h2 className="hammer-drill-heading lg:leading-tight leading-none lg:mb-0 mb-5 font-sans font-semibold text-[50px] lg:text-[75px]">
              The hammer drill.
            </h2>
            <p className="font-sukhumvit font-medium text-[21px] text-[#B6C3F4]">
              Payday 11.11 ลดเพิ่ม 20%เมื่อช้อปออเดอร์แรก! | โค้ด: <br />
              OMG20THไม่มีขั้นต่ำ รับ Cashback เมื่อสมัคร <br /> ช๊อปดีลสุดปัง
            </p>
            <h4 className="font-sans font-semibold text-[40px] text-[#B6C3F4]">
              4,500 บาท
            </h4>
          </div>
        </div>
      </div>
      <div className="payDay pt-20 lg:pt-44 px-4 lg:px-20">
        <h3 className="font-sukhumvit text-[30px] lg:text-[50px] font-semibold payDay-heading leading-tight">
          Payday 11.11 ลดเพิ่ม <br /> 20%เมื่อช้อปออเดอร์แรก! | โค้ด: <br />
          OMG20THไม่มีขั้นต่ำ รับ Cashback <br /> เมื่อสมัคร ช๊อปดีลสุดปัง
        </h3>
        <div className=" my-20 grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-3 gap-y-10 gap-x-7">
          <div className="">
            <div className="bg-grey-common px-4 rounded-lg flex justify-center items-center h-[330px] pt-4">
              <img src="./drill-product.png" width="190px" />
            </div>
            <p className="text-[#8D8D8D] text-[14px] font-sukhumvit font-medium my-2">
              สว่าน
            </p>
            <h3 className="text-[#595959] text-[16px] font-sukhumvit font-bold">
              CLINTON 6.5 มิล 350 วัตต์
            </h3>
            <h4 className="text-[#595959] text-[16px] font-inter font-semibold my-1">
              ฿ 3,920.00
            </h4>
          </div>

          <div className="">
            <div className="bg-grey-common px-4 rounded-lg flex justify-center items-center h-[330px] pt-4">
              <img src="./battery-product.png" width="190px" />
            </div>
            <p className="text-[#8D8D8D] text-[14px] font-sukhumvit font-medium my-2">
              สว่าน
            </p>
            <h3 className="text-[#595959] text-[16px] font-sukhumvit font-bold">
              CLINTON 6.5 มิล 350 วัตต์
            </h3>
            <h4 className="text-[#595959] text-[16px] font-inter font-semibold my-1">
              ฿ 3,920.00
            </h4>
          </div>

          <div className="">
            <div className="bg-grey-common px-4 rounded-lg flex justify-center items-center h-[330px] pt-4">
              <img src="./cleaner-product.png" width="190px" />
            </div>
            <p className="text-[#8D8D8D] text-[14px] font-sukhumvit font-medium my-2">
              สว่าน
            </p>
            <h3 className="text-[#595959] text-[16px] font-sukhumvit font-bold">
              CLINTON 6.5 มิล 350 วัตต์
            </h3>
            <h4 className="text-[#595959] text-[16px] font-inter font-semibold my-1">
              ฿ 3,920.00
            </h4>
          </div>

          <div className="">
            <div className="bg-grey-common px-4 rounded-lg flex justify-center items-center h-[330px] pt-4">
              <img src="./machine-product.png" width="190px" />
            </div>
            <p className="text-[#8D8D8D] text-[14px] font-sukhumvit font-medium my-2">
              สว่าน
            </p>
            <h3 className="text-[#595959] text-[16px] font-sukhumvit font-bold">
              CLINTON 6.5 มิล 350 วัตต์
            </h3>
            <h4 className="text-[#595959] text-[16px] font-inter font-semibold my-1">
              ฿ 3,920.00
            </h4>
          </div>

          <div className="">
            <div className="bg-grey-common px-4 rounded-lg flex justify-center items-center h-[330px] pt-4">
              <img src="./generate-product.png" width="190px" />
            </div>
            <p className="text-[#8D8D8D] text-[14px] font-sukhumvit font-medium my-2">
              สว่าน
            </p>
            <h3 className="text-[#595959] text-[16px] font-sukhumvit font-bold">
              CLINTON 6.5 มิล 350 วัตต์
            </h3>
            <h4 className="text-[#595959] text-[16px] font-inter font-semibold my-1">
              ฿ 3,920.00
            </h4>
          </div>
        </div>
      </div>
      <div>
        <div className="px-0 sm:px-20 lg:px-52 mt-44 mb-40">
          <div className="flex justify-between">
            <div className="w-[130px] lg:w-[160px]">
              <img
                src="./drill-product.png"
                alt=""
                className="transform -rotate-[15deg] mb-5 lg:mt-10"
                width={"100%"}
              />
            </div>
            <div className="w-[130px] lg:w-[160px]">
              <img
                src="./machine-product.png"
                alt=""
                className="transform -rotate-[15deg] -mt-10"
                width={"100%"}
              />
            </div>
          </div>
          <div className="text-center -mt-10 lg:-mt-28">
            <p className="font-sans font-semibold text-[18px] lg:text-[45px] payDay-heading">
              Payday 11.11 ลดเพิ่ม <br /> 20%เมื่อช้อปออเดอร์แรก! | โค้ด: <br />{" "}
              OMG20THไม่มีขั้นต่ำ รับ Cashback <br /> เมื่อสมัคร ช๊อปดีลสุดปัง
            </p>
          </div>
          <div className="flex justify-between">
            <div className=" w-[130px] lg:w-[160px]">
              <img
                src="./cleaner-product.png"
                alt=""
                className="lg:-mt-4"
                width={"100%"}
              />
            </div>
            <div className="w-[130px] lg:w-[160px] mr-5">
              <img
                src="./battery-product.png"
                alt=""
                className=" transform rotate-[27deg] -mt-0 lg:-mt-10"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
