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
    const [data, setData] = useState<NewsProps | null>(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(`http://localhost:8000/api/news/${id}`);
                const jsonData  = await response.json();
                setData(jsonData);

                console.error(response.status)
            } catch(error) {
                console.error('Error fetching data: ', error);
            }
        }

        fetchData();
    }, [id])

    if (!data) {
        return <ErrorPage statusCode={404} />;
    } else {
        return (
            <NewsSingleLayout
                id={data.id}
                headline={data.headline}
                picture={`http://localhost:8000${data.picture}`}
                content={data.content}
                pub_date={data.pub_date}
                upd_date={data.upd_date}
                authors={data.authors}
            />
        )
    }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params;

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