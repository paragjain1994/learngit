const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' },
    { title: 'post three', body: 'this is post three' }

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
        }, 1000);
    });

};


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {

                const lastelement = posts.pop();
                resolve(lastelement);
            }
            else {
                reject('Error : something went wrong');
            }
        }, 1000);
    });

};


createPost({ title: 'post four', body: 'this is post four' })
.then(()=>{
    getposts();
    deletePost().then(()=>{
        getposts();
        console.log(posts)
    })
    .catch((err)=>{
        console.log(err);
    })
});


