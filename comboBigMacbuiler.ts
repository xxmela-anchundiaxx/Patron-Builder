class ComboBuilder implements ComboBuilder{
    private combo: Combo;

    constructor(){
        this.combo= new Combo();
    }
    construirHambuerguesa(): void {
        this.combo.setHamburguesa('Big Mac');
    }
    construirBebida(): void {
        this.combo.setBebida('Coca-Cola');
    }
    construirPapas(): void {
        this.combo.setPapas('Papas medianas');
    }

    obtenerCombo(): Combo {
        return this.combo;

    }

}