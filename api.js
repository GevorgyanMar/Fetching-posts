
let allDate = fetch("postData.json")
    .then(response => response.json());
//console.log(allDate)

function fetchPosts(){
      allDate.then(data=>data.map( function (value) {
         delete (value.comments)
          return (value);
    }))

}
fetchPosts()
function fetchCommentsOfPost() {

}

function  fetchReactionsOfComment () {

}

export {
    fetchPosts,
    fetchCommentsOfPost,
    fetchReactionsOfComment
};
