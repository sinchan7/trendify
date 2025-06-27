import { NextResponse } from 'next/server';
import { TrendingItem } from '@/types/trending';

const trendingData: Record<string, TrendingItem[]> = {
  news: [
    {
      id: 1,
      title: 'ChatGPT Takes Over Tech World',
      description: 'The AI revolution continues as ChatGPT becomes the fastest-growing consumer app in history.',
      category: 'News',
      timestamp: '2024-03-20T10:00:00Z',
      trendingScore: 45,
      author: 'Sarah Johnson',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
      source: 'Tech Insider',
      tags: ['AI', 'Technology', 'ChatGPT', 'OpenAI'],
      link: 'https://techcrunch.com/tag/chatgpt/',
      fullContent: `In a groundbreaking development, ChatGPT has become the fastest-growing consumer application in history, reaching 100 million active users in just two months after its launch. The AI chatbot, developed by OpenAI, has sparked a revolution in how we interact with artificial intelligence.

Industry experts suggest this unprecedented growth is just the beginning of a larger AI transformation across various sectors. Companies worldwide are racing to integrate AI capabilities into their products and services, leading to what many are calling the "AI Gold Rush."

"We're witnessing a paradigm shift in how humans interact with technology," says Dr. Emily Chen, AI researcher at Stanford University. "ChatGPT's success demonstrates the massive potential and public readiness for AI-powered solutions."`,
    },
    {
      id: 4,
      title: 'New Space Discovery',
      description: 'Scientists discover potential signs of life on distant exoplanet.',
      category: 'News',
      timestamp: '2024-03-20T07:15:00Z',
      trendingScore: 38,
      author: 'Dr. Michael Chang',
      readTime: '8 min read',
      imageUrl: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa',
      source: 'Space Weekly',
      link: 'https://www.space.com/news',
      tags: ['Space', 'Astronomy', 'Exoplanets', 'Science'],
      fullContent: `In a historic announcement, NASA scientists have revealed compelling evidence of potential biological signatures on Kepler-789b, an exoplanet located 40 light-years from Earth. The discovery was made using the James Webb Space Telescope's advanced spectroscopic instruments.

The findings suggest the presence of methane and other organic compounds in the planet's atmosphere, combinations that typically indicate biological processes. While researchers caution that further confirmation is needed, this discovery marks a significant step forward in our search for extraterrestrial life.`,
    },
    {
      id: 7,
      title: 'Global Climate Summit Reaches Historic Agreement',
      description: 'World leaders commit to ambitious new climate goals at COP29.',
      category: 'News',
      timestamp: '2024-03-19T14:30:00Z',
      trendingScore: 42,
      author: 'Elena Rodriguez',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1569163139599-0f4517e36f51',
      source: 'Global Environment Report',
      link: 'https://www.reuters.com/sustainability/climate-energy/',
      tags: ['Climate Change', 'Politics', 'Environment', 'Global Summit'],
      fullContent: `In a landmark decision at the COP29 climate summit, 195 countries have agreed to accelerate their transition to renewable energy and achieve carbon neutrality by 2045. The agreement includes substantial financial commitments from developed nations to support developing countries in their green transition.`,
    },
    {
      id: 8,
      title: 'Revolutionary Cancer Treatment Shows Promise',
      description: 'New immunotherapy approach achieves 90% success rate in early trials.',
      category: 'News',
      timestamp: '2024-03-19T11:45:00Z',
      trendingScore: 35,
      author: 'Dr. James Wilson',
      readTime: '7 min read',
      imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557',
      source: 'Medical Science Today',
      link: 'https://www.nature.com/subjects/cancer',
      tags: ['Healthcare', 'Cancer Research', 'Medicine', 'Science'],
      fullContent: `A groundbreaking cancer treatment developed by researchers at Stanford Medical Center has shown exceptional results in early clinical trials. The new approach combines traditional immunotherapy with AI-guided personalization, achieving a 90% response rate in patients with advanced-stage cancers.`,
    },
    {
      id: 13,
      title: 'Quantum Computing Breakthrough',
      description: 'Scientists achieve quantum supremacy in new experiment.',
      category: 'News',
      timestamp: '2024-03-19T08:30:00Z',
      trendingScore: 41,
      author: 'Dr. Lisa Chen',
      readTime: '6 min read',
      imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
      source: 'Quantum Science Today',
      link: 'https://www.scientificamerican.com/computing/',
      tags: ['Quantum Computing', 'Technology', 'Science'],
      fullContent: `Researchers have achieved a major breakthrough in quantum computing, demonstrating quantum supremacy in a new experimental setup that promises to revolutionize the field.`,
    },
    {
      id: 14,
      title: 'Global Economic Summit',
      description: 'World leaders gather to address economic challenges.',
      category: 'News',
      timestamp: '2024-03-19T07:00:00Z',
      trendingScore: 37,
      author: 'Robert Martinez',
      readTime: '5 min read',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      source: 'Economic Times',
      link: 'https://www.economist.com/finance-and-economics',
      tags: ['Economy', 'Politics', 'Global'],
      fullContent: `Global leaders have convened at the World Economic Summit to address pressing economic challenges and discuss strategies for sustainable growth in the post-pandemic era.`,
    },
  ],
  music: [
    {
      id: 2,
      title: 'New Taylor Swift Album',
      description: 'Taylor Swift surprises fans with announcement of new album coming this summer.',
      category: 'Music',
      timestamp: '2024-03-20T09:30:00Z',
      trendingScore: 89,
      artist: 'Taylor Swift',
      album: 'Midnight Memories',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
      duration: '45 minutes',
      source: 'Rolling Stone',
      link: 'https://open.spotify.com/artist/06HL4z0CvFAxyc27GXpf02',
      tags: ['Pop', 'New Release', 'Taylor Swift'],
      fullContent: `Global pop sensation Taylor Swift has surprised fans with the announcement of her newest album, "Midnight Memories," set to release this summer. The announcement came through a creative social media campaign that had fans solving puzzles across various platforms.

The album, described as a "journey through the landscapes of memory," will feature 16 tracks, including collaborations with several acclaimed artists. Swift hints at a new sound direction, blending her signature storytelling with electronic and indie rock elements.`,
    },
    {
      id: 5,
      title: 'Drake and The Weeknd Collaboration',
      description: 'The two Toronto artists announce upcoming joint album.',
      category: 'Music',
      timestamp: '2024-03-20T06:45:00Z',
      trendingScore: 76,
      artist: 'Drake & The Weeknd',
      album: 'Northern Lights',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f',
      duration: '55 minutes',
      source: 'Billboard',
      link: 'https://music.apple.com/us/playlist/drake-the-weeknd-essentials/pl.u-6mo4lNmhj7mM6',
      tags: ['Hip Hop', 'R&B', 'Collaboration'],
      fullContent: `Two of Toronto's biggest music icons, Drake and The Weeknd, have officially announced their first full collaborative album, "Northern Lights." The project, which has been years in the making, promises to blend both artists' signature styles while pushing new creative boundaries.

The album will feature 12 tracks and includes guest appearances from several surprise artists. The first single is set to drop next week, with the full album release scheduled for early summer.`,
    },
    {
      id: 9,
      title: 'K-pop Sensation BTS Returns',
      description: 'BTS announces world tour following military service completion.',
      category: 'Music',
      timestamp: '2024-03-19T13:15:00Z',
      trendingScore: 82,
      artist: 'BTS',
      album: 'New Beginning',
      imageUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796',
      duration: '50 minutes',
      source: 'K-Pop Herald',
      link: 'https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX',
      tags: ['K-pop', 'BTS', 'World Tour', 'Comeback'],
      fullContent: `Global K-pop phenomenon BTS has announced their highly anticipated return to the music scene with a new album and world tour. The announcement comes as members complete their mandatory military service, marking a new chapter in the group's illustrious career.`,
    },
    {
      id: 10,
      title: 'Classical Meets Electronic',
      description: 'Hans Zimmer collaborates with Daft Punk for groundbreaking album.',
      category: 'Music',
      timestamp: '2024-03-19T10:00:00Z',
      trendingScore: 65,
      artist: 'Hans Zimmer & Daft Punk',
      album: 'Digital Symphony',
      imageUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d',
      duration: '62 minutes',
      source: 'Classical Music Weekly',
      link: 'https://music.apple.com/us/playlist/hans-zimmer-essentials/pl.6bf4415b83ce4f1789e311ab44e1cf7e',
      tags: ['Classical', 'Electronic', 'Collaboration', 'Innovative'],
      fullContent: `Legendary composer Hans Zimmer and electronic music pioneers Daft Punk have joined forces for a revolutionary album that bridges the gap between classical and electronic music. The project features a full orchestra combined with cutting-edge electronic production.`,
    },
    {
      id: 15,
      title: 'Rising Star Takes Charts by Storm',
      description: 'New artist breaks streaming records with debut album.',
      category: 'Music',
      timestamp: '2024-03-19T08:45:00Z',
      trendingScore: 72,
      artist: 'Luna Ray',
      album: 'Starlight',
      imageUrl: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81',
      duration: '48 minutes',
      source: 'Music Weekly',
      link: 'https://soundcloud.com/discover/sets/charts-trending:all-music',
      tags: ['Pop', 'New Artist', 'Streaming'],
      fullContent: `Emerging artist Luna Ray has taken the music industry by surprise with her debut album "Starlight," breaking multiple streaming records in its first week.`,
    },
    {
      id: 16,
      title: 'Rock Legends Reunion Tour',
      description: 'Iconic rock band announces global reunion tour.',
      category: 'Music',
      timestamp: '2024-03-19T07:30:00Z',
      trendingScore: 68,
      artist: 'The Stone Giants',
      album: 'Greatest Hits Live',
      imageUrl: 'https://images.unsplash.com/photo-1501612780327-45045538702b',
      duration: '180 minutes',
      source: 'Rock News',
      link: 'https://www.bandsintown.com/en/c/london-uk',
      tags: ['Rock', 'Concert', 'Tour'],
      fullContent: `Legendary rock band The Stone Giants have announced their long-awaited reunion tour, promising fans a spectacular show featuring their greatest hits and new material.`,
    },
  ],
  memes: [
    {
      id: 3,
      title: 'Viral Cat Video Takes Internet by Storm',
      description: 'Watch this hilarious cat reaction that has everyone talking.',
      category: 'Memes',
      timestamp: '2024-03-20T08:45:00Z',
      trendingScore: 67,
      creator: '@catmemesofficial',
      platform: 'Instagram',
      imageUrl: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba',
      shares: 1200000,
      link: 'https://www.instagram.com/cats_of_instagram/',
      tags: ['Cats', 'Viral', 'Funny', 'Instagram'],
      fullContent: `A new cat video has taken social media by storm, featuring a particularly expressive feline's reaction to its owner's magic trick. The video, which has garnered over 50 million views across platforms, shows the cat's jaw-dropping reaction to a disappearing treat trick.

The creator, known as @catmemesofficial, has since posted several follow-up videos showing behind-the-scenes footage and more of the cat's hilarious reactions to various situations.`,
    },
    {
      id: 6,
      title: 'New Dance Challenge Goes Viral',
      description: 'Instagram users cant stop recreating this trending dance move.',
      category: 'Memes',
      timestamp: '2024-03-20T05:30:00Z',
      trendingScore: 54,
      creator: '@dancememes',
      platform: 'Instagram',
      imageUrl: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
      shares: 890000,
      link: 'https://www.instagram.com/daquan/',
      tags: ['Dance', 'Challenge', 'Instagram', 'Viral'],
      fullContent: `The "Butterfly Bounce" dance challenge has taken Instagram by storm, with millions of users attempting to recreate the intricate sequence of moves. The challenge, started by creator @dancememes, combines elements of traditional butterfly dance moves with modern hip-hop style.

Celebrities and influencers have joined in on the trend, creating their own versions and adding personal twists to the original choreography. The hashtag #ButterflyBounceChallenge has accumulated over 2 billion views.`,
    },
    {
      id: 11,
      title: 'AI Generated Memes Take Over',
      description: 'New AI tool creates surprisingly hilarious meme content.',
      category: 'Memes',
      timestamp: '2024-03-19T15:45:00Z',
      trendingScore: 71,
      creator: '@aimemesdaily',
      platform: 'Instagram',
      imageUrl: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31',
      shares: 950000,
      link: 'https://www.instagram.com/9gag/',
      tags: ['AI', 'Technology', 'Funny', 'Instagram'],
      fullContent: `A new AI-powered meme generator has become the talk of social media, creating surprisingly witty and contextually aware memes. The tool, developed by a group of meme creators, uses machine learning to understand current trends and generate relevant, humorous content.`,
    },
    {
      id: 12,
      title: 'Gaming Fail Becomes Internet Gold',
      description: 'Streamer\'s unexpected reaction in horror game goes viral.',
      category: 'Memes',
      timestamp: '2024-03-19T09:15:00Z',
      trendingScore: 63,
      creator: '@gamingmemesofficial',
      platform: 'Instagram',
      imageUrl: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0',
      shares: 780000,
      link: 'https://www.instagram.com/gamology/',
      tags: ['Gaming', 'Instagram', 'Funny', 'Viral'],
      fullContent: `A gamer's hilarious reaction during a horror game playthrough has become the internet's latest sensation. The clip, which shows the streamer's unexpected response to a jump scare, has spawned countless remixes and recreations across Instagram.`,
    },
    {
      id: 17,
      title: 'Office Life Goes Viral',
      description: 'Remote work meme series captures corporate culture perfectly.',
      category: 'Memes',
      timestamp: '2024-03-19T08:00:00Z',
      trendingScore: 58,
      creator: '@corporatememes',
      platform: 'Instagram',
      imageUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc',
      shares: 820000,
      link: 'https://www.instagram.com/explore/tags/officememes/',
      tags: ['Office', 'Work', 'Relatable', 'Instagram'],
      fullContent: `A series of memes about remote work life has gone viral, perfectly capturing the quirks and challenges of modern corporate culture.`,
    },
    {
      id: 18,
      title: 'Pet Fashion Show Meme',
      description: 'Pets dressed as famous celebrities break the internet.',
      category: 'Memes',
      timestamp: '2024-03-19T06:45:00Z',
      trendingScore: 52,
      creator: '@petmemesofficial',
      platform: 'Instagram',
      imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e',
      shares: 750000,
      link: 'https://www.instagram.com/dogsofinstagram/',
      tags: ['Pets', 'Fashion', 'Funny', 'Instagram'],
      fullContent: `A trend of pet owners dressing their animals as famous celebrities has taken social media by storm, creating an endless stream of hilarious comparisons and recreations.`,
    },
  ],
  movies: [
    {
      id: 'mv1',
      title: 'Dune: Part Two Takes Box Office by Storm',
      description: 'Denis Villeneuve\'s epic sci-fi sequel dominates global box office with stunning visuals and performances.',
      category: 'Movies',
      timestamp: new Date().toISOString(),
      trendingScore: 98,
      imageUrl: 'https://images.unsplash.com/photo-1547499417-61a435d27cb3?auto=format&fit=crop&w=1920&q=80',
      creator: '@warnerbros',
      platform: 'Official',
      shares: 1200000,
      link: 'https://www.dunethemovie.com',
      tags: ['Dune', 'Sci-Fi', 'Timothée Chalamet', 'Zendaya', 'Box Office'],
      fullContent: `'Dune: Part Two' has exceeded all expectations, delivering a visually stunning and emotionally resonant continuation of Frank Herbert's epic saga. Director Denis Villeneuve's masterful vision brings the desert planet of Arrakis to life with breathtaking scale and detail. The film's stellar cast, led by Timothée Chalamet and Zendaya, delivers powerful performances that have captivated audiences worldwide. Critics are hailing it as a landmark achievement in science fiction cinema, praising its ambitious scope, technical excellence, and faithful adaptation of the source material.`
    },
    {
      id: 'mv2',
      title: 'Inside Out 2 Breaks Animation Records',
      description: 'Pixar\'s highly anticipated sequel explores new emotions and breaks opening weekend records.',
      category: 'Movies',
      timestamp: new Date().toISOString(),
      trendingScore: 92,
      imageUrl: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?auto=format&fit=crop&w=1920&q=80',
      creator: '@pixar',
      platform: 'Official',
      shares: 980000,
      link: 'https://www.pixar.com/inside-out-2',
      tags: ['Pixar', 'Animation', 'Inside Out', 'Family', 'Disney'],
      fullContent: `Pixar's 'Inside Out 2' has shattered box office records for animated features, bringing a fresh and innovative take on emotional growth. The sequel introduces new emotions and deeper themes, resonating with both children and adults alike. The film's groundbreaking animation techniques and heartfelt storytelling have earned universal acclaim, with critics praising its ability to tackle complex emotional subjects with humor and sensitivity. The movie's success demonstrates Pixar's continued excellence in creating meaningful animated experiences that push the boundaries of storytelling.`
    },
    {
      id: 'mv3',
      title: 'Oppenheimer Dominates Awards Season',
      description: 'Christopher Nolan\'s biographical thriller sweeps major awards and continues to captivate audiences.',
      category: 'Movies',
      timestamp: new Date().toISOString(),
      trendingScore: 95,
      imageUrl: 'https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?auto=format&fit=crop&w=1920&q=80',
      creator: '@universal',
      platform: 'Official',
      shares: 1100000,
      link: 'https://www.oppenheimermovie.com',
      tags: ['Oppenheimer', 'Christopher Nolan', 'Drama', 'Awards', 'Cillian Murphy'],
      fullContent: `Christopher Nolan's 'Oppenheimer' continues its remarkable journey through awards season, collecting numerous accolades for its powerful portrayal of J. Robert Oppenheimer and the Manhattan Project. Cillian Murphy's transformative performance as the titular character has earned universal praise, while Nolan's direction and the film's technical achievements have set new standards for biographical storytelling. The film's exploration of moral complexity and historical significance has sparked important discussions about science, ethics, and human responsibility.`
    },
    {
      id: 'mv4',
      title: 'Deadpool & Wolverine Trailer Breaks Records',
      description: 'Marvel\'s most anticipated team-up shatters viewing records with first trailer.',
      category: 'Movies',
      timestamp: new Date().toISOString(),
      trendingScore: 94,
      imageUrl: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?auto=format&fit=crop&w=1920&q=80',
      creator: '@marvel',
      platform: 'Official',
      shares: 1050000,
      link: 'https://www.marvel.com/deadpool-wolverine',
      tags: ['Marvel', 'Deadpool', 'Wolverine', 'Ryan Reynolds', 'Hugh Jackman'],
      fullContent: `The first trailer for 'Deadpool & Wolverine' has shattered all-time viewing records, amassing an unprecedented number of views within 24 hours of release. The highly anticipated Marvel film brings together Ryan Reynolds' Deadpool and Hugh Jackman's Wolverine in what promises to be an action-packed, humor-filled adventure. Fans are particularly excited about the chemistry between the two leads and the film's apparent embrace of both characters' signature styles. The trailer's success signals massive anticipation for this unique Marvel crossover event.`
    },
    {
      id: 'mv5',
      title: 'Poor Things Wins Critical Acclaim',
      description: 'Yorgos Lanthimos and Emma Stone\'s surreal masterpiece earns universal praise.',
      category: 'Movies',
      timestamp: new Date().toISOString(),
      trendingScore: 88,
      imageUrl: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?auto=format&fit=crop&w=1920&q=80',
      creator: '@searchlight',
      platform: 'Official',
      shares: 820000,
      link: 'https://www.searchlightpictures.com/poorthings',
      tags: ['Poor Things', 'Emma Stone', 'Yorgos Lanthimos', 'Drama', 'Awards'],
      fullContent: `'Poor Things' continues to gather acclaim for its bold, imaginative storytelling and Emma Stone's fearless performance. Director Yorgos Lanthimos has created a visually stunning and thematically rich film that challenges conventions and pushes creative boundaries. The film's unique blend of period drama, science fiction, and dark comedy has resonated with critics and audiences alike, earning it numerous accolades and generating serious awards buzz. Stone's portrayal has been particularly celebrated for its complexity and emotional depth.`
    },
    {
      id: 'mv6',
      title: 'Godzilla x Kong: The New Empire Thrills',
      description: 'Latest MonsterVerse installment delivers spectacular kaiju action and unexpected depth.',
      category: 'Movies',
      timestamp: new Date().toISOString(),
      trendingScore: 86,
      imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&w=1920&q=80',
      creator: '@legendary',
      platform: 'Official',
      shares: 780000,
      link: 'https://www.godzillaxkong.com',
      tags: ['Godzilla', 'Kong', 'MonsterVerse', 'Action', 'Sci-Fi'],
      fullContent: `'Godzilla x Kong: The New Empire' has roared into theaters, delivering an explosive combination of spectacular monster battles and surprisingly nuanced storytelling. The latest entry in the MonsterVerse franchise builds on its predecessors while taking the story in bold new directions. The film's groundbreaking visual effects bring the titular titans to life with unprecedented detail, while the human drama provides meaningful context to the epic-scale conflicts. Audiences and critics alike have praised the movie's balance of action spectacle and emotional resonance.`
    }
  ],
  sports: [
    {
      id: 'sp1',
      title: 'Champions League Final Thriller',
      description: 'Epic showdown as underdogs stun favorites in dramatic penalty shootout.',
      category: 'Sports',
      timestamp: new Date().toISOString(),
      trendingScore: 92,
      imageUrl: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9',
      creator: '@champions_league',
      platform: 'Official',
      shares: 1500000,
      link: 'https://www.uefa.com/champions-league/',
      tags: ['Soccer', 'Champions League', 'Football', 'UEFA'],
      fullContent: `In a match that will be remembered for generations, the underdogs pulled off a stunning victory in the Champions League final. The match, which went to penalties after a thrilling 2-2 draw in regular time, saw incredible performances from both teams. The winning team\'s goalkeeper became the hero of the night with two crucial saves in the shootout.`
    },
    {
      id: 'sp2',
      title: 'NBA Star\'s Record-Breaking Night',
      description: 'Basketball phenom shatters decades-old scoring record in historic performance.',
      category: 'Sports',
      timestamp: new Date().toISOString(),
      trendingScore: 88,
      imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc',
      creator: '@nba',
      platform: 'Official',
      shares: 1200000,
      link: 'https://www.nba.com/',
      tags: ['NBA', 'Basketball', 'Records', 'History'],
      fullContent: `The basketball world witnessed history as the superstar guard broke a scoring record that had stood for over 40 years. In an electrifying performance, they scored 65 points while also dishing out 12 assists, showcasing both individual brilliance and team play. The packed arena erupted in celebration as the record-breaking shot went through the net.`
    },
    {
      id: 'sp3',
      title: 'Viktor Axelsen Clinches Epic All England Title',
      description: 'Danish badminton superstar triumphs in a thrilling final at the prestigious All England Open.',
      category: 'Sports',
      timestamp: new Date().toISOString(),
      trendingScore: 85,
      imageUrl: 'https://images.unsplash.com/photo-1613918431703-aa50889e3be9?auto=format&fit=crop&w=1920&q=80',
      creator: '@bwfmedia',
      platform: 'Official',
      shares: 850000,
      link: 'https://bwfworldtour.bwfbadminton.com/player/61456/viktor-axelsen',
      tags: ['Badminton', 'All England Open', 'Viktor Axelsen', 'Denmark', 'BWF'],
      fullContent: `World #1 Viktor Axelsen showcased his exceptional skills and mental fortitude to secure another prestigious All England Open title. The Danish powerhouse demonstrated his complete mastery of the game, combining powerful smashes with delicate net play throughout the tournament. In a pulsating final that had fans on the edge of their seats, Axelsen's superior court coverage and tactical brilliance proved decisive. This victory further cements his legacy as one of badminton's most dominant players and adds another chapter to Denmark's rich badminton history.`
    },
    {
      id: 'sp4',
      title: 'Tennis Legend\'s Farewell Match',
      description: 'Emotional scenes as tennis icon plays final professional match.',
      category: 'Sports',
      timestamp: new Date().toISOString(),
      trendingScore: 82,
      imageUrl: 'https://images.unsplash.com/photo-1542144582-1ba00456b5e3',
      creator: '@atptour',
      platform: 'Official',
      shares: 880000,
      link: 'https://www.atptour.com/',
      tags: ['Tennis', 'Grand Slam', 'Legend', 'Farewell'],
      fullContent: `The tennis world bid farewell to one of its greatest champions in an emotional match that transcended sport. The packed stadium gave a standing ovation that lasted several minutes as the legend took their final bow on the professional court. Their impact on the sport will be remembered for generations to come.`
    },
    {
      id: 'sp5',
      title: 'Olympic Record Shattered',
      description: 'New world record set in swimming as young star dominates Olympic final.',
      category: 'Sports',
      timestamp: new Date().toISOString(),
      trendingScore: 80,
      imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635',
      creator: '@olympics',
      platform: 'Official',
      shares: 820000,
      link: 'https://olympics.com/',
      tags: ['Olympics', 'Swimming', 'World Record', 'Gold Medal'],
      fullContent: `A new chapter in Olympic history was written as the young swimming sensation not only won gold but obliterated the world record by over a second. The performance has been hailed by experts as one of the most dominant displays in Olympic swimming history. The new record holder\'s technique and strategy have already become a subject of study for swimmers worldwide.`
    },
    {
      id: 'sp6',
      title: 'Cricket World Cup Final Spectacle',
      description: 'Last-ball thriller decides World Cup in historic match at Lord\'s.',
      category: 'Sports',
      timestamp: new Date().toISOString(),
      trendingScore: 89,
      imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da',
      creator: '@icc',
      platform: 'Official',
      shares: 1100000,
      link: 'https://www.icc-cricket.com/',
      tags: ['Cricket', 'World Cup', 'ICC', 'Lord\'s'],
      fullContent: `In one of the most dramatic cricket matches ever played, the World Cup final came down to the very last ball. The packed crowd at Lord\'s witnessed a contest for the ages as both teams showed exceptional skill and determination. The match featured everything from spectacular catches to crucial boundaries, ultimately being decided by a super over that will go down in cricket history.`
    }
  ],
  youtube: [
    {
      id: 'yt1',
      title: 'Learn Next.js in 2024',
      description: 'Complete guide to building modern web applications with Next.js',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=60',
      link: 'https://www.youtube.com/results?search_query=nextjs+tutorial+2024',
      category: 'YouTube',
      platform: 'YouTube',
      trendingScore: 95,
      timestamp: new Date().toISOString(),
      tags: ['Next.js', 'Web Development', 'Tutorial']
    },
    {
      id: 'yt2',
      title: 'Web Development Trends',
      description: 'Latest trends and technologies in web development',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60',
      link: 'https://www.youtube.com/results?search_query=web+development+trends+2024',
      category: 'YouTube',
      platform: 'YouTube',
      trendingScore: 88,
      timestamp: new Date().toISOString(),
      tags: ['Web Development', 'Trends', 'Technology']
    },
    {
      id: 'yt3',
      title: 'React Best Practices',
      description: 'Learn React patterns and best practices for scalable applications',
      imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
      link: 'https://www.youtube.com/results?search_query=react+best+practices+2024',
      category: 'YouTube',
      platform: 'YouTube',
      trendingScore: 85,
      timestamp: new Date().toISOString(),
      tags: ['React', 'Best Practices', 'JavaScript']
    },
    {
      id: 'yt4',
      title: 'UI/UX Design Tips',
      description: 'Essential tips for creating better user interfaces',
      imageUrl: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop&q=60',
      link: 'https://www.youtube.com/results?search_query=ui+ux+design+tips',
      category: 'YouTube',
      platform: 'YouTube',
      trendingScore: 82,
      timestamp: new Date().toISOString(),
      tags: ['UI/UX', 'Design', 'Tips']
    },
    {
      id: 'yt5',
      title: 'TypeScript Advanced Concepts',
      description: 'Master advanced TypeScript features and patterns',
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60',
      link: 'https://www.youtube.com/results?search_query=typescript+advanced+concepts',
      category: 'YouTube',
      platform: 'YouTube',
      trendingScore: 78,
      timestamp: new Date().toISOString(),
      tags: ['TypeScript', 'Programming', 'Advanced']
    },
    {
      id: 'yt6',
      title: 'Full Stack Development Guide',
      description: 'Complete guide to modern full stack development',
      imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop&q=60',
      link: 'https://www.youtube.com/results?search_query=full+stack+development+guide',
      category: 'YouTube',
      platform: 'YouTube',
      trendingScore: 75,
      timestamp: new Date().toISOString(),
      tags: ['Full Stack', 'Web Development', 'Programming']
    }
  ],
};

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toLowerCase();
    const id = searchParams.get('id');

    // If ID is provided, find the specific item
    if (id) {
      const allItems = Object.values(trendingData).flat();
      const item = allItems.find(item => item.id.toString() === id.toString());
      
      if (!item) {
        return NextResponse.json(
          { error: 'Item not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(item, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60'
        },
      });
    }

    // If category is provided, return items for that category
    if (category) {
      const items = trendingData[category] || [];
      return NextResponse.json(items, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60'
        },
      });
    }

    // If no parameters, return all items
    return NextResponse.json(
      Object.values(trendingData).flat(),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=60'
        },
      }
    );
  } catch (error) {
    console.error('Error in trending API:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
} 