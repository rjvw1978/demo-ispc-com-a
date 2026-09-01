import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services/gallery-service';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery   {

  gallery:any;

  constructor(private galleryService:GalleryService)
  {
    this.gallery=this.galleryService.getPhotoList();
  }

}
