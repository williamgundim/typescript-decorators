export function inspect() {

    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor,
    ) {

        const methodOrigin = descriptor.value; //Método original.

        descriptor.value = function(...args: Array<any>){

            //Executa ações antes de chamar o retorno do método original.
            console.log(`--Método ${propertyKey}`);
            console.log(`--Parametros ${args}`);

            const retorno = methodOrigin.apply(this, args); //Chamada do método original.

            return retorno; //

        };


        return descriptor

    }

}