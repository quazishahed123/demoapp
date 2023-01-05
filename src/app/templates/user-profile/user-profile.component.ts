import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserDataService } from 'src/app/services/user-data.service';
import { HttpClient } from "@angular/common/http";

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
  user1: any;
  serverUrl = "http://localhost:3000/employees/";


  constructor(private userDataService: UserDataService, private sanitizer: DomSanitizer,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.userDataService.userData.subscribe(res => {
      this.user = res;
      this.image=res.image;
    })
    //this.httpClient.get<any>("assets/userdata.json").subscribe((data:any)=>
    // this.user1 = data
    //)

    this.httpClient.get<any>(this.serverUrl+localStorage.getItem('id')).subscribe((data)=>
     this.user1 = data
    )
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
