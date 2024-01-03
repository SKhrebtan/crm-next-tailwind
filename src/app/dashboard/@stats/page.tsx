'use client';
import { useTotals } from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";


type Data = {
id: string,
title: string,
number: number
}

export default function Page() {   
    const {data} = useTotals();
   console.log(data)
    return(
          <ul className='flex gap-5'>
           {data && data?.map(({ id, title, number }: Data) => <li key={id} className='w-64 h-36 bg-gradient-to-r from-purple-200 via-lime-200 to-purple-200'>
          <p>{title}</p>
          <p>{number}</p>
        </li>)}
        </ul>
    )
}