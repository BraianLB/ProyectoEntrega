//Lista desplegable deptos
var departamentos = ["Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"];
                
// Obtén el elemento de la lista desplegable
var listaDesplegable = document.getElementById("departamentos");

// Recorre el array y agrega las opciones a la lista desplegable
departamentos.forEach(function(depto) {
  var opcion = document.createElement("option");
  opcion.value = depto;  
   opcion.text = depto;
  listaDesplegable.appendChild(opcion);
});
//
//Lista desplegable cidades
var departamentosCiudades = {
    "Amazonas": ["Leticia", "Puerto Nariño"],
    "Antioquia": ["Medellín", "Bello", "Envigado", "Itagüí", "Rionegro"],
    "Arauca": ["Arauca", "Saravena"],
    "Atlántico": ["Barranquilla", "Soledad", "Malambo", "Puerto Colombia"],
    "Bolívar": ["Cartagena", "Bolívar", "Turbaco", "Arjona", "El Carmen de Bolívar"],
    "Boyacá": ["Tunja", "Duitama", "Sogamoso", "Chiquinquirá", "Paipa"],
    "Caldas": ["Manizales", "Pereira", "Manzanares", "La Dorada"],
    "Caquetá": ["Florencia", "San Vicente del Caguán", "Cartagena del Chairá"],
    "Casanare": ["Yopal", "Villanueva", "Tauramena", "Aguazul"],
    "Cauca": ["Popayán", "Santander de Quilichao", "Patía", "Piendamó", "Puerto Tejada"],
    "Cesar": ["Valledupar", "Aguachica", "Bosconia", "La Paz"],
    "Chocó": ["Quibdó", "Nuquí", "Istmina", "Tadó", "Riosucio"],
    "Córdoba": ["Montería", "Sahagún", "Tierralta", "Montelíbano"],
    "Cundinamarca": ["Bogotá", "Soacha", "Zipaquirá", "Funza", "Chía"],
    "Guainía": ["Inírida"],
    "Guaviare": ["San José del Guaviare", "Calamar"],
    "Huila": ["Neiva", "Pitalito", "Garzón", "Campoalegre"],
    "La Guajira": ["Riohacha", "Maicao", "Uribia", "Fonseca", "Barrancas"],
    "Magdalena": ["Santa Marta", "Ciénaga", "Fundación", "El Banco", "Aracataca"],
    "Meta": ["Villavicencio", "Acacías", "Granada", "Puerto López", "Restrepo"],
    "Nariño": ["Pasto", "Tumaco", "Ipiales", "Túquerres", "El Charco"],
    "Norte de Santander": ["Cúcuta", "Ocaña", "Pamplona", "Villa del Rosario", "Los Patios"],
    "Putumayo": ["Mocoa", "Sibundoy", "Orito", "La Hormiga", "San Miguel"],
    "Quindío": ["Armenia", "Calarcá", "Quimbaya", "La Tebaida", "Montenegro"],
    "Risaralda": ["Pereira", "Dosquebradas", "La Virginia", "Santa Rosa de Cabal", "Belén de Umbría"],
    "San Andrés y Providencia": ["San Andrés", "Providencia y Santa Catalina"],
    "Santander": ["Bucaramanga", "Floridablanca", "Girón", "Piedecuesta", "Barrancabermeja"],
    "Sucre": ["Sincelejo", "Corozal", "Sampués", "San Marcos", "Tolú"],
    "Tolima": ["Ibagué", "Espinal", "Melgar", "Girardot", "Honda"],
    "Valle del Cauca": ["Cali", "Buenaventura", "Palmira", "Tuluá", "Yumbo"],
    "Vaupés": ["Mitú", "Carurú", "Taraira", "Cacahual"],
    "Vichada": ["Puerto Carreño", "Cumaribo", "La Primavera"],
  };
  

  // Obtén los elementos de lista desplegable
  var listaDepartamentos = document.getElementById("departamentos");
  var listaCiudades = document.getElementById("ciudades");

  // Agrega un evento para detectar cambios en la selección del departamento
  listaDepartamentos.addEventListener("change", function() {
    var departamentoSeleccionado = listaDepartamentos.value;
    var ciudades = departamentosCiudades[departamentoSeleccionado] || [];

    // Limpia las opciones anteriores
    listaCiudades.innerHTML = '';

    // Crea opciones para las ciudades
    ciudades.forEach(function(ciudad) {
      var opcion = document.createElement("option");
      opcion.value = ciudad;
      opcion.text = ciudad;
      listaCiudades.appendChild(opcion);
    });
  });
//
//Actividades economicas
var areaecono = ["Agricultura","Ganadería","Minería","Pesca","Construcción","Manufactura","Comercio minorista","Comercio mayorista","Restaurantes y servicios de comida","Servicios de alojamiento","Transporte y logística","Servicios financieros y bancarios","Seguros","Bienes raíces","Bienes y servicios inmobiliarios","Educación","Salud y atención médica","Tecnología de la información (TI)","Telecomunicaciones","Energía eléctrica","Gas y agua","Petróleo y gas","Química","Farmacéutica","Textiles y confección","Alimentos y bebidas","Agricultura orgánica","Agroindustria","Turismo","Servicios de consultoría","Publicidad y marketing","Medios de comunicación","Entretenimiento","Artes y cultura","Transporte aéreo","Transporte marítimo","Transporte ferroviario","Transporte por carretera","Servicios de mensajería y paquetería","Servicios de ingeniería","Servicios de arquitectura","Construcción de viviendas","Construcción de infraestructura","Automoción","Reparación de vehículos","Fabricación de muebles","Reciclaje","Servicios legales","Servicios contables y de auditoría","Servicios de consultoría de recursos humanos"];
                
// Obtén el elemento de la lista desplegable
var listaDesplegable = document.getElementById("areaecono");

// Recorre el array y agrega las opciones a la lista desplegable
areaecono.forEach(function(econo) {
  var opcion = document.createElement("option");
  opcion.value = econo;  
   opcion.text = econo;
  listaDesplegable.appendChild(opcion);
});
//
//Tiempo de experiencia
var timexpe = ["Inferior a 1 Año","Entre 1 y 2 años","Entre 2 y 4 años","Más de 5 años"];
                
// Obtén el elemento de la lista desplegable
var listaDesplegable = document.getElementById("timexpe");

// Recorre el array y agrega las opciones a la lista desplegable
timexpe.forEach(function(expe) {
  var opcion = document.createElement("option");
  opcion.value = expe;  
   opcion.text = expe;
  listaDesplegable.appendChild(opcion);
});