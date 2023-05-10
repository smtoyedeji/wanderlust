const allPosts = (req, res) => {
    res.send('All Posts on DOM')
}

const writePost = (req, res) => {
    res.send('Writing Post')
}

const aPost = (req, res) => {
    res.send('A post on the DOM')
}


module.exports = {
    allPosts,
    writePost,
    aPost
}