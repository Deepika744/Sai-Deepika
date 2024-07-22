document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

function fetchData() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhr.onload = function() {
        if (this.status === 200) {
            const posts = JSON.parse(this.responseText);
            let output = '';

            posts.forEach(function(post) {
                output += `
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">${post.title}</h5>
                            <p class="card-text">${post.body}</p>
                        </div>
                    </div>
                `;
            });

            document.getElementById('dataContainer').innerHTML = output;
        }
    };

    xhr.onerror = function() {
        console.error('Request error...');
    };

    xhr.send();
}

