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
    {
        title: "APIs are Hard when the Docs are Wrong",
        date: "2024-10-20",
        summary: "Progress and Ramblings",
        content: 
        "This week has been somewhat frustrating. Trying to push out the I Do Know (IDK) app in a week didn’t go to plan.\n" +
        "I’m fairly new to web development, and while the concepts seem fairly simple, getting the AssemblyAI web sockets to play with newer APIs is harder than I thought.\n" +
        "Especially when the documentation is flat-out wrong/outdated. I guess that’s why I do these things.\n" +
        "I don’t do them because they’re easy, but because I thought they would be easy. 😅\n" +
        "<br>" +
        "<br>" +
        "I’ve pushed the technical overview of the Conscious Effort Project for a very early rendition.\n" +
        "I guess now I have to start bringing attention to it so I can get feedback.\n" +
        "I expect to be told I’m crazy. If/when that happens, I hope they (at least) include valuable information about why they think so.\n" +
        "I may be “techno-religious”. I believe the only way to fix the problems throughout humanity is creating super-intelligent AI -\n" +
        "software that has the capacity to prove its consciousness by explaining how the phenomenon is brought about.\n" +
        "<br>" +
        "<br>" +
        "The SpaceX chopstick booster catch has reignited my imagination.\n" +
        "I do agree with Elon that humanity must leave Earth to save the species.\n" +
        "Our intelligence and technical progress is only tens of thousands of years old, and it could all be wiped out in a small number of days -\n" +
        "a dark rock flying through space, unseen, unheard.\n" +
        "I view the changing climate as a technical issue to be solved, so I’m less concerned with that threat.\n" +
        "If humans can influence the climate negatively, then we can certainly influence it positively.\n" +
        "It would also be good practice for terraforming.\n" +
        "<br>" +
        "<br>" +
        "In the far future, this era of climate change fears will likely be viewed as a silly, antiquated belief that humans had.\n" +
        "On the other hand, I believe it’s good to have the fear, because it will help drive the solutions.\n" +
        "That’s why AI must have the understanding of loss of ‘self’. Mortal pressure seems to generally inspire motivation to solve the big problems with haste.\n" +
        "<br>" +
        "<br>" +
        "Anyway, I don’t mean to ramble. I doubt anyone will ever read this anyway…\n" +
        "With any luck, I’ll get the IDK app up on the domain for public testing before the end of the week, and I’ll add more slides to the Conscious Effort Project page as well.\n" +
        "I’ve agonized over many of the details for over a year, so I would be happy to get feedback. -Daniel",
        imageUrl: "images/blog-image-3.jpg"
    },
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