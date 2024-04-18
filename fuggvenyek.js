export function szamjegyekOsszeadasa(szam) {
  let osszeg = 0;
  if (szam < 0) {
    return "Nem lehet negativ!";
  }
  if (szam % 1 !== 0) {
    return "Egész számnak kell lennie!";
  }
  while (szam > 0) {
    let szamjegy = szam % 10;
    osszeg += szamjegy;
    szam = Math.floor(szam / 10);
  }
  return osszeg;
}
