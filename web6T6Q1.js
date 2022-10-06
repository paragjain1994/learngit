// using promise instead of callback

const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }

];


function getposts() {
    setTimeout(() => {
        let output = '';
        posts.forEach(post => {
            output = output + `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
};

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;

            if (!error) {
                resolve();
            }
            else {
                reject('Error : something went wrong');
            }
        }, 2000);
    });

};
createPost({ title: 'post three' })
    .then(getposts)
    .catch(err => console.log(err));