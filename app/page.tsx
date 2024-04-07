import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between md:justify-around py-8">
            <div className="flex items-center gap-4">
                <p className="text-raisin-black  dark:text-silver text-3xl mb-6 md:mb-4 drop-shadow-2xl">
                    Hey, I&apos;m Dido Slavov.
                </p>
            </div>
            <Image
                width={800}
                height={800}
                src="/portfolio-img-bg-light.jpg"
                alt="Picture of me, Dido"
                className="rounded-xl w-72 h-96 hidden lg:block lg:dark:hidden md:block md:dark:hidden"
            />
            <Image
                width={800}
                height={800}
                src="/portfolio-img-bg-dark.jpg"
                alt="Picture of me, Dido"
                className="rounded-xl w-72 h-96 hidden lg:dark:block md:dark:block"
            />
        </div>
    );
}
