import { Carousel } from "@/app/components/ui/Carousel/Carousel";
import { BookCard } from "../BookCard/BookCard";
import { Book } from "../BookCard/BookCardTypes";
import "./BookCarousel.css";
import { CarouselItem } from "@/app/components/ui/Carousel/CarouselTypes";

export default function BookCarousel({ books }: { books: Book[] }) {
  return (
    <div className="book-carousel overflow-hidden w-full pt-8 pb-24 px-0 max-w-5xl mx-auto">
      <Carousel
        activeId={books[1]?.id}
        items={books as unknown as CarouselItem[]}>
        {books.map((book, index) => (
          <div key={index} className="embla__slide">
            <BookCard book={book} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
