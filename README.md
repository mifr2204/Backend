I detta repository har jag skapat en enkel REST API med Express och EJS 
Jag har använt Sqlite3 som databas. 
Funktionalitet för CRUD finns

Apiet använder port 3000

Länk
Apiet finns live på: https://backendm1.azurewebsites.net/

Installation och databas
Sqlite3 används som databas av APIet. Klona ner källkodsfilerna, kör kommandona: npm install sedan node server.js 

install.js skapar:

Tabell:  workplaces 	
Fält:
id (INTEGER), companyname (TEXT), location (TEXT), startdate(DATE), enddate (DATE), title (TEXT), description (TEXT), timestamp (TIMESTAMP)

Användning
Hur man nå APIet:

Metod	Ändpunkt	    Beskrivning
GET	    /workplaces	    Hämtar alla tillgängliga arbetsplatser.
POST	/workplaces	    Lagrar en ny arbetsplats.
PUT	    /workplaces/:ID	Uppdaterar en arbetsplats. 
DELETE	/workplaces/:ID	Raderar en arbetsplats.


Ett arbetsplats-objekt returneras/skickas som JSON med följande struktur:

{
   "companyname": "Frösunda",
   "location": "Nässjö",
   "startdate": "2010-01-01",
   "enddate": "2016-02-01",
   "title": "Personlig assistent/teamleader",
   "description": "Vara hos olika kunder och hjälpa dom i vardagen, planera schema med mera"
}