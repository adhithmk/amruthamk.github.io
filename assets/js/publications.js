// Dr. Amrutha M K's Publications
const publications = [
    // Journal Articles
    {
        id: 7,
        type: 'journal',
        title: 'Linguistic and Aesthetic Constraints in Literary Translation: Phonic Considerations in Translating Śabda-śakti-mūla dhvani',
        authors: 'Amrutha M K',
        citation: 'Translation Today, 16(1), 21-48',
        year: '2022',
        abstract: 'This article explores the linguistic and aesthetic constraints in literary translation, with a focus on phonic considerations in translating Śabda-śakti-mūla dhvani, examining the challenges and strategies in maintaining the aesthetic essence of the original text.',
        tags: ['Literary Translation', 'Aesthetics', 'Linguistics', 'Śabda-śakti-mūla dhvani', 'Phonetics'],
        links: {
            doi: 'https://doi.org/10.46623/tt/2022.16.1.ar2',
            pdf: '/assets/pdfs/LinguisticAestheticConstraints.pdf',
        },
        visible: true
    },
    {
        id: 1,
        type: 'journal',
        title: 'Mapping the Margins: Digital Cartography and Postcolonial Narratives',
        authors: 'Amrutha M K',
        citation: 'South Asian Review, 44(3), 215-230',
        year: '2023',
        abstract: 'This article examines the intersection of digital cartography and postcolonial narratives, exploring how GIS technologies can reveal spatial dimensions of literary texts from South Asia.',
        tags: ['Digital Humanities', 'Postcolonial Studies', 'GIS', 'Spatial Analysis'],
        links: {
            doi: 'https://doi.org/10.1080/02759527.2023.1987654',
            pdf: '/assets/pdfs/MappingMargins.pdf',
        },
        visible: true
    },
    
    // Book Chapters
    {
        id: 2,
        type: 'chapter',
        title: 'Performing the Archive: Digital Reconstructions of Traditional Performance Practices',
        authors: 'Amrutha M K, Rajesh Kumar',
        citation: 'In: Digital Archives and the Politics of Cultural Memory (pp. 145-167). Routledge',
        year: '2023',
        abstract: 'This chapter explores the challenges and opportunities in digitally archiving traditional performance practices, with case studies from Kerala\'s Theyyam and Kathakali traditions.',
        tags: ['Digital Archives', 'Performance Studies', 'Cultural Heritage', 'Kerala'],
        links: {
            doi: 'https://doi.org/10.4324/9781003182326-10',
            pdf: '/assets/pdfs/PerformingArchive.pdf',
        },
        visible: true
    },
    
    // Conference Papers
    {
        id: 3,
        type: 'conference',
        title: 'Decolonizing Digital Humanities: Perspectives from the Global South',
        authors: 'Amrutha M K, Priya Nair, Sanjay Kumar',
        citation: 'Proceedings of the Digital Humanities Conference 2023, pp. 312-327',
        year: '2023',
        abstract: 'This paper critically examines the decolonial potential of digital humanities practices in South Asian contexts, highlighting indigenous knowledge systems and alternative digital epistemologies.',
        tags: ['Digital Humanities', 'Decolonial Studies', 'Global South', 'Indigenous Knowledge'],
        links: {
            pdf: '/assets/pdfs/DecolonizingDH.pdf',
            slides: '/assets/slides/DecolonizingDH_slides.pdf'
        },
        visible: true
    },
    
    // Media & Interviews
    {
        id: 4,
        type: 'media',
        title: 'Bridging Traditions: Digital Approaches to South Asian Cultural Heritage',
        authors: 'Interview with Dr. Amrutha M K',
        citation: 'Humanities in the Digital Age, Episode 17',
        year: '2023',
        abstract: 'In this podcast interview, Dr. Amrutha discusses her work on digital approaches to South Asian cultural heritage, the challenges of preserving intangible cultural practices, and the future of digital humanities in India.',
        tags: ['Podcast', 'Cultural Heritage', 'Digital Humanities', 'Interview'],
        links: {
            listen: 'https://example.com/podcast/hda17',
            transcript: '/assets/transcripts/HDA17_transcript.pdf'
        },
        visible: true
    },
    
    // Additional Journal Article
    {
        id: 5,
        type: 'journal',
        title: 'Visualizing the Invisible: Digital Methods for Analyzing Performance Aesthetics',
        authors: 'Amrutha M K',
        citation: 'Performance Research, 27(4), 89-104',
        year: '2022',
        abstract: 'This article presents innovative digital methods for analyzing and visualizing the ephemeral aspects of performance, with applications to both traditional and contemporary performance practices.',
        tags: ['Performance Studies', 'Digital Methods', 'Visualization', 'Aesthetics'],
        links: {
            doi: 'https://doi.org/10.1080/13528165.2022.2076789',
            pdf: '/assets/pdfs/VisualizingInvisible.pdf',
        },
        visible: true
    },
    
    // Book Chapter
    {
        id: 6,
        type: 'chapter',
        title: 'Digital Storytelling in the Classroom: Pedagogical Approaches',
        authors: 'Amrutha M K, Ananya Sharma',
        citation: 'In: Digital Pedagogies in the Humanities (pp. 78-95). Bloomsbury Academic',
        year: '2022',
        abstract: 'This chapter explores the integration of digital storytelling in humanities education, presenting case studies and best practices for implementing these approaches in diverse classroom settings.',
        tags: ['Digital Pedagogy', 'Storytelling', 'Education', 'Classroom Practice'],
        links: {
            doi: 'https://doi.org/10.5040/9781501374509.ch-005',
            pdf: '/assets/pdfs/DigitalStorytelling.pdf',
        },
        visible: true
    }
];

// DOM elements
const publicationsContainer = document.getElementById('publications-container');
const filterButtons = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('search-publications');
let activeFilter = 'all';
let searchQuery = '';

// Initialize the page
function init() {
    renderPublications();
    setupEventListeners();
}

// Set up event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active', 'bg-indigo-600', 'text-white'));
            button.classList.add('active', 'bg-indigo-600', 'text-white');
            activeFilter = button.dataset.filter;
            filterPublications();
        });
    });

    // Search input
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        filterPublications();
    });
}

// Filter publications based on active filter and search query
function filterPublications() {
    const filtered = publications.filter(pub => {
        const matchesFilter = activeFilter === 'all' || pub.type === activeFilter;
        const matchesSearch = pub.title.toLowerCase().includes(searchQuery) ||
                           pub.authors.toLowerCase().includes(searchQuery) ||
                           pub.tags.some(tag => tag.toLowerCase().includes(searchQuery));
        return matchesFilter && matchesSearch;
    });
    
    renderPublications(filtered);
}

// Icons mapping for different publication types and actions
const typeIcons = {
    journal: `<svg class="icon-md text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"></path>
    </svg>`,
    chapter: `<svg class="icon-md text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
    </svg>`,
    conference: `<svg class="icon-md text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>`,
    media: `<svg class="icon-md text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
    </svg>`
};

const actionIcons = {
    pdf: `<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>`,
    doi: `<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
    </svg>`,
    cite: `<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
    </svg>`,
    listen: `<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 010-7.072"></path>
    </svg>`,
    transcript: `<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
    </svg>`,
    slides: `<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>`,
    video: `<svg class="icon-sm" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>`
};

// Render publications to the DOM
function renderPublications(publicationsToRender = publications) {
    if (publicationsToRender.length === 0) {
        publicationsContainer.innerHTML = `
            <div class="text-center py-16">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 class="mt-2 text-lg font-medium text-gray-900">No publications found</h3>
                <p class="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
        `;
        return;
    }

    publicationsContainer.innerHTML = publicationsToRender.map(pub => `
        <div class="publication-item ${pub.type} bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border-l-4">
            <div class="p-6">
                <div class="flex items-start">
                    <div class="flex-shrink-0 pt-1 mr-4">
                        ${typeIcons[pub.type] || ''}
                    </div>
                    <div class="flex-1 min-w-0">
                        <h3 class="text-lg font-bold text-gray-900 leading-tight mb-1">${pub.title}</h3>
                        <p class="text-sm text-gray-600 mb-2">${pub.authors}</p>
                        <p class="text-sm text-indigo-600 font-medium mb-3">${pub.citation} <span class="text-gray-500">(${pub.year})</span></p>
                        <p class="text-gray-700 mb-4">${pub.abstract}</p>
                        
                        <div class="flex flex-wrap gap-2 mb-4">
                            ${pub.tags.map(tag => `
                                <span class="publication-tag text-xs">${tag}</span>
                            `).join('')}
                        </div>
                        
                        <div class="publication-actions flex flex-wrap gap-2">
                            ${Object.entries(pub.links).map(([type, url]) => {
                                const actionText = {
                                    pdf: 'View PDF',
                                    doi: 'View DOI',
                                    cite: 'Cite',
                                    listen: 'Listen',
                                    transcript: 'Transcript',
                                    slides: 'Slides',
                                    video: 'Watch'
                                }[type] || type;
                                
                                // Handle different link types
                                let href = '#';
                                let onClick = '';
                                let target = '_blank';
                                let rel = 'noopener noreferrer';
                                
                                if (type === 'doi' && url) {
                                    // Use the DOI URL directly
                                    href = url.startsWith('http') ? url : `https://doi.org/${url.replace('https://doi.org/', '')}`;
                                } else if (type === 'pdf' && url) {
                                    // For PDFs, use a placeholder or the actual URL if it exists
                                    href = url.startsWith('http') ? url : '#';
                                    if (!url.startsWith('http')) {
                                        onClick = 'event.preventDefault(); alert("This PDF is not yet available.");';
                                    }
                                } else if (url && (url.startsWith('http') || url.startsWith('mailto:'))) {
                                    // External links
                                    href = url;
                                } else {
                                    // Disable other links that would cause 404
                                    onClick = 'event.preventDefault();';
                                }
                                
                                return `
                                    <a href="${href}" 
                                       class="publication-action bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
                                       target="${target}"
                                       rel="${rel}"
                                       onclick="${onClick}">
                                        ${actionIcons[type] || ''}
                                        <span>${actionText}</span>
                                    </a>
                                `;
                            }).join('')}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
