import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="min-h-screen pt-24">
        <div className="container">
          <h1 className="text-4xl font-bold mb-8">Post not found</h1>
          <button 
            onClick={() => navigate('/blog')}
            className="text-primary hover:underline"
          >
            ← Back to blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container">
        <button 
          onClick={() => navigate('/blog')}
          className="text-primary hover:underline mb-8 block"
        >
          ← Back to blog
        </button>
        <article className="prose lg:prose-xl max-w-none">
          <h1>{post.title}</h1>
          <div className="flex gap-4 text-muted-foreground">
            <time>{post.date}</time>
            <span>{post.readTime}</span>
          </div>
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-[400px] object-cover rounded-xl my-8"
          />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost; 