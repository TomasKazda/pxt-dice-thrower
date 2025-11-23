# Zadání projektu: Digitální hrací kostka na Micro:bit

## Cíl
Seznámit se se základní syntaxí jazyka TypeScript a prostředím Micro:bit MakeCode prostřednictvím jednoduché aplikace simulující digitální hrací kostku. Budete vytvářet funkce k obsluze událostí a používat globální proměnné pro řízení běhu programu.

## Popis aplikace
Aplikace funguje jako digitální kostka s nastavitelným počtem stěn (od 2 do 99).  
- Tlačítko A snižuje počet stěn kostky (minimálně 2).  
- Tlačítko B zvyšuje počet stěn kostky (maximálně 99).  
- Zatřesení Micro:bitem způsobí "hození kostkou" – náhodné zobrazení hodnoty od 1 do nastaveného maxima.  
- Po hodu se kostka zablokuje a další zatřesení zobrazí pouze poslední hozené číslo, nikoliv nový hod.  
- Odblokování a možnost dalšího hodu zajistí stisknutí dotykového tlačítka "logo".  

## Uživatelská zkušenost (UX) a rozšíření WhaleySans Font
- Nejprve použijte `basic.showNumber()` pro zobrazení čísel a pozorujte, co se děje při zobrazení dvouciferných čísel (číslo "scroluje" po displeji).  
- Poté nainstalujte rozšíření **WhaleySans Font**, které umožňuje zobrazit dvě cifry zároveň vedle sebe, čímž zlepšuje čitelnost.  
- Postup instalace rozšíření:  
  1. V editoru klikněte na tlačítko **Extensions** v levém menu.  
  2. Do vyhledávacího pole zadejte `WhaleySansFont`.  
  3. Vyberte rozšíření WhaleySansFont z výsledků a klikněte na **Add**.
  4. Nyní lze používat `whaleysans.showNumber();`

## Postup při tvorbě řešení
1. Použijte výchozí kód, který obsahuje propojení událostí s příslušnými obslužnými funkcemi. (Jsou to poslední řádky vašeho programu - pod ně už nepište žádný kód!)
```js
    input.onButtonPressed(Button.A, handleDec);
    input.onButtonPressed(Button.B, handleInc);
    input.onLogoEvent(TouchButtonEvent.Pressed, handleUnblock);
    input.onGesture(Gesture.Shake, handleShake);
```
2. Definujte konstantu: `const maxValue: number = 99;`
Toto umožní jednoduchou konfiguraci maximální hodnoty kostky na jednom místě v programu.  
3. Vytvořte globální proměnné:
    - `throwBlocker` (boolean) – blokuje další hod po prvním hodu.  
    - `diceMax` (number) – aktuální počet stěn kostky (výchozí hodnota 6).  
    - `diceValue` (number) – poslední hozené číslo.  
4. Implementujte následující funkce:
    - `handleDec` – sníží `diceMax` o 1, minimálně na 2, a zobrazí nové číslo pomocí WhaleySans. (`diceMax -= 1`)
    - `handleInc` – zvýší `diceMax` o 1, maximálně na `maxValue`, a zobrazí nové číslo pomocí WhaleySans. (`diceMax += 1`)
    - `handleShake` – pokud není kostka zablokovaná (`throwBlocker` je false), vygeneruje náhodné číslo mezi 1 a `diceMax`, zobrazí ho a nastaví blokaci hodu (`throwBlocker` na true). Pokud je už zablokována, znovu zobrazí poslední číslo.  
    
    (`diceValue = randint(1, diceMax);`)
    - `handleUnblock` – odblokuje kostku (nastaví `throwBlocker` na false) a vymaže displej. 
    
    (`basic.showString("-", 0);`)

### Syntaxe anonymní dynamické funkce
```js
const nazevOdkazu = () => {
    //kód funkce
 }
```