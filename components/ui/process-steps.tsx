import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { anticSlab } from "@/lib/fonts"

export function ProcessSteps() {
  const steps = [
    {
      number: 1,
      content: (
        <div className="flex flex-col items-center justify-between h-full w-full gap-4 py-4">
          <h3
            className={`${anticSlab.className} text-2xl text-center text-black`}
          >
            Book Your Consult
          </h3>
          <div className="relative w-full h-32 flex-grow">
            <Image
              src="/vuult_calendar.png"
              alt="Consultation Calendar"
              fill
              className="object-contain"
            />
          </div>
          <Button
            variant="outline"
            className="w-full text-sm border-2 border-gray-700 hover:border-white hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 rounded-full"
            onClick={() => window.open('https://wa.me/27828880008', '_blank')}
          >
            Contact Us
          </Button>
        </div>
      ),
    },
    {
      number: 2,
      title: 'Design Your Masterpiece',
      description:
        'Work with our expert designers to bring your vision to life',
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/pencil_and_diamond.png"
            alt="Design Icon"
            fill
            className="object-contain"
          />
        </div>
      ),
      content: null,
    },
    {
      number: 3,
      title: 'Receive and Approve',
      description: 'Review and perfect your custom piece',
      icon: (
        <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center">
          <Check className="w-6 text-white" strokeWidth={3} />
        </div>
      ),
      content: null,
    },
    {
      number: 4,
      title: <>Step Out<br />and Shine</>,
      description: 'Wear your unique masterpiece with pride',
      icon: (
        <div className="relative w-16 h-16">
          <Image
            src="/diamond_shine.png"
            alt="Shining Diamond"
            fill
            className="object-contain"
          />
        </div>
      ),
      content: null,
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white rounded-lg border-2 border-gray-200 p-6 flex flex-col items-center relative transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:border-white min-h-[320px]"
          >
                <div className="absolute -top-5 -right-5 w-8 h-8 bg-gray-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {step.number}
                </div>
                {step.content ? (
                  <div className="w-full h-full flex items-center justify-center">
                    {step.content}
                  </div>
                ) : (
                  <div className="flex flex-col h-full justify-between">
                    <div className="flex flex-col items-center">
                      {step.icon && (
                        <div className="flex-shrink-0 h-20 mt-4 mb-4 flex items-center">{step.icon}</div>
                      )}
                      {step.title && (
                        <h3 className={`${anticSlab.className} text-2xl font-bold text-center leading-tight text-black mb-0`}>
                          {step.title}
                        </h3>
                      )}
                    </div>
                    {step.description && (
                      <p className="text-sm text-gray-400 text-center h-16 mt-0">
                        {step.description}
                      </p>
                    )}
                  </div>
                )}
          </div>
        ))}
      </div>
    </div>
  );
}
