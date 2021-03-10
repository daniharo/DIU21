/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imágenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes: https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU1.LosArtistas";
        $scope.Curso ="2020/21";
        $scope.Github_ID ="https://github.com/daniharo/DIU21";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Roberto",
				Photo: "roberto.jpeg",
				Quote: "Confía en la magia de los nuevos comienzos",
				Age: 49,
				Occupation: "Electromecánico en una empresa de construcción de aviones.",
				Family: "Soltero.",
				Location: "Madrid (Getafe).",
				Character: "Quiere vivir la vida que ha perdido.",
				PersonalityTraits: [
					{ Name: "Introvertido/Reservado Vs  Extrovertido/Activo ", Value: 2 },
					{ Name: "Realista/Práctico  Vs    Intuitivo/Imaginativo", Value: 4 },
					{ Name: "Racional/Analítico  Vs   Emocional/Impulsivo", Value: 4 },
					{ Name: "Flemático/Apático  Vs   Colérico/Visceral", Value: 3 }
				], 
				Goals: ["Descubrir lugares del mundo.", "Disfrutar de experiencias deportivas de riesgo.", "Agradecer a sus amigos todo lo que han hecho por él."],
				Frustrations: ["Le gustaría tener algo más de conocimiento sobre tecnología.", "Le gustaría tener algo más de dinero ahorrado para poder viajar.", "Le gustaría haber formado una familia."],
				Bio: "Es de un pueblo de Burgos. Llegó a Madrid a los 23 años tras finalizar sus estudios de electromecánica por una oferta de trabajo. Desarrolló una adicción al alcohol que lo mantuvo alejado de la realidad hasta los 48 años, cuando se desintoxicó. No tiene mucha idea de tecnología, ya que su vida era el bar y el trabajo, no se preocupaba por otra cosa. Intenta rehacer su vida con nuevos amigos y experiencias.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Móvil", Value: 2 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos: "Desde que finalizó el proceso de desintoxicación busca nuevas experiencias. Le gustaría organizar un viaje con los amigos que le han ayudado todo este tiempo. Quiere disfrutar de la vida.",
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 4 },
					{ Name: "Online & Social Media", Value: 1 },
					{ Name: "Recomendaciones & Sugerencias", Value: 2 },
					{ Name: "Persona de Confianza (amigos, boca a boca)", Value: 4 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Ana",
				Photo: "ana.jpeg",
				Quote: "La cuestión es aprovechar el tiempo al máximo",
				Age: 22,
				Occupation: "Estudiante.",
				Family: "Soltera.",
				Location: "Granada.",
				Character: "Quiere divertirse al máximo con sus amigos.",
				PersonalityTraits: [
					{ Name: "Introvertido/Reservado Vs  Extrovertido/Activo ", Value: 5 },
					{ Name: "Realista/Práctico  Vs    Intuitivo/Imaginativo", Value: 3 },
					{ Name: "Racional/Analítico  Vs   Emocional/Impulsivo", Value: 3 },
					{ Name: "Flemático/Apático  Vs   Colérico/Visceral", Value: 4 }
				], 
				Goals: ["Conocer más a sus amigos.", "Acudir a festivales para pasárselo bien.", "Olvidarse de los estudios."],
				Frustrations: ["No dispone de demasiado tiempo para salir fuera.", "Tiene que gestionar muy bien en qué gasta su dinero.", "A veces, aunque hay eventos de su gusto en su zona, se entera demasiado tarde."],
				Bio: "Actualmente estudia la carrera de Farmacia en la UGR. Pasa la semana en un pequeño piso de Granada, sin salir mucho porque sus estudios requieren de mucha dedicación. Le encanta ayudar a sus compañeros de clase con los temas relacionados con la tecnología. Los fines de semana no suele irse a su casa porque sus padres se encuentran divorciados y no lo pasa muy bien en su pequeño pueblo, así que recurre a los viajes con sus amigos.",
				Tech: [
					{ Name: "TIC/Internet", Value: 4 },
					{ Name: "Mobile", Value: 5 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 3 }
					
				], 
                Contextos:   "Necesita enterarse con bastante tiempo de los eventos musicales que pueda haber en su zona para así poder organizarse con sus amigos." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 1 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & Sugerencias", Value: 4 },
					{ Name: "Persona de Confianza (amigos, boca a boca)", Value: 5 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
