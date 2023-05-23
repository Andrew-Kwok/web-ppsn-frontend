import Link from 'next/link'

import UnderConstruction from "@components/components/UnderConstruction";

import QuestionForm from '@components/components/contact-us/QuestionForm';
import Contact from '@components/components/contact-us/Contact';


export default function Page() {
    {/* Contact Us Page. */}
    return (
        <div>
            <div id="kirim-pesan">
                <div className="h-[45vh] bg-gray-200 flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl lg:text-6xl"> Bagaimana kami dapat membantu? </h1>
                    <h2 className="text-4xl lg:text-5xl mt-4"> Kirimkan kami <Link href="#kirim-pesan" className="link text-black font-bold">pesan</Link> anda! </h2>
                </div>

                <div className="h-fit bg-gray-200 flex flex-col items-center p-8">
                    <QuestionForm />
                </div>
            </div>

            <div id="alamat-kontak"> 
                <Contact />
            </div>
        </div>
    )
}