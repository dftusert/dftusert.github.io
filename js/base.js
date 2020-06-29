function contains(arr, val) {
    for(let i = 0; i < arr.length; ++i)
        if(arr[i] == val) return true;
    return false;
}

function route(prefix, page, lang) {
    const pages = ['titlepage'];
    const langs = ['rus', 'gb'];

    if(!contains(pages, page)) return;
    if(!contains(langs, lang)) return;

    document.location.href = prefix + '/' + page + '/' + lang + '.html';
}