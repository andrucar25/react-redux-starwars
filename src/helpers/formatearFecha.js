export const formatearFecha = (fechaIso) =>{
    const fechaIsoSeparada = fechaIso.replace(/\D/g, ' ');

    const componentes = fechaIsoSeparada.split(' ');
    // --componentes[1];
    const fechaMostrar = `${componentes[2]}/${componentes[1]}/${componentes[0]}`
    return fechaMostrar;
} 