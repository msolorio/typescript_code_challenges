function calcMolecule(atom1, atom2, atom1PerMol, atom2PerMol) {
    const numOfMol = Math.min(Math.floor(atom1 / atom1PerMol), Math.floor(atom2 / atom2PerMol));
    const updatedAtom1 = atom1 -= (numOfMol * atom1PerMol);
    const updatedAtom2 = atom2 -= (numOfMol * atom2PerMol);
    return { numOfMol, updatedAtom1, updatedAtom2 };
}
function getMoleculesAmounts(carbon, hydrogen, oxygen) {
    let result = calcMolecule(hydrogen, oxygen, 2, 1);
    const water = result.numOfMol;
    hydrogen = result.updatedAtom1;
    oxygen = result.updatedAtom2;
    result = calcMolecule(oxygen, carbon, 2, 1);
    const carbonDioxide = result.numOfMol;
    oxygen = result.updatedAtom1;
    carbon = result.updatedAtom2;
    result = calcMolecule(hydrogen, carbon, 4, 1);
    const methane = result.numOfMol;
    return [water, carbonDioxide, methane];
}
//# sourceMappingURL=1-calc-molecules.js.map