import { Component, Input, OnInit } from '@angular/core';
import { EnviamemoService } from 'src/app/servicios/enviamemo.service';

@Component({
  selector: 'app-dialogyesno',
  templateUrl: './dialogyesno.component.html',
  styleUrls: ['./dialogyesno.component.css']
})

export class DialogyesnoComponent implements OnInit{
  numemp: 97597287 | undefined;
  numcentro:  230399 | undefined;
  asuntomemo: string = '';
  mensajememo: string = '';

   constructor(private ServicioSendMemo:EnviamemoService){}

       ngOnInit():void {
      this.ServicioSendMemo.disparadorMemo.subscribe(data => {
        console.log('Recibiendo data:',data);
        this.asuntomemo = data.data.asuntomemo;
       })
    }



    generarMemo(){

        console.log('Recibiendo datos:',this.asuntomemo);

  }
}
