/*
A laboratory is testing how atoms react in ionic state during nuclear fusion. They introduce different elements with Hydrogen in high temperature and pressurized chamber. Due to unknown reason the chamber lost its power and the elements in it started precipitating
Given the number of atoms of Carbon [C],Hydrogen[H] and Oxygen[O] in the chamber. Calculate how many molecules of Water [H2O], Carbon Dioxide [CO2] and Methane [CH4] will be produced following the order of reaction affinity below

1. Hydrogen reacts with Oxygen   = H2O
2. Carbon   reacts with Oxygen   = CO2
3. Carbon   reacts with Hydrogen = CH4

FOR EXAMPLE:
(C,H,O) = (45,11,100)
return no. of water, carbon dioxide and methane molecules
Output should be like:
(5,45,0)
*/

interface MolData {
  numOfMol: number,
  updatedAtom1: number,
  updatedAtom2: number
}

function calcMolecule(
  atom1: number,
  atom2: number,
  atom1PerMol: number,
  atom2PerMol: number
): MolData {
  const numOfMol = Math.min(
    Math.floor(atom1 / atom1PerMol),
    Math.floor(atom2 / atom2PerMol)
  );
  
  const updatedAtom1 = atom1 -= (numOfMol * atom1PerMol);
  const updatedAtom2 = atom2 -= (numOfMol * atom2PerMol);

  return { numOfMol, updatedAtom1, updatedAtom2 };
}

function getMoleculesAmounts(
  carbon: number,
  hydrogen: number,
  oxygen: number
): number[] {
  let result: MolData = calcMolecule(hydrogen, oxygen, 2, 1);
  const water: number = result.numOfMol;
  hydrogen = result.updatedAtom1;
  oxygen = result.updatedAtom2;

  result = calcMolecule(oxygen, carbon, 2, 1);
  const carbonDioxide: number = result.numOfMol;
  oxygen = result.updatedAtom1;
  carbon = result.updatedAtom2;

  result = calcMolecule(hydrogen, carbon, 4, 1);
  const methane: number = result.numOfMol;
  return [water, carbonDioxide, methane];
}
