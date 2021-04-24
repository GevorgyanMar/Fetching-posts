import { fetchPosts, fetchCommentsOfPost, fetchReactionsOfComment, wait } from './api.js';


async function onLoad() {
    console.log(await fetchPosts());
    await wait(2000);
    console.log(await fetchCommentsOfPost("55573462-be31-55df-901f-36603d3894e4"));
    await wait(3000);
    console.log(await fetchReactionsOfComment("3c80db14-fe06-5f7d-806d-7c1adea6ee15"))
    await wait(4000);
}
onLoad()