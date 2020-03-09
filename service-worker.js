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
    "url": "404.html",
    "revision": "359b75104547cf935f705c97ce410200"
  },
  {
    "url": "assets/css/0.styles.f02ec9c3.css",
    "revision": "8cde49ff1398a5cc41a9c3dc0c828a50"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.4b1a5b3f.js",
    "revision": "bcf40f73da25c3b873e020f661e1836a"
  },
  {
    "url": "assets/js/10.5c4eb438.js",
    "revision": "31de8d7f41ec6c1b7e8930e325ad75b4"
  },
  {
    "url": "assets/js/11.dc49d2a6.js",
    "revision": "87db5d390d845337809faf71a8e17c76"
  },
  {
    "url": "assets/js/12.5ca38b79.js",
    "revision": "19928a6690e844b69af46babb62050ff"
  },
  {
    "url": "assets/js/13.635dd1d4.js",
    "revision": "d3fe23d21831853a0ec5d2dba4a37749"
  },
  {
    "url": "assets/js/14.e268dd04.js",
    "revision": "7e738d7e6c09307fd305fc81a80f7829"
  },
  {
    "url": "assets/js/15.0e24645f.js",
    "revision": "1b749b973fc57e040c17afec8eab497c"
  },
  {
    "url": "assets/js/16.626120e4.js",
    "revision": "bcdc95bb0d4fa83ab209729f405e4abf"
  },
  {
    "url": "assets/js/17.48342fb8.js",
    "revision": "88053ed7584730ca039805d7299f8b6f"
  },
  {
    "url": "assets/js/3.b48d6374.js",
    "revision": "20f066e79ecb22596f1fcbf321ae2221"
  },
  {
    "url": "assets/js/4.6beafc0b.js",
    "revision": "7ec4a6de5b79b25e177d1f2890be8e6b"
  },
  {
    "url": "assets/js/5.74c4e97c.js",
    "revision": "46b316bfb43f832f5aee6110b52c9e31"
  },
  {
    "url": "assets/js/6.7cf9da94.js",
    "revision": "4b1581fef1acb82a894dc594b227cc76"
  },
  {
    "url": "assets/js/7.83406ba8.js",
    "revision": "3e4a7211128ddcce1b3da94c10073e5a"
  },
  {
    "url": "assets/js/8.3a9bdea2.js",
    "revision": "d7a8668d9c0090ad3d7f93ba887c686b"
  },
  {
    "url": "assets/js/9.385fea34.js",
    "revision": "c1274bcab8da65c3bd19c2bd2fdf218e"
  },
  {
    "url": "assets/js/app.decc2172.js",
    "revision": "c27aa48be76ff67f4a17102ef7de12c5"
  },
  {
    "url": "categories/blog/index.html",
    "revision": "c0c10035f035a07e2fb1fdf360a7d03d"
  },
  {
    "url": "categories/blog/test.html",
    "revision": "05fe7c2e43aef5584ccc73fb5fb4152e"
  },
  {
    "url": "categories/index.html",
    "revision": "e601a8ede694001dca8e6367a218848d"
  },
  {
    "url": "index.html",
    "revision": "eacaa2324e800b69d3bbc268f2cdcfac"
  },
  {
    "url": "tag/index.html",
    "revision": "d69f32f4ff7b1cd8b3a91a4a1e689d4b"
  },
  {
    "url": "time.jpg",
    "revision": "217a6e2c0d56f4b97415f4a2bf79f92f"
  },
  {
    "url": "timeline/index.html",
    "revision": "d041ca9a639387e4a6c1a1f6cdaf5e85"
  },
  {
    "url": "views/vue-next/effect.html",
    "revision": "e62bd08a234733ffda8f437fe6a3e446"
  },
  {
    "url": "views/vue-next/handler.html",
    "revision": "06ce87b3f6a539c8115d51c9f59e6ae7"
  },
  {
    "url": "views/vue-next/reactive.html",
    "revision": "bf3e12a7a43b2dd538c6f644c708d5bf"
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
