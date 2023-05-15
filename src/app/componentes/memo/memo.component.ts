import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnviamemoService } from 'src/app/servicios/enviamemo.service';
import { FileuploadService } from 'src/app/servicios/fileupload.service';
import { ObtenerfolioService } from 'src/app/servicios/obtenerfolio.service';
import { ObteneripService } from 'src/app/servicios/obtenerip.service';
import { DialogyesnoComponent } from '../dialogyesno/dialogyesno.component';

interface Centros{
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css']
})

export class MemoComponent {

    @Input() dataentrante = {
    numemp: 97597287,
    numcentro:  230399,
    asuntomemo: '',
    mensajememo: '',
    }

   centros: Centros[] = [
    {value:'0',viewValue:'Comunicación Interna'},
    {value:'1',viewValue:'Centro Operativo Staff'},
  ];

  selectedCentros = this.centros[0].value;

  folio = '';
  centro = '230511';
  total = 5454545;
  arraydatos = [];
  ipCliente: string | undefined;
  ip: string | undefined;
  inhabilitado = true;

  archivo = {
              nombreArchivo: '',
              base64textString: '',
            }

  constructor(private router: Router,public dialog: MatDialog, public uploadService: FileuploadService, public mostrarFolio: ObtenerfolioService, public getIp: ObteneripService, private ServicioSendMemo:EnviamemoService){ }
  public asunto = new FormControl('', [Validators.required]);
  public mensaje = new FormControl('', [Validators.required]);

  public FormMemo = new FormGroup({
    asunto: this.asunto,
    mensaje: this.mensaje,
  });

  ngOnInit():void {
      //Método que genera el Folio
      this.mostrarFolio.getfolio().subscribe((respuesta:string) =>{
          console.log('Folio:'+respuesta);
          if(respuesta != ''){
            this.folio = respuesta;
          }
          else{
            console.log('Error al obtener el folio.');
          }
      })

    }

  seleccionarArchivo(event: any) {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;
    var extencion = this.archivo.nombreArchivo.split('.');
    if (extencion[1] !== 'xlsx'){
        alert('Seleccione un archivo en formato Excell');
    }
    else
    {
        // if(files && file) {
        //   var reader = new FileReader();
        //   reader.onload = this._handleReaderLoaded.bind(this);
        //   reader.readAsBinaryString(file);
        // }
        if (file){
          const formData = new FormData();
          formData.append('file',file);

         setTimeout(() => {
           this.upload(formData)
          }, 5000);
        }

    }
  }

  // enviardata(event: any)
  // {
  //   console.log('id: '+ event.data.numemp);
  // }

  _handleReaderLoaded(readerEvent: any) {
    console.log('_handleReaderLoaded');
     var binaryString = readerEvent.target.result;
     this.archivo.base64textString = btoa(binaryString);
  }

  upload(formData: any) {
    // console.log(this.archivo);
    //   this.uploadService.uploadFile(this.archivo).subscribe((datos:any) => {
    //   console.log(JSON.stringify(datos));
    //   if (datos['resultado']== 1 ) {
    //       setTimeout(() => {
    //       this.readexcell()
    //      }, 5000);
    //   }
    // });



      this.uploadService.uploadFile(formData)
        .subscribe(response => {
          console.log('response ', response);
        })
    }


  openDialog(asuntomemo:string,mensajememo:string){
    this.dataentrante.asuntomemo = asuntomemo;
    this.dataentrante.mensajememo = mensajememo;
    this.ServicioSendMemo.disparadorMemo.emit({data:this.dataentrante})
    //console.log(this.dataentrante);

      this.dialog.open(DialogyesnoComponent);
  }

  //  readexcell(){
  //    this.uploadService.readexcell(this.archivo.nombreArchivo).subscribe((datos:any) => {
  //     if(datos['resultado'] == 1)
  //       {
  //         this.arraydatos =  datos['ArrayEmpleados'].slice();
  //         console.log('arraydatos: '+ JSON.stringify(this.arraydatos));
  //       }
  //   });
  // }

  insesion(): void{
    console.log('estoy en memo');
    this.router.navigate(['/login']);
  }

  ObtieneIP(){
        this.getIp.getIP().subscribe((respuesta:string) =>  {
          console.log('ip :'+respuesta);
          //this.ip = JSON.stringify(respuesta);
          //this.ip = JSON.stringify(respuesta);
          //this.ipCliente =   respuesta.trim;
        });
  }
}
