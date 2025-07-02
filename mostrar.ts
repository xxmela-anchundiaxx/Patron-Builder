const builder = new ComboBuilder();
const cajero = new Cajero(); 

cajero.construirCombo(builder); 
const combo = builder.obtenerCombo(); 
combo.mostrar(); 

