# rise-to-do-rn

# React Native Expo To-Do Uygulaması

Bu basit To-Do uygulaması, React Native ve Expo kullanılarak geliştirilmiştir. Temelde, kullanıcıların görev eklemelerini, görevleri silmelerini ve tamamlandı olarak işaretlemelerini sağlar.

## Proje Kurulumu

1. **Projeyi Klonla:**
   ```bash
   git clone https://github.com/altiparmakzeynep/rise-to-do-rn
   cd rise-to-do-rn

2. **Gerekli Paketlerin Yüklenmesi:**
   ```bash
   yarn install
   ```
3. **Projenin Çalıştırılması:**
   ```bash
   expo start
   ```

## Extra Özellikler
Uygulamada ekstra olarak aşağıdaki özellikleri ekledim:

### Renkli Kategoriler
Görevleri farklı renkli kategorilere ayırmak için renkli etiketler ekledim. Bu, kullanıcılara görevleri hızlı bir şekilde gruplamalarını ve görsel olarak ayırt etmelerini sağlar.

### Cihaz Depolama Kullanımı
Görevlerinizi cihaz depolamasında saklayarak, uygulamayı kapatıp açsanız bile görevlerinizi kaybetmezsiniz. Bu özellik, kullanıcıların verilerini güvenli bir şekilde muhafaza etmelerine yardımcı olur.


## Branchler
Proje geliştirme süreci boyunca farklı görevleri ve özellikleri geliştirmek için aşağıdaki branchleri kullanıyorum:

### `styles`
Bu dalda, uygulamanın tasarımı ve stil işlemleri üzerinde çalışıyorum. Yeni özellikleri veya mevcut özellikleri geliştirmek amacıyla uygulamanın görünümünü iyileştirmek için bu dala odaklanıyorum.
### `functions`

Bu dal, uygulamanın temel fonksiyonlarını yazdığım yerdir. Yeni işlevsellik eklemek, mevcut işlevselliği geliştirmek ve kod tabanını sürdürülebilir hale getirmek amacıyla bu dalda çalışıyorum.
### `dataStructure`

Bu dalda, uygulamanın veri yapısı ve veri işlemleri üzerinde çalışıyorum. Yeni veri işleme yöntemleri eklemek, mevcut veri yapısını optimize etmek ve uygulamanın veri yönetimiyle ilgili iyileştirmeler yapmak için bu dala odaklanıyorum.


## Test Modülü

Bu proje için ayrıca birim testler de yazdım ve yazarken Jest kullandım. Testlerim temel anlamda sayfamın ve modal içeriklerimin doğru render edilip edilmemesi gibi işlevleri kapsamakta

## Testi Çalıştırmak 
```bash
yarn test
```

## Eas Update

Projemi EAS kullanarak publish ettim. QR kodlar aracılığıyla inceleyebilirsiniz.

## Uygulama Çalıştırma QR Kodları

**iOS**
<img width="307" alt="Ekran Resmi 2023-11-26 13 29 39" src="https://github.com/altiparmakzeynep/rise-to-do-rn/assets/43657446/d18d76f8-9bee-47c6-a721-814d24391a0d">

**Android**
<img width="305" alt="Ekran Resmi 2023-11-26 13 30 17" src="https://github.com/altiparmakzeynep/rise-to-do-rn/assets/43657446/4524af45-6171-49ba-ac68-c04594c1e923">

