import { Sparkles, Database, Brain, BarChart3 } from "lucide-react";

export const projects = [
  {
    icon: Sparkles,
    title: "Image Insight Bot",
    category: "AI • Computer Vision",
    description:
      "AI-powered application that analyzes marketing images, generates captions, detects objects, compares assets, and exports structured JSON for downstream analytics.",
    tech: ["Python", "Gemini Vision", "Streamlit", "JSON", "Prompt Engineering"],
    accent: "from-violet-500 to-blue-500",
  },
  {
    icon: Database,
    title: "FOX Operational Analytics",
    category: "Business Intelligence",
    description:
      "Built Tableau dashboards and optimized SQL queries for enterprise operational analytics, improving dashboard performance by approximately 50%.",
    tech: ["SQL Server", "Tableau", "Performance Tuning", "Data Modeling"],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Brain,
    title: "Customer Churn Prediction",
    category: "Machine Learning",
    description:
      "End-to-end predictive modeling pipeline using feature engineering, model evaluation, explainability, and business recommendations.",
    tech: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
    accent: "from-fuchsia-500 to-purple-500",
  },
  {
    icon: BarChart3,
    title: "Sales Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Interactive executive dashboard for revenue, profit, trends, KPIs, and regional sales performance.",
    tech: ["Power BI", "SQL", "DAX", "Excel"],
    accent: "from-blue-500 to-indigo-500",
  },
];