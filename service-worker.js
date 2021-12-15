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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "6f497f0bd3b1dd85416bdbab7d6901e7"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.1160f6fc.css",
    "revision": "da50c7329dbabc55c05c83b1af8b7e8a"
  },
  {
    "url": "assets/img/account_by_id.376f340c.png",
    "revision": "376f340c766efa4fc9cd12e2b0c50382"
  },
  {
    "url": "assets/img/add_account.dfe773d3.png",
    "revision": "dfe773d3ee15655a5f228243afc5fc6b"
  },
  {
    "url": "assets/img/all_accounts.e9cbedb8.png",
    "revision": "e9cbedb822def0bff51bb17ebde5b1f4"
  },
  {
    "url": "assets/img/delete_account_by_id.9c46ba9a.png",
    "revision": "9c46ba9a3cad281bd11a4f169aae36a7"
  },
  {
    "url": "assets/img/get_updated_account_by_id.f1b7e136.png",
    "revision": "f1b7e13685d329728a19b47a779d46d9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/update_account.bc63d370.png",
    "revision": "bc63d3705b103fc4d5826d18b449cad4"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.da649609.js",
    "revision": "7bbd546870a0192a249b06224b22b20a"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.71958f07.js",
    "revision": "f3987054b5a1a800768f2f2617120e89"
  },
  {
    "url": "assets/js/14.43f548f0.js",
    "revision": "7d8d52e1d276c4efe0b3315c904f56fd"
  },
  {
    "url": "assets/js/15.0fddd0e8.js",
    "revision": "66943fc0e940dfbaa08a3fb8f39580ff"
  },
  {
    "url": "assets/js/16.e5c50e7d.js",
    "revision": "b2306153b4e9d88957c5eb3e71aa6fd9"
  },
  {
    "url": "assets/js/17.746d0f65.js",
    "revision": "c08f79bea96edf70d48d870b9b395b7c"
  },
  {
    "url": "assets/js/18.6c661e3a.js",
    "revision": "43d20435cc85365b36b71217898d6f61"
  },
  {
    "url": "assets/js/19.81b795fc.js",
    "revision": "2aed9a027de84fbacc5693bf8c6093be"
  },
  {
    "url": "assets/js/2.b31afc06.js",
    "revision": "e83ae08752bb15e89a35040767e944e9"
  },
  {
    "url": "assets/js/20.83a5a2ef.js",
    "revision": "d6fc44a5a5dfdd114537ca858055fa80"
  },
  {
    "url": "assets/js/21.a777e662.js",
    "revision": "f7eedeb1fcc53fff50606291dd86e787"
  },
  {
    "url": "assets/js/22.f256f9c0.js",
    "revision": "4f3b986705a358bfec984011390939e4"
  },
  {
    "url": "assets/js/23.b0eb9fd8.js",
    "revision": "e971c342b37633901c04f49c2b869acd"
  },
  {
    "url": "assets/js/24.946ba04b.js",
    "revision": "fbf96e027d47a6effe32a776055c9268"
  },
  {
    "url": "assets/js/26.92f11a01.js",
    "revision": "30d3a279ef2c9a3926b29b676025ac05"
  },
  {
    "url": "assets/js/3.d9f5edbc.js",
    "revision": "2e1444d157e696c713d2948768a408ea"
  },
  {
    "url": "assets/js/4.6a9d324c.js",
    "revision": "cc82cd7f039e296741de5bbc9874c66f"
  },
  {
    "url": "assets/js/5.66e81c4b.js",
    "revision": "380ea1057a82131278aaa086feeaac57"
  },
  {
    "url": "assets/js/6.c6360e74.js",
    "revision": "fd09527626dd68c3ac05800c5aeac174"
  },
  {
    "url": "assets/js/7.d6fbf01d.js",
    "revision": "46ad7d5ada3793aa18628a96f89ce767"
  },
  {
    "url": "assets/js/8.9bd88bfb.js",
    "revision": "6e77d6755a4be3b51d8e4cbe8328b320"
  },
  {
    "url": "assets/js/9.12a41922.js",
    "revision": "bd7019f9104848e37a7283efbd174418"
  },
  {
    "url": "assets/js/app.980d70e0.js",
    "revision": "30c54fbc9c2db793ad29fc6d29b780d3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f74c477d22577693f38c4c53b28ff25a"
  },
  {
    "url": "design/index.html",
    "revision": "95048ef36acfb5d89e5f8c86e367cac2"
  },
  {
    "url": "EER-diagram.png",
    "revision": "c3eca1978cf566cb00bbc00810cdd6aa"
  },
  {
    "url": "index.html",
    "revision": "0b601af657fc57258c58c8d59cf8fab7"
  },
  {
    "url": "intro/index.html",
    "revision": "c485a86f7f9f6e1a25d159f58d6e1346"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "067418cf1ef4691fcb434d006acc4df7"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "e00fb080e607775205a8856b78847339"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "744d6e37425985e35b6764e3b1913601"
  },
  {
    "url": "software/index.html",
    "revision": "41764400b8b65c312603bbc2b886fef3"
  },
  {
    "url": "test/index.html",
    "revision": "fa8fe0a5d1f43544dbf0f1d99ec57596"
  },
  {
    "url": "use cases/index.html",
    "revision": "b9c3076625eecc4ba2b1b202d2361335"
  }
].concat(self.__precacheManifest || []);
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
