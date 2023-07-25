import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
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


                        <div className="mb-4">
                            <h1 className="font-bold text-2xl"> PENGUMUMAN HASIL SELEKSI SNRPB PPSN 2023 TAHAP 1 </h1>
                            <h2 className="text-xl"> Masukkan Email dan Tanggal Lahir </h2>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered input-primary" />
                            <label className="label">
                                <span className="label-text-alt"> Masukkan email anda sesuai formulir yang dikirim </span>
                            </label>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tanggal Lahir</span>
                            </label>
                        <input type="date" placeholder="tanggal lahir" className="input input-bordered input-primary" />
                        
                        <div className="form-control">
                            <label className="label cursor-pointer justify-normal">
                                <input type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text ml-2"> Dengan ini saya menyatakan bahwa apabila di kemudian hari ditemukan ketidaksesuaian dengan syarat dan ketentuan dalam SNRPB PPSN 2023, maka status kelulusan saya dibatalkan. </span> 
                            </label>
                        </div>
                        
                        </div>
                            <div className="form-control mt-4">
                            <button className="btn btn-primary">Lihat Hasil</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}