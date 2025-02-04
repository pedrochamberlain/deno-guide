import { v4 } from "https://deno.land/std@0.78.0/uuid/mod.ts"

import { Product } from '../types.ts'

let products: Product[] = [
    {
        id: "1",
        name: "Product One",
        description: "This is product one",
        price: 29.99,
    },
    {
        id: "2",
        name: "Product Two",
        description: "This is product two",
        price: 39.99,
    },
    {
        id: "3",
        name: "Product Three",
        description: "This is product three",
        price: 49.99,
    },
    {
        id: "4",
        name: "Product Four",
        description: "This is product four",
        price: 59.99,
    },
    {
        id: "5",
        name: "Product Five",
        description: "This is product five",
        price: 69.99,
    },
]

// @desc    Get all products
// @route   GET /api/v1/products
export const getProducts = ({response}: {response: any}) => {
    response.body = {
        success: true,
        data: products
    }
}

// @desc    Get a product
// @route   GET /api/v1/products/:id
export const getProduct = ({params, response}: { params: {id: string}, response: any}) => {
    const product: Product | undefined = products.find(p => p.id === params.id)
    
    if (product) {
        response.body = {
            success: true,
            data: product
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: "No product was found."
        }
    }
}

// @desc    Add a product
// @route   POST /api/v1/products
export const addProduct = async ({request, response}: {request: any, response: any}) => {
    const body = await request.body()

    if (!request.hasBody()) {
        response.status = 400
        response.body = {
            success: false,
            msg: "Faulty request: No data."
        }
    } else {
        const product = body.value
        product.id = v4.generate()
        products.push(product)

        response.status = 201
        response.body = {
            success: true,
            msg: "Product was registered."
        }
    }
}

// @desc    Update a product
// @route   PUT /api/v1/products
export const updateProduct = async ({params, request, response}: { params: {id: string}, request: any, response: any}) => {
    const product: Product | undefined = products.find(p => p.id === params.id)
    
    if (product) {
        const body = await request.body()
        
        const updateData: { 
            name?: string; 
            description?: string; 
            price?: number 
        } = body.value

        products = products.map(p => p.id === params.id ? {...p, ...updateData} : p)

        response.status = 300
        response.body = {
            success: true,
            msg: "Product was updated."
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: "No product was found."
        }
    }
}

// @desc    Delete a product
// @route   DELETE /api/v1/products
export const deleteProduct = ({params, response}: {params: {id: string}, response: any}) => {
    products = products.filter(p => p.id !== params.id)

    response.body = {
        success: true,
        msg: "Product was removed."
    }
}