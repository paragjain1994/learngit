// Task : Create a new function called delete post which uses promises and deletes in 1 second (processing time - mimic it with setimeout). Everytime you call it, it should delete the last element of the array

const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' },
    { title: 'post three', body: 'this is post three' }

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


function deletePost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.pop();      // for deleting the post ....array.pop()

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

deletePost().then(getposts).catch(err => console.log(err));