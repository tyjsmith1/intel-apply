import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPost({ params }) {
    const { id } = params;
    const post = blogPosts.find(post => post.id === parseInt(id));

    if (!post) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link href="/blog" className="text-blue-500 hover:underline mb-4 inline-block">
                &larr; Back to all posts
            </Link>
            <h1 className="gradient-text text-4xl font-bold mb-6">{post.title}</h1>
            <div className="mb-4 flex items-center space-x-4">
                <span className="text-sm font-semibold text-gray-600 bg-[var(--secondary)] text-[var(--secondary-foreground)] px-3 py-1 rounded-full">
                    {post.category}
                </span>
                <p className="text-gray-600">By {post.author}</p>
            </div>
            <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg mb-6"
            />
            <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </div>
    );
}