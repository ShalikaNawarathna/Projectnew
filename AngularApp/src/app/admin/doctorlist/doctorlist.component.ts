import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {

  data:any=[];
  constructor(
    private doctorService:DoctorService,
    private router:Router,
    private route:ActivatedRoute,
    private auth:AuthenticationService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.doctorService.getAllDoctors().subscribe(
        res=>{
          this.data=res;
        }
      )
  });
  }
  testroute(){

this.router.navigate(['Admin-edit-doctor-details'])
  }

  logout(){

    this.auth.logout();
      }

}
