import { szamjegyekOsszeadasa } from "./fuggvenyek.js";
export function fuggvenyekTeszt() {
  const teszLISTA = [
    { n: 237.6, vart: "Egész számnak kell lennie!" },
    { n: 999, vart: 27 },
    { n: 1565, vart: 17 },
    { n: -1236, vart: "Nem lehet negativ!" },
    { n: 0, vart: 0 },
    { n: 123456789, vart: 45 },
    { n: 1, vart: 1 },
    { n: 2, vart: 2 },
    { n: 3, vart: 3 },
    { n: 4, vart: 4 },
    { n: 5, vart: 5 },
    { n: 6, vart: 6 },
    { n: 7, vart: 7 },
    { n: 8, vart: 8 },
    { n: 9, vart: 9 },
    { n: Number.MAX_SAFE_INTEGER, vart: 76 },
    { n: Number.MIN_SAFE_INTEGER, vart: "Nem lehet negativ!" },
  ];
  teszLISTA.forEach((tesztEset, index) => {
    let eredmeny = szamjegyekOsszeadasa(tesztEset.n);
    console.assert(
      tesztEset.vart === eredmeny,
      `%o`,
      `n: ${tesztEset.n} vart: ${tesztEset.vart} kapott: ${eredmeny}`,
      `Híbás a ${index + 1}. tesztnél!`
    );
  });
}
