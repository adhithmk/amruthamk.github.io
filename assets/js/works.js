// Works Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Sample works data - replace with your actual works
    const works = [
        // Conference Presentations
        {
            id: 10,
            title: 'Stylistic Interactions and Semantic Interventions in Literary Translation',
            category: 'conference',
            year: 2023,
            tags: ['conference', 'literary-translation', 'stylistics'],
            image: '/assets/images/works/bclt-conference.jpg',
            description: 'International Conference on Stylistic Border Crossings in and beyond Translation',
            content: `
                <h3 class="text-xl font-bold mb-4">Stylistic Interactions and Semantic Interventions in Literary Translation</h3>
                <div class="flex items-center text-sm text-gray-600 mb-4">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>March 9-10, 2023</span>
                    <span class="mx-2">•</span>
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Online (University of East Anglia, UK)</span>
                </div>
                <div class="prose max-w-none">
                    <p class="mb-4">Presented at the international conference organized by The British Centre for Literary Translation (BCLT), East Center, University of East Anglia.</p>
                    <div class="mt-6">
                        <a href="https://www.eastcentre-uea.org/events/whubdjsttg51od20ttmwx48g0qsq8u" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                            <span>View Conference Details</span>
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 11,
            title: 'The Aesthetics of Poetic Suggestion in Artistic and Literary Expressions',
            category: 'conference',
            year: 2022,
            tags: ['conference', 'aesthetics', 'poetry', 'literary-studies'],
            image: '/assets/images/works/connecticut-conference.jpg',
            description: 'International Conference on Kinds of Expression',
            content: `
                <h3 class="text-xl font-bold mb-4">The Aesthetics of Poetic Suggestion in Artistic and Literary Expressions</h3>
                <div class="flex items-center text-sm text-gray-600 mb-4">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>February 5, 2022</span>
                    <span class="mx-2">•</span>
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Online (University of Connecticut, USA)</span>
                </div>
                <div class="prose max-w-none">
                    <p class="mb-4">Presented at the international conference organized by the Expression, Communication, and Origins of Meaning Research Group, supported by the Connecticut Institute for Brain and Cognitive Sciences, the Humanities Institute, and the Philosophy Department of the University of Connecticut.</p>
                    <div class="mt-6">
                        <a href="https://ecomresearchgroup.com/kinds-of-expression/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                            <span>View Conference Details</span>
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 12,
            title: 'Lore and Legends of the Sacred Groves',
            category: 'conference',
            year: 2021,
            tags: ['conference', 'cultural-heritage', 'environment', 'folklore'],
            image: '/assets/images/works/iiaa-conference.jpg',
            description: 'International Summer Conference on Aesthetics in the Age of Environmental Crises',
            content: `
                <h3 class="text-xl font-bold mb-4">Lore and Legends of the Sacred Groves</h3>
                <div class="flex items-center text-sm text-gray-600 mb-4">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>June 4, 2021</span>
                    <span class="mx-2">•</span>
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Online (International Institute of Applied Aesthetics, Finland)</span>
                </div>
                <div class="prose max-w-none">
                    <p class="mb-4">Presented at the International Summer Conference organized by the International Institute of Applied Aesthetics, Finland.</p>
                    <div class="mt-6">
                        <a href="https://www.helsinki.fi/en/networks/international-institute-of-applied-aesthetics/events/aesthetics-in-the-age-of-environmental-crises" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                            <span>View Conference Details</span>
                            <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            `
        },
        {
            id: 13,
            title: 'A Walk through the Sacred Groves of Kerala',
            category: 'conference',
            year: 2020,
            tags: ['conference', 'cultural-heritage', 'kerala', 'environment'],
            image: '/assets/images/works/issc-conference.jpg',
            description: '43rd Indian Social Sciences Congress',
            content: `
                <h3 class="text-xl font-bold mb-4">A Walk through the Sacred Groves of Kerala</h3>
                <div class="flex items-center text-sm text-gray-600 mb-4">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>January 18, 2020</span>
                    <span class="mx-2">•</span>
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Bangalore University, India</span>
                </div>
                <div class="prose max-w-none">
                    <p class="mb-4">Presented at the 43rd Indian Social Sciences Congress held at Bangalore University.</p>
                </div>
            `
        },
        {
            id: 14,
            title: 'Narratives of Resistance: Creating and Claiming Spaces through Performances',
            category: 'conference',
            year: 2019,
            tags: ['conference', 'performance-studies', 'cultural-studies', 'resistance'],
            image: '/assets/images/works/ysc-conference.jpg',
            description: 'Young Scholars’ Congress',
            content: `
                <h3 class="text-xl font-bold mb-4">Narratives of Resistance: Creating and Claiming Spaces through Performances</h3>
                <div class="flex items-center text-sm text-gray-600 mb-4">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>March 16, 2019</span>
                    <span class="mx-2">•</span>
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>University of Kerala, Thiruvananthapuram, India</span>
                </div>
                <div class="prose max-w-none">
                    <p class="mb-4">Presented at the Young Scholars' Congress organized by the University of Kerala, Thiruvananthapuram.</p>
                </div>
            `
        },
        // Media Coverage
        {
            id: 7,
            title: 'ഉദാനനഗരിയില്‍ മുഖെഴുത്തിന്‍െറ വർണ്ണലേഖം',
            category: 'media',
            year: 2023,
            tags: ['media', 'interview', 'malayalam'],
            image: '/assets/images/works/mathrubhumi-interview.jpg',
            description: 'Interview with Mathrubhumi News about urban art and cultural expressions',
            content: `
                <h3 class="text-xl font-bold mb-4">Interview with Mathrubhumi News</h3>
                <p class="mb-4">Discussion about the cultural significance of urban art forms and their impact on contemporary society.</p>
                <div class="aspect-w-16 aspect-h-9 mb-4">
                    <iframe class="w-full h-64 rounded-lg" src="https://www.youtube.com/embed/hVk6vVsm_V8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="mt-4">
                    <a href="https://m.youtube.com/watch?v=hVk6vVsm_V8&feature=youtu.be" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>Watch on YouTube</span>
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            `
        },
        {
            id: 8,
            title: 'ചായക്കൂട്ടുകളിൽ തിറയാട്ടത്തിന്റെ തീവ്രഭാവങ്ങൾ',
            category: 'media',
            year: 2023,
            tags: ['media', 'print', 'malayalam', 'cultural-studies'],
            image: '/assets/images/works/mathrubhumi-print.jpg',
            description: 'Featured article in Mathrubhumi print edition about traditional performance arts',
            content: `
                <h3 class="text-xl font-bold mb-4">Article in Mathrubhumi Print Edition</h3>
                <p class="mb-4">Analysis of the intense expressions in traditional Theyyam performances and their cultural significance in contemporary society.</p>
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                    <p class="text-sm text-gray-600 mb-2">Featured in Mathrubhumi Print Edition</p>
                    <p class="text-gray-800">The article explores the traditional art form of Theyyam, focusing on its intense expressions and cultural importance in Kerala's heritage.</p>
                </div>
                <div class="mt-4">
                    <a href="https://drive.google.com/drive/folders/1z5Lzhz9ootkvTz5d--tgBe7c3JIQxth0" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>View Article Scans</span>
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            `
        },
        {
            id: 9,
            title: 'നഗരത്തിൽ വനിതകൾ പകൽയാതയും ദുഷ്കരം',
            category: 'media',
            year: 2023,
            tags: ['media', 'print', 'gender-studies', 'urban-issues'],
            image: '/assets/images/works/women-urban-space.jpg',
            description: 'Article discussing challenges faced by women in urban spaces',
            content: `
                <h3 class="text-xl font-bold mb-4">Article in Mathrubhumi Print Edition</h3>
                <p class="mb-4">Examination of the challenges and safety concerns faced by women in urban environments during daytime.</p>
                <div class="bg-gray-50 p-4 rounded-lg mb-4">
                    <p class="text-sm text-gray-600 mb-2">Featured in Mathrubhumi Print Edition</p>
                    <p class="text-gray-800">This article discusses the unique challenges women face in urban spaces, focusing on safety, accessibility, and social dynamics in public areas during daylight hours.</p>
                </div>
                <div class="mt-4">
                    <a href="https://drive.google.com/drive/folders/1z5Lzhz9ootkvTz5d--tgBe7c3JIQxth0" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>View Article Scans</span>
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            `
        },
        {
            id: 1,
            title: 'Digital Humanities: A New Frontier',
            category: 'research',
            year: 2023,
            tags: ['digital-humanities', 'research', 'publication'],
            image: '/assets/images/works/digital-humanities.jpg',
            description: 'Exploring the intersection of technology and humanities in modern research.',
            content: `
                <h3 class="text-xl font-bold mb-4">About This Project</h3>
                <p class="mb-4">This research explores how digital tools are transforming humanities scholarship, enabling new forms of analysis and interpretation of cultural artifacts.</p>
                <h4 class="font-semibold mb-2">Key Contributions:</h4>
                <ul class="list-disc pl-5 mb-4 space-y-1">
                    <li>Developed new methodologies for text analysis in historical documents</li>
                    <li>Created interactive visualizations of literary networks</li>
                    <li>Published findings in leading academic journals</li>
                </ul>
                <div class="mt-6">
                    <a href="#" class="inline-flex items-center text-indigo-600 hover:text-indigo-500">
                        <span>View Publication</span>
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>
            `
        },
        {
            id: 2,
            title: 'Postcolonial Literature in the Digital Age',
            category: 'publications',
            year: 2022,
            tags: ['postcolonial', 'literature', 'digital-humanities'],
            image: '/assets/images/works/postcolonial.jpg',
            description: 'Analyzing postcolonial narratives through digital lenses.',
            content: '<p>Detailed content for postcolonial literature project...</p>'
        },
        {
            id: 3,
            title: 'Introduction to Literary Theory',
            category: 'teaching',
            year: 2023,
            tags: ['teaching', 'literary-theory', 'education'],
            image: '/assets/images/works/literary-theory.jpg',
            description: 'Course materials and resources for literary theory students.',
            content: '<p>Detailed content for literary theory course...</p>'
        },
        {
            id: 4,
            title: 'Digital Archive Project',
            category: 'digital',
            year: 2022,
            tags: ['digital-archive', 'research', 'collaboration'],
            image: '/assets/images/works/digital-archive.jpg',
            description: 'Creating an open-access digital archive of historical documents.',
            content: '<p>Detailed content for digital archive project...</p>'
        },
        {
            id: 5,
            title: 'Narrative Structures in Contemporary Fiction',
            category: 'research',
            year: 2021,
            tags: ['narrative', 'fiction', 'literary-analysis'],
            image: '/assets/images/works/narrative-structures.jpg',
            description: 'Examining innovative narrative techniques in 21st-century fiction.',
            content: '<p>Detailed content for narrative structures research...</p>'
        },
        {
            id: 6,
            title: 'Digital Tools for Literary Analysis',
            category: 'digital',
            year: 2023,
            tags: ['digital-tools', 'methodology', 'workshop'],
            image: '/assets/images/works/digital-tools.jpg',
            description: 'Workshop materials for using digital tools in literary studies.',
            content: '<p>Detailed content for digital tools workshop...</p>'
        }
    ];

    // DOM Elements
    const worksContainer = document.getElementById('works-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('works-search');
    const modal = document.getElementById('work-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const loadingSpinner = document.getElementById('loading-spinner');
    const noResults = document.getElementById('no-results');

    // Current filter state
    let currentFilter = 'all';
    let currentSearch = '';

    // Initialize the page
    function init() {
        renderWorks();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active state
                filterButtons.forEach(btn => btn.classList.remove('bg-indigo-600', 'text-white'));
                button.classList.add('bg-indigo-600', 'text-white');
                
                // Update filter and re-render
                currentFilter = button.dataset.filter;
                renderWorks();
            });
        });

        // Search input
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.toLowerCase();
            renderWorks();
        });

        // Close modal when clicking outside content
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal.click();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal.click();
            }
        });
    }


    // Filter and render works
    function renderWorks() {
        loadingSpinner.classList.remove('hidden');
        worksContainer.innerHTML = '';
        noResults.classList.add('hidden');

        // Filter works based on current filter and search term
        const filteredWorks = works.filter(work => {
            const matchesFilter = currentFilter === 'all' || work.category === currentFilter;
            const matchesSearch = work.title.toLowerCase().includes(currentSearch) || 
                               work.description.toLowerCase().includes(currentSearch) ||
                               work.tags.some(tag => tag.toLowerCase().includes(currentSearch));
            
            return matchesFilter && matchesSearch;
        });

        // Show no results message if no works match the criteria
        if (filteredWorks.length === 0) {
            noResults.classList.remove('hidden');
            loadingSpinner.classList.add('hidden');
            return;
        }

        // Render each work
        filteredWorks.forEach(work => {
            const workElement = createWorkElement(work);
            worksContainer.appendChild(workElement);
        });

        loadingSpinner.classList.add('hidden');
    }

    // Create a work card element
    function createWorkElement(work) {
        const workElement = document.createElement('div');
        workElement.className = 'bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300';
        workElement.innerHTML = `
            <div class="h-48 overflow-hidden">
                <img src="${work.image}" alt="${work.title}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
            </div>
            <div class="p-6">
                <div class="flex justify-between items-start mb-2">
                    <span class="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-50 rounded-full">
                        ${work.category.charAt(0).toUpperCase() + work.category.slice(1)}
                    </span>
                    <span class="text-sm text-gray-500">${work.year}</span>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-2">${work.title}</h3>
                <p class="text-gray-600 mb-4">${work.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${work.tags.map(tag => `
                        <span class="inline-block px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
                <button class="view-details-btn w-full mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors" 
                        data-work-id="${work.id}">
                    View Details
                </button>
            </div>
        `;

        // Add click event to view details
        workElement.querySelector('.view-details-btn').addEventListener('click', () => openModal(work));
        
        return workElement;
    }

    // Open modal with work details
    function openModal(work) {
        modalContent.innerHTML = `
            <div class="relative">
                <div class="h-64 md:h-80 overflow-hidden rounded-t-xl">
                    <img src="${work.image}" alt="${work.title}" class="w-full h-full object-cover">
                </div>
                <div class="p-6 md:p-8">
                    <div class="flex justify-between items-start mb-4">
                        <div>
                            <span class="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full mb-3">
                                ${work.category.charAt(0).toUpperCase() + work.category.slice(1)}
                            </span>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900">${work.title}</h2>
                            <p class="text-gray-500 mt-1">${work.year}</p>
                        </div>
                        <button id="close-modal" class="text-gray-400 hover:text-gray-500">
                            <span class="sr-only">Close</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 mb-6">
                        ${work.tags.map(tag => `
                            <span class="inline-block px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
                                ${tag}
                            </span>
                        `).join('')}
                    </div>
                    
                    <div class="prose max-w-none">
                        ${work.content}
                    </div>
                </div>
            </div>
        `;

        // Add close button event listener
        document.getElementById('close-modal').addEventListener('click', closeModalHandler);
        
        // Show modal
        document.body.style.overflow = 'hidden';
        modal.classList.remove('hidden');
    }

    // Close modal handler
    function closeModalHandler() {
        document.body.style.overflow = '';
        modal.classList.add('hidden');
        modalContent.innerHTML = '';
    }

    // Initialize the page
    init();
});
