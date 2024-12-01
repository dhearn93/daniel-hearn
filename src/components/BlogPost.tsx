import { useState } from 'react';
import { cn } from "@/lib/utils";
import { BlogPost as BlogPostType } from '../data/blogPosts';
import ReactMarkdown from 'react-markdown';

interface BlogPostProps {
  post: BlogPostType;
}

const BlogPost = ({ post }: BlogPostProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article className="max-w-4xl mx-auto">
      <div className="mb-8 relative">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse rounded-xl h-[400px]" />
        )}
        <img 
          src={post.image} 
          alt={post.title}
          className={cn(
            "w-full h-[400px] object-cover rounded-xl transition-opacity duration-300",
            !imageLoaded && "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <time>{post.date}</time>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      <div className="flex gap-2 mb-8">
        {post.tags.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default BlogPost; 