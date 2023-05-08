import Image from 'next/image'
import Link from 'next/link';

const UnderConstruction = ({}) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <Image className="ml-5"
                src="/under-construction.jpg"
                alt="Under Construction"
                width={1024}
                height={576}
            />
            <h3 className="text-3xl"> Under Construction! </h3>
            <Link href="/">
                <p className="text-blue underline"> Click here to return to homepage. </p> 
            </Link>
        </div>
    )
};

export default UnderConstruction;