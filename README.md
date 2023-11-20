# Zadání testu Frontend Junior v Regiojetu

- forkněte si zde uvedený repozitář (<https://github.com/Vylda/junior>)
- proveďte úkoly podle zadání v následující kapitole
  - výsledky úkolů nechte v odpovídajících složkách
- po dokončení úkolů (dokončete do **sedmi dní** od zadání)
  - soubory nahrejte na svůj Gitlab / Github a udělte přístup uživateli Vylda (<vilem.lipold@seznam.cz>)
  - dokončení mi oznamte na e-mail <vilem.lipold@studentagency.cz>
  - pokud nezvládnete všechny úkoly, nevadí, na git nahrejte, co jste stihli
  - v případě problémů a dotazů volejte na +420 606 753 180 (8.00 – 21.00)

## Úkoly

### 1. úkol - Typescript
**Pracujte ve složce `./tasks/task_1`**

Vytvořte typ (název typu začíná velkým písmenem T, dodržujte PascalCase) pro objekt v souboru `typescript.ts`. Zaměřte se zejména na:
- vlastnosti
- vstupy metod
- návratové hodnoty metod

Typ zapište do stejného souboru, jako je objekt.

### 2. úkol - Pure CSS
**Pracujte ve složce `./tasks/task_2`**. kterou si vytvoříte.

Použijte nejnovější CSS technologie v čistém CSS. Jednotlivé prvky rozlište barevným pozadím. CSS kód vkládejte do samostatných *.css souborů (ne do HTML souborů).

#### 1. část
Vytvořte novou HTML stránku, v níž bude element široký a vysoký na celou stránku (včetně mobilních zařízení), text v elementu (Student Agency) bude svisle i vodorovně zarovnán na střed.

#### 2. část
Vytvořte novou HTML stránku, v níž se budou elementy (s textem RegioJet), opakovat na řádcích (na řádku budou alespoň tři tyto elemety). Jejich šířka bude minimálně 30 % šířky stránky a mezera mezi nimi bude dvojnásobek výšky znaků rootu. Pokud je těchto elementů více, budou se skládat do dalších řádků. Pokud bude elementů na řádků méně než 3, zarovnají se elementy na střed s mezerami vpravo i vlevo od nich (centered design).

#### 3. část
Vytvořte novou HTML stránku, v níž bude právě jeden element `<main />`. V něm bude pět dalších prvků (potomků). Jejich rozložení bude takové (s ohledem na mezery mezi nimi), aby první potomek zabral ½ šířky rodiče, druhý a třetí prvek zabral ¼ šířku rodiče. Tyto prvky budou na prvním řádku. Následuje řádek se dvěma prvky, každý z nich zabere polovinu prostoru rodiče. Mezery mezi všemi prvky (svisle i vodorovně) musí mít velikost základní (root) výšky znaku; rohy potomků musí být zaoblené s poloměrem 25 % aktuální výšky znaku prvku.

### 3. úkol - Pure JS
**Pracujte ve složce `./tasks/task_3`**. kterou si vytvoříte.

#### 1. část
Vytvořte nový JS soubor (numbers.js), v němž co nejvíce efektivně (s ohledem na zdroje a čas) vypíšete celá čísla 1 - 10.

#### 2. část
Vytvořte soubor `Person.js` a v něm JS třídu podle pravidel ES6 a vyšších. Tato třída se bude jmenovat Person. Ve svém konstruktoru přijme jméno a věk. Pokud její instanci vypíšu v konzoli, vypíše se `Jmenuji se ${jmeno} a je mi ${vek} let`.

##### Příklad posledních dvou řádků

```js
const person = new Person('Petr', 25);
console.log(`${person}`); // Jmenuji se Petr a je mi 25 let
```

### 4. úkol - React
- používejte CSS moduly s Tailwindem nebo pure CSS (viz komponenta Home)
- pro komponenty používejte atomický design (nepoužívejte atoms, molecules, organisms, templates, pages, použijte spíše složky pages, shared a components)
- subkomponenty vkládejte do složky components (např. UserList/components/UserCard/UserCard.tsx) atp.

#### 1. část
Nainstalujte si aplikaci podle postupu v sekci [Instalace](#instalace) níže a a spusťe si vývojářský server.

#### 2. část
Do komponenty `Home` přidejte komponentu `<Button />` ve variantě *secondary*. Toto tlačítko bude obsahovat ikonu (komponenta `<Icon />`), která bude zobrazovat značku pro download (`iconName="download"`).

#### 3. část
Po kliknutí na na tlačítko se stáhnou data z endpointu [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) a a získaná data se vykreslí do bloků, které budou obsahovat jejich jméno, příjmení, e-mail a telefonní číslo. Dále blok uživatele bude obsahovat odkaz na mapy.cz, který bude otevírat mapu s polohou uživatele (lat, lng). URL odkazu na mapy sestavte podle šablony `https://mapy.cz/turisticka?source=coor&id=${lng}%2C${lat}&x=${lng}&y=${lat}z=16`.

#### Instalace

 ```shell
 npm install
 ```

#### Důležité příkazy
- `npm start` - nastarování vývojového serveru (vč. watch) s podporou https (viz [cert readme](./cert/readme.md), nutno potvrdit varování prohlížeče o nedůvěryhodném certifikátu), kontrola ts a css souborů
- `npm run build` - build produkčních souborů do složky `./dist`, minimalizace, kontrola js, ts a css souborů
- `npm run preview` - build a preview produkční aplikace na localhostu,
- `npm run lint` - kontrola js a css souborů podle produkční konfigurace
- `npm run eslint` - kontrola js a ts souborů podle daných pravidel
- `npm run eslint` - kontrola ts souborů na správnost typescriptu
- `npm run stylelint` - kontrola css souborů podle daných pravidel
