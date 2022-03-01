import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @ViewChild('imgField') imgField:ElementRef|any;
  imgErrMsg:string="";
  isImgErr:boolean=false;
  image:string="";
  user: any;
  constructor(private userDataService: UserDataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.userDataService.userData.subscribe(res => {
      this.user = res;
      this.image=res.image;
    })
  }

  uploadImage(input:any):void{
    let file = input.files[0];
    let url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    this.user.image=url;
  }

  validateImage():void{
    let width = this.imgField.nativeElement.naturalWidth;
    let height = this.imgField.nativeElement.naturalHeight;
    if(width !== 310 && height !== 325){
      this.imgErrMsg="(Size Restriction-310x325 px)";
      this.user.image=this.image;
      this.isImgErr=true;
      setTimeout(() => {
        this.imgErrMsg="";
        this.isImgErr=false
      }, 3000);
    }
  }

}
