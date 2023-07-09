import Image from 'next/image'

export default function Page() {

    const handleDownloadForm = async() => {
        const fileUrl = '/FORMULIR-PENDAFTARAN-GEL-1-SNRPB-PPSN.docx'
        const link = document.createElement('a')
        link.href = fileUrl
        link.download = 'FORMULIR-PENDAFTARAN-GEL-1-SNRPB-PPSN.docx'
        link.click()
    }

    return (
        <div className="h-min my-10 lg:h-screen flex justify-center items-center">
            <div className="flex flex-col w-full max-w-lg lg:max-w-6xl lg:flex-row justify-evenly">
                <div className="card self-center w-5/6 lg:w-80 bg-gray-300 shadow-xl">
                    <figure className='w-full aspect-square max-h-64 bg-white'>
                        <div className='relative h-full aspect-square'>
                        <Image
                                src="/download.gif"
                                alt="download"
                                fill
                            />
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"> Unduh Formulir </h2>
                        <p> Klik tombol di bawah untuk mengunduh Formulir Pendaftaran PPSN </p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary" onClick={handleDownloadForm}> Unduh Formulir </button>
                        </div>
                    </div>
                </div>

                <div className="divider lg:divider-horizontal"></div> 
                
                <div className="card self-center w-5/6 lg:w-80 bg-gray-300 shadow-xl">
                    <figure className='w-full aspect-square max-h-64 bg-white'>
                        <div className='relative h-full aspect-square'>
                        <Image
                                src="/write.gif"
                                alt="write"
                                fill
                            />
                        </div>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title"> Pengisian Formulir </h2>
                        <p> Isilah semua kolom sesuai instruksi formulir! </p>
                        <p> Pastikan semua kolom terisi dengan baik! </p>
                    </div>
                </div>

                <div className="divider lg:divider-horizontal"></div> 

                <div className="card self-center w-5/6 lg:w-80 bg-gray-300 shadow-xl">
                    <figure className='w-full aspect-square max-h-64 bg-white'>
                        <div className='relative h-full aspect-square'>
                        <Image
                                src="/upload.gif"
                                alt="upload"
                                fill
                            />
                        </div>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title"> Unggah Formulir </h2>
                        <p> Unggahlah formulir yang telah anda isi (hanya menerima ekstensi .docx)  </p>
                        <div className="card-actions justify-end">
                            <input type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs bg-gray-100" />
                            <button className="btn btn-primary"> Unggah </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}