export default function checkPassStrength(password, selectedOptions = []) {
  if (!password) throw new Error('There is no password to check');
  if (selectedOptions.length === 0) throw new Error('There ain`t selected options');

  const sOL = selectedOptions.length;
  const pL = password.length;
  const sOFIS = selectedOptions.findIndex((item) => item === 'symbols');

  let passStrength = '';

  if (pL <= 7) passStrength = sOFIS !== -1 ? 'weak' : 'too weak';
  if (pL > 7 && pL < 12) {
    if (sOL <= 2 && sOFIS === -1) passStrength = 'weak';
    if (sOL >= 2 || sOFIS !== -1) passStrength = 'medium';
  }
  if (pL >= 12) {
    if (sOL <= 2 && sOFIS === -1) passStrength = 'medium';
    if (sOL >= 3 || sOFIS !== -1) passStrength = 'strong';
  }
  if (pL >= 15 && (sOL >= 2 || sOFIS !== -1)) passStrength = 'strong';
  return passStrength;
}
