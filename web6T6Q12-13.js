/* 2) I want you to create one more promise called updateLastUserActivityTime. Every time the user creates a post, this promise should be parallely called (should execute in 1 second) .When both the promises (createPost and updateLastUserActivityTime resolve), I want you to console log all the posts created and lastActivityTime of the user. Demo Link 
3) Once both the above promises are resolved , I want you to delete the last post by calling the deletion promise. Once successfully deleted, I want you to log the new set of Posts of the user.
 */
const posts = [
    { title: 'Post One', body: 'This is Post One', createdAt: new Date().getTime() },
    { title: 'Post Two', body: 'This is Post Two', createdAt: new Date().getTime(), lastactivity: new Date().getTime() }
]
let intervalId = 0;
function getPosts() {
    clearInterval(intervalId)

    intervalId = setInterval(() => {
        let output = " ";
        posts.forEach((post, index) => {
            output += `<li>${post.title}--last updated ${(new Date().getTime() - post.createdAt) / 1000}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);

}
function createPost(post) {
    ;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push({ ...post, createdAt: new Date().getTime() });

            const error = false;
            if (!error) {
                resolve(console.log(`before creating post${posts[1].lastactivity} `));
            } else {
                reject();
            }
        }, 1000)
    })

}
function updateLastUserActivity() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts[1].lastactivity = new Date().getTime();
            return resolve(`after creating post ${posts[1].lastactivity}`)
        }, 3000)
    })
}

function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (posts.length > 0) {
                resolve();
            } else {
                reject(console.log("Array is empty now."));
            }
            console.log(posts.pop())
        }, 3000)

    })
}

createPost({ title: 'Post Three', body: 'This is Post Three' }).then(getPosts);

deletePost()
// deletePost()
// deletePost()
// createPost({title:'Post Four',body:'This is Post Four'}).then(getPosts);
// deletePost().catch(err=>console.log(err))

Promise.all([createPost({ title: 'Post Four', body: 'This is Post Four ' }), updateLastUserActivity()]).then(values => console.log(values));






