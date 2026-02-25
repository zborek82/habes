# Obrazy Strony

W tym katalogu (`src/assets/images`) umieść pliki graficzne dla swojej strony.

## Jak dodać zdjęcie?

1. Wgraj plik zdjęcia (np. `moje-zdjecie.jpg`) do tego katalogu.
2. Otwórz plik `src/constants.ts`.
3. Zaimportuj zdjęcie na górze pliku:
   ```typescript
   import mojeZdjecie from './assets/images/moje-zdjecie.jpg';
   ```
4. Przypisz zaimportowane zdjęcie do odpowiedniej stałej w obiekcie `IMAGES`:
   ```typescript
   export const IMAGES = {
     // ...
     HERO_BG: mojeZdjecie,
     // ...
   };
   ```
