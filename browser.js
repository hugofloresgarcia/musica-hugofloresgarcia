(()=>{const BROWSER_JS_T = {
    nothingFoundForXxx: query => 'Nothing found for \'{query}\''.replace('{query}',query),
    showingFeaturedItems: 'Showing featured items',
    showingXxxResultsForXxx: (count,query) => 'Showing {count} results for \'{query}\''.replace('{count}',count).replace('{query}',query),
    xxxAndOthers: (xxx,othersLinkAttributes) => '{xxx} and <a {others_link_attributes}>others</a>'.replace('{xxx}',xxx).replace('{others_link_attributes}',othersLinkAttributes)
};
const ARTISTS = [];
const CATALOGS = [{pagePrefix:'',title:'hugo flores garcía'}];
const RELEASES = [{artists:[],coverPath:'mary-jane/release_Fx6fBoD3i7E_160.jpg',pagePrefix:'mary-jane/',title:'Mary Jane'},{artists:[],coverPath:'little-fish/release_QVjnZM-AFuQ_160.jpg',pagePrefix:'little-fish/',title:'Little Fish'},{artists:[],coverPath:'bloom/release_9wGj7b6gMRY_160.jpg',pagePrefix:'bloom/',title:'Bloom'},{artists:[],coverPath:'cant-help-but-feel-alone/release_U5k2idzRwK8_160.jpg',pagePrefix:'cant-help-but-feel-alone/',title:'Can\'t Help But Feel Alone'},{artists:[],coverPath:'camilla/release_EPVnJQb04ok_160.jpg',pagePrefix:'camilla/',title:'Camilla'},{artists:[],coverPath:'pp/release_eGntJhNPPyE_160.jpg',pagePrefix:'pp/',title:'Pp!'},{artists:[],coverPath:'el-sol-sale-a-cantar/release_LduSawluvV8_160.jpg',pagePrefix:'el-sol-sale-a-cantar/',title:'El Sol (Sale a Cantar)'},{artists:[],coverPath:'jailbreak/release_fJ-xcGOvhs8_160.jpg',pagePrefix:'jailbreak/',title:'JAILBREAK!!!'},{artists:[],coverPath:'3am-zoomies/release_Jw3cm9l2khI_160.jpg',pagePrefix:'3am-zoomies/',title:'3AM ZOOMIES!!!'},{artists:[],coverPath:'poinciana/release_NW27ucJbPMo_160.jpg',pagePrefix:'poinciana/',title:'Poinciana'},{artists:['hugo flores garcía'],coverPath:'introspections/release_eQFXosaWmVQ_160.jpg',multitrack:true,pagePrefix:'introspections/',title:'introspections',tracks:[{artists:['hugo flores garcía'],number:'1.',pagePrefix:'introspections-introspection-i/',title:'introspection i'},{artists:['hugo flores garcía'],number:'2.',pagePrefix:'introspections-introspection-ii/',title:'introspection ii'},{artists:['hugo flores garcía'],number:'3.',pagePrefix:'introspections-introspection-iii/',title:'introspection iii'}]},{artists:['Hugo Flores García','Pixinguinha'],coverPath:'voy-viviendo/release_OSp2OkFMXB4_160.jpg',multitrack:true,pagePrefix:'voy-viviendo/',title:'voy viviendo',tracks:[{artists:[],number:'1.',pagePrefix:'voy-viviendo-1x/',title:'1x'},{artists:[],number:'2.',pagePrefix:'voy-viviendo-1-49x/',title:'1.49x'},{artists:[],number:'3.',pagePrefix:'voy-viviendo-2x/',title:'2x'},{artists:[],number:'4.',pagePrefix:'voy-viviendo-0-62x/',title:'0.62x'},{artists:[],number:'5.',pagePrefix:'voy-viviendo-0-79x/',title:'0.79x'},{artists:[],number:'6.',pagePrefix:'voy-viviendo-f-x/',title:'f(x)'},{artists:[],number:'7.',pagePrefix:'voy-viviendo-u/',title:'{ U }'}]},{artists:['Hugo Flores García'],coverPath:'confluyo-yo-el-ambiente-me-sigue/release_Tw6O-VXt4sM_160.jpg',multitrack:true,pagePrefix:'confluyo-yo-el-ambiente-me-sigue/',title:'confluyo yo, el ambiente me sigue',tracks:[{artists:['Hugo Flores García'],number:'1.',pagePrefix:'confluyo-yo-el-ambiente-me-sigue-sequence-i/',title:'sequence i'},{artists:['Hugo Flores García'],number:'2.',pagePrefix:'confluyo-yo-el-ambiente-me-sigue-sequence-ii/',title:'sequence ii'},{artists:['Hugo Flores García'],number:'3.',pagePrefix:'confluyo-yo-el-ambiente-me-sigue-sequence-iii/',title:'sequence iii'}]},{artists:[],coverPath:'dueto-mi-m-y-mi-p/release_UydtNB3_aEQ_160.jpg',pagePrefix:'dueto-mi-m-y-mi-p/',title:'dueto - mi má y mi pá'},{artists:['hugo flores garcía'],coverPath:'world-of-mouth-binaural-version/release_3EYOyxu0b1E_160.jpg',pagePrefix:'world-of-mouth-binaural-version/',title:'world of mouth (binaural version)'},{artists:[],coverPath:'sound-collage-march-28th-2024/release_FhZAIJZ4t_I_160.jpg',pagePrefix:'sound-collage-march-28th-2024/',title:'sound collage - march 28th, 2024'},{artists:['hugo flores garcía','tyler felson'],coverPath:'the-air-is-full/release_qa7igBRCd0M_160.jpg',multitrack:true,pagePrefix:'the-air-is-full/',title:'the air is full',tracks:[{artists:[],number:'1.',pagePrefix:'the-air-is-full-the-beginning/',title:'the beginning'},{artists:[],number:'2.',pagePrefix:'the-air-is-full-settling-down-opening-up/',title:'settling down, opening up'},{artists:[],number:'3.',pagePrefix:'the-air-is-full-suddenly-a-goose/',title:'suddenly, a goose'},{artists:[],number:'4.',pagePrefix:'the-air-is-full-phew/',title:'phew!'},{artists:[],number:'5.',pagePrefix:'the-air-is-full-an-interlude/',title:'an interlude'},{artists:[],number:'6.',pagePrefix:'the-air-is-full-there/',title:'there'},{artists:[],number:'7.',pagePrefix:'the-air-is-full-in-conclusion/',title:'in conclusion'}]},{artists:[],coverPath:'the-ritual-all-in-good-time/release_sLadC3PCLT0_160.jpg',multitrack:true,pagePrefix:'the-ritual-all-in-good-time/',title:'The Ritual - All in Good Time',tracks:[{artists:[],pagePrefix:'the-ritual-all-in-good-time-the-ritual-all-in-good-time/',title:'the ritual -- all in good time'}]},{artists:[],coverPath:'los-chuchitos-live-at-sound-potluck-11222025/release_6LVFB3SrJMQ_160.jpg',pagePrefix:'los-chuchitos-live-at-sound-potluck-11222025/',title:'los chuchitos - live at sound potluck 11.22.2025'},{artists:[],coverPath:'aguante-tacuazin-at-the-lake/release_yxgXJyW9awo_120.png',pagePrefix:'aguante-tacuazin-at-the-lake/',title:'aguante tacuazin at the lake'}];
const browser = document.querySelector('#browser');
const browseButtonFooter = document.querySelector('footer button.browse');
const browseButtonHeader = document.querySelector('header button.browse');

const browseResults = browser.querySelector('#results');
const closeButton = browser.querySelector('button');
const searchField = browser.querySelector('input');
const statusField = browser.querySelector('[role="status"]');

const indexSuffix = window.location.pathname.endsWith('index.html') ? 'index.html' : '';
const rootPrefix = browser.dataset.rootPrefix;

function renderArtist(artistObject) {
    if (artistObject.externalPage) {
        return `<a href="${artistObject.externalPage}" target="_blank">${artistObject.name}</a>`;
    } else if (artistObject.url) {
        return `<a href="${rootPrefix}${artistObject.url}${indexSuffix}">${artistObject.name}</a>`;
    } else {
        return artistObject.name;
    }
}

function truncateArtistList(artistNames, othersLinkAttributes)  {
    const MAX_CHARS = 40;

    const artistObjects = artistNames
        .map(artistName => {
            for (const artist of ARTISTS) {
                if (artist.name === artistName || artist.aliases?.includes(artistName)) {
                    return artist;
                }
            }

            return { name: artistName };
        });

    if (artistObjects.length > 2) {
        const nameChars = artistObjects.reduce((sum, artist) => sum + artist.name.length, 0);
        const separatorChars = (artistObjects.length - 1) * 2; // All separating ", " between the artists

        if (nameChars + separatorChars > MAX_CHARS) {
            // Here we have more than two artists, we have a char limit, and
            // we cannot fit all artists within the limit, thus we truncate
            // the list. We show at least one artist, then as many additional
            // ones as fit, e.g. "[artist],[artist] and others"
            let charsUsed = 0;

            const artistObjectsTruncated = artistObjects
                .filter(artist => {
                    if (charsUsed === 0) {
                        charsUsed += artist.name.length;
                        return true;
                    }

                    charsUsed += artist.name.length;
                    return charsUsed < MAX_CHARS;
                });

            const rArtists = artistObjectsTruncated.map(renderArtist).join(", ");

            return BROWSER_JS_T.xxxAndOthers(rArtists, othersLinkAttributes);
        }
    }

    return artistObjects.map(renderArtist).join(", ");
}

function appendArtist(artist) {
    let imageArtist;
    if (artist.imagePath) {
        imageArtist = document.createElement('img');
        imageArtist.classList.add('crop');
        imageArtist.src = rootPrefix + artist.imagePath;
    } else {
        imageArtist = document.createElement('span');
        imageArtist.classList.add('placeholder');
    }

    const aText = document.createElement('a');

    if (artist.externalPage) {
        aText.href = artist.externalPage;
        aText.target = '_blank';
    } else {
        aText.href = rootPrefix + artist.pagePrefix + indexSuffix;
    }

    const aImage = aText.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imageArtist);

    aText.dataset.featured = 'true';
    aText.textContent = artist.name;

    const details = document.createElement('div');
    details.appendChild(aText);

    const row = document.createElement('div');

    row.dataset.browse = '';

    row.appendChild(aImage);
    row.appendChild(details);

    browseResults.appendChild(row);
}

function appendCatalog(catalog) {
    let imgCatalog;
    if (catalog.imagePath) {
        imgCatalog = document.createElement('img');
        imgCatalog.classList.add('crop');
        imgCatalog.src = rootPrefix + catalog.imagePath;
    } else {
        imgCatalog = document.createElement('span');
        imgCatalog.classList.add('placeholder');
    }

    const aText = document.createElement('a');

    if (catalog.externalPage) {
        aText.href = catalog.externalPage;
        aText.target = '_blank';
    } else {
        aText.href = rootPrefix + catalog.pagePrefix + indexSuffix;
    }

    const aImage = aText.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imgCatalog);

    aText.dataset.featured = 'true';
    aText.textContent = catalog.title;

    const details = document.createElement('div');
    details.appendChild(aText);

    const row = document.createElement('div');

    row.dataset.browse = '';

    row.appendChild(aImage);
    row.appendChild(details);

    browseResults.appendChild(row);
}

function appendMultitrack(multitrack) {
    let imgMultitrack;
    if (multitrack.coverPath) {
        imgMultitrack = document.createElement('img');
        imgMultitrack.src = rootPrefix + multitrack.coverPath;
    } else {
        imgMultitrack = document.createElement('span');
        imgMultitrack.classList.add('placeholder');
    }

    const aTitle = document.createElement('a');

    if (multitrack.externalPage) {
        aTitle.href = multitrack.externalPage;
        aTitle.target = '_blank';
    } else {
        aTitle.href = rootPrefix + multitrack.pagePrefix + indexSuffix;
    }

    const aImage = aTitle.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imgMultitrack);

    aTitle.dataset.featured = 'true';
    aTitle.textContent = multitrack.title;

    const details = document.createElement('div');
    details.appendChild(aTitle);

    if (multitrack.artists) {
        let othersLinkAttributes;

        if (multitrack.externalPage) {
            othersLinkAttributes = `href="${multitrack.externalPage}" target="_blank"`;
        } else {
            othersLinkAttributes = `href="${rootPrefix + multitrack.pagePrefix + indexSuffix}"`;
        }

        const artists = document.createElement('div');
        artists.classList.add('artists');
        artists.innerHTML = truncateArtistList(multitrack.artists, othersLinkAttributes);
        details.appendChild(artists);
    }

    const row = document.createElement('div');

    row.dataset.browse = '';

    row.appendChild(aImage);
    row.appendChild(details);

    browseResults.appendChild(row);

    for (const track of multitrack.tracks) {
        appendTrack(track, imgMultitrack);
    }
}

function appendTrack(track, imgMultitrack) {
    let imgTrack;
    if (track.coverPath) {
        imgTrack = document.createElement('img');
        imgTrack.src = rootPrefix + track.coverPath;
    } else if (imgMultitrack) {
        imgTrack = imgMultitrack.cloneNode(true);
    } else {
        imgTrack = document.createElement('span');
        imgTrack.classList.add('placeholder');
    }

    const aTitle = document.createElement('a');

    if (track.externalPage) {
        aTitle.href = track.externalPage;
        aTitle.target = '_blank';
    } else {
        aTitle.href = rootPrefix + track.pagePrefix + indexSuffix;
    }

    const aImage = aTitle.cloneNode(true);
    aImage.tabIndex = -1;
    aImage.appendChild(imgTrack);

    aTitle.dataset.featured = 'true';
    aTitle.textContent = track.title;

    const details = document.createElement('div');

    if (track.number) {
        const number = document.createElement('span');
        number.classList.add('number');
        number.textContent = track.number;

        details.appendChild(number);
    }

    details.appendChild(aTitle);

    if (track.artists) {
        let othersLinkAttributes;

        if (track.externalPage) {
            othersLinkAttributes = `href="${track.externalPage}" target="_blank"`;
        } else {
            othersLinkAttributes = `href="${rootPrefix + track.pagePrefix + indexSuffix}"`;
        }

        const artists = document.createElement('div');
        artists.classList.add('artists');
        artists.innerHTML = truncateArtistList(track.artists, othersLinkAttributes);
        details.appendChild(artists);
    }

    const row = document.createElement('div');
    row.appendChild(aImage);
    row.appendChild(details);

    if (imgMultitrack) {
        row.style.setProperty('display', 'none');
    } else {
        row.dataset.browse = '';
    }

    browseResults.appendChild(row);
}

for (const catalog of CATALOGS) {
    appendCatalog(catalog);
}

for (const artist of ARTISTS) {
    appendArtist(artist);
}

for (const release of RELEASES) {
    if (release.multitrack) {
        appendMultitrack(release);
    } else {
        appendTrack(release);
    }
}

function hideBrowser() {
    const browseButton = browseButtonFooter.ariaExpanded === 'true'
        ? browseButtonFooter
        : browseButtonHeader;

    browser.classList.remove('active');
    browseButton.setAttribute('aria-expanded', 'false');
    searchField.value = '';
    statusField.removeAttribute('aria-label');
    statusField.textContent = '';

    for (const element of browseResults.children) {
        const display = element.dataset.browse !== undefined;
        element.style.setProperty('display', display ? null : 'none');
    }

    browseButton.focus();
}

function showBrowser(browseButton) {
    browser.classList.add('active');
    browseButton.setAttribute('aria-expanded', 'true');
    searchField.focus();
    statusField.setAttribute('aria-label', BROWSER_JS_T.showingFeaturedItems);
    statusField.textContent = '';
}

// When the browse/search modal is open and focus moves outside the page
// entirely (e.g. to the addressbar) but then re-enters the page, we need
// to make sure that it returns back to the browse/search modal (instead of
// to an obscured element in the main body)
document.body.addEventListener('focusin', event => {
    if (browser.classList.contains('active') && !browser.contains(event.target)) {
        searchField.focus();
    }
});

browser.addEventListener('focusout', event => {
    if (browser.classList.contains('active') && event.relatedTarget && !browser.contains(event.relatedTarget)) {
        hideBrowser();
    }
});

browser.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        event.preventDefault();
        hideBrowser();
    }
});

browseButtonFooter.addEventListener('click', () => showBrowser(browseButtonFooter));
browseButtonHeader.addEventListener('click', () => showBrowser(browseButtonHeader));

closeButton.addEventListener('click', hideBrowser);

searchField.addEventListener('input', () => {
    const query = searchField.value.trim();

    if (query.length) {
        const regexp = new RegExp(query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
        let shown = 0;

        for (const element of browseResults.children) {
            const title = element.querySelector('[data-featured]').textContent;
            const display = regexp.test(title);
            element.style.setProperty('display', display ? null : 'none');
            if (display) { shown += 1; }
        }

        if (shown === 0) {
            statusField.removeAttribute('aria-label');
            statusField.textContent = BROWSER_JS_T.nothingFoundForXxx(query);
        } else {
            statusField.setAttribute('aria-label', BROWSER_JS_T.showingXxxResultsForXxx(shown, query));
            statusField.textContent = '';
        }
    } else {
        for (const element of browseResults.children) {
            const display = element.dataset.browse !== undefined;
            element.style.setProperty('display', display ? null : 'none');
        }

        statusField.setAttribute('aria-label', BROWSER_JS_T.showingFeaturedItems);
        statusField.textContent = '';
    }
});
})();