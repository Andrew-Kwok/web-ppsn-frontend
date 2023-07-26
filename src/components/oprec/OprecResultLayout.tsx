import Image from 'next/image'

import { OprecResult } from "./Models";

export function OprecAccepted(input: OprecResult) {
    return (
        <div data-theme="light">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="flex w-2/3">
                                <Image 
                                    src="/logo-ppsn.png"
                                    alt="Logo PPSN"
                                    width={96}
                                    height={96}
                                />
                                <div className='ml-4'>
                                    <h2 className='font-bold'> Perhimpunan Pelajar Sains Nasional </h2>
                                    <p> Jalan Gardu, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640 </p>
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
                                    width={90}
                                    height={90}
                                />
                                <div className='ml-4'>
                                    <h2 className='font-bold'> Perhimpunan Pelajar Sains Nasional </h2>
                                    <p> Jalan Gardu, Srengseng Sawah, Kec. Jagakarsa, Kota Jakarta Selatan, DKI Jakarta 12640 </p>
                                </div>
                            </div>

                            <h1 className='text-2xl text-center font-bold'> PENGUMUMAN HASIL SELEKSI SNRPB PPSN 2023 TAHAP 1 </h1>

                            <h2 className='text-xl font-bold'> Mohon maaf peserta berikut </h2> 
                            <div className='grid grid-cols-2'>
                                <p className='col-span-1'>Nama</p>
                                <p className='col-span-1'>: {input.nama}</p>
                                <p className='col-span-1'>Email</p>
                                <p className='col-span-1'>: {input.email}</p>
                                <p className='col-span-1'>Tanggal Lahir</p>
                                <p className='col-span-1'>: {input.tanggal_lahir}</p>
                            </div>
                            
                            
                            <p className='font-bold'> Dinyatakan tidak lulus SNRPB PPSN 2023 Tahap 1 </p>
                            <p className='max-w-lg'> Tetap semangat dan jangan putus asa! Masih ada kesempatan untuk mengikuti <strong>SNRPB PPSN 2023 Gelombang 2</strong> yang akan dibuka pada tanggal 4 s.d. 10 September 2023. </p>
                            
                            <div className='flex flex-col xl:flex-row justify-center align-middle'>
                                <button className="btn btn-primary xl:w-1/2 m-2"> Unduh Surat Keputusan Panitia Seleksi </button>
                                <button className="btn btn-primary xl:w-1/2 m-2"> Kembali ke pencarian </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}