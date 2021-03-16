/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imágenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes: https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU1.LosArtistas";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/daniharo/DIU21";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Roberto",
                Photo: "roberto.jpeg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Preparar un viaje para vivir nuevas experiencias y agradecer a sus amigos la ayuda que le han prestado. Busca un lugar de montaña.",
                touch1: "Calendario",
                feel1: "4",
                con1: "Encontrar fecha en la que pueda ir con sus amigos. Cada uno tiene sus ocupaciones. No quiere viajar a otro país ya que no es bueno con los idiomas.",
                ima1: "cartoon-phoning.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar en qué sitios puede realizar actividades de montaña.",
                touch2: "Ordenador",
                feel2: "1",
                con2: "No puede filtrar por actividades de montaña en la plataforma, es necesario elegir un lugar previamente.",
                ima2: "cartoon-why.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decidir que el Pirineo aragonés es el lugar al que quiere ir con sus amigos.",
                touch3: "Ordenador (Google Maps)",
                feel3: "3",
                con3: "Ha tenido que acudir a otras páginas.",
                ima3: "cartoon-PChard.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Buscar actividades que realizar en el Pirineo aragonés.",
                touch4: "ordenador",
                feel4: "4",
                con4: "Buscar opciones en el lugar que había seleccionado, viendo precios y distancias, tiene que ver si hay aparcamiento fácil",
                ima4: "cartoon-PCtyping.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Elegir entre las actividades que se ajustan a sus preferencias.",
                touch5: "Ordenador",
                feel5: "4",
                con5: "Es bastante indeciso. Le gustaría realizarlas todas, pero no tiene suficiente dinero.",
                ima5: "cartoon-thinking.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Hacer la reserva de la actividad de barranquismo en Ordesa.",
                touch6: "Ordenador",
                feel6: "3",
                con6: "No tiene suficiente dinero en la cuenta. Se rechaza el pago. Cuando intenta volverlo a realizar se han borrado todos los datos.",
                ima6: "cartoon-sad.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Ana",
                Photo: "ana.jpeg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Preparar algunas actividades para realizar el fin de semana con sus compañeros de clase.",
                touch1: "Calendario",
                feel1: "5",
                con1: "No sabe de forma definitiva cuántos de sus amigos pueden. Es probable que alguna actividad se tenga que cancelar por esa razón.",
                ima1: "cartoon-writting.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Buscar qué tipo de actividades se pueden realizar en Granada y sus alrededores.",
                touch2: "Móvil",
                feel2: "4",
                con2: "Debe encontrar una actividad que sea accesible para personas en silla de ruedas.",
                ima2: "cartoon-looking.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Decidir que quiere elegir entre actividades de paseos nocturnos y gastronomía.",
                touch3: "Móvil",
                feel3: "3",
                con3: "Por las restricciones del coronavirus algunas de esas actividades no están disponibles.",
                ima3: "cartoon-phone.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Confirmar que las dos actividades que ha encontrado son accesibles para personas en silla de ruedas.",
                touch4: "Móvil (llamada)",
                feel4: "2",
                con4: "Le informan de que una de las actividades tiene un sobrecoste por adaptación.",
                ima4: "cartoon-phoning.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "Reservar la actividad de paseo nocturno y degustación de tapas, que no tiene sobrecoste.",
                touch5: "Ordenador",
                feel5: "4",
                con5: "No tiene muy claros los horarios de la actividad.",
                ima5: "cartoon-PCtyping.png",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consigue reservar la actividad en la que estaban interesados él y sus compañeros para el fin de semana.",
                touch6: "Ordenador",
                feel6: "5",
                con6: "Tendrá que estar atento por si hay que hacer alguna cancelación.",
                ima6: "cartoon-happy.png",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])



