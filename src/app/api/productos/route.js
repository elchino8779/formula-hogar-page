import { NextResponse } from 'next/server';

export const GET = async (req) => {
  console.log('API productos');
  return NextResponse.json({ mensaje: 'Todos los productos' });
};

export const POST = async (req, { params }) => {
  const body = await req.json();
  return NextResponse.json({ mensaje: 'Agregar producto', body });
};

export const PUT = async (req) => {
  const body = await req.json();
  return NextResponse.json({ mensaje: 'Modificar producto', body });
};

export const DELETE = async (req) => {
  const body = await req.json();
  return NextResponse.json({ mensaje: 'Eliminar producto', body });
};
