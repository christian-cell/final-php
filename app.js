/*aqui llamo a unas etiquetas html para darle algunos eventos
mediante el metodo add eventlistener
*/

var titulo = document.getElementById('titulo');
titulo.addEventListener('mouseover',function(){
    titulo.style.backgroundColor="#ecf0f1";
});
titulo.addEventListener('mouseout',function(){
    titulo.style.backgroundColor="white";
});


var formu = document.getElementById('formu');
formu.addEventListener('mouseover',function(){
    formu.style.backgroundColor="#f7f1e3";
});
formu.addEventListener('mouseout',function(){
    formu.style.backgroundColor="white";
});


var rights = document.getElementById('rights');
rights.addEventListener('mouseover',function(){
    rights.style.backgroundColor="#ecf0f1";
});
rights.addEventListener('mouseout',function(){
    rights.style.backgroundColor="white";
});


var derechos = document.querySelector('#rights');
derechos.addEventListener('mouseover',function(){
    derechos.style.backgroundColor="#dfe4ea";
});
derechos.addEventListener('mouseout',function(){
    derechos.style.backgroundColor="white";
});

/*a continuacion creo una clase que contendra 
un constructor para asociar los valores que el
usuario introduzca con sus respectivos campos
*/

class Password{
    constructor(password,dblcheck,name){
        this.password = password;
        this.dblcheck = dblcheck;
        this.name = name;
    }
    
}

/*a continuacion creo una clase que contendra todos
los metodos a los que llamare mas adelante
*/

class UI{
    showMessage(message,cssClass){                           //creo algunas etiquetas ,les doy contenido
        const h4 = document.createElement('h4');             //y las situo usando appendchild mas 
        h4.className = 'alarma alert-'+ cssClass;            //llamaremos al evento submit y cuando este
        h4.appendChild(document.createTextNode(message));    //se produzca estos metodos entraran en accion
        const alarma = document.querySelector('#alarma');
        alarma.appendChild(h4);
        

        setTimeout(function() {
            document.querySelector('h4').remove();           //para tl metodo showMessage y show 
        }, 3000);

    }

    showAlarm(message,cssClass){
        const h6 = document.createElement('h6');
        h6.className = 'alarm alert-'+ cssClass;
        h6.appendChild(document.createTextNode(message));
        const alar = document.getElementById('alar');
        alar.appendChild(h6);

        setTimeout(function(){
               document.querySelector('h6').remove();
        },3000);
    }
    
    resetFormulario(){
        document.getElementById('formulario').reset();
    }
}



const formulario = document.getElementById('formulario')
.addEventListener('submit',function(e){
        const password = document.getElementById('password').value;
        const dblcheck = document.getElementById('dblcheck').value;
        const name = document.getElementById('name').value;

        const newPassword = new Password(password,dblcheck,name);

        var userinter = new UI

       
        
        
        

        if(password === '' || dblcheck === '' || name === ''){
             userinter.showMessage('Introduzca todos los campos','info');
            
        }
        
        if(password.length<8){
               userinter.showAlarm('La contraseña ha de tener un minimo de 8 caracteres','info');
        }else if(password === dblcheck){
             userinter.showMessage('Las contraseñas coinciden','success');
            }else{
                 userinter.showMessage('Las contraseñas no coinciden','danger');
                }
        

        
      userinter.resetFormulario();
    e.preventDefault();
});


    
