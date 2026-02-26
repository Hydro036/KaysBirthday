const lessons = [
        {
                id: 'heading',
                title: 'Add a Heading',
                desc: 'Create an <h1> element anywhere in the body.',
                starter: `<!doctype html>
<html>
    <body>

    </body>
</html>`,
                hint: 'Use <h1>Your heading</h1>',
                tests: [ {type: 'tag', tag: 'h1', message: 'Add an <h1> element.'} ]
        },
        {
                id: 'paragraph-link',
                title: 'Paragraph and Link',
                desc: 'Add a paragraph (<p>) and inside it a link (<a href="...">). The link should have an href attribute.',
                starter: `<!doctype html>
<html>
    <body>
        <h1>My Page</h1>

    </body>
</html>`,
                hint: 'Wrap text in <p> and use <a href="https://example.com">link text</a>',
                tests: [
                        {type: 'tag', tag: 'p', message: 'Add a <p> element.'},
                        {type: 'tag-attr', tag: 'a', attr: 'href', message: 'Add an <a> with an href.'}
                ]
        },
        {
                id: 'image',
                title: 'Image with alt text',
                desc: 'Insert an <img> element with an alt attribute describing the image.',
                starter: `<!doctype html>
<html>
    <body>
        <h1>Gallery</h1>
    </body>
</html>`,
                hint: 'Use <img src="..." alt="description">',
                tests: [ {type: 'tag-attr', tag: 'img', attr: 'alt', message: 'Add an <img> with an alt attribute.'} ]
        },

        // New lessons
        {
                id: 'lists',
                title: 'Create a List',
                desc: 'Create a bulleted list using <ul> with at least one <li>.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Your Favorite Foods</h2>

    </body>
</html>`,
                hint: 'Use <ul> and <li> items, e.g. <ul><li>Apple</li></ul>',
                tests: [ {type: 'tag', tag: 'ul', message: 'Add a <ul> element.'}, {type: 'tag', tag: 'li', message: 'Add at least one <li>.'} ]
        },

        {
                id: 'table',
                title: 'Build a Simple Table',
                desc: 'Create a table with a header row using <table>, <tr>, and <th>/<td>.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Schedule</h2>

    </body>
</html>`,
                hint: 'Structure: <table><tr><th>Header</th></tr><tr><td>Cell</td></tr></table>',
                tests: [ {type: 'tag', tag: 'table', message: 'Add a <table> element.'}, {type: 'tag', tag: 'th', message: 'Add a <th> header cell.'} ]
        },

        {
                id: 'form',
                title: 'Create a Form',
                desc: 'Add a <form> with an input (name or email) and a submit button.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Contact</h2>

    </body>
</html>`,
                hint: 'Example: <form><input name="email"><button type="submit">Send</button></form>',
                tests: [ {type: 'tag', tag: 'form', message: 'Add a <form> element.'}, {type: 'tag-attr', tag: 'input', attr: 'name', message: 'Add an <input> with a name attribute.'} ]
        },

        {
                id: 'semantic',
                title: 'Semantic Layout',
                desc: 'Use semantic sections like <header>, <nav>, <main>, and <footer>.',
                starter: `<!doctype html>
<html>
    <body>

    </body>
</html>`,
                hint: 'Add elements such as <header>, <main>, and <footer>.',
                tests: [ {type: 'tag', tag: 'main', message: 'Add a <main> element (semantic content area).'} ]
        },

        {
                id: 'css-link',
                title: 'Link an External CSS File',
                desc: 'Add a <link rel="stylesheet"> tag inside the <head> to include CSS.',
                starter: `<!doctype html>
<html>
    <head>
        <title>Styled Page</title>
    </head>
    <body>
        <h1>Style me</h1>
    </body>
</html>`,
                hint: 'Add <link rel="stylesheet" href="styles.css"> inside the <head>.',
                tests: [ {type: 'tag-attr', tag: 'link', attr: 'rel', message: 'Add a <link> with a rel attribute (rel="stylesheet").'}, {type: 'tag-attr', tag: 'link', attr: 'href', message: 'Add a <link> with an href to your stylesheet.'} ]
        },

        {
                id: 'video',
                title: 'Embed a Video',
                desc: 'Embed a video using the <video> tag (controls recommended).',
                starter: `<!doctype html>
<html>
    <body>
        <h2>My Video</h2>

    </body>
</html>`,
                hint: 'Use <video controls><source src="file.mp4" type="video/mp4"></video>',
                tests: [ {type: 'tag', tag: 'video', message: 'Add a <video> element.'} ]
        },
        {
                id: 'button',
                title: 'Add a Button',
                desc: 'Create a clickable button element using the <button> tag.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Interactive Elements</h2>

    </body>
</html>`,
                hint: 'Use <button>Click me</button> or <button type="submit">Submit</button>',
                tests: [ {type: 'tag', tag: 'button', message: 'Add a <button> element.'} ]
        },
        {
                id: 'div-span',
                title: 'Use Div and Span',
                desc: 'Use <div> for block-level containers and <span> for inline text styling.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Content Containers</h2>

    </body>
</html>`,
                hint: 'Example: <div><p>Block content</p></div> and <p>This is <span>inline</span> text</p>',
                tests: [ {type: 'tag', tag: 'div', message: 'Add a <div> element.'}, {type: 'tag', tag: 'span', message: 'Add a <span> element.'} ]
        },
        {
                id: 'article-section',
                title: 'Article and Section',
                desc: 'Use <article> for independent content and <section> for thematic grouping.',
                starter: `<!doctype html>
<html>
    <body>

    </body>
</html>`,
                hint: 'Example: <article><h2>Title</h2><p>Content</p></article> and <section><h3>Topic</h3></section>',
                tests: [ {type: 'tag', tag: 'article', message: 'Add an <article> element.'}, {type: 'tag', tag: 'section', message: 'Add a <section> element.'} ]
        },
        {
                id: 'attributes',
                title: 'Element Attributes',
                desc: 'Add attributes like id, class, and data-* to elements for styling and functionality.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>My Elements</h2>

    </body>
</html>`,
                hint: 'Use <div id="main"> <p class="highlight">Text</p> or <p data-value="123">Data</p>',
                tests: [ {type: 'tag-attr', tag: 'div', attr: 'id', message: 'Add an element with an id attribute.'}, {type: 'tag-attr', tag: 'p', attr: 'class', message: 'Add an element with a class attribute.'} ]
        },
        {
                id: 'blockquote',
                title: 'Blockquote and Citations',
                desc: 'Use <blockquote> for quoted text and <cite> to mark citations.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Famous Quotes</h2>

    </body>
</html>`,
                hint: 'Example: <blockquote><p>Quote text</p><cite>Author Name</cite></blockquote>',
                tests: [ {type: 'tag', tag: 'blockquote', message: 'Add a <blockquote> element.'} ]
        },
        {
                id: 'strong-em',
                title: 'Strong and Emphasis',
                desc: 'Use <strong> for important text and <em> for emphasized text.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Text Formatting</h2>

    </body>
</html>`,
                hint: 'Example: <p>This is <strong>important</strong> and <em>emphasized</em> text.</p>',
                tests: [ {type: 'tag', tag: 'strong', message: 'Add a <strong> element.'}, {type: 'tag', tag: 'em', message: 'Add an <em> element.'} ]
        },
        {
                id: 'description-list',
                title: 'Description List',
                desc: 'Create a description list using <dl>, <dt>, and <dd> tags.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Definitions</h2>

    </body>
</html>`,
                hint: 'Structure: <dl><dt>Term</dt><dd>Definition</dd></dl>',
                tests: [ {type: 'tag', tag: 'dl', message: 'Add a <dl> element.'}, {type: 'tag', tag: 'dt', message: 'Add a <dt> term element.'}, {type: 'tag', tag: 'dd', message: 'Add a <dd> definition element.'} ]
        },
        {
                id: 'figure-img',
                title: 'Figure with Caption',
                desc: 'Use <figure> and <figcaption> to associate images with captions.',
                starter: `<!doctype html>
<html>
    <body>
        <h2>Gallery</h2>

    </body>
</html>`,
                hint: 'Structure: <figure><img src="pic.jpg" alt="description"><figcaption>Caption text</figcaption></figure>',
                tests: [ {type: 'tag', tag: 'figure', message: 'Add a <figure> element.'}, {type: 'tag', tag: 'figcaption', message: 'Add a <figcaption> element.'} ]
        },
        {
                id: 'free',
                title: 'Free Play — Any HTML Allowed',
                desc: 'Write any HTML, CSS, or JS you like. No checks will be performed for this lesson.',
                starter: `<!doctype html>
<html>
    <head>
        <title>Free Play</title>
    </head>
    <body>
        <!-- Try any HTML, CSS, or JS here -->
    </body>
</html>`,
                hint: 'This lesson is a sandbox. Press Run to preview your code.',
                tests: []
        }
];

// UI wiring
const lessonSelect = document.getElementById('lessonSelect');
const lessonDesc = document.getElementById('lessonDesc');
const editor = document.getElementById('editor');
const runBtn = document.getElementById('runBtn');
const checkBtn = document.getElementById('checkBtn');
const preview = document.getElementById('preview');
const feedback = document.getElementById('feedback');
const hintBtn = document.getElementById('hintBtn');
const hintTemplate = document.getElementById('hintTemplate');

// Password gating (only the password below will unlock the lessons)
const SITE_PASSWORD = '26/02/2015';
// Admin password that opens the admin page when entered in the same modal
const ADMIN_PASSWORD = 'Itz_Larry';
let unlocked = false;

function populateLessons(){
    lessons.forEach((l, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = l.title;
        lessonSelect.appendChild(opt);
    });
}

function loadLesson(index){
    const l = lessons[index];
    lessonDesc.innerHTML = l.desc;
    editor.value = l.starter;
    run();
    clearFeedback();
}

function run(){
    const code = editor.value;
    preview.srcdoc = code;
}

function clearFeedback(){ feedback.textContent = ''; feedback.className = 'feedback'; }

function parseDocFromCode(code){
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, 'text/html');
    return doc;
}

function check(){
    const code = editor.value;
    const doc = parseDocFromCode(code);
    const l = lessons[lessonSelect.value];

    for(const t of l.tests){
        if(t.type === 'tag'){
            if(!doc.querySelector(t.tag)) return showFail(t.message);
        } else if(t.type === 'tag-attr'){
            const el = doc.querySelector(t.tag);
            if(!el || !el.getAttribute(t.attr)) return showFail(t.message);
        }
    }
    showSuccess('All checks passed!');
}

function showFail(msg){
    feedback.textContent = msg;
    feedback.className = 'feedback fail';
}

function showSuccess(msg){
    feedback.textContent = msg;
    feedback.className = 'feedback success';
}

function showHint(){
    const tmpl = hintTemplate.content.cloneNode(true);
    tmpl.getElementById('hintContent').textContent = lessons[lessonSelect.value].hint;
    const node = tmpl.querySelector('.hint');
    node.id = 'activeHint';
    document.body.appendChild(node);
    node.querySelector('#closeHint').addEventListener('click', ()=> node.remove());
}

lessonSelect.addEventListener('change', ()=> loadLesson(lessonSelect.value));
runBtn.addEventListener('click', run);
checkBtn.addEventListener('click', check);
hintBtn.addEventListener('click', showHint);

// autosave/run with debounce
let timer = null;
editor.addEventListener('input', ()=>{
    clearTimeout(timer);
    timer = setTimeout(run, 400);
});

// Initialize password gating before populating lessons
function initPassword(){
    const modal = document.getElementById('pwModal');
    const input = document.getElementById('pwInput');
    const submit = document.getElementById('pwSubmit');
    const error = document.getElementById('pwError');
    modal.style.display = 'flex';
    document.body.classList.add('blurred');

    function tryUnlock(){
        // If admin password entered, open admin page in a new tab
        if(input.value === ADMIN_PASSWORD){
            window.open('admin.html', '_blank', 'noopener');
            modal.style.display = 'none';
            document.body.classList.remove('blurred');
            error.textContent = '';
            input.value = '';
            return;
        }

        if(input.value === SITE_PASSWORD){
            unlocked = true;
            modal.style.display = 'none';
            document.body.classList.remove('blurred');
            error.textContent = '';
            input.value = '';
            populateLessons();
            loadLesson(0);
        } else {
            error.textContent = 'Incorrect password — try again.';
            // record failed site password attempt
            const rec = {
                type: 'failed-site-login',
                time: new Date().toISOString(),
                ua: navigator.userAgent,
                platform: navigator.platform || null
            };
            // try send to server, fallback to localStorage
            fetch('/log', {
                method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(rec)
            }).catch(()=>{
                const arr = JSON.parse(localStorage.getItem('failedLoginsLocal')||'[]');
                arr.push(rec);
                localStorage.setItem('failedLoginsLocal', JSON.stringify(arr));
            });
        }
    }

    submit.addEventListener('click', tryUnlock);
    input.addEventListener('keydown', e => { if(e.key === 'Enter') tryUnlock(); });
}

initPassword();

// --- Visitor logging: try to send a visit record to server; fallback to localStorage ---
function getOrCreateVisitorId(){
    let id = localStorage.getItem('visitorId');
    if(!id){ id = 'v-' + Math.random().toString(36).slice(2,10); localStorage.setItem('visitorId', id); }
    return id;
}

function logVisit(){
    const rec = {
        id: getOrCreateVisitorId(),
        ua: navigator.userAgent,
        platform: navigator.platform || null,
        screen: `${screen.width}x${screen.height}`,
        time: new Date().toISOString()
    };

    // Try POST to server /log
    fetch('/log', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(rec)
    }).then(r=>{
        if(!r.ok) throw new Error('server rejected');
    }).catch(()=>{
        // fallback: store in localStorage
        const arr = JSON.parse(localStorage.getItem('localVisitors')||'[]');
        arr.push(rec);
        localStorage.setItem('localVisitors', JSON.stringify(arr));
    });
}

// Log a visit immediately
logVisit();
