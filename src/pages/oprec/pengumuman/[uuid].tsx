import getConfig from "next/config";
import ErrorPage from 'next/error';
import { GetStaticProps, GetStaticPaths } from 'next';


import React, { useEffect, useState } from 'react'

import UnderConstruction from '@components/components/UnderConstruction';
import { OprecResult } from '@components/components/oprec/Models';
import { OprecAccepted, OprecRejected } from "@components/components/oprec/OprecResultLayout";

interface PageProps {
    uuid: string;
}

const Page: React.FC<PageProps> = ({ uuid }) => {
    const { publicRuntimeConfig } = getConfig()
    const [data, setData] = useState<OprecResult | null>(null)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(publicRuntimeConfig.API_URL + `/api/hiring/decision/${uuid}`)
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        }
        
        fetchData();
    }, [uuid, publicRuntimeConfig.API_URL])

    
    if (!data) {
        return <ErrorPage statusCode={404} />;
    } 

    if (data.status) {
        <OprecAccepted
            email={data.email}
            nama={data.nama}
            tanggal_lahir={data.tanggal_lahir}
            status={data.status}
        />
    }

    return (
            <OprecRejected
                email={data.email}
                nama={data.nama}
                tanggal_lahir={data.tanggal_lahir}
                status={data.status}
            />
        )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.uuid as string | undefined;

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
