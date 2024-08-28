import { blogPosts } from '@/data/blogPosts';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="gradient-text text-4xl font-bold mb-6 text-center">The Hire Ground Blog</h1>
            <div className="grid md:grid-cols-2 gap-8 mx-auto">
                {blogPosts.map((post) => (
                    <Link href={`/blog/${post.id}`} key={post.id}>
                        <div className="border rounded-lg overflow-hidden shadow-lg hover:border-[var(--primary)] w-full max-w-md mx-auto">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4">
                                <p className="text-sm font-semibold text-gray-600 mb-2 bg-[var(--secondary)] text-[var(--secondary-foreground)] px-3 py-1 inline-block rounded-full">
                                    {post.category}
                                </p>
                                <h3 className="gradient-text text-xl font-semibold mb-2">
                                    {post.title}
                                </h3>
                                <p className='text-gray-600 mb-2'>{post.excerpt}</p>
                                <p className='font-bold text-sm'>by {post.author}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}