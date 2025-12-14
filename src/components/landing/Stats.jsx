const stats = [
  { value: "10,000+", label: "Aktiv İstifadəçi" },
  { value: "50,000+", label: "Paylaşım" },
  { value: "100,000+", label: "Əlaqə" },
  { value: "500+", label: "Mentor" }
];

export default function Stats() {
  return (
    <section className="py-20">
      <div className="wrapper">
        <div className="bg-black rounded-3xl p-12 lg:p-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
