'use client';
import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader"
import Image from "next/image";
import About_Image from "@/public/assets/images/png/About_us_image.png";
import Services from "@/components/Services"
import ProductDisplay from "@/components/ProductsDisplay";
import popularCategories from "@/lib/products_data"
import arrow from "@/public/assets/images/png/right-arrow.png";
import dynamic from "next/dynamic";


import { useParams } from 'next/navigation'
//import { useRouter } from 'next/navigation'
 
export default function Page() {
  const params = useParams<{ id: string; slug: string }>();

  //const router = useRouter();
  //router.push('/track');

  return (
<main>

<PageHeader header="Product Description" />

<h1>ID: {params.id}</h1>
<h1>SLUG: {params.slug}</h1>


</main>
  );
}

