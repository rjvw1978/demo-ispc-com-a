import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery   {

  gallery = [
  {
    id: 1,
    title: "Atardecer en la montaña",
    description: "Una vista panorámica con tonos cálidos.",
    imageUrl: "public/images/atardecer-montana.jpg",
    tags: ["naturaleza", "paisaje"]
  },
  {
    id: 2,
    title: "Ciudad nocturna",
    description: "Luces y movimiento en la gran ciudad.",
    imageUrl: "public/images/ciudad-noche.png",
    tags: ["urbano", "noche"]
  },
  {
    id: 3,
    title: "Playa tranquila",
    description: "Arena blanca y mar cristalino.",
    imageUrl: "public/images/playa.png",
    tags: ["mar", "relax"]
  }
];





}
