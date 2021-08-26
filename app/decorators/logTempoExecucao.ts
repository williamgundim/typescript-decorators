export function logarTempoExecucao(n: Number){

    console.log( n );

    return function(
        target: any,
        propertyKey:string, //Nome do método.
        descriptor: PropertyDescriptor //Referencia para o método original.
    ) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function (...args: Array<any>) {
            const t1 = performance.now();
            const returnMethod = metodoOriginal.apply(this, args);
            console.log( propertyKey );
            const t2 = performance.now();

            //chamada do método original.
            returnMethod;
        }

        return descriptor;

    }

}