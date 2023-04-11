const butInstall = document.getElementById('buttonInstall');
butInstall.classList.toggle('hidden', true);

window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {

    console.log('click')
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    promptEvent.prompt();

    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

window.addEventListener('appinstalled', (event) => {
    butInstall.classList.toggle('hidden', true);
    window.deferredPrompt = null;
}); 
