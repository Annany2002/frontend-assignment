import Link from "next/link";

interface CategoryCardProps {
  title: string;
  description: string;
  artistCount: number;
  icon: string;
  gradient: string;
}

const CategoryCard = ({
  title,
  description,
  artistCount,
  icon,
  gradient,
}: CategoryCardProps) => {
  return (
    <Link href="/explore" className="group block">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 dark:border-none hover:border-purple-200 transform hover:-translate-y-1 dark:bg-gray-900">
        <div
          className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
        >
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 mb-3 dark:text-white">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-purple-600 font-medium">
            {artistCount}+ artists
          </span>
          <span className="text-purple-600 group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
