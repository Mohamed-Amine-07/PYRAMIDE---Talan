
			
		

		var hauteur= window.prompt(" Bienveniue; quel est le nombre des etages de votre pyramide ? : saisissez un entier entre 1 et 25");


				if (hauteur >= 1 && hauteur <= 25) {
				
				    	var pyramid2 =''; 				

					for (var i = 0; i <hauteur ; i++)     { 
	
    						var pyramid1 =''; 
	
    						for (var j = 1; j < hauteur-i; j++)   { 
     							 pyramid1 = pyramid1 + ' '; 
    									               } 
   								 for (var k = 1; k <= (2*i+1); k++) { 

      									pyramid2 = pyramid2 + '#'; 
												    }

    						console.log(pyramid1+pyramid2);

						pyramid2 ='';
  								        	} 	


 					document.write( " Votre pyramide est maintenamt pres et afficher dans le console.");

								           }

				else 	{

	console.log( " Entree non valide : la pyramide ne peut pas s'afficher , merci de saisir de nouveau un entier entre 1 et 25. ");

	document.write( " Entree non valide : la pyramide ne peut pas s'afficher, merci de saisir de nouveau un entier entre 1 et 25.");
				} 



