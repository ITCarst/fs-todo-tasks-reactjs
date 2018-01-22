export function setProxy(target, handler) {
    return new Proxy(target, handler);
}
