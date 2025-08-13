export default function WorkflowCard({ icon, step, description, colorClass }) {
  return (
    <div className="bg-white dark:bg-zinc-700 rounded-lg p-6 text-center flex flex-col items-center">
      <div className={`text-4xl mb-4 ${colorClass}`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {step}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-lg tracking-wide">
        {description}
      </p>
    </div>
  );
}
