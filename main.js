import { fetchPosts, fetchCommentsOfPost, fetchReactionsOfComment } from './api.js';

// function onLoad() {
//
// }

console.log(fetchPosts());

console.log(fetchCommentsOfPost("55573462-be31-55df-901f-36603d3894e4"));
fetchReactionsOfComment();