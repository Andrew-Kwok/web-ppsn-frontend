import getConfig from "next/config";
import ErrorPage from 'next/error';
import { useRouter } from 'next/router'

import React, { useEffect, useState } from 'react'

import UnderConstruction from '@components/components/UnderConstruction';
import { OprecResult } from '@components/components/oprec/Models';
import { DivisionAccepted, DivisionRejected, OprecAccepted, OprecRejected } from "@components/components/oprec/OprecResultLayout";
import Loading from "@components/components/Loading";


export default function Page() {
    const router = useRouter()
    const uuid = router.query.uuid as string

    const { publicRuntimeConfig } = getConfig()
    const [data, setData] = useState<OprecResult | null>(null)
    const [loading, setLoading] = useState(false); // Track the loading state

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                const response = await fetch(publicRuntimeConfig.API_URL + `/api/hiring/decision/${uuid}`)
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            } finally {
                setLoading(false);
            }
        }
        
        fetchData();
    }, [uuid, publicRuntimeConfig.API_URL])


    if (loading) {
        return <Loading />
    }
    
    if (!data) {
        return <ErrorPage statusCode={404} />;
    } 
    
    if (data.status) {
        return (
            <DivisionAccepted
                email={data.email}
                nama={data.nama}
                tanggal_lahir={data.tanggal_lahir}
                status={data.status}
                divisi={data.divisi}
            />
        )
    }

    return (
            <DivisionRejected
                email={data.email}
                nama={data.nama}
                tanggal_lahir={data.tanggal_lahir}
                status={data.status}
                divisi={data.divisi}
            />
        )
}
