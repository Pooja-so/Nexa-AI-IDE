import FeatureCard from "./FeatureCard";
import { File, MessageSquare, Zap, Bug, Code, Folder } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <File className="w-10 h-10" />,
      colorClass: "text-purple-500",
      title: "Built-in Project Templates",
      description:
        "Code quickly with ready-to-use project templates for different languages and frameworks.",
    },
    {
      icon: <MessageSquare className="w-10 h-10" />,
      colorClass: "text-blue-500",
      title: "AI Chat Assistant",
      description:
        "Get instant coding help, explanations, and suggestions with the integrated AI chat assistant.",
    },
    {
      icon: <Zap className="w-10 h-10" />,
      colorClass: "text-orange-500",
      title: "AI-Powered Suggestions",
      description:
        "Receive intelligent code suggestions that adapt to your workflow and improve productivity.",
    },
    {
      icon: <Bug className="w-10 h-10" />,
      colorClass: "text-red-500",
      title: "Advanced Debugging",
      description:
        "Easily identify and fix errors with built-in debugging tools.",
    },
    {
      icon: <Code className="w-10 h-10" />,
      title: "Multi-Language Support",
      description:
        "Write code in multiple programming languages with full syntax highlighting and support.",
      colorClass: "text-green-500",
    },
    {
      icon: <Folder className="w-10 h-10" />,
      title: "Customizable Folder Structure",
      description:
        "Organize your projects with a flexible folder structure to match your workflow.",
      colorClass: "text-yellow-500",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default FeatureSection;
