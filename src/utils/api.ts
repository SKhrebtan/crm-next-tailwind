'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const buildUrl = (path: string) => `https://6595270b04335332df821091.mockapi.io/api/v1/${path}`;

const stringifyQueryParams = (params: Record<string, string>) =>
    new URLSearchParams(params).toString();

    const sendRequest = async <T>(url: string, init?: RequestInit) => {
        const res = await fetch(url, init);
        if(!res.ok) {
            throw new Error (await res.text());
        }
        return (await res.json()) as T;
    }

    export const getTotals = (init?: RequestInit) => {
        return sendRequest(buildUrl('total-promotions'), init)
    }
    










// const buildUrl = (path: string) => `https://6595270b04335332df821091.mockapi.io/api/v1/${path}`

// export const sendRequest = async (url: string, init?:RequestInit) => {
//     const res = await fetch(url, init);
//     if(!res.ok) {
//         throw new Error(await res.text())
//     }

//     return (await res.json())
// }

// export const getTotals = async () => {  
//     const {data}  = await axios.get('https://6595270b04335332df821091.mockapi.io/api/v1/total-promotions')
//         return data
//   }
  export const useTotals = () => {
    return useQuery({
      queryKey: ['totals'],
      queryFn: ()=>getTotals(),
    })
  }