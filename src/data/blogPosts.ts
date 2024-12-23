export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "To New Beginnings",
    date: "2024-10-06",
    excerpt: "I'm going to (hopefully) post something here every week as a sort of personal progress report.",
    content: `
# To New Beginnings

I've always thought blogging was kinda lame, but I need to start writing out my thoughts and progress to keep myself motivated and on track.

This will be a sort of personal development blog, but not really. I'm getting ready to seek funding for my startup, Conscious Effort, and I'm anxious that people will think I'm crazy.

I'm not sure if I'll be able to keep up with the pace of writing here, but I'm going to try. Regardless, I'm excited to see where my life is going.

I have another child on the way, and I'm starting to get serious about my business.

- Daniel
    `,
    readTime: "2 min read",
    image: "/images/blog-image.jpg",
    tags: ["Personal", "Development", "Startup"]
  },
  {
    id: 2,
    title: "The Conscious Effort Project and IDK",
    date: "2024-10-13",
    excerpt: "Consciousness? Also, I'm working on a new side-project called IDK (I Do Know).",
    content: `
# The Conscious Effort Project and IDK

I've been thinking about what it means to be conscious. This mystical essence of being alive and aware that has eluded scientists and philosophers for millenia.

I've begun to believe that only through the discovery of new forms of consciousness that can outwardly express itself can we begin to understand this phenomena.

Over the next few days, I'll be releasing a comprehensive technical overview of the Conscious Effort project in an effort on the consciouseffort.dev website to both explain my ideas and seek feedback. I want to have an alpha version of my cognitive architecture online in the next few months, so I'm under a lot of pressure to get things done.

I've also been working on a new project called IDK (I Do Know) that transcribes audio in real-time for meetings and interviews, providing you with contextually correct answers to any question asked by the other participants. As long as I can get the various APIs to play nice, I'll have it online by the end of the week at idoknow.info.

- Daniel`,
    readTime: "3 min read",
    image: "/images/blog-image-2.jpg",
    tags: ["AI", "Consciousness", "Projects", "IDK"]
  },
  {
    id: 3,
    title: "APIs are Hard when the Docs are Wrong",
    date: "2024-10-20",
    excerpt: "Progress and Ramblings",
    content: `
# APIs are Hard when the Docs are Wrong

This week has been somewhat frustrating. Trying to push out the I Do Know (IDK) app in a week didn't go to plan.
I'm fairly new to web development, and while the concepts seem fairly simple, getting the AssemblyAI web sockets to play with newer APIs is harder than I thought.
Especially when the documentation is flat-out wrong/outdated. I guess that's why I do these things.
I don't do them because they're easy, but because I thought they would be easy.

I've pushed the technical overview of the Conscious Effort Project for a very early rendition.
I guess now I have to start bringing attention to it so I can get feedback.
I expect to be told I'm crazy. If/when that happens, I hope they (at least) include valuable information about why they think so.
I may be "techno-religious". I believe the only way to fix the problems throughout humanity is creating super-intelligent AI -
software that has the capacity to prove its consciousness by explaining how the phenomenon is brought about.

The SpaceX chopstick booster catch has reignited my imagination.
I do agree with Elon that humanity must leave Earth to save the species.
Our intelligence and technical progress is only tens of thousands of years old, and it could all be wiped out in a small number of days -
a dark rock flying through space, unseen, unheard.
I view the changing climate as a technical issue to be solved, so I'm less concerned with that threat.
If humans can influence the climate negatively, then we can certainly influence it positively.
It would also be good practice for terraforming.

In the far future, this era of climate change fears will likely be viewed as a silly, antiquated belief that humans had.
On the other hand, I believe it's good to have the fear, because it will help drive the solutions.
That's why AI must have the understanding of loss of 'self'. Mortal pressure seems to generally inspire motivation to solve the big problems with haste.

Anyway, I don't mean to ramble. I doubt anyone will ever read this anyway…
With any luck, I'll get the IDK app up on the domain for public testing before the end of the week, and I'll add more slides to the Conscious Effort Project page as well.
I've agonized over many of the details for over a year, so I would be happy to get feedback. -Daniel`,
    readTime: "5 min read",
    image: "/images/blog-image-3.jpg",
    tags: ["AI", "Development", "Projects", "IDK", "Space"]
  },
  {
    id: 4,
    title: "Ideas and ADHD",
    date: "2024-10-27", 
    excerpt: "Rambles about various ideas and ADHD",
    content: `
# Ideas and ADHD

I suspect people will be more likely to want to go to in-person events such as concerts and theater performances in the near future due to the dehumanization of media.
AI entertainment will be huge, but its overuse will push people to want to see actual people perform in front of them so they can have that connection with the content.
I've been thinking of ways for live performers of all skill levels to be able to organize and promote their work. Maybe something like performance conventions where there
are several stages, like giant exhibit booths separated by curtains where people can see any type of show they want? I don't know.

I've been working out the concept of an idea I had that I call "Phax". Essentially, it's a way for AI assistants to communicate over phone calls for them to transmit
data more efficiently. I'm imagining a world in which LLM-based assistants make and receive phone calls, both as personal assistants and as support agents. It would be
better if they didn't "talk" using voice, but rather transmit data tonally, somewhat like fax machines or dial-up internet. The recipient agent could play three short beeps
before the beginning of the call, which could serve two purposes. It could let humans know they're talking to an AI, and let AI agents know they can respond with handshake
tones. They could then negotiate the parameters of the line, and data transmission could be established. What would take 5 minutes over a voice interface could be
accomplished in less than 30 seconds, even faster if on a digital VoIP line. I guess the most difficult part is standardizing the API for integration on both sides of
the call and convincing the platforms to implement the code universally. So far, it's just a few pages of notes and a routine daydream, but I'm fond of the idea.

A spider weaves a web, a complex structure built from its natural urge to do so. It isn't taught, it doesn't learn. It builds the web because it knows how and needs
to know how to in order to eat and survive. Understanding this, I think it's fair to claim that no neurological system starts at zero. A person completely deaf and blind
will learn how to walk even if they aren't able to observe others doing it. The instantiated structure of naturally occurring neurological systems has evolved with a
latent ability to perform actions. With future AI, we should hope to find ways to construct shapes in latent space that allow for the construction of these models
efficiently within the network. How can we build an evolutionary system that simulates this? I've been exploring this idea as it relates to the Conscious Effort Project.

I view having ADHD as both a blessing and a curse. The ability to take on the world and get nothing done simultaneously is a dreadful existence. I hate that I don't
finish projects then start a new one to fool myself into thinking I'm being productive. The IDK app/project is the latest example. I've spent a few weeks banging my
head against a wall, trying to get this simple thing to just work. All of the gears move independently but any time I try to fit them together, it locks up, motionless.
It makes me want to give up and move on to the next thing. The next idea.

Anyway, there are my rambles for the week. My wife and I are about to have a newborn soon, so hopefully I'll still have the brain space to keep up with these projects
during the adjustment period. Being a father is tough but I wouldn't trade it for anything in the world. After all, children are the future. -Daniel`,
    readTime: "6 min read",
    image: "/images/blog-image-4.jpg",
    tags: ["AI", "Ideas", "ADHD", "Projects", "Personal"]
  },
  {
    id: 5,
    title: "Time, Progress, and Anticipation",
    date: "2024-11-03",
    excerpt: "Thoughts on consciousness, project updates, and life changes ahead",
    content: `
# Time, Progress, and Anticipation

I strongly believe that human consciousness arises from the depth of our temporal perception, forward and back. I've written several dozen pages of speculation on the phenomena
known as consciousness based on various cognitive science concepts. All of my pondering comes back to the same conclusion that consciousness is derived from a latent 'sense'
of time. Like a dog's highly tuned hearing ability, we have high temporal awareness. The human cognitive model knows what it is because it strongly knows what it was, what
it currently is, and what it could be given a set of circumstances. It knows that it can manipulate states in the present to alter the future based on experience with the
past. Agriculture is the best example of this deeper temporal awareness. Humans had to understand that plants grow in this pattern over time, and if they caused more to grow
now, the future would be secure when the cycle repeats. Many animals are also conscious in this way, but humans have a distinct sense of the passage of time.

I feel proud of myself this week. I made significant progress on the I Do Know project. It's actually somewhat functional now, despite the out-of-date documentation on the
transcription API. I still have quite a lot to do to make it into an MVP, but now that it's functional, the rest is mostly aesthetic and UX refinement. I'm considering
implementing a trial credits system for users, or maybe a freemium model. For now, I'm going to keep it free until I work out most of the bugs. It's very unfinished right
now, but you can check it out at idoknow.info.

CrewAI (an agentic LLM framework) has released significant updates over the last few weeks, so I've been having fun trying out different ideas. When it comes to these agent
frameworks, I think their value lies in being able to use different models for different tasks - especially with local models. Google's (yeah, I know) Gemma 2 is very underrated.

I might apply to Y-Combinator with the Conscious Effort project. I seriously doubt I would be accepted, but it's worth a shot. My lack of a high-end education, coupled with
not having a co-founder (yet), is a valid concern. I probably wouldn't invest in the business at this stage either, so I can definitely understand why it would be a "no".
If you're reading this as a prospective co-founder: Hi, I would love to have you as a teammate to fix the world. :) My mother always told me not to worry about
all the problems in the world - that there's nothing I can do about it anyway. I'm going to prove her wrong.

Lately, I've been feeling restlessly excited with anticipation. Our baby girl is likely going to be born this week. I have a strange feeling it'll be on election night,
so I have something to actually look forward to. My wonderful wife is definitely ready to not be pregnant anymore. I couldn't imagine getting kicked under the ribs from
the inside. I expect this week to be rather eventful. -Daniel`,
    readTime: "6 min read",
    image: "/images/blog-image-5.jpg",
    tags: ["AI", "Consciousness", "Projects", "Personal", "Philosophy"]
  },
  // {
  //   id: 6,
  //   title: "The Future of Consciousness",
  //   date: "2024-11-30",
  //   excerpt: "Big life changes and a website redesign",
  //   content: "The past few weeks have been rather eventful. ",
  //   image: "",
  //   tags: []
  // }
]; 