import axios from 'axios';
import getConfig from "next/config";
import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';


interface ResponseData {
    nama: string;
    email: string;
    tanggal_lahir: string;
    status: boolean;
}

export default function Page() {
    const { publicRuntimeConfig } = getConfig()

    const [decisionList, setDecisionList] = useState<ResponseData[]>([]);
    const [file, setFile] = useState<File | null>(null); 
    const [loading, setLoading] = useState(false); // Track the loading state

    const handleChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'xml-file') {
            const selectedFile = e.target.files?.[0];
            setFile(selectedFile || null); 
        }
    };

    const handleSubmitForm = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!file) {
            alert('Please select a file');
        } else if (!file.name.endsWith('.csv')) {
            alert('Please select .csv file');
        } else {
            const formData = new FormData();
            formData.append('decision_file', file);
            
            setLoading(true);

            try {
                const response = await fetch(publicRuntimeConfig.API_URL + '/api/hiring/decision-sc3n/list/', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    alert('File successfully uploaded.');
                    setFile(null);
                    window.location.reload();
                } else {
                    const message = await response.json()
                    alert('Error uploading file: ' + message['message']);
                }
            } catch (error) {
                alert('Error uploading file: ' + String(error));
            } finally {
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        axios.get<ResponseData[]>('https://drewkwok.pythonanywhere.com/api/hiring/decision-sc3n/list/')
            .then(response => setDecisionList(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div data-theme="light">
            <div>
                <div className="card-body max-w-xl">
                    <h2 className="card-title"> Unggah Hasil Seleksi </h2>
                    <p> Unggahlah file hasil seleksi sesuai format (hanya menerima ekstensi .csv)   </p>
                    <form onSubmit={handleSubmitForm} encType="multipart/form-data" className="card-actions justify-end">
                        <input id='file-input' type="file" onChange={handleChangeForm} name="xml-file" className="file-input file-input-bordered file-input-primary w-full bg-gray-100" />
                        {
                            loading ? <span className="btn loading loading-spinner text-primary"></span> :
                            <button className='btn btn-primary' type='submit'> Unggah </button>
                        }
                    </form>
                </div>
            </div>

            <h1 className='text-2xl font-bold text-center mt-4'> Daftar Hasil Seleksi </h1>
            
            <div className="overflow-x-auto m-8">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Tanggal Lahir</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {decisionList.map((decision, index) => (
                            <tr>
                                <th> {index + 1} </th>
                                <td> {decision.nama} </td>
                                <td> {decision.email} </td>
                                <td> {decision.nama} </td>
                                <td> {decision.nama} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
