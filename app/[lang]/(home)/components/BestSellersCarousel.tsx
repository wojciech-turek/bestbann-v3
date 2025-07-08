"use client";

import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH5 } from "@/components/shared/TypographyH5";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { getDictionary } from "@/dictionaries";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const BestSellersCarousel = ({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const bestSellersData = [
    {
      id: 1,
      title: "Best Seller Product 1",
      imageSrc: "/imgs/baskets/cork/cork-rectangular.png",
    },
    {
      id: 2,
      title: "Best Seller Product 2",
      imageSrc: "/imgs/baskets/cork/cork-rectangular.png",
    },
    {
      id: 3,
      title: "Best Seller Product 3",
      imageSrc: "/imgs/baskets/cork/cork-rectangular.png",
    },
    {
      id: 4,
      title: "Best Seller Product 4",
      imageSrc: "/imgs/baskets/cork/cork-rectangular.png",
    },
    {
      id: 5,
      title: "Best Seller Product 5",
      imageSrc: "/imgs/baskets/cork/cork-rectangular.png",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const scrollPrev = () => {
    api?.scrollPrev();
  };

  const scrollNext = () => {
    api?.scrollNext();
  };

  return (
    <div className="container mx-auto flex flex-col gap-6 px-9">
      <div className="flex items-center justify-between">
        <TypographyH2 className="text-left">
          <RichText>{dict.home.bestSellers.title}</RichText>
        </TypographyH2>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="lg"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="px-9 bg-transparent border-brown-10"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="px-9 bg-transparent border-brown-10"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="border-y border-beige-2 py-6">
        <div className="container mx-auto">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {bestSellersData.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/4"
                >
                  <div className="flex gap-6">
                    <div className="group relative flex flex-col gap-4">
                      <div className="relative">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          width={324}
                          height={224}
                          className="w-full rounded-2xl"
                        />
                        <Badge className="absolute left-4 top-4 bg-white text-orange-100">
                          {dict.home.bestSellers.bestSellerBadge}
                        </Badge>
                      </div>
                      <TypographyH5>{item.title}</TypographyH5>
                      <Button className="w-full">
                        {dict.buttons.priceButton}
                      </Button>
                    </div>
                    {index < bestSellersData.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="bg-brown-10"
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};
