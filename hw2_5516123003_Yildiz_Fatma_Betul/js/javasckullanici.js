function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

var kuladi, sifre; // değişkenlerimizi oluşturuyoruz


if (txtIsim != "") // kullanıcı adı boş değerden farklı ise alltaki kodları yapacak değilse boş değer girilemez yazacak
{
    if (txtIsim == "can" && txtSifre == "aşık") // kullanıcı adı can ve şifre aşık ise  alltaki ekrana can hoşgeldiniz yazacak
    {
        document.write("Sayın " + txtIsim+ " Sisteme Hoşgeldiniz.");
    }
    else
    {
        alert("Sayın " + txtSifre+ " Giriş Yetkiniz Yok."); // can dışında veri girilirse giriş yetkiniz yok yazacak
    }
}
else 
{
alert("null BOŞ DEĞER GİRİLEMEZ");
}