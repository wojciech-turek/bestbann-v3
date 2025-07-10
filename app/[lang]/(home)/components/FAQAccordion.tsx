"use client";

import RichText from "@/components/RichText";
import { TypographyP } from "@/components/shared/TypographyP";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Dictionary } from "@/types/dictionary";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import * as React from "react";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "group flex w-full items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="text-left text-xl font-medium">{children}</div>
      <div className="relative ml-4 flex size-10 shrink-0 items-center justify-center rounded-full border">
        <Plus className="size-4 transition-all duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:scale-0" />
        <Minus className="absolute size-4 scale-0 transition-all duration-200 group-data-[state=open]:scale-100" />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export function FAQAccordion({ dict }: { dict: Dictionary }) {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border-t border-brown-20"
      defaultValue="item-0"
    >
      {Object.values(dict.home.faq.questions).map(
        (item: { question: string; answer: string }, index: number) => (
          <AccordionItem
            value={`item-${index}`}
            key={item.question}
            className="border-b border-brown-20"
          >
            <AccordionTrigger>
              <TypographyP>
                <RichText>{item.question}</RichText>
              </TypographyP>
            </AccordionTrigger>
            <AccordionContent>
              <TypographyP>
                <RichText>{item.answer}</RichText>
              </TypographyP>
            </AccordionContent>
          </AccordionItem>
        )
      )}
    </Accordion>
  );
}
