export interface Categorias {
    _id:            string;
    nombre:         string;
    description:    string;
    categorias:     string[];
    imageUrl:       string[];
    precio_venta:   number;
    precio_regular: number;
    slug?:           string;
    created_at:     Date;
    updated_at?:  Date;
  }
  