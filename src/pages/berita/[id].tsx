import getConfig from "next/config";
import ErrorPage from 'next/error';
import { useRouter } from 'next/router'

import React, { useState, useEffect } from 'react';

import { NewsProps } from '@components/components/news/NewsProps'
import NewsSingleLayout from "@components/components/news/NewsSingleLayout"
import Loading from "@components/components/Loading";

export default function Page() {
    const router = useRouter();
    const id = router.query.id as string;

    const { publicRuntimeConfig } = getConfig();
    const [data, setData] = useState<NewsProps | null>(null);
    const [loading, setLoading] = useState(false);
    const [errorCode, setErrorCode] = useState(404);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await fetch(`${publicRuntimeConfig.API_URL}/api/news/${id}`);
                const jsonData  = await response.json();

                if (response.ok) {
                    setData(jsonData);
                } else {
                    setErrorCode(response.status);
                }
            } catch(error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [id, publicRuntimeConfig.API_URL])

    if (loading) {
        return <Loading />
    }

    if (!data) {
        return <ErrorPage statusCode={errorCode} />;
    } else {
        return (
            <NewsSingleLayout
                id={data.id}
                headline={data.headline}
                picture={`${publicRuntimeConfig.API_URL}${data.picture}`}
                content={data.content}
                created_at={data.created_at}
                updated_at={data.updated_at}
                authors={data.authors}
            />
        )
    }
};