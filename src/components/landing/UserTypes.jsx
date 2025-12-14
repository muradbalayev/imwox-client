import { GraduationCap, Briefcase, Award } from "lucide-react";

const userTypes = [
  {
    icon: GraduationCap,
    title: "Tələbələr",
    subtitle: "Abituriyentlər və Tələbələr",
    benefits: [
      "Peşəkarlardan məsləhət alın",
      "Karyera yolunuzu planlaşdırın",
      "Təcrübə imkanları tapın",
      "Mentorlarla əlaqə qurun"
    ]
  },
  {
    icon: Briefcase,
    title: "Peşəkarlar",
    subtitle: "İş Həyatında Olanlar",
    benefits: [
      "Təcrübənizi bölüşün",
      "Şəbəkənizi genişləndirin",
      "Yeni imkanlar kəşf edin",
      "Sahənizdə tanının"
    ]
  },
  {
    icon: Award,
    title: "Mentorlar",
    subtitle: "Təcrübəli Rəhbərlər",
    benefits: [
      "Gənclərə rəhbərlik edin",
      "Biliklərinizi paylaşın",
      "Cəmiyyətə töhfə verin",
      "Liderlik bacarıqlarınızı inkişaf etdirin"
    ]
  }
];

export default function UserTypes() {
  return (
    <section id="users" className="py-20 bg-gray-50">
      <div className="wrapper">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-imvox-blue font-medium text-sm tracking-wide uppercase mb-4">
            İstifadəçilər
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Hər kəs üçün bir yer
          </h2>
          <p className="text-gray-600">
            IMVOX fərqli karyera mərhələlərindəki insanları bir araya gətirir.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {userTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-black transition-colors duration-300"
            >
              <div className="w-14 h-14 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                <type.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-1">{type.title}</h3>
              <p className="text-imvox-blue text-sm font-medium mb-6">{type.subtitle}</p>
              <ul className="space-y-3">
                {type.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-imvox-blue shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
