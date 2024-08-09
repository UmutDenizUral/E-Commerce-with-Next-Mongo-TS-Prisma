

import getProducts from "@/app/actions/getProduct"

const Category = async () => {

    const products = await getProducts({})
    const categoryList = products.map(a => (a.category))
    const uniqueCategories = [...new Set(categoryList)];
    return (
        <div className="flex items-center justify-center gap-3 px-3 md:px-10  md:gap-10 py-5 md:py-8 overflow-x-auto">
            {uniqueCategories.map((category, index) => (
                <div className="border text-slate-500 rounded-full min-w-[120px] flex items-center justify-center cursor-pointer px-4 py-2 text-center" key={index}>
                    {category}
                </div>
            )
            )}
        </div>
    )
}

export default Category