function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function  fetchPosts() {
    await wait(1000);
    const allDate = await fetch("postData.json");
        const data = await allDate.json();
        return data.map(function (item) {
            delete (item.comments);
            return item;
        });

}


 async function fetchCommentsOfPost(id) {
     await wait(1000);
     const allDate = await fetch("postData.json");
     const data = await allDate.json();
     let myPost = data.filter((item) => item.id === id);
     if (myPost.length)
        return myPost[0].comments;
     return null;
}

function  fetchReactionsOfComment () {

}

export {
    fetchPosts,
    fetchCommentsOfPost,
    fetchReactionsOfComment,
    wait
};
