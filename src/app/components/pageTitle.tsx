import React from "react";

export interface PageTitleProps {
    children: React.ReactNode
    }

export default function PageTitle({children}: PageTitleProps){
     
    return(
        <h1 className='flex gap-3 grow text-3xl after:h-11 after:ml-auto after:border after:border-gray-300 after:rounded-sm'>{children}</h1>
    )
}