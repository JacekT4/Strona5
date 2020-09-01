(function() {
	
	var debug = true;
	
	var usunZListy = function usunZListy(wiersz) {
		debug && console.log(wiersz);
		if (typeof wiersz != "object") {
			debug && console.log("Zły typ", typeof wiersz);
			return;
		}
		if (checkbox == true) {
			wiersz.remove();
		} else {}   /*CZY TRZEBA TAK DOMYKAC PETLE*/	
	}	
	
/*	
	przycisk.addEventListener("click", function() {
		usunZListy(wiersz);		
	});
*/		

	var dodajDoListy = function dodajDoListy(lista, wartosc, wartosc1, wartosc2) {
		debug && console.log(lista, wartosc, wartosc1, wartosc2);
		if (typeof lista != "object" || typeof wartosc != "string" || typeof wartosc1 != "string" || typeof wartosc2 != "string") {  /*PROBLEM typ email*/
			debug && console.log("Złe typy podane", typeof lista, typeof wartosc, typeof wartosc1, typeof wartosc2); 
			return;
		}
                  
		var  wiersz = document.createElement("li");                      //var - deklarowanie w danym bloku, lepiej let a najlepiej const
		var  usuwacz = document.createElement("input");
		wiersz.innerHTML = wartosc + "  " + wartosc1 + "  " + wartosc2;
		usuwacz.setAttribute("type", "checkbox");
		wiersz.appendChild(usuwacz);
		lista.appendChild(wiersz);
		
	}
	
	var dodaj = document.getElementById("dodaj");
	var lista = document.getElementById("lista");
	var licznik = 0;

	dodaj.addEventListener("click", function() {
		var wartosc = document.getElementById("imie").value;
		var wartosc1 = document.getElementById("nazwisko").value;
		var wartosc2 = document.getElementById("email").value;
		dodajDoListy(lista, wartosc, wartosc1, wartosc2);
		
		function sprawdz() {
            var liczba = document.getElementById("imie").value;
            var liczba2 = document.getElementById("nazwisko").value;
             
            if(liczba.length<16) {
                console.log("ZA DŁUGIE IMIE");
            } else {}

            if(liczba2.length<16) {
                console.log("ZA DŁUGIE NAZWISKO");
            } else {}
		}

		if (licznik == 0) {
			var przycisk = document.createElement("button");
			przycisk.innerHTML = "Usuń zaznaczone";
			document.body.appendChild(przycisk); 
			licznik++;
		} else {}  
	});
		

})(); //PYTANIE O NAWIASY
