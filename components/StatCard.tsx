const StatCard = ({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number | string;
  icon: string;
  color: "purple" | "green" | "blue" | "yellow";
}) => {
  const bgMap = {
    purple: "bg-purple-100 text-purple-600",
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-900">
      <div className="flex items-center">
        <div className={`p-2 rounded-lg ${bgMap[color]}`}>{icon}</div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-600 dark:text-white">
            {label}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
