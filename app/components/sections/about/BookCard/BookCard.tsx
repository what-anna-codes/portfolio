"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Book } from "./BookCardTypes";

export const BookCard = ({ filename, title, author, quote }: Book) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative w-40 shrink ${quote ? "cursor-pointer" : "cursor-default"} select-none perspective-[2000px]`}
      style={{
        aspectRatio: "490 / 733",
        overflow: isOpen && quote ? "visible" : "hidden",
      }}
      onClick={() => (quote ? setIsOpen(!isOpen) : null)}>
      <div className="absolute inset-0 w-full h-full rounded-r-xl p-2 bg-amber-50 border border-amber-200 border-l-0 shadow-inner flex flex-col justify-between items-center text-center">
        <div className="absolute top-0 bottom-0 left-0 w-4 bg-linear-to-r from-black/10 to-transparent" />
        <div className="flex-1 flex flex-col justify-center items-center pl-1">
          <span className="text-xl font-bold text-stone-800/30 font-serif mb-1">
            “
          </span>
          <p className="text-neutral-900/70 font-serif italic text-sm leading-snug overflow-y-auto max-h-50 text-left">
            {quote || "No quote available for this title."}
          </p>
          <span className="text-xl font-bold text-stone-800/30 font-serif mt-1">
            ”
          </span>
        </div>
      </div>
      <motion.div
        className="absolute inset-0 w-full h-full origin-left transform-3d z-20"
        animate={{ rotateY: isOpen ? -170 : 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="absolute inset-0 w-full h-full rounded-r-xl overflow-hidden shadow-md border border-gray-200 backface-hidden">
          <img
            src={`/img/books/${filename}`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-black/20" />
          <div className="absolute top-0 bottom-0 left-1.5 w-px bg-white/10" />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent p-4 flex flex-col justify-end">
            <motion.h3
              layout
              initial={{ webkitLineClamp: 2 }}
              transition={{
                duration: 0.5,
                delay: 0,
                bounce: 400,
                type: "spring",
                ease: "easeIn",
              }}
              animate={{ webkitLineClamp: isHovered ? 4 : 2 }}
              className="text-shadow-md text-shadow-neutral-800 z-4 text-gray-100 font-bold text-lg leading-tight line-clamp-2">
              {title}
            </motion.h3>
            <p className="text-gray-200 text-shadow-md text-shadow-neutral-800 text-sm mt-1">
              {author}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 w-full h-full rounded-l-xl bg-amber-100 border border-amber-200 shadow-sm [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="absolute top-0 bottom-0 right-0 w-3 bg-gradient-to-l from-black/5 to-transparent" />
          <div className="w-full h-full border-4 border-amber-50/50 m-0 rounded-l-lg opacity-40" />
        </div>
      </motion.div>
    </div>
  );
};
