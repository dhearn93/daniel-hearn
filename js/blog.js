const blogPosts = [
    {
        title: "To New Beginnings",
        date: "2024-10-06",
        summary: "I'm going to (hopefully) post something here every week as a sort of personal progress report.",
        content: "I've always thought blogging was kinda lame, but I need to start writing out my thoughts and progress to keep myself motivated and on track.\n" +
        "This will be a sort of personal development blog, but not really. I'm getting ready to seek funding for my startup, Conscious Effort, and I'm anxious that people will think I'm crazy.\n" +
        "I'm not sure if I'll be able to keep up with the pace of writing here, but I'm going to try. Regardless, I'm excited to see where my life is going.\n" +
        "I have another child on the way, and I'm starting to get serious about my business. - Daniel",
        imageUrl: "images/blog-image.jpg"
    },
    {
        title: "The Conscious Effort Project and IDK",
        date: "2024-10-13",
        summary: "Consciousness? Also, I'm working on a new side-project called IDK (I Do Know).",
        content: "I've been thinking about what it means to be conscious. This mystical essence of being alive and aware that has eluded scientists and philosophers for millenia. " +
        "I've begun to believe that only through the discovery of new forms of consciousness that can outwardly express itself can we begin to understand this phenomena. " +
        "Over the next few days, I'll be releasing a comprehensive technical overview of the Conscious Effort project in an effort on the consciouseffort.dev website " +
        "to both explain my ideas and seek feedback. I want to have an alpha version of my cognitive architecture online in the next few months, so I'm under a lot of pressure " +
        "to get things done. I've also been working on a new project called IDK (I Do Know) that transcribes audio in real-time for meetings and interviews, providing you with " +
        "contextually correct answers to any question asked by the other participants. As long as I can get the various APIs to play nice, I'll have it online by the end of the week " +
        "at idoknow.info. - Daniel",
        imageUrl: "images/blog-image-2.jpg"
    },
    // {
    //     title: "week 3",
    //     date: "2024-10-20",
    //     summary: "",
    //     content: "",
    //     imageUrl: "images/blog-post-1.jpg"
    // },
];

function createBlogPost(post) {
    const article = document.createElement('article');
    article.className = 'blog-post';
    article.innerHTML = `
        <img src="${post.imageUrl}" alt="${post.title}" class="blog-image">
        <div class="blog-content">
            <h2>${post.title}</h2>
            <p class="date">${post.date}</p>
            <p class="summary">${post.summary}</p>
            <p class="full-content" style="display: none;">${post.content}</p>
            <a href="#" class="read-more">Read More <i class="fas fa-chevron-down"></i></a>
        </div>
    `;

    const readMoreLink = article.querySelector('.read-more');
    const fullContent = article.querySelector('.full-content');
    const arrow = readMoreLink.querySelector('i');

    readMoreLink.addEventListener('click', (e) => {
        e.preventDefault();
        if (fullContent.style.display === 'none') {
            fullContent.style.display = 'block';
            readMoreLink.textContent = 'Read Less ';
            readMoreLink.appendChild(arrow);
            arrow.classList.remove('fa-chevron-down');
            arrow.classList.add('fa-chevron-up');
        } else {
            fullContent.style.display = 'none';
            readMoreLink.textContent = 'Read More ';
            readMoreLink.appendChild(arrow);
            arrow.classList.remove('fa-chevron-up');
            arrow.classList.add('fa-chevron-down');
        }
    });

    return article;
}

document.addEventListener('DOMContentLoaded', () => {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        blogPostsContainer.appendChild(createBlogPost(post));
    });
});