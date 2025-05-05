import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const PhotoCarousel = () => {
    const photos = [
        "https://photos.zillowstatic.com/fp/a83000fe273f1fdfd02b30a9a93f42d4-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/bf40c5414a9996e9469f904713399323-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/31a4e395374ec342d33c75cc2ad0b096-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/b8bd1daa7ab97ed793759adea07660e5-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/b3faab72629ed60d7e1eb3f3d7b04265-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/7cbf46f81c58f14d49093d9bd470a012-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/1afca13bfbf05cc4bc00a9307c008d82-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/4a53f11b815663564662f209babc0031-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/f3383f37c88ca0cb33fc611db3644293-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/c0ac9c23cc03f373c94e89f3a51baabc-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/aad3a9785e731c9a1a845f3b284088d9-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/51f4c8a6358d4ff49d8e5148cb1a21bb-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/0263b794bf349df10437fc996bdfeb5e-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/9ba29eed6293e39a3a36ffb34f8a3623-cc_ft_1536.jpg",
        "https://photos.zillowstatic.com/fp/c9e932199241db9827955b4ceb5c54c9-cc_ft_1536.jpg"
    ];

    return (
        <section className="bg-[#1A3C5A] py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold mb-8 text-[#D4A017] text-center ">Property Photos</h2>
                <Carousel>
                    <CarouselContent>
                    {photos.map((link, index) => (
                           <CarouselItem key={index}>
                           <img
                               src={link}
                               className="w-full h-[50vh] object-cover"
                           />
                           </CarouselItem> 
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>
    );
};

export default PhotoCarousel;