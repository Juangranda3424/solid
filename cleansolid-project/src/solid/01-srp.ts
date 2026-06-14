interface User {
    id: number;
    name: string;
}


class SubscriptionBloc {

    onAddSubscription( subscriptionId: number ) {
        // Simula la gestión de suscripciones
        console.log('Agregando suscripción:', subscriptionId );
    }

}

class UserService {

    loadUser( id: number ) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }

    saveUser( user: User ) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user );
    }

}


class Mailer {

    sendEmail(){
        // Simula el envío de notificaciones
        console.log('Enviando correo a los usuarios');
    }
}


class UserBloc {

    constructor(
        private userserivce: UserService,
        private mailer: Mailer,
        private subscriptionBloc: SubscriptionBloc
    ){}

    loadUser( id: number ) {
        return this.userserivce.loadUser(id);
    }

    saveUser(user: User){
        return this.userserivce.saveUser(user);
    }

    notifyUser(){
        return this.mailer.sendEmail();
    }

    onAddSubscription(subscriptionId: number){
        return this.subscriptionBloc.onAddSubscription(subscriptionId);
    }

}

