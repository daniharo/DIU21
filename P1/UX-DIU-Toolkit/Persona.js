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
				Name: "Monica Suarez",
				Photo: "woman.png",
				Quote: "A quotation that captures the essence of this person's personality",
				Age: 17,
				Occupation: "Searching for a cure for the Empress",
				Family: "No parents, only family are the people who raised him.",
				Location: "The Grassy Plains of Fantasia",
				Character: "Strong, reliable and fearless.",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["The goals this user hopes to achieve.", "A task that needs to be completed.", "A life goal to be reached.", "An experience to be felt."],
				Frustrations: ["The frustrations this user would like to avoid.", "The obstacle that prevents the user from achieving their goals.", "The problems with the solutions already available.", "The product or service which does not currently exist."],
				Bio: "The bio should be a short paragraph to describe the user journey. It should include some of their history leading up to a current use case. It may be helpful to incorporate information listed across the template and add pertinent details that may have been left out. Highlight factors of the user's personal and professional life that make this user an ideal customer of your product.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "The goals this user hopes to achieve." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 5 },
					{ Name: "Online & Social Media", Value: 2 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])