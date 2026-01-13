import Image from "next/image";
import { Check } from "lucide-react";

export default function Reporting() {
  const points = [
    "Summary reports for tax compliance",
    "Export to CSV, PDF, and Excel",
    "Historical data tracking for audits",
  ];

  return (
    <section id="product" className="bg-[#EBEFFE] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 items-center">
          
          {/* Left Content */}
          <div className="mx-auto max-w-xl lg:mx-0">
            <h2 className="text-[40px] font-bold tracking-tight text-gray-900 sm:text-5xl font-istok">
              <span className="text-[#42A5E8] block mb-2">Advanced</span>
              Payroll Reporting
            </h2>
            <p className="mt-6 text-[16px] leading-8 text-[#525252] font-inter">
              Visualize your company&apos;s financial health with real-time reports. 
              Drill down into specific departments, employee groups, or time periods with ease.
            </p>
            
            <ul className="mt-10 space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-x-3">
                  <div className="flex-none rounded-full bg-[#42A5E8] p-1">
                    <Check className="h-4 w-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[16px] font-regular text-[#000000] font-inter">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <Image
              src="/report.png"
              alt="Advanced Payroll Reporting Dashboard"
              width={1000}
              height={800}
              className="w-full h-auto drop-shadow-2xl rounded-xl" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}
