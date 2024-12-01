import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import BlogPost from '../components/BlogPost';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const Blog = () => {
  const { postId } = useParams();

  if (postId) {
    const post = blogPosts.find(p => p.id === parseInt(postId));
    if (!post) {
      return (
        <div className="min-h-screen pt-24">
          <div className="container">
            <h1 className="text-4xl font-bold mb-8">Post not found</h1>
            <Link to="/blog" className="text-primary hover:underline">← Back to blog</Link>
          </div>
          <Contact />
        </div>
      );
    }
    
    return (
      <div className="min-h-screen pt-24">
        <div className="container">
          <Link to="/blog" className="text-primary hover:underline mb-8 block">← Back to blog</Link>
          <BlogPost post={post} />
        </div>
        <div className="mt-16">
          <Contact />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="grid gap-6">
          {blogPosts.map((post) => (
            <article key={post.id} className="glass p-6 rounded-xl hover:scale-[1.02] transition-transform">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-48 px-4 md:px-0">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <Link to={`/blog/${post.id}`}>
                      <h2 className="text-2xl font-semibold hover:text-primary">{post.title}</h2>
                    </Link>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      {post.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <time className="text-sm text-muted-foreground">{post.date}</time>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-primary hover:underline"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Blog;