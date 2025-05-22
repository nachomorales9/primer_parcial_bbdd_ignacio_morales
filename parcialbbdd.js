//Enunciado/s:
//Crear una base llamada cafetería, con una colección de cafés especiales que tenga los siguientes datos:
//• tipo (espresso, filtrado, cold brew, descafeinado, etc…)
//• array de ingredientes (vainilla-canela, chocolate, caramelo, etc.)
//• peso en gramos
//• intensidad (baja, media, alta)
//• array de objetos precio (tipo: efectivo, precio: 500 … tipo: tarjeta, precio: 550 …)
//• si contiene leche (booleano)
//• objeto tostador con localidad, nombre y cuit.
//Cargar 10 cafés especiales.
//Los datos a cargar en cada entidad deben ser útiles a las consultas que se detallan a continuación.
//Objetivos de Aprobación No Directa (Calificación de 4 a 5 puntos):
//1) Crear el script .js con la creación de la base de datos y las colecciones.
//2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.
//3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.
//4) Listar tipo y peso de los cafés que tienen una intensidad “media”.
//5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
//Objetivos de Aprobación Directa (Calificación de 6 a 10 puntos):
//6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
//y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
//descendente.
//7) Mostrar la sumar del peso de cada tipo de Café.
//8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.
//9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
//10) Eliminar los cafés cuyo peso sea menor o igual a 210.

use cafeteria;

db.cafes.instertMany([
    {
        tipo: "filtrado",
        ingredientes: ["chocolate", "canela"],
        peso: 200,
        intensidad: "alta",
        precio: [
            {tipo: "efectivo", precio: 500},
            {tipo: "tarjeta", precio: 550},
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Justo",
            nombre: "Tostadora San Justo",
            cuit: "20-47333177-3"
        }
    },
    {
        tipo: "cold brew",
        ingredientes: ["chocolate", "caramelo"],
        peso: 120,
        intensidad: "baja",
        precio: [
            {tipo: "efectivo", precio: 400},
            {tipo: "tarjeta", precio: 450},
        ],
        contieneLeche: true,
        tostador: {
            localidad: "San Juan",
            nombre: "Tostadora San Juan",
            cuit: "20-47444288-3"
        }
    },
    {
        tipo: "descafeinado",
        ingredientes: ["caramelo", "canela"],
        peso: 180,
        intensidad: "media",
        precio: [
            {tipo: "efectivo", precio: 350},
            {tipo: "tarjeta", precio: 400},
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Martin",
            nombre: "Tostadora San Martin",
            cuit: "20-47555399-3"
        }
    },
    {
        tipo: "espreso",
        ingredientes: ["chocolate", "canela"],
        peso: 210,
        intensidad: "alta",
        precio: [
            {tipo: "efectivo", precio: 500},
            {tipo: "tarjeta", precio: 550},
        ],
        contieneLeche: false,
        tostador: {
            localidad: "Lanus",
            nombre: "Tostadora Lanus",
            cuit: "20-47666411-3"
        }
    },
    {
    tipo: "descafeinado",
    ingredientes: ["caramelo"],
    peso: 220,
    intensidad: "baja",
    precio: [
            { tipo: "efectivo", precio: 450 },
            { tipo: "tarjeta", precio: 500 }
        ],
        contieneLeche: true,
        tostador: {
            localidad: "La Plata",
            nombre: "Tostadora La Plata",
            cuit: "20-47777522-3"
        }
    },
    {
        tipo: "espresso",
        ingredientes: ["chocolate"],
        peso: 250,
        intensidad: "media",
        precio: [
            { tipo: "efectivo", precio: 500 },
            { tipo: "tarjeta", precio: 550 }
        ],
        contieneLeche: false,
        tostador: {
            localidad: "San Fernando",
            nombre: "Tostadora San Fernando",
            cuit: "20-47888633-3"
        }
    },
    {
        tipo: "filtrado",
        ingredientes: ["vainilla"],
        peso: 210,
        intensidad: "alta",
        precio: [
            { tipo: "efectivo", precio: 350 },
            { tipo: "tarjeta", precio: 4000 }
        ],
        contieneLeche: true,
        tostador: {
            localidad: "Rosario",
            nombre: "Tostadora Rosario",
            cuit: "20-47999744-3"
        }
    },
    {
        tipo: "cold brew",
        ingredientes: ["canela"],
        peso: 180,
        intensidad: "media",
        precio: [
        { tipo: "efectivo", precio: 490 },
        { tipo: "tarjeta", precio: 540 }
        ],
        contieneLeche: false,
        tostador: {
        localidad: "Mar del Plata",
        nombre: "Tostadora Mdq",
        cuit: "20-47000855-3"
        }
    },
    {
        tipo: "espresso",
        ingredientes: ["chocolate", "caramelo"],
        peso: 200,
        intensidad: "baja",
        precio: [
        { tipo: "efectivo", precio: 460 },
        { tipo: "tarjeta", precio: 510 }
        ],
        contieneLeche: true,
        tostador: {
        localidad: "San Miguel",
        nombre: "Tostadora San Miguel",
        cuit: "20-47111966-3"
        }
    },
    {
        tipo: "descafeinado",
        ingredientes: ["vainilla", "canela"],
        peso: 250,
        intensidad: "media",
        precio: [
        { tipo: "efectivo", precio: 500 },
        { tipo: "tarjeta", precio: 550 }
        ],
        contieneLeche: false,
        tostador: {
        localidad: "Avellaneda",
        nombre: "Tostadora Avellaneda",
        cuit: "20-47222077-3"
        }
    },
    {
        tipo: "cold brew",
        ingredientes: ["vainilla", "caramelo", "chocolate"],
        peso: 270,
        intensidad: "alta",
        precio: [
        { tipo: "efectivo", precio: 550 },
        { tipo: "tarjeta", precio: 600 }
        ],
        contieneLeche: true,
        tostador: {
        localidad: "Santos Lugares",
        nombre: "Tostadora Santos Lugares",
        cuit: "20-40333188-3"
        }
    }
    ]);

    //2) Buscar cuántos cafés contienen chocolate entre sus ingredientes.
    db.cafes.countDocument({ingredientes: "chocolate"}); //busca cafes q tengan chocolate

    //3) Buscar cuántos cafés son de tipo “cold brew”· y contienen “vainilla” entre sus ingredientes.
    db.cafes.countDocument({tipo: "cold brew", ingredientes: "vainilla"}); // busca cold brew q tengan vainilla 

    //4) Listar tipo y peso de los cafés que tienen una intensidad “media”.
    db.cafes.find({intensidad: "media"}, {tipo: 1, peso: 1, _id: 0}); //busca intensidad media

    //5) Obtener tipo, peso e intensidad de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
    db.cafes.find(
        {peso: {$gte: 200, $lte: 260} },
        {tipo: 1, peso: 1, intensidad: 1, _id: 0} //busca peso entre 200y600 y con el 1 muestra en campo
    );


    //6) Mostrar los cafés que fueron tostados en localidades que contengan “san”, permitiendo buscar por “san”
    //y que se muestren también los de “santos”, “san justo”, etc. Ordenar el resultado por peso de manera
    //descendente.
    db.cafes.find(
        {"tostadora.localidad": /san/i}     
    ).sort({ peso: -1 }); //busca en localidad si contiene san sin importas mayus o minus, despues ordena campo peso en descendente

    //7) Mostrar la sumar del peso de cada tipo de Café.
    db.cafes.aggregate([
        { $group: {_id: "$tipo", totalPeso: {$sum: "$peso"}}} //agrega a los valores de tipo tipo y le sumara el peso a cada uno
    ]);

    //8) Agregar el ingrediente “whisky” todos los cafés cuya intensidad es alta.
    db.cafes.updateMany(
        {intensidad: "alta"},
        {$addToSet: {ingredientes: "whisyk"}} //actualiza que si intensidad = alta  y agrega whisky a array ingredientes
    );

    //9) Sumarle 10 al peso de los cafés cuyo peso se encuentre entre 200 y 260 inclusive.
    db.cafes.updateMany(
        {peso: {$gte: 200, $lte:260 }}, //entre 200 y 600 incrementa 10gramos 
        {$inc: {peso: 10}}
    );

    //10) Eliminar los cafés cuyo peso sea menor o igual a 210.
    db.cafes.deleteMany(
        {peso: {$lte: 210}} //elimina cafes menor o igual que
    );

    //Ignacio Morales 47333177 tm132-1 bbdd2