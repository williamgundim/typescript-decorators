export function logarTempoExecucao(n) {
    console.log(n);
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const returnMethod = metodoOriginal.apply(this, args);
            console.log(propertyKey);
            const t2 = performance.now();
            returnMethod;
        };
        return descriptor;
    };
}
