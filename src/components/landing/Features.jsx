import { Users, MessageCircle, Shield, Briefcase, MessagesSquare, UserCheck } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Peşəkar Şəbəkə",
    description: "Sahənizdəki mütəxəssislərlə əlaqə qurun və peşəkar şəbəkənizi genişləndirin."
  },
  {
    icon: UserCheck,
    title: "Mentorluq Proqramı",
    description: "Təcrübəli peşəkarlardan rəhbərlik alın və karyeranızı inkişaf etdirin."
  },
  {
    icon: MessagesSquare,
    title: "Müzakirələr və Paylaşımlar",
    description: "Fikirlərinizi bölüşün, müzakirələr başladın və cəmiyyətlə əlaqə qurun."
  },
  {
    icon: MessageCircle,
    title: "Birbaşa Mesajlaşma",
    description: "Digər istifadəçilərlə şəxsi söhbətlər aparın və əlaqələrinizi gücləndirin."
  },
  {
    icon: Briefcase,
    title: "Karyera İnkişafı",
    description: "Peşəkar profilinizi yaradın və karyera imkanlarını kəşf edin."
  },
  {
    icon: Shield,
    title: "Təsdiqlənmiş Profillər",
    description: "Təsdiq nişanları ilə etibarlı əlaqələr qurun və güvənli şəbəkə yaradın."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="wrapper">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-imvox-blue font-medium text-sm tracking-wide uppercase mb-4">
            Xüsusiyyətlər
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Karyeranız üçün lazım olan hər şey
          </h2>
          <p className="text-gray-600">
            IMVOX sizə peşəkar inkişaf üçün lazım olan bütün alətləri təqdim edir.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
