import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { NgForm } from '@angular/forms';
import { DatePicker } from 'angular2-datetimepicker';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { MoviesService } from './movies.service';




@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {

  imageurl: string = "../../assets/Img/Upload-icon.png";
  selectedFile: File = null;

  constructor(private moviesService: MoviesService, private toastrService: ToastrService, private datePipe: DatePipe) {

  

    DatePicker.prototype.ngOnInit = function () {
      this.settings = Object.assign(this.defaultSettings, this.settings);
      if (this.settings.defaultOpen) {
        this.popover = true;
      }
      this.date = new Date();
    };

  }

 

  date: Date = new Date();
  settings =
    {
      bigBanner: false,
      timePicker: true,
      format: 'dd-MMM-yyyy',
      defaultOpen: false,
      closeOnSelect: true
    };





  onFileSelected(event) {

    //    this.selectedFileFile = null;
    //console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  showOrEdit(form:Movie)
  {
    this.moviesService.getMovieList();
    this.moviesService.SelectedMovie = Object.assign({}, form);
   // console.warn(this.SelectedMovie.ReleaseDate)
  }

  Ondelete(id: number) {
    if (confirm("Are you sure to delete this record") == true) {
      this.moviesService.deleteMovie(id)
        .subscribe(x => {
          this.moviesService.getMovieList();
          this.toastrService.info('Deleted', 'Movie');
        }
        );
    }

  }

  savedata(form?: NgForm)
  {
    console.warn(form.value);

    form.value.ReleaseDate = this.datePipe.transform(form.value.ReleaseDate, "dd-MMM-yyyy")

    console.warn(form.value.ReleaseDate);
   


    if (form.value.Id == null) {

      form.value.Id = undefined;
      this.moviesService.postMovie(form.value).subscribe(
        data =>
        {
          this.reset(form);
          this.moviesService.getMovieList();
          this.toastrService.success('Submitted', 'Movie');
        }
      );

      console.warn('Insert method calling');
    }
    else
    {
      this.moviesService.putMovie(form.value.Id, form.value).subscribe(
        data =>
        {
          this.reset(form);
          this.moviesService.getMovieList();
          this.toastrService.warning('Updated', 'Movie');
        }
      );
      console.warn('update method calling');

    }
  }

  reset(form?:NgForm)
  {
    if (form != null)
      form.reset();

    this.moviesService.SelectedMovie =
      {
      Id:null,
      Genre:"",
      Title: "",
      ReleaseDate: new Date(),
      Price: null,
      imageurl:""
      }

  }

 



  onLoad() {
  //  console.log(this.selectedFile);
  }

  handleFileInput(file: FileList)
  {
    this.selectedFile = file.item(0);

    //show image preview

    var reader = new FileReader();
    reader.onload = (event:any)=>
    {
      this.imageurl = event.target.result;

    }
    reader.readAsDataURL(this.selectedFile);
  }

  ngOnInit() {
    this.reset();  
    this.moviesService.getMovieList();
  }

}
