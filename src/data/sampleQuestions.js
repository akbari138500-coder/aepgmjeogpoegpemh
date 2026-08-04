/**
 * بانک جامع سوالات آزمون علوم پایه پزشکی و دندانپزشکی (۱۰ سال اخیر: ۱۳۹۴ الی ۱۴۰۳)
 * دسته‌بندی شده درس به درس برای ۱۱ عنوان اصلی علوم پایه دندانپزشکی
 */

export const sampleQuestions = {
  // ۱. آناتومی (Anatomy & Head and Neck Anatomy)
  anatomy: [
    {
      id: 'anat-101',
      subjectId: 'anatomy',
      text: 'کدام عضله مسئول اصلی حرکت بالا بردن فک پایین (Elevation of Mandible) می‌باشد؟',
      year: 1403,
      options: [
        { id: 'a', text: 'عضله پتریگوئید خارجی (Lateral Pterygoid)' },
        { id: 'b', text: 'عضله دی‌گاستریک (Digastric)' },
        { id: 'c', text: 'عضله ماستر (Masseter)' },
        { id: 'd', text: 'عضله مایلوهیویید (Mylohyoid)' }
      ],
      correctAnswer: 'c',
      explanation: 'عضلات ماستر، تمپورالیس و پتریگوئید داخلی عضلات اصلی بالابرنده فک پایین هستند، در حالی که پتریگوئید خارجی مسئول دپریشن (پایین آوردن) و پروتروژن است.'
    },
    {
      id: 'anat-102',
      subjectId: 'anatomy',
      text: 'عصب‌دهی حس عمومی دو سوم قدامی زبان توسط کدام عصب انجام می‌شود؟',
      year: 1402,
      options: [
        { id: 'a', text: 'عصب گلوسوفارنژیال (CN IX)' },
        { id: 'b', text: 'عصب لینگوال (شاخه V3)' },
        { id: 'c', text: 'عصب کوردا تیمپانی (شاخه CN VII)' },
        { id: 'd', text: 'عصب هیپوگلوسال (CN XII)' }
      ],
      correctAnswer: 'b',
      explanation: 'حس عمومی (درد، دما، لمس) ۲/۳ قدامی زبان توسط عصب لینگوال (از شاخه مندیبولار V3) تأمین می‌شود؛ در حالی که حس چشایی ۲/۳ قدامی توسط کوردا تیمپانی (CN VII) حمل می‌گردد.'
    },
    {
      id: 'anat-103',
      subjectId: 'anatomy',
      text: 'شریان ماگزیلاری (Maxillary Artery) پس از جدا شدن از شریان کاروتید خارجی از کدام مسیر وارد حفره پتریگوپالاتین می‌شود؟',
      year: 1401,
      options: [
        { id: 'a', text: 'شکاف پتریگوماگزیلاری (Pterygomaxillary Fissure)' },
        { id: 'b', text: 'سوراخ بیضی (Foramen Ovale)' },
        { id: 'c', text: 'سوراخ گرد (Foramen Rotundum)' },
        { id: 'd', text: 'شکاف اوربیتال تحتانی (Inferior Orbital Fissure)' }
      ],
      correctAnswer: 'a',
      explanation: 'شریان ماگزیلاری از طریق شکاف پتریگوماگزیلاری وارد حفره پتریگوپالاتین شده و شاخه‌های انتهایی خود را عبور می‌دهد.'
    },
    {
      id: 'anat-104',
      subjectId: 'anatomy',
      text: 'کدام عصب از سوراخ بیضی (Foramen Ovale) استخوان اسفنوئید عبور می‌کند؟',
      year: 1400,
      options: [
        { id: 'a', text: 'عصب ماگزیلاری (V2)' },
        { id: 'b', text: 'عصب مندیبولار (V3)' },
        { id: 'c', text: 'عصب افتالمیک (V1)' },
        { id: 'd', text: 'عصب ترپید (CN IV)' }
      ],
      correctAnswer: 'b',
      explanation: 'عصب مندیبولار (V3) به همراه شریان مننژئال فرعی و عصب پتروزال کوچک از سوراخ بیضی عبور می‌کنند.'
    },
    {
      id: 'anat-105',
      subjectId: 'anatomy',
      text: 'مجرای غده پاروتید (Stensen\'s Duct) مقابل کدام دندان وارد دهان می‌شود؟',
      year: 1399,
      options: [
        { id: 'a', text: 'مولار اول فک پایین' },
        { id: 'b', text: 'مولار دوم فک بالا' },
        { id: 'c', text: 'پرمولار اول فک بالا' },
        { id: 'd', text: 'مولار سوم فک پایین' }
      ],
      correctAnswer: 'b',
      explanation: 'مجرای غده پاروتید عضله بوکسیناتور را سوراخ کرده و در مخاط گونه مقابل دندان مولار دوم فک بالا تخلیه می‌شود.'
    },
    {
      id: 'anat-106',
      subjectId: 'anatomy',
      text: 'کدام رباط (Ligament) مهارکننده اصلی حرکت عقب‌افتادگی (Retrusion) مفصل گیجگاهی-فکی (TMJ) است؟',
      year: 1398,
      options: [
        { id: 'a', text: 'رباط اسفنومندیبولار' },
        { id: 'b', text: 'رباط استایلومندیبولار' },
        { id: 'c', text: 'رباط لترال گیجگاهی (Temporomandibular Ligament)' },
        { id: 'd', text: 'رباط کپسولار' }
      ],
      correctAnswer: 'c',
      explanation: 'قسمت مورب رباط لترال گیجگاهی حرکت باز شدن اولیه را محدود کرده و قسمت افقی آن از حرکت خلفی بیش از حد کندیل جلوگیری می‌کند.'
    },
    {
      id: 'anat-107',
      subjectId: 'anatomy',
      text: 'کدام عصب مسئول عصب‌دهی حس چشایی یک‌سوم خلفی زبان است؟',
      year: 1397,
      options: [
        { id: 'a', text: 'عصب فاسیال (CN VII)' },
        { id: 'b', text: 'عصب گلوسوفارنژیال (CN IX)' },
        { id: 'c', text: 'عصب لینگوال (V3)' },
        { id: 'd', text: 'عصب واگ (CN X)' }
      ],
      correctAnswer: 'b',
      explanation: 'عصب گلوسوفارنژیال (CN IX) مسئول هر دو حس عمومی و چشایی یک‌سوم خلفی زبان می‌باشد.'
    },
    {
      id: 'anat-108',
      subjectId: 'anatomy',
      text: 'ورید چهره‌ای (Facial Vein) از طریق کدام مسیر عروقی با سینوس کاورنوس ارتباط بدون دریچه دارد؟',
      year: 1396,
      options: [
        { id: 'a', text: 'ورید افتالمیک و پلکسوس پتریگوئید' },
        { id: 'b', text: 'ورید ژوگولار داخلی' },
        { id: 'c', text: 'ورید سبکلویان' },
        { id: 'd', text: 'ورید ماگزیلاری' }
      ],
      correctAnswer: 'a',
      explanation: 'ورید فاسیال از طریق ورید افتالمیک و پلکسوس پتریگوئید بدون دریچه به سینوس کاورنوس وصل می‌شود که مسیر انتشار عفونت‌های خطرناک صورت است.'
    },
    {
      id: 'anat-109',
      subjectId: 'anatomy',
      text: 'کدام استخوان سقف اصلی حفره بینی را تشکیل داده و محل عبور رشته‌های بویایی است؟',
      year: 1395,
      options: [
        { id: 'a', text: 'صفحه افقی استخوان پالاتین' },
        { id: 'b', text: 'صفحه غربالی (Cribriform Plate) استخوان اتوئید' },
        { id: 'c', text: 'زائیده ماگزیلاری' },
        { id: 'd', text: 'استخوان لاکریمال' }
      ],
      correctAnswer: 'b',
      explanation: 'صفحه غربالی استخوان اتوئید سقف اصلی حفره بینی را می‌سازد و محل عبور رشته‌های عصب بویایی (CN I) است.'
    },
    {
      id: 'anat-110',
      subjectId: 'anatomy',
      text: 'کدام عصب حرکتی تمام عضلات داخلی زبان به جز عضله پالاتوگلوس را عصب‌دهی می‌کند؟',
      year: 1394,
      options: [
        { id: 'a', text: 'عصب هیپوگلوسال (CN XII)' },
        { id: 'b', text: 'عصب گلوسوفارنژیال (CN IX)' },
        { id: 'c', text: 'عصب لینگوال' },
        { id: 'd', text: 'عصب فاسیال' }
      ],
      correctAnswer: 'a',
      explanation: 'عصب ۱۲ مغزی (Hypoglossal) مسئول عصب‌دهی حرکتی به تمام عضلات ذاتی و خارجی زبان به استثنای پالاتوگلوس (عصب ۱۰) است.'
    }
  ],

  // ۲. بیوشیمی (Biochemistry & Oral Biochemistry)
  biochemistry: [
    {
      id: 'biochem-101',
      subjectId: 'biochemistry',
      text: 'کدام آنزیم مسئول هیدرولیز پیروفسفات آلی در فرایند معدنی شدن (Mineralization) عاج و استخوان است؟',
      year: 1403,
      options: [
        { id: 'a', text: 'آلکالین فسفاتاز (TALP / TNALP)' },
        { id: 'b', text: 'اسید فسفاتاز' },
        { id: 'c', text: 'کلاژناز' },
        { id: 'd', text: 'آمینوپپتیداز' }
      ],
      correctAnswer: 'a',
      explanation: 'آنزیم آلکالین فسفاتاز غشایی پیروفسفات معدنی (مهارکننده معدنی‌شدن) را هیدرولیز کرده و فسفات لازم برای تشکیل کریستال‌های هیدروکسی آپاتیت را فراهم می‌آورد.'
    },
    {
      id: 'biochem-102',
      subjectId: 'biochemistry',
      text: 'اصلی‌ترین پروتئین غیرکلاژنی ماتریکس عاج دندان کدام است؟',
      year: 1402,
      options: [
        { id: 'a', text: 'آملوژنین (Amelogenin)' },
        { id: 'b', text: 'دنتین فسفوپروتئین (DPP / Dentin Phosphoprotein)' },
        { id: 'c', text: 'استئوکالسین' },
        { id: 'd', text: 'فیبرونکتین' }
      ],
      correctAnswer: 'b',
      explanation: 'دنتین فسفوپروتئین (DPP) غنی از اسید آسپارتیک و فسفوسرین بوده و فراوان‌ترین پروتئین غیرکلاژنی ماتریکس عاج است که نقش کلیدی در جوانه زنی کریستال‌های هیدروکسی آپاتیت دارد.'
    },
    {
      id: 'biochem-103',
      subjectId: 'biochemistry',
      text: 'کدام اسید آمینه بیشترین درصد را در ساختار زنجیره‌های کلاژن (حدود یک‌سوم) تشکیل می‌دهد؟',
      year: 1401,
      options: [
        { id: 'a', text: 'پرولین' },
        { id: 'b', text: 'گلیسین' },
        { id: 'c', text: 'لیزین' },
        { id: 'd', text: 'آلانین' }
      ],
      correctAnswer: 'b',
      explanation: 'توالی تکراری کلاژن به صورت (Gly-X-Y) است که در آن هر سومین اسید آمینه گلیسین می‌باشد. کوچکی مولکول گلیسین اجازه تشکیل مارپیچ سه تایی فشرده کلاژن را می‌دهد.'
    },
    {
      id: 'biochem-104',
      subjectId: 'biochemistry',
      text: 'تنظیم‌کننده اصلی و محدودکننده سرعت در چرخه کربس (TCA Cycle) کدام آنزیم است؟',
      year: 1400,
      options: [
        { id: 'a', text: 'ایزوسیترات دهیدروژناز' },
        { id: 'b', text: 'سیترات سنتاز' },
        { id: 'c', text: 'آلفا کتوگلوتارات دهیدروژناز' },
        { id: 'd', text: 'مالات دهیدروژناز' }
      ],
      correctAnswer: 'a',
      explanation: 'آنزیم ایزوسیترات دهیدروژناز آنزیم اصلی محدودکننده سرعت چرخه سیتریک اسید است که توسط ADP آلوستریک فعال و توسط ATP و NADH مهار می‌شود.'
    },
    {
      id: 'biochem-105',
      subjectId: 'biochemistry',
      text: 'کدام پپتید بزاقی نقش آنتی‌باکتریال داشته و با تخریب غشای سلولی باکتری‌ها و قارچ‌ها عمل می‌کند؟',
      year: 1399,
      options: [
        { id: 'a', text: 'هیستاتین‌ها (Histatins)' },
        { id: 'b', text: 'استاتیرین (Statherin)' },
        { id: 'c', text: 'پریولین' },
        { id: 'd', text: 'موسین MG1' }
      ],
      correctAnswer: 'a',
      explanation: 'هیستاتین‌ها پپتیدهای غنی از هیستیدین در بزاق هستند که خاصیت قوی ضدفارچی (علیه کاندیدا آلبیکنس) و آنتی‌باکتریال دارند.'
    },
    {
      id: 'biochem-106',
      subjectId: 'biochemistry',
      text: 'کدام ویتامین پیش‌ساز کوآنزیم FAD و FMN در زنجیره انتقال الکترون است؟',
      year: 1398,
      options: [
        { id: 'a', text: 'ویتامین B2 (ریبوفلاوین)' },
        { id: 'b', text: 'ویتامین B1 (تیامین)' },
        { id: 'c', text: 'ویتامین B6' },
        { id: 'd', text: 'ویتامین C' }
      ],
      correctAnswer: 'a',
      explanation: 'ریبوفلاوین (B2) ساختار اصلی کوآنزیم‌های FAD و FMN را تشکیل می‌دهد که در واکنش‌های اکسیداسیون-احیا نقش دارند.'
    },
    {
      id: 'biochem-107',
      subjectId: 'biochemistry',
      text: 'پروتئین استاتیرین (Statherin) موجود در بزاق چه نقشی در حفره دهان دارد؟',
      year: 1397,
      options: [
        { id: 'a', text: 'تثبیت کلسیم و فسفات و جلوگیری از رسوب ناخواسته در مجاری بزاقی' },
        { id: 'b', text: 'تخریب دیواره باکتری' },
        { id: 'c', text: 'هضم نشاسته' },
        { id: 'd', text: 'اتصال به آهن' }
      ],
      correctAnswer: 'a',
      explanation: 'استاتیرین یک پپتید بزاقی است که بزاق را فوق اشباع از کلسیم و فسفات نگه داشته و مانع رسوب سنگ بزاقی می‌شود.'
    }
  ],

  // ۳. فیزیولوژی (Physiology & Oral Physiology)
  physiology: [
    {
      id: 'physio-101',
      subjectId: 'physiology',
      text: 'رفلکس کششی عضلات جونده (Jaw-Jerk Reflex) از کدام مرکز عصبی کنترل می‌شود؟',
      year: 1403,
      options: [
        { id: 'a', text: 'هسته مزنسفالیک عصب پنجم (Mesencephalic Nucleus of CN V)' },
        { id: 'b', text: 'هسته اصلی حسی عصب پنجم' },
        { id: 'c', text: 'هسته اسپینال عصب پنجم' },
        { id: 'd', text: 'هسته موتور عصب هفتم' }
      ],
      correctAnswer: 'a',
      explanation: 'هسته مزنسفالیک تنها هسته‌ای در سیستم عصبی مرکزی است که بدنه سلولی نورون‌های حسی اولیه (Proprioception عضلات جونده و PDL) در آن قرار دارد.'
    },
    {
      id: 'physio-102',
      subjectId: 'physiology',
      text: 'کدام هورمون بازجذب کلسیم از کلیه و بازجذب استخوانی را افزایش داده و سطح فسفات خون را کاهش می‌دهد؟',
      year: 1402,
      options: [
        { id: 'a', text: 'کلسی‌تونین' },
        { id: 'b', text: 'هورمون پاراتیروئید (PTH)' },
        { id: 'c', text: 'انسولین' },
        { id: 'd', text: 'کورتیزول' }
      ],
      correctAnswer: 'b',
      explanation: 'PTH سطح کلسیم پلاسما را افزایش داده و با دفع فسفات از ادرار، سطح فسفات سرم را کاهش می‌دهد.'
    },
    {
      id: 'physio-103',
      subjectId: 'physiology',
      text: 'در پتانسیل عمل گره SA قلب، کدام فاز مسئول بازپلاریزاسیون غشا است؟',
      year: 1401,
      options: [
        { id: 'a', text: 'خروج یون پتاسیم (K+)' },
        { id: 'b', text: 'ورود یون سدیم' },
        { id: 'c', text: 'ورود کلسیم' },
        { id: 'd', text: 'ورود کلر' }
      ],
      correctAnswer: 'a',
      explanation: 'فاز بازپلاریزاسیون با بسته شدن کانال‌های کلسیم و باز شدن کانال‌های ولتاژی پتاسیم و خروج K+ رخ می‌دهد.'
    },
    {
      id: 'physio-104',
      subjectId: 'physiology',
      text: 'سورفاکتانت ریوی که توسط سلول‌های نوع II آلوئولی ترشح می‌شود چه نقشی دارد؟',
      year: 1400,
      options: [
        { id: 'a', text: 'کاهش کشش سطحی و جلوگیری از کلاپس آلوئول‌ها' },
        { id: 'b', text: 'افزایش مقاومت هوایی' },
        { id: 'c', text: 'افزایش کشش سطحی' },
        { id: 'd', text: 'تحریک رفلکس سرفه' }
      ],
      correctAnswer: 'a',
      explanation: 'سورفاکتانت با کاهش کشش سطحی در آلوئول‌ها، کامپلیانس ریه را افزایش داده و مانع آتلکتازی می‌شود.'
    },
    {
      id: 'physio-105',
      subjectId: 'physiology',
      text: 'کدام گیرنده‌های حسی در رباط پریودنتال (PDL) مسئول حس دقیق نیرو و جهت فشارهای وارد به دندان هستند؟',
      year: 1399,
      options: [
        { id: 'a', text: 'مکانورسپتورهای مکانوحساس (Mechanoreceptors)' },
        { id: 'b', text: 'گیرنده‌های درد ناكیسپتور' },
        { id: 'c', text: 'ترمورسپتورها' },
        { id: 'd', text: 'گیرنده‌های دوک عضله' }
      ],
      correctAnswer: 'a',
      explanation: 'مکانورسپتورهای موجود در الیاف PDL بازخورد حس پروپریوسپشن (عمقی) نیروهای جویدن را به هسته مزنسفالیک عصب پنجم منتقل می‌کنند.'
    }
  ],

  // ۴. پاتولوژی (Pathology - General & Oral Pathology)
  pathology: [
    {
      id: 'path-101',
      subjectId: 'pathology',
      text: 'شایع‌ترین تومور خوش‌خیم اودنتوژنیک فکین کدام است؟',
      year: 1403,
      options: [
        { id: 'a', text: 'آملوبلاستوما (Ameloblastoma)' },
        { id: 'b', text: 'ادنتوما (Odontoma)' },
        { id: 'c', text: 'میکسوما' },
        { id: 'd', text: 'سمنتوبلاستوما' }
      ],
      correctAnswer: 'b',
      explanation: 'ادنتوما شایع‌ترین ضایعه خوش‌خیم ادنتوژنیک است؛ آملوبلاستوما شایع‌ترین تومور خوش‌خیم ادنتوژنیک با تهاجم مقامی بالاست.'
    },
    {
      id: 'path-102',
      subjectId: 'pathology',
      text: 'سلول‌های مشخصه و غالب در التهاب حاد (Acute Inflammation) کدام سلول‌ها هستند؟',
      year: 1402,
      options: [
        { id: 'a', text: 'لنفوست‌ها' },
        { id: 'b', text: 'پلاسموسیت‌ها' },
        { id: 'c', text: 'نوتروفیل‌ها (PMNs)' },
        { id: 'd', text: 'ماکروفازها' }
      ],
      correctAnswer: 'c',
      explanation: 'نوتروفیل‌ها نخستین سلول‌های مهاجم در واکنش التهابی حاد هستند؛ لنفوسیت‌ها و ماکروفازها سلول‌های غالب التهاب مزمن می‌باشند.'
    },
    {
      id: 'path-103',
      subjectId: 'pathology',
      text: 'پدیده گورلین-گولتز (Gorlin-Goltz Syndrome) با کدام ضایعه فک همراه است؟',
      year: 1401,
      options: [
        { id: 'a', text: 'کیست ادنتوژنیک کراتوسیست متعدد (Multiple OKCs)' },
        { id: 'b', text: 'کیست رادیکولار' },
        { id: 'c', text: 'آملوبلاستوما' },
        { id: 'd', text: 'کیست موکوسل' }
      ],
      correctAnswer: 'a',
      explanation: 'سندروم گورلین با کیست‌های کراتوسیست متعدد فک، کارسینوم سلول بازال پوست و کلسيفيكاسيون داس مغز مشخص می‌شود.'
    },
    {
      id: 'path-104',
      subjectId: 'pathology',
      text: 'نمای میکروسکوپی دو لایه سلول‌های آنکوسیتیک با استروما و بافت لنفاوی فراوان مشخصه کدام تومور غده بزاقی است؟',
      year: 1400,
      options: [
        { id: 'a', text: 'آدنوم پلئومورفیک' },
        { id: 'b', text: 'تومور وارتین (Warthin\'s Tumor)' },
        { id: 'c', text: 'کارسینوم موکوپیدرموئید' },
        { id: 'd', text: 'آدنوم کانالیکولار' }
      ],
      correctAnswer: 'b',
      explanation: 'تومور وارتین تقریباً منحصراً در غده پاروتید رخ داده و نمای دو لایه اپیتلیوم انکوسیتیک حاوی بافت لنفاوی دارد.'
    },
    {
      id: 'path-105',
      subjectId: 'pathology',
      text: 'کدام نوع نکروز مشخصه انفارکتوس بافت مغزی است؟',
      year: 1399,
      options: [
        { id: 'a', text: 'نکروز انعقادی (Coagulative Necrosis)' },
        { id: 'b', text: 'نکروز مایع‌شونده (Liquefactive Necrosis)' },
        { id: 'c', text: 'نکروز پنیر مانند' },
        { id: 'd', text: 'نکروز چربی' }
      ],
      correctAnswer: 'b',
      explanation: 'در مغز به دلیل میزان بالای آنزیم‌های هیدرولیتیک و لیپید، ایسکمی منجر به نکروز مایع‌شونده می‌شود.'
    }
  ],

  // ۵. میکروبیولوژی (Microbiology - Bacteriology, Virology, Mycology)
  microbiology: [
    {
      id: 'micro-101',
      subjectId: 'microbiology',
      text: 'مهم‌ترین باکتری آغازکننده پوسیدگی مینای دندان کدام عامل میکربی است؟',
      year: 1403,
      options: [
        { id: 'a', text: 'استرپتوکوکوس موتانس (Streptococcus mutans)' },
        { id: 'b', text: 'لاکتوباسیلوس اسیدوفیلوس' },
        { id: 'c', text: 'اکتینومایسس ویسکوزوس' },
        { id: 'd', text: 'پرفیروموناس ژنژیوالیس' }
      ],
      correctAnswer: 'a',
      explanation: 'استرپتوکوکوس موتانس به دلیل توانایی ساخت گلوکان از ساکارز و تولید اسید زیاد (Acidogenic & Aciduric) عامل اصلی آغاز پوسیدگی است.'
    },
    {
      id: 'micro-102',
      subjectId: 'microbiology',
      text: 'کدام باکتری گرم منفی بی‌هوازی اجباری مسبب اصلی پریودنتیت مزمن و تخریب بافت نگهدارنده دندان است؟',
      year: 1402,
      options: [
        { id: 'a', text: 'Porphyromonas gingivalis' },
        { id: 'b', text: 'Streptococcus sanguinis' },
        { id: 'c', text: 'Veillonella parvula' },
        { id: 'd', text: 'Actinomyces israelii' }
      ],
      correctAnswer: 'a',
      explanation: 'پرفیروموناس ژنژیوالیس یکی از سه عضو اصلی کمپلکس قرمز (Red Complex) در بیماری‌های شدید پریودنتال است.'
    },
    {
      id: 'micro-103',
      subjectId: 'microbiology',
      text: 'کدام ویروس مسبب بیماری تب‌خال اول دهانی (Herpetic Gingivostomatitis) در کودکان است؟',
      year: 1401,
      options: [
        { id: 'a', text: 'ویروس هرپس سیمپلکس نوع ۱ (HSV-1)' },
        { id: 'b', text: 'ویروس هرپس سیمپلکس نوع ۲ (HSV-2)' },
        { id: 'c', text: 'ویروس واریسلا زوستر (VZV)' },
        { id: 'd', text: 'ویروس اپشتاین بار (EBV)' }
      ],
      correctAnswer: 'a',
      explanation: 'HSV-1 عامل اصلی عفونت‌های اول دهان و تب‌خال لب است؛ در حالی که HSV-2 معمولاً تناسلی است.'
    },
    {
      id: 'micro-104',
      subjectId: 'microbiology',
      text: 'شایع‌ترین عامل قارچی عفونت‌های مخاطی دهان (برفک دهان) کدام قارچ دی‌مورفیک است؟',
      year: 1400,
      options: [
        { id: 'a', text: 'کاندیدا آلبیکنس (Candida albicans)' },
        { id: 'b', text: 'آسپرجیلوس فومیگاتوس' },
        { id: 'c', text: 'کریپتوکوکوس نئوفورمانس' },
        { id: 'd', text: 'هیستوپلاسما کپسولاتوم' }
      ],
      correctAnswer: 'a',
      explanation: 'کاندیدا آلبیکنس فلور نرمال دهان است که در افراد با نقص ایمنی یا مصرف طولانی آنتی‌بیوتیک باعث برفک یا کاندیدیازیس می‌شود.'
    }
  ],

  // ۶. فارماکولوژی (Pharmacology)
  pharmacology: [
    {
      id: 'pharm-101',
      subjectId: 'pharmacology',
      text: 'کدام دارو مهارکننده انتخابی آنزیم سیکلوأکسیجناز-2 (COX-2) بوده و عوارض گوارشی کمتری دارد؟',
      year: 1403,
      options: [
        { id: 'a', text: 'ایبوپروفن' },
        { id: 'b', text: 'سلوکوکسیب (Celecoxib)' },
        { id: 'c', text: 'ناپروکسن' },
        { id: 'd', text: 'آسپرین' }
      ],
      correctAnswer: 'b',
      explanation: 'سلوکوکسیب یک مهارکننده انتخابی COX-2 است که به علت مهار نکردن COX-1 عوارض گوارشی حاد کمتری ایجاد می‌کند.'
    },
    {
      id: 'pharm-102',
      subjectId: 'pharmacology',
      text: 'کدام آنتی‌بیوتیک به دلیل خطرات تغییر رنگ دائمی دندان‌های در حال رشد در کودکان زیر ۸ سال ممنوع است؟',
      year: 1402,
      options: [
        { id: 'a', text: 'آموکسی‌سیلین' },
        { id: 'b', text: 'تتراسایکلین (Tetracycline)' },
        { id: 'c', text: 'اگزاسیلین' },
        { id: 'd', text: 'ازیتترومایسین' }
      ],
      correctAnswer: 'b',
      explanation: 'تتراسایکلین با کلسیم مینا و عاج دندان‌های در حال تکامل باند شده و هیپوپلازی و تغییر رنگ خاکستری-قهوه‌ای ایجاد می‌کند.'
    },
    {
      id: 'pharm-103',
      subjectId: 'pharmacology',
      text: 'در صورت بروز شوک آنافیلاکسی متعاقب تزریق پنی‌سیلین، داروی خط اول اورژانس کدام است؟',
      year: 1401,
      options: [
        { id: 'a', text: 'تزریق عضلانی اپی‌نفرین (Epinephrine / Adrenaline)' },
        { id: 'b', text: 'تزریق هیدروکورتیزون' },
        { id: 'c', text: 'دیفن هیدرامین' },
        { id: 'd', text: 'آتروپین' }
      ],
      correctAnswer: 'a',
      explanation: 'اپی‌نفرین با اثر بر گیرنده‌های آلفا-۱ (انقباض عروق) و بتا-۲ (برونکودیلاتاسیون) داروی حیات‌بخش و نخستین خط شوک آنافیلاکتیک است.'
    },
    {
      id: 'pharm-104',
      subjectId: 'pharmacology',
      text: 'کدام بی حس‌کننده موضعی آمیدی دارای حلقه تیوفن بوده و توسط آنزیم‌های پلاسما نیز متابولیزه می‌شود؟',
      year: 1400,
      options: [
        { id: 'a', text: 'آرتی‌کائین (Articaine)' },
        { id: 'b', text: 'لیدوکائین' },
        { id: 'c', text: 'بوپیواکائین' },
        { id: 'd', text: 'مپیواکائین' }
      ],
      correctAnswer: 'a',
      explanation: 'آرتی‌کائین تنها بی حس کننده آمیدی است که پیوند استری اضافی دارد و توسط استرازهای پلاسما متابولیزه می‌شود که نیمه عمر آن را کوتاه می‌سازد.'
    }
  ],

  // ۷. بافت‌شناسی (Histology)
  histology: [
    {
      id: 'hist-101',
      subjectId: 'histology',
      text: 'خطوط رشد ریتزیوس (Incremental Lines of Retzius) در کدام بافت دندانی دیده می‌شوند؟',
      year: 1403,
      options: [
        { id: 'a', text: 'عاج' },
        { id: 'b', text: 'مینا (Enamel)' },
        { id: 'c', text: 'سمنتوم' },
        { id: 'd', text: 'استخوان آلوئول' }
      ],
      correctAnswer: 'b',
      explanation: 'خطوط ریتزیوس نشان‌دهنده ریتم دوره‌ای معدنی شدن و رسوب مینا در طول آملوژنز می‌باشند.'
    },
    {
      id: 'hist-102',
      subjectId: 'histology',
      text: 'کدام خطوط رشد ساختاری در بافت عاج (Dentin) معادل خطوط ریتزیوس در مینا هستند؟',
      year: 1402,
      options: [
        { id: 'a', text: 'خطوط رشد فون ابنر (Lines of Von Ebner)' },
        { id: 'b', text: 'نوار هانتر شرگر' },
        { id: 'c', text: 'خطوط اوون' },
        { id: 'd', text: 'غلاف تومز' }
      ],
      correctAnswer: 'a',
      explanation: 'خطوط فون ابنر در عاج نشان‌دهنده رسوب روزانه عاج (حدود ۴ میکرومتر در روز) توسط ادنتوبلاست‌ها می‌باشند.'
    },
    {
      id: 'hist-103',
      subjectId: 'histology',
      text: 'بافت لثه متصل (Attached Gingiva) دارای کدام نوع اپیتلیوم پوششی است؟',
      year: 1401,
      options: [
        { id: 'a', text: 'اپیتلیوم سنگفرشی مطبق شاخی‌شونده (Keratinized) یا پاراشاخی' },
        { id: 'b', text: 'اپیتلیوم ساده استوانه‌ای' },
        { id: 'c', text: 'اپیتلیوم غیرشاخی' },
        { id: 'd', text: 'اپیتلیوم مطبق کاذب' }
      ],
      correctAnswer: 'a',
      explanation: 'لثه متصل و کام سخت برای تحمل نیروهای مکانیکی جویدن دارای پوشش سنگفرشی مطبق اورتو یا پاراکراتینیزه هستند.'
    },
    {
      id: 'hist-104',
      subjectId: 'histology',
      text: 'سلول‌های سمنتوبلاست (Cementoblasts) از کدام ساختار جنینی بافت‌شناسی منشأ می‌گیرند؟',
      year: 1400,
      options: [
        { id: 'a', text: 'ساک دندانی (Dental Follicle)' },
        { id: 'b', text: 'پاپی دندانی (Dental Papilla)' },
        { id: 'c', text: 'عضو مینایی' },
        { id: 'd', text: 'تیغه دندانی' }
      ],
      correctAnswer: 'a',
      explanation: 'ساک دندانی منشأ بافت‌های ساپورت دندان شامل سمنتوم، رباط پریودنتال (PDL) و استخوان آلوئول است.'
    }
  ],

  // ۸. جنین‌شناسی (Embryology)
  embryology: [
    {
      id: 'embryo-101',
      subjectId: 'embryology',
      text: 'کمان اول برانشیال (کمان مندیبولار) توسط کدام عصب مغزی عصب‌دهی می‌شود؟',
      year: 1403,
      options: [
        { id: 'a', text: 'عصب تری‌ژمینال (CN V)' },
        { id: 'b', text: 'عصب فاسیال (CN VII)' },
        { id: 'c', text: 'عصب گلوسوفارنژیال (CN IX)' },
        { id: 'd', text: 'عصب واگ (CN X)' }
      ],
      correctAnswer: 'a',
      explanation: 'کمان اول قوس حلقی (Pharyngeal arch 1) توسط عصب تری‌ژمینال (V)، کمان دوم توسط عصب فاسیال (VII) و کمان سوم توسط گلوسوفارنژیال (IX) عصب‌دهی می‌شود.'
    },
    {
      id: 'embryo-102',
      subjectId: 'embryology',
      text: 'نقص در جوش خوردن زائده‌های کام ثانویه (Palatal Shelves) منجر به کدام آنومالی مادرزادی می‌شود؟',
      year: 1402,
      options: [
        { id: 'a', text: 'شکاف کام (Cleft Palate)' },
        { id: 'b', text: 'شکاف لب (Cleft Lip)' },
        { id: 'c', text: 'ماکروگلاسی' },
        { id: 'd', text: 'آنکیلوز زبان' }
      ],
      correctAnswer: 'a',
      explanation: 'نرسیدن و عدم اتصال زوائد کامی ماگزیلاری در خط وسط در هفته‌های ۷ تا ۱۰ جنینی باعث شکاف کام می‌شود.'
    },
    {
      id: 'embryo-103',
      subjectId: 'embryology',
      text: 'غده تیروئید در دوران جنینی از فورامن سکوم (Foramen Cecum) واقع در کدام بخش منشأ می‌گیرد؟',
      year: 1399,
      options: [
        { id: 'a', text: 'پشت زبان (Dorsum of Tongue)' },
        { id: 'b', text: 'سقف دهان' },
        { id: 'c', text: 'سینوس ماگزیلاری' },
        { id: 'd', text: 'کمان چهارم حلقی' }
      ],
      correctAnswer: 'a',
      explanation: 'جوانه تیروئید از فورامن سکوم در خط وسط پشت زبان ایجاد شده و از طریق مجرای تیرووگلوسال به محل اصلی خود در گردن مهاجرت می‌کند.'
    }
  ],

  // ۹. ایمونولوژی (Immunology)
  immunology: [
    {
      id: 'immuno-101',
      subjectId: 'immunology',
      text: 'کدام ایمونوگلوبولین فراوان‌ترین آنتی‌بادی موجود در ترشحات مخاطی دهان (بزاق) است؟',
      year: 1403,
      options: [
        { id: 'a', text: 'IgG' },
        { id: 'b', text: 'Secretory IgA (sIgA)' },
        { id: 'c', text: 'IgM' },
        { id: 'd', text: 'IgE' }
      ],
      correctAnswer: 'b',
      explanation: 'IgA ترشحی (sIgA) آنتی‌بادی اصلی بزاق و سیستم ایمنی مخاطی دهان است که از اتصال باکتری‌ها به سطح مخاط جلوگیری می‌کند.'
    },
    {
      id: 'immuno-102',
      subjectId: 'immunology',
      text: 'واکنش آلرژیک حاد تاخیری نوع IV (Delayed Hypersensitivity) واسطه کدام سلول‌ها است؟',
      year: 1401,
      options: [
        { id: 'a', text: 'لنفوسیت‌های T (Th1 / CD4+)' },
        { id: 'b', text: 'سلول‌های B و آنتی‌بادی' },
        { id: 'c', text: 'بازوفیل‌ها' },
        { id: 'd', text: 'پلاسموسیت‌ها' }
      ],
      correctAnswer: 'a',
      explanation: 'واکنش نوع ۴ واسطه سلولی (Cell-mediated) بوده و منحصراً توسط سلول‌های T حساس شده ایجاد می‌شود.'
    },
    {
      id: 'immuno-103',
      subjectId: 'immunology',
      text: 'کدام سیتوکین اصلی‌ترین عامل تحریک و فعال‌سازی استئوکلاست‌ها و تخریب استخوان آلوئول در ضایعات پریودنتال است؟',
      year: 1400,
      options: [
        { id: 'a', text: 'IL-1β و TNF-α' },
        { id: 'b', text: 'IL-4' },
        { id: 'c', text: 'IL-10' },
        { id: 'd', text: 'اینترفرون آلفا' }
      ],
      correctAnswer: 'a',
      explanation: 'سیتوکین‌های التهابی IL-1β، TNF-α و RANKL کلیدی‌ترین عوامل در تحریک استئوکلاستوژنز و جذب استخوان فک در بیماری‌های پریودنتال هستند.'
    }
  ],

  // ۱۰. ژنتیک (Genetics)
  genetics: [
    {
      id: 'gen-101',
      subjectId: 'genetics',
      text: 'سندروم داون ناشی از کدام اختلال کروموزومی است؟',
      year: 1403,
      options: [
        { id: 'a', text: 'تریزومی ۲۱ (Trisomy 21)' },
        { id: 'b', text: 'تریزومی ۱۸' },
        { id: 'c', text: 'مونوزومی X' },
        { id: 'd', text: 'حذف کروموزوم ۵' }
      ],
      correctAnswer: 'a',
      explanation: 'سندروم داون شایع‌ترین اختلال عددی کروموزومی autosom بوده و به دلیل وجود یک نسخه اضافی از کروموزوم ۲۱ ایجاد می‌شود.'
    },
    {
      id: 'gen-102',
      subjectId: 'genetics',
      text: 'بیماری ژنتیکی دنتینوژنز ایمپرفکتا (Dentinogenesis Imperfecta) دارای کدام الگوی وراثتی است؟',
      year: 1400,
      options: [
        { id: 'a', text: 'اتوزوم غالب (Autosomal Dominant)' },
        { id: 'b', text: 'اتوزوم مغلوب' },
        { id: 'c', text: 'وابسته به X مغلوب' },
        { id: 'd', text: 'میتروکندریایی' }
      ],
      correctAnswer: 'a',
      explanation: 'دنتینوژنز ایمپرفکتا ناشی از جهش در ژن DSPP بوده و الگوی وراثتی اتوزومی غالب دارد.'
    },
    {
      id: 'gen-103',
      subjectId: 'genetics',
      text: 'سندروم گاردنر (Gardner Syndrome) که با استئوم‌های متعدد فک‌ها همراه است دارای چه الگوی وراثتی است؟',
      year: 1399,
      options: [
        { id: 'a', text: 'اتوزوم غالب (Autosomal Dominant)' },
        { id: 'b', text: 'اتوزوم مغلوب' },
        { id: 'c', text: 'وابسته به جنس' },
        { id: 'd', text: 'مایع آمنیوتیک' }
      ],
      correctAnswer: 'a',
      explanation: 'سندروم گاردنر ناشی از جهش اتوزوم غالب در ژن APC بوده و مشخصه دندانپزشکی آن دندان‌های نهفته و استئوم متعدد فک است.'
    }
  ],

  // ۱۱. انگل‌شناسی و قارچ‌شناسی (Parasitology)
  parasitology: [
    {
      id: 'parasit-101',
      subjectId: 'parasitology',
      text: 'کدام تک‌یاخته تاژک‌دار به صورت همزیست در حفره دهان و شیار لثه‌ای (پلاک دندانی) یافت می‌شود؟',
      year: 1403,
      options: [
        { id: 'a', text: 'انتاموبا ژنژیوالیس (Entamoeba gingivalis)' },
        { id: 'b', text: 'ژياردیا لامبلیا' },
        { id: 'c', text: 'تریكوموناس تنكس (Trichomonas tenax)' },
        { id: 'd', text: 'لیشمانیا ماژور' }
      ],
      correctAnswer: 'c',
      explanation: 'تریکوموناس تنکس (تک‌یاخته تاژک‌دار) و انتاموبا ژنژیوالیس (آمیب) دو آمیب و تاژک‌دار ساکن حفره دهان انسان هستند.'
    },
    {
      id: 'parasit-102',
      subjectId: 'parasitology',
      text: 'انتقال بیماری توکسوپلاسموز (Toxoplasmosis) عمدتاً از طریق کدام میزبان نهایی رخ می‌دهد؟',
      year: 1401,
      options: [
        { id: 'a', text: 'مدفوع گربه سانان (Cats)' },
        { id: 'b', text: 'پشه آنوفل' },
        { id: 'c', text: 'سگ' },
        { id: 'd', text: 'ماهی خام' }
      ],
      correctAnswer: 'a',
      explanation: 'توکسوپلاسما گوندی تک‌یاخته‌ای است که گربه میزبان نهایی آن بوده و دفع اووسیت از طریق مدفوع گربه منبع اصلی آلودگی انسان است.'
    },
    {
      id: 'parasit-103',
      subjectId: 'parasitology',
      text: 'عامل بیماری کیست هیداتیک (Hydatid Cyst) کدام انگل است؟',
      year: 1399,
      options: [
        { id: 'a', text: 'اکینوکوکوس گرنولوزوس (Echinococcus granulosus)' },
        { id: 'b', text: 'تنیا سژیناتا' },
        { id: 'c', text: 'فاسیولا هپاتیکا' },
        { id: 'd', text: 'اسکاریس لومبریکوئیدس' }
      ],
      correctAnswer: 'a',
      explanation: 'کرم نواری اکینوکوکوس گرنولوزوس در مرحله لاروی (متاستود) ایجاد کیست هیداتیک در کبد، ریه و نادراً استخوان فک می‌کند.'
    }
  ]
};
