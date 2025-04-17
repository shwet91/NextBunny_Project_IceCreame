"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

export function CarouselSize() {

  const images = [
    "https://i.pinimg.com/736x/0a/4d/a1/0a4da18396bc021448ae03d3f7d6bd5e.jpg",
    "https://i.pinimg.com/736x/5d/c7/ff/5dc7ff1ab82574fdf6d627dc463a9cae.jpg",
    "https://i.pinimg.com/736x/95/ca/1b/95ca1b4255293b033ca0957590651d0d.jpg",
    "https://i.pinimg.com/736x/16/16/e2/1616e2e67b0665a95a67ab11d6f83d27.jpg",
    "https://i.pinimg.com/736x/3a/fe/6d/3afe6d079889a2b0832b112e57e75bbe.jpg",
    "https://i.pinimg.com/736x/a4/3b/d8/a43bd8140c7bda2c489a64824805ff5b.jpg",
    "https://i.pinimg.com/736x/af/7f/e1/af7fe14b33ef1bba615b1c36af8ad572.jpg",
    "https://i.pinimg.com/736x/a1/2f/d7/a12fd7ac83e7b62650f3349c20ff04ad.jpg",
    "https://i.pinimg.com/736x/1a/ea/3b/1aea3bedec31281aebc877a6587e089f.jpg",
    "https://i.pinimg.com/736x/59/27/72/592772c55e3a167f5605d48977ed71ea.jpg"
  ]

  return (
    <div className="w-full flex justify-center items-center">
          <Carousel
      opts={{
        align: "start",
      }}
      className="max-w-sm sm:max-w-7xl w-3/4"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {Array.from(images).map((e, index) : React.JSX.Element => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex relative rounded-lg aspect-square items-center justify-center overflow-hidden p-6">
                  {/* <span className="text-3xl font-semibold">  </span> */}
                 <Image src={`${e}`} alt="the image" fill  className="object-cover" ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  )
}
