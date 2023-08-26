import './App.css';
import NavBar from './components/NavBar';
import {useState} from "react";
import Footer from './components/Footer';
import Recommendations from './components/Recommendations';
import Products from './components/Products';
import Selected from './components/Selected';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [wishlistR, setWishlistR] = useState([]);
  const [productsArray] = useState([
    {
      id:1,
      brand:"La Roche Posay",
      pic:"https://www.apotekasrbotrade.rs/imgProducts/4842/3337872414084_1-srbotrade.jpg",
      description:"Effaclar Duo [+] korektivna gel krema koja smanjuje izraženije nepravilnosti na koži. Otčepljuje blokirane pore. Koriguje i sprečava crvene i braon mrlje na koži.",
      wishlist:0,
    },
    {
      id:2,
      brand:"Eucerin",
      pic:"https://www.apotekasrbotrade.rs/imgProducts/5561/1-eucerin-sun-oil-control-spf30-50ml-srbotrade.jpg",
      description:"Ispunjava visoke standarde za UVA i UVB zaštitu  koje definiše Cosmetics Europe. Nivoi UVA zaštite u preparatima je viši od EU preporuke. Pouzdani preparat za zaštitu od sunca za lice za masnu i kožu sklonu aknama, sa efektom uklanjanja viška sjaja do 8 sati.",
      wishlist:0,
    },
    {
      id:3,
      brand:"The Ordinary",
      pic:"https://www.metropoliten.rs/v2/wp-content/uploads/2018/11/The-Ordinary-Niacinamide-10-Zinc-1-30ml.jpg",
      description:"Niacinamide 10% + Zinc 1% serum pojačava blistavost kože, ona postaje glatka, a njena zaštitna barijera, tokom vremena, ojačana. Serum je preporučen kod mašćenja kože, zapušenih pora, nepravilne teksture kože, umornog izgleda i dehidrirane kože. Pogodan je za sve tipove kože.",
      wishlist:0,
    },
    {
      id:4,
      brand:"Avene",
      pic:"https://www.apotekasrbotrade.rs/imgProducts/8597/avene-tolerance-krema-40ml-srbotrade%20(1).jpg",
      description:"Visoko podnošljiva nega, proizvedena Sterile Cosmetics tehnologijom, ne sadrži mirise i konzervanse i ublažava iritaciju, crvenilo, peckanje, zatezanje kože.Umiruje kožu u samo 30 sekundi zahvaljujući patentiranom ultra umirujućem djelatnom sastojku D-Sensinose. Hidrira kožu do 24h. Obnavlja kožnu barijeru u roku od 48 sati zahvaljujući svojoj 100% biomimetičnosti (formulacija slična sastavu koži).",
      wishlist:0,
    },
    {
      id:5,
      brand:"Avene",
      pic:"https://www.apotekasrbotrade.rs/imgProducts/6425/avene-a-oxitive-krema-30ml-srbotrade.jpg",
      description:"Hronoaktivna provitaminska anti-age nega protiv prvih bora, oksidativnog stresa i zagađenja. Antioksidativni zaštitni kompeks [pro-vitamin E (pre-tokoferil) i pro-vitamin C (askorbil-glukozid)] deluje tokom dana i štiti kožu od oksidativnog stresa, odlaže prve znakove starenja i pojačava sjaj kože.",
      wishlist:0,
    },
    {
      id:6,
      brand:"La Roche Posay",
      pic:"https://www.apotekasrbotrade.rs/imgProducts/4852/3433422408159_1-srbotrade.jpg",
      description:"Mikro-eksfolijativni adstrigentni losion. Sužava pore. Bori se protiv zapušenosti. Smanjuje i otčepljuje pore, zahvaljujući kombinaciji LHA aktivnih sastojaka koji čiste kožu i deluju seboregujeciono i eksfolijativno.Pore su smanjene, tekstura kože je finija i ujednačenija.",
      wishlist:0,
    },
    {
      id:7,
      brand:"Geek and Gorgeous",
      pic:"https://www.skintemple.rs/uploads/store/products/images/geekgorgeous-a-game-10-serum-sa-retinalom-30ml61f320328f017.jpg",
      description:"Svilenkasti i lagani serum, tipa emulzije, sa visokom koncentracijom retinala (0.1%), koji deluje protiv znakova starenja kože.Kad se retinal transformiše, on pomaže ćelijama kože da proizvode više kolagena i drugih strukturnih elemenata, čineći kožu čvršćom i elastičnijom. Retinal ubrzava proces regeneracije gornjih slojeva kože, čineći kožu glatkom i ujednačenijom. A-Game je izuzetan proizvod protiv bora, ali je takođe koristan za ujednačavanje tena (fleke) i kao pomoć koži sklonoj aknama.",
      wishlist:0,
    },
    {
      id:8,
      brand:"Key Molecule",
      pic:"https://www.unnacentar.com/img/portfolio/256.jpg",
      description:"Kako bi kozmetički proizvodi ostvarili svoj maksimalan efekat neophodna je adekvatna priprema kože lice koja se postiže dobrim i efikasnim čišćenjem. Koža (posebno lica) je svakodnevno izložena velikom broju različitih hemijskih agenasa, bilo da su u pitanju agensi iz životne sredine ili supstance iz kozmetičkih proizvoda.",
      wishlist:0,
    },
    {
      id:9,
      brand:"Eucerin",
      pic:"https://www.apotekasrbotrade.rs/imgProducts/5556/1-eucerin-sun-krema-spf50-50ml-srbotrade.jpg",
      description:"Eucerin Krema za zaštitu osetljive kože od sunca SPF 50+ je preparat za zaštitu kože lica od sunca za svaki dan koji štiti i umiruje osetljivu i suvu kožu. Napredna spektralna tehnologija kombinuje fotostabilne UVA/UVB filtere¹ širokog sprektra za visoku UV zaštitu sa Likokalkonom A koji neutrališe slobodne radikale koje izazivaju UV zraci i vidljiva svetlost visoke energije (HEVIS).",
      wishlist:0,
    },
    {
      id:10,
      brand:"Key Molecule",
      pic:"https://www.unnacentar.com/img/portfolio/260.jpg",
      description:"Hydra fluid je proizvod tipa emulgela (ima karakteristike emulzije i gela), te ova formulacija omogućava adekvatnu hidrataciju što je karakteristično za formulacije tipa emulzija, a sa druge strane je dovoljno lagana da ne izaziva osećaj težine na koži, brzo se upija i ne ostavlja mastan i lepljiv film, što je karakteristično za formulacije tipa gela.",
      wishlist:0,
    }
  ]);

 const [searchCriteria, setSearchCriteria] = useState("");

 function search(criteria){
  setSearchCriteria(criteria);
 }

 function add(id) {
  for (var i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === id) {
      productsArray[i].wishlist = 1;
    }
  }
  var niz = productsArray.filter((r) => r.wishlist === 1);
  setWishlistR(niz);
}
function remove(id) {
  for (var i = 0; i < productsArray.length; i++) {
    if (productsArray[i].id === id) {
      productsArray[i].wishlist = 0;
    }
  }
  var niz = productsArray.filter((r) => r.wishlist === 1);
  setWishlistR(niz);
}

 return(
  <div className="App">
    <BrowserRouter>
  <NavBar search={search}/>

  <Routes>
  <Route path="/" element={<Recommendations/>}></Route>
  <Route
    path="/products"
    element={
    <Products
      products={productsArray}
      criteria={searchCriteria}
      add={add}
    ></Products>
    }>
    </Route>
    <Route
    path="/wishlist"
    element={
    <Selected
      criteria={searchCriteria}
      products={wishlistR}
      remove={remove}
    >
    </Selected>
    }></Route>
  
    </Routes>
  <Footer />
  </BrowserRouter>
</div>
 )
}

export default App;
