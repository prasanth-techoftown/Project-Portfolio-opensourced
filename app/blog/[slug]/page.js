// // @flow strict
// import { personalData } from "@/utils/data/personal-data";

// async function getBlog(slug) {
//   const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`)

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   const data = await res.json();
//   return data;
// };

// async function BlogDetails({params}) {
//   const slug = params.slug;
//   const blog = await getBlog(slug);
 
//   return (
//     <div>
//     </div>
//   );
// };

// export default BlogDetails;

// @flow strict
import { personalData } from "@/utils/data/personal-data";

// SEO Metadata Generation
export async function generateMetadata({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);

  return {
    title: `${blog.title} | Prasanth K`,
    description: blog.description || "Read more about software engineering and tech insights on Prasanth's blog.",
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://yourdomain.com/blog/${slug}`,
      images: [
        {
          url: blog.cover_image || blog.social_image,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
      type: 'article',
      publishedTime: blog.published_at,
      authors: [personalData.name],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.description,
      images: [blog.cover_image || blog.social_image],
    },
  };
}

async function getBlog(slug) {
  const res = await fetch(`https://dev.to/api/articles/${personalData.devUsername}/${slug}`, {
    next: { revalidate: 3600 } // Cache for 1 hour for performance
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return await res.json();
};

async function BlogDetails({ params }) {
  const slug = params.slug;
  const blog = await getBlog(slug);
 
  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      {/* Blog Detail UI goes here */}
      <h1 className="text-3xl font-bold text-white mb-4">{blog.title}</h1>
      <img src={blog.cover_image} alt={blog.title} className="rounded-lg mb-8" />
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: blog.body_html }} />
    </div>
  );
};

export default BlogDetails;