import Button from "@/components/common/Button";
import CardComponent from "@/components/common/CardComponent";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Background from "../assets/bg.png";
import ellipse from "../assets/Ellipse.svg";

const PlantSection = () => {
  const totalItems = 5;

  return (
    <div
      className="h-auto bg-slate-50 p-12 bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Top Section with Circular Element and Title */}
      <div className="relative flex items-center justify-start">
        {/* Circular Element */}
        <div className="absolute left-0 top-0 w-24 h-24 bg-brown rounded-full ring-8 ring-white">
          <img src={ellipse} alt="Circle" />
        </div>
        {/* Title */}
        <h1 className="text-3xl font-bold text-start p-3 px-8 bg-[#D0D0D0] ml-20">
          Jenis Tumbuhan
        </h1>
      </div>

      {/* Existing Content */}
      <div className="bg-[#D0D0D0] flex flex-col items-start text-start mt-4 p-8 pt-16 rounded-3xl">
        <div>
          Setelah memahami pentingnya tumbuhan dalam ekosistem dan peranannya
          dalam kehidupan manusia, kita dapat beralih ke topik yang lebih
          spesifik, yaitu teknologi yang dapat membantu dalam penanaman
          tumbuhan. Salah satu inovasi yang menarik adalah aplikasi pendeteksi
          tanaman yang cocok ditanami berdasarkan berbagai faktor lingkungan.
        </div>
        <br />
        <div>
          Aplikasi ini memanfaatkan data seperti pH tanah, suhu, tinggi tanah,
          dan kelembaban tanah untuk memberikan rekomendasi tanaman yang paling
          sesuai untuk ditanam di suatu lokasi tertentu. Dengan menggunakan
          teknologi sensor dan analisis data, aplikasi ini dapat membantu petani
          dan penghobi tanaman dalam memilih jenis tumbuhan yang optimal,
          sehingga meningkatkan hasil panen dan kesehatan tanaman.
        </div>
        <Button className="self-end mt-2 p-2 border border-black">
          Detail
        </Button>
        <div className="w-full mt-4">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {Array.from({ length: totalItems }).map((_, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3">
                  <div className="p-1">
                    <CardComponent />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="h-12 bg-[#EFEFEF] hover:bg-[#3D5AF1]" />
            <CarouselNext className="h-12 bg-[#EFEFEF] hover:bg-[#3D5AF1]" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PlantSection;
