(function() {
	
	var debug = true;
	
	var usunZListy = function usunZListy(wiersz) {
		debug && console.log(wiersz);
		if (typeof wiersz != "object") {
			debug && console.log("Zły typ", typeof wiersz);
			return;
		}		
		wiersz.remove();
	}	

	var sprawdz = function sprawdz(pole, wartosc) {
            var liczba = document.getElementById("imie").value;
            var liczba2 = document.getElementById("nazwisko").value;

			if (pole == "dlugosc" && wartosc.length > 16) {
				alert("ZA DŁUGA WARTOSC");
				return false;
			}

			if (pole == "email" && (wartosc.length > 25 || !/^[a-z0-9_\.]+@[a-z0-9]+\.[a-z0-9]{2,4}$/.test(wartosc))) {
				alert("ZŁY EMAIL");
				return false;
			}
			return true;
	}

	var dodajDoListy = function dodajDoListy(lista, imie, nazwisko, email) {
		debug && console.log(lista, imie, nazwisko, email);
		if (
			typeof lista != "object" || typeof imie != "string" || typeof nazwisko != "string" || typeof email != "string" ||
			!sprawdz("dlugosc", imie) || !sprawdz("dlugosc", nazwisko) || !sprawdz("email", email)
		) {                                                                                                                              /*PROBLEM typ email - NIE MA TAKIEGO TYPU W JS*/
			debug && console.log("Złe wartosci podane", lista, imie, nazwisko, email); 
			return false;
		}
                  
		var  wiersz = document.createElement("li");                      //var - deklarowanie w danym bloku, lepiej let a najlepiej const
		var  usuwacz = document.createElement("input");
		wiersz.innerHTML = imie + "  " + nazwisko + "  " + email;
		usuwacz.setAttribute("type", "checkbox");
		wiersz.appendChild(usuwacz);
		lista.appendChild(wiersz);	
		return true;
	}
	
	

	document.getElementById("dodaj").addEventListener("click", function() {
		var lista = document.getElementById("lista");
		var imie = document.getElementById("imie");
		var nazwisko = document.getElementById("nazwisko");
		var email = document.getElementById("email");
		if (dodajDoListy(lista, imie.value, nazwisko.value, email.value)) {
			imie.value = "";
			nazwisko.value = "";
			email.value = "";
			dodajGuzikUsuwania();
		}

	});
	

		
	var dodajGuzikUsuwania = function dodajGuzikUsuwania() {
		console.log(document.getElementById("przyciskUsuwania"));
		if (!document.getElementById("przyciskUsuwania")) {
			var przycisk = document.createElement("button");
			przycisk.id = "przyciskUsuwania";
			przycisk.innerHTML = "Usuń zaznaczone";
			document.body.appendChild(przycisk); 
			
			var my_div = null;
			var newDiv = null;
	
	
			newDiv = document.createElement("div");        //ZMIENIĆ TO NIŻEJ document.createElement i appendChild()
			newDiv.innerHTML = "<label>Wybierz kolor:</label><select id='co'>Lista kolorów<option value='#ff0000'>Czerwony</option><option value='#008000' selected='selected'>Zielony</option><option value='#000000'>Czarny</option><option value='#ffffff'>Biały</option></select>";			//innerHTML jest uważany za dośc niebezpieczny jeśli wstawiasz tylko tesk to lepiej textContent bo jak bedzie zmienna to sie nie wykona

			my_div = document.getElementById("org_div1");
			document.body.insertBefore(newDiv, my_div);
			
			var przycisk2 = document.createElement("button");
			przycisk2.id = "ZmianaKoloru";
			przycisk2.innerHTML = "Zmiana koloru";
			document.body.appendChild(przycisk2); 
				
				
			przycisk.addEventListener("click", function() {
				var wiersze = document.querySelectorAll("#lista li"); 
				var length = wiersze.length;
//				console.log(wiersze[0].checked);
				var checkbox;

				var i = length;
				while (i--)
				{
					checkbox = wiersze[i].querySelector("input[type=checkbox]"); 					
					
					if (checkbox.checked)
					{
						usunZListy(wiersze[i])
					}
				}
				
				wiersze = document.querySelectorAll("#lista li");
				if (wiersze.length == 0) {
					przycisk.remove();
					przycisk2.remove();
					newDiv.remove();
				}
			});	
			
			
			przycisk2.addEventListener("click", function() {
				var wiersze = document.querySelectorAll("#lista li"); 
				var length = wiersze.length;
				var checkbox;
				
			var e = document.getElementById("co");
			var strUser = e.options[e.selectedIndex].value;   //sprawdzić czy jest jednym z elementów listy bo moze byc atakowana

				
				var i = length;
				while (i--)
				{
					checkbox = wiersze[i].querySelector("input[type=checkbox]"); 
					
					if (checkbox.checked)
					{
						wiersze[i].style.color = strUser;
					}
				}
					
			});	
		} 
	}		
			
})();	     //PYTANIE O NAWIASY
