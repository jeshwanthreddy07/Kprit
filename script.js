/* ============================================================
   KPRIT College Website - JavaScript Interactivity & AI Agent
   ============================================================ */

// A. NEWS DATA
const newsData = [
    {
        id: 1,
        title: 'International Conference ICF2TEM-26 Successfully Hosted',
        category: 'announcements',
        date: 'April 24-25, 2026',
        dateOrder: 20260424,
        image: 'assets/news_conference.png',
        preview: 'KPRIT hosted the prestigious International Conference on Futuristic Frontiers in Technology, Engineering and Management...',
        content: `
            <p>Kommuri Pratap Reddy Institute of Technology (KPRIT) successfully hosted the prestigious International Conference on Futuristic Frontiers in Technology, Engineering and Management (ICF2TEM-26) on April 24–25, 2026. The landmark academic event brought together leading researchers, global industry experts, and students to present project abstracts and discuss emerging technical trends.</p>
            <p>The conference featured a keynote address by Dr. Rajesh Kumar, a renowned international researcher, who discussed the integration of Artificial Intelligence in engineering education and industry workflows. Over 200 research papers were presented by authors hailing from more than 15 countries, covering topics such as Deep Learning, Green Infrastructure, VLSI, and Sustainable Business Management.</p>
            <p>Distinguished delegates and peer reviewers praised the high quality of submissions. Outstanding papers received best paper awards and will be published in Scopus-indexed and UGC-care listed journals. The Chairman of KPRIT, Sri Kommuri Pratap Reddy, congratulated the organizing committee for executing this grand academic event and establishing KPRIT as a hub for global scientific discourse.</p>
        `,
        author: 'Dr. Ramesh Varma',
        featured: true,
        tags: ['conference', 'research', 'international', 'academic', 'engineering']
    },
    {
        id: 2,
        title: 'Aarohan 2026 & Annual Tech Fest Breaks Records',
        category: 'events',
        date: 'April 12-14, 2026',
        dateOrder: 20260412,
        image: 'assets/news_techfest.png',
        preview: 'The annual technical and cultural fest Aarohan 2026 witnessed unprecedented participation from 50+ colleges...',
        content: `
            <p>The KPRIT campus came alive during the three-day national-level annual technical and cultural fest, Aarohan 2026, held from April 12 to April 14, 2026. The mega event witnessed a record-breaking participation of over 3,000 students from more than 50 engineering and degree colleges across India.</p>
            <p>Technical events included a 24-hour Hackathon, robotics obstacles, paper presentations, and coding sprints. Side-by-side, the cultural division hosted singing, dancing, street plays, and short film contests. Simultaneously, the Kurukshetra sports tournament featured intense matches in cricket, basketball, volleyball, and indoor sports, showcasing exceptional athletic talent.</p>
            <p>A prize pool of ₹5 lakhs was distributed among winners of various competitions. The final evening concluded with a stellar live performance by a renowned fusion music band, leaving the students with unforgettable memories. The Student Activity Cell expressed gratitude to all faculty coordinators and student volunteers for making Aarohan 2026 an outstanding success.</p>
        `,
        author: 'Student Activity Cell',
        featured: true,
        tags: ['fest', 'cultural', 'technical', 'aarohan', 'sports']
    },
    {
        id: 3,
        title: 'Record Placement Milestones: Highest Package reaches ₹54 LPA',
        category: 'placements',
        date: 'March 15, 2026',
        dateOrder: 20260315,
        image: 'assets/news_placement.png',
        preview: 'KPRIT\'s Training & Placement Cell achieved a historic milestone with the highest package reaching ₹54 LPA...',
        content: `
            <p>KPRIT\'s Training and Placement Cell has reported an exceptionally successful recruitment season for the graduating batch of 2026. Setting a historic milestone, a computer science engineering student secured a stellar placement package of ₹54 LPA with a multinational technology leader.</p>
            <p>The overall placement rate stands at a robust 85% for eligible students, with the average package rising to ₹6.56 LPA. More than 300 tier-1 and tier-2 companies visited the campus, including tech giants like Microsoft, Amazon, Infosys, TCS, Wipro, Cognizant, Accenture, HCL, and Deloitte.</p>
            <p>Placement Director credited this achievement to the comprehensive Campus Recruitment Training (CRT) program, which starts in the third year. The training program covers advanced coding, quantitative aptitude, mock technical interviews, resume workshops, and soft skills development. KPRIT management commended the efforts of students and mentors for this remarkable success.</p>
        `,
        author: 'Training & Placement Cell',
        featured: true,
        tags: ['placements', 'career', 'recruitment', 'package', 'jobs']
    },
    {
        id: 4,
        title: 'New AI & Machine Learning Research Lab Inaugurated',
        category: 'announcements',
        date: 'March 1, 2026',
        dateOrder: 20260301,
        image: 'assets/news_ailab.png',
        preview: 'A state-of-the-art AI & ML research laboratory equipped with NVIDIA GPU workstations was inaugurated...',
        content: `
            <p>In a major boost to its research infrastructure, KPRIT has inaugurated a state-of-the-art Artificial Intelligence and Machine Learning Research Laboratory. Established with an investment of ₹2 crores, the lab features high-end computing systems powered by NVIDIA GPU workstations.</p>
            <p>The lab was officially inaugurated by the Vice Chancellor of JNTUH, who appreciated KPRIT\'s foresight in building specialized environments for next-generation technologies. The facility is aimed at supporting students and faculty working on advanced research projects in Deep Learning, Natural Language Processing, Computer Vision, and Generative AI.</p>
            <p>In alignment with industry requirements, KPRIT has partnered with technical modules from Google Cloud and Microsoft to provide cloud resources. The lab will also host bootcamps, hackathons, and certified micro-credential courses to ensure KPRITians remain at the absolute cutting-edge of industry demand.</p>
        `,
        author: 'Department of CSE',
        featured: false,
        tags: ['ai', 'lab', 'research', 'technology', 'inauguration']
    },
    {
        id: 5,
        title: 'NAAC A++ Accreditation: KPRIT Among Elite Institutions',
        category: 'achievements',
        date: 'January 20, 2026',
        dateOrder: 20260120,
        image: 'assets/news_achievement.png',
        preview: 'KPRIT has been awarded the prestigious NAAC A++ grade, placing it among the elite engineering institutions...',
        content: `
            <p>Kommuri Pratap Reddy Institute of Technology (KPRIT) has attained the highest accreditation milestone by securing the prestigious NAAC A++ Grade. This benchmark places the autonomous institution among the elite top-tier engineering colleges in Telangana and the country.</p>
            <p>The National Assessment and Accreditation Council (NAAC) peer team visited the campus and evaluated the institution across seven criteria, including teaching-learning processes, infrastructure, research output, student support services, governance, and institutional values. The high scores obtained in all categories reflect KPRIT\'s relentless pursuit of academic and administrative excellence.</p>
            <p>The Chairman, Sri Kommuri Pratap Reddy, congratulated the Principal, staff, and students on this proud achievement. He noted that the NAAC A++ accreditation and autonomous status open up new avenues for introducing global curriculums, foreign collaborations, and major research grants, paving the path to global recognition.</p>
        `,
        author: 'IQAC Cell',
        featured: true,
        tags: ['naac', 'accreditation', 'achievement', 'ranking']
    },
    {
        id: 6,
        title: 'Google & Kaggle Gen AI Intensive Bootcamp at KPRIT',
        category: 'events',
        date: 'November 15-19, 2025',
        dateOrder: 20251115,
        image: 'assets/news_ailab.png',
        preview: 'Students participated in an intensive 5-day Generative AI bootcamp conducted in collaboration with Google and Kaggle...',
        content: `
            <p>The Department of CSE (AI & ML) at KPRIT, in collaboration with Google and Kaggle, conducted an intensive 5-day Generative AI bootcamp from November 15 to November 19, 2025. Over 200 selected students participated in the hands-on workshops aimed at building robust foundations in modern AI models.</p>
            <p>The bootcamp covered Large Language Models (LLMs), prompt engineering principles, fine-tuning techniques, Gemini APIs, and workflow automation. Google Developer Experts (GDEs) and Kaggle Grandmasters mentored the students through actual coding sprints, culminating in a mini hackathon where students developed AI-powered assistants for practical applications.</p>
            <p>Participants who successfully completed the assignments were awarded industry-recognized certificates from Google and Kaggle. This initiative highlights KPRIT\'s commitment to integrating leading corporate education directly within the college curriculum, preparing students for future AI engineering roles.</p>
        `,
        author: 'CSE-AIML Department',
        featured: false,
        tags: ['google', 'ai', 'bootcamp', 'kaggle', 'workshop']
    },
    {
        id: 7,
        title: 'Kurukshetra 2026: Inter-College Sports Tournament',
        category: 'events',
        date: 'March 8-10, 2026',
        dateOrder: 20260308,
        image: 'assets/news_techfest.png',
        preview: 'The annual inter-college sports tournament Kurukshetra 2026 saw thrilling competitions across 10+ sporting events...',
        content: `
            <p>The sports arena at KPRIT was filled with high energy as the college hosted its annual inter-college sports tournament, Kurukshetra 2026, from March 8 to March 10, 2026. The three-day sports extravaganza witnessed participation from 30+ engineering colleges across the state.</p>
            <p>Teams competed in various categories including cricket, basketball, volleyball, kabaddi, badminton, athletics, chess, and table tennis. The home team of KPRIT displayed outstanding sportsmanship, clinching the overall championship trophy with stellar victories in cricket and basketball.</p>
            <p>The prize distribution ceremony was presided over by the Sports Committee, with cash prizes worth ₹2 lakhs and trophies awarded to the winners. The event highlighted KPRIT\'s dedication to promoting physical health, team spirit, and a balanced lifestyle among the student community.</p>
        `,
        author: 'Sports Committee',
        featured: false,
        tags: ['sports', 'tournament', 'kurukshetra', 'athletics']
    },
    {
        id: 8,
        title: 'Strategic Industry MoUs Signed with Top Tech Firms',
        category: 'announcements',
        date: 'December 10, 2025',
        dateOrder: 20251210,
        image: 'assets/news_conference.png',
        preview: 'KPRIT signed strategic MoUs with leading technology companies to enhance industry-academia collaboration...',
        content: `
            <p>In a continuous effort to bridge the industry-academia gap, KPRIT signed strategic Memorandums of Understanding (MoUs) with multiple top tech organizations, including Infosys (Springboard), TCS Ion, AWS Academy, and Salesforce on December 10, 2025.</p>
            <p>These partnerships will facilitate certified industry curriculums, faculty development programs, corporate guest lectures, and priority internship pipelines for KPRIT students. It also establishes a Center of Excellence for Cloud Computing and Salesforce training on campus.</p>
            <p>The Industry Relations Cell head expressed that these MoUs will empower students to obtain global certifications alongside their B.Tech degrees, making them highly competitive in global job markets. The Chairman, Sri Kommuri Pratap Reddy, reiterated that industry integration is the core pillar of KPRIT\'s academic vision.</p>
        `,
        author: 'Industry Relations Cell',
        featured: false,
        tags: ['mou', 'industry', 'partnership', 'collaboration']
    },
    {
        id: 9,
        title: 'Alumni Meet 2026: Reconnecting and Mentoring',
        category: 'events',
        date: 'February 14, 2026',
        dateOrder: 20260214,
        image: 'assets/news_conference.png',
        preview: 'The grand Alumni Meet 2026 brought together over 500 alumni from various batches for a day of nostalgia and networking...',
        content: `
            <p>KPRIT hosted its grand Alumni Meet 2026 on February 14, 2026, welcoming back over 500 former students from various graduating batches since the college\'s inception in 2008. The campus was filled with nostalgia, networking, and celebration.</p>
            <p>A key highlights of the meet was the "Alumni Mentorship Panel," where distinguished alumni working in top positions globally interact with current pre-final and final-year students, providing insights into modern tech trends, startup ecosystems, and career advice.</p>
            <p>Additionally, the KPRIT Alumni Association announced a dedicated scholarship fund of ₹10 lakhs to support economically underprivileged students. The Chairman and Principal thanked the alumni for their continuous support and for representing KPRIT\'s values proudly across global industries.</p>
        `,
        author: 'Alumni Association',
        featured: false,
        tags: ['alumni', 'networking', 'reunion', 'mentoring']
    },
    {
        id: 10,
        title: 'Merit Scholarship Distribution Ceremony 2025',
        category: 'achievements',
        date: 'September 28, 2025',
        dateOrder: 20250928,
        image: 'assets/news_achievement.png',
        preview: 'KPRIT distributed merit scholarships worth ₹50 lakhs to 200+ deserving students across all departments...',
        content: `
            <p>True to its vision of making quality technical education accessible, KPRIT organized its annual Merit Scholarship Distribution Ceremony on September 28, 2025. Merit scholarships worth a total of ₹50 lakhs were distributed among 200+ deserving students.</p>
            <p>The scholarships covered multiple categories including university toppers, sports achievers, SC/ST/OBC state fee reimbursements, AICTE Pragati scholarships for girl students, and the AICTE Saksham scheme for differently-abled scholars. The scholarship program is aimed at rewarding excellence and supporting students with financial constraints.</p>
            <p>The ceremony was presided over by the Chairman, Sri Kommuri Pratap Reddy, along with senior educational administrators. Families of the awardees attended the event, celebrating the accomplishments of the students. KPRIT continues to nurture talent by removing financial barriers to engineering success.</p>
        `,
        author: 'Scholarship Cell',
        featured: false,
        tags: ['scholarship', 'merit', 'financial-aid', 'ceremony']
    }
];

let currentFilter = 'all';
let searchTerm = '';
let visibleCount = 6;

// Render news cards to grid
function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;
    
    // Filter newsData
    let filteredNews = newsData.filter(news => {
        const matchesCategory = currentFilter === 'all' || news.category === currentFilter;
        const matchesSearch = news.title.toLowerCase().includes(searchTerm) ||
                              news.preview.toLowerCase().includes(searchTerm) ||
                              news.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
    });

    // Sort newsData (recent first based on dateOrder)
    filteredNews.sort((a, b) => b.dateOrder - a.dateOrder);

    // Slice for visible count
    const displayedNews = filteredNews.slice(0, visibleCount);

    if (displayedNews.length === 0) {
        newsGrid.innerHTML = `
            <div class="no-results">
                <h3>No news articles found</h3>
                <p>Try adjusting your search query or filter category.</p>
            </div>
        `;
        document.getElementById('load-more-btn').style.display = 'none';
        return;
    }

    const htmlCards = displayedNews.map(news => `
        <div class="news-card animate-on-scroll animated" onclick="openNewsDetail(${news.id})">
            <div class="news-card-image">
                <img src="${news.image}" alt="${news.title}" loading="lazy">
                <span class="category-badge ${news.category}">${news.category}</span>
            </div>
            <div class="news-card-content">
                <h3 class="news-card-title">${news.title}</h3>
                <span class="news-card-date">📅 ${news.date}</span>
                <p class="news-card-preview">${news.preview}</p>
                <a class="news-card-readmore">Read More →</a>
            </div>
        </div>
    `).join('');

    newsGrid.innerHTML = htmlCards;

    // Control load more button visibility
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (filteredNews.length > visibleCount) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

// Category filter trigger
function filterByCategory(category) {
    currentFilter = category;
    visibleCount = 6;
    
    // Manage active pill styling
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.classList.remove('active');
        if (pill.getAttribute('data-category') === category) {
            pill.classList.add('active');
        }
    });

    renderNews();
}

// Search trigger
function searchNews(query) {
    searchTerm = query.toLowerCase().trim();
    visibleCount = 6;
    renderNews();
}

// Load more trigger
function loadMoreNews() {
    visibleCount += 6;
    renderNews();
}

// Open modal
function openNewsDetail(id) {
    const news = newsData.find(item => item.id === id);
    if (!news) return;

    // Populate modal
    document.getElementById('modal-image').src = news.image;
    document.getElementById('modal-image').alt = news.title;
    
    const catBadge = document.getElementById('modal-category');
    catBadge.textContent = news.category;
    catBadge.className = `category-badge ${news.category}`;
    
    document.getElementById('modal-title').textContent = news.title;
    document.getElementById('modal-meta').innerHTML = `
        <span>📅 Date: ${news.date}</span>
        <span>✍️ Author: ${news.author}</span>
    `;
    document.getElementById('modal-body').innerHTML = news.content;

    // Related news setup
    const relatedGrid = document.getElementById('related-news');
    let relatedArticles = newsData.filter(item => item.id !== id && item.category === news.category).slice(0, 3);
    
    if (relatedArticles.length < 3) {
        const fallbackArticles = newsData.filter(item => item.id !== id && item.category !== news.category).slice(0, 3 - relatedArticles.length);
        relatedArticles = [...relatedArticles, ...fallbackArticles];
    }

    relatedGrid.innerHTML = relatedArticles.map(rel => `
        <div class="related-card" onclick="openNewsDetail(${rel.id})">
            <span class="category-badge ${rel.category}" style="font-size: 0.7rem; padding: 2px 8px; margin-bottom: 6px; display: inline-block;">${rel.category}</span>
            <h4 style="margin: 4px 0; font-size: 0.95rem; color: #1a365d; line-height: 1.3;">${rel.title}</h4>
            <span style="font-size: 0.8rem; color: #718096;">📅 ${rel.date}</span>
        </div>
    `).join('');

    // Display modal
    const modal = document.getElementById('news-modal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Stop background scrolling
}

// Close modal
function closeNewsDetail() {
    const modal = document.getElementById('news-modal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Resume background scrolling
}

// Share functions
function shareWhatsApp() {
    const title = document.getElementById('modal-title').textContent;
    const url = window.location.href;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' | Read more: ' + url)}`, '_blank');
}

function shareFacebook() {
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}

function shareTwitter() {
    const title = document.getElementById('modal-title').textContent;
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}&hashtags=KPRIT,CollegeNews`, '_blank');
}


// State tracking for anti-looping and lead capture
let consecutiveFallbackCount = 0;
let callerName = "";
let callerCourse = "";
let isVoiceMode = false;
let isBotSpeaking = false;

// Telegram Automation Configuration
// (These can be replaced with your own Telegram Bot details)
const TELEGRAM_BOT_TOKEN = '8472922057:AAFMpPCJB1XpSNrSQ1lhoiszNnmesKg_BnQ';
const TELEGRAM_CHAT_ID = '6703785356';                     // Jeshwanth Reddy's Chat ID
let conversationHistory = [];

// Attendance database
const attendanceDatabase = [
    { name: "Nitish Kumar", keywords: ["nitish", "nitish kumar", "nitesh", "nithesh", "nitesh kumar"], roll: "24RA1A0501", status: "Absent" },
    { name: "Ananya Reddy", keywords: ["ananya", "ananya reddy", "anaya", "ananya redi"], roll: "24RA1A0502", status: "Present" },
    { name: "Rahul Sharma", keywords: ["rahul", "rahul sharma", "rahool", "rahul sarma"], roll: "24RA1A0503", status: "Present" },
    { name: "Priya Patel", keywords: ["priya", "priya patel", "preya", "pria", "priya patal"], roll: "24RA1A0504", status: "Absent" },
    { name: "Sai Kiran", keywords: ["sai", "sai kiran", "kiran", "saikiran"], roll: "24RA1A0505", status: "Present" },
    { name: "Vikram Malhotra", keywords: ["vikram", "vikram malhotra", "vickram", "vikram malhothra"], roll: "24RA1A0506", status: "Absent" }
];

const voiceQA = [
    // 1-10: General College Profile (Warm & Concise, under 2-3 sentences, no markdown)
    { keywords: ['about', 'kprit', 'college', 'tell me', 'who is', 'what is kprit'], response: 'KPRIT is an autonomous engineering college permanently affiliated with JNTUH and accredited with NAAC A Grade and NBA. We are dedicated to nurturing innovation and technical excellence.' },
    { keywords: ['established', 'estd', 'founded', 'year', 'started'], response: 'KPRIT was established in 2008 by Sri Kommuri Pratap Reddy, aiming to bring world-class technical education to Telangana.' },
    { keywords: ['chairman', 'founder', 'sri kommuri', 'pratap reddy'], response: 'Sri Kommuri Pratap Reddy is our visionary founder and Chairman, guiding KPRIT with a passion for excellence.' },
    { keywords: ['autonomous', 'status', 'ugc autonomous', 'is it autonomous'], response: 'Yes, KPRIT is autonomous, JNTUH affiliated, NAAC A Grade, and NBA accredited. This allows us to offer modern, industry-aligned syllabus.' },
    { keywords: ['grade', 'naac', 'accreditation', 'accredited'], response: 'KPRIT is accredited with a NAAC A Grade and has NBA accredited programs, reflecting our high academic standards.' },
    { keywords: ['eamcet', 'code', 'eapcet', 'code for eamcet'], response: 'Our EAPCET counseling code is KPRT. Make sure to choose it to secure your seat!' },
    { keywords: ['affiliation', 'affiliated to', 'jntuh'], response: 'We are permanently affiliated with JNTUH and approved by AICTE.' },
    { keywords: ['campus', 'area', 'acres', 'how big'], response: 'KPRIT features a beautiful, state-of-the-art twenty-two acre campus loaded with modern amenities.' },
    { keywords: ['location', 'where is', 'address', 'highway', 'ghatkesar'], response: 'We are situated in Ghatkesar, Hyderabad, right on the Warangal Highway. It is very easy to reach!' },
    { keywords: ['vision', 'mission', 'tagline', 'motto'], response: 'Our motto is "Imagine. Innovate. Inspire." We strive to create ethical technical leaders.' },

    // 11-20: Academic Courses & B.Tech
    { keywords: ['courses', 'branches', 'departments', 'btech programs', 'specializations', 'intake', 'seat', 'seats'], response: 'We offer B-Tech in CSE with four hundred and twenty seats, CSE AI&ML with two hundred and forty seats, ECE with sixty seats, and Civil with thirty seats.' },
    { keywords: ['cse seats', 'computer science seats', 'intake cse', 'cse', 'seats in cse', 'seats for cse', 'seats in computer science', 'seats for computer science', 'intake of cse', 'intake for cse', 'intake of computer science', 'intake for computer science'], response: 'Our Computer Science and Engineering department has an annual intake of four hundred and twenty seats and is NBA accredited.' },
    { keywords: ['aiml seats', 'artificial intelligence seats', 'machine learning seats', 'ai and ml', 'ai & ml', 'artificial intelligence', 'machine learning', 'aiml', 'seats in aiml', 'seats for aiml', 'seats in ai and ml', 'seats for ai and ml', 'seats in artificial intelligence', 'seats for artificial intelligence', 'intake of aiml', 'intake for aiml', 'intake of ai and ml', 'intake for ai and ml', 'intake of artificial intelligence', 'intake for artificial intelligence'], response: 'The CSE AI&ML specialization offers an annual intake of two hundred and forty seats.' },
    { keywords: ['data science seats', 'ds seats', 'data science availability', 'data science', 'ds', 'seats in data science', 'seats for data science', 'seats in ds', 'seats for ds', 'intake of data science', 'intake for data science', 'intake of ds', 'intake for ds'], response: 'We offer core B-Tech programs in CSE, AI&ML, ECE, and Civil Engineering.' },
    { keywords: ['ece seats', 'electronics seats', 'intake ece', 'seats in ece', 'seats for ece', 'seats are there for ece', 'intake of ece', 'intake for ece'], response: 'The Electronics and Communication department has sixty seats and is NBA accredited.' },
    { keywords: ['civil seats', 'civil engineering seats', 'intake civil', 'seats in civil', 'seats for civil', 'seats of civil', 'intake of civil', 'intake for civil'], response: 'Civil Engineering has thirty seats, focused on structural design and green technologies.' },
    { keywords: ['nba accreditation', 'nba accredited', 'nba'], response: 'Yes, our CSE and ECE branches are NBA accredited, ensuring high-quality education.' },
    { keywords: ['faculty', 'teachers', 'professors', 'teaching standards'], response: 'We have over two hundred dedicated faculty members, including many Ph.D. scholars, offering warm guidance.' },
    { keywords: ['autonomous syllabus', 'curriculum', 'regulation'], response: 'Our autonomous curriculum features credit-based courses, industry certifications, and internship windows.' },
    { keywords: ['academic calendar', 'semesters', 'exams'], response: 'We follow a systematic semester pattern with Continuous Internal Evaluation to keep you on track.' },

    // 21-30: Placements & Recruiters
    { keywords: ['placement record', 'placements', 'placed', 'jobs', 'careers'], response: 'We offer placement drives with an average package of six point five six LPA and top packages going up to twenty LPA under our One Student, One Job policy.' },
    { keywords: ['highest package', 'max package', 'top package', 'package range'], response: 'Our top placement packages go up to twenty LPA under our One Student, One Job policy.' },
    { keywords: ['average package', 'avg package', '6.56 lpa'], response: 'Our average package is six point five six LPA, offering excellent entry-level roles.' },
    { keywords: ['top recruiters', 'companies', 'microsoft', 'infosys', 'tcs'], response: 'Top recruiters include Microsoft, Infosys, TCS, Wipro, Cognizant, and Accenture.' },
    { keywords: ['crt training', 'placement preparation', 'training cell', 'placement training', 'training', 'crt'], response: 'Our Campus Recruitment Training starting from third year covers coding, aptitude, and mock interviews.' },
    { keywords: ['internship opportunities', 'internships', 'project training'], response: 'We assist with summer and semester internships at top partner firms.' },
    { keywords: ['dean', 'relations dean', 'anish', 'srivastava'], response: 'Mr. Anish Srivastava is our Corporate Relations Dean, managing placements and industry tie-ups.' },
    { keywords: ['placement eligibility', 'placement guidelines'], response: 'Students with clear backlogs and active CRT attendance are eligible to attend placement drives.' },
    { keywords: ['mou signing', 'industry collaboration', 'academic partnerships'], response: 'We have active partnerships and MoUs with AWS, Microsoft, and Infosys.' },
    { keywords: ['career guidance', 'higher studies', 'entrepreneurship'], response: 'Our EDC and CIE centers offer extensive mentorship for starting your own tech business.' },

    // 31-40: Admissions & Scholarships
    { keywords: ['admission process', 'eligibility for admission', 'how to apply'], response: 'Admissions are via TS EAPCET counseling (code KPRT) or management quota. A ten plus two with PCM is required.' },
    { keywords: ['helpline', 'admission contact', 'phone number'], response: 'Call our admissions helpline at ninety five four twenty zero forty two six hundred and sixty six for registration support.' },
    { keywords: ['scholarship options', 'scholarships', 'fee reimbursement'], response: 'We support state reimbursements, EWS scholarships, and AICTE Pragati and Saksham schemes.' },
    { keywords: ['pragati', 'rose', 'saksham', 'aicte scholarship'], response: 'Yes, Pragati and Saksham scholarships are fully supported on campus.' },
    { keywords: ['management quota', 'direct admission', 'b category'], response: 'Yes, direct B-Category seats are available. Please call ninety five four twenty zero forty two six hundred and sixty six for details.' },
    { keywords: ['cutoff rank', 'eamcet cutoff', 'rank needed'], response: 'Cutoffs change yearly by branch. Reach out to the helpdesk at ninety five four twenty zero forty two six hundred and sixty six for details.' },
    { keywords: ['documents required', 'admission certificate', 'verification'], response: 'You will need your SSC and Inter memos, EAPCET hall ticket and rank card, Transfer Certificate, and study certificates.' },
    { keywords: ['lateral entry', 'ecet', 'diploma admissions'], response: 'Yes, diploma holders can join directly in the second year through ECET counseling.' },
    { keywords: ['fee payment', 'payment mode', 'tuition fees payment'], response: 'Fees can be paid online via bank transfer or at the college accounts desk.' },
    { keywords: ['counseling process', 'how to choose kprit'], response: 'Simply put code KPRT as your top choice in the TS EAPCET web options.' },

    // 41-50: Infrastructure & Facilities
    { keywords: ['facilities list', 'amenities', 'campus environment'], response: 'Our campus has ICT classrooms, advanced computer labs, hostels, a library, sports ground, transport, and a three thousand square foot cafeteria.' },
    { keywords: ['hostel facility', 'boys hostel', 'girls hostel', 'accommodation fees'], response: 'We offer safe, separate boys and girls hostels with security, high-speed Wi-Fi, and nutritious food.' },
    { keywords: ['sports complex', 'cricket ground', 'gym', 'games'], response: 'Our facilities include a cricket field, basketball court, volleyball court, and an indoor gym.' },
    { keywords: ['library size', 'digital library', 'books count'], response: 'The library has over fifty thousand volumes along with access to digital e-journals.' },
    { keywords: ['transport route', 'college bus', 'bus routes'], response: 'We operate college buses covering all major neighborhoods across Hyderabad.' },
    { keywords: ['wi-fi', 'internet speed', 'connectivity on campus'], response: 'Enjoy high-speed Wi-Fi internet across the academic block and hostels.' },
    { keywords: ['canteen food', 'cafeteria menu', 'cafeteria size', 'hygiene'], response: 'Our campus has a three thousand square foot cafeteria serving delicious, hygienic meals.' },
    { keywords: ['auditorium capacity', 'seminar halls'], response: 'Our main auditorium seats over one thousand people, hosting key technical and cultural conferences.' },
    { keywords: ['medical cell', 'doctor on campus', 'emergencies'], response: 'An on-campus clinic with a nurse and visiting doctor handles all medical emergencies.' },
    { keywords: ['security', 'cctv surveillance', 'safe campus'], response: 'The campus is safe with twenty four seven security guards and high-definition CCTV coverage.' },

    // 51-60: News & Events
    { keywords: ['latest news', 'current updates', 'what happened recently', 'news'], response: 'Check out the ICF2TEM-26 International Conference, Aarohan Fest, new AI/ML Lab, and NAAC details.' },
    { keywords: ['conference news', 'icf2tem details', 'conference', 'seminar', 'icf2tem'], response: 'We hosted the ICF2TEM-26 International Conference, discussing AI in education with global delegates.' },
    { keywords: ['tech fest news', 'aarohan details', 'cultural events', 'tech fest', 'fest', 'aarohan'], response: 'Aarohan 2026 was a hit, featuring hackathons and cultural shows.' },
    { keywords: ['placements news', 'recent placements drive', 'placements', 'placement news'], response: 'Our placements have soared with top packages going up to twenty LPA under our One Student, One Job policy.' },
    { keywords: ['ai lab inauguration', 'new research lab', 'ai lab', 'nvidia lab'], response: 'Our new AI and ML lab features NVIDIA GPU workstations.' },
    { keywords: ['google bootcamp', 'kaggle workshop', 'generative ai bootcamp', 'bootcamp', 'google AI'], response: 'We held a Google and Kaggle bootcamp training two hundred students in Generative AI.' },
    { keywords: ['sports tournament news', 'kurukshetra sports details', 'sports', 'tournament', 'kurukshetra'], response: 'Kurukshetra sports meet took place with KPRIT winning the cricket trophy.' },
    { keywords: ['alumni meet news', 'reunion details', 'alumni meet', 'alumni'], response: 'The Alumni Meet featured over five hundred graduates establishing a scholarship fund.' },
    { keywords: ['scholarship news', 'merit award ceremony', 'scholarship', 'merit scholarship'], response: 'We distributed merit scholarships to deserving students recently.' },
    { keywords: ['student clubs', 'nss', 'technical clubs', 'clubs'], response: 'Join active groups like our Coding Club, Robotics Cell, and NSS wing to grow.' },

    // 61-65: Greetings & Help
    { keywords: ['hello', 'hi', 'greetings', 'hey there', 'namaste'], response: 'Hello! Welcome to K-P-R-I-T. How can I help you today?' },
    { keywords: ['thank you', 'thanks', 'good assistant', 'bye', 'exit'], response: 'You are welcome! Let me know if you need anything else. Have a wonderful day!' },
    { keywords: ['curated by', 'jeshwanth', 'who built this'], response: 'This interactive portal was curated by Jeshwanth Reddy from the CSE department.' },
    { keywords: ['help', 'what can i ask', 'what questions'], response: 'Ask me things like: "Tell me about placements", "EAPCET code", or "Who is Mr. Anish Srivastava?"' },
    { keywords: ['fees details', 'engineering fees'], response: 'Our tuition fees conform to Government of Telangana norms with extensive scholarships.' },
    { keywords: ['appointment', 'book visit', 'campus visit', 'meet counselor', 'callback', 'schedule visit', 'want to talk', 'talk to human', 'schedule appointment', 'meet in person', 'visit college'], response: 'Sure! I can help you schedule a campus visit and callback. I am displaying the appointment booking form in our chat pane.' },

    /* NEW: Upgrade 3 — 6 Enhanced Voice Responses */
    { keywords: ['voice assistant', 'what can you do', 'help me', 'features list', 'assistant features'], response: 'I am KPRIT Assist, your AI voice assistant. I can help with courses and fees, admissions and deadlines, placements and statistics, scholarships and financial aid, campus news and events, or facilities information. Just ask me anything about KPRIT!' },
    { keywords: ['latest news update', 'what is new today', 'recent updates', 'new updates', 'whats new'], response: 'Here are our latest updates. TechnoVision 2026 tech festival coming July 1 to 2 with hackathons and coding contests. Placement drive concluded with 100 plus companies and 6 point 56 lakhs average salary. New AI and Machine Learning laboratory inaugurated with GPU servers. B.Tech admissions open with July 31 deadline. 25 lakhs scholarship pool announced.' },
    { keywords: ['placement details', 'salary details', 'companies recruiting', 'job placement rate', 'placement stats'], response: 'KPRIT has excellent placements. Highest package is 54 lakhs per annum. Average package is 6 point 56 lakhs. 85 percent of eligible students are placed. Top recruiters include Microsoft, Infosys, TCS, Amazon, Google, Cognizant, and Wipro. Placements span IT, finance, consulting, and manufacturing sectors.' },
    { keywords: ['how to apply kprit', 'apply process', 'eamcet apply', 'admission steps'], response: 'For B.Tech admission, qualification in TS EAMCET is required. After EAMCET, you participate in state counseling and seat allotment. Registration deadline for 2026-27 is July 31, 2026. For M.Tech, GATE score is needed. For MBA, TGICET or CAT score is needed. Visit kpritech.ac.in or call 95420-42666 for details.' },
    { keywords: ['scholarship details', 'financial aid', 'fees assistance', 'merit scholarship amount', 'scholarship amount'], response: 'KPRIT offers 25 lakhs in total scholarships. Merit scholarships: 25 scholarships of 1 lakh each for students with 90 percent or higher marks. Need-based scholarships: 50 scholarships of 50,000 each for economically backward students. Additional scholarships available for SC, ST, OBC categories. Application deadline is July 15, 2026.' },
    { keywords: ['what features available', 'show me features', 'portal features', 'telegram bot feature', 'bot features'], response: 'Our portal has several features. Real-time news feed with instant filtering and search. Interactive voice assistant with text-to-speech. Lead capture for admissions inquiry. Telegram bot integration for direct messaging. Detailed information about courses, placements, admissions, facilities, and scholarships. You can access everything through voice, chat, or traditional browsing.' }
];

// Speech Synthesis Setup
let synth = window.speechSynthesis;
let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let isRecording = false;

if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-IN';
    recognition.interimResults = true;

    recognition.onstart = () => {
        isRecording = true;
        const micBtn = document.getElementById('voice-mic-btn');
        if (micBtn) {
            micBtn.innerHTML = '🛑';
            micBtn.style.background = '#e53e3e';
        }
        const wave = document.getElementById('voice-wave');
        if (wave) wave.classList.add('active');
        /* NEW: Upgrade 2 — Add listening animation class to voice button */
        const voiceBtn = document.getElementById('voice-btn');
        if (voiceBtn) voiceBtn.classList.add('listening');
    };

    recognition.onresult = (event) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
            if (event.results[i].isFinal) {
                finalTranscript += event.results[i][0].transcript;
            } else {
                interimTranscript += event.results[i][0].transcript;
            }
        }

        const textInput = document.getElementById('voice-text-input');
        if (textInput) {
            if (finalTranscript) {
                textInput.value = finalTranscript;
                handleUserMessage(finalTranscript);
            } else if (interimTranscript) {
                textInput.value = interimTranscript;
            }
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        if (event.error === 'aborted') return;
        
        let errorMsg = "I didn't quite catch that. Could you repeat it?";
        if (event.error === 'not-allowed') {
            errorMsg = "Microphone access was denied. Please check your browser permissions and allow microphone access.";
            isVoiceMode = false;
        } else if (event.error === 'audio-capture') {
            errorMsg = "No microphone was found. Please check your audio connection and try again.";
            isVoiceMode = false;
        } else if (event.error === 'no-speech') {
            // Silence timeout, don't alert user
            return;
        }
        
        addBotMessage(errorMsg);
        speakResponse(errorMsg);
    };

    recognition.onend = () => {
        isRecording = false;
        
        // If we are in voice mode and the bot is NOT speaking,
        // we should restart recognition to keep the hands-free loop alive.
        if (isVoiceMode && !isBotSpeaking) {
            setTimeout(() => {
                if (isVoiceMode && !isRecording) {
                    try {
                        recognition.start();
                    } catch (e) {
                        console.warn("Error restarting recognition onend:", e);
                    }
                }
            }, 300);
            return;
        }

        const micBtn = document.getElementById('voice-mic-btn');
        if (micBtn) {
            micBtn.innerHTML = '🎤';
            micBtn.style.background = '#1a365d';
        }
        const wave = document.getElementById('voice-wave');
        if (wave) wave.classList.remove('active');
        /* NEW: Upgrade 2 — Remove listening animation class */
        const voiceBtn = document.getElementById('voice-btn');
        if (voiceBtn) voiceBtn.classList.remove('listening');
    };
}

// Toggle Widget Panel
function toggleVoicePanel() {
    const panel = document.getElementById('voice-panel');
    panel.classList.toggle('active');
    
    // Add default message if empty
    const chatMessages = document.getElementById('voice-messages');
    if (panel.classList.contains('active') && chatMessages.children.length === 0) {
        const welcomeMsg = 'Hello, welcome to K-P-R-I-T. Who am I speaking with today?';
        addBotMessage(welcomeMsg);
        speakResponse(welcomeMsg);
    }

    // Shut down microphone and voice mode if panel is closed
    if (!panel.classList.contains('active')) {
        isVoiceMode = false;
        if (synth) synth.cancel();
        if (recognition && isRecording) {
            recognition.stop();
        }
        
        // Auto-send the conversation log to Telegram Bot when chat panel is closed
        if (typeof sendConversationLogToTelegram === 'function') {
            sendConversationLogToTelegram();
        }
    }
}

// Speak response aloud
function speakResponse(text) {
    if (synth) {
        synth.cancel(); // Stop current speech
        isBotSpeaking = true;
        
        // Temporarily stop recognition while speaking to prevent self-capture loops
        if (recognition && isRecording) {
            try {
                recognition.stop();
            } catch (e) {
                console.warn("Error stopping speech recognition on speak:", e);
            }
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-IN';
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        
        // Try to select an English female voice if available
        const voices = synth.getVoices();
        const enVoice = voices.find(voice => voice.lang.includes('en-IN') || voice.lang.includes('en-US'));
        if (enVoice) {
            utterance.voice = enVoice;
        }

        // Restart recognition after speaking if in voice mode and didn't say goodbye
        utterance.onend = () => {
            isBotSpeaking = false;
            if (recognition && isVoiceMode && !text.includes("Goodbye.")) {
                try {
                    recognition.start();
                } catch (e) {
                    console.warn("Speech recognition already running on end:", e);
                }
            }
        };

        utterance.onerror = () => {
            isBotSpeaking = false;
            if (recognition && isVoiceMode) {
                try {
                    recognition.start();
                } catch (e) {
                    console.warn("Speech recognition already running on error:", e);
                }
            }
        };

        synth.speak(utterance);
    }
}

// Search Q&A and Attendance database for response
// Formatting helper to enforce pronunciation and remove markdown for live calls
function formatResponseForVoice(text) {
    let clean = text.replace(/kprit/gi, 'K-P-R-I-T');
    clean = clean.replace(/jntuh/gi, 'J-N-T-U-H');
    // Remove markdown symbols (asterisks, bolding, hashes, bullets)
    clean = clean.replace(/\*\*|__|\*|_|#/g, '');
    return clean;
}

// Telegram Bot Automation Integration
async function sendTelegramNotification(text) {
    if (!TELEGRAM_BOT_TOKEN || TELEGRAM_BOT_TOKEN === 'YOUR_TELEGRAM_BOT_TOKEN' || TELEGRAM_BOT_TOKEN.startsWith('YOUR_')) {
        console.warn("Telegram Bot Token is not configured. Notification not sent.");
        return false;
    }
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text: text,
                parse_mode: 'HTML'
            })
        });
        return response.ok;
    } catch (e) {
        console.error("Error sending Telegram message:", e);
        return false;
    }
}

// Auto-send conversation log to Telegram when panel is closed
function sendConversationLogToTelegram() {
    if (!conversationHistory || conversationHistory.length <= 1) return;

    const transcriptText = conversationHistory.map(entry => {
        return `• <b>${entry.sender}:</b> ${entry.text}`;
    }).join('\n');

    const nameStr = callerName || "Anonymous User";
    const courseStr = callerCourse || "Not specified";

    const alertMessage = `
<b>💬 CONVERSATION SESSION REPORT</b>
👤 <b>Lead Name:</b> ${nameStr}
🎓 <b>Course Interest:</b> ${courseStr}
📅 <b>Timestamp:</b> ${new Date().toLocaleString()}

<b>Chat History Transcript:</b>
${transcriptText}
`;

    sendTelegramNotification(alertMessage).then(success => {
        if (success) {
            console.log("Conversation log pushed to Telegram.");
            conversationHistory = []; // Reset history
        }
    });
}

// Add appointment form card inside chat messages pane
function addAppointmentForm() {
    const chatMessages = document.getElementById('voice-messages');
    if (!chatMessages) return;

    if (document.getElementById('telegram-apt-card')) return; // Avoid duplicates

    const formDiv = document.createElement('div');
    formDiv.className = 'message bot';
    formDiv.id = 'telegram-apt-card';
    formDiv.style.background = '#ffffff';
    formDiv.style.border = '2px solid #3182ce';
    formDiv.style.borderRadius = '16px';
    formDiv.style.padding = '16px';
    formDiv.style.margin = '8px 0';
    formDiv.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    formDiv.style.alignSelf = 'flex-start';
    formDiv.style.maxWidth = '90%';
    formDiv.style.color = '#2d3748';
    
    formDiv.innerHTML = `
        <h4 style="margin: 0 0 10px 0; color: #1a365d; font-family: 'Inter', sans-serif; font-size: 0.95rem; font-weight: 700; text-align: left;">📅 Schedule Visit & Counselor Call</h4>
        <div style="margin-bottom: 8px;">
            <label style="font-size: 0.75rem; color: #4a5568; display: block; margin-bottom: 2px; text-align: left; font-weight: 600;">Full Name</label>
            <input type="text" id="apt-name" value="${callerName}" style="width: 100%; padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e0; font-size: 0.8rem; box-sizing: border-box;" />
        </div>
        <div style="margin-bottom: 8px;">
            <label style="font-size: 0.75rem; color: #4a5568; display: block; margin-bottom: 2px; text-align: left; font-weight: 600;">Phone Number</label>
            <input type="tel" id="apt-phone" placeholder="Enter 10-digit mobile" style="width: 100%; padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e0; font-size: 0.8rem; box-sizing: border-box;" />
        </div>
        <div style="margin-bottom: 8px;">
            <label style="font-size: 0.75rem; color: #4a5568; display: block; margin-bottom: 2px; text-align: left; font-weight: 600;">Course Interest</label>
            <select id="apt-course" style="width: 100%; padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e0; font-size: 0.8rem; box-sizing: border-box; background: white; height: 32px;">
                <option value="CSE" ${callerCourse === 'CSE' ? 'selected' : ''}>Computer Science (CSE)</option>
                <option value="CSE AI&ML" ${callerCourse === 'CSE AI&ML' ? 'selected' : ''}>CSE - AI & ML</option>
                <option value="ECE" ${callerCourse === 'ECE' ? 'selected' : ''}>ECE</option>
                <option value="Civil" ${callerCourse === 'Civil' ? 'selected' : ''}>Civil Engineering</option>
            </select>
        </div>
        <div style="margin-bottom: 12px;">
            <label style="font-size: 0.75rem; color: #4a5568; display: block; margin-bottom: 2px; text-align: left; font-weight: 600;">Preferred Visit Date & Time</label>
            <input type="datetime-local" id="apt-date" style="width: 100%; padding: 6px 10px; border-radius: 6px; border: 1px solid #cbd5e0; font-size: 0.8rem; box-sizing: border-box; height: 32px;" />
        </div>
        <button onclick="submitAppointmentRequest(this)" style="width: 100%; background: #3182ce; color: white; border: none; padding: 8px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 0.8rem; transition: background 0.2s; height: 35px;">Confirm Details & Submit</button>
    `;
    
    chatMessages.appendChild(formDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Submit appointment and chat log uploader to Telegram
function submitAppointmentRequest(btn) {
    const name = document.getElementById('apt-name').value.trim();
    const phone = document.getElementById('apt-phone').value.trim();
    const course = document.getElementById('apt-course').value;
    const datetime = document.getElementById('apt-date').value;
    
    if (!name || !phone || !datetime) {
        alert("Please enter your name, phone number, and a visit date/time.");
        return;
    }
    
    callerName = name;
    callerCourse = course;
    
    const card = btn.parentElement;
    card.querySelectorAll('input, select, button').forEach(el => el.disabled = true);
    btn.textContent = "Sending notification...";
    btn.style.background = "#3182ce";
    
    let transcriptText = conversationHistory.map(entry => {
        return `• <b>${entry.sender}:</b> ${entry.text}`;
    }).join('\n');
    
    const formattedDate = new Date(datetime).toLocaleString();

    const telegramAlert = `
<b>🚨 HIGH PRIORITY APPOINTMENT & CALL REQUEST 🚨</b>

👤 <b>Student Name:</b> ${name}
📞 <b>Phone Number:</b> ${phone}
🎓 <b>Course Interest:</b> ${course}
📅 <b>Preferred Campus Visit:</b> ${formattedDate}

<b>💬 CHAT HISTORY TRANSCRIPT:</b>
${transcriptText || "No chat history recorded yet."}
`;
    
    sendTelegramNotification(telegramAlert).then(success => {
        card.innerHTML = `
            <div style="text-align: center; color: #2f855a; font-family: 'Inter', sans-serif; padding: 10px 0;">
                <span style="font-size: 2.2rem; display: block; margin-bottom: 6px;">✅</span>
                <h4 style="margin: 0 0 4px 0; font-size: 0.95rem; font-weight: 700;">Appointment Submitted!</h4>
                <p style="margin: 0; font-size: 0.75rem; color: #4a5568; line-height: 1.4;">Your details and chat transcript have been pushed directly to the KPRIT admissions desk. We look forward to seeing you on ${formattedDate}!</p>
            </div>
        `;
        
        // Reset local conversation log as it has been pushed with details
        conversationHistory = [];
        
        speakResponse(`Thank you, ${name}. Your appointment request has been sent to our admissions team. We look forward to meeting you on ${formattedDate.split(',')[0]}.`);
    });
}

// Speech-to-text input normalization function to handle phonetic mistakes and spacing
function normalizeSpeechInput(input) {
    if (!input) return "";
    let normalized = input.toLowerCase();
    
    // Normalize JNTUH variations
    normalized = normalized.replace(/\bj\s*n\s*t\s*u\s*h\b/gi, 'jntuh');
    normalized = normalized.replace(/\bj\s*n\s*t\s*u\b/gi, 'jntuh');
    normalized = normalized.replace(/\bjntu\s*h\b/gi, 'jntuh');
    normalized = normalized.replace(/\bj\s*and\s*t\s*u\s*h\b/gi, 'jntuh');
    normalized = normalized.replace(/\bj\s*and\s*t\s*u\b/gi, 'jntuh');
    
    // Normalize KPRIT variations
    normalized = normalized.replace(/\bk\s*p\s*r\s*i\s*t\s*e\s*c\s*h\b/gi, 'kprit');
    normalized = normalized.replace(/\bk\s*p\s*r\s*i\s*t\b/gi, 'kprit');
    normalized = normalized.replace(/\bk\s*p\s*r\s*i\s*t\s*h\b/gi, 'kprit');
    normalized = normalized.replace(/\bk\s*p\s*r\s*i\b/gi, 'kprit');
    normalized = normalized.replace(/\bkpreet\b/gi, 'kprit');
    normalized = normalized.replace(/\bcapri\b/gi, 'kprit');
    normalized = normalized.replace(/\bk\s*pritch\b/gi, 'kprit');
    normalized = normalized.replace(/\bkp\s*rit\b/gi, 'kprit');
    normalized = normalized.replace(/\bkp\s*write\b/gi, 'kprit');
    normalized = normalized.replace(/\bkp\s*right\b/gi, 'kprit');
    normalized = normalized.replace(/\bk\s*p\s*write\b/gi, 'kprit');
    normalized = normalized.replace(/\bk\s*p\s*right\b/gi, 'kprit');
    normalized = normalized.replace(/\bcape\s*read\b/gi, 'kprit');
    normalized = normalized.replace(/\bcape\s*rit\b/gi, 'kprit');
    normalized = normalized.replace(/\bcapers\s*it\b/gi, 'kprit');
    normalized = normalized.replace(/\bcaper\s*it\b/gi, 'kprit');
    normalized = normalized.replace(/\bcapers\b/gi, 'kprit');
    normalized = normalized.replace(/\bcapersit\b/gi, 'kprit');
    normalized = normalized.replace(/\bcaperit\b/gi, 'kprit');
    
    // Courses normalization
    normalized = normalized.replace(/\bc\s*s\s*e\b/gi, 'cse');
    normalized = normalized.replace(/\ba\s*i\s*and\s*m\s*l\b/gi, 'aiml');
    normalized = normalized.replace(/\ba\s*i\s*m\s*l\b/gi, 'aiml');
    normalized = normalized.replace(/\ba\s*i\b/gi, 'aiml');
    normalized = normalized.replace(/\be\s*c\s*e\b/gi, 'ece');
    
    // EAPCET / EAMCET
    normalized = normalized.replace(/\beam\s*cet\b/gi, 'eamcet');
    normalized = normalized.replace(/\beap\s*cet\b/gi, 'eamcet');
    normalized = normalized.replace(/\be\s*am\s*cet\b/gi, 'eamcet');
    normalized = normalized.replace(/\be\s*ap\s*cet\b/gi, 'eamcet');
    
    // B-Tech
    normalized = normalized.replace(/\bb\s*tech\b/gi, 'btech');
    normalized = normalized.replace(/\bb\s*-\s*tech\b/gi, 'btech');
    
    // Name variants for attendance
    normalized = normalized.replace(/\bnitesh\b/gi, 'nitish');
    normalized = normalized.replace(/\bnithesh\b/gi, 'nitish');
    normalized = normalized.replace(/\bsai\s*kiran\b/gi, 'sai kiran');
    normalized = normalized.replace(/\banaya\b/gi, 'ananya');
    normalized = normalized.replace(/\brahool\b/gi, 'rahul');
    normalized = normalized.replace(/\bpreya\b/gi, 'priya');
    normalized = normalized.replace(/\bpria\b/gi, 'priya');
    normalized = normalized.replace(/\bvickram\b/gi, 'vikram');
    
    return normalized;
}

function findBestMatch(input) {
    const normalizedInput = normalizeSpeechInput(input);
    const rawLower = normalizedInput.toLowerCase().trim();
    const textClean = normalizedInput.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
    const words = textClean.split(/\s+/);
    
    // Check for glitch / fallback triggers
    const knownGlitches = [
        "i didn't quite catch that name, could you repeat it?",
        "i didnt quite catch that name could you repeat it",
        "thank you for watching",
        "thank you"
    ];
    
    const isKnownGlitch = knownGlitches.includes(rawLower) || knownGlitches.includes(textClean);
    const isSilenceOrVeryShort = textClean === '' || (textClean.length < 3 && textClean !== 'hi');
    
    // Check if the input is a glitch or silence
    if (isKnownGlitch) {
        if (consecutiveFallbackCount >= 1) {
            consecutiveFallbackCount = 0; // reset
            return formatResponseForVoice("It seems we have a bad connection. Please call the admission desk at 9542083666. Goodbye.");
        }
        consecutiveFallbackCount++;
        return formatResponseForVoice("Are you still there? Do you have any other questions about KPRIT?");
    }
    
    if (isSilenceOrVeryShort) {
        if (consecutiveFallbackCount >= 1) {
            consecutiveFallbackCount = 0; // reset
            return formatResponseForVoice("It seems we have a bad connection. Please call the admission desk at 9542083666. Goodbye.");
        }
        consecutiveFallbackCount++;
        return formatResponseForVoice("I am still here if you need any details about admissions or the campus.");
    }

    // 0. Out of Domain Restrictions
    const outOfBoundsKeywords = ['politics', 'weather', 'president', 'america', 'india', 'prime minister', 'minister', 'movie', 'song', 'government', 'chatgpt', 'openai', 'claude', 'gemini'];
    for (const ood of outOfBoundsKeywords) {
        const oodClean = ood.toLowerCase().trim();
        const escapedOod = oodClean.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp('\\b' + escapedOod + '\\b');
        if (regex.test(textClean)) {
            consecutiveFallbackCount = 0; // Valid interaction
            return formatResponseForVoice("I'm strictly here to help with KPRIT admissions. Can I help you with our B.Tech programs?");
        }
    }
    
    // 1. Frustrated/Angry escalation check
    const isAngry = ['fuck', 'shit', 'ass', 'idiot', 'stupid', 'useless', 'worst', 'scam', 'fraud', 'annoyed', 'angry', 'hate', 'sucks', 'nonsense', 'crap', 'fool'].some(w => words.includes(w));
    if (isAngry) {
        consecutiveFallbackCount = 0; // Valid interaction
        return formatResponseForVoice("I completely understand. Let me get you directly in touch with our senior admissions team. Please hold, or call 9542083666.");
    }

    // 2. Helper function to search Q&A database for match score
    function getQAMatch(textClean) {
        let bestMatch = null;
        let maxScore = 0;

        for (const qa of voiceQA) {
            let bestKwScore = 0;
            for (const kw of qa.keywords) {
                let kwScore = 0;
                const kwClean = kw.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
                
                const escapedKw = kwClean.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                const regex = new RegExp('\\b' + escapedKw + '\\b');
                
                if (regex.test(textClean)) {
                    kwScore = kwClean.length * 2; // Double weight for exact phrase match
                } else {
                    // Word matching weight
                    const kwWords = kwClean.split(/\s+/);
                    let wScore = 0;
                    for (const kwWord of kwWords) {
                        if (kwWord.length > 2 && words.includes(kwWord)) {
                            wScore += kwWord.length;
                        }
                    }
                    kwScore = wScore;
                }
                if (kwScore > bestKwScore) {
                    bestKwScore = kwScore;
                }
            }
            if (bestKwScore > maxScore) {
                maxScore = bestKwScore;
                bestMatch = qa;
            }
        }
        return { bestMatch, maxScore };
    }

    // Lead Capture course matcher
    let courseMentioned = null;
    if (textClean.includes('cse') || textClean.includes('computer science')) courseMentioned = 'CSE';
    else if (textClean.includes('aiml') || textClean.includes('machine learning') || textClean.includes('artificial intelligence') || textClean.includes('ai')) courseMentioned = 'CSE AI&ML';
    else if (textClean.includes('ece') || textClean.includes('electronics')) courseMentioned = 'ECE';
    else if (textClean.includes('civil')) courseMentioned = 'Civil';

    // Attendance database lookup check (only if they ask about attendance)
    let matchedStudent = null;
    for (const student of attendanceDatabase) {
        for (const kw of student.keywords) {
            const kwClean = kw.toLowerCase().trim();
            const escapedKw = kwClean.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            const regex = new RegExp('\\b' + escapedKw + '\\b');
            if (regex.test(textClean)) {
                matchedStudent = student;
                break;
            }
        }
        if (matchedStudent) break;
    }
    
    const isAttendanceRequest = textClean.includes('attend') || 
                                 textClean.includes('attendance') || 
                                 textClean.includes('present') || 
                                 textClean.includes('absent') ||
                                 textClean.includes('class today') ||
                                 textClean.includes('is here') ||
                                 textClean.includes('here today') ||
                                 words.includes('here') ||
                                 matchedStudent !== null;

    if (isAttendanceRequest) {
        consecutiveFallbackCount = 0; // Valid interaction
        if (matchedStudent) {
            if (matchedStudent.status === "Present") {
                return formatResponseForVoice(`Yes, ${matchedStudent.name} (Roll Number ${matchedStudent.roll}) is marked Present for today's classes.`);
            } else {
                return formatResponseForVoice(`No, ${matchedStudent.name} (Roll Number ${matchedStudent.roll}) is marked Absent today.`);
            }
        }
        return formatResponseForVoice("I couldn't find that student in today's daily log. Could you please double-check the spelling of their name?");
    }

    // LEAD CAPTURE DIALOG FLOW
    
    // Step 1: Capture Name
    if (!callerName) {
        // Try to extract name
        let nameMatch = input.match(/(?:my name is|i am|this is|myself|speaking|call me)\s+([a-zA-Z\s]+)/i);
        let potentialName = "";
        if (nameMatch) {
            potentialName = nameMatch[1].trim();
        } else if (words.length <= 2 && !words.includes('what') && !words.includes('how') && !words.includes('is') && !words.includes('are') && !words.includes('did') && !courseMentioned) {
            potentialName = textClean;
        }

        const greetingsList = ['hello', 'hi', 'hey', 'greetings', 'namaste', 'yo'];
        if (potentialName && !greetingsList.includes(potentialName.toLowerCase().trim())) {
            callerName = potentialName.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            consecutiveFallbackCount = 0;
            if (courseMentioned) {
                callerCourse = courseMentioned;
                return formatResponseForVoice(`Nice to meet you, ${callerName}. I have noted your interest in ${callerCourse}. How can I assist you with admissions today?`);
            }
            return formatResponseForVoice(`Nice to meet you, ${callerName}. What B-Tech course or engineering branch are you interested in?`);
        }

        // If no name found, process the Q&A but prompt for name
        const { bestMatch, maxScore } = getQAMatch(textClean);
        if (maxScore > 0 && bestMatch) {
            consecutiveFallbackCount = 0;
            if (courseMentioned) callerCourse = courseMentioned;
            return formatResponseForVoice(`${bestMatch.response} By the way, who am I speaking with today?`);
        }

        // If they ask a complex question we don't know, escalate
        if (words.length > 5) {
            consecutiveFallbackCount = 0;
            return formatResponseForVoice("I completely understand. Let me get you directly in touch with our senior admissions team. Please hold, or call 9542083666.");
        }

        // Default fallback turns
        if (consecutiveFallbackCount >= 1) {
            consecutiveFallbackCount = 0; // reset
            return formatResponseForVoice("It seems we have a bad connection. Please call the admission desk at 9542083666. Goodbye.");
        }
        consecutiveFallbackCount++;
        return formatResponseForVoice("I didn't quite catch that name, could you repeat it?");
    }

    // Step 2: Capture Course
    if (callerName && !callerCourse) {
        if (courseMentioned) {
            callerCourse = courseMentioned;
            consecutiveFallbackCount = 0;
            
            const { bestMatch, maxScore } = getQAMatch(textClean);
            if (maxScore > 0 && bestMatch) {
                return formatResponseForVoice(`Great choice, ${callerName}. Regarding your question: ${bestMatch.response}`);
            }
            return formatResponseForVoice(`Great choice, ${callerName}. We offer B-Tech in ${callerCourse} with excellent labs. What questions do you have about admissions or placements?`);
        }

        // If course not found, process question but prompt for course
        const { bestMatch, maxScore } = getQAMatch(textClean);
        if (maxScore > 0 && bestMatch) {
            consecutiveFallbackCount = 0;
            return formatResponseForVoice(`${bestMatch.response} By the way, ${callerName}, which B-Tech branch are you looking to join?`);
        }

        // Complex unknown question escalates
        if (words.length > 5) {
            consecutiveFallbackCount = 0;
            return formatResponseForVoice("I completely understand. Let me get you directly in touch with our senior admissions team. Please hold, or call 9542083666.");
        }

        if (consecutiveFallbackCount >= 1) {
            consecutiveFallbackCount = 0; // reset
            return formatResponseForVoice("It seems we have a bad connection. Please call the admission desk at 9542083666. Goodbye.");
        }
        consecutiveFallbackCount++;
        return formatResponseForVoice(`I didn't quite catch that. ${callerName}, what course are you interested in?`);
    }

    // Step 3: General Q&A (Both captured)
    const { bestMatch, maxScore } = getQAMatch(textClean);
    if (maxScore > 0 && bestMatch) {
        consecutiveFallbackCount = 0; // Valid interaction
        return formatResponseForVoice(bestMatch.response);
    }
    
    // Complex or unknown escalates
    consecutiveFallbackCount = 0;
    return formatResponseForVoice("I completely understand. Let me get you directly in touch with our senior admissions team. Please hold, or call 9542083666.");
}

// Add user message bubble
function addUserMessage(text) {
    const chatMessages = document.getElementById('voice-messages');
    const msg = document.createElement('div');
    msg.className = 'message user';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Save to conversation history
    if (typeof conversationHistory !== 'undefined') {
        conversationHistory.push({ sender: 'User', text: text });
    }
}

// Add bot message bubble
function addBotMessage(text) {
    const chatMessages = document.getElementById('voice-messages');
    const msg = document.createElement('div');
    msg.className = 'message bot';
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Save to conversation history
    if (typeof conversationHistory !== 'undefined') {
        conversationHistory.push({ sender: 'Bot', text: text });
    }
}

// Show typing loader
function showTypingIndicator() {
    const chatMessages = document.getElementById('voice-messages');
    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'voice-typing';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(indicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing loader
function removeTypingIndicator() {
    const indicator = document.getElementById('voice-typing');
    if (indicator) {
        indicator.remove();
    }
}

// Handle message submit
function handleUserMessage(text) {
    const cleanText = text.trim();
    if (!cleanText) return;

    addUserMessage(cleanText);
    
    // Clear input
    document.getElementById('voice-text-input').value = '';

    // Show typing loader
    showTypingIndicator();

    setTimeout(() => {
        removeTypingIndicator();
        const response = findBestMatch(cleanText);
        addBotMessage(response);
        speakResponse(response);

        // Show appointment booking form if triggered
        if (response.includes("appointment booking form") && typeof addAppointmentForm === 'function') {
            setTimeout(addAppointmentForm, 1000);
        }

        // Stop speech recognition if goodbye message was returned
        if (response.includes("Goodbye.") && recognition && isRecording) {
            recognition.stop();
        }
    }, 600);
}

// Microphone capture
function handleMicrophone() {
    if (!recognition) {
        addBotMessage("Voice speech-to-text is not supported in your browser. Please type your query!");
        return;
    }

    if (isRecording) {
        isVoiceMode = false;
        try {
            recognition.stop();
        } catch (e) {
            console.warn("Error stopping speech recognition on click:", e);
        }
    } else {
        isVoiceMode = true;
        if (synth) synth.cancel();
        try {
            recognition.start();
        } catch (e) {
            console.warn("Speech recognition already running on click:", e);
        }
    }
}


// C. NAVIGATION & INTERACTION

// Mobile navbar toggle
function initNavbar() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Glassmorphism and active links scroll listeners
function initScrollEffects() {
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        // Sticky glassmorphism header
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Back to top indicator
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }

        // Section link highlight
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let currentSectionId = '';

        sections.forEach(sec => {
            const secTop = sec.offsetTop - 120;
            const secHeight = sec.offsetHeight;
            if (window.scrollY >= secTop && window.scrollY < secTop + secHeight) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Back to top smooth scroll
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Fade in on scroll animations
function initScrollAnimations() {
    const animEls = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    animEls.forEach(el => observer.observe(el));
    
    // Add animations classes dynamically to sections
    document.querySelectorAll('section .container').forEach(container => {
        container.classList.add('animate-on-scroll');
        observer.observe(container);
    });
}

// Stat counter count-up animations
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const runCounter = (el) => {
        const target = parseFloat(el.getAttribute('data-target'));
        const speed = 200; // Lower is faster
        const increment = target / speed;
        let count = 0;

        const updateCount = () => {
            count += increment;
            if (count < target) {
                // Formatting decimals vs integers
                if (target % 1 !== 0) {
                    el.textContent = count.toFixed(2);
                } else {
                    el.textContent = Math.ceil(count);
                }
                setTimeout(updateCount, 1);
            } else {
                el.textContent = target;
            }
        };

        updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runCounter(entry.target);
                observer.unobserve(entry.target); // Run once
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(num => observer.observe(num));
}


// D. INITS
document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar & scroll events
    initNavbar();
    initScrollEffects();

    // 2. Load and render news
    renderNews();

    // news control triggers
    document.querySelectorAll('.filter-pill').forEach(pill => {
        pill.addEventListener('click', () => {
            filterByCategory(pill.getAttribute('data-category'));
        });
    });

    document.getElementById('news-search').addEventListener('input', (e) => {
        searchNews(e.target.value);
    });

    document.getElementById('load-more-btn').addEventListener('click', loadMoreNews);

    // Modal Close Triggers
    document.querySelector('.modal-close').addEventListener('click', closeNewsDetail);
    document.getElementById('news-modal').addEventListener('click', (e) => {
        if (e.target.id === 'news-modal') {
            closeNewsDetail();
        }
    });
    
    // ESC key close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeNewsDetail();
        }
    });

    // Share buttons triggers
    document.querySelector('.share-btn.whatsapp').addEventListener('click', shareWhatsApp);
    document.querySelector('.share-btn.facebook').addEventListener('click', shareFacebook);
    document.querySelector('.share-btn.twitter').addEventListener('click', shareTwitter);

    // 3. Voice bot listeners
    document.getElementById('voice-btn').addEventListener('click', toggleVoicePanel);
    document.querySelector('.voice-close').addEventListener('click', toggleVoicePanel);
    document.getElementById('voice-send-btn').addEventListener('click', () => {
        const text = document.getElementById('voice-text-input').value;
        handleUserMessage(text);
    });
    document.getElementById('voice-text-input').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserMessage(e.target.value);
        }
    });
    document.getElementById('voice-mic-btn').addEventListener('click', handleMicrophone);

    // 4. Scroll animations and counters
    initScrollAnimations();
    initStatCounters();

    // 5. NEW: Upgrade 4 — FAQ accordion toggle
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const parentItem = btn.parentElement;
            const isActive = parentItem.classList.contains('active');

            // Close all other FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                parentItem.classList.add('active');
            }
        });
    });
});
