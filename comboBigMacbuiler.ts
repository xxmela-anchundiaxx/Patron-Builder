class ComboBuilder implements ComboBuilder{
    private combo: combo;

    constructor(){
        this.combo= new combo();
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

    obtenerCombo(): combo {
        return this.combo;

    }

}