+++
template = "article.html"
title = "صفحة العرض التوضيحي"
[extra]
archive = "هذه الصفحة، في الواقع، ليست مؤرشفة، مما يعني أنها ستتلقى تحديثات المحتوى."
trigger = "تحتوي هذه الصفحة على بلاك جاك ومومسات، ونكات سيئة مثل هذه النكتة."
disclaimer = """
- يتم تنفيذ جميع الحيل في هذه الصفحة من قبل فتيان المختبر، لا تجرب ذلك في المنزل
- لا تعرض نفسك لدرجة حرارة 4000 درجة كلفن
- لا تتخذ موقف التقديم المرافقة الحزبية
- لا تتفاعل مع الأسبستوس وصخور القمر
"""
+++

يمكن أن يكون النص **بخط غامق**، أو _أحرف كبيرة_، أو ~~ يتوسطه خط~~.

[رابط لصفحة أخرى](@/demo/page.ar.md).

يجب أن تكون هناك مسافات بيضاء بين الفقرات.

نوصي بتضمين ملف README، أو ملف يحتوي على معلومات حول مشروعك.

# العنوان ١

هذه فقرة عادية تلي رأس الصفحة. Codeberg هي منصة استضافة أكواد للتحكم في الإصدار والتعاون. تتيح لك وللآخرين العمل معاً على المشاريع من أي مكان.

## العنوان ٢

> هذا اقتباس مجمّع بعد رأس الصفحة.
>
>> عندما يكون الشيء مهمًا بما فيه الكفاية، فإنك تقوم به حتى لو لم تكن الاحتمالات في غير صالحك.

### العنوان ٣

```js
// كود جافا سكريبت مع تمييز بناء الجملة
var fun = function lang(l) {
  dateformat.i18n = require("./lang/" + l);
  return true;
};
```

```ruby
# كود روبي مع تمييز بناء الجملة
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### العنوان ٤

- هذه قائمة غير مرتبة تتبع رأساً.
- هذه قائمة غير مرتبة تتبع رأساً.
- هذه قائمة غير مرتبة تتبع رأساً.

##### العنوان ٥

1.  هذه قائمة مرتبة تلي رأس القائمة.
2.  هذه قائمة مرتبة تلي رأس القائمة.
3.  هذه قائمة مرتبة تلي رأس القائمة.

###### العنوان ٦

| head1        | head two          | three |
| :----------- | :---------------- | :---- |
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

## هناك قاعدة أفقية أسفل هذا.

---

## فيما يلي قائمة غير مرتبة:

- Item foo
- Item bar
- Item baz
- Item zip

## وقائمة مرتبة:

1. Item one
2. Item two
3. Item three
4. Item four

## وقائمة متداخلة:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

## فيما يلي مربعات الاختيار:

- [ ] Milk
- [x] Eggs
- [x] Flour
- [ ] Coffee
- [x] Combustible lemons

### نفس الشيء ولكن تفاعلية

<ul>
<li><input type="checkbox"> Milk</li>
<li><input checked="" type="checkbox"> Eggs</li>
<li><input checked="" type="checkbox"> Flour</li>
<li><input type="checkbox"> Coffee</li>
<li><input checked="" type="checkbox"> Combustible lemons</li>
</ul>

### مع نوع الراديو

<ul>
<li><input type="radio" name="test"> Milk</li>
<li><input type="radio" name="test"> Eggs</li>
<li><input type="radio" name="test"> Flour</li>
<li><input checked="" type="radio" name="test"> Coffee</li>
<li><input type="radio" name="test" disabled=""> Combustible lemons</li>
</ul>

## صورة صغيرة

{{ image(url="https://codeberg.org/Codeberg/Design/raw/branch/main/logo/icon/png/codeberg-logo_icon_blue-64x64.png", alt="Codeberg icon", transparent=true, no_hover=true) }}

## صورة كبيرة

{{ image(url="https://codeberg.org/Codeberg/Design/raw/branch/main/logo/horizontal/png/codeberg-logo_horizontal_blue-850x250.png", alt="Codeberg horizontal", transparent=true, no_hover=true) }}

## يمكن استخدام قوائم التعريف مع صيغة HTML.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
يجب ألا تلتف كتل التعليمات البرمجية الطويلة ذات السطر الواحد. يجب أن يتم تمريرها أفقيًا إذا كانت طويلة جدًا. يجب أن يكون هذا السطر طويلًا بما يكفي لتوضيح ذلك.
```

```
العنصر الأخير
```

## إضافي

حسنًا الآن بعد أن انتهت الصفحة التجريبية العامة (الموسعة قليلًا) ~~~ جيكل~~~ زولا، يمكننا الآن الوصول إلى الأشياء المخصصة، والتي صدقوني، إنها رائعة.

😭😂🥺🤣❤️✨🙏😍🥰😊

### الرموز القصيرة

يوفر Duckquill بعض [الرموز القصيرة] (https://www.getzola.org/documentation/content/shortcodes/) المفيدة التي تبسط بعض المهام.

#### الصورة

تأتي الصور بشكل افتراضي مزودة بتصميم، مثل الزوايا المستديرة والظل. لضبطها، يمكنك استخدام الرموز القصيرة مع تركيبات متغيرة مختلفة.

المتغيرات المتاحة هي:

- 'URL': عنوان URL للصورة.
- 'URL': عنوان URL لنسخة مضغوطة من الصورة، يمكن فتح النسخة الأصلية بالنقر على الصورة.
- 'Alt': النص البديل، كما لو كان النص داخل قوسين مربعين في Markdown.
- 'كامل': يفرض أن تكون الصورة/الفيديو بالعرض الكامل.
- "بكسل": يستخدم خوارزمية الجار الأقرب للقياس، وهي مفيدة للحفاظ على وضوح الصورة/ الفيديو بالبكسل.
- 'شفاف': يزيل الزوايا المستديرة والظل، مفيد للصور الشفافة.
- 'لا_تحريك': يزيل التكبير عند التحويم.

يجب أن تكون المتغيرات مفصولة بفاصلة وأن تكون داخل الأقواس.

```jinja2
{{/* image(url="image.png", alt="This is an image" no_hover=true) */}}
```

{{ image(url="https://i1.theportalwiki.net/img/2/23/Ashpd_blueprint.jpg", alt="Portal Gun blueprint", no_hover=true) }}
<figcaption>صورة مع نص بديل وبدون تكبير عند التحويم</figcaption>

{{ image(url="https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg", url_min="https://upload.wikimedia.org/wikipedia/commons/3/38/JPEG_example_JPG_RIP_010.jpg", alt="The gravestone of J.P.G.", no_hover=true) }}
<figcaption>صورة بنسخة مضغوطة ونص بديل وبدون تكبير عند التحويم</figcaption>

وبدلًا من ذلك، يمكنك إلحاق روابط url التالية. يمكن أن يكون ذلك أكثر فائدة في بعض الحالات، على سبيل المثال ستُعرض هذه الصور بشكل طبيعي في أي محرر Markdown، على عكس رموز Zola القصيرة.

- '# #full': يفرض أن تكون الصورة/الفيديو بالعرض الكامل.
- '# بكسل': يستخدم خوارزمية الجار الأقرب للقياس، وهي مفيدة للحفاظ على وضوح الصورة/ الفيديو بالبكسل.
- '#شفاف': يزيل الزوايا المستديرة والظل، مفيد للصور الشفافة.
- '#عدم التحويم': يزيل التكبير عند التحويم.

![Toolbx header image](https://containertoolbx.org/assets/toolbx.gif#full#pixels#transparent#no-hover)
<figcaption>صورة بالعرض الكامل مع نص بديل، وعرض بالبكسل، وعدم وجود ظل وزوايا مستديرة، وعدم التكبير عند التمرير</figcaption>

#### فيديو

مثل الصور، ولكن مع بعض الاختلافات: لا يتوفر "لا_تحريك" و"URL_min".

```jinja2
{{/* video(url="video.webm", alt="This is a video") */}}
```

{{ video(url="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm", alt="Red flower wakes up") }}
<figcaption>مثال فيديو WebM من MDN</figcaption>

#### CRT

حسنًا، هذا لا يبسط أي شيء، بل يضيف فقط تأثيرًا يشبه تأثير CRT حول كتل شيفرة Markdown.

```jinja2
{%/* crt() */%}
-> Markdown code block <-
{%/* end */%}
```

{% crt() %}

```
 _____________________________________________
|.'',        Public_Library_Halls         ,''.|
|.'.'',                                 ,''.'.|
|.'.'.'',                             ,''.'.'.|
|.'.'.'.'',                         ,''.'.'.'.|
|.'.'.'.'.|                         |.'.'.'.'.|
|.'.'.'.'.|===;                 ;===|.'.'.'.'.|
|.'.'.'.'.|:::|',             ,'|:::|.'.'.'.'.|
|.'.'.'.'.|---|'.|, _______ ,|.'|---|.'.'.'.'.|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|,',',',',|---|',|'|???????|'|,'|---|,',',',',|
|.'.'.'.'.|:::|'.|'|???????|'|.'|:::|.'.'.'.'.|
|.'.'.'.'.|---|','   /%%%\   ','|---|.'.'.'.'.|
|.'.'.'.'.|===:'    /%%%%%\    ':===|.'.'.'.'.|
|.'.'.'.'.|%%%%%%%%%%%%%%%%%%%%%%%%%|.'.'.'.'.|
|.'.'.'.','       /%%%%%%%%%\       ','.'.'.'.|
|.'.'.','        /%%%%%%%%%%%\        ','.'.'.|
|.'.','         /%%%%%%%%%%%%%\         ','.'.|
|.','          /%%%%%%%%%%%%%%%\          ','.|
|;____________/%%%%%Spicer%%%%%%\____________;|
```

{% end %}

## التسميات التوضيحية

يمكن أن تحتوي الوسائط على وصف نصي إضافي باستخدام علامة `<figcaption>` HTML تحتها مباشرةً.

```markdown
![The Office](https://i.ibb.co/MPDJRsT/ImMAXM3.png)
<figcaption>التعليق على الصورة</figcaption>
```

![The Office](https://i.ibb.co/MPDJRsT/ImMAXM3.png)
<figcaption>المكتب الذي يعمل به ستانلي، أرضيته صفراء وجدرانه بيج</figcaption>

## أكورديون

<details>
  <summary>يمكن أن أكون مفسداً، يمكن أن أكون نصاً طويلاً، يمكن أن أكون أي شيء.</summary>

_كواك كواك!

![Cute duck](https://i.ibb.co/x5Wd5dm/EEVSKgV.jpg)

</details>

## صغير

<small>نص صغير ولطيف لا يلفت الانتباه.</small>

## الاختصار

إن <abbr title="الرمز القياسي الأمريكي لتبادل المعلومات">ASCII</abbr> الفن رائع!

## إلى جانب ذلك

<aside>
ريشة وريشة ورقية
<img class="transparent no-hover" style="margin-bottom: 0; border-radius: 0;" alt="Quill and a parchment" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg/326px-%D7%A7%D7%9C%D7%A3%2C_%D7%A0%D7%95%D7%A6%D7%94_%D7%95%D7%93%D7%99%D7%95.jpg" />
</aside>

والريشة هي أداة كتابة مصنوعة من ريشة طيران متحللة (ويفضل أن تكون ريشة جناح أساسية) لطائر كبير. كانت الريشة تستخدم للكتابة بالحبر قبل اختراع القلم الغاطس والقلم ذي الرأس المعدني وقلم الحبر، وأخيراً قلم الحبر الجاف.

وكما هو الحال مع قلم القصب السابق (والقلم الغاطس فيما بعد)، فإن الريشة لا تحتوي على خزان حبر داخلي، وبالتالي يجب غمسها بشكل دوري في محبرة أثناء الكتابة. ونادراً ما تُستخدم ريشة الإوزة المقطوعة يدوياً كأداة للخط بعد الآن لأن العديد من الأوراق الآن مشتقة من لب الخشب وسرعان ما تبلى الريشة. ومع ذلك فهي لا تزال الأداة المفضلة لعدد قليل من الكتبة الذين لاحظوا أن الريشة توفر حداً حاداً لا مثيل له بالإضافة إلى مرونة أكبر من القلم الفولاذي.

## اختصار لوحة المفاتيح

```html
<kbd>⌘ Super</kbd> + <kbd>Space</kbd>
```

لتبديل تخطيط لوحة المفاتيح، اضغط على <kbd>⌘ Super</kbd> + <kbd>Space</kbd>.

## تم تسليط الضوء على

أتعلم ماذا؟ سأقول بعض الأشياء <mark>المهمة</mark> جداً، <mark>مهمة</mark> جداً لدرجة أن **الخط العريض** لا يكفي.

## رابط خارجي

```html
<a class="external" href="https://example.org">رابط الموقع</a>
```

<a class="external" href="https://example.org">رابط الموقع</a>

## الأزرار

```html.j2
<div class="dialog-buttons">
  <a class="inline-button" href="#top">الانتقال إلى الأعلى</a>
  <a class="inline-button colored external" href="{{ config.extra.issues_url }}">ملف مشكلة</a>
</div>
```

> انظر إلى نهاية هذه الصفحة xD
