import { CircleDollarSign, MousePointerClick, Users, FileText } from "lucide-react";

const features = [
  {
    title: "Auto Salary",
    description: "Automated calculation of basic pay, overtime, and deductions with 100% accuracy.",
    icon: <CircleDollarSign className="w-6 h-6 text-[#42A5E8]" />,
    bg: "bg-[#E0F2FE]", // lighter blue for icon bg
  },
  {
    title: "One-Click Payslips",
    description: "Generate and distribute professional PDF payslips to your entire staff in seconds.",
    // using MousePointerClick as a proxy for "One-Click"
    icon: <MousePointerClick className="w-6 h-6 text-[#FF6B6B]" />,
    bg: "bg-[#FFE5E5]", 
  },
  {
    title: "Staff Portal",
    description: "Allow employees to access their own payroll history and update personal details.",
    icon: <Users className="w-6 h-6 text-[#4CAF50]" />,
    bg: "bg-[#E8F5E9]",
  },
  {
    title: "Insightful Reports",
    description: "Get detailed analytics on labor costs, tax liabilities, and budget trends.",
    icon: <FileText className="w-6 h-6 text-[#9C27B0]" />,
    bg: "bg-[#F3E5F5]", 
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl font-istok">
            Powerful Features of <span className="text-[#42A5E8]">Payroll</span>
          </h2>
          <p className="mt-4 text-[20px] leading-8 text-[#525252] font-inter">
            Everything you need to handle payroll effortlessly without the manual spreadsheets.
          </p>
        </div>

        {/* Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col rounded-2xl bg-[#E0F2FF5C] p-8 transition-all hover:shadow-lg border border-transparent hover:border-gray-100"
            >
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg}`}>
                {feature.icon}
              </div>
              <h3 className="text-[18px] font-bold leading-7 text-gray-900 font-istok">
                {feature.title}
              </h3>
              <p className="mt-3 text-[14px] leading-6 text-[#525252] font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
