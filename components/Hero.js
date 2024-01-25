 import Image from "next/image";
 
 export const Hero = () => {
    return (
        <div className="px-40 pt-40 m-40">
            <div className="bg-stone-600 rounded-md border-2">
                <h1 className="text-gray-50 text-left py-3 px-4">Hey, it's Luis</h1>
                <p className="text-gray-50 text-left py-4 px-4">
                    I'm currently focusing in Data Science developing and FrontEnd tools.
                </p>
                <div className="flex items-end md:justify-end">
                    <a 
                        href="https://github.com/bashlui"
                        target="_blank"
                        className="inline-flex items-end"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" className="h-11 mb-2 text-white mx-3 cursor-pointer">
                            <path d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z" fillRule="evenodd" fill="currentColor" />
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    );
  }


