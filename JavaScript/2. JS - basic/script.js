// function fetchUser () {
//     return new Promise(function(resolve) {
//             resolve('Fetching user...');
//     });
// }

// function checkAuth () {
//     return new Promise(function(resolve) {
//         setTimeout(() => {
//             resolve('Checking Auth...');
//         }, 2000);
//     });
// }

// function print () {
//     return new Promise(function(resolve) {
//         setTimeout(() => {
//             resolve('Lara');
//         }, 2000);
//     });
// }

// async function fetchApp () {
//     const fetch = await fetchUser();
//     console.log(`${fetch}`);
//     const auth = await checkAuth();
//     console.log(`${auth}`);
//     const user = await print();
//     console.log(`${user}`);  
// }

// fetchApp();

// S provjerom - ne radi??
function fetchUser () {
    console.log('Fetching user...');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Lara');
        }, 2000);
    });
}

function checkAuth() {
    console.log('Cecking Auth...');
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(user === 'Lara');
        }, 2000);
    });
}

function print(user) {
    console.log(user);
}

async function app () {
    const user = await fetchUser();
    const isAuthenticated = await checkAuth();

    if(isAuthenticated) {
        print(user);
    }
}

