export const menu = [
    {
      id: 1,
      title: "Giris",
      listItems: [
        {
          id: 1,
          title: "Anasayfa",
          url: "/",
          icon: "home.svg",
        },
        {
          id: 2,
          title: "Profil",
          url: "/users/1",
          icon: "user.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Liste",
      listItems: [
        {
          id: 1,
          title: "Kullanıcılar",
          url: "/users",
          icon: "user.svg",
        },
        {
          id: 2,
          title: "Ürünler",
          url: "/products",
          icon: "product.svg",
        },
        {
          id: 3,
          title: "Diğer",
          url: "/orders",
          icon: "order.svg",
        },
        {
          id: 4,
          title: "Gönderi",
          url: "/posts",
          icon: "post2.svg",
        },
      ],
    },
    {
      id: 3,
      title: "Genel",
      listItems: [
        {
          id: 1,
          title: "Bileşen",
          url: "/",
          icon: "element.svg",
        },
        {
          id: 2,
          title: "Notlar",
          url: "/",
          icon: "note.svg",
        },
        {
          id: 3,
          title: "Form",
          url: "/",
          icon: "form.svg",
        },
        {
          id: 4,
          title: "Takvim",
          url: "/",
          icon: "calendar.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Yardım",
      listItems: [
        {
          id: 1,
          title: "Ayarlar",
          url: "/",
          icon: "setting.svg",
        },
        {
          id: 2,
          title: "Yedekler",
          url: "/",
          icon: "backup.svg",
        },
      ],
    },
    {
      id: 5,
      title: "Analitik",
      listItems: [
        {
          id: 1,
          title: "Çizelge",
          url: "/",
          icon: "chart.svg",
        },
        {
          id: 2,
          title: "Kayıt",
          url: "/",
          icon: "log.svg",
        },
      ],
    },
  ];

  export const topDealUsers = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      username: "Elvin Yılmaz",
      email: "elvn2003@gmail.com",
      amount: "3.668",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Berrak Duymaz",
      email: "berrak123@gmail.com",
      amount: "3.256",
    },
    {
      id: 3,
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Ali Erdemir",
      email: "erdemıralı@gmail.com",
      amount: "2.998",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Ayça Mutlu",
      email: "ayca1991@gmail.com",
      amount: "2.512",
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
      username: "Emre Aslan",
      email: "emre1905@gmail.com",
      amount: "2.134",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Kerem Öner",
      email: "aylin@gmail.com",
      amount: "1.932",
    },
    {
      id: 7,
      img: "https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "Melek Yaşar",
      email: "melek@gmail.com",
      amount: "1.560",
    },
  ];

  export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Toplam Kullanıcı",
    number: "11.238",
    dataKey: "users",
    percentage: 45,
    chartData: [
      { name: "Pazartesi", users: 400 },
      { name: "Salı", users: 600 },
      { name: "Çarşamba", users: 500 },
      { name: "Perşembe", users: 700 },
      { name: "Cuma", users: 400 },
      { name: "Cumartesi", users: 500 },
      { name: "Pazar", users: 450 },
    ],
  };
  
  export const chartBoxProduct = {
    color: "skyblue",
    icon: "/productIcon.svg",
    title: "Toplam Ürün",
    number: "238",
    dataKey: "products",
    percentage: 21,
    chartData: [
        { name: "Pazartesi", products: 400 },
        { name: "Salı", products: 600 },
        { name: "Çarşamba", products: 500 },
        { name: "Perşembe", products: 700 },
        { name: "Cuma", products: 400 },
        { name: "Cumartesi", products: 500 },
        { name: "Pazar", products: 450 },
    ],
  };
  export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Toplam Gelir",
    number: "$56.432",
    dataKey: "revenue",
    percentage: -12,
    chartData: [
        { name: "Pazartesi", revenue: 400 },
        { name: "Salı", revenue: 600 },
        { name: "Çarşamba", revenue: 500 },
        { name: "Perşembe", revenue: 700 },
        { name: "Cuma", revenue: 400 },
        { name: "Cumartesi", revenue: 500 },
        { name: "Pazar", revenue: 450 },
    ],
  };
  export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Toplam Oran",
    number: "2.6",
    dataKey: "ratio",
    percentage: 12,
    chartData: [
        { name: "Pazartesi", ratio: 400 },
        { name: "Salı", ratio: 600 },
        { name: "Çarşamba", ratio: 500 },
        { name: "Perşembe", ratio: 700 },
        { name: "Cuma", ratio: 400 },
        { name: "Cumartesi", ratio: 500 },
        { name: "Pazar", ratio: 450 },
    ],
  };

  export const barChartBoxRevenue = {
    title: "Kazanılan Kar",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
      {
        name: "Pazartesi",
        profit: 4000,
      },
      {
        name: "Salı",
        profit: 3000,
      },
      {
        name: "Çarşamba",
        profit: 2000,
      },
      {
        name: "Perşembe",
        profit: 2780,
      },
      {
        name: "Cuma",
        profit: 1890,
      },
      {
        name: "Cumartesi",
        profit: 2390,
      },
      {
        name: "Pazar",
        profit: 3490,
      },
    ],
  };
  
  export const barChartBoxVisit = {
    title: "Toplam Ziyaret",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
      {
        name: "Pazartesi",
        visit: 4000,
      },
      {
        name: "Salı",
        visit: 3000,
      },
      {
        name: "Çarşamba",
        visit: 2000,
      },
      {
        name: "Perşembe",
        visit: 2780,
      },
      {
        name: "Cuma",
        visit: 1890,
      },
      {
        name: "Cumartesi",
        visit: 2390,
      },
      {
        name: "Pazar",
        visit: 3490,
      },
    ],
  };

  export const userRows = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      soyadı: "Çiçek",
      adı: "Sena",
      email: "senacıcek@@gmail.com",
      ceptelefonu: "0532 765 7689",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Doğuş",
      adı: "Meryem",
      email: "mayro@gmail.com",
      ceptelefonu: "0523 657 7654",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Yılmaz",
      adı: "Erkin",
      email: "yılmazerkın@hottmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Küçük",
      adı: "Hatice",
      email: "hatıc@gmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 5,
      img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Demir",
      adı: "Adem",
      email: "demırcı@yahoo.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
    },
    {
      id: 6,
      img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı:  "Kaya",
      adı:"Sarp",
      email: "eder@mail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 7,
      img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Görmüş",
      adı: "Leyla",
      email: "bilic@gmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
    },
    {
      id: 8,
      img: "https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Kayıkçı",
      adı: "Deniz",
      email: "kayık123@mail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 9,
      img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Taşçı",
      adı: "Pakize",
      email: "uzozor@gmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
    },
    {
      id: 10,
      img: "https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "El",
      adı: "Reif",
      email: "tuhkabapu@gmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 11,
      img: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Gerekli",
      adı: "Damla",
      email: "gibo@gmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
      kabul: true,
    },
    {
      id: 12,
      img: "https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Yılmaz",
      adı: "Kemal",
      email: "tckemalyılmaz@hotmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
    },
    {
      id: 13,
      img: "https://images.pexels.com/photos/761977/pexels-photo-761977.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Çiçek",
      adı: "Cennet",
      email: "ceuc@gmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
    },
    {
      id: 14,
      img: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
      soyadı: "Erbilir",
      adı: "Sara",
      email: "bafu@hotmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
    },
    {
      id: 15,
      img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
      soyadı: "Duyar",
      adı: "Gökhan",
      email: "ubi@gmail.com",
      ceptelefonu: "0539 989 9087",
      oluşturulmatarihi: "01.02.2023",
    },
  ];

  export const products = [
    {
      id: 1,
      img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
      başlık: "Playstation 5 Digital Edition",
      renk: "beyaz",
      marka: "Sony",
      fiyat: "250.99₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
    {
      id: 2,
      img: "https://www.pngmart.com/files/6/Dell-Laptop-PNG-Image.png",
      başlık: "Dell Laptop KR211822",
      renk: "siyah",
      marka: "Dell",
      fiyat: "499.99₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
    {
      id: 3,
      img: "http://images.samsung.com/is/image/samsung/uk-led-tv-hg40ed670ck-hg40ed670ckxxu-001-front",
      başlık: "Samsung TV 4K SmartTV",
      renk: "gri",
      marka: "Samsung",
      fiyat: "999.49₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
    {
      id: 4,
      img: "data:image/jpeg;base64,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",
      başlık: "Apple Iphone 14 Pro Max",
      renk: "beyaz",
      marka: "Apple",
      fiyat: "799.49₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
    {
      id: 5,
      img: "https://www.signify.com/b-dam/signify/en-aa/about/news/2020/20200903-movie-night-essentials-popcorn-ice-cream-and-the-new-philips-hue-play-gradient-lightstrip/packaging-lighstrip.png",
      başlık: "Philips Hue Play Gradient",
      renk: "renkli",
      marka: "Philips",
      fiyat: "39.99₺",
      yüklenmetarihi: "01.02.2023",
    },
    {
      id: 6,
      img: "https://www.smartworld.it/wp-content/uploads/2019/09/High_Resolution_PNG-MX-Master-3-LEFT-GRAPHITE.png",
      başlık: "Logitech MX Master 3",
      renk: "siyah",
      marka: "Logitech",
      fiyat: "59.49₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
    {
      id: 7,
      img: "https://www.pngarts.com/files/7/Podcast-Mic-PNG-Picture.png",
      başlık: "Rode Podcast Microphone",
      renk: "gri",
      marka: "Rode",
      fiyat: "119.49₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
    {
      id: 8,
      img: "https://5.imimg.com/data5/SW/VM/MY-5774620/toshiba-split-ac-2-ton-3-star-rated-ras-24s3ks-500x500.png",
      başlık: "Toshiba Split AC 2",
      renk: "beyaz",
      marka: "Toshiba",
      fiyat: "899.99₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
    {
      id: 9,
      img: "https://img.productz.com/review_image/102489/preview_sony-kdl-50w800b-50-inch-hdtv-review-superb-picture-102489.png",
      başlık: "Sony Bravia KDL-47W805A",
      renk: "siyah",
      marka: "Sony",
      fiyat: "970.49₺",
      yüklenmetarihi: "01.02.2023",
    },
    {
      id: 10,
      img: "https://venturebeat.com/wp-content/uploads/2015/07/As_AO1-131_gray_nonglare_win10_03.png?fit=1338%2C1055&strip=all",
      başlık: "Acer Laptop 16 KL-4804",
      renk: "siyah",
      marka: "Acer",
      fiyat: "599.99₺",
      yüklenmetarihi: "01.02.2023",
      stok: true,
    },
  ];

  export const singleUser = {
    id: 1,
    title: "Sena Çiçek",
    img: "https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    info: {
      kullanıcıadı: "Sena99",
      ad: "Sena Çiçek",
      email: "senacıcek@gmail.com",
      ceptelefonu: "0536 786 5654",
      statü: "kabul",
    },
    chart: {
      dataKeys: [
        { name: "gezin", color: "#82ca9d" },
        { name: "tıkla", color: "#8884d8" },
      ],
      data: [
        {
          name: "Ptesi",
          gezin: 4000,
          tıkla: 2400,
        },
        {
          name: "Salı",
          gezin: 3000,
          tıkla: 1398,
        },
        {
          name: "Çarş",
          gezin: 2000,
          tıkla: 3800,
        },
        {
          name: "Perş",
          gezin: 2780,
          tıkla: 3908,
        },
        {
          name: "Cuma",
          gezin: 1890,
          tıkla: 4800,
        },
        {
          name: "Ctesi",
          gezin: 2390,
          tıkla: 3800,
        },
        {
          name: "Pazar",
          gezin: 3490,
          tıkla: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Sena Çiçek, Playstation 5 Digital Edition'ı satın aldı",
        time: "3 gün önce",
      },
      {
        text: "Sena Çiçek istek listesine 3 öğe ekledi",
        time: "1 hafta önce",
      },
      {
        text: "Sena Çiçek Sony Bravia KD-32w800'ı satın aldı",
        time: "2 hafta önce",
      },
      {
        text: "Sena Çiçek bir ürünü inceledi",
        time: "1 ay önce",
      },
      {
        text: "Sena Çiçek istek listesine 1 ürün ekledi",
        time: "1 ay önce",
      },
      {
        text: "Sena Çiçek bir ürünü inceledi",
        time: "2 ay önce",
      },
    ],
  };

  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://store.sony.com.au/on/demandware.static/-/Sites-sony-master-catalog/default/dw1b537bbb/images/PLAYSTATION5W/PLAYSTATION5W.png",
    info: {
      Id: "Ps5SDF1156d",
      renk: "beyaz",
      fiyat: "250.99₺",
      marka: "Sony",
      menşe: "Japan",
    },
    chart: {
      dataKeys: [
        { name: "gezin", color: "#82ca9d" },
        { name: "diğerleri", color: "#8884d8" },
      ],
      data: [
        {
          name: "Ptesi",
          gezin: 4000,
          diğerleri: 2400,
        },
        {
          name: "Salı",
          gezin: 3000,
          diğerleri: 1398,
        },
        {
          name: "Çarş",
          gezin: 2000,
          diğerleri: 3800,
        },
        {
          name: "Perş",
          gezin: 2780,
          diğerleri: 3908,
        },
        {
          name: "Cuma",
          gezin: 1890,
          diğerleri: 4800,
        },
        {
          name: "Ctesi",
          gezin: 2390,
          diğerleri: 3800,
        },
        {
          name: "Pazar",
          gezin: 3490,
          diğerleri: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Sena Çiçek Playstation 5 Digital Edition satın aldı",
        time: "3 gün önce",
      },
      {
        text: "Meryem Doğuş Playstation 5 Digital Edition istek listesine ekledi",
        time: "2 hafta önce",
      },
      {
        text: "Erkin Yılmaz Playstation 5 Digital Edition satın aldı",
        time: "3 hafta önce",
      },
      {
        text: "Hatice Küçük bu ürünü inceledi",
        time: "1 ay önce",
      },
      {
        text: "Adem Demir Playstation 5 Digital Edition istek listesine ekledi",
        time: "1 ay önce",
      },
      {
        text: "Sarp Kaya bu ürünü inceledi",
        time: "2 ay önce",
      },
    ],
  };