import { getCurrentUser } from '@/app/actions/getCurrentUser'
import getProducts from '@/app/actions/getProduct'
import ManageClient from '@/app/components/admin/ManageClient'
import AuthContainer from '@/app/components/containers/AuthContainer'
import WarningText from '@/app/components/WarningText'
import React from 'react'

const Manage = async () => {
    const products = await getProducts({category:null})
    const currentUser = await getCurrentUser()
    if (!currentUser || currentUser.role !== 'ADMIN') {
        return <WarningText text="Buraya Giremezsin" />
    }

    return (
        
        <div className='m-1 w-full '>  
            <ManageClient products={products} />
        </div>  
            )
}

export default Manage