import { BookCard } from "../BookCard/BookCard";
import { Book } from "../BookCard/BookCardTypes";

export default function BookCarousel({ books }: { books: Book[] }) {
  return (
    <div className="w-full max-w-5xl max-h-80 mx-auto px-4 py-12">
      <div className="flex gap-6 overflow-x-scroll pb-6 scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {books.map((book, index) => (
          <div key={index} className="snap-center">
            <BookCard
              filename={book.filename}
              title={book.title}
              author={book.author}
              quote={book.quote}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
