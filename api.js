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

async function fetchReactionsOfComment(id) {
   
    await wait(1000);
    const allDate = await fetch("postData.json");
    const data = await allDate.json();

    const comments = data.find((post) => post.id === id);
    let comment = comments.comments;
   return  comment.forEach((val)=>{
     if (val!==undefined){
        let reactions =(val.reactions)
    if(reactions !== undefined){
        reactions.forEach((reac)=>{
            console.log(reac)
        })
    }
}

    })

}
export {
    fetchPosts,
    fetchCommentsOfPost,
    fetchReactionsOfComment,
    wait
};

