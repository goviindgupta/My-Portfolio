const saveBookmark = (e) =>{
    var siteName = document.getElementById('siteName').value
    var siteUrl = document.getElementById('siteUrl').value

    if (!validateform(siteName,siteUrl)){
        return false
    }

    var bookmark = {
        name : siteName,
        url  : siteUrl
    }

    // localStorage.setItem('test','Hello World')
    // console.log(localStorage.getItem('test'))
    // localStorage.removeItem('test')
    // console.log(localStorage.getItem('test'))


    if (localStorage.getItem('bookmarks')===null){
        var bookmarks = [];
        bookmarks.push(bookmark)

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    }else{
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

        bookmarks.push(bookmark)

        localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    }

    document.getElementById('myform').reset()

    fetchBookmarks()

    e.preventDefault();
}

const deleteBookmark = (url) => {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

    for (var i=0; i < bookmarks.length; i++){
        if (bookmarks[i].url == url){
            bookmarks.splice(i,1)
        }
    }
    localStorage.setItem('bookmarks',JSON.stringify(bookmarks))
    fetchBookmarks()
}

const fetchBookmarks = () => {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'))

    var bookmarksResults = document.getElementById('bookmarksResults')


    bookmarksResults.innerHTML = ''
    for(var i = 0; i < bookmarks.length; i++){
        var name = bookmarks[i].name
        var url = bookmarks[i].url

        bookmarksResults.innerHTML += '<div class="well">'+
                                      '<h3>'+name+
                                      ' <a class="btn btn-default" target="_blank" href="' +url+'">Visit</a> ' +
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                      '</h3>'+
                                      '</div>'
    }
}

const validateform = (siteName,siteUrl) => {
    if(!siteName || !siteUrl){
        alert('Please fill in the form')
        return false
    }
    var expression = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/
    var regex = new RegExp(expression)

    if (!siteUrl.match(regex)){
        alert('Please use a valid URL')
        return false
    }

    return true

}

document.getElementById('myform').addEventListener('submit',saveBookmark)