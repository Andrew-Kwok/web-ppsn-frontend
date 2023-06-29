import getConfig from "next/config";
import React from 'react'
import { useState, useEffect } from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';
import ErrorPage from 'next/error';

import { NewsProps } from '@components/components/news/NewsProps'
import NewsSingleLayout from "@components/components/news/NewsSingleLayout"

interface PageProps {
    id: string;
}

const Page: React.FC<PageProps> = ({ id }) => {
    const { publicRuntimeConfig } = getConfig()
    const [data, setData] = useState<NewsProps | null>(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`${publicRuntimeConfig.API_URL}/api/news/${id}`);
                const jsonData  = await response.json();
                setData(jsonData);

                console.error(response.status)
            } catch(error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [id, publicRuntimeConfig.API_URL])

    if (!data) {
        return <ErrorPage statusCode={404} />;
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string | undefined;

    return {
        props: {
            id,
        },
    };
};
  
export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    };
};

export default Page;

// export default function Page({}) {
//     return (
//         <UnderConstruction />
//     )
// }