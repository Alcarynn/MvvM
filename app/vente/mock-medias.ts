import { Media } from './Media';
import * as Vente from './vente';
export const MEDIAS: Media[] = [
  new Vente.Book(1,'Angular Full Ed',100),
  new Vente.Cd(2,'Angular en audio',30),
  new Vente.Book(3,'Angular le livre',10),
  new Vente.Book(4,'angulaireun livre google trad',100),
  new Vente.Book(5,'python le livre',25),
  new Vente.Book(6,'C# la bible',35),
  new Vente.Book(7,'Java pour les nulls',10),
  new Vente.Cd(8,'Python audio record',10),
  new Vente.Book(9,'winnie l\'ourson',2),
  new Vente.Book(10,'ts la transpilation',100)
];