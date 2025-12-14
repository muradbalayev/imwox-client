import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="wrapper py-20 lg:py-32">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <p className="text-imvox-blue font-medium text-sm tracking-wide uppercase">
            Azərbaycanın peşəkar şəbəkəsi
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Karyeranı{" "}
            <span className="text-imvox-blue">IMVOX</span>{" "}
            ilə qur
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Tələbələri, peşəkarları və mentorları bir platformada birləşdirən 
            Azərbaycanın ilk peşəkar sosial şəbəkəsi.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-black text-white hover:bg-black/90 h-14 px-8 text-base">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            App Store
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base border-2 border-black">
            <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
            </svg>
            Google Play
          </Button>
        </div>

        <div className="flex items-center justify-center gap-8 pt-4">
          <div>
            <p className="text-2xl font-bold">10K+</p>
            <p className="text-sm text-gray-500">İstifadəçi</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div>
            <p className="text-2xl font-bold">50K+</p>
            <p className="text-sm text-gray-500">Paylaşım</p>
          </div>
          <div className="w-px h-10 bg-gray-200"></div>
          <div>
            <p className="text-2xl font-bold">100K+</p>
            <p className="text-sm text-gray-500">Əlaqə</p>
          </div>
        </div>
      </div>
    </section>
  );
}
