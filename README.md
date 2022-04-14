# ECommerce-v2-React-Native
- React-native navigation kullanarak bottom tab navigaton ve stack native navigation yapısını kullanarak sayfalar arası gezinme işlemini yaptım.
-Bazı sayfalarda style components bazı sayfalarda flex tasarım kullandım.
-React Native Element component paketinden yararlanarak bazı componentleri ordan kullandım.
-Redux yapısını da kullanmak istiyordum fakat ekstradan bir sayfa tasarlamadığım için kullanacak yer cok bulamadım açıkçası.

Klasör Yapısı:

src > helper  => AsyncStorage için
src > navigations => Stack navigation ve Tab navigation için
src > screens => Sayfalar için
src > store =>ContextAPI'lar için
src > styles =>style componentler için


Account sayfası:

- Kullanıcı email kısmına herhangi bir veri girmemişse buton pasif olarak kalıyor.
-Locale kısmında yer alan bilgileri contextAPI yapısıyla çektim.
-Formik paketini kullanarak her bir input için useState hook'unu kullanmak yerine Formikle bunu halletmiş oldum.

Profile Sayfası:

-Account kısmında girilmiş olan veriler navigation yardımıyla account sayfasından profil sayfasına gelmiş oldu.
-Profile kısmında bulunan locale kısmı yine değiştirilebilir ve değişiklik aynı zamanda locale kısmında yer alan bilgiyi değiştirecek şekilde yapıldı.

List Sayfası:

-Burda listelenecek ürünleri hazır API'den çektim ve burda da contextAPI yapısı kullandım. Eğer sepette herhangi bir ürün yoksa sepet boş yazısı cıkıyor.
-Sepete herhangi bir ürün eklendiğinde Ürünlerin fiyatı çıkıyor. Aynı zamanda yanındaki butondan ürünler silinebiliyor.
-Ek olarak sepet kısmında AsyncStorage paketini kullandım ve her cihazda en son sepette ne kadar ürün varsa uygulamayı kapatsanız dahi uygulamaya tekrar girdiğinizde ürünlerin fiyatı en son ki haliyle kalıyor.


![alt text](https://github.com/a-aksakal/ECommerce-v2-React-Native/blob/main/ScreenShots/AccountDisabledButton.PNG?raw=true)
![alt text](https://github.com/a-aksakal/ECommerce-v2-React-Native/blob/main/ScreenShots/AccountFillText.PNG?raw=true)
![alt text](https://github.com/a-aksakal/ECommerce-v2-React-Native/blob/main/ScreenShots/Account.PNG?raw=true)
![alt text](https://github.com/a-aksakal/ECommerce-v2-React-Native/blob/main/ScreenShots/EmptyCart.PNG?raw=true)
![alt text](https://github.com/a-aksakal/ECommerce-v2-React-Native/blob/main/ScreenShots/Home%26Cart.PNG?raw=true)
<img src="https://github.com/a-aksakal/ECommerce-v2-React-Native/blob/main/ScreenShots/AccountDisabledButton.PNG" alt="a" width="100"/>
