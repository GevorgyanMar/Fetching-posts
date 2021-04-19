

//console.log(allDate)

 function  fetchPosts(){
     let allDate = fetch("postData.json")
         .then(response => response.json());
     allDate.then(data=>data.map( function (value) {
         delete (value.comments)
          return allDate;
    }))

}
 function fetchCommentsOfPost(id) {
     let allDate = fetch("postData.json")
         .then(response => response.json());
     allDate.then(data=>data.filter( function (value) {
   if ( value.id===id){
      console.log(value)

   }

}))

}

function  fetchReactionsOfComment () {

}

export {
    fetchPosts,
    fetchCommentsOfPost,
    fetchReactionsOfComment
};
