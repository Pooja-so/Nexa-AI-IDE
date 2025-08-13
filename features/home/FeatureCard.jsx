const FeatureCard = ({ icon, title, description, colorClass }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className={` text-3xl mb-4 ${colorClass} `}>
        {icon} {/* Render the passed icon */}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-lg tracking-wide">{description}</p>
    </div>
  );
};

export default FeatureCard;
