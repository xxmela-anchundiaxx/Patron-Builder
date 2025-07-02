class Combo{
    private hamburguesa: string = '';
    private bebida: string ='';
    private papas: string = '';

    setHamburguesa(h:string):void{
        this.hamburguesa=h;
    }

    setBebida(b: string):void{
        this.bebida=b;
    }
    setPapas(p: string):void{
        this.papas=p;
    }

    mostrar(): void{
        console.log(`Combo: ${this.hamburguesa}, ${this.bebida}, ${this.papas}`);
    }


}