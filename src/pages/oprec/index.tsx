import Image from 'next/image'
import getConfig from "next/config";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Page() {
    const { publicRuntimeConfig } = getConfig()
    // const [message, setMessage] = useState<SetStateAction<string | null>>(null);
    // const [success, setSuccess] = useState<SetStateAction<boolean | null>>(null);
    const [file, setFile] = useState<File | null>(null); 
    const [loading, setLoading] = useState(false); // Track the loading state


    const handleDownloadForm = async() => {
        const fileUrl = '/FORMULIR-PENDAFTARAN-GEL-2-SNRPB-PPSN.docx'
        const link = document.createElement('a')
        link.href = fileUrl
        link.download = 'FORMULIR-PENDAFTARAN-GEL-2-SNRPB-PPSN.docx'
        link.click()
    }

    const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'docx-form') {
            const selectedFile = e.target.files?.[0];
            setFile(selectedFile || null); 
        }
    };

    const handleSubmitForm = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!file) {
            // setSuccess(false);
            // setMessage('Please select a file');
            alert('Please select a file');
        } else if (!file.name.endsWith('.docx')) {
            // setSuccess(false);
            // setMessage('Please select .docx file');
            alert('Please select .docx file');
        } else {
            const formData = new FormData();
            formData.append('registration_form', file);
            
            setLoading(true);

            try {
                const response = await fetch(publicRuntimeConfig.API_URL + '/api/hiring/upload/', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    // setSuccess(true);

                    // const message = await response.json()
                    // setMessage(message);
                    alert('File successfully uploaded.');
                    setFile(null);
                } else {
                    // setSuccess(false);

                    const message = await response.json()
                    // setMessage(message);
                    alert('Error uploading file: ' + message);
                }
            } catch (error) {
                // setSuccess(false);
                // setMessage(String(error));
                alert('Error uploading file: ' + String(error));
            } finally {
                setLoading(false);
            }
        }
    }

    return (
        <div>
            {/* {success && (
                <dialog open className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box bg-success">
                        <h3 className="font-bold text-lg text-success-content"> Success </h3>
                        <p className="py-4 text-error-content"> File Successfully Uploaded </p>
                        <div className="modal-action">
                            <button className="btn btn-primary" onClick={() => setSuccess(null)}> Close </button>
                        </div>
                    </form>
                </dialog>
            )}

            {success === false && (
                <dialog open className="modal modal-bottom sm:modal-middle">
                    <form method="dialog" className="modal-box bg-error">
                        <h3 className="font-bold text-lg text-error-content"> Error </h3>
                        <p className="py-4 text-error-content"> Unknown Error </p>
                        <div className="modal-action">
                            <button className="btn btn-primary"> Close </button>
                        </div>
                    </form>
                </dialog>
            )} */}

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
                            <form onSubmit={handleSubmitForm} encType="multipart/form-data" className="card-actions justify-end">
                                <input id='file-input' type="file" onChange={handleChangeForm} name="docx-form" className="file-input file-input-bordered file-input-primary w-full bg-gray-100" />
                                {
                                    loading ? <span className="btn loading loading-spinner text-primary"></span> :
                                    <button className='btn btn-primary' type='submit'> Unggah </button>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}