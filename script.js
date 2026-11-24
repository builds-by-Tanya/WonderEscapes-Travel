/**
 * ==============================================================================
 * WONDER ESCAPES — Discover Beyond Boundaries
 * Interactive Frontend Engine
 * UCS 745 Cloud and DevOps GitHub Lab Demonstration
 * ==============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    // --------------------------------------------------------------------------
    // 1. Data Store: Rich Destination & Trip Details for Interactive Modals
    // --------------------------------------------------------------------------
    const destinationData = {
        switzerland: {
            title: 'Switzerland Alpine Haven',
            location: 'Zermatt & Swiss Alps, Switzerland',
            rating: '★ 4.98 (124 reviews)',
            tag: 'Alpine Luxury',
            price: 'Rs. 4,85,000',
            image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
            description: 'Encounter the quintessential European alpine wonder. Nestled directly beneath the pyramid silhouette of the Matterhorn, our Swiss sanctuary pairs world-class mountaineering and glacier heli-skiing with Michelin-starred fondue dining and secluded chalet fireplaces.',
            highlights: [
                'First-class panoramic ride on the historic Glacier Express',
                'Private IFMGA alpine guide for Zermatt & Gornergrat summits',
                'Luxury ski-in / ski-out timber chalet with private cedar sauna',
                'Exclusive wine degustation in Valais valley vineyards'
            ]
        },
        bali: {
            title: 'Bali Island Sanctuary',
            location: 'Ubud & Uluwatu, Indonesia',
            rating: '★ 4.95 (182 reviews)',
            tag: 'Island Sanctuary',
            price: 'Rs. 3,20,000',
            image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
            description: 'Experience deep spiritual renewal and tropical ocean majesty. From the emerald cascading rice terraces of Ubud to clifftop limestone villas over Uluwatu, indulge in holistic Ayurvedic rituals, sacred temple blessings, and private sunset sailing.',
            highlights: [
                'Private water purification ceremony with a traditional Balinese Mangku',
                'Architectural open-air bamboo estate overlooking sacred ravines',
                'Private sunset catamaran charter around Nusa Penida coves',
                'Farm-to-table organic dining with master Balinese chefs'
            ]
        },
        kashmir: {
            title: 'Kashmir Paradise Valley',
            location: 'Srinagar & Gulmarg, India',
            rating: '★ 4.97 (96 reviews)',
            tag: 'Himalayan Serenity',
            price: 'Rs. 2,40,000',
            image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1200&q=80',
            description: 'Revered for centuries by poets and emperors as paradise on earth. Float peacefully across Dal Lake at sunrise in antique carved cedar shikaras, explore vibrant floating saffron markets, and ascend into the snowbound pine peaks of Gulmarg.',
            highlights: [
                'Heritage cedar houseboat stay with hand-carved walnut woodwork',
                'Private gondola ascent to Kongdoori & Apharwat Peak in Gulmarg',
                'Saffron harvesting and Kahwa tea ceremony with local master growers',
                'Trek through fragrant pine forests and alpine meadows of Pahalgam'
            ]
        },
        paris: {
            title: 'Parisian Grand Atelier',
            location: 'Le Marais & Saint-Germain, Paris',
            rating: '★ 4.94 (210 reviews)',
            tag: 'Urban Elegance',
            price: 'Rs. 4,10,000',
            image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
            description: 'Immerse yourself in Parisian high art, gastronomy, and architectural romance. Enjoy after-hours private access to iconic musees, an intimate perfume blending workshop in Le Marais, and a candlelit vintage river cruise down the Seine.',
            highlights: [
                'Private after-hours curator tour of the Louvre and Musée d’Orsay',
                'Bespoke perfume atelier creation with Master Nez in Le Marais',
                'Sommelier-guided champagne tasting in historic cellar vaults',
                'Haute couture salon preview and private shopping concierge'
            ]
        },
        santorini: {
            title: 'Santorini Caldera Haven',
            location: 'Oia & Caldera, Santorini, Greece',
            rating: '★ 4.99 (165 reviews)',
            tag: 'Aegean Bliss',
            price: 'Rs. 3,92,000',
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
            description: 'Perched on the volcanic cliffs of Oia, our Aegean retreat offers private infinity plunge pools that spill directly into the sapphire sea. Feast on grilled Mediterranean delicacies, sail past volcanic caldera hot springs, and witness the world’s most celebrated sunset.',
            highlights: [
                'Private sailing catamaran excursion to volcanic hot springs',
                'Cave suite with heated infinity pool overlooking the Aegean Sea',
                'Degustation dinner at cliffside Michelin-recommended terrace',
                'Private tour of prehistoric Akrotiri and ancient volcanic vineyards'
            ]
        },
        japan: {
            title: 'Japan Imperial Sanctuary',
            location: 'Kyoto & Hakone, Japan',
            rating: '★ 4.98 (190 reviews)',
            tag: 'Zen Sanctuary',
            price: 'Rs. 5,60,000',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
            description: 'Harmonize with the subtle beauty and sacred discipline of ancient Japan. Unwind in mineral-rich onsen ryokans beneath the gaze of Mount Fuji, wander meditative Kyoto moss gardens in absolute tranquility, and partake in a sacred private tea ceremony.',
            highlights: [
                'Private tea ceremony with an elder Urasenke master in Daitoku-ji',
                'Luxury sukiya-style ryokan with private open-air forest onsen',
                'Exclusive 10-course kaiseki dinner prepared by a master chef',
                'High-speed Shinkansen Gran Class transfers with dedicated escort'
            ]
        }
    };

    const tripData = {
        alpine: {
            title: 'The Grand Alpine Odyssey',
            location: 'Zermatt, St. Moritz & Zurich, Switzerland',
            rating: '★ 4.98 (Bestseller)',
            tag: '8 Days / 7 Nights Package',
            price: 'Rs. 4,85,000 / guest',
            image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
            description: 'A masterpiece winter and spring itinerary crossing the Swiss Alps in pure luxury. Features Glacier Express Excellence Class, private ski guides, and 5-star Relais & Châteaux alpine lodging.',
            highlights: [
                'Glacier Express Excellence Class with 5-course wine pairing',
                '4 nights in a ski-in/ski-out timber chalet facing Matterhorn',
                'Private helicopter tour around Mont Blanc and Matterhorn',
                'All gourmet breakfasts, private transfers, and ski passes included'
            ]
        },
        aegean: {
            title: 'Serenade of the Aegean',
            location: 'Santorini, Mykonos & Delos, Greece',
            rating: '★ 4.99 (Limited Departures)',
            tag: '7 Days / 6 Nights Package',
            price: 'Rs. 3,92,000 / guest',
            image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
            description: 'Sail between the legendary whitewashed isles of the Cyclades. Stay in cliffside cave suites, sail aboard private catamarans, and experience the timeless sunset of Oia.',
            highlights: [
                '3-day private catamaran sailing with dedicated skipper and chef',
                'Sculpted cliffside Caldera suite with private sunset infinity tub',
                'Exclusive wine tasting at centuries-old volcanic vineyards',
                'Private archaeologist-led morning exploration of sacred Delos'
            ]
        },
        kashmir: {
            title: 'Celestial Himalayan Sojourn',
            location: 'Srinagar, Gulmarg & Pahalgam, Kashmir',
            rating: '★ 4.97 (Signature Route)',
            tag: '6 Days / 5 Nights Package',
            price: 'Rs. 2,40,000 / guest',
            image: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&w=1200&q=80',
            description: 'An ethereal escape into the Himalayan crown of India. Bask in quiet luxury aboard historic cedar houseboats, take private shikara morning tours, and explore snowbound alpine glades.',
            highlights: [
                'Handcrafted heritage luxury houseboat on pristine Dal Lake',
                'Phase 1 and 2 Gulmarg gondola access with private snow guides',
                'Wazwan imperial culinary banquet with a master Waza chef',
                'Private excursions to Betab Valley, Aru, and saffron plantations'
            ]
        },
        japan: {
            title: 'The Imperial Archipelago',
            location: 'Tokyo, Hakone & Kyoto, Japan',
            rating: '★ 4.98 (Cultural Immersion)',
            tag: '10 Days / 9 Nights Package',
            price: 'Rs. 5,60,000 / guest',
            image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
            description: 'A transformative 10-day expedition balancing Tokyo’s cutting-edge dynamism with the meditative serenity of Hakone onsens and Kyoto’s historic wooden shrines.',
            highlights: [
                'Shinkansen Gran Class transfers between Tokyo, Hakone, and Kyoto',
                'Secluded ryokan stay in Hakone with natural hot springs & Mount Fuji views',
                'Exclusive access to private Zen temple gardens closed to general public',
                'Private omakase dinner with renowned Tokyo sushi master'
            ]
        }
    };

    // --------------------------------------------------------------------------
    // 2. Elements Cache
    // --------------------------------------------------------------------------
    const header = document.getElementById('header');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileBackdrop = document.getElementById('mobileBackdrop');
    const drawerCloseBtn = document.getElementById('drawerCloseBtn');
    const drawerLinks = document.querySelectorAll('.drawer-link');
    const navLinks = document.querySelectorAll('.nav-link');

    const searchInput = document.getElementById('destinationSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinationCards = document.querySelectorAll('.destination-card');
    const resultsCount = document.getElementById('resultsCount');
    const resetFilterBtn = document.getElementById('resetFilterBtn');
    const emptyState = document.getElementById('emptyState');
    const emptyResetBtn = document.getElementById('emptyResetBtn');

    const modalBackdrop = document.getElementById('destinationModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    const modalImage = document.getElementById('modalImage');
    const modalTag = document.getElementById('modalTag');
    const modalLocation = document.getElementById('modalLocation');
    const modalRating = document.getElementById('modalRating');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalHighlights = document.getElementById('modalHighlights');
    const modalPrice = document.getElementById('modalPrice');
    const modalInquireBtn = document.getElementById('modalInquireBtn');

    const newsletterForm = document.getElementById('newsletterForm');
    const newsletterEmail = document.getElementById('newsletterEmail');
    const newsletterFeedback = document.getElementById('newsletterFeedback');
    const toast = document.getElementById('toastNotification');
    const toastTitle = document.getElementById('toastTitle');
    const toastMessage = document.getElementById('toastMessage');
    const backToTopBtn = document.getElementById('backToTopBtn');
    const searchTriggerBtn = document.getElementById('searchTriggerBtn');

    let currentCategoryFilter = 'all';
    let currentSearchTerm = '';
    let toastTimeout = null;

    // --------------------------------------------------------------------------
    // 3. Navigation & Header Sticky Effects
    // --------------------------------------------------------------------------
    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Sticky Header styling
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Back to top button visibility
        if (scrollY > 400) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Smooth Scroll for Back To Top
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Quick Search Trigger in Header
    if (searchTriggerBtn) {
        searchTriggerBtn.addEventListener('click', () => {
            const destSection = document.getElementById('destinations');
            if (destSection) {
                destSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    if (searchInput) {
                        searchInput.focus();
                    }
                }, 400);
            }
        });
    }

    // --------------------------------------------------------------------------
    // 4. Mobile Drawer Menu Navigation
    // --------------------------------------------------------------------------
    const openMobileMenu = () => {
        mobileDrawer.classList.add('open');
        mobileBackdrop.classList.add('active');
        mobileToggle.classList.add('active');
        mobileToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
    };

    const closeMobileMenu = () => {
        mobileDrawer.classList.remove('open');
        mobileBackdrop.classList.remove('active');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    };

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            if (mobileDrawer.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }

    if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileMenu);
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

    drawerLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // --------------------------------------------------------------------------
    // 5. Active Section Indicator on Scroll (Intersection Observer)
    // --------------------------------------------------------------------------
    const sections = document.querySelectorAll('section[id], header[id]');
    const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${id}`) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }, observerOptions);

    sections.forEach(sec => sectionObserver.observe(sec));

    // --------------------------------------------------------------------------
    // 6. Destination Search & Category Filtering
    // --------------------------------------------------------------------------
    const applyDestinationFilters = () => {
        let visibleCount = 0;
        const term = currentSearchTerm.trim().toLowerCase();

        destinationCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category') || '';
            const cardName = card.getAttribute('data-name') || '';
            const cardTitle = card.querySelector('.card-title')?.textContent || '';
            const cardDesc = card.querySelector('.card-description')?.textContent || '';
            const combinedSearchString = `${cardName} ${cardTitle} ${cardDesc}`.toLowerCase();

            // Check Category Filter
            const matchesCategory = (currentCategoryFilter === 'all') || cardCategory.includes(currentCategoryFilter);

            // Check Search Term
            const matchesSearch = !term || combinedSearchString.includes(term);

            if (matchesCategory && matchesSearch) {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        // Update Results UI
        if (resultsCount) {
            if (currentCategoryFilter === 'all' && !term) {
                resultsCount.textContent = `Showing all ${visibleCount} curated destinations`;
                resetFilterBtn.style.display = 'none';
            } else {
                resultsCount.textContent = `Found ${visibleCount} destination${visibleCount === 1 ? '' : 's'} matching criteria`;
                resetFilterBtn.style.display = 'inline-block';
            }
        }

        // Handle Empty State
        if (visibleCount === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
        }

        // Toggle clear search button
        if (clearSearchBtn) {
            clearSearchBtn.style.display = term ? 'block' : 'none';
        }
    };

    // Search Input Listener
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentSearchTerm = e.target.value;
            applyDestinationFilters();
        });
    }

    // Clear Search Button
    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', () => {
            searchInput.value = '';
            currentSearchTerm = '';
            applyDestinationFilters();
            searchInput.focus();
        });
    }

    // Category Filter Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            currentCategoryFilter = btn.getAttribute('data-filter') || 'all';
            applyDestinationFilters();
        });
    });

    // Reset Filter Buttons
    const resetAllFilters = () => {
        currentCategoryFilter = 'all';
        currentSearchTerm = '';
        if (searchInput) searchInput.value = '';
        filterButtons.forEach(b => {
            if (b.getAttribute('data-filter') === 'all') {
                b.classList.add('active');
                b.setAttribute('aria-selected', 'true');
            } else {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            }
        });
        applyDestinationFilters();
    };

    if (resetFilterBtn) resetFilterBtn.addEventListener('click', resetAllFilters);
    if (emptyResetBtn) emptyResetBtn.addEventListener('click', resetAllFilters);

    // Filter Trigger from Experiences Section
    const expLinks = document.querySelectorAll('.experience-link[data-filter-target]');
    expLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetFilter = link.getAttribute('data-filter-target');
            if (targetFilter) {
                const targetBtn = document.querySelector(`.filter-btn[data-filter="${targetFilter}"]`);
                if (targetBtn) {
                    targetBtn.click();
                }
            }
        });
    });

    // Filter Trigger from Footer Links
    const footerDestLinks = document.querySelectorAll('[data-filter-dest]');
    footerDestLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const destKey = link.getAttribute('data-filter-dest');
            if (destKey) {
                openDestinationModal(destKey);
            }
        });
    });

    // --------------------------------------------------------------------------
    // 7. Interactive Destination & Trip Details Modal
    // --------------------------------------------------------------------------
    const openDestinationModal = (key) => {
        const data = destinationData[key];
        if (!data) return;

        modalImage.src = data.image;
        modalImage.alt = data.title;
        modalTag.textContent = data.tag;
        modalLocation.textContent = data.location;
        modalRating.textContent = data.rating;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalPrice.textContent = data.price;

        // Populate highlights
        modalHighlights.innerHTML = '';
        data.highlights.forEach(h => {
            const li = document.createElement('li');
            li.textContent = h;
            modalHighlights.appendChild(li);
        });

        modalInquireBtn.setAttribute('data-target-name', data.title);
        modalBackdrop.classList.add('open');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const openTripModal = (key) => {
        const data = tripData[key];
        if (!data) return;

        modalImage.src = data.image;
        modalImage.alt = data.title;
        modalTag.textContent = data.tag;
        modalLocation.textContent = data.location;
        modalRating.textContent = data.rating;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modalPrice.textContent = data.price;

        modalHighlights.innerHTML = '';
        data.highlights.forEach(h => {
            const li = document.createElement('li');
            li.textContent = h;
            modalHighlights.appendChild(li);
        });

        modalInquireBtn.setAttribute('data-target-name', data.title);
        modalBackdrop.classList.add('open');
        modalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modalBackdrop.classList.remove('open');
        modalBackdrop.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    // Attach Explore button listeners on Destination Cards
    const exploreButtons = document.querySelectorAll('.btn-card-explore[data-destination]');
    exploreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const destKey = btn.getAttribute('data-destination');
            openDestinationModal(destKey);
        });
    });

    // Attach Details button listeners on Curated Trips
    const tripButtons = document.querySelectorAll('.btn-trip-details[data-trip]');
    tripButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const tripKey = btn.getAttribute('data-trip');
            openTripModal(tripKey);
        });
    });

    // Close Modal Events
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) {
                closeModal();
            }
        });
    }

    // Modal Inquire CTA
    if (modalInquireBtn) {
        modalInquireBtn.addEventListener('click', () => {
            const targetName = modalInquireBtn.getAttribute('data-target-name') || 'Expedition';
            closeModal();
            showToast(
                'Itinerary Reserved',
                `A private concierge prospectus for ${targetName} has been initialized.`
            );
        });
    }

    // --------------------------------------------------------------------------
    // 8. Toast Notification Utility
    // --------------------------------------------------------------------------
    const showToast = (title, message) => {
        if (!toast) return;

        if (toastTimeout) {
            clearTimeout(toastTimeout);
        }

        toastTitle.textContent = title;
        toastMessage.textContent = message;
        toast.classList.add('show');

        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 4500);
    };

    // --------------------------------------------------------------------------
    // 9. Newsletter Form Validation & Interactive Feedback
    // --------------------------------------------------------------------------
    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailVal = newsletterEmail.value.trim();

            if (!emailVal) {
                newsletterFeedback.className = 'form-feedback error';
                newsletterFeedback.textContent = 'Please enter your email address to subscribe.';
                newsletterEmail.focus();
                return;
            }

            if (!validateEmail(emailVal)) {
                newsletterFeedback.className = 'form-feedback error';
                newsletterFeedback.textContent = 'Please enter a valid email address (e.g. explorer@wonderescapes.com).';
                newsletterEmail.focus();
                return;
            }

            // Success state
            newsletterFeedback.className = 'form-feedback success';
            newsletterFeedback.textContent = 'Thank you for joining our private circle. Your welcome dispatch has been dispatched.';
            newsletterEmail.value = '';

            showToast(
                'Subscribed to Dispatches',
                `Welcome aboard! ${emailVal} is now enrolled in the Wonder Escapes Journal.`
            );

            // Clear success feedback after 6 seconds
            setTimeout(() => {
                if (newsletterFeedback.classList.contains('success')) {
                    newsletterFeedback.textContent = '';
                }
            }, 6000);
        });

        // Reset error on input typing
        if (newsletterEmail) {
            newsletterEmail.addEventListener('input', () => {
                if (newsletterFeedback.classList.contains('error')) {
                    newsletterFeedback.textContent = '';
                }
            });
        }
    }

    // --------------------------------------------------------------------------
    // 10. Global Keyboard Shortcuts (Escape to Close Modals)
    // --------------------------------------------------------------------------
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modalBackdrop && modalBackdrop.classList.contains('open')) {
                closeModal();
            }
            if (mobileDrawer && mobileDrawer.classList.contains('open')) {
                closeMobileMenu();
            }
        }
    });

    console.log('✦ WONDER ESCAPES — Discover Beyond Boundaries successfully loaded.');
    console.log('✦ Cloud & DevOps Lab: Project ready for Git initialization, branching & lab demonstrations.');
});
