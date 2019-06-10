/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
const version = "0.0.1";
const appName = "qcobjects-amp";
const cacheName = `qcobjects-app-${appName}-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
	"/",
	"LICENSE",
	"api/high-low-accessories-products.json",
	"api/high-low-all-products.json",
	"api/high-low-bikes-products.json",
	"api/high-low-components-products.json",
	"api/low-high-accessories-products.json",
	"api/low-high-all-products.json",
	"api/low-high-bikes-products.json",
	"api/low-high-components-products.json",
	"blog-article.amp.html",
	"blog-listing.amp.html",
	"cart.amp.html",
	"checkout-success.amp.html",
	"checkout.amp.html",
	"contact.amp.html",
	"css/amp.css",
	"css/page.css",
	"favicon.ico",
	"img/Q_web copy.png",
	"img/Q_web.png",
	"img/Q_web.svg",
	"img/e-commerce/blog-narrow-01.png",
	"img/e-commerce/blog-narrow-02.png",
	"img/e-commerce/blog-narrow-03.png",
	"img/e-commerce/blog-narrow-04.png",
	"img/e-commerce/blog-narrow-05.png",
	"img/e-commerce/blog-narrow-06.png",
	"img/e-commerce/blog-wide-01.png",
	"img/e-commerce/blog-wide-02.png",
	"img/e-commerce/blog-wide-03.png",
	"img/e-commerce/blog-wide-04.png",
	"img/e-commerce/blog-wide-05.png",
	"img/e-commerce/blog-wide-06.png",
	"img/e-commerce/logo-nav.png",
	"img/e-commerce/logo.png",
	"img/e-commerce/narrow-landing-01.jpg",
	"img/e-commerce/narrow-landing-02.jpg",
	"img/e-commerce/narrow-landing-03.jpg",
	"img/e-commerce/narrow-landing-04.jpg",
	"img/e-commerce/product/dark-large-1.jpg",
	"img/e-commerce/product/dark-large-2.jpg",
	"img/e-commerce/product/dark-large-3.jpg",
	"img/e-commerce/product/dark-small-1.jpg",
	"img/e-commerce/product/dark-small-2.jpg",
	"img/e-commerce/product/dark-small-3.jpg",
	"img/e-commerce/product/product-1.jpg",
	"img/e-commerce/product/product-10.jpg",
	"img/e-commerce/product/product-2.jpg",
	"img/e-commerce/product/product-3.jpg",
	"img/e-commerce/product/product-4.jpg",
	"img/e-commerce/product/product-5.jpg",
	"img/e-commerce/product/product-6.jpg",
	"img/e-commerce/product/product-7.jpg",
	"img/e-commerce/product/product-8.jpg",
	"img/e-commerce/product/product-9.jpg",
	"img/e-commerce/wide-landing-01.jpg",
	"img/e-commerce/wide-landing-02.jpg",
	"img/e-commerce/wide-landing-03.jpg",
	"img/e-commerce/wide-landing-04.jpg",
	"img/e-commerce/wide-listings-hero.jpg",
	"img/icons/icon-128x128.png",
	"img/icons/icon-144x144.png",
	"img/icons/icon-152x152.png",
	"img/icons/icon-192x192.png",
	"img/icons/icon-384x384.png",
	"img/icons/icon-512x512.png",
	"img/icons/icon-72x72.png",
	"img/icons/icon-96x96.png",
	"img/logo.png",
	"index.html",
	"js/init.js",
	"js/packages/org.quickcorp.amp.components.js",
	"js/packages/org.quickcorp.amp.controllers.js",
	"js/packages/org.quickcorp.amp.effects.js",
	"js/packages/org.quickcorp.amp.js",
	"js/packages/org.quickcorp.amp.models.js",
	"js/packages/org.quickcorp.amp.tools.js",
	"js/packages/org.quickcorp.amp.views.js",
	"landing.amp.html",
	"localhost-cert.pem",
	"localhost-privkey.pem",
	"product-details.amp.html",
	"product-listing.amp.html",
	"templates/components/ampheader.tpl.html",
	"templates/components/blog-listing.tpl.html",
	"templates/components/cart.tpl.html",
	"templates/components/contact.tpl.html",
	"templates/components/contentblock.tpl.html",
	"templates/components/footer.tpl.html",
	"templates/components/header.tpl.html",
	"templates/components/main.tpl.html",
	"templates/components/product-details.tpl.html",
	"templates/components/productlist.tpl.html",
	"templates/components/products.tpl.html",
	"templates/components/radiocontrols.tpl.html",
	"templates/components/selectors.tpl.html"])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
