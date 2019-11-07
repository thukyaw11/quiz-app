self.addEventListener('install', evt => {
    console.log("service worker has been installed");
});

self.addEventListener('acitvate', evt => {
    console.log("service worker has been activated");
});

self.addEventListener('fetch',evt => {
    console.log('fetch event',evt);
});