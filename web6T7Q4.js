const posts = [
    { title: 'post one', body: 'this is post one' },
    { title: 'post two', body: 'this is post two' },
    { title: 'post three', body: 'this is post three' }

];


let p = async () => {


    function getposts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let output = '';
                posts.forEach(post => {
                    output = output + `<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
                resolve();
            }, 1000);
        }

        )
    }

    function createPost(post) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                posts.push(post);
                resolve();
            }, 5000);
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



    await createPost({ title: 'post four', body: 'this is post four' });
    await getposts();
    await deletePost();
    await getposts();

}
p();