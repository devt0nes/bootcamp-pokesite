import Image from "next/image";
import ImageCarousel from '../components/ImageCarousel';
import TypewriterComponent from "../components/TypewriterComponent";

export default function Home() {
  return (
    <div className='text-center'>
    <div className='animate-float'>
        <h1 className='mt-25 text-5xl font-pixelify-sans font-bold text-[rgb(6,0,78)] inline-block'>
            Welcome to
        </h1>
        <div className='flex justify-center items-center'>
            <Image
              src='/title.png'
              alt='Title'
              width={1000}
              height={1000}
              className='mytitle w-[50rem]'
              />
        </div>
    </div>
    <div className='m-10'>
      <h2 className='text-3xl font-bold mb-4 text-[rgb(6,0,78)]'>
      </h2>
      <div className="flex">
        <div className="flex-1/2">

          <div className="container mx-auto w-[70%] text-center">
            <h1 className="bg-[#2e2e2e] text-white py-4 mb-8 text-2xl shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,0px_10px_#00000038,5px_5px_#00000038,-5px_5px_#00000038,inset_0px_5px_#ffffff1f,inset_0px_-5px_#00000030]">
              <div className="font-pixelify-sans font-bold text-3xl text-outline"><TypewriterComponent /></div>
            </h1>

            <button className="text-white font-jersey-15 bg-[#6abc3a] px-10 py-4 mb-2 mr-10 text-lg border-0 shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,0px_10px_#00000038,5px_5px_#00000038,-5px_5px_#00000038,inset_0px_5px_#ffffff36] active:translate-y-[5px] active:shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,inset_0px_5px_#00000038]">
              Link 1
            </button>

            <button className="text-white font-jersey-15 bg-[#d83434] px-10 py-4 mb-2 ml-10 text-lg border-0 shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,0px_10px_#00000038,5px_5px_#00000038,-5px_5px_#00000038,inset_0px_5px_#ffffff36] active:translate-y-[5px] active:shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,inset_0px_5px_#00000038]">
              Link 2
            </button>
            <br /><br />

            <button className="text-white font-jersey-15 bg-[#38667f] px-10 py-4 mb-2 mr-10 text-lg border-0 shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,0px_10px_#00000038,5px_5px_#00000038,-5px_5px_#00000038,inset_0px_5px_#ffffff36] active:translate-y-[5px] active:shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,inset_0px_5px_#00000038]">
              Link 3
            </button>

            <button className="text-white font-jersey-15 bg-[#9f7db1] px-10 py-4 mb-2 ml-10 text-lg border-0 shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,0px_10px_#00000038,5px_5px_#00000038,-5px_5px_#00000038,inset_0px_5px_#ffffff36] active:translate-y-[5px] active:shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,inset_0px_5px_#00000038]">
              Link 4
            </button>
            <br /><br />

            {/*
            <button className="text-white font-jersey-15 bg-[#FF5722] px-10 py-4 mb-2 text-lg border-0 shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,0px_10px_#00000038,5px_5px_#00000038,-5px_5px_#00000038,inset_0px_5px_#ffffff36] active:translate-y-[5px] active:shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,inset_0px_5px_#00000038]">
              Link 5
            </button>

            <button className="text-white font-jersey-15 bg-[#009688] px-10 py-4 mb-2 text-lg border-0 shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,0px_10px_#00000038,5px_5px_#00000038,-5px_5px_#00000038,inset_0px_5px_#ffffff36] active:translate-y-[5px] active:shadow-[0px_5px_black,0px_-5px_black,5px_0px_black,-5px_0px_black,inset_0px_5px_#00000038]">
              Link 6
            </button>
            */}
          </div>


        </div>
        <div className="flex-1/3"><ImageCarousel /></div>
      </div>
    </div>
</div>
  );
}
