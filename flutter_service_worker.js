'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "942531a078d3ced21813ebfba9953b0e",
"assets/assets/avatar/bear.png": "913d730153f90c7afcf7c6ddb742e3e4",
"assets/assets/avatar/cat.png": "2a45f52cfe8c6676f4f4e596bdae6a46",
"assets/assets/avatar/chicken.png": "babf5a138efaec8aeec402ab8a13a20b",
"assets/assets/avatar/deer.png": "ddee89c1858cd08c58c55a89dfa2a6d1",
"assets/assets/avatar/dog.png": "97eab0b09bf451637c3e60257f41c572",
"assets/assets/avatar/owl.png": "931c032a84ae7a09f7c9aeec27b8d235",
"assets/assets/avatar/polar-bear.png": "6b8cfdefc98f9585fe034fcc500290fc",
"assets/assets/avatar/rabbit.png": "84be54783ba79365a8c7e657113f2d5c",
"assets/assets/avatar/sobek.png": "6f1703aa963bc5a6340aaef1fc972d96",
"assets/assets/avatar/weasel.png": "e22d5ec2c2bf67b59e8a53eb6a86d9f6",
"assets/assets/crop/baby-corn.png": "9a5497c9a9486681cbc0af833464240a",
"assets/assets/crop/cauliflower.png": "dc33d6bfdaaa8b0b18689ed5cb06167a",
"assets/assets/crop/ChineseCabbage.png": "876f631640876312aaa5d2f0555b3c57",
"assets/assets/crop/coconut-dry.png": "9cc8ea43b681cb82990ee4f77e096d00",
"assets/assets/crop/coconut.png": "d77004bc5a414fb743467f42b17e27dd",
"assets/assets/crop/corn.png": "0d5b03083451a667f78aa2971a3cd5e6",
"assets/assets/crop/cucumber.png": "189285104a4dfb1659345f4d3a4aedec",
"assets/assets/crop/garlic.png": "46b9083e236f6811c50fd89918dbf82f",
"assets/assets/crop/green_beans.png": "c669ef3acc854d8af5e876c594967a3b",
"assets/assets/crop/kale.png": "60cb1577c687e298f08c55806a1bd754",
"assets/assets/crop/lettuce.png": "db362fb9b0a2bf603eef843499a2585f",
"assets/assets/crop/longan.png": "88ab9705a9c0e7000c2ad196d528f9af",
"assets/assets/crop/lychee.png": "6720c6a5392b8b6d73c5aecb2bc4336a",
"assets/assets/crop/onion.png": "6b6043e5819b4d87174e0ea75d8a65c2",
"assets/assets/crop/paddy.png": "1ae078344b8c7df2cf3b1b04a49896b3",
"assets/assets/crop/palm.png": "1e92bf389fe7510871545587b815079e",
"assets/assets/crop/pineapple.png": "45732d15b0377446bd0806bfc01d678f",
"assets/assets/crop/rambutan.png": "b8c6a4c335e39165ec2d73213f74f6ea",
"assets/assets/crop/rice.png": "2897aeb3428475d5a7025dbfca0cce15",
"assets/assets/crop/rubber.png": "bdc706fd89e937109935bb8228bc2580",
"assets/assets/crop/shallot.png": "15648d54eb54fea47301bb2c65e351d0",
"assets/assets/crop/SitaTomato.png": "73680d184b8a9bb4a4012e93b9b4c273",
"assets/assets/crop/sorghum-red.png": "84aaf33bb57b4beea09c6e777cb38695",
"assets/assets/crop/sorghum-white.png": "3aec6bc3addec14029695e6d54e43980",
"assets/assets/crop/stickyrice.png": "87b57b4d925a999c41c418e0bbfe80f1",
"assets/assets/crop/tangerine.png": "97cbbe9287b47204512f179b692ac5b1",
"assets/assets/crop/tomato.png": "cd2e6e3e5e9bb8c7e2349dacbef9aaff",
"assets/assets/crop/turnip.png": "663ed25508e3cfadabb4d0c40fe6dcc2",
"assets/assets/crop/white_rice.png": "e605aa2f19974ecd9a45b81f937c01a2",
"assets/assets/crop/yucca.png": "8fd876b5b449ca4f9edc4767ecd52867",
"assets/assets/icons/cloudy_icon.png": "11f02ebd8df1c0eab8be298a29c63f81",
"assets/assets/icons/feednews.png": "53d381953b657d7a62cb6db443cdd1b3",
"assets/assets/icons/seedling_icon.png": "09bf4ba6d3e2fa904745162b0bc9c1c5",
"assets/assets/icons/water-level.png": "da855ea1f2779e20f56c45d1d71adfc3",
"assets/assets/icon_app_luncher/flood_icon.png": "722062418c1c5e12b8cda846f3efa7e4",
"assets/assets/images/america.png": "4780ebc9fcb3584a3d59267ee5fdcf31",
"assets/assets/images/myanmar.png": "a2dd812be3a14e422f76cc04b559b92b",
"assets/assets/images/normal.jpg": "915332e773bc447b5e848f77a43db4b5",
"assets/assets/images/thailand.png": "a3c739c7c66fbeefdc017fdc08e2c939",
"assets/assets/images/water_highLevel.jpg": "1e878b697ab56a386aae73d94eba8a16",
"assets/assets/images/water_lowLevel.jpg": "531ed8a4ec40263e81c93e855a3cf417",
"assets/assets/images/water_overLevel.jpg": "380329bb9f8148f1c8c95829c80896f8",
"assets/assets/images/water_veryHighLevel.jpg": "c575c54106e9b2fade64b25412f132e9",
"assets/assets/images/water_veryLowLevel.jpg": "ce613031e3e5a62749e9ffd424ec981a",
"assets/assets/levelwater/level1.png": "12bf0bc1d88c4af5c50ed2c9c5c09e5b",
"assets/assets/levelwater/level2.png": "634428f3e06413b216fef8a041325811",
"assets/assets/levelwater/level3.png": "74865beef1d21d5c1e21447271d8d4dd",
"assets/assets/levelwater/level4.png": "c165344b943bf654def92996db6a7303",
"assets/assets/levelwater/level5.png": "581044bfbb0e0e43ba89cf0afe6974bb",
"assets/assets/levelwater/level6.png": "71ef62f96cd5181686230130cad8bc90",
"assets/assets/levelwater/STN0390.png": "c7735b7d831e527df450af0f4745e853",
"assets/assets/tutorial/tutorial1.png": "30d8ada57638cc020b414f39dc0a8085",
"assets/assets/tutorial/tutorial1_eng.png": "8e84fb85875f7ea8b58e2bbb6a4f02b0",
"assets/assets/tutorial/tutorial1_MM.png": "7a1781fb44b84fe9981195a7dcc272b8",
"assets/assets/tutorial/tutorial2.png": "ae124c91be2794390d7e401dbdca2110",
"assets/assets/tutorial/tutorial2_eng.png": "9e8860d669a7b72ff65e41bd86320c26",
"assets/assets/tutorial/tutorial2_MM.png": "15e3fb72a7528a27035b13772b1061ba",
"assets/assets/tutorial/tutorial3.png": "d710265a9e5bca38c2a3484921ca80a2",
"assets/assets/tutorial/tutorial3_eng.png": "0fc9cbac576554a8fb194c82335eca51",
"assets/assets/tutorial/tutorial3_MM.png": "492f8560722fd46ad79251e09356c34e",
"assets/assets/tutorial/tutorial4.png": "35b48b7cae4c506934e053c6306966de",
"assets/assets/tutorial/tutorial4_eng.png": "66895cafd71c8e65f3cb96d56f91f977",
"assets/assets/tutorial/tutorial4_MM.png": "2f8028e33ceb1ac5debabff49426d3b8",
"assets/assets/tutorial/tutorial5.png": "9db840b10069b96e54822feef9068164",
"assets/assets/tutorial/tutorial5_eng.png": "bac097589df911fef1741254edcd5680",
"assets/assets/tutorial/tutorial5_MM.png": "7c27845a079fe212170f0216cee29e9f",
"assets/assets/weather/clear.svg": "a24c0ea1145ac528b421fb9ea53c2fe7",
"assets/assets/weather/cloudy.svg": "208043db1bfbd7d95a78aa7e5247f967",
"assets/assets/weather/heavy_rain.svg": "ef0b2f3adbf1ca5cbd79610665c084b0",
"assets/assets/weather/light_rain.svg": "7d99e56e295b08881800dc7ef4393bcf",
"assets/assets/weather/overcast.svg": "2c192d6e8119ea3c44198d6252a6bfa7",
"assets/assets/weather/partly_cloudy.svg": "fb835ec793d3b9c416a25fe0c64c63f5",
"assets/assets/weather/party%2520cloudy.svg": "fb835ec793d3b9c416a25fe0c64c63f5",
"assets/assets/weather/scattered_thunderstorms.svg": "60ea786faa6a1fe5dd31604ef961cba0",
"assets/assets/weather/showers.svg": "8383fde3e485600cb15e8a1e1f47225a",
"assets/assets/weather/thunderstorms.svg": "333b65cf573e6121f6dd4eaa8fd928ce",
"assets/FontManifest.json": "c1c1b4c6129e9f8f0a5370b47e3dab99",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/fonts/Sarabun-Regular.ttf": "49d082d0164cdf471f5e00b1fddb89f9",
"assets/NOTICES": "2d8f0b769c65b668012b9e7a3c60b673",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "967447d821a6278c75f733ae49d7ef5e",
"/": "967447d821a6278c75f733ae49d7ef5e",
"main.dart.js": "ac17cb97950b6c839898518abab50780",
"manifest.json": "d9ec1b56a246b7050e2a4e0750deb994",
"version.json": "44d2edafed87c39051a9acad07fff57a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
