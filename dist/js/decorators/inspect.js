export function inspect() {
    return function (target, propertyKey, descriptor) {
        const methodOrigin = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`--Método ${propertyKey}`);
            console.log(`--Parametros ${args}`);
            const retorno = methodOrigin.apply(this, args);
            return retorno;
        };
        return descriptor;
    };
}
