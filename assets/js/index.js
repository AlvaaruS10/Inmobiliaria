const propiedades_ventas = [
    {
        nombre: 'Casa de lujo en situo exclusivo',
        descripcion: 'Esta casa esta situada en un lugar muy seguro',
        src: 'https://maison-plus.es/wp-content/uploads/2017/04/casa-lujo1.jpg',
        ubicacion: '965 CalleMaipu, CA 95478',
        habitaciones: 6,
        sanitario: 2,
        costo: 11000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de lujo con una gran piscina ',
        descripcion: 'Esta casa es muy grande y con una gran piscina ',
        src: 'https://casasdelujo.org/wp-content/uploads/2021/12/casa-lujo-playa.jpg',
        ubicacion: '751 CallePudahuel,  CA 13266',
        habitaciones: 2,
        sanitario: 1,
        costo: 5200,
        smoke: true,
        pets: true
    },
     {
        nombre: 'Casa de lujo en zona exclusiva',
        descripcion: 'Casa de lujo que es exclusiva (no tiene vecinos)',
        src: 'https://imagenes.20minutos.es/files/image_640_360/uploads/imagenes/2023/07/22/imagen-de-archivo-de-una-vivienda-de-lujo.jpeg',
        ubicacion: '856 CalleCerillos, CA 12378',
        habitaciones: 4,
        sanitario: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de lujo ',
        descripcion: 'Esta casa tiene una de las mejores vista hacia el lago',
        src: 'https://casasinhaus.com/wp-content/uploads/2021/02/casa-lujo-inhaus-sevilla-zona-invitados.jpg',
        ubicacion: '123 CalleCisterna, CA 18456',
        habitaciones: 2,
        sanitario: 1,
        costo: 9200,
        smoke: true,
        pets: true
    },
     {
        nombre: 'Casa de lujo ',
        descripcion: 'Esta casa de lujo esta construida con cuarzo para tener una mejor calidad ',
        src: 'https://cdn-3.expansion.mx/dims4/default/d4ddb00/2147483647/strip/true/crop/1157x797+0+0/resize/1800x1240!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2Ffb%2Fee%2Fd87b0ddc42c0921ee9d65162eaf6%2Fscreen-shot-2020-03-24-at-12.17.13.png',
        ubicacion: '321 CalleFrancia,  CA 73628',
        habitaciones: 6,
        sanitario: 5,
        costo: 9600,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Casa de lujo',
        descripcion: 'Esta Mansion esta hecha para poder vivir en un lugar seguro y siempre estando tranquilo',
        src: 'https://www.canexel.es/wp-content/uploads/2015/03/casa-de-lujo.jpg',
        ubicacion: '597 CalleQuilicura , CA 17456',
        habitaciones: 2,
        sanitario: 1,
        costo: 9100,
        smoke: true,
        pets: true
    },
];

const propiedades_alquiler = [
    {
        nombre: 'Apartamento cerca del mar',
        descripcion: 'Este apartamento esta situado cerca del mar con una enorme vista',
        src: 'https://edifica.com.pe/blog/wp-content/uploads/malecon-miraflores.jpg',
        ubicacion: '854 CalleCruzat, CA 12348',
        habitaciones: 4,
        sanitario: 1,
        costo: 12000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'cabañas situadas cerca de algua',
        descripcion: 'Estas cabañas tienen unas de las mejores vista de este sector',
        src: 'https://previews.123rf.com/images/zhengzaishanchu/zhengzaishanchu2108/zhengzaishanchu210800068/172837284-casas-de-madera-sobre-el-agua-caba%C3%B1as-de-madera-junto-al-mar-lugares-para-que-los-turistas.jpg',
        ubicacion: '548 CalleConchali, CA 43256',
        habitaciones: 3,
        sanitario: 1,
        costo: 19000,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Cabaña en medio del agua',
        descripcion: 'Esta casa esta situada en la costa del mar para un mejor tranquilidad',
        src: 'https://media.traveler.es/photos/6137827e6936668f30c40591/master/w_1920%2Cc_limit/18828.jpg',
        ubicacion: '154 Callebellavista, CA 234678',
        habitaciones: 1,
        sanitario: 1,
        costo: 12000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cabaña con 2 piscina',
        descripcion: 'Esta cabaña con 2 increibles piscinas',
        src: 'https://www.pinaresdelmar.cl/wp-content/uploads/2023/05/FOTO-CABANAS-2022-2-1024x768.jpg',
        ubicacion: '332 CalleVivaceta, condominio, CA 55543',
        habitaciones: 3,
        sanitario: 1,
        costo: 7800,
        smoke: true,
        pets: false
    },
    {
        nombre: 'Cabaña con vista al mar ',
        descripcion: 'Esta casa  de lujo está ubicado en una exclusiva zona privada',
        src: 'https://a0.muscache.com/im/pictures/134ab1ba-f76f-4ff0-975c-c307884c4221.jpg?im_w=1200',
        ubicacion: '444, libertadores, viña del mar',
        habitaciones: 4,
        sanitario: 2,
        costo: 9800,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Cabaña con gran patio',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/39/ef/77/cabanas-nuestro-lugar.jpg?w=1200&h=-1&s=1',
        ubicacion: '642 San martin de los Andes,Argentina',
        habitaciones: 2,
        sanitario: 1,
        costo: 8600,
        smoke: true,
        pets: true
    },
];

const ventaHome = document.querySelector('#ventasPropiedades');
const alquilerHome = document.querySelector('#alquileresPropiedades');
function generarTarjetaPropiedad(propiedad) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${propiedad.src}" class="card-img-top" alt="Imagen del departamento"/>
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                    <p><i class="fas fa-bed"></i> ${propiedad.habitaciones} | <i class="fas fa-bath"></i> ${propiedad.sanitario}</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    ${propiedad.smoke ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>` : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`}
                    ${propiedad.pets ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>` : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`}
                </div>
            </div>
        </div>`;
}
function renderizarPropiedades(propiedades, contenedor, limit = null) {
    let html = '';
    const propiedadesToRender = limit ? propiedades.slice(0, limit) : propiedades;
    propiedadesToRender.forEach(propiedad => {
        html += generarTarjetaPropiedad(propiedad);
    });
    contenedor.innerHTML = html;
}

if (ventaHome) {
    renderizarPropiedades(propiedades_ventas, ventaHome, 3);
}

if (alquilerHome) {
    renderizarPropiedades(propiedades_alquiler, alquilerHome, 3);
}

const allVentasContainer = document.querySelector('#allVentasPropiedades');
const allAlquileresContainer = document.querySelector('#allAlquileresPropiedades');

if (allVentasContainer) {
    renderizarPropiedades(propiedades_ventas, allVentasContainer);
}

if (allAlquileresContainer) {
    renderizarPropiedades(propiedades_alquiler, allAlquileresContainer);
}
