let products = [
      {
        id: 1,
        image:
          'https://www.grizzlygriptape.com.br/cdn/shop/files/GMC2301P18_BLACK_01_670x.jpg',
        title: 'Camiseta Grizzly Evergreen Ss Tee',
        description: 'R$ 149,90',
      },
      {
        id: 2,
        image:
          'https://acdn.mitiendanube.com/stores/001/115/376/products/11-49091e87f783919a8216927278067885-480-0.png',
        title: 'Camiseta Vans Marshmallow White',
        description: 'R$104,99',
      },
      {
        id: 3,
        image:
          'https://cdn.vnda.com.br/hocks/2021/06/01/8_6_7_760_Calca_Jeans_Hocks_FIxa_01.jpg',
        title: 'Calça Hocks Fixa Large Jeans',
        description: 'R$ 299,90',
      },
      {
        id: 4,
        image:
          'https://acdn.mitiendanube.com/stores/001/115/376/products/ml-sc-2-b84c4d1d4d5e42b0eb17177910769358-480-0.png',
        title: 'Camiseta Santa Cruz Dressen Rose Vine Opus',
        description: 'R$ 189,90',
      },
      {
        id: 5,
        image:
          'https://images.tcdn.com.br/img/img_prod/1286793/camiseta_dgk_stay_low_manga_longa_preto_917_1_eb755765c02d3bd75e25d9265eb1e0f8.jpg',
        title: 'Camiseta DGK Stay Low Manga Longa',
        description: 'R$ 229,90',
      },
      {
        id: 6,
        image:
          'https://images.tcdn.com.br/img/img_prod/560775/camiseta_dgk_mystical_preto_importado_17985_1_b0efd95a1195fe9c4175cf906b6cc32b.jpg',
        title: 'Camiseta Dgk Mystical Preto',
        description: 'R$ 239,90',
      },
      {
        id: 7,
        image:
          'https://global.cdn.magazord.com.br/pontocerto/img/2024/02/produto/8139/cinto-vans-deppster-ii-web-belt-masculino-em-lona-quadriculado-hyped-91.jpg',
        title: 'Cinto Deppster II Web Belt Vans ',
        description: 'R$ 159,99',
      },
      {
        id: 8,
        image:
          'https://cdn.awsli.com.br/2500x2500/749/749210/produto/143516055/499bf75234.jpg',
        title: 'Meia Grizzly Cano Alto Branca',
        description: 'R$ 59,90',
      },
      {
        id: 9,
        image: 'https://imgcentauro-a.akamaihd.net/1366x1366/M14DPU02.jpg',
        title: 'Jaqueta Volcom Madward Imp Preto',
        description: 'R$ 845,40',
      },
      {
        id: 10,
        image:
          'https://images-americanas.b2w.io/produtos/7495647671/imagens/moletom-fechado-lost-22413608-sheep-on-fire-preto/7495647671_1_large.jpg',
        title: 'Moletom Lost Sheep On Fire Preto',
        description: 'R$ 476,90',
      },
      {
        id: 11,
        image:
          'https://princeofstreets.fbitsstatic.net/img/p/tenis-ous-bets-preto-reflect-imperial-155374/355352.jpg?w=550&h=550&v=202406101908&qs=ignore',
        title: 'Tênis Öus Bets Preto/Refletivo/Laranja',
        description: 'R$ 559,90',
      },
      {
        id: 12,
        image:
          'https://acdn.mitiendanube.com/stores/001/115/376/products/imagem-do-whatsapp-de-2024-06-19-as-14-03-03_2f0f83e1-940f44ffa86a856bed17188219511074-480-0.jpg',
        title: 'Camiseta Creature Stubbs Cat Preto',
        description: 'R$ 189,90',
      },
      {
        id: 13,
        image:
          'https://s3.flize.host/onesixteam/camisetahocksboxbrancoh23563-121107.jpg',
        title: 'Camiseta Hocks Box Branco',
        description: 'R$ 129,90',
      },
      {
        id: 14,
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC159T4EbRqjRVpO2pG25yHpx8c1KG6PfElw&s',
        title: 'Moletom Com Capuz Fila Letter Ii Preto',
        description: 'R$ 299,90',
      },
      {
        id: 15,
        image:
          'https://images.tcdn.com.br/img/img_prod/560775/180_camiseta_manga_longa_santa_cruz_dressen_roses_dot_preto_14979_1_26a41522f1931bdbae817659e5404cbf.jpg',
        title: 'Camiseta Santa Cruz Rob Evolution Preto',
        description: 'R$ 199,90',
      },
      {
        id: 16,
        image:
          'https://wats.company/wp-content/uploads/camisa-xadrez-wats-off-white.jpg',
        title: 'Camisa Wats Xadrez Flanela Marrom',
        description: 'R$ 269,90',
      },
      {
        id: 17,
        image:
          'https://studio98skateshop.com.br/wp-content/uploads/2022/04/15123184343_bags-wats24.jpg',
        title: 'Shoulder Bag Wats Pocket Preto',
        description: 'R$ 142,40',
      },
      {
        id: 18,
        image:
          'https://surfalive.fbitsstatic.net/img/p/gorro-hurley-porto-black-black-99082/274825-2.jpg',
        title: 'Gorro Hurley Porto Black Surf',
        description: 'R$ 151,90',
      },
      {
        id: 19,
        image:
          'https://takeoverskateshop.com.br/wp-content/uploads/2022/11/Vans-Wayvee-Preto-600x600.jpg',
        title: 'Tênis Masculino Vans Wayvee Preto',
        description: 'R$ 699,90',
      },
      {
        id: 20,
        image:
          'https://www.lojahip.com.br/images/Produtos/Site/Jaqueta-Vans-Varsity-Club-Bomber-Preto.jpg',
        title: 'Jaqueta Vans Varsity Club Bomber Feminino ',
        description: 'R$ 829,90',
      },
      {
        id: 21,
        image:
          'https://s3.flize.host/onesixteam/tnisteslacoilwhitepurplemesc1901-20-616348.jpg',
        title: 'Tênis Tesla Coil White Purple Mesclado',
        description: 'R$ 303,90',
      },
      {
        id: 22,
        image:
          'https://io.convertiez.com.br/m/nativoexclusive/shop/products/images/817514/medium/tenis-bmx-old-skool-black-teal_30583.jpg',
        title: 'Tênis Feminino Vans Bmx Old Skool - Black Teal',
        description: 'R$ 599,90',
      },
      {
        id: 23,
        image:
          'https://s3.flize.host/onesixteam/camisetahockschavebranco24574-122140.jpg',
        title: 'Camiseta Masculina Hocks Chave - Branco',
        description: 'R$ 159,90',
      },
      {
        id: 24,
        image:
          'https://images.tcdn.com.br/img/img_prod/560775/camiseta_champion_athletic_lev_mini_script_cheio_preto_17973_1_f9d892db6d7a4ff71af89dfb8893fabf.jpg',
        title: 'Camiseta Masculina Champion Lev Script',
        description: 'R$ 179,90',
      },
      {
        id: 25,
        image:
          'https://images.tcdn.com.br/img/img_prod/560775/camiseta_volcom_comfort_volmo_preto_17591_3_36edf55ca7806cabf4d2a9aebfee7802.jpg',
        title: 'Camiseta Masculina Volcom Comfort Volmo',
        description: 'R$ 159,90',
      },
      {
        id: 26,
        image:
          'https://cdn.sistemawbuy.com.br/arquivos/0b1573ae111e6b851316f9785dfa4cae/produtos/666c5ee55b417/20240614121715-666c5efb4a2f1.jpg',
        title: 'Moletom Masculino Respect Brand - Off White',
        description: 'R$ 349,90',
      },
      {
        id: 27,
        image:
          'https://acdn.mitiendanube.com/stores/001/691/424/products/727dcde4e8e639a390cfc9947963ed19-ee34bcdc670b8c512b17170212607458-1024-1024.jpg',
        title: 'Óculos Evoke New Bomber Green Lenses - Black',
        description: 'R$ 989,00',
      },
      {
        id: 28,
        image:
          'https://images.tcdn.com.br/img/img_prod/780637/high_bone_five_panel_logo_black_14728_1_ae9ff19596fd66e74464565f4cb415f7.jpg',
        title: 'Boné High 5 Panel Logo - Preto',
        description: 'R$ 199,90',
      },
      {
        id: 29,
        image:
          'https://sevetcompany.com/cdn/shop/files/21d0eeb8ea14c5634c233686f6e65254fbbe1dac.jpg',
        title: 'Calça Cargo Masculina Plano C Sarja - Preto',
        description: 'R$ 389,90',
      },
      {
        id: 30,
        image:
          'https://a-static.mlcdn.com.br/450x450/skate-santa-cruz-profissional-montado-8-0-abec-15-truck-139m/ultimatoskateboard1/15925726167/f0345a1b02e7d7494ecc6093c97b6401.jpeg',
        title: 'Skate Montado Santa Cruz - Preto',
        description: 'R$ 1.835,00',
      },
      {
        id: 31,
        image:
          'https://www.tillys.com/on/demandware.static/-/Sites-master-catalog/default/dwccca490a/tillys/images/catalog/1000x1000/434242100a.jpg',
        title: 'Calça Wide Leg Feminina Billabong Free Fall',
        description: 'R$ 389,90',
      },
      {
        id: 32,
        image:
          'https://cdn.dooca.store/946/products/1-1141_450x600+fill_ffffff.jpg',
        title: 'Jaqueta Masculina New Era New York Yankees',
        description: 'R$ 499,90',
      },
      {
        id: 33,
        image:
          'https://d2e5mvjndnxyoo.cloudfront.net/Custom/Content/Products/20/54/2054790_jaqueta-balance-puffer-r411a0015_m5_638442262757490212.jpg',
        title: 'Jaqueta Masculina RVCA Puffer - Preto',
        description: 'R$ 799,90',
      },
      {
        id: 34,
        image:
          'https://a-static.mlcdn.com.br/450x450/skate-montado-drop-dead-florid-kids-lilas-dropdead/rockcityinc/1167273/d5d1b0b8222cfe1c5162aaa7c30f51d4.jpeg',
        title: 'Skate Infantil Florid Dropdead - Rosa',
        description: 'R$ 499,90',
      },
      {
        id: 35,
        image:
          'https://ophicina.vtexassets.com/arquivos/ids/445999/Moletom-Vans-Full-Patch-PO-II---Roxo-VN0A45CJCHJCASA-01.jpg',
        title: 'Moletom Masculino Vans Full Patch - Bordo',
        description: 'R$ 389,90',
      },
      {
        id: 36,
        image:
          'https://images.tcdn.com.br/img/img_prod/705238/moletom_grizzly_mini_og_bear_pulover_embroidery_4437_1_3c8fe102adef056ea6ec66682f23d231.jpg',
        title: 'Moletom Masculino Grizzly Og Bear - Cinza',
        description: 'R$ 399,90',
      },
      {
        id: 37,
        image:
          'https://rogerstenis.vteximg.com.br/arquivos/ids/2805530-1000-1000/1000908569_1.jpg',
        title: 'Camiseta New Era Big Logoman Manga Curta',
        description: 'R$ 189,90',
      },
      {
        id: 38,
        image:
          'https://images.tcdn.com.br/img/img_prod/705238/camiseta_creature_m_c_branco_tbd_blownin_it_5105_2_0e3df2ed976de60489a3e4575cce59f2.jpg',
        title: 'Camiseta Creature Stubbs Cat Branco',
        description: 'R$ 189,90',
      },
      {
        id: 39,
        image:
          'https://images.tcdn.com.br/img/img_prod/705238/camiseta_santa_cruz_m_l_branco_classic_dot_front_6835_1_94cf303dabf68d69b19318814a545274.jpg',
        title: 'Camiseta Santa Cruz Rob Evolution M/L Branco',
        description: 'R$ 199,90',
      },
      {
        id: 40,
        image:
          'https://acdn.mitiendanube.com/stores/003/761/484/products/7043f03c-89ef-463a-b755-7e1ffb4a5f92-ae8447bda860bd0c6917108601234653-1024-1024.jpeg',
        title: 'Camiseta Wats Logo M/L Listrado Preto/Cinza',
        description: 'R$ 239,90',
      },
      {
        id: 41,
        image:
          'https://cdn.awsli.com.br/2500x2500/102/102644/produto/236779161/4703900110001u-07-baseimage-hires-24gvez6tsl.jpg',
        title: 'Bermuda Vans Tha Daily Solid Verde/Branco',
        description: 'R$ 339,90',
      },
      {
        id: 42,
        image:
          'https://imgmarketplace.lojasrenner.com.br/20001/3200/7010702484100/7510705663507/2.jpeg',
        title: 'Óculos Evoke Avalanche Preto/Braco',
        description: 'R$ 549,90',
      },
      {
        id: 43,
        image:
          'https://lojashoebiz.vteximg.com.br/arquivos/ids/522650-800-800/003025934N8-PUMA-SMASH-V2-BDP-367147--1-.jpg',
        title: 'Tênis Masculino Puma Smash V2 BOP - Wine/White',
        description: 'R$ 399,90',
      },
      {
        id: 44,
        image:
          'https://mcdbrasil.vtexassets.com/arquivos/ids/235267/T-Shirt-Ml-Smurfs-Preto-1.jpg',
        title: 'Camiseta Lost Smurfs M/L Preto',
        description: 'R$ 203,45',
      },
      {
        id: 45,
        image:
          'https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/mkd/media/uploads/produtos/foto/fyixcwse/tenis-nike-sb-force-58-court-purple-amarillo-white-e.jpg',
        title: 'Tênis Masculino Nike SB Force 58 - Court Purple',
        description: 'R$ 699,90',
      },
      {
        id: 46,
        image:
          'https://images.tcdn.com.br/img/img_prod/921115/camiseta_grizzly_stamp_black_10223_1_1c0185cb3ba8e013f47c9eca1d194c60_20220707170809.jpg',
        title: 'Camiseta Masculina Grizzly Og Stamp - Preto',
        description: 'R$ 149,90',
      },
      {
        id: 47,
        image:
          'https://cdn.awsli.com.br/600x700/294/294533/produto/235380215/13-1--09q6c9mpmr.jpg',
        title: 'Camiseta Masculina Grizzly Og Bear Manga Curta',
        description: 'R$ 149,90',
      },
      {
        id: 48,
        image: 'https://s3.flize.host/onesixteam/camisetawatsbees25037-816805.jpg',
        title: 'Camiseta Masculina Wats Bees Manga Curta',
        description: 'R$ 169,90',
      },
    ];
    export { products };    