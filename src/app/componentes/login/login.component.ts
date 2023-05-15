import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/servicios/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
//Variables
  hide = true;
  change = false;
  opcion : number = 0;
  msg : string = '';
  empres: string ='' ;
  passwres: string = '';
  emp: string = '';
  iEmp : number = 0;
  loading : boolean;

  usuario = {
      numemp: 0,
      pass: '',
    }

  constructor(private router: Router, private snackBar: MatSnackBar, public userService:UsersService){this.loading = false;}
//Validar Login
    public empleado = new FormControl('', [Validators.required]);
    public password = new FormControl('', [Validators.required,Validators.maxLength(4)]);

    public newForm = new FormGroup({
      empleado: this.empleado,
      password: this.password,
    });

      getErrorMessage()
      {
         if (this.empleado.hasError('required'))
          {
             return 'Escribe el número de empleado.';
          }
          return this.empleado.hasError('empleado') ? 'El número de empleado no es válido, intente de nuevo': '';

      }
      getErrorMsg()
      {
        if (this.password.hasError('required'))
        {
          return 'La contraseña no debe estar vacia';
        }

          return this.password.hasError('manLength') ? '': 'La contraseña debe tener 4 caracteres.';
      }
      //Habilita boton Ingresar
      changebutton()
      {
        this.change = true;
      }
      //Método que valida acceso a usuarios
    login(emp:string, passw:string): any{
      setTimeout(() => {
        this.loading = true;
       }, 5000);
        this.iEmp =  Number(emp);
        this.usuario.numemp = this.iEmp;
        this.usuario.pass = passw;
      console.log('user:' + JSON.stringify(this.usuario));
      //Llamado a servicio
      this.userService.login(this.usuario).subscribe((respuesta:Number) => {
        console.log ('Respuesta:'+respuesta);
         this.loading = false;

          if (respuesta == 1)
          {
            this.router.navigate(['/memo']);
          }
          else if(respuesta == 2)
          {
              this.snackBar.open("Verifique que su número de empleado y contraseña sean correctos.", "", {
              duration: 4000,
              horizontalPosition: "center",
              verticalPosition: "top",
            });
              this.router.navigate(['/login']);
          }
        })
    }
}
