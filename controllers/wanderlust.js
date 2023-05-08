const allPosts = (req, res) => {
    res.send('All Posts on DOM')
}

const aPost = (req, res) => {
    res.send('A post on the DOM')
}

const writePost = (req, res) => {
    res.send('Writing Post')
}


module.exports = {
    allPosts,
    aPost,
    writePost
}