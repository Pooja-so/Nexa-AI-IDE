import WorkflowCard from "./WorkflowCard";
import { Layout, Code2, BugOff, Brain } from "lucide-react";

export default function WorkflowSection() {
  const steps = [
    {
      icon: <Layout className="w-12 h-12" />,
      step: "Choose a Template",
      description:
        "Start your project quickly with built-in templates and organized folder structure.",
      colorClass: "text-purple-500",
    },
    {
      icon: <Code2 className="w-12 h-12" />,
      step: "Write Code",
      description:
        "Develop your project efficiently with syntax highlighting and intelligent autocompletion.",
      colorClass: "text-blue-500",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      step: "AI Assistance",
      description:
        "Get real-time AI suggestions and guidance directly inside the editor.",
      colorClass: "text-orange-500",
    },
    {
      icon: <BugOff className="w-12 h-12" />,
      step: "Debug & Fix",
      description:
        "Quickly identify and resolve issues using the built-in debugging tools.",
      colorClass: "text-red-500",
    },
  ];

  return (
    <section id="workflow" className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800 dark:text-gray-100">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <WorkflowCard key={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
