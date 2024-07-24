'use client'

import { Rating } from "@mui/material"
import { RxAvatar } from "react-icons/rx"

const Comment = ({ prd }: { prd: any }) => {

    return (
        <div className="border w-full md:w-1/2 p-2 rounded-lg">
            {/* <Avatar image={prd?.user?.image} /> */}
            <div className="flex items-center gap-1">
                <RxAvatar size='25' />
                <div>
                     <div>{prd?.user?.name}</div>
                    
                <Rating name="read-only" value={prd.rating} readOnly />
                    
                </div>
               
            </div>
            <div className="text-slate-500">{prd.comment}</div>
            
            
        </div>
    )
}

export default Comment
