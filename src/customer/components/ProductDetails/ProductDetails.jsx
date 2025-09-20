import { StarIcon } from '@heroicons/react/20/solid'
import { Rating } from '@mui/material'
import { Button } from '@mui/material'
import { Grid, Box } from '@mui/material'
import React, { useEffect } from 'react'
import { CircularProgress, LinearProgress } from '@mui/material'
import ProductReviewCard from './ProductReviewCard'
import { mens_shirts } from '../../../data/mens_shirts'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { useNavigate, useSearchParams } from 'react-router-dom'
import { findProductsById } from '../../../State/Product/Action'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { store } from '../../../State/store'
import { addItemToCart } from '../../../State/Cart/Action'

const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
        { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
        { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
    ],
    sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const params = useParams()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { products } = useSelector(store => store);

    console.log("---- ", params.productId)
    const handleAddtoCart = () => {
        if (!selectedSize) {
            alert("Please select a size!");
            return;
        }
        const data = { productId: params.productId, size: selectedSize };
        console.log("data...",data)
        dispatch(addItemToCart(data));
        navigate("/cart");
    };

    useEffect(() => {
        const data = { productId: params.productId }
        dispatch(findProductsById(data))
    }, [params.productId])
    return (
        <div className="bg-white lg:px-20">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                        {product.breadcrumbs.map((breadcrumb) => (
                            <li key={breadcrumb.id}>
                                <div className="flex items-center">
                                    <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                                        {breadcrumb.name}
                                    </a>
                                    <svg
                                        fill="currentColor"
                                        width={16}
                                        height={20}
                                        viewBox="0 0 16 20"
                                        aria-hidden="true"
                                        className="h-5 w-4 text-gray-300"
                                    >
                                        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                                    </svg>
                                </div>
                            </li>
                        ))}
                        <li className="text-sm">
                            <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-10'>
                    {/* Image gallery */}
                    <div className="flex flex-col items-center">
                        <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
                            <img
                                alt={product.images[0].alt}
                                src={products.product?.imageUrl || product.images[0].src}
                                className="row-span-2 aspect-3/4 size-full rounded-lg object-cover max-lg:hidden"
                            />
                        </div>
                        <div className="flex flex-wrap space-x-5 justify-center">
                            {product.images.map((item) => <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4'>

                                <img
                                    alt={item.alt}
                                    src={item.src}
                                    className="col-start-2 aspect-3/2 size-full rounded-lg object-cover max-lg:hidden"
                                />
                            </div>)}
                        </div>
                    </div>
                    {/* Product info */}
                    <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
                        <div className="lg:col-span-2 ">
                            <h1 className="text-lg lg:text-xl font-semibold text-gray-900">  {products.product?.brand}</h1>
                            <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1 ">
                                {products.product?.title}
                            </h1>
                        </div>

                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <div className='flex space-x-5 item-center text-lg lg:text-xl text-gray-900 mt-6'>
                                <p className='font-semibold'>
                                    {products.product?.discountedPrice}
                                </p>
                                <p className='opacity-50 line-through '>

                                    {products.product?.price}
                                </p>
                                <p className='text-green-600 font-semibold '>
                                    {products.product?.discountPersent}%Off

                                </p>
                            </div>
                            {/* Reviews */}
                            <div className="mt-6">
                                <div className="flex flex-item-center space-x-3" >

                                    <Rating name="read-only" value={5.5} readOnly />
                                    <p className='opacity-50 text-sm'> 56540 Rating</p>
                                    <p className='ml-3 font-medium text-indigo-600 hover:text-indigo-500 text-sm'> 3870 Reviews</p>
                                </div>
                            </div>

                            <form className="mt-10">

                                {/* Sizes */}
                                <div className="mt-10">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                                    </div>

                                    <fieldset aria-label="Choose a size" className="mt-4">
                                        <div className="grid grid-cols-4 gap-3">
                                            {product.sizes.map((size) => (
                                                <label
                                                    key={size.name} // use unique key
                                                    aria-label={size.name}
                                                    className={`group relative flex items-center justify-center rounded-md border p-3 cursor-pointer 
          ${selectedSize === size.name ? "border-indigo-600 bg-indigo-600 text-white" : "border-gray-300 bg-white text-gray-900"}
          ${!size.inStock ? "opacity-25 cursor-not-allowed" : ""}`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="size"
                                                        value={size.name}
                                                        disabled={!size.inStock}
                                                        checked={selectedSize === size.name}
                                                        onChange={() => setSelectedSize(size.name)}
                                                        className="absolute inset-0 appearance-none"
                                                    />
                                                    <span className="text-sm font-medium uppercase">{size.name}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </fieldset>

                                </div>

                                <Button onClick={handleAddtoCart} variant="contained" sx={{ px: "2rem", py: "1rem", bgcolor: "#9155fd" }}>
                                    Add to Cart
                                </Button>
                            </form>
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
                            {/* Description and details */}
                            <div>
                                <h3 className="sr-only">Description</h3>

                                <div className="space-y-6">
                                    <p className="text-base text-gray-900">{product.description}</p>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                                <div className="mt-4">
                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight} className="text-gray-400">
                                                <span className="text-gray-600">{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                                <div className="mt-4 space-y-6">
                                    <p className="text-sm text-gray-600">{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* rating and reviews */}
                <section>
                    <h1 className='font-semibold text-lg pb-4'> Recent Reviews and rating</h1>
                    <div className='border p-5'>
                        <Grid container spacing={7}>
                            <Grid item xs={7}>
                                <div className='space-y-5'>
                                    {[1, 1, 1].map((item) => <ProductReviewCard />)}

                                </div>

                            </Grid>
                            <Grid item xs={5} sx={{ pl: 68 }}>
                                <h1 className='text-xl font-semibold pb-2 '>
                                    Product Ratings
                                </h1>
                                <div className='flex items-center space-x-3'>
                                    <Rating value={4.6} precision={.5} readOnly />
                                    <p className='opacity-60'>
                                        594890 Ratings
                                    </p>
                                </div>
                                <Box className="mt-5 space-y-3">
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p> Excellent</p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <CircularProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={40} color="success" />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p> Very Good </p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <CircularProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={30} color="success" />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p> Good </p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <CircularProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7, color: "yellow" }} variant="determinate" value={25} />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p> Average </p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <CircularProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={20} color="warning" />
                                        </Grid>
                                    </Grid>
                                    <Grid container alignItems="center" gap={2}>
                                        <Grid item xs={2}>
                                            <p> Poor </p>
                                        </Grid>
                                        <Grid item xs={7}>
                                            <CircularProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={10} color="error" />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </div>
                </section>
                {/* similar products */}
                <section className='pt-5'>
                    <h1 className="py-5 text-xl font-bold">
                        Similar Products
                    </h1>
                    <div className="flex flex-wrap space-y-5">
                        {mens_shirts[0].products.map(product => (
                            <HomeSectionCard product={product} key={product.id} />
                        ))};
                    </div>

                </section>

            </div>
        </div>
    )
}
