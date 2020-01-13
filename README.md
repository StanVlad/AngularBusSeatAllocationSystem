Proiect realizat folosind Andular CLI.

Website-ul este structurat pe componente angular, fiecare componenta avand fisiere html si css customizate. Clasele aferente cuprind metodele necesare. Cateva detalii tehnice:

- redirectionarea din butoane se face cu router.navigate
- fisierul app-routing.module.ts contine rutele disponibile
- functionalitatea login/register creata cu ajutorul main.service.ts si prin metodele aferente clasei componentei respective
- la cumpararea biletului de autobuz, transmiterea orasului destinatie din componenta anterioara catre componenta responsabila de cumparare se face prin @Import()
- buton ce trimite catre pagina de selectare a orasului de plecare si a destinatiei, de unde mai departe se selecteaza ora de plecare din cele disponibile si apoi tipul de bilet cu/fara reducere
- site-ul mai cuprinde si o pagina de descriere a companiei fictive si un header personalizat, cu ribbon-uri de butoane
