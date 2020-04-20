# hw2
 JavaScript Dom-Nesne-Fonksiyon
! [UzaktanLab1-Gif](hw2/outputs/2.hafta.gif)

# Dinamik Eleman Ekleme
! [ 1-JavaScript kodu içerisinde 2 tane fonksiyon oluşturuldu.]
! [ Biri Element eklemek için oluşturulan fonksiyon diğeri Element Kaldırmak için oluşturulan fonksiyondur.]
! [2-Element eklemede değişken tanımlanır. Bunun için “var” tag kullanılır. “Var” değer atamadan sadece değişken oluşturma işleminde Variable Declaration denilmektedir. ]
3-Daha sonra bu oluşturulan değişkene DOM yapısında olan (document.createElement()) fonksiyonu ile Belge nesnesi temsil eden web sayfanızı oluşturmada “document” ifadesi kullanılır.Bir HTML sayfasındaki herhangi bir öğeye erişmek istiyorsanız, her zaman document nesnesi ile  erişmeye çalışılır.
4-Html element eklemek içinde  “createElement “ ifadesi kullanılır.
5-Tekrar bir değişken oluşturarak buna da document.createTextNode metodu ifadesi ile yeni bir TEXT_NODE (metin düğümü) oluşturulması sağlanır.
6-createTextNode metodu ile oluşturulan bir TEXT_NODE elementinin appendChild metodu ile bir paragrafa eklenmesi sağlanmış olunur.
7-Oluşturulan liste yapısının sonuna eklemek için document.getElementById metodu ile, id özelliği belirtilen elementin referansının alınmasını sağlar. Aynı id kimliğine sahip başka bir element olması durumunda sadece ilk elementi verir. Diğerlerine erişim sağlanamaz. Ve ekleme işlemi gerçekleştirilmiş olunur.
8-İkinci fonksiyon ise oluşturulan dinamik elementin kaldırılması için oluşturulur.
9-Burada yine “var” ile değişken oluşturuldu. Kaldırılması için kullanılan  RemoveChild () yöntemi, belirtilen öğenin belirtilen bir alt düğümünü kaldırır. Kaldırılan düğümü Düğüm nesnesi olarak veya düğüm yoksa null değerini döndürür .
10-Bu değişkende listedeki olanları silerek teker teker kaldırılmasını sağlar.Bunun içinde list.childNodes[0] ifadesi kullanılır.
11-Son olarak Html kodu içerisinde buton oluşturup JavaScript kodunda oluştrulan kaldır ve oluştur fonksiyonları çağrılır.Ve dinamik kod hazır hale getirilir.
