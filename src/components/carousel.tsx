import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { ElementType, useRef } from "react";

export interface ICarouselItem {
  title: string;
  sub_title: string;
  image?: string;
  onClick?: () => void;
}
interface CarouselProps {
  items: ICarouselItem[];
  children: ElementType;
}

export function Carousel({ items, children: Children }: CarouselProps) {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <CarouselComponent plugins={[plugin.current]} className="w-full rounded-lg">
      <CarouselContent>
        {items.map((it, index) => (
          <CarouselItem key={index}>
            <Children {...it} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </CarouselComponent>
  );
}
