import { NextResponse } from 'next/server';

export const GET = async (req) => {
  console.log('API Banners');
  return NextResponse.json({ mensaje: 'Todos los banners' });
};

export const POST = async (req, { params }) => {
  const body = await req.json();
  return NextResponse.json({ mensaje: 'Agregar banner', body });
};

export const PUT = async (req) => {
  const body = await req.json();
  return NextResponse.json({ mensaje: 'Modificar banner', body });
};

export const DELETE = async (req) => {
  const body = await req.json();
  return NextResponse.json({ mensaje: 'Eliminar banner', body });
};
