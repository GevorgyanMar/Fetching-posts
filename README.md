# Fetching-posts
1. Create three functions called: fetchPosts, fetchCommentsOfPost, fetchReactionsOfComment.
2. fetchPosts() - Using the provided fake data, return a list of posts without comments. Use setTimeout to imitate fetching of posts. 
    Example: fetchPosts() -> [ { id: 1, title: 'Football', content: 'Barca lost in El Clasico.' }, { id: 2, title: 'Olympic weightlifting', content: 'Armenian weightlifters rule the tournament.' }, ... ]
3. fetchCommentsOfPost(id) - Takes an argument of id, which is the post id, and returns related comments, without reactions. The id is used to fetch the comments of the related post. Again use setTimeout to imitate network delay.
    Example: fetchCommentsOfPost(1) -> [ { author: 'Jon Doe', content: 'Barca should have won!' }, { author: 'Bon Doe', content: 'Vamoooos' }, ... ]
4. fetchReactionsOfComment(id) - Returns reactions connected with the comment. Use setTimeout to imitate network delay. 
    Example: fetchReactionsOfPosts(1) -> [ { author: 'Jon Doe', reaction: 'Like' }, { author: 'Bon Doe', reaction: 'Wow' }, ... ]
5. Create a function called wait(milliseconds) that takes milliseconds as arguments and returns a resolved promise after the provided amount of milliseconds expire.
5. Put all the above-mentioned functions in a module called api.js. Export all the functions.
6. Import all the functions in main.js file and use them in a function called onLoad().
7. First fetch posts using fetchPosts() function. Wait 2 seconds and then fetch comments of a random post using fetchCommentsOfPost function. After 3 seconds fetch reactions of a random comment using the fetchReactionsOfPosts function. Use created wait function for adding extra delays.
8. Use async/await for working with asynchronous code.

Use the attached JSON file as hard-coded data. Upload the homework to Github and send the link.