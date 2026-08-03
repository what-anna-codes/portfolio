export const TextBlock = ({
  content,
  classNames,
}: {
  content: string;
  classNames?: string;
}) => {
  return (
    <div
      className={`text-pretty pl-12 ${classNames}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
