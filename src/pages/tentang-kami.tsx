import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content max-w-[40rem] text-center">
                <div>
                    <Image className="mx-auto w-[25rem]"
                        src="/logo-ppsn.png"
                        alt="Logo PPSN"
                        width={400}
                        height={400}
                    />                    
                    <div className="flex flex-col w-full lg:flex-row"> 
                        <div className="grid flex-grow h-32 card place-items-center text-3xl"> PPSN </div> 
                        <div className="divider lg:divider-horizontal"></div> 
                        <div className="grid flex-grow h-32 card place-items-center text-3xl"> Perhimpunan Pelajar Sains Nasional </div>
                    </div>
                </div>
            </div>
        </div>
    )
};