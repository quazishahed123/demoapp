import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { UserDataService } from 'src/app/services/user-data.service';
import { Router } from '@angular/router';
export interface Tag {
  name: string;
}
@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss'],
  
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('imgField') imgField:ElementRef|any;
  addOnBlur = true;
  imgErrMsg:string="Upload Your Photo";
  isImgErr:boolean=false;
  image:any="assets/images/avatar.png";
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Tag[] = [{name: 'Cricket'}, {name: 'Football'}];
  userForm = this.fb.group({
    firstName:['',[Validators.required,Validators.pattern('[a-zA-ZW -]*'),Validators.maxLength(20)]],
    lastName:['',[Validators.required,Validators.pattern('[a-zA-ZW -]*'),Validators.maxLength(20)]],
    email:['',[Validators.required,Validators.email]],
    mobile:['',
    [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(12),
      Validators.pattern('[0-9]*'),
    ],
  ],
    age:['', [Validators.required],],
    state:['',[Validators.required]],
    country:['',Validators.required],
    address:this.fb.array([]),
    image:[this.image],
    tags:[this.fruits,[Validators.required]]
  })
  constructor(
    private fb:FormBuilder,
    private sanitizer:DomSanitizer,
    private userDataService:UserDataService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  // check form error
  checkError(key: string): any {
    return this.userForm.get(key);
  }
  get address() {
    return this.userForm.controls["address"] as FormArray;
  }
  // add address field
  addAddress():void{
    this.address.clear();
    const controls= this.fb.group({
      address1:[""],
      address2:[""]
    })
    this.address.push(controls);
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Tag): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  uploadImage(input:any):void{
    let file = input.files[0];
    let url = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(file));
    this.image=url;
  }

  validateImage():void{
    let width = this.imgField.nativeElement.naturalWidth;
    let height = this.imgField.nativeElement.naturalHeight;
    if(width !== 310 && height !== 325){
      this.imgErrMsg="(Size Restriction-310x325 px)";
      this.image="assets/images/avatar.png";
      this.isImgErr=true;
    }
   else{
    let strArr = this.imgField.nativeElement.src.split("/");
    let imageName = strArr[strArr.length-1];
      if(imageName!=='avatar.png'){
        this.imgErrMsg="Upload Your Photo";
        this.isImgErr=false;
      }
   }
  }

  submit():void{
    this.userForm.patchValue({
      image:this.image,
      tags:this.fruits
    })
    this.userDataService.userData.next(this.userForm.value);
    this.router.navigateByUrl('/user-profile');
  }

}
