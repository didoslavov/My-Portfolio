import Image from 'next/image';

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between py-8">
            <p className="text-oxford-blue dark:text-timberwolf flex-1 text-3xl mb-6 drop-shadow-2xl">I&apos;m Dido Slavov</p>
            <Image
                width={800}
                height={800}
                src="/portfolio-img-bg-light.jpg"
                alt="Picture of me, Dido"
                className="rounded-xl m-auto w-72 h-96 hidden lg:block lg:dark:hidden md:block md:dark:hidden"
            />
            <Image
                width={800}
                height={800}
                src="/portfolio-img-bg-dark.jpg"
                alt="Picture of me, Dido"
                className="rounded-xl m-auto w-72 h-96 hidden lg:dark:block md:dark:block"
            />
        </div>
    );
}
