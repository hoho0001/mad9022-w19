/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "be64b877c955dd34c11345bc2c594198"
  },
  {
    "url": "assets/css/11.styles.d1d0bc23.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/2.styles.50c0c95d.css",
    "revision": "ba8196b0d1933d0a47ae4bf8aeddab4a"
  },
  {
    "url": "assets/css/3.styles.75a33a02.css",
    "revision": "e8c1ac99f865baa32941df042e9ef9c3"
  },
  {
    "url": "assets/css/4.styles.9b186081.css",
    "revision": "2143f2d4484ea7767f828377b70df11c"
  },
  {
    "url": "assets/css/5.styles.d720d12b.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/styles.41454ee1.css",
    "revision": "601987b527922f54468fe70f090e262f"
  },
  {
    "url": "assets/img/alpha.7c97e5f2.png",
    "revision": "7c97e5f201b6974aade8301c3a6b60f4"
  },
  {
    "url": "assets/img/beta.b5dedc51.png",
    "revision": "b5dedc5145d80cbbf9ef72e29aa3793d"
  },
  {
    "url": "assets/img/blaming.35f65a20.jpg",
    "revision": "35f65a201266ce2eab55dfad40c7a062"
  },
  {
    "url": "assets/img/browsertabs.5fc5ee29.jpg",
    "revision": "5fc5ee29bc6b18f06097e94d16287cb3"
  },
  {
    "url": "assets/img/changingstuff.693561af.jpg",
    "revision": "693561afd2ffa5ea27c1d11672d694eb"
  },
  {
    "url": "assets/img/coffee.6c969335.jpg",
    "revision": "6c96933553ddec1259e42de46f721490"
  },
  {
    "url": "assets/img/copypaste.a83b7be1.jpg",
    "revision": "a83b7be1353cc31a2479a06b8adb1e55"
  },
  {
    "url": "assets/img/dependecies.4ae662bd.jpg",
    "revision": "4ae662bd5fccb8bab36a87e4f6e166b9"
  },
  {
    "url": "assets/img/drunk.43d9d2b7.jpg",
    "revision": "43d9d2b716c24311366e631d269696ae"
  },
  {
    "url": "assets/img/gamma.9df42cf9.png",
    "revision": "9df42cf9d48469ed17b9bd6f6333bb87"
  },
  {
    "url": "assets/img/gitcommit.00c17f5c.jpg",
    "revision": "00c17f5c40ccafad534c9c9369135794"
  },
  {
    "url": "assets/img/googling.a13b9982.jpg",
    "revision": "a13b9982ebe3978a6c994a6a8d81399a"
  },
  {
    "url": "assets/img/html-5.676e8188.svg",
    "revision": "676e8188f003ed5d4882a0d0f378dad3"
  },
  {
    "url": "assets/img/itdepends.7db97e1b.jpg",
    "revision": "7db97e1b33c9e9db18261d4e6b92d995"
  },
  {
    "url": "assets/img/javascript.61ed8b05.svg",
    "revision": "61ed8b054178d0e8d1285ad8f29f4045"
  },
  {
    "url": "assets/img/millenials.605e3a0f.png",
    "revision": "605e3a0f5cc3784d6e07d1097ee7ec49"
  },
  {
    "url": "assets/img/nobodycanread.cd028e84.jpg",
    "revision": "cd028e847a6bf8e44ca0838d9c7cbb51"
  },
  {
    "url": "assets/img/postman.e8767bf7.png",
    "revision": "e8767bf7b9f3473621ff68d1513a69ba"
  },
  {
    "url": "assets/img/regex.d6235383.jpg",
    "revision": "d6235383e8b3104177e1300ef46837e4"
  },
  {
    "url": "assets/img/rewriting.81099a5a.jpg",
    "revision": "81099a5a36de521a99f87e367263b20b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/security.4e012d30.jpg",
    "revision": "4e012d30073d61948f6168b4993503d1"
  },
  {
    "url": "assets/img/tryingstuff.5e42d5a4.jpg",
    "revision": "5e42d5a442ad7945e3aa9c3c0dcf2c68"
  },
  {
    "url": "assets/img/unittests.5b0c691f.jpg",
    "revision": "5b0c691f44441f4406930c9ca4344385"
  },
  {
    "url": "assets/img/weekend.10bc2c6a.jpg",
    "revision": "10bc2c6a24edd57fc91b32a650f4afd0"
  },
  {
    "url": "assets/img/whiteboard.06cf807b.jpg",
    "revision": "06cf807b105e5d578065801ef76d1d7f"
  },
  {
    "url": "assets/img/workarounds.039678c0.jpg",
    "revision": "039678c030df9ba399eb9da3b6a71c57"
  },
  {
    "url": "assets/img/zindex.ad33d2ad.jpg",
    "revision": "ad33d2adfc09a506e9ed0abb2de8b4f6"
  },
  {
    "url": "assets/js/1.f3ac51dd.js",
    "revision": "5eef8cac5a4a3018a3f71a6b01277cfe"
  },
  {
    "url": "assets/js/10.bfaf831a.js",
    "revision": "0718e117f249d923b98241dfa05f1f86"
  },
  {
    "url": "assets/js/100.5a2f07bf.js",
    "revision": "da6038aa7aa28c9d3440161db6687b70"
  },
  {
    "url": "assets/js/101.20b99668.js",
    "revision": "5caa171fd8e02c3411b1cfcd3f50ca11"
  },
  {
    "url": "assets/js/102.6b0b57d0.js",
    "revision": "150968006aa3a753e28631873b4bbce8"
  },
  {
    "url": "assets/js/103.d4d127f9.js",
    "revision": "2e131d575b08cf54f36c39d01fe75bdd"
  },
  {
    "url": "assets/js/104.379f5752.js",
    "revision": "cf0dd5cccb1a4f71d4deeb68c55d6aa9"
  },
  {
    "url": "assets/js/105.dc5026da.js",
    "revision": "56308d8009c294b52cfafe9a5353b54f"
  },
  {
    "url": "assets/js/106.f2f81565.js",
    "revision": "8236cc184820b0b012bd27fa078cffb6"
  },
  {
    "url": "assets/js/107.9ef2060c.js",
    "revision": "dfe67d2b6446fa4af138915e9e43f91d"
  },
  {
    "url": "assets/js/108.68a584be.js",
    "revision": "de4de2c7adcf78d15c0719d6da6fc1a9"
  },
  {
    "url": "assets/js/109.fc887459.js",
    "revision": "8c32b697048dce862794d0a590b83a91"
  },
  {
    "url": "assets/js/11.d1d0bc23.js",
    "revision": "d41f5d1b3dada57cffe32d686e4aae12"
  },
  {
    "url": "assets/js/110.9888ca90.js",
    "revision": "17a489de6190efea8b84fcfd7cba12a5"
  },
  {
    "url": "assets/js/111.529b5195.js",
    "revision": "9f12773fe0856c045e4d2cc93d3ee585"
  },
  {
    "url": "assets/js/112.c0e65e52.js",
    "revision": "ae64afa5e6ffb42cd001ed95039a11b8"
  },
  {
    "url": "assets/js/113.1b24d100.js",
    "revision": "1407198081752a392546b2972ff724d2"
  },
  {
    "url": "assets/js/114.450077e3.js",
    "revision": "a037f16e807810913f4812b97ddc3c59"
  },
  {
    "url": "assets/js/115.0962e7b3.js",
    "revision": "b9a35a897aa6cfca7e9aa1e7ecced6b5"
  },
  {
    "url": "assets/js/116.80343209.js",
    "revision": "748f5b4cf96ff0fc15c0e8a8a881ac83"
  },
  {
    "url": "assets/js/117.28d20708.js",
    "revision": "fcea4efa51fe5b236f75de41a110f455"
  },
  {
    "url": "assets/js/118.e74c0443.js",
    "revision": "08838a3e5dd66ced83c35ca7720d520c"
  },
  {
    "url": "assets/js/119.40016a1d.js",
    "revision": "100f3f767ad54e07fd567ccaf6740ce0"
  },
  {
    "url": "assets/js/12.ab76b0bd.js",
    "revision": "8aaf59e0f2ce182b2440b22928baad0d"
  },
  {
    "url": "assets/js/120.842cf0bd.js",
    "revision": "1d10d6f5489a364e73f47eb3100e9b1f"
  },
  {
    "url": "assets/js/121.6fa593a5.js",
    "revision": "ff25b5bc4447fe2454ab1d985c7b6f03"
  },
  {
    "url": "assets/js/122.39055a61.js",
    "revision": "ecce32b6111a48065311f4ae970553c8"
  },
  {
    "url": "assets/js/13.fa2cca47.js",
    "revision": "279fc84245919a43780f79e65d46581c"
  },
  {
    "url": "assets/js/14.11d57462.js",
    "revision": "a1fe5d4beeb2bf2c3ee9f4783e89b860"
  },
  {
    "url": "assets/js/15.7f7b62e1.js",
    "revision": "38309bb650eaf839179062a79968132e"
  },
  {
    "url": "assets/js/16.1f434e79.js",
    "revision": "f2054aaf64180a08cca70d4d4b1a0bcb"
  },
  {
    "url": "assets/js/17.341f564a.js",
    "revision": "37207b2cc8a7296ef33d08bd6d7017bf"
  },
  {
    "url": "assets/js/18.b45827bb.js",
    "revision": "5cf8bc7137ba431a9cc1e22691d9c80b"
  },
  {
    "url": "assets/js/19.0fcd00e4.js",
    "revision": "931aaaeeac0259ed0cc32b3404c3f9ba"
  },
  {
    "url": "assets/js/2.50c0c95d.js",
    "revision": "bbb21214a323bb7b748c2b8986615894"
  },
  {
    "url": "assets/js/20.aedb17bc.js",
    "revision": "fc20c01bf9f7bd8f9c16075b71973c23"
  },
  {
    "url": "assets/js/21.d22dca94.js",
    "revision": "c946fa76f238494010b285f93abbb473"
  },
  {
    "url": "assets/js/22.4819435a.js",
    "revision": "3a82c71d1f0546cf0bd9f340cca0e6b9"
  },
  {
    "url": "assets/js/23.6aae16b6.js",
    "revision": "5385ba30ac25efa95399e97c14fe7822"
  },
  {
    "url": "assets/js/24.4873ca54.js",
    "revision": "f232468ef880acec7c318a3437290dc6"
  },
  {
    "url": "assets/js/25.76a1627d.js",
    "revision": "556afae065bc4aaba195c37f23928869"
  },
  {
    "url": "assets/js/26.bc4c279a.js",
    "revision": "39c9a0d10045ff10389713d9149f7702"
  },
  {
    "url": "assets/js/27.eb1897ef.js",
    "revision": "241e02b08a955b0a2e0992cb3088a4cf"
  },
  {
    "url": "assets/js/28.c0195e8a.js",
    "revision": "ca1538a293551a0abd47562f3141c922"
  },
  {
    "url": "assets/js/29.05b52044.js",
    "revision": "628aa37cef368380088b550ea97631ee"
  },
  {
    "url": "assets/js/3.75a33a02.js",
    "revision": "c557af8734ba1af6f7eaefbe87f20014"
  },
  {
    "url": "assets/js/30.edad0d75.js",
    "revision": "e9ed98f33aebbac0e6784f8b4bca8707"
  },
  {
    "url": "assets/js/31.39bcc518.js",
    "revision": "9d531bcfa61001a799d6f5a46fb33ed1"
  },
  {
    "url": "assets/js/32.e4f34273.js",
    "revision": "a21a131a81db44906500fcc232e06752"
  },
  {
    "url": "assets/js/33.fa19305b.js",
    "revision": "57e989336c7f95582b245c2fc78d2978"
  },
  {
    "url": "assets/js/34.ee009c6a.js",
    "revision": "c6cb612fb9a2ec79dab3d11dc23ebad5"
  },
  {
    "url": "assets/js/35.4849b2d6.js",
    "revision": "e46b93c601d34b761ae08fc41f0d002e"
  },
  {
    "url": "assets/js/36.ce357d0d.js",
    "revision": "94f8f0e697c3b3d115e0ca77d1eb39ce"
  },
  {
    "url": "assets/js/37.f41cd90d.js",
    "revision": "c28fabc6bb7af0cbde273bd9a758ff4b"
  },
  {
    "url": "assets/js/38.312b6743.js",
    "revision": "1532f856092679e0cdf3168e318c0bdc"
  },
  {
    "url": "assets/js/39.9aa5c1ac.js",
    "revision": "35a82f0d0c69a34d5a1d76ca2600877d"
  },
  {
    "url": "assets/js/4.9b186081.js",
    "revision": "f263c27025248d808176147debb90dd5"
  },
  {
    "url": "assets/js/40.830fc587.js",
    "revision": "322b5cd92296c63f78048235154114eb"
  },
  {
    "url": "assets/js/41.56bf3b7a.js",
    "revision": "497a30b70ebeb05ef1e99301b44d9f86"
  },
  {
    "url": "assets/js/42.73f8d4b1.js",
    "revision": "6e8bd113e994a290337fac59fce55f70"
  },
  {
    "url": "assets/js/43.98a6c1c8.js",
    "revision": "eff3447ae1baad76abcbeb851f24aef8"
  },
  {
    "url": "assets/js/44.3fb32089.js",
    "revision": "467349bad962da0ddab9fae020fc947e"
  },
  {
    "url": "assets/js/45.e2172f70.js",
    "revision": "7243aeab79829f929978d172a7f0737c"
  },
  {
    "url": "assets/js/46.a3014563.js",
    "revision": "1624251a184c1376633cdf629f07c4dc"
  },
  {
    "url": "assets/js/47.c0e20b50.js",
    "revision": "7eb598b7c7c04f66b6dc1dad6c034de3"
  },
  {
    "url": "assets/js/48.51fe11b0.js",
    "revision": "44b03cec8b3a9a28d373e6ca58e2a160"
  },
  {
    "url": "assets/js/49.30d655eb.js",
    "revision": "46ab4e0f39b9f6ed31067311aaf9bd00"
  },
  {
    "url": "assets/js/5.d720d12b.js",
    "revision": "7c4b84588c106383d60e5302517618e3"
  },
  {
    "url": "assets/js/50.4ba7c331.js",
    "revision": "c78d1ce7e239639187f1f1f5a22f6321"
  },
  {
    "url": "assets/js/51.3c1b266c.js",
    "revision": "c0e4f07cc62e0845d35b5a9f7431a5af"
  },
  {
    "url": "assets/js/52.1e4596e0.js",
    "revision": "6c2cac41a5ee4fb453008304469f1de3"
  },
  {
    "url": "assets/js/53.1d3feae3.js",
    "revision": "db4e9299694b537dd928bb777c84652e"
  },
  {
    "url": "assets/js/54.6b2f40cf.js",
    "revision": "88e232152f3e8f2df6370446c128644a"
  },
  {
    "url": "assets/js/55.9c6bd9cb.js",
    "revision": "e5766ef09d8f3a82a9e2821c3f38d808"
  },
  {
    "url": "assets/js/56.1082fd0e.js",
    "revision": "b64441d6337233ab641827c88b355a94"
  },
  {
    "url": "assets/js/57.cd051699.js",
    "revision": "bd01dfde17ce2babb9f516a7d7216d5b"
  },
  {
    "url": "assets/js/58.0959d73c.js",
    "revision": "378596e243ea89d87abbe1d46a9d5aa1"
  },
  {
    "url": "assets/js/59.96efe362.js",
    "revision": "1d1aa1ea4e1968a9d5a57716de8f7a71"
  },
  {
    "url": "assets/js/6.838d5a84.js",
    "revision": "9aca422e25e224c5137e05015188b423"
  },
  {
    "url": "assets/js/60.6bd0fd22.js",
    "revision": "7b084cfdeb3c4286887756a848357867"
  },
  {
    "url": "assets/js/61.13a66fbb.js",
    "revision": "21ef2b90dea59775ed9494180e0968f3"
  },
  {
    "url": "assets/js/62.170d9996.js",
    "revision": "ee1632446d8962de767310d0f1df727c"
  },
  {
    "url": "assets/js/63.881daa06.js",
    "revision": "9e96900f44bc84b559e6b5f7f55337c1"
  },
  {
    "url": "assets/js/64.aab898a8.js",
    "revision": "5b9d0beabb30cc203dcdbdd7f6033398"
  },
  {
    "url": "assets/js/65.5664f45b.js",
    "revision": "fc32134a20db00fc6672a82d640a41d9"
  },
  {
    "url": "assets/js/66.059a11d4.js",
    "revision": "1184bc328151d753a9cea088c0befd5e"
  },
  {
    "url": "assets/js/67.1f8b6d5a.js",
    "revision": "ce81a4db4331b80526ab1a46e7517918"
  },
  {
    "url": "assets/js/68.4f7da608.js",
    "revision": "977a8193844c1351a40bfcc0a3e2077e"
  },
  {
    "url": "assets/js/69.fbb52d02.js",
    "revision": "c36993da7a12a7c1c819f6a6de3f23a9"
  },
  {
    "url": "assets/js/7.43a1cfbb.js",
    "revision": "565bc30e9ff91262caa0e7903d2194ab"
  },
  {
    "url": "assets/js/70.7fa3da3c.js",
    "revision": "f60fb1f5ebeaf80ef28d0c2e13e02303"
  },
  {
    "url": "assets/js/71.795ceb35.js",
    "revision": "28b55e60f26fc4447ce513f0ad6d9716"
  },
  {
    "url": "assets/js/72.1f6d56bf.js",
    "revision": "0e38bd6feeadd46ebdf97c8969b79b57"
  },
  {
    "url": "assets/js/73.0e0a654e.js",
    "revision": "c2ea61319280a54fb45e813ce6975e2b"
  },
  {
    "url": "assets/js/74.0e60e60a.js",
    "revision": "3dfa13ede933deecb0e9cb2a90d82037"
  },
  {
    "url": "assets/js/75.205be73d.js",
    "revision": "2867ff54b63babcb3cb9667cf1984462"
  },
  {
    "url": "assets/js/76.1ae1f030.js",
    "revision": "5735621576bb9677ced1c30c5b7fb3cd"
  },
  {
    "url": "assets/js/77.e72c7226.js",
    "revision": "91273f2893b3d1d6e938322f6283f039"
  },
  {
    "url": "assets/js/78.0cb60cc8.js",
    "revision": "abb55411861e815637da8b9117a45e14"
  },
  {
    "url": "assets/js/79.37c81eb7.js",
    "revision": "7d6d7f7c6bf1f457df6608d635547b9a"
  },
  {
    "url": "assets/js/8.e0a990e7.js",
    "revision": "1b8940dc395988cb58e799bb172e65c8"
  },
  {
    "url": "assets/js/80.cd013a30.js",
    "revision": "bd2c9caa1e93d310de35688234026b71"
  },
  {
    "url": "assets/js/81.7895e895.js",
    "revision": "1a08a56ad06629b57fda555e39037f0d"
  },
  {
    "url": "assets/js/82.6a1e1da4.js",
    "revision": "bd3beafecd98678fe1d80ae63c71e4dc"
  },
  {
    "url": "assets/js/83.e9ff3b07.js",
    "revision": "5ace726b2e2849882c98d613c3458167"
  },
  {
    "url": "assets/js/84.21b918c0.js",
    "revision": "1695f6f735e74ef8ec36acbda43628a0"
  },
  {
    "url": "assets/js/85.b6427dea.js",
    "revision": "ed492daa73826d2fc7c7e4cc714238fc"
  },
  {
    "url": "assets/js/86.f4c5c6f1.js",
    "revision": "c97149dd34f30cf5f854bfe0d069bf70"
  },
  {
    "url": "assets/js/87.4f561d92.js",
    "revision": "3dc3dddc0d946caed311da1159dce4fa"
  },
  {
    "url": "assets/js/88.8d0daf32.js",
    "revision": "0cbdf190fe1bb006cffee918ae1155a2"
  },
  {
    "url": "assets/js/89.890efde6.js",
    "revision": "b671c6e042207150451debe87ae144b9"
  },
  {
    "url": "assets/js/9.e9646124.js",
    "revision": "f4c5c2ae061894dff0e46efe30dabe12"
  },
  {
    "url": "assets/js/90.928c223e.js",
    "revision": "646e26705c42f582499635e1f32eb03c"
  },
  {
    "url": "assets/js/91.7fc7af62.js",
    "revision": "246e1b8bbf2cd2d95b291116b71dff3c"
  },
  {
    "url": "assets/js/92.f9849f8a.js",
    "revision": "66e9da777e43dcafe13f39f150e5bd2b"
  },
  {
    "url": "assets/js/93.213ee155.js",
    "revision": "8fb65119e5673c5508b075e0bbbfe462"
  },
  {
    "url": "assets/js/94.0b0dde70.js",
    "revision": "396b2cead0d2fbfc9cd97071a377ea86"
  },
  {
    "url": "assets/js/95.e0261c96.js",
    "revision": "e3409b7540119a43efe121be9f13fa41"
  },
  {
    "url": "assets/js/96.008cf034.js",
    "revision": "2c788c28fbb8fee19c8799ea5f0160c0"
  },
  {
    "url": "assets/js/97.ca853c16.js",
    "revision": "18b2c5ae956881066e5c3f8548f1ae34"
  },
  {
    "url": "assets/js/98.471bf6b2.js",
    "revision": "64d5730bc04cd7596d6a74190e794f96"
  },
  {
    "url": "assets/js/99.aeb61123.js",
    "revision": "f0b5598093b3925323590da401227bc1"
  },
  {
    "url": "assets/js/app.41454ee1.js",
    "revision": "f09978463249c578798df5a7cf017ba8"
  },
  {
    "url": "assignments/api.html",
    "revision": "ebdff10313a678a35b67f08ae21074ff"
  },
  {
    "url": "assignments/canvas.html",
    "revision": "4c1e5ce13f6fcde9bc0f92896091c214"
  },
  {
    "url": "assignments/index.html",
    "revision": "640f3362dbfc6a601cbf3395a4e06fdc"
  },
  {
    "url": "assignments/not-exercises.html",
    "revision": "569422540daf81f08d09d5d8485f02b4"
  },
  {
    "url": "assignments/practice.html",
    "revision": "6283680467e1ee72cfebd0016745d19a"
  },
  {
    "url": "assignments/project-setup.html",
    "revision": "50cb9d320a73bf11740c41c306579a41"
  },
  {
    "url": "assignments/projects.html",
    "revision": "3ff23c9a12fdf17101b7c9fd05613904"
  },
  {
    "url": "HeadshotPlaceholder.png",
    "revision": "dd905cc985945c4b067ad8e177bbefe0"
  },
  {
    "url": "hero.png",
    "revision": "a77ff0e74d076093d400c27e493f4974"
  },
  {
    "url": "index.html",
    "revision": "7d4481b9ba70af64e4983e31542a9273"
  },
  {
    "url": "modules/sample.html",
    "revision": "60441adcc7ae99012826c4ae8a73050c"
  },
  {
    "url": "modules/week1/canvas.html",
    "revision": "aebdae5bb25da41b19ba3afecd40f804"
  },
  {
    "url": "modules/week1/git.html",
    "revision": "132702111f8c7397e3900d4bb00bfaeb"
  },
  {
    "url": "modules/week1/index.html",
    "revision": "eb3d5b5eebbe547c2a763b51c98b01f6"
  },
  {
    "url": "modules/week1/npm.html",
    "revision": "41c9675c398da223c3b7e98d0403ad44"
  },
  {
    "url": "modules/week1/vscode.html",
    "revision": "7ac37574389721cbafd27f018511726a"
  },
  {
    "url": "modules/week1/yarn.html",
    "revision": "9accec2112f09bc7ec5f1a8512819715"
  },
  {
    "url": "modules/week10/device-orient.html",
    "revision": "fa28b864e09a4845a5c42a2417bb4d1d"
  },
  {
    "url": "modules/week10/fullscreen.html",
    "revision": "9d35f880a4015fc5851ea0aab0600a3c"
  },
  {
    "url": "modules/week10/index.html",
    "revision": "8818254f7ee28c6bcf91f1f83e978e16"
  },
  {
    "url": "modules/week10/network.html",
    "revision": "831f40c29b74a356681da1082d1e4cd5"
  },
  {
    "url": "modules/week10/page-visibility.html",
    "revision": "82ae82c52295f5902d1a3bca8fada7e4"
  },
  {
    "url": "modules/week10/screen-orient.html",
    "revision": "704eb4c90c10c7dac94ab0ea97d1aa77"
  },
  {
    "url": "modules/week10/vibration.html",
    "revision": "26a9592d1da1aee5bfb5dfaf2a8fa006"
  },
  {
    "url": "modules/week11/async-await.html",
    "revision": "ed485e73d92e0d11930a845bcd81f587"
  },
  {
    "url": "modules/week11/dataset-props.html",
    "revision": "e328e531ffd83a56ec441d5d0dacadd7"
  },
  {
    "url": "modules/week11/index.html",
    "revision": "3873cbf0fdadcf39632a0ef45ae2d6f2"
  },
  {
    "url": "modules/week11/iphone-x.html",
    "revision": "c3fb29de34933c7a666cce62f3bd936b"
  },
  {
    "url": "modules/week11/iterator-generator.html",
    "revision": "c426af5dbafe3fc8540715b8659675e6"
  },
  {
    "url": "modules/week11/payment-request.html",
    "revision": "3f61dd0aeb50cf788969f7545586769b"
  },
  {
    "url": "modules/week11/web-rtc.html",
    "revision": "4d5795ee020501cb3b6876fb0171087d"
  },
  {
    "url": "modules/week12/common-regexp.html",
    "revision": "39de644ef1b8ac5659648c21f7c7afbc"
  },
  {
    "url": "modules/week12/es6-classes.html",
    "revision": "8661973e6b695502b08838e1326060ed"
  },
  {
    "url": "modules/week12/hex-bin-64.html",
    "revision": "a56c6d2d142b60be93cb5525c204a20c"
  },
  {
    "url": "modules/week12/index.html",
    "revision": "a610da68a981adc82d5a3dd31ec7ab0f"
  },
  {
    "url": "modules/week12/regexp.html",
    "revision": "9f802a1d1b79c6b3ab3ff954e4d91032"
  },
  {
    "url": "modules/week12/speech.html",
    "revision": "2fa0d7b7cfaa5fd5a0dbcf017001f5ef"
  },
  {
    "url": "modules/week12/steganography.html",
    "revision": "ed40682d504ff7565635304fc342697d"
  },
  {
    "url": "modules/week12/typed-arrays.html",
    "revision": "8301441230b7acb959cba33052d1be1b"
  },
  {
    "url": "modules/week12/upload-files-fetch.html",
    "revision": "2026536599e4ae4176d0306c59f28939"
  },
  {
    "url": "modules/week13/import-export.html",
    "revision": "45509a3caa7beddf46c22099adb5269a"
  },
  {
    "url": "modules/week13/index.html",
    "revision": "4065053c239d03e3f782c35c80285382"
  },
  {
    "url": "modules/week13/permission-api.html",
    "revision": "ca7a5f056dbb16f1e597b6c19ff7a235"
  },
  {
    "url": "modules/week13/postman.html",
    "revision": "cd601b2f71a84d5c6255095e27bc43ef"
  },
  {
    "url": "modules/week13/web-share.html",
    "revision": "10bb6e4e2ffb5c6e66ff8c87b21970c9"
  },
  {
    "url": "modules/week13/web-worker.html",
    "revision": "684daa3e6d2a2aec03caeac47e52e7aa"
  },
  {
    "url": "modules/week14/html-templates.html",
    "revision": "dae126fb021a7fd260ca7adf4536bc81"
  },
  {
    "url": "modules/week14/index.html",
    "revision": "52184a7eea0993c06f8d5d158ea74b06"
  },
  {
    "url": "modules/week14/maps-sets.html",
    "revision": "ea5cd1f6aab3185ac6c962b2751c2102"
  },
  {
    "url": "modules/week14/optional-chaining.html",
    "revision": "de2ee8ce6a0d7e473c96666ee521a96f"
  },
  {
    "url": "modules/week14/qr-codes.html",
    "revision": "e2a656c2685a19c960fe35851981dbfa"
  },
  {
    "url": "modules/week14/service-worker.html",
    "revision": "269145cf6a06ad5b56da3dd37f6feef6"
  },
  {
    "url": "modules/week14/shadow-dom.html",
    "revision": "bfe0e07b7d114abc99f2c934fcc95754"
  },
  {
    "url": "modules/week14/template-strings.html",
    "revision": "80e5d7ee8ac51728e6fcc0a5905918d2"
  },
  {
    "url": "modules/week14/web-components.html",
    "revision": "a2667c9544552694b83a082a909205c1"
  },
  {
    "url": "modules/week2/arrays.html",
    "revision": "86e35cb91b36ef49046302dee735770f"
  },
  {
    "url": "modules/week2/index.html",
    "revision": "7d15533e3ae8ef7bf46edfb44a1747c9"
  },
  {
    "url": "modules/week2/trig.html",
    "revision": "09effbeb1f7ca3df4940a17b30770491"
  },
  {
    "url": "modules/week3/android.html",
    "revision": "2b5f51f427ea59a39ad31478268a946e"
  },
  {
    "url": "modules/week3/cordova-commands.html",
    "revision": "fb8721aecd1e377ffbc9460febfe3ca9"
  },
  {
    "url": "modules/week3/cors.html",
    "revision": "5b42c1675f5d5243e8a84e26abadd438"
  },
  {
    "url": "modules/week3/csp.html",
    "revision": "54b81d801a782e0a9c9d4ba2102073ee"
  },
  {
    "url": "modules/week3/history.html",
    "revision": "7c953c69dfae2534236eb75ccabdd8c8"
  },
  {
    "url": "modules/week3/index.html",
    "revision": "2221ff84766d533bae010259dfc012e5"
  },
  {
    "url": "modules/week3/orly.html",
    "revision": "475376e6888b15f34134a3f875062aac"
  },
  {
    "url": "modules/week3/spa.html",
    "revision": "5fc0c943f7dea36641f11897b5fb7035"
  },
  {
    "url": "modules/week3/timers.html",
    "revision": "d6da454236dc7109231cbf84ec809a03"
  },
  {
    "url": "modules/week4/cordova-camera.html",
    "revision": "bb32155051f081d79ab8007ed3e0bd22"
  },
  {
    "url": "modules/week4/deep-shallow.html",
    "revision": "3d94817479d5fad3d0b89aea114d16ff"
  },
  {
    "url": "modules/week4/icons.html",
    "revision": "0a37182cd58daea673a37207bee41efb"
  },
  {
    "url": "modules/week4/index.html",
    "revision": "4c368424b3b4d02d5e9041d176989b50"
  },
  {
    "url": "modules/week4/markdown.html",
    "revision": "18d35262f77f1294e51802bcbda92d64"
  },
  {
    "url": "modules/week4/star-rating-system.html",
    "revision": "3c456f90bd56563dd7e8d7df4764ad64"
  },
  {
    "url": "modules/week4/throw-catch.html",
    "revision": "195fcc06f71ae56c6dace0818b8f9460"
  },
  {
    "url": "modules/week5/closure-curry.html",
    "revision": "2c53909e3cc5d5c4771b3abe78a1a616"
  },
  {
    "url": "modules/week5/cordova-media.html",
    "revision": "a1587fea50aa46d16248eeaef5926115"
  },
  {
    "url": "modules/week5/default-params.html",
    "revision": "fa0fb30554c2ca258d99c10e9f3d2d44"
  },
  {
    "url": "modules/week5/event-loop.html",
    "revision": "d53f1084e46f98b4103f1e298dc25a05"
  },
  {
    "url": "modules/week5/file-assets.html",
    "revision": "a7e753bcc64e8b05d86c8a4c8223bd62"
  },
  {
    "url": "modules/week5/index.html",
    "revision": "52b1d131329ae4130ecb630db15502d9"
  },
  {
    "url": "modules/week5/object-prototypes.html",
    "revision": "2175e4267e31f2f80eb924dd604e409c"
  },
  {
    "url": "modules/week5/spashscreens.html",
    "revision": "67ba016e124442aa0c519c6034973dbe"
  },
  {
    "url": "modules/week6/call-apply-bind.html",
    "revision": "e79c1e7d83e3083cde9c5f6771438df3"
  },
  {
    "url": "modules/week6/dates.html",
    "revision": "1ffea0ebf49989e391692609f157e1e6"
  },
  {
    "url": "modules/week6/index.html",
    "revision": "32fee374829403edf5f86b367ef58df4"
  },
  {
    "url": "modules/week6/ios.html",
    "revision": "2f56ffaf0578850e2b36894f55bc367c"
  },
  {
    "url": "modules/week6/local-notify.html",
    "revision": "ef5f7bb341a2666c6e55aa743a42e6e9"
  },
  {
    "url": "modules/week6/luxon.html",
    "revision": "dc376856ec2f6456fa94cd027a6a1e52"
  },
  {
    "url": "modules/week6/private-data.html",
    "revision": "672decfcec3e3573cc763143646d454f"
  },
  {
    "url": "modules/week6/short-circuit.html",
    "revision": "64fab45e137e2eb0e78d4127c2ab1d4a"
  },
  {
    "url": "modules/week6/web-notify.html",
    "revision": "ecb39f09cf068352319d4c083b00319f"
  },
  {
    "url": "modules/week7/cordova-geolocation.html",
    "revision": "83b6d9b01b522b0f17355385b6c89472"
  },
  {
    "url": "modules/week7/cordova-status.html",
    "revision": "eab6c4a9dde48ac415c65c277e85fc79"
  },
  {
    "url": "modules/week7/geolocation.html",
    "revision": "1df90ba8131db1a7d6e6862d8e1dfb43"
  },
  {
    "url": "modules/week7/google-maps-controls.html",
    "revision": "b8a008e9f1b74f923e73392048e14dff"
  },
  {
    "url": "modules/week7/google-maps-events.html",
    "revision": "4f1fd0a804cc88731943052436da267e"
  },
  {
    "url": "modules/week7/google-maps-geometry.html",
    "revision": "c726e4743bcb95b2fe0bda6feb6a4be3"
  },
  {
    "url": "modules/week7/google-maps-markers.html",
    "revision": "61633d06dc608bd3f8ec075ad5906f73"
  },
  {
    "url": "modules/week7/google-maps.html",
    "revision": "fd8a1af81cc17e0f55b8dc45b920ccd8"
  },
  {
    "url": "modules/week7/index.html",
    "revision": "bde75b1136430510bb6d063044e5268e"
  },
  {
    "url": "modules/week7/rest-spread.html",
    "revision": "e39f534b618bfb3db634188026388c92"
  },
  {
    "url": "modules/week8/canvas-thumbnails.html",
    "revision": "bb252a23e11f0213f264939bb0882050"
  },
  {
    "url": "modules/week8/cordova-files.html",
    "revision": "e9c5d329bdc67963a76e2967d8a77b75"
  },
  {
    "url": "modules/week8/destructuring.html",
    "revision": "a06ca3eebe8734bb0d7e7e99e4a63d0a"
  },
  {
    "url": "modules/week8/index.html",
    "revision": "43cdf9b8e2acabaac499edd236668b7b"
  },
  {
    "url": "modules/week8/media-capture.html",
    "revision": "3067caf0e1857ab07c4aef66530c821e"
  },
  {
    "url": "modules/week8/promises.html",
    "revision": "c37f00bcfb50b523481666182ce32829"
  },
  {
    "url": "modules/week8/property-descriptors.html",
    "revision": "ab4ee4318b3f042f477b6852516cdf53"
  },
  {
    "url": "modules/week8/sizing-notes.html",
    "revision": "62b89ea4006983ad46947737155a402b"
  },
  {
    "url": "modules/week9/android-permissions.html",
    "revision": "26febf0dc16512b7a5c7643a19cee191"
  },
  {
    "url": "modules/week9/cordova-sql.html",
    "revision": "ae913182e423f5a08d77d0aed6aa4962"
  },
  {
    "url": "modules/week9/gestures.html",
    "revision": "847d49916d6cb3643ec2b03b20e29c24"
  },
  {
    "url": "modules/week9/index.html",
    "revision": "6290390cfebc10963ba30c4a567740a4"
  },
  {
    "url": "modules/week9/sql-sample.html",
    "revision": "c262ce28e8d35419856e09f58a95eea9"
  },
  {
    "url": "modules/week9/tinyshell.html",
    "revision": "e7e608ac7dd7d2b56c2b0edb19d39b81"
  },
  {
    "url": "overview/contacts.html",
    "revision": "cdd2da6cdf6f1c5813f2739c52fca355"
  },
  {
    "url": "overview/course-section-information.html",
    "revision": "8491592ae2c9179d2256a150ae004f06"
  },
  {
    "url": "overview/index.html",
    "revision": "3c128b968a3e5ad618093469c19b610f"
  },
  {
    "url": "resources/index.html",
    "revision": "25b52482bd4ce1382c8474760b00383d"
  },
  {
    "url": "steve-griffith.jpeg",
    "revision": "3fb81c0d91a190afe01fd27de65080f2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
