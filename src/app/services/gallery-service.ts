import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {

    private photoList =[
    {
      id: 1,
      title: "Atardecer en la montaña",
      description: "Una vista panorámica con tonos cálidos.",
      imageUrl: "/images/atardecer-montana.jpg",
      tags: ["naturaleza", "paisaje"]
    },
    {
      id: 2,
      title: "Ciudad nocturna",
      description: "Luces y movimiento en la gran ciudad.",
      imageUrl: "/images/ciudad-noche.png",
      tags: ["urbano", "noche"]
    },
    {
      id: 3,
      title: "Playa tranquila",
      description: "Arena blanca y mar cristalino.",
      imageUrl: "/images/playa.png",
      tags: ["mar", "relax"]
    }
  ];

  getPhotoList()
  {
    return this.photoList;
  }

}
