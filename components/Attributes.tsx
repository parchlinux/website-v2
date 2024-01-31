import Image from 'next/image';

export default function Attributes() {
  return (
    <div
      className="flex flex-col justify-center items-center mb-10 mt-40"
    >
      <p className="text-center text-8xl text-white">New industry</p>

      <div className='flex flex-col justify-between items-center mt-16 gap-20'>
        <div className='flex justify-center items-center flex-row-reverse gap-48'>
          <Image
            height={200}
            width={200}
            alt='bottle'
            src={"/images/bottle-1.png"}
          />
          <div className='flex flex-col justify-center items-center w-[30rem]'>
            <span className='relative w-full'>
              <svg className='absolute translate-x-48 -translate-y-10' xmlns="http://www.w3.org/2000/svg" width="107" height="107" viewBox="0 0 107 107" fill="none">
                <path d="M72.8495 8.91626C87.9632 8.91626 98.0836 19.5271 98.0836 35.3096V71.7386C98.0836 87.4721 87.9632 98.0829 72.8495 98.0829H34.1957C19.082 98.0829 8.91699 87.4721 8.91699 71.7386V35.3096C8.91699 19.5271 19.082 8.91626 34.1957 8.91626H72.8495ZM72.1362 40.1246C70.6203 38.6088 68.1237 38.6088 66.6078 40.1246L48.1949 58.5375L40.3928 50.7354C38.877 49.2196 36.3803 49.2196 34.8645 50.7354C33.3487 52.2513 33.3487 54.7033 34.8645 56.2638L45.4753 66.83C46.2332 67.5879 47.2141 67.9446 48.1949 67.9446C49.2203 67.9446 50.2012 67.5879 50.9591 66.83L72.1362 45.6529C73.652 44.1371 73.652 41.685 72.1362 40.1246Z" fill="url(#paint0_linear_249_132)" />
                <defs>
                  <linearGradient id="paint0_linear_249_132" x1="53.5003" y1="8.91626" x2="53.5003" y2="98.0829" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.869792" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-white text-8xl text-center">Simple</p>
            </span>
            <p className="text-2xl text-[#E0E0E0] leading-10">Parch linux uses calamares graphical installer by default which makes it easier for you to install and use it.</p>
          </div>
        </div>
        <div id='privacy' className='flex justify-center items-center flex-row gap-48'>
          <Image
            height={200}
            width={200}
            alt='bottle'
            src={"/images/bottle-2.png"}
          />
          <div className='flex flex-col justify-center items-center w-[30rem]'>
            <span className='relative w-full'>
              <svg className='absolute translate-x-48 -translate-y-12' xmlns="http://www.w3.org/2000/svg" width="115" height="115" viewBox="0 0 115 115" fill="none">
                <path d="M57.427 9.58331C72.1314 9.58331 83.9631 21.1542 83.9631 35.4392V42.7864C92.216 45.3625 98.2292 52.8335 98.2292 61.7569V85.4129C98.2292 96.46 89.0706 105.417 77.7794 105.417H37.2255C25.9295 105.417 16.7709 96.46 16.7709 85.4129V61.7569C16.7709 52.8335 22.789 45.3625 31.037 42.7864V35.4392C31.0857 21.1542 42.9174 9.58331 57.427 9.58331ZM57.4757 64.133C55.1386 64.133 53.2397 65.99 53.2397 68.2756V78.8465C53.2397 81.1798 55.1386 83.0368 57.4757 83.0368C59.8615 83.0368 61.7604 81.1798 61.7604 78.8465V68.2756C61.7604 65.99 59.8615 64.133 57.4757 64.133ZM57.5244 17.9162C47.6403 17.9162 39.6065 25.7254 39.5578 35.3439V41.7531H75.4423V35.4392C75.4423 25.773 67.4085 17.9162 57.5244 17.9162Z" fill="url(#paint0_linear_249_128)" />
                <defs>
                  <linearGradient id="paint0_linear_249_128" x1="57.5" y1="9.58331" x2="57.5" y2="105.417" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.979167" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-white text-8xl text-center">Privacy</p>
            </span>
            <p className="text-2xl text-[#E0E0E0] leading-10">Unlike any other proprietary operating systems, Parch Linux respects your privacy and doesn't collect any information or data from you.</p>
          </div>
        </div>
        <div className='flex justify-center items-center flex-row-reverse gap-48'>
          <Image
            height={200}
            width={200}
            alt='bottle'
            src={"/images/bottle-3.png"}
          />
          <div className='flex flex-col justify-center items-center w-[30rem]'>
            <span className='relative w-full'>
              <svg className='absolute translate-x-48 -translate-y-9' xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                <path d="M85.7097 10.3132C83.7097 8.26919 80.7497 7.51319 77.9897 8.31319L13.6297 26.9092C10.7177 27.7172 8.65368 30.0252 8.09768 32.9532C7.52968 35.9372 9.51368 39.7292 12.1057 41.3132L32.2297 53.6012C34.2937 54.8652 36.9577 54.5492 38.6657 52.8372L61.7097 29.7932C62.8697 28.5892 64.7897 28.5892 65.9497 29.7932C67.1097 30.9492 67.1097 32.8332 65.9497 34.0332L42.8657 57.0772C41.1537 58.7892 40.8337 61.4452 42.0937 63.5132L54.3897 83.7132C55.8297 86.1092 58.3097 87.4732 61.0297 87.4732C61.3497 87.4732 61.7097 87.4732 62.0297 87.4292C65.1497 87.0332 67.6297 84.9092 68.5497 81.9092L87.6297 18.0332C88.4697 15.3132 87.7097 12.3532 85.7097 10.3132Z" fill="url(#paint0_linear_249_123)" />
                <path opacity="0.4" d="M37.8056 76.5688C38.9736 77.7408 38.9736 79.6408 37.8056 80.8128L32.3416 86.2728C31.7576 86.8608 30.9896 87.1528 30.2216 87.1528C29.4536 87.1528 28.6856 86.8608 28.1016 86.2728C26.9296 85.1008 26.9296 83.2048 28.1016 82.0328L33.5616 76.5688C34.7336 75.4008 36.6336 75.4008 37.8056 76.5688ZM34.6708 61.4168C35.8388 62.5888 35.8388 64.4888 34.6708 65.6608L29.2068 71.1208C28.6228 71.7088 27.8548 72.0008 27.0868 72.0008C26.3188 72.0008 25.5508 71.7088 24.9668 71.1208C23.7948 69.9488 23.7948 68.0528 24.9668 66.8808L30.4268 61.4168C31.5988 60.2488 33.4988 60.2488 34.6708 61.4168ZM19.626 56.6472C20.794 57.8192 20.794 59.7192 19.626 60.8912L14.162 66.3512C13.578 66.9392 12.81 67.2312 12.042 67.2312C11.274 67.2312 10.506 66.9392 9.92197 66.3512C8.74997 65.1792 8.74997 63.2832 9.92197 62.1112L15.382 56.6472C16.554 55.4792 18.454 55.4792 19.626 56.6472Z" fill="url(#paint1_linear_249_123)" />
                <defs>
                  <linearGradient id="paint0_linear_249_123" x1="47.9836" y1="8" x2="47.9836" y2="87.4732" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.770833" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                  <linearGradient id="paint1_linear_249_123" x1="23.8623" y1="55.7712" x2="23.8623" y2="87.1528" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.770833" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-white text-8xl text-center">Fast</p>
            </span>
            <p className="text-2xl text-[#E0E0E0] leading-10">Parch Linux requires at least 1.5 GB of RAM with xfce desktop and at least 1 GB with lxqt desktop Give your old system a second chance with Parch Linux.</p>
          </div>
        </div>
        <div className='flex justify-center items-center flex-row gap-48'>
          <Image
            height={200}
            width={200}
            alt='bottle'
            src={"/images/bottle-4.png"}
          />
          <div className='flex flex-col justify-center items-center w-[30rem]'>
            <span className='relative w-full'>
              <svg className='absolute translate-x-48 -translate-y-14' xmlns="http://www.w3.org/2000/svg" width="118" height="118" viewBox="0 0 118 118" fill="none">
                <path d="M59.0984 9.83334C87.025 9.83334 108.167 32.7302 108.167 58.9262C108.167 89.3076 83.3867 108.167 59 108.167C50.9367 108.167 41.9884 106 34.81 101.765C32.3025 100.239 30.1884 99.1064 27.4842 99.9928L17.5525 102.947C15.045 103.735 12.7834 101.765 13.5209 99.1064L16.815 88.0765C17.3559 86.5501 17.2575 84.9252 16.4709 83.6449C12.2425 75.8649 9.83337 67.3463 9.83337 59.0739C9.83337 33.1734 30.5325 9.83334 59.0984 9.83334ZM81.5675 52.8203C78.0767 52.8203 75.2742 55.627 75.2742 59.1231C75.2742 62.57 78.0767 65.4259 81.5675 65.4259C85.0584 65.4259 87.8609 62.57 87.8609 59.1231C87.8609 55.627 85.0584 52.8203 81.5675 52.8203ZM58.9017 52.8203C55.46 52.7711 52.6084 55.627 52.6084 59.0739C52.6084 62.57 55.4109 65.3767 58.9017 65.4259C62.3925 65.4259 65.195 62.57 65.195 59.1231C65.195 55.627 62.3925 52.8203 58.9017 52.8203ZM36.2359 52.8203C32.745 52.8203 29.9425 55.627 29.9425 59.1231C29.9425 62.57 32.7942 65.4259 36.2359 65.4259C39.7267 65.3767 42.5292 62.57 42.5292 59.1231C42.5292 55.627 39.7267 52.8203 36.2359 52.8203Z" fill="url(#paint0_linear_249_144)" />
                <defs>
                  <linearGradient id="paint0_linear_249_144" x1="59" y1="9.83334" x2="59" y2="108.167" gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" />
                    <stop offset="0.916667" stop-color="white" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-white text-8xl text-center">Community</p>
            </span>
            <p className="text-2xl text-[#E0E0E0] leading-10">Parch Linux in Telegram has an active community that will quickly solve your problems. If you have a bug or problem, you can report it in the community.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
