let beloeb = 100;

momsCalc(beloeb);

function momsCalc(beloeb, moms = "25") {
  let result = beloeb * (moms / 100 + 1);
  console.log(result);
}
