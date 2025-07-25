"use client";

import RichText from "@/components/RichText";
import { TypographyH2 } from "@/components/shared/TypographyH2";
import { TypographyH5 } from "@/components/shared/TypographyH5";
import { TypographyP } from "@/components/shared/TypographyP";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { getDictionary } from "@/dictionaries";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

export const CustomerFeedbackCarousel = ({
  dict,
}: {
  dict: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [api, setApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const customerFeedbackData = [
    {
      id: 1,
      name: "John Doe",
      company: "Bakery Inc.",
      avatar: "/imgs/avatars/avatar-1.png",
      review:
        "These bannetons are of the highest quality. Our bread has never been better. The crust is perfect and the crumb is amazing. Highly recommended for any professional baker. The natural materials make a huge difference.",
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "Artisan Breads Co.",
      avatar: "/imgs/avatars/avatar-2.png",
      review:
        "I love these baskets! They are so easy to use and clean. The handmade quality is evident. My customers have noticed the difference in the shape and texture of our sourdough. Will be ordering more for sure.",
    },
    {
      id: 3,
      name: "Peter Jones",
      company: "The Bread Corner",
      avatar: "/imgs/avatars/avatar-3.png",
      review:
        "Excellent product and fantastic customer service. The team was very helpful with my custom order. The engraved bottoms add a beautiful touch to our loaves. A great investment for our bakery.",
    },
    {
      id: 4,
      name: "Sarah Miller",
      company: "The Good Loaf",
      avatar: "/imgs/avatars/avatar-4.png",
      review:
        "I was skeptical about cork baskets, but they are a game-changer. So much easier to clean than traditional rattan. They retain heat perfectly and give the bread a lovely pattern. I'm a convert!",
    },
    {
      id: 5,
      name: "John Doe",
      company: "Bakery Inc.",
      avatar: "/imgs/avatars/avatar-1.png",
      review:
        "These bannetons are of the highest quality. Our bread has never been better. The crust is perfect and the crumb is amazing. Highly recommended for any professional baker. The natural materials make a huge difference.",
    },
  ];

  useEffect(() => {
    if (!api) return;

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

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  const toggleExpanded = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto flex flex-col gap-6 px-0 sm:px-9">
      <div className="flex flex-col sm:flex-row items-center justify-between px-4">
        <TypographyH2 className="text-left">
          <RichText>{dict.home.customerFeedback.title}</RichText>
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
        <div className="container mx-auto px-4">
          <Carousel setApi={setApi} opts={{ align: "start" }}>
            <CarouselContent>
              {customerFeedbackData.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
                >
                  <div className="flex gap-4 h-full">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <Avatar className="size-24">
                          <AvatarImage src={item.avatar} alt={item.name} />
                          <AvatarFallback>
                            {item.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <TypographyH5 className="leading-none">
                            {item.name}
                          </TypographyH5>
                          <TypographyP>{item.company}</TypographyP>
                        </div>
                      </div>
                      <div>
                        <TypographyP
                          className={cn(
                            "overflow-hidden transition-[max-height] duration-200 ease-in-out ",
                            !expanded[item.id]
                              ? "max-h-18 line-clamp-3"
                              : "max-h-96"
                          )}
                        >
                          {item.review}
                        </TypographyP>
                        <Button
                          variant="link"
                          onClick={() => toggleExpanded(item.id)}
                          className="p-0 text-orange-100 font-semibold"
                        >
                          {expanded[item.id]
                            ? dict.buttons.viewLess
                            : dict.buttons.viewMore}
                        </Button>
                      </div>
                    </div>
                    {index < customerFeedbackData.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="bg-brown-10/50"
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
