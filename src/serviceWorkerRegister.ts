interface SyncManager {
    getTags(): Promise<string[]>;
    register(tag: string): Promise<void>;
}

declare global {
    interface ServiceWorkerRegistration {
        readonly sync: SyncManager;
    }
}

const register = () => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js')
            .then(() =>
                navigator.serviceWorker.ready.then((worker: ServiceWorkerRegistration) => {
                    worker.sync.register('syncdata');
                })
            )
            .catch((err) => err);
    }
};

export default register;
