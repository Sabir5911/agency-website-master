//@ts-nocheck
"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import serviceContent from "./service";
import Section from "../lib/Section";
import Image from "next/image";
import plus from "../assets/plus.svg";
import icons from "../assets/i.svg";
import holo from "../assets/hollow.svg";
import Showonhover from "./Showonhover";

interface Service {
  title: string;
  price: number;
}

interface CartItem extends Service {
  quantity: number;
}
interface ServiceItem {
  title: string;
  price: number;
}

export default function Services() {
  let [cart, setCart] = useState<CartItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const [selectedService, setSelectedService] = useState<string>(
    serviceContent[selectedIndex].service[0].service
  );
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(-1);

  useEffect(() => {
    if (serviceContent[selectedIndex]?.service?.length) {
      setSelectedService(serviceContent[selectedIndex].service[0].service);
    }
  }, [selectedIndex]);

  const handleAddToCart = (service: Service) => {
    const existingProduct = cart.find((item) => item.title === service.title);
    if (existingProduct) {
      existingProduct.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...service, quantity: 1 }]);
    }
  };
  const handledelete = (title: string) => {
    const existingProduct = cart?.find((item) => item.title === title);
    if (existingProduct && existingProduct.quantity > 1) {
      existingProduct.quantity--;
      setCart([...cart]);
    } else {
      if (title) {
        cart = cart.filter((elm) => elm.title != title);
        setCart([...cart]);
      }
    }
  };

  const totalCost = cart.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );

  return (
    <>
      <div className=" flex flex-col mt-20 justify-center items-center px-5 lg:px-20 " id="pricing">
        <div className="text-center">
          <Section
            Heading="Pricing Plan"
            text1="Secure Pricing: Your App, Your Confidence"
            text2="Empower Your Projects with Transparent Pricing Options: Your Confidence in Secure, Flexible Plans"
          />
        </div>

        <div className="flex bg-[#FAFAFA] flex-col w-full md:flex-row lg:justify-between text-center mt-6 lg:mt-24 overflow-x-auto">
  {serviceContent.map((item, index) => (
    <div
      key={index}
      className={`w-full py-6 flex flex-col justify-center items-center cursor-pointer ${
        index === selectedIndex ? "bg-white" : ""
      }`}
      onClick={() => setSelectedIndex(index)}
      aria-selected={index === selectedIndex}
    >
      <p
        className={`font-medium text-xs lg:text-base ${
          index === selectedIndex ? "bg-[#FFFFFF] text-blue-500" : ""
        }`}
      >
        {item.category}
      </p>
      <p className="text-[10px] mt-1 lg:text-sm">
        {item.description1}
      </p>
    </div>
  ))}
</div>


        <div className="flex flex-col lg:flex-row justify-between  lg:gap-10  w-full mt-6 lg:mt-24 overflow-x-auto">
          <div className="w-full lg:w-[55%] flex flex-col">
            <div className="flex border font-medium text-sm cursor-pointer overflow-x-auto">
              {serviceContent[selectedIndex].service?.map((elm, i) => (
                <span
                  key={i}
                  className={`text-center text-xs  md:text-sm lg:text-base  ${
                    elm.service == selectedService ? "bg-white text-blue-500" : ""
                  } p-6 w-full`}
                  onClick={() => setSelectedService(elm.service)}
                >
                  {elm.service}
                </span>
              ))}
            </div>
            <div className="border-l border-r py-6">
              <div className="flex justify-start pl-4 gap-2">
                <div>
                  <Image src={icons} width={20} height={20} alt="loader" />
                </div>
                <p className="max-w-md text-xs  md:text-sm lg:text-base">
                  {serviceContent[selectedIndex]?.description}
                </p>
              </div>
            </div>
            <div className="overflow-visible">
              {serviceContent[selectedIndex]?.[`${selectedService}`]?.map(
                (elm: ServiceItem, i: number) => (
                  <div className="flex text-xs " key={i}>
                    <div className="border  md:text-sm lg:text-base font-semibold flex justify-start text-wrap pl-4 py-5 w-1/2">
                      <span>{elm.title}</span>
                    </div>
                    <div className="border flex justify-center py-3 w-1/2">
                      <div className="flex w-full justify-around items-center">
                        <span className="font-semibold  md:text-sm lg:text-base">${elm.price}</span>
                        <div className="flex gap-x-2 justify-center items-center">
                          <Button
                            variant="Blue"
                            size="sm"
                            className="flex items-center gap-2 rounded-full"
                            onClick={() => handleAddToCart(elm)}
                          >
                            <Image src={plus} width={15} height={15} alt="loader" />
                            Add
                          </Button>
                          <div
                            className="relative hidden md:block"
                            onMouseEnter={() => setHoveredIndex(i)}
                            onMouseLeave={() => setHoveredIndex(null)}
                          >
                            {i === hoveredIndex ? (
                              <div className="absolute ml-5 w-max z-10">
                                <Showonhover />
                              </div>
                            ) : null}
                            <div>
                              {i === hoveredIndex ? (
                                <Image src={icons} alt="icons" width={25} height={25} className="w-4 h-4"/>
                              ) : (
                                <Image src={holo} alt="icons" width={25} height={25} className="w-4 h-4" />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="border-t-8 border-blue-600 rounded-2xl h-[300px] lg:w-[556px] lg:h-[450px] shadow-2xl overflow-x-auto mt-6 lg:mt-0">
            <div className="rounded-2xl px-5">
              <h2 className="text-center text-xl font-semibold mt-4">Estimate</h2>
              {cart.length === 0 ? (
                <div className="text-center mt-10 text-sm lg:text-base">Please Add Something</div>
              ) : (
                <div className="flex flex-col mt-5">
                  {cart.map((item, i) => (
                    <div key={i} className="flex justify-between p-2 text-xs lg:text-sm">
                      <div className="flex text-xs md:text-base text-wrap">
                        <div>{item.title}</div>
                        <sup className="cursor-pointer ml-1" onClick={() => handledelete(item.title)}>{"x"}</sup>
                      </div>
                      <span className="font-semibold text-xs md:text-base">
                        ${item.price} * {item.quantity}
                      </span>
                    </div>
                  ))}
                  <hr className="my-5" />
                  <div className="flex flex-col items-end">
                    <span className="text-2xl lg:text-3xl font-semibold text-[#0076FF]">
                      ${totalCost.toFixed(3)}
                    </span>
                    <span className="text-sm lg:text-base font-medium text-[#777980]">
                      Estimated Total Cost
                    </span>
                    <span className="text-xs lg:text-sm font-normal text-[#A5A5AB]">
                      Tax Not included
                    </span>
                  </div>
                  <Button variant="Blue" className="mt-5">Contact Sales</Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
