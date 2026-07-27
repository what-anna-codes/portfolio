"use client";
import { motion } from "motion/react";
import { Book } from "./BookCardTypes";

export const BookCard = ({ book }: { book: Book }) => {
  const { filename, title, author } = book;

  return (
    <div className="relative w-38" style={{ aspectRatio: "490 / 733" }}>
      <div className="hover:shadow-sm brightness-90 contrast-110  absolute inset-0 w-full h-full  rounded-r-xl overflow-hidden shadow-md border border-gray-200 backface-hidden">
        <img
          src={`/img/books/${filename}`}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-tl from-black/20 via-transparent to-transparent flex flex-col justify-end">
          <motion.div
            layout
            whileHover={{ opacity: 1, x: -4 }}
            transition={{
              duration: 0.3,
              bounce: 10,
              type: "tween",
              ease: "easeIn",
            }}
            animate={{ opacity: 0, x: 2 }}
            className="h-full w-40 flex flex-col items-end justify-end gap-6 text-right backdrop-brightness-50 z-10 text-gray-100/96 tracking-wider text-shadow-md text-shadow-neutral-800 font-accent leading-6 p-2 pr-4 pl-6 bg-linear-to-tl from-black/65 to-black/35">
            <big>{title}</big>
            <small>{author}</small>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
