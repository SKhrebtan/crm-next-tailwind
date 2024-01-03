import React from "react";
import Image from "next/image";
import userPhoto from '../../../public/image/userPhoto.png';
export default function UserBar() {

    return (
        <div className='flex gap-3 shrink-0 h-11 w-56'>
            <Image alt='user' src={userPhoto}/>
            <div>
                <p className='text-base font-semibold'>
                Adam Smith
                </p>
                <p className='text-sm font-light'>
                adamsmith@gmail.com
                </p>
            </div>
        </div>
    )
}