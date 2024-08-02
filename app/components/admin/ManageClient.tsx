'use client'
import { Product } from '@prisma/client'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useCallback } from 'react';
import { deleteObject, getStorage, ref } from 'firebase/storage';
import firebaseApp from '@/libs/firebase';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/router';

interface ManageClientProps {
    products: Product[]
}
const ManageClient: React.FC<ManageClientProps> = ({ products }) => {
    const router = useRouter()
    const storage = getStorage(firebaseApp)
    let rows: any = []

    if (products) {
        rows = products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                category: product.category,
                brand: product.brand,
                inStock: product.inStock,
                image: product.image
            }
        })
    }
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'name', headerName: 'Name', width: 200 },
        { field: 'price', headerName: 'Price', width: 150 },
        { field: 'category', headerName: 'Category', width: 200 },
        { field: 'brand', headerName: 'Brand', width: 200 },
        {
            field: 'inStock',
            headerName: 'ID',
            width: 200,
            renderCell: (params) => {
                return (
                    <div>{params.row.inStock == true ? 'Stokta Mevcut' : 'Stokta Yok'}</div>
                )
            }
        },
        {
            field: 'actions',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <button onClick={() => handleDelete(params.row.id, params.row.image)} className='flex justify-center mx-4 text-red-500 cursor-pointer '>sil</button>
                )
            }
        },
    ]
    const handleDelete = useCallback(async (id: string, image: any) => {
        toast.success('silme için bekleyin')
        const handleDeleteImg = async () => {
            try {
                const imageRef = ref(storage, image)

                await deleteObject(imageRef)
            } catch (error) {
                return console.log('bir hata var')
            }
        }
        await handleDeleteImg()
        axios.delete(`/api/product*${id}`)
            .then(() => {
                toast.success('silme başarılı')
                router.refresh()
            })
    }, [])

    return (
        <div>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    )
}

export default ManageClient