interface TitleHeadingProps {
  title: string;
}

export default function TitleHeading({ title }: TitleHeadingProps) {
  return (
    <div className="flex items-center">
      <h1 className="text-lg font-semibold md:text-2xl">{title}</h1>
    </div>
  );
}
