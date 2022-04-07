import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

//https://github.com/fazlulkarimweb/with-next-redux-wrapper-redux-persist
const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== 'undefined'
        ? createWebStorage('local')
        : createNoopStorage();

export default storage;