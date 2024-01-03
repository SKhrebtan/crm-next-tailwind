import React from "react";
import PageTitle from "./pageTitle";
import UserBar from "./user";
export interface PageTitleProps {
    children: React.ReactNode
    }

export default function Header({children}: PageTitleProps) {

    return(
<header className='h-24 w-full pl-10 flex gap-9 items-center border-b border-gray-300'>
    <PageTitle>{children}</PageTitle>
    <UserBar/>
</header>
    )
}