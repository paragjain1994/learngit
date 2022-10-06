// Task :Continue deleting the elements up till all the elements are deleted from the array. Now when you delete again an error would be thrown , catch the error and console log in the browser-> Array is empty now. You dont have to use for loop as there are only 3 posts . Just call delete post 3 times.

const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' }
  

];


function getposts() {
    setTimeout(() => {
        let output = '';
        for (let i = 0; i < posts.length; i++) {
            output = output + `<li>${posts[i].title}</li>`;
        }
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
        }, 3000);
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
                reject('Array is empty now');
            }
        }, 2000);
    });

};
createPost({ title: 'post three', body: 'this is post three' })
.then(()=>{
    getposts();
    deletePost().then(()=>{
        getposts();
        deletePost().then(()=>{
            getposts();
            deletePost().then(()=>{
                getposts();
                deletePost().then(()=>{})
                .catch((err)=>{
                    console.log('Inside catch block',err);
                })
            })
        })
    })
}

);
