import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LibraryPage} from '../library/library';
import { JapjiPage} from '../japji/japji';
import { AboutGurmukhiPage} from '../about-gurmukhi/about-gurmukhi';
import {  AboutGriPage} from '../about-gri/about-gri';
import {  HomePage} from '../home/home';
/**
 * Generated class for the FuntionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-funtions',
  templateUrl: 'funtions.html',
})
export class FuntionsPage {


	lista:any;
  audio:any;
  imagen_audio:any;
  imagenes:any;
  imagen_referencia:any;
  image_seleccionado:any;
  letra:any;
  pushPage: any;
  libraryPage :any;
  japjiPage :any;
  aboutPage :any;
  about_griPage :any;
  homePage:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.pushPage = FuntionsPage;
      this.libraryPage = LibraryPage;
      this.japjiPage = JapjiPage;
      this.aboutPage = AboutGurmukhiPage;
      this.about_griPage = AboutGriPage;
      this.homePage=HomePage


this.imagenes=[
{
  imagen:'assets/g_imagenes/tongue-1.jpg',
  id:1
},
{
  imagen:'assets/g_imagenes/tongue-2.jpg',
  id:2

},
{
  imagen:'assets/g_imagenes/tongue-3.jpg',
  id:3
},
{
  imagen:'assets/g_imagenes/tongue-4.jpg',
  id:4
}]

this.lista=[
{audio: 'assets/ALL/0101 K.wav',
imagen: 'assets/g_letras/A1.png',
imagen_hover: 'assets/g_letras/B1.png',
imagen_referencia:1,
letra: 'O'},
{audio: 'assets/ALL/0102 CH.wav',
imagen: 'assets/g_letras/A2.png',
imagen_hover: 'assets/g_letras/B2.png',
imagen_referencia:2,
letra: 'A'},
{audio: 'assets/ALL/0103 Ta.wav',
imagen: 'assets/g_letras/A3.png',
imagen_hover: 'assets/g_letras/B3.png',
imagen_referencia:3,
letra: 'I'},
{audio: 'assets/ALL/0104 Ta.wav',
imagen: 'assets/g_letras/A4.png',
imagen_hover: 'assets/g_letras/B4.png',
imagen_referencia:4,
letra: 'S'},
{audio: 'assets/ALL/0105 Pa.wav',
imagen: 'assets/g_letras/A5.png',
imagen_hover: 'assets/g_letras/B5.png',
imagen_referencia:1,
letra:'J(H)'},
{audio: 'assets/ALL/0201 KH.wav',
imagen: 'assets/g_letras/A6.png',
imagen_hover: 'assets/g_letras/B6.png',
imagen_referencia:2,
letra: 'K'},
{audio: 'assets/ALL/0202 CHHA.wav',
imagen: 'assets/g_letras/A7.png',
imagen_hover: 'assets/g_letras/B7.png',
imagen_referencia:3,
letra: 'KH'},
{audio: 'assets/ALL/0203 THHA.wav',
imagen: 'assets/g_letras/A8.png',
imagen_hover: 'assets/g_letras/B8.png',
imagen_referencia:4,
letra: 'G'},
{audio: 'assets/ALL/0204 THAA.wav',
imagen: 'assets/g_letras/A9.png',
imagen_hover: 'assets/g_letras/B9.png',
imagen_referencia:1,
letra: 'K'},
{audio: 'assets/ALL/0205 PHAA.wav',
imagen: 'assets/g_letras/A10.png',
imagen_hover: 'assets/g_letras/B10.png',
imagen_referencia:2,
letra:'NG'},
{audio: 'assets/ALL/0301 GA.wav',
imagen: 'assets/g_letras/A11.png',
imagen_hover: 'assets/g_letras/B11.png',
imagen_referencia:3,
letra: 'CH'},
{audio: 'assets/ALL/0302 JA.wav',
imagen: 'assets/g_letras/A12.png',
imagen_hover: 'assets/g_letras/B12.png',
imagen_referencia:4,
letra:'CHH'},
{audio: 'assets/ALL/0303 DA.wav',
imagen: 'assets/g_letras/A13.png',
imagen_hover: 'assets/g_letras/B13.png',
imagen_referencia:1,
letra:'LL'},
{audio: 'assets/ALL/0304 DA.wav',
imagen: 'assets/g_letras/A14.png',
imagen_hover: 'assets/g_letras/B14.png',
imagen_referencia:2,
letra:'CH'},
{audio: 'assets/ALL/0305 BA.wav',
imagen: 'assets/g_letras/A15.png',
imagen_hover: 'assets/g_letras/B15.png',
imagen_referencia:3,
letra: 'YIEN'},
{audio: 'assets/ALL/0401 KHHA.wav',
imagen: 'assets/g_letras/A16.png',
imagen_hover: 'assets/g_letras/B16.png',
imagen_referencia:4,
letra: 'YIEN'},
{audio: 'assets/ALL/0402 CHHAA.wav',
imagen: 'assets/g_letras/A17.png',
imagen_hover: 'assets/g_letras/B17.png',
imagen_referencia:2,
letra: 'T'},
{audio: 'assets/ALL/0403 THHAA.wav',
imagen: 'assets/g_letras/A18.png',
imagen_hover: 'assets/g_letras/B18.png',
letra: 'TH'},
{audio: 'assets/ALL/0404 THHAA.wav',
imagen: 'assets/g_letras/A19.png',
imagen_hover: 'assets/g_letras/B19.png',
letra: 'D'},
{audio: 'assets/ALL/0405 PHHAA.wav',
imagen: 'assets/g_letras/A20.png',
imagen_hover: 'assets/g_letras/B20.png',
letra:'T'},
{audio: 'assets/ALL/0501 Ma.wav',
imagen: 'assets/g_letras/A21.png',
imagen_hover: 'assets/g_letras/B21.png',
letra:'N'},
{audio: 'assets/ALL/0502 Na.wav',
imagen: 'assets/g_letras/A22.png',
imagen_hover: 'assets/g_letras/B22.png',
letra:'T'},
{audio: 'assets/ALL/0503 Na.wav',
imagen: 'assets/g_letras/A23.png',
imagen_hover: 'assets/g_letras/B23.png',
letra:'TH'},
{audio: 'assets/ALL/0504 Yaa.wav',
imagen: 'assets/g_letras/A24.png',
imagen_hover: 'assets/g_letras/B24.png',
letra:'D'},
{audio: 'assets/ALL/0505 Ang.wav',
imagen: 'assets/g_letras/A25.png',
imagen_hover: 'assets/g_letras/B25.png',
letra:'TA'},
{audio: 'assets/ALL/0601 Ya.wav',
imagen: 'assets/g_letras/A26.png',
imagen_hover: 'assets/g_letras/B26.png',
letra:'dN'},
{audio: 'assets/ALL/0602 Ra.wav',
imagen: 'assets/g_letras/A27.png',
imagen_hover: 'assets/g_letras/B27.png',
letra:'P'},
{audio: 'assets/ALL/0603 La.wav',
imagen: 'assets/g_letras/A28.png',
imagen_hover: 'assets/g_letras/B28.png',
letra:'PH'},
{audio: 'assets/ALL/0604 Va.wav',
imagen: 'assets/g_letras/A29.png',
imagen_hover: 'assets/g_letras/B29.png',
letra:'B'},
{audio: 'assets/ALL/0605 Rra.wav',
imagen: 'assets/g_letras/A30.png',
imagen_hover: 'assets/g_letras/B30.png',
letra:'P'},
{audio: 'assets/ALL/0701 SHA.wav',
imagen: 'assets/g_letras/A31.png',
imagen_hover: 'assets/g_letras/B31.png',
letra:'M'},
{audio: 'assets/ALL/0702 KHA.wav',
imagen: 'assets/g_letras/A32.png',
imagen_hover: 'assets/g_letras/B32.png',
letra:'I'},
{audio: 'assets/ALL/0703 GA.wav',
imagen: 'assets/g_letras/A33.png',
imagen_hover: 'assets/g_letras/B33.png',
letra:'R'},
{audio: 'assets/ALL/0704 JA.wav',
imagen: 'assets/g_letras/A34.png',
imagen_hover: 'assets/g_letras/B34.png',
letra:'L'},
{audio: 'assets/ALL/0705 FA.wav',
imagen: 'assets/g_letras/A35.png',
imagen_hover: 'assets/g_letras/B35.png',
letra:'B'},
{audio: 'assets/ALL/0801 O.wav',
imagen: 'assets/g_letras/A36.png',
imagen_hover: 'assets/g_letras/B36.png',
letra:'R'},
{audio: 'assets/ALL/0802 A.wav',
imagen: 'assets/g_letras/A37.png',
imagen_hover: 'assets/g_letras/B37.png',
letra:'SH'},
{audio: 'assets/ALL/0803 E.wav',
imagen: 'assets/g_letras/A38.png',
imagen_hover: 'assets/g_letras/B38.png',
letra:'KJ'},
{audio: 'assets/ALL/0804 S.wav',
imagen: 'assets/g_letras/A39.png',
imagen_hover: 'assets/g_letras/B39.png',
letra:'J'},
{audio: 'assets/ALL/0805 H.wav',
imagen: 'assets/g_letras/A40.png',
imagen_hover: 'assets/g_letras/B40.png',
letra:'Z'}]


this.audio = new Audio();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FuntionsPage');
  }



  getaudio(data){


    console.log(data)

    this.image_seleccionado = data.imagen_hover

    this.letra=data.letra

    this.imagen_referencia = this.imagenes[data.imagen_referencia]

    console.log(this.imagen_referencia)

    data.enable=true

    console.log(data.audio)

    this.imagen_audio = data.imagen

    this.audio.pause();

    this.audio = new Audio(data.audio);
    
    this.audio.play();

    setTimeout(() => 
    {
         data.enable=false
    },
    1000);

  }



}


