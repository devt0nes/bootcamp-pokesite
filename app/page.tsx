import Image from "next/image";

export default function Home() {
  return (
    <div className='text-center'>
    <div className='animate-float'>
        <h1 className='mt-25 text-5xl font-pixelify-sans font-bold text-[rgb(6,0,78)] inline-block'>
            Welcome to
        </h1>
        <div className='flex justify-center items-center'>
            <img src={'title.png'} className='mytitle w-[50rem]' />
        </div>
    </div>
</div>
  );
}
