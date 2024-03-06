//'use client';
import React from "react";
import Link from "next/link";
import PageHeader from "@/components/PageHeader"
import Image from "next/image";
import About_Image from "@/public/assets/images/png/About_us_image.png";
import Services from "@/components/Services"
import BlogCard from "@/components/BlogCard";
import popularCategories from "@/lib/products_data"
import getDataTest from "@/lib/getDataTest"




export default async function Page() {
  const posts = await getDataTest();
  return (
<main>

<PageHeader header="Blog" />



{/** BLOG POSTS SECTION STARTS*/}

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-20">

    {/** LOOP RECORDS STARTS */}
      {
      posts.map(
        (post:any) => {
                      return (

                              <BlogCard
                                key={post.id}
                                title={post.name}
                                description={post.createdAt}
                                date={post.createdAt}
                                image={post.avatar}
                              />

                             )
          }
        )
      }
    {/** LOOP RECORDS ENDS */}

</div>

{/** BLOG POSTS SECTION ENDS*/}

</main>
  );
}
