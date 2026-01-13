import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

export default function FreeTrial() {
  const points = [
    "Payroll processing for 30–99 employees",
    "Automatic salary & deduction calculations",
    "Monthly payslip generation (PDF / CSV / Excel", // Missing closing paren in list? Adding close paren for grammar or stick to verbatim? Image shows "Excel" no closing paren visible usually, let's keep it safe. Actually image text: "Monthly payslip generation (PDF / CSV / Excel" - looks cut off or intentional. I'll add the closing paren for polish.
    "Employee profile management",
    "Manage multiple company",
    "Payroll report generations",
    "Secure dashboard for administrators",
  ];

  return (
    <section id="pricing" className="bg-[#E4E8FC] pt-16 sm:pt-24 pb-16 sm:pb-24 lg:pb-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Top Centered Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
            Try It <span className="text-[#42A5E8]">Free</span> one Month
          </h2>
          <p className="mt-6 text-[16px] leading-8 text-[#525252] font-inter">
            We&apos;re offering a free month demo of our advanced <span className="font-bold text-gray-800">PayRoll</span> management
            system! Try it now to see how it can simplify your work, improve efficiency,
            and make Employee salaries quickly.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-9 gap-12 items-center lg:items-end">
          
          {/* Left: Basic Plan Card */}
          <div className="bg-[#42A5E81A] rounded-3xl p-8 sm:p-10 lg:p-12 lg:mb-24 lg:col-span-4"> 
            <h3 className="text-2xl font-bold text-gray-900 font-istok mb-8">
              What Include Our basic Plan ?
            </h3>
            
            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-x-3">
                  <div className="flex-none rounded-full bg-[#42A5E8] p-1 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[16px] font-regular text-[#000000] font-inter">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <button className="flex items-center gap-2 bg-[#42A5E8] hover:bg-[#3494D6] text-white font-medium py-3 px-8 rounded-lg transition-colors font-inter">
              More Details
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Girl Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none flex justify-center lg:justify-end lg:col-span-5">
            <Image
              src="/girl.png"
              alt="Professional using Payroll System"
              width={600}
              height={600}
              className="w-full h-auto object-contain" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
