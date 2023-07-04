import { Component} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  imageCat = ["wedding", "vacation", "fineArt", "maternity", "headshot", "portrait", "boldoir", "poledance", "workshop"]

  wedding = [
    "../../../assets/gallery-images/weddings/wedding-1.jpg",
    "../../../assets/gallery-images/weddings/wedding-2.jpg",
    "../../../assets/gallery-images/weddings/wedding-3.jpg",
    "../../../assets/gallery-images/weddings/wedding-4.jpg",
    "../../../assets/gallery-images/weddings/wedding-5.jpeg",
    "../../../assets/gallery-images/weddings/wedding-6.jpg",
  ]

  vacation = [
    "../../../assets/gallery-images/vacations/vacation-1.jpeg",
    "../../../assets/gallery-images/vacations/vacation-2.jpg",
    "../../../assets/gallery-images/vacations/vacation-3.jpeg",
    "../../../assets/gallery-images/vacations/vacation-4.jpg",
    "../../../assets/gallery-images/vacations/vacation-5.jpg",

  ]
  imagesObj = [
    {
      wedding: "../../../assets/gallery-images/weddings/wedding-1.jpg",
      vacation: "../../../assets/gallery-images/vacations/vacation-1.jpeg",
      fineArt: "../../../assets/gallery-images/fine-art/fine-art-1.jpg",
      maternity: "../../../assets/gallery-images/maternity/maternity-1.jpg",
      headshot: "../../../assets/gallery-images/headshot/headshot-1.jpg",
      portrait: "../../../assets/gallery-images/portrait/portrait-1.jpg",
      boldoir: "../../../assets/gallery-images/boudoir/boudoir-1.jpg",
      poledance: "../../../assets/gallery-images/poledance/poledance-1.jpg",
      workshop: "../../../assets/gallery-images/workshop/workshop-1.jpg"
    },
    {
      wedding: "../../../assets/gallery-images/weddings/wedding-2.jpg",
      vacation: "../../../assets/gallery-images/vacations/vacation-2.jpg",
      fineArt: "../../../assets/gallery-images/fine-art/fine-art-2.jpg",
      maternity: "../../../assets/gallery-images/maternity/maternity-2.jpg",
      headshot: "../../../assets/gallery-images/headshot/headshot-2.jpg",
      portrait: "../../../assets/gallery-images/portrait/portrait-2.jpg",
      boldoir: "../../../assets/gallery-images/boudoir/boudoir-2.jpg",
      poledance: "../../../assets/gallery-images/poledance/poledance-2.jpg",
      workshop: "../../../assets/gallery-images/workshop/workshop-2.jpg"
    },
    {
      wedding: "../../../assets/gallery-images/weddings/wedding-3.jpg",
      vacation: "../../../assets/gallery-images/vacations/vacation-3.jpeg",
      fineArt: "../../../assets/gallery-images/fine-art/fine-art-3.jpg",
      maternity: "../../../assets/gallery-images/maternity/maternity-3.jpg",
      headshot: "../../../assets/gallery-images/headshot/headshot-3.jpg",
      portrait: "../../../assets/gallery-images/portrait/portrait-3.jpg",
      boldoir: "../../../assets/gallery-images/boudoir/boudoir-3.jpg",
      poledance: "../../../assets/gallery-images/poledance/poledance-3.jpg",
      workshop: "../../../assets/gallery-images/workshop/workshop-3.jpg"
    },
    {
      wedding: "../../../assets/gallery-images/weddings/wedding-4.jpg",
      vacation: "../../../assets/gallery-images/vacations/vacation-4.jpg",
      fineArt: "../../../assets/gallery-images/fine-art/fine-art-4.jpg",
      maternity: "../../../assets/gallery-images/maternity/maternity-4.jpg",
      headshot: "../../../assets/gallery-images/headshot/headshot-4.jpg",
      portrait: "../../../assets/gallery-images/portrait/portrait-4.jpg",
      boldoir: "../../../assets/gallery-images/boudoir/boudoir-4.jpg",
      poledance: "../../../assets/gallery-images/poledance/poledance-4.jpg",
      workshop: "../../../assets/gallery-images/workshop/workshop-4.jpg"
    },
    {
      wedding: "../../../assets/gallery-images/weddings/wedding-5.jpeg",
      vacation: "../../../assets/gallery-images/vacations/vacation-5.jpg",
      fineArt: "../../../assets/gallery-images/fine-art/fine-art-5.jpg",
      maternity: "../../../assets/gallery-images/maternity/maternity-5.jpg",
      headshot: "../../../assets/gallery-images/headshot/headshot-5.jpg",
      portrait: "../../../assets/gallery-images/portrait/portrait-5.jpg",
      boldoir: "../../../assets/gallery-images/boudoir/boudoir-5.jpg",
      poledance: "../../../assets/gallery-images/poledance/poledance-5.jpg",
      workshop: "../../../assets/gallery-images/workshop/workshop-5.jpg"
    },
  ]

  showModal = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }
}
