import Link from 'next/link';
import Image from 'next/image'
import getConfig from "next/config";
import { useRouter } from 'next/router';
import React, { useState, ChangeEvent } from 'react';

export default function Page() {
    const { publicRuntimeConfig } = getConfig()
    const router = useRouter();

    const [userEmail, setUserEmail] = useState<string | null>(null);
    const [userDob, setUserDob] = useState<string | null>(null);
    const [boxChecked, setBoxChecked] = useState<boolean>(false);
    const [loading, setLoading] = useState(false); // Track the loading state

    const isEmailValid = (email: string | null): boolean => {
        if (email === null) {
            return false
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };    

    const handleUserEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserEmail(e.target.value.toLowerCase());
    }

    const handleUserDobChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUserDob(e.target.value);
    }

    const handleBoxCheckedChange = (e: ChangeEvent<HTMLInputElement>) => {
        setBoxChecked(e.target.checked);
    }

    const handleSubmit = async() => {
        setLoading(true);
        try {
            if (!isEmailValid(userEmail)) {
                alert('Invalid email format');
                return;
            }
            
            const apiUrl = publicRuntimeConfig.API_URL + '/api/hiring/uuid/'
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },          
                body: JSON.stringify({
                    email: userEmail,
                    tanggal_lahir: userDob,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error);
            }

            router.push(`/oprec/pengumuman/${data.uuid}`); 
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    } 

    return (
        <div data-theme="light">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100">
                    <div className="card-body">

                        <div className="flex max-w-lg">
                            <div className='flex items-center min-w-fit'>
                                <Image 
                                    src="/logo-ppsn.png"
                                    alt="Logo PPSN"
                                    width={100}
                                    height={100}
                                />
                            </div>
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
                            <input 
                                type="email"
                                placeholder="email" 
                                className="input input-bordered input-primary w-full"
                                onChange={handleUserEmailChange}
                            />
                            <label className="label">
                                <span className="label-text-alt"> Masukkan email anda sesuai formulir yang dikirim </span>
                            </label>
                        </div>
                        
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Tanggal Lahir</span>
                            </label>
                            <input 
                                type="date"
                                placeholder="tanggal lahir"
                                className="input input-bordered input-primary w-full"
                                onChange={handleUserDobChange}
                            />
                        </div>
                        

                        <div className="form-control">
                            <label className="label cursor-pointer justify-normal">
                                <input 
                                    type="checkbox"
                                    className="checkbox checkbox-primary"
                                    checked={boxChecked}
                                    onChange={handleBoxCheckedChange}
                                />
                                <span className="label-text ml-2"> Dengan ini saya menyatakan bahwa apabila di kemudian hari ditemukan ketidaksesuaian dengan syarat dan ketentuan dalam SNRPB PPSN 2023, maka status kelulusan saya dibatalkan. </span> 
                            </label>
                        </div>
                            <div className="form-control mt-4">
                            {
                                loading ? <span className="btn loading loading-spinner text-primary"></span> :
                                <button 
                                    className="btn btn-primary"
                                    disabled={!boxChecked || !userEmail || !userDob}
                                    onClick={handleSubmit}
                                > Lihat Hasil </button>
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}