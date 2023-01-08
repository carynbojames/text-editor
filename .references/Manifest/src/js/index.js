// For the install to work, a service worker must be successfully registered with scope

// Check if service workers are supported
if ('serviceWorker' in navigator) {
    // Register workbox service worker
    const workboxSW = new Workbox('./service-worker.js');
    workboxSW.register();
  } else {
    console.error('Service workers are not supported in this browser.');
  }