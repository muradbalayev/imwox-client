const steps = [
  {
    number: "01",
    title: "Qeydiyyatdan keç",
    description: "Tələbə, peşəkar və ya mentor olaraq qeydiyyatdan keçin və hesabınızı yaradın."
  },
  {
    number: "02",
    title: "Profilini yarat",
    description: "Peşəkar profilinizi doldurun, bacarıqlarınızı və təcrübənizi əlavə edin."
  },
  {
    number: "03",
    title: "Əlaqə qur",
    description: "Sahənizdəki insanlarla əlaqə qurun, müzakirələrə qoşulun və şəbəkənizi genişləndirin."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="wrapper">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-imvox-blue font-medium text-sm tracking-wide uppercase mb-4">
            Necə işləyir
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            3 sadə addımda başla
          </h2>
          <p className="text-gray-600">
            IMVOX ilə peşəkar həyatınıza yeni bir səhifə açın.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-7xl md:text-start text-center font-bold text-gray-100 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl md:text-start text-center font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed md:text-start text-center">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="block md:hidden absolute top-8 left-full w-full">
                  <div className="w-1/2 border-t-2 border-dashed border-gray-200"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
