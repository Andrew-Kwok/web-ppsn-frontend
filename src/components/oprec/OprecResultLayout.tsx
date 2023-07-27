import Image from 'next/image'
import getConfig from "next/config";

import { OprecResult } from "./Models";
import Link from 'next/link';

export function OprecAccepted(input: OprecResult) {
    const { publicRuntimeConfig } = getConfig()
    const oprecDecisionLink = publicRuntimeConfig.PPSN_OPREC_DECISION_URL
    const oprecKetentuanTeknis = publicRuntimeConfig.PPSN_OPREC_KETENTUAN_TEKNIS
    
    return (
        <div data-theme="light">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="flex max-w-lg">
                                <Image 
                                    src="/logo-ppsn.png"
                                    alt="Logo PPSN"
                                    width={80}
                                    height={80}
                                />
                                <div className='ml-4'>
                                    <h2 className='font-bold'> Perhimpunan Pelajar Sains Nasional </h2>
                                    <p> Jalan Gardu, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640 </p>
                                </div>
                            </div>

                            <h1 className='text-2xl text-center font-bold'> PENGUMUMAN HASIL SELEKSI SNRPB PPSN 2023 TAHAP 1 </h1>

                            <div className='flex flex-col xl:flex-row'>
                                <figure className='max-w-[15rem] w-full aspect-square rounded-lg shadow-2xl relative m-4'>
                                    <Image
                                        src="/barcode-oprec-accepted.png" 
                                        alt="barcode-oprec-accepted"
                                        fill
                                    />
                                </figure>

                                <div>
                                    <div className='grid grid-cols-4'>
                                        <p className='col-span-1'>Nama</p>
                                        <p className='col-span-3'>: {input.nama}</p>
                                        <p className='col-span-1'>Email</p>
                                        <p className='col-span-3'>: {input.email}</p>
                                        <p className='col-span-1'>Tanggal Lahir</p>
                                        <p className='col-span-3'>: {input.tanggal_lahir}</p>
                                    </div>
                                    
                                    
                                    <p className='font-bold'> Selamat! Anda dinyatakan lulus seleksi SNRPB PPSN 2023 Tahap 1 </p>
                                    <p className='max-w-lg'> Selanjutnya Anda diwajibkan untuk mengikuti Seleksi Tahap 2: Wawancara Bersama yang dilaksanakan pada tanggal 27 s.d. 30 Juli 2023. </p>
                                    <p className='max-w-lg'> Ketentuan teknis seleksi tahap 2 dapat dilihat di <Link href={oprecKetentuanTeknis} className='underline'> sini </Link> </p>
                                    
                                    <div className='flex flex-col xl:flex-row justify-center align-middle'>
                                        <Link href={oprecDecisionLink} className="btn btn-primary xl:w-1/2 m-2"> Unduh Surat Keputusan Panitia Seleksi </Link>
                                        <Link href='/oprec/pengumuman' className="btn btn-primary xl:w-1/2 m-2"> Kembali ke pencarian </Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export function OprecRejected(input: OprecResult) {
    const { publicRuntimeConfig } = getConfig()
    const oprecDecisionLink = publicRuntimeConfig.PPSN_OPREC_DECISION_URL

    return (
        <div data-theme="light">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="flex max-w-lg">
                                <Image 
                                    src="/logo-ppsn.png"
                                    alt="Logo PPSN"
                                    width={80}
                                    height={80}
                                />
                                <div className='ml-4'>
                                    <h2 className='font-bold'> Perhimpunan Pelajar Sains Nasional </h2>
                                    <p> Jalan Gardu, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640 </p>
                                </div>
                            </div>

                            <h1 className='text-2xl text-center font-bold'> PENGUMUMAN HASIL SELEKSI SNRPB PPSN 2023 TAHAP 1 </h1>

                            <h2 className='text-xl font-bold'> Mohon maaf peserta berikut </h2> 
                            <div className='grid grid-cols-4'>
                                <p className='col-span-1'>Nama</p>
                                <p className='col-span-3'>: {input.nama}</p>
                                <p className='col-span-1'>Email</p>
                                <p className='col-span-3'>: {input.email}</p>
                                <p className='col-span-1'>Tanggal Lahir</p>
                                <p className='col-span-3'>: {input.tanggal_lahir}</p>
                            </div>
                            
                            
                            <p className='font-bold'> Dinyatakan tidak lulus SNRPB PPSN 2023 Tahap 1 </p>
                            <p className='max-w-lg'> Tetap semangat dan jangan putus asa! Masih ada kesempatan untuk mengikuti <strong>SNRPB PPSN 2023 Gelombang 2</strong> yang akan dibuka pada tanggal 4 s.d. 10 September 2023. </p>
                            
                            <div className='flex flex-col xl:flex-row justify-center align-middle'>
                                <Link href={oprecDecisionLink} className="btn btn-primary xl:w-1/2 m-2"> Unduh Surat Keputusan Panitia Seleksi </Link>
                                <Link href='/oprec/pengumuman' className="btn btn-primary xl:w-1/2 m-2"> Kembali ke pencarian </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}