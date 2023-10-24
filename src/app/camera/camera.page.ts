import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Camera.requestPermissions();
  }

  takePhoto() {
    const openCamera = async () => {
      await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera
      });
    };

    openCamera();
  }
  

}
