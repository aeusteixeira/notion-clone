import Image from "next/image";

const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-96">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <Image
            src="/documents.png"
            fill
            objectFit="contain"
            alt="Documents"
            className="dark:hidden"
          />
          <Image
            src="/documents-dark.png"
            fill
            objectFit="contain"
            alt="Documents"
            className="hidden dark:block"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/reading.png"
            fill
            objectFit="contain"
            alt="Reading"
            className="dark:hidden"
          />
          <Image
            src="/reading-dark.png"
            fill
            objectFit="contain"
            alt="Reading"
            className="hidden dark:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Heroes;
