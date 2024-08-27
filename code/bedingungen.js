const { alert, prompt } = require('vscode-websocket-alerts');
console.clear();

// Um deinen Code auszuführen, klicke oben rechts auf den Play-Button.



//////////////////////////////////////////////////////////////////////////////
// Aufgabe 1:
// Schreibe ein Programm das zwei zahlen plus rechnen kann.
// Benutze zwei mal die prompt Funktion, mit der der Benutzer nacheinander zwei Zahlen eingeben kann.
// Versuche die Zahlen zu addieren und mit alert das Ergebnis anzuzeigen.
// 
// Es funktionier nicht, wie es soll? 
// Lies dir hier noch einmal die Beschreibung zu prompt() durch:
// https://jeggers.notion.site/JavaScript-Standard-Funktionen-4d4311a6d5354cda87c968ab9b3857dd
// Dann gucke dir den Abschnitt "Datentyp umwandeln" an.
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// Aufgabe 2:
// Modifiziere das Programm unten.
// (Mit Command + Shift + 7 kannst du die Kommentare entfernen)
// Anstatt nach dem Alter zu fragen, frage den Benutzer nach einem Passwort.
// Heiße den Benutzer nur willkommen, wenn er das richtige Passwort eingibt.
// Du kannst dir selber ein Passwort ausdenken.
//
// console.clear();
// var alter = prompt("Wie alt bist du?");
// alter = parseInt(alter);
// 
// if (alter < 18) {
//     console.log("Du bist leider noch zu jung.")
// } else {
//     console.log("Herzlich Willkommen!")
// }
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// Aufgabe 2:
// Wenn du mit Aufgabe 1 fertig bist, kannst du dort mit der Tastenkombination
// Command + Shift + 7 die Kommenate wieder hinzufügen, damit der Code nicht
// ausgeführt wird. Dann kannst du die Kommentare vor dem Code unten entfernen.
// Versuche zuerst das Programm zu verstehen und zu testen.
// Erweitere dann das Programm, sodass auch folgende Eingaben aktzeptiert werden:
//   Pferd - Säugetier
//   Flusskrebs - Schalentier
//   Weinrose - Pflanze
// 
// var tier = prompt("Gib ein tier ein.")
// if (tier == "Tiger"){
//   console.log(tier + ": Säugetier");
// }else if (tier == "Schlange"){
//   console.log(tier + ": Reptil");
// }else if (tier == "Adler"){
//    console.log(tier + ": Vogel");
// }else{
//   console.log(tier + ": Keine Informationen verfügbar")
// }
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// Aufgabe 3: (Welches ist das Maximum?)
// Lasse den benutzer mit der prompt Funktion 2 zahlen eingeben.
// Finde die größere der beiden Zahlen und zeige sie dem Nutzer über alert.
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// Aufgabe 4: (In welcher Generation wurdest du geboren?)
// Jede Generation bekommt ihren eigenen Namen.
// Menschen die zwischen 1922 und 1955 geboren wurden sind die Traditionals.
// Menschen die zwischen 1956 und 1965 geboren worden sind, gehören zu den Baby-Boomern.
// Hier sind die Namen der letzten drei Generationen:
// Generation Y: Geboren 1981 bis 1995.
// Generation Z: Geboren ab 1995 bis 2009.
// Generation Alpha: Geboren ab 2010 bis heute.
// Schreibe ein Programm, bei dem man sein Alter eingibt (über prompt())
// und anschließend mit alert() mitgeteilt bekommt,
// ob man zu Generation Y, Z oder Alpha gehört.
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// Aufgabe 5: (Kannst du das ABC?)
// Lasse den benutzer nacheinander 3 Wörter mit prompt eingeben.
// Sortiere die Wörter in alphabetischer Reihenfolge
// Tipp: Die zeicehn < und > funktioneren nicht nur bei Zahlen, sondern auch bei Strings
// Damit kannst du überprüfen,
// welches Wort bei alphabetischer sortierung vor dem anderen kommt.
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// BONUSAUFGABE:
// Porgrammiere nun einen Taschenrechner der alle 4 Grundrechenarten beherrscht
// Nutze dazu die prompt()´Funktion drei mal:
// Erste Zahl, Rechenzeichen (+-*/), Zweite Zahl
// Gebe am Schluss das Ergebnis mit alert() aus.
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////
// BONUSAUFGABE:
// Erstelle ein Programm für das Spiel "Schere - Stein - Papier"
// Benutze die prompt() Funktion zwei mal, um nacheinander zwei Worte eingegeben zu können
// Das Erste für Spieler 1, danach für Spieler 2.
// Gebe über die alert() Funktion den Sieger bekannt. (Spieler 1 oder 2).
//////////////////////////////////////////////////////////////////////////////
