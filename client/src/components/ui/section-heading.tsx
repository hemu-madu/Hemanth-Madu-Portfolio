interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-3">{title}</h2>
      <div className="w-20 h-1.5 bg-secondary mx-auto rounded-full"></div>
      {description && (
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">{description}</p>
      )}
    </div>
  );
}
