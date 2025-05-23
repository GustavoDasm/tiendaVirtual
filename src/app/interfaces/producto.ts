
export interface Producto {
  productoID: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precioPromocion: number;
  stock: number;
  categoria: Categoria;
  urlImagen: string;
  codigo: string;
}

export interface Categoria{
  categoriaID: number;
  nombre: string;
  descripcion: string;
}