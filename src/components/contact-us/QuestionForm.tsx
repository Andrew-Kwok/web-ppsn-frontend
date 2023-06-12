import { use, useState } from "react";
import getConfig from "next/config";

export default function QuestionForm() {
    const { publicRuntimeConfig } = getConfig()

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [questionText, setQuestionText] = useState('');

    const [fullNameError, setFullNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [questionTextError, setQuestionTextError] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let isValid = true;
        if (fullName.trim() === '') {
            setFullNameError('Full Name is required');
            isValid = false;
        } else {
            setFullNameError('');
        }

        if (email.trim() === '') {
            setEmailError('Email is required');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (questionText.trim() === '') {
            setQuestionTextError('Ask something');
            isValid = false;
        } else {
            setQuestionTextError('')
        }

        if (isValid) {
            const formData = {
                full_name: fullName,
                email: email,
                question_text: questionText,
            }

            try {
                const response = await fetch (publicRuntimeConfig.API_URL + '/api/question/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formData)
                });

                if (response.ok) {
                    // TODO: Add confirmation Page (?)
                    alert('Terima kasih atas pertanyaannya. Jawaban akan dikirim melalui e-mail yang tertera: ' + email);

                    setFullName('');
                    setEmail('');
                    setQuestionText('');
                    // console.log('Form submitted successfully');
                } else {
                    console.error('Failed to submit the form');
                }
            } catch (error) {
                console.error("An error occurred while submitting the form", error)
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="w-5/6 lg:w-2/3">

            <div className="flex flex-col lg:flex-row justify-between">
                <label className="w-full lg:w-5/12 mb-4">
                    <input type="text" placeholder="Nama lengkap" className="input input-bordered w-full" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    {fullNameError && 
                    <div className="alert alert-error shadow-lg p-1 m-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{fullNameError}</span>
                        </div>
                    </div>
                    }
                </label>
                <label className="w-full lg:w-5/12 mb-4">
                    <input type="email" placeholder="E-mail Anda" className="input input-bordered w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {emailError && 
                    <div className="alert alert-error shadow-lg p-1 m-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{emailError}</span>
                        </div>
                    </div>
                    }
                </label>
            </div> 
            <div>
                <label>
                    <textarea placeholder="Tuliskan pertanyaan anda disini" className="input input-bordered w-full h-[50vh] resize-y" value={questionText} onChange={(e) => setQuestionText(e.target.value)} />
                    {questionTextError && 
                    <div className="alert alert-error shadow-lg p-1 m-1">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <span>{questionTextError}</span>
                        </div>
                    </div>
                    }
                </label>
            </div>

            <br />
            <button type="submit" value="Kirim" className="btn btn-primary mt-6 text-2xl float-right">Submit</button>
        </form>
    )
}