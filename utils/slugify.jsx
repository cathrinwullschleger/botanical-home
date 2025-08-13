export default function slugify(text) {
  return text
    .toString() // sicherstellen, dass es ein String ist
    .toLowerCase() // alles klein schreiben
    .trim() // führende und trailing spaces entfernen
    .replace(/ä/g, "ae") // Umlaute ersetzen
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .normalize("NFKD") // Sonderzeichen normalisieren
    .replace(/[\u0300-\u036f]/g, "") // Akzente entfernen
    .replace(/[^a-z0-9]+/g, "-") // alles andere durch Bindestrich ersetzen
    .replace(/^-+|-+$/g, "") // führende und trailing Bindestriche entfernen
    .replace(/--+/g, "-"); // doppelte Bindestriche zusammenführen
}
