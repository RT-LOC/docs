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
    "revision": "94a4bad103a7e7bb91fa540037c057fa"
  },
  {
    "url": "api/api_application_un.html",
    "revision": "19cbe75f6d3f935d75550d64d8dd7297"
  },
  {
    "url": "api/api_ble.html",
    "revision": "0197ee6dfb280d4e1697e37eb3329a8e"
  },
  {
    "url": "api/api_console.html",
    "revision": "3f8bbbf002504d49ce143c44a57d9596"
  },
  {
    "url": "api/api_engine_cloud_mqtt.html",
    "revision": "69b18673d1e0501d15b8d8f906f0b1a8"
  },
  {
    "url": "api/api_engine_local_bin.html",
    "revision": "3ab4650e35b0af044b21e9599e0035fc"
  },
  {
    "url": "api/api_engine_local_mqtt.html",
    "revision": "3ff40820a68b89102e61f92f5b633de6"
  },
  {
    "url": "api/api_firmware.html",
    "revision": "aedeb7294323a4f147b5e818d1d2c6d7"
  },
  {
    "url": "api/api_rest.html",
    "revision": "ba48025c5f22329cf1d0e1fe3b4db63d"
  },
  {
    "url": "api/api_uart.html",
    "revision": "4a34a0327a91ad86556019ef59fcb9db"
  },
  {
    "url": "api/index.html",
    "revision": "6f987c36beb8f9802b4ef0f972b6f6f9"
  },
  {
    "url": "assets/css/0.styles.4ab85554.css",
    "revision": "e1ea9f5225c0df979279dcb2024b19db"
  },
  {
    "url": "assets/img/1_data_api.0968bf15.png",
    "revision": "0968bf1500bb0eab4c50aab01ac5faca"
  },
  {
    "url": "assets/img/1_data_eng.1d3c6e04.png",
    "revision": "1d3c6e04d195002f8e9b44e1c0efd148"
  },
  {
    "url": "assets/img/1_data.98d53c4f.png",
    "revision": "98d53c4f7564a7a233c2e05d759a2394"
  },
  {
    "url": "assets/img/1_extra.3c4e0842.png",
    "revision": "3c4e084223b1d639ffbd464eec9c005a"
  },
  {
    "url": "assets/img/1_host.246d329e.png",
    "revision": "246d329ed33d70dabfc8e83f3bf1255a"
  },
  {
    "url": "assets/img/1_log.052a504d.png",
    "revision": "052a504d6af46fbaf838519566ddb85a"
  },
  {
    "url": "assets/img/1_menu.a49f2059.png",
    "revision": "a49f205957c157b8612132dc2c9edf7a"
  },
  {
    "url": "assets/img/1_raw.a637893b.png",
    "revision": "a637893b92e7845492004520d9fe5402"
  },
  {
    "url": "assets/img/1_system.5e483b90.png",
    "revision": "5e483b904c3083ab09fe0b39f68d22a2"
  },
  {
    "url": "assets/img/2_cfg_buttons.30ddd924.png",
    "revision": "30ddd924e314562c33993450fdb4bf0a"
  },
  {
    "url": "assets/img/2_cfg_slots_parameters.dab93151.png",
    "revision": "dab93151741b968a61eb74bc4faaf3b8"
  },
  {
    "url": "assets/img/2_cfg_slots.7d633c07.png",
    "revision": "7d633c070b42f4b0ed39ff9fb89c06eb"
  },
  {
    "url": "assets/img/2_config.d5fd14aa.png",
    "revision": "d5fd14aa4ed04554cad9ecbfbc0450e1"
  },
  {
    "url": "assets/img/2_listener_module.fa1a2822.png",
    "revision": "fa1a28220ffac92c2636a2d0edccf8d3"
  },
  {
    "url": "assets/img/account.70ad237e.jpg",
    "revision": "70ad237ecbe4ba0a8e1b570e1027f6c7"
  },
  {
    "url": "assets/img/add-device.7646ce66.jpg",
    "revision": "7646ce66872e62b0673d0f0957a17e0c"
  },
  {
    "url": "assets/img/adhoc_nodes.4f95c8e9.png",
    "revision": "4f95c8e910944c2f2f2ce47165287d97"
  },
  {
    "url": "assets/img/adhoc.edf8ac24.png",
    "revision": "edf8ac240dc45bc82acbe270d669c7a7"
  },
  {
    "url": "assets/img/anchor_placement.76d7bb80.png",
    "revision": "76d7bb802d372814b26d4cb664bb5166"
  },
  {
    "url": "assets/img/aoa.7568fab0.png",
    "revision": "7568fab0c2ca47546f8a6bb605efcfa5"
  },
  {
    "url": "assets/img/api_ble.22ea0c1c.png",
    "revision": "22ea0c1c4043c74990dde04c9164d8fd"
  },
  {
    "url": "assets/img/api_preamble.cd21ed09.png",
    "revision": "cd21ed096d35bd34231496a3b6df7d4a"
  },
  {
    "url": "assets/img/API-keys.9e15fae5.jpg",
    "revision": "9e15fae5d7d6f8a61468e86e85d8dee7"
  },
  {
    "url": "assets/img/api.954c841c.jpg",
    "revision": "954c841c6f70308db3a92d649824abf4"
  },
  {
    "url": "assets/img/apps.836eb779.jpg",
    "revision": "836eb7790b665632bcd9d74086c306f1"
  },
  {
    "url": "assets/img/asset-list.b4d670cd.jpg",
    "revision": "b4d670cd33c5ae0f973cbea2fb3c7201"
  },
  {
    "url": "assets/img/asset-page.cccbdd65.jpg",
    "revision": "cccbdd65308f4c2a6ac204708a8ec76d"
  },
  {
    "url": "assets/img/asset-stats.0364b361.jpg",
    "revision": "0364b3617f5e463a3fcb532c6ab49c14"
  },
  {
    "url": "assets/img/ble_anchor_positions.8f2c7fc2.png",
    "revision": "8f2c7fc2a842811f0bb8f37690f31c3e"
  },
  {
    "url": "assets/img/ble_anchor_positions2.7ad9d274.png",
    "revision": "7ad9d27427c2f7a91fcfd047e99f0b39"
  },
  {
    "url": "assets/img/ble_nus_bluefruit_1.494e2520.png",
    "revision": "494e252033416fb96641a7a9196921c1"
  },
  {
    "url": "assets/img/ble_nus_bluefruit_2.e9144847.png",
    "revision": "e91448473262d0757df2e9eca03ac9f7"
  },
  {
    "url": "assets/img/ble_nus_bluefruit_3.126ea7a9.png",
    "revision": "126ea7a98291d0499d35f83736c92537"
  },
  {
    "url": "assets/img/ble_nus_bluefruit_4.13ad6321.png",
    "revision": "13ad632137fa7c21fb6185e4b1170996"
  },
  {
    "url": "assets/img/ble_nus_bluefruit_5.3966f43c.png",
    "revision": "3966f43c7d59cef4e2f0a5e2af8747a3"
  },
  {
    "url": "assets/img/ble_nus_bluefruit_6.d85f900a.png",
    "revision": "d85f900a980926cb9f7a0f424ea428b4"
  },
  {
    "url": "assets/img/ble_nus_bluefruit_download.e11da2a6.png",
    "revision": "e11da2a64a98e091a312026c8a263a25"
  },
  {
    "url": "assets/img/ble_tag_pos.fd9b2fbe.png",
    "revision": "fd9b2fbe80c9a558f72ecf832aae4b01"
  },
  {
    "url": "assets/img/ble.96e66fb1.jpg",
    "revision": "96e66fb1c5756984b8b2eff04159cd92"
  },
  {
    "url": "assets/img/ble2.e0c29b32.png",
    "revision": "e0c29b32d0b107b38cffb0f6c8c53971"
  },
  {
    "url": "assets/img/ble3.f66c4982.png",
    "revision": "f66c49820d5d3d864381b979fd7d5906"
  },
  {
    "url": "assets/img/ble4.697df269.png",
    "revision": "697df269da46729fc822efea72f42b58"
  },
  {
    "url": "assets/img/ble5.aff69f9f.png",
    "revision": "aff69f9f179a194eca96280d0b25da2f"
  },
  {
    "url": "assets/img/breach-list.c3e7a5c2.jpg",
    "revision": "c3e7a5c2cdd296c8283e6ac6f7a5b310"
  },
  {
    "url": "assets/img/conn.5f196104.jpg",
    "revision": "5f1961043b568dc219d3f1e5e97214c1"
  },
  {
    "url": "assets/img/console.d4562590.jpg",
    "revision": "d4562590ebd45a6a0a7e2fcc29e46363"
  },
  {
    "url": "assets/img/cross_anchoranchor.d010acc1.png",
    "revision": "d010acc1b6fdd5b628e4a944bcce71c0"
  },
  {
    "url": "assets/img/cross_detailed.0e52c034.png",
    "revision": "0e52c034cc821ffbf570a3d17fedce52"
  },
  {
    "url": "assets/img/cross_taganchor_all.19e2ffcd.png",
    "revision": "19e2ffcdaf5d16099bc45350c5397e9b"
  },
  {
    "url": "assets/img/cross_taganchor_custom.2c4b5142.png",
    "revision": "2c4b5142ac61f1d640e43cb3c01bc192"
  },
  {
    "url": "assets/img/demo.c5736ba1.jpg",
    "revision": "c5736ba1eb8b1831995135f03031971a"
  },
  {
    "url": "assets/img/dir.6fae76f4.jpg",
    "revision": "6fae76f4f683b8f5d86105bab7ee6b10"
  },
  {
    "url": "assets/img/dist_apis.a7113bb1.jpg",
    "revision": "a7113bb10d010c52d178414930d760f8"
  },
  {
    "url": "assets/img/downloading_fw.85e580b1.png",
    "revision": "85e580b167e4fd6791028a929d805adb"
  },
  {
    "url": "assets/img/edit-asset.17cccf03.jpg",
    "revision": "17cccf03cd2d0119b871e1684a148dc6"
  },
  {
    "url": "assets/img/edit-tag.41adc3cb.jpg",
    "revision": "41adc3cb4b1f7efcf9e39a0b4f69ea71"
  },
  {
    "url": "assets/img/engine_multi.525a6805.png",
    "revision": "525a68059434feee594cbf034f604982"
  },
  {
    "url": "assets/img/engine_single.a2e66422.png",
    "revision": "a2e6642268d5dc459b7a4a3bad39db4e"
  },
  {
    "url": "assets/img/extra_acr.acbcb017.png",
    "revision": "acbcb0171b54a92cb2897b97b20b2d48"
  },
  {
    "url": "assets/img/extra_bat.ea61cc04.png",
    "revision": "ea61cc04101628900a95561562e72292"
  },
  {
    "url": "assets/img/extra_cpumem.7b3e5c72.png",
    "revision": "7b3e5c72414553e62547d986aecfd308"
  },
  {
    "url": "assets/img/extra_debug.1126360f.png",
    "revision": "1126360fde7bbd1273783a0d15ceab83"
  },
  {
    "url": "assets/img/extra_dw.dbdcef7b.png",
    "revision": "dbdcef7b04090cb80fa8bde3d3da063c"
  },
  {
    "url": "assets/img/extra_event.daf7f4d5.png",
    "revision": "daf7f4d5616b2dc9114f73983223e429"
  },
  {
    "url": "assets/img/extra_gps.20b24150.png",
    "revision": "20b24150786ae1761c18ed7a3618653d"
  },
  {
    "url": "assets/img/extra_link.14419f93.png",
    "revision": "14419f938ed4fc525f40a69a29b5e296"
  },
  {
    "url": "assets/img/extra_net.9131bbfc.png",
    "revision": "9131bbfc0d95ff4703b45e96acabc85b"
  },
  {
    "url": "assets/img/extra_prop.f9fc7f9f.png",
    "revision": "f9fc7f9f77468e1596811ff626b62b64"
  },
  {
    "url": "assets/img/extra_q.345d54ba.png",
    "revision": "345d54ba196ac6e2ae725de7c077c2e9"
  },
  {
    "url": "assets/img/extra_task.2cfc7390.png",
    "revision": "2cfc7390d9d767cd080a9c9806802a26"
  },
  {
    "url": "assets/img/extra_taskhist.6c97bc6d.png",
    "revision": "6c97bc6dae2e4b4c3004bbd42d1a84b6"
  },
  {
    "url": "assets/img/extra_usb.c044d59d.png",
    "revision": "c044d59d158c3eeb3ef40bdd9f196c00"
  },
  {
    "url": "assets/img/faq_sensors-icon_gyro.0e5c61df.png",
    "revision": "0e5c61dfc4d25154652717f0699ca5a6"
  },
  {
    "url": "assets/img/flashing_device_manager.51c6ffb5.png",
    "revision": "51c6ffb52c7f54be2f4ca43d7fe7a728"
  },
  {
    "url": "assets/img/flashing_linux_success.e2183792.png",
    "revision": "e2183792d584904fa62451f7dc88c840"
  },
  {
    "url": "assets/img/flashing_win_fail.1079493d.png",
    "revision": "1079493dcebe473788ea4385f825402c"
  },
  {
    "url": "assets/img/flashing_win_success.9df3730e.png",
    "revision": "9df3730eb3e2dbb2c35915ef0222ff73"
  },
  {
    "url": "assets/img/floor_setup.6ff3323d.jpg",
    "revision": "6ff3323d0f428eccf9932a06923a1bef"
  },
  {
    "url": "assets/img/fwup_import_1.bfcca8b2.png",
    "revision": "bfcca8b2ef93da0208d1ca5a73cddeb6"
  },
  {
    "url": "assets/img/fwup_import_2.e6ed7437.png",
    "revision": "e6ed7437c2ba394ce8fa64564f940064"
  },
  {
    "url": "assets/img/fwup_import_3.51ba612b.png",
    "revision": "51ba612b24dfb109352d6f287197d8c8"
  },
  {
    "url": "assets/img/fwup_import.45dbf79c.gif",
    "revision": "45dbf79ccbab16997411b5cd4a20153d"
  },
  {
    "url": "assets/img/fwup_ota_forceupd.fb1ef9b1.png",
    "revision": "fb1ef9b1f5990e6c52249fb1fcbc8444"
  },
  {
    "url": "assets/img/fwup_ota_method1.4a1bf4d8.png",
    "revision": "4a1bf4d8bde27b3ac6152eb2684ae90b"
  },
  {
    "url": "assets/img/fwup_ota_method2.b852bca9.png",
    "revision": "b852bca9a5f70d70d343985115c68970"
  },
  {
    "url": "assets/img/fwup_usb_progress.3a584557.png",
    "revision": "3a584557d57a1758b8be4487a2acc53a"
  },
  {
    "url": "assets/img/fwup_usb_version.d12a3ae1.png",
    "revision": "d12a3ae13302094a8c560d9cf290876e"
  },
  {
    "url": "assets/img/fwup_version.d4575170.png",
    "revision": "d4575170b628cd19bbdf780fa5fd1114"
  },
  {
    "url": "assets/img/getting_started_eng_menu.b47daed5.png",
    "revision": "b47daed5e92d0d6f9b0c5e515d331d70"
  },
  {
    "url": "assets/img/getting_started-anchors.b9470023.png",
    "revision": "b94700230e735c80590d241139575e70"
  },
  {
    "url": "assets/img/getting_started-listener2.3b374ad2.png",
    "revision": "3b374ad23b8d5215fe87ec16b417a721"
  },
  {
    "url": "assets/img/getting_started-tags.3134fe8e.png",
    "revision": "3134fe8e31cc7042cc520323c501ee7a"
  },
  {
    "url": "assets/img/hw_dwm1001.4268dc3e.jpg",
    "revision": "4268dc3e994f387c041892ca3963f972"
  },
  {
    "url": "assets/img/in_action.adc26551.jpg",
    "revision": "adc265516068abc6d49cd7c2ddb7337b"
  },
  {
    "url": "assets/img/install_network.52d4cb11.png",
    "revision": "52d4cb1187a89a91aadec42a1f754144"
  },
  {
    "url": "assets/img/install_nodes.73265eac.png",
    "revision": "73265eac514abc983c92afff2f6490cb"
  },
  {
    "url": "assets/img/install.f9bcd914.jpg",
    "revision": "f9bcd914fce4ed4f7fd372d190a6009e"
  },
  {
    "url": "assets/img/license_build.7e618038.png",
    "revision": "7e61803890fb5a7de9c9db4be2e0808a"
  },
  {
    "url": "assets/img/license_demo.592d6803.png",
    "revision": "592d680318f638dfb1b9be39fc392053"
  },
  {
    "url": "assets/img/license_dialog.591571bb.png",
    "revision": "591571bbe69042dc4cea8f7aa4e5bbbb"
  },
  {
    "url": "assets/img/license_full.9da827fa.png",
    "revision": "9da827fa829e86dc37f3596ac5ad1255"
  },
  {
    "url": "assets/img/license_none.6f78ccb2.png",
    "revision": "6f78ccb25e2390ac44994116f9c06462"
  },
  {
    "url": "assets/img/license.51e7b59f.jpg",
    "revision": "51e7b59fd749577495065f13c3988c9f"
  },
  {
    "url": "assets/img/listener1.4c26ae45.png",
    "revision": "4c26ae452840656e93e95438284679b1"
  },
  {
    "url": "assets/img/listener2.3b374ad2.png",
    "revision": "3b374ad23b8d5215fe87ec16b417a721"
  },
  {
    "url": "assets/img/listeners.2ba5b50c.jpg",
    "revision": "2ba5b50cf2a5e4941b57e20bf545d81c"
  },
  {
    "url": "assets/img/logconn_connections.346a4dee.png",
    "revision": "346a4deedb99da5ec1efc2696abb2278"
  },
  {
    "url": "assets/img/logconn_details.92b01954.png",
    "revision": "92b0195405909b7d9a93e65a32e7d634"
  },
  {
    "url": "assets/img/logconn.9f99eb3c.png",
    "revision": "9f99eb3c328920a03aa870da7dd7165a"
  },
  {
    "url": "assets/img/logging_frame.204439ec.png",
    "revision": "204439ec3b4ebf39f3ffe274ecf6525a"
  },
  {
    "url": "assets/img/logging_raw_prefix.58813310.png",
    "revision": "588133108d6925c3c66819cb1f12aec6"
  },
  {
    "url": "assets/img/lopos_checklist.e9e3e923.jpg",
    "revision": "e9e3e92367b063ec78ae7c704f390166"
  },
  {
    "url": "assets/img/manager_api.4c90df7e.jpg",
    "revision": "4c90df7ee1db21e6fe10f9cf9f80c1ee"
  },
  {
    "url": "assets/img/mobile-battery-monitor.757dee67.jpg",
    "revision": "757dee67b3e8be07892acb573632ebf9"
  },
  {
    "url": "assets/img/mobile-config-bottom.9106f6e4.jpg",
    "revision": "9106f6e4275d80346c93c2d27271227d"
  },
  {
    "url": "assets/img/mobile-connect.a9f0fbc0.jpg",
    "revision": "a9f0fbc0f971bbed54ef15845a81b33c"
  },
  {
    "url": "assets/img/mobile-DFU-complete.08cdcd81.jpg",
    "revision": "08cdcd818d042cb5cb04e19d1dbf7ffe"
  },
  {
    "url": "assets/img/mobile-DFU-start.c3f3038b.jpg",
    "revision": "c3f3038b53b18bccc71401780d8b9393"
  },
  {
    "url": "assets/img/mobile-DFU-steps.d56d66f4.jpg",
    "revision": "d56d66f4d9575dd594ab167fb5363078"
  },
  {
    "url": "assets/img/mobile-DFU-upload.bcb32470.jpg",
    "revision": "bcb32470d2acfd13d921ef55089f96d0"
  },
  {
    "url": "assets/img/mobile-DFU.4bcf2d68.jpg",
    "revision": "4bcf2d681b9015b2f6401c324aa4a40d"
  },
  {
    "url": "assets/img/mobile-event-monitor.46870e81.jpg",
    "revision": "46870e81491bf1cfb4bc50eebff2394d"
  },
  {
    "url": "assets/img/mobile-firmware-screen-button.8603171d.jpg",
    "revision": "8603171d0ae6991d4e966b80a0af6fc2"
  },
  {
    "url": "assets/img/mobile-home-characteristics.c2c38746.jpg",
    "revision": "c2c3874653dd488dbab21aa3f843183b"
  },
  {
    "url": "assets/img/mobile-loggedin-marked.1b990bfd.jpg",
    "revision": "1b990bfd318299104c640107f22f1438"
  },
  {
    "url": "assets/img/mobile-loggedin.e92b6d56.jpg",
    "revision": "e92b6d560acfac00d7f7c52889502794"
  },
  {
    "url": "assets/img/mobile-login-form.1bd9a2c2.jpg",
    "revision": "1bd9a2c22e557dbfcd5026ab0850fe1c"
  },
  {
    "url": "assets/img/mobile-login.41443d7d.jpg",
    "revision": "41443d7daae3d650dfac1b61e1bd291a"
  },
  {
    "url": "assets/img/mobile-more-screen.44538af2.jpg",
    "revision": "44538af28b1baeb3be60fcbc6d6e1b63"
  },
  {
    "url": "assets/img/mobile-more.b1153d9e.jpg",
    "revision": "b1153d9e8bf3c794d2566730c19b4f11"
  },
  {
    "url": "assets/img/mobile-not-connected.d828e8d5.jpg",
    "revision": "d828e8d52ac08a067b89355d849cbff4"
  },
  {
    "url": "assets/img/mobile-three-dots.1ca39433.jpg",
    "revision": "1ca39433361fcde5c6745dbd358a6784"
  },
  {
    "url": "assets/img/mqtt_broker_settings.c0d95dfc.jpg",
    "revision": "c0d95dfc8bd19acb4eff310af7e61554"
  },
  {
    "url": "assets/img/mqtt_json_packets.3044fb72.jpg",
    "revision": "3044fb7286ac7e7646cd2ca97b1254cb"
  },
  {
    "url": "assets/img/ping.jpg",
    "revision": "db08504f11ec53352da354ca396d62b5"
  },
  {
    "url": "assets/img/portalapp-summaries.d9946a13.jpg",
    "revision": "d9946a137f69074241813fefc41e1ad6"
  },
  {
    "url": "assets/img/project.6b3d3669.jpg",
    "revision": "6b3d366942284f8ecbcb7d636924161b"
  },
  {
    "url": "assets/img/ref_pinout_frdm.0dfb7064.png",
    "revision": "0dfb7064bd106bb64e35321cef71ad8c"
  },
  {
    "url": "assets/img/ref_pinout_jupiter.11d3a8d9.png",
    "revision": "11d3a8d9156fda88079ec9096ceb58f4"
  },
  {
    "url": "assets/img/ref_pinout_titan.138f95dd.png",
    "revision": "138f95dd589b2025b72fd86edf42ccb7"
  },
  {
    "url": "assets/img/repl.e45b6ff3.jpg",
    "revision": "e45b6ff39f89a816192487b9595158a0"
  },
  {
    "url": "assets/img/replay_event.2c9afcde.png",
    "revision": "2c9afcde278c97a85f873a0e99078bee"
  },
  {
    "url": "assets/img/replay_file.60d29452.png",
    "revision": "60d29452b401cb8f68ceebf5d6c55164"
  },
  {
    "url": "assets/img/replay.3be74dfb.png",
    "revision": "3be74dfbf90a9205bfb9605f657d5e37"
  },
  {
    "url": "assets/img/rfprofile_change_config.b1cef6c4.gif",
    "revision": "b1cef6c4244c0fb3ba1d2ddf56455368"
  },
  {
    "url": "assets/img/rfprofile_change_task.7d693b2e.gif",
    "revision": "7d693b2e67ba161bde5d09729b8636d3"
  },
  {
    "url": "assets/img/rfprofile_change.b88cff3d.gif",
    "revision": "b88cff3d3a307a11200a419df7becb09"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sniffer_cross_10.9bc17118.png",
    "revision": "9bc17118816de56ded7f8629c756d29b"
  },
  {
    "url": "assets/img/subcategories.3ff196c2.jpg",
    "revision": "3ff196c2f8ca82c5fe2b3ed4875382c3"
  },
  {
    "url": "assets/img/tag-list.88737e61.jpg",
    "revision": "88737e616c394168a3c4271d940287be"
  },
  {
    "url": "assets/img/tags-menu-nav.39248e86.jpg",
    "revision": "39248e86b1e7451f34f72eebf753df6d"
  },
  {
    "url": "assets/img/tdoa.f82878d1.png",
    "revision": "f82878d102de6c31ca8f3d01ec83621a"
  },
  {
    "url": "assets/img/totalstation.3b584829.jpg",
    "revision": "3b5848292f7abd85ca761bc475949d8d"
  },
  {
    "url": "assets/img/tracing.7212a089.jpg",
    "revision": "7212a0893f518c9d81720bb218ad1830"
  },
  {
    "url": "assets/img/tray_flash.45dd9f73.png",
    "revision": "45dd9f73c886fc98a423ac3dcded2bd5"
  },
  {
    "url": "assets/img/twr.f469cc03.png",
    "revision": "f469cc0397aade70832b6e3ebec2c3ef"
  },
  {
    "url": "assets/img/UR_3A.ee4cba68.gif",
    "revision": "ee4cba68c2600a2a8fbea9a4fada8b5a"
  },
  {
    "url": "assets/img/UR_6A.3e02c284.gif",
    "revision": "3e02c28439939c9962632b1181f5cd07"
  },
  {
    "url": "assets/img/x_joinreq_projreq.5f5cd6e7.png",
    "revision": "5f5cd6e7beaa88a1f1ac7f64eaedb766"
  },
  {
    "url": "assets/js/1.874bf543.js",
    "revision": "3d87cbba4309cb35b1a0bbd3fc2a17f4"
  },
  {
    "url": "assets/js/10.e42a3494.js",
    "revision": "e3b61b5c158863dc2debf38049bb06c4"
  },
  {
    "url": "assets/js/100.a5325a7c.js",
    "revision": "007baf41675c686bc748bf7d1eaa3561"
  },
  {
    "url": "assets/js/101.20760156.js",
    "revision": "8ae49debc57c659828688f7bd27d0ff6"
  },
  {
    "url": "assets/js/102.4788e8ec.js",
    "revision": "3b81a075224d8ab604db9deb852795b3"
  },
  {
    "url": "assets/js/103.01891357.js",
    "revision": "8831d7dd131214f4c0e24a4777f858a2"
  },
  {
    "url": "assets/js/104.fcfa6487.js",
    "revision": "91a084f6076573fc5def4a4d67c097be"
  },
  {
    "url": "assets/js/105.284c58e8.js",
    "revision": "9aeab91b0fb4042a43420a12405ed1aa"
  },
  {
    "url": "assets/js/106.8f886da1.js",
    "revision": "275f77a0501b705b8426470000458537"
  },
  {
    "url": "assets/js/107.0fb3e63f.js",
    "revision": "57e2a30e59bd2376aae62403a3447793"
  },
  {
    "url": "assets/js/108.56e79427.js",
    "revision": "29f0abe2181e6ed5498eb62d13eb5059"
  },
  {
    "url": "assets/js/109.c7589478.js",
    "revision": "3af67c87cf8627d0306b7aa6278db9d3"
  },
  {
    "url": "assets/js/11.0f23a8cf.js",
    "revision": "cb6145738971b769c9da752d33d00be6"
  },
  {
    "url": "assets/js/110.3d9ee697.js",
    "revision": "8cbd5fdf9de5646f3df0f637613a79b4"
  },
  {
    "url": "assets/js/111.c5a7d8e7.js",
    "revision": "83498b8c0d75e166336976154ce2c452"
  },
  {
    "url": "assets/js/112.031f726b.js",
    "revision": "f173b5a8b7840509f23189366cead008"
  },
  {
    "url": "assets/js/113.216ff747.js",
    "revision": "c5a6fd0e4b9e3ce06fa0e5d9407286b5"
  },
  {
    "url": "assets/js/114.7a9cb9ad.js",
    "revision": "a885a5b836814b507ad667e2722993b1"
  },
  {
    "url": "assets/js/115.517bfa58.js",
    "revision": "1a774d3bfb1d9b3dc1326dedc45df8d1"
  },
  {
    "url": "assets/js/116.a1b610cf.js",
    "revision": "060597d25be6113f4bbafec0d15ae432"
  },
  {
    "url": "assets/js/117.42e003d0.js",
    "revision": "36673e942477fa264a55073ca8d383b0"
  },
  {
    "url": "assets/js/118.b53c45ee.js",
    "revision": "d5942a4ce02389e775a05d08c82bc247"
  },
  {
    "url": "assets/js/119.0b318bca.js",
    "revision": "62ce8437141ab8e0a9ccc4fdbc95ab68"
  },
  {
    "url": "assets/js/12.e5136303.js",
    "revision": "82d52048dd3add64f96f7a410d45f9d7"
  },
  {
    "url": "assets/js/120.5e50c19a.js",
    "revision": "0a99072046f4a7edfeadbeb4f457850d"
  },
  {
    "url": "assets/js/121.999b64a2.js",
    "revision": "acfe319282b6cee617ce598b5eef6eeb"
  },
  {
    "url": "assets/js/122.dd10e455.js",
    "revision": "c5380ab1afe4f99e9f4d905db275be8d"
  },
  {
    "url": "assets/js/123.3394e895.js",
    "revision": "665b3419992302abf78f3aad6b20022f"
  },
  {
    "url": "assets/js/124.570f124e.js",
    "revision": "16a810e2a9de495aa4d74aaf33b7b443"
  },
  {
    "url": "assets/js/125.a9134aeb.js",
    "revision": "0cd73ac11358a6371b30de9ead74655f"
  },
  {
    "url": "assets/js/126.e077cc22.js",
    "revision": "9e51010d77aa9791c29922ef46ccc1fc"
  },
  {
    "url": "assets/js/127.416d98b3.js",
    "revision": "ac68f03478c7124fb45665d8d76f0f22"
  },
  {
    "url": "assets/js/128.f0f09ec0.js",
    "revision": "3314323ee6e8bada6e2370c38a3c1ab6"
  },
  {
    "url": "assets/js/129.fb86f8ec.js",
    "revision": "39a7ed56ef65b85f167ee96d3cd96dd8"
  },
  {
    "url": "assets/js/13.90b1bd5e.js",
    "revision": "c9dfe72756e38fc8fb2399b886df96f9"
  },
  {
    "url": "assets/js/14.b3a2ed1d.js",
    "revision": "6aff594acae19ed586729e6457bb4b5f"
  },
  {
    "url": "assets/js/15.ec02bb73.js",
    "revision": "03d37c4976763079c19bedb07dfa1982"
  },
  {
    "url": "assets/js/16.9b3be9bb.js",
    "revision": "c466e8ed499450efa1ad2acb855e4098"
  },
  {
    "url": "assets/js/17.d9c3f936.js",
    "revision": "81c8f4a5e2d26128e4f6bfeb6067ab4b"
  },
  {
    "url": "assets/js/18.b42f09e0.js",
    "revision": "0053f41ff34a495544853994e185f426"
  },
  {
    "url": "assets/js/19.945d56f0.js",
    "revision": "6f32cd1da7e6b8e237c8c0d8abbd7e5c"
  },
  {
    "url": "assets/js/2.d552cac1.js",
    "revision": "15d2ba8e1736f58bfc5e181ca406a952"
  },
  {
    "url": "assets/js/20.2876e3b4.js",
    "revision": "fa20c3e7d6d7441cf95f653acbf01ab2"
  },
  {
    "url": "assets/js/21.99b60bfc.js",
    "revision": "ebd8aec94d5725f1ead5ed96b664f404"
  },
  {
    "url": "assets/js/22.0b0ceaec.js",
    "revision": "1c0ab312dbf32db8409f467453804928"
  },
  {
    "url": "assets/js/23.606e2206.js",
    "revision": "2476ca2ba7f29cd0586397941488984e"
  },
  {
    "url": "assets/js/24.f45a54df.js",
    "revision": "cba814d17e445c529854f0f9a761371d"
  },
  {
    "url": "assets/js/25.557be4d8.js",
    "revision": "3772021194a5c9cd1775326f09a36fc9"
  },
  {
    "url": "assets/js/26.744bd58d.js",
    "revision": "8476b6962f4f6f9b43f06746ed5c095f"
  },
  {
    "url": "assets/js/27.91fbc47e.js",
    "revision": "dc0c74c5a0fef1f14835ed3bf43e79dd"
  },
  {
    "url": "assets/js/28.6a52f062.js",
    "revision": "e5cf7a9f3da160bf5a42e9b181bff2b5"
  },
  {
    "url": "assets/js/29.f10c3921.js",
    "revision": "2259fa225d26689cebb5e7279a065d9b"
  },
  {
    "url": "assets/js/3.3cc591a2.js",
    "revision": "4d16516393ac398d53f6a703f6fd5787"
  },
  {
    "url": "assets/js/30.a5b2417c.js",
    "revision": "fe2b833ecdd8b2a6536f3a117239ff37"
  },
  {
    "url": "assets/js/31.79d23ae5.js",
    "revision": "286c20d17b595ff5c5dda9ec302b44bc"
  },
  {
    "url": "assets/js/32.c6b9815f.js",
    "revision": "55e79c6b4d88740db377f047f194c34e"
  },
  {
    "url": "assets/js/33.25acd17b.js",
    "revision": "9227ce214c2380248a53265bb2fcf1b8"
  },
  {
    "url": "assets/js/34.699792a1.js",
    "revision": "c9d30e5905785b0f079cfe3f40e21299"
  },
  {
    "url": "assets/js/35.b9fdd935.js",
    "revision": "db49be2f82a8a733968763ec8c91e0df"
  },
  {
    "url": "assets/js/36.56cf6aa7.js",
    "revision": "7fb040120063732a04e070ea503082fc"
  },
  {
    "url": "assets/js/37.d18461eb.js",
    "revision": "e865c25f58bb210dffb5be7d8065f1ed"
  },
  {
    "url": "assets/js/38.b8991898.js",
    "revision": "877f035ce4247f31b9205d8696e9ba75"
  },
  {
    "url": "assets/js/39.5082a64a.js",
    "revision": "bb41cddd8734245ebdfa39ac16718429"
  },
  {
    "url": "assets/js/40.418af7fe.js",
    "revision": "43a0a1d169aa209ba5bc95867df0bf90"
  },
  {
    "url": "assets/js/41.2220e4f8.js",
    "revision": "421d4016757358acb574da518990a942"
  },
  {
    "url": "assets/js/42.9cea7929.js",
    "revision": "81af9183ad69bba22e145a30109a65d5"
  },
  {
    "url": "assets/js/43.813dc714.js",
    "revision": "20630f1c8db3d8fd340c368f93302023"
  },
  {
    "url": "assets/js/44.8ef7fd2b.js",
    "revision": "a64351e3a2b2dac659f315f8f186df5e"
  },
  {
    "url": "assets/js/45.66411ad7.js",
    "revision": "7526f9c3b19c1b6f603917eed4f8471e"
  },
  {
    "url": "assets/js/46.3c196e43.js",
    "revision": "d838da20d0d83820bf95b0f68e01d9aa"
  },
  {
    "url": "assets/js/47.bb5bd240.js",
    "revision": "2901c2ce25152139d3f9b1e8dadbdcbc"
  },
  {
    "url": "assets/js/48.0b2c4ad9.js",
    "revision": "d381b3fcda5bf4ca812e7ea0762f8565"
  },
  {
    "url": "assets/js/49.21c42ded.js",
    "revision": "5856797f43eb8ebe7ae86c9ead434077"
  },
  {
    "url": "assets/js/5.40e3af12.js",
    "revision": "2d08790232e3852493e50033836544fd"
  },
  {
    "url": "assets/js/50.6e07d654.js",
    "revision": "28fda357a787b5a1fe48d03851b36cce"
  },
  {
    "url": "assets/js/51.5db4d4cb.js",
    "revision": "51611acec056842cfe319c4b82a9f9db"
  },
  {
    "url": "assets/js/52.7a166684.js",
    "revision": "b564e090b1fd394e2aa9bf61ac737b39"
  },
  {
    "url": "assets/js/53.600bad8a.js",
    "revision": "3763551f20f388613f62743963ffd1c0"
  },
  {
    "url": "assets/js/54.3717471c.js",
    "revision": "b1e6b63009268b8ab24beaaf2e51ae38"
  },
  {
    "url": "assets/js/55.b6396326.js",
    "revision": "7434497a224274a879388146bef639d2"
  },
  {
    "url": "assets/js/56.b7f86dc0.js",
    "revision": "3e0a5703d33a4330ff98ed6c9cd208f2"
  },
  {
    "url": "assets/js/57.64ad3778.js",
    "revision": "4a0153a20ed425ceed9e0281f145c9fd"
  },
  {
    "url": "assets/js/58.66b0c139.js",
    "revision": "5c3d410b91c2551c6350c15666a27adc"
  },
  {
    "url": "assets/js/59.33a52aeb.js",
    "revision": "288cb06c04a4288f7b8bc335901cd56d"
  },
  {
    "url": "assets/js/6.a3b217e9.js",
    "revision": "e73e54534dd3efa01510dbf62224e61c"
  },
  {
    "url": "assets/js/60.e3fa3313.js",
    "revision": "46274d83c693622fc18043118748efe2"
  },
  {
    "url": "assets/js/61.31360618.js",
    "revision": "30376854f4b9037496ded51972ad5530"
  },
  {
    "url": "assets/js/62.c70b8c36.js",
    "revision": "331389e4d6ccee8e8edfa15970560016"
  },
  {
    "url": "assets/js/63.b68b8485.js",
    "revision": "be2d9b0e8b73d36045afe7ec3555708d"
  },
  {
    "url": "assets/js/64.4d4fe3a3.js",
    "revision": "db7f8cc34cc0a20f5c89465a3c219542"
  },
  {
    "url": "assets/js/65.2f8aa947.js",
    "revision": "db866c12d138402d7bc4ec83a88d60f4"
  },
  {
    "url": "assets/js/66.3b33a18d.js",
    "revision": "76178a23ab6ca9c391812fcd2ff481e6"
  },
  {
    "url": "assets/js/67.cf6e6648.js",
    "revision": "91d7cbf74713ad9ec163a19d3bcfaaef"
  },
  {
    "url": "assets/js/68.e404c36c.js",
    "revision": "0004fd5b5de43bf98e1f904ce5d0a15e"
  },
  {
    "url": "assets/js/69.47999d0e.js",
    "revision": "0ff62f754dea613a64a959bbd4912511"
  },
  {
    "url": "assets/js/7.6111e648.js",
    "revision": "bc2c1c93cdd8f13b2694297e9bfcfc3e"
  },
  {
    "url": "assets/js/70.4db60185.js",
    "revision": "6ba39741ccfad094164c7c2f3bea4d60"
  },
  {
    "url": "assets/js/71.57175e65.js",
    "revision": "e91114ce0b01d753f8522a06a428a3bd"
  },
  {
    "url": "assets/js/72.015345f2.js",
    "revision": "0fdde8493df4d5ccedc357180e58517e"
  },
  {
    "url": "assets/js/73.e4b04221.js",
    "revision": "db01ebaf3593cb02221b111054e2cb4e"
  },
  {
    "url": "assets/js/74.901a207a.js",
    "revision": "da9021ae51695fdb008860c71aaea3ab"
  },
  {
    "url": "assets/js/75.661ea03d.js",
    "revision": "1ebb3b12fa115edae3b9b7c4989d9337"
  },
  {
    "url": "assets/js/76.25b59486.js",
    "revision": "6a5da517400475e5242bdc26a0de271b"
  },
  {
    "url": "assets/js/77.e62fee4e.js",
    "revision": "90fbe51d62a8281da45648fa228ebbfd"
  },
  {
    "url": "assets/js/78.a2b624c9.js",
    "revision": "11eddbbbe660f463b11c31377f196ab8"
  },
  {
    "url": "assets/js/79.00f90e9b.js",
    "revision": "0bce7d607790de090eb60d2a363ad0db"
  },
  {
    "url": "assets/js/8.912d71a0.js",
    "revision": "b7b43ff362f0859652f50f9a1adcef69"
  },
  {
    "url": "assets/js/80.04a5fbec.js",
    "revision": "8a0646ab2130af74855c5d7eebac2af0"
  },
  {
    "url": "assets/js/81.1ad12ec6.js",
    "revision": "d3b78ecced71def2cfe1e6b3de827a31"
  },
  {
    "url": "assets/js/82.a6285988.js",
    "revision": "3f6d409d741f3d2374794d3728a87b3f"
  },
  {
    "url": "assets/js/83.59850f2e.js",
    "revision": "d372ec29048f613fa1dce1b9314e41fe"
  },
  {
    "url": "assets/js/84.6f05ee34.js",
    "revision": "c81bd0024557c0dbf78a632a72b3ac76"
  },
  {
    "url": "assets/js/85.8f5c17c4.js",
    "revision": "6856abe4bddc4c9fe938c3d7d6539873"
  },
  {
    "url": "assets/js/86.4db3d411.js",
    "revision": "6679b1874ae2c034d8ab06e42763cd1c"
  },
  {
    "url": "assets/js/87.88221abc.js",
    "revision": "f436c84f79134a5bcb274e057e0a824b"
  },
  {
    "url": "assets/js/88.efd97a97.js",
    "revision": "6ab1b5ff8935d7f5bbbff15ae684f62c"
  },
  {
    "url": "assets/js/89.c039b2ea.js",
    "revision": "3c47a5f5635718dfb104c283622bdf86"
  },
  {
    "url": "assets/js/9.fc1e21f6.js",
    "revision": "f8be253e25af41ba4af4722c88076130"
  },
  {
    "url": "assets/js/90.8944571f.js",
    "revision": "f65ea4857715207bf63b4647b60cdf08"
  },
  {
    "url": "assets/js/91.0a40c7ec.js",
    "revision": "3a49f82fe7429a18da7929ccfa920754"
  },
  {
    "url": "assets/js/92.afd06fc8.js",
    "revision": "2ca0d5ab8cb49338f57c172ea776e4fa"
  },
  {
    "url": "assets/js/93.6dd91234.js",
    "revision": "e75d25496000e551c7bd3b24dd3ef43b"
  },
  {
    "url": "assets/js/94.eba9a9ab.js",
    "revision": "94df94dc2dbea3c497385b4e372c6104"
  },
  {
    "url": "assets/js/95.a9c9de99.js",
    "revision": "d0d20f57ce0f00fbfa1e143cef20f3e5"
  },
  {
    "url": "assets/js/96.517a970f.js",
    "revision": "8a02a26adcf42f32d4c5d521ab1fc429"
  },
  {
    "url": "assets/js/97.cb8e5a60.js",
    "revision": "9393193f43de14893faae560ffce9fc7"
  },
  {
    "url": "assets/js/98.c5f1dc65.js",
    "revision": "7d27387cc873db01648a7f7e7f33247c"
  },
  {
    "url": "assets/js/99.f55d8976.js",
    "revision": "a1c9bdb1b055ebbb0665467e6e40148d"
  },
  {
    "url": "assets/js/app.d03c60b2.js",
    "revision": "60b7cc7d09a22bf97490fb8b6ed9914f"
  },
  {
    "url": "connect/features.html",
    "revision": "8878417624bfdcc51e4e33d1372f3aff"
  },
  {
    "url": "connect/index.html",
    "revision": "307e57851101f03a063bcc27d19710ca"
  },
  {
    "url": "connect/installation.html",
    "revision": "12003565e3e2e8a0de393dbcbfbb54a3"
  },
  {
    "url": "distancing/ble_api.html",
    "revision": "66c042726590b4d5e1ac89c95750aea2"
  },
  {
    "url": "distancing/distancing_lib.html",
    "revision": "e7f643cf8ae2f3584eba66beccd83739"
  },
  {
    "url": "distancing/gateway_desktop.html",
    "revision": "8a5ac6c9cbc187919fb950c43c08c1dd"
  },
  {
    "url": "distancing/getting_started.html",
    "revision": "4ab11228464741ec97fe0da0c64ba112"
  },
  {
    "url": "distancing/index.html",
    "revision": "88ec25cc1d86b7689611dd2a1bcf254b"
  },
  {
    "url": "distancing/theory.html",
    "revision": "7795c0610f7a5fc9250233f95b31327e"
  },
  {
    "url": "embedded/antenna/hw_antenna.html",
    "revision": "777201253b2b9afcce9456b170759737"
  },
  {
    "url": "embedded/flashing/hw_building.html",
    "revision": "cf677e1e7f0ee4c89cda1eab9036cb3d"
  },
  {
    "url": "embedded/flashing/hw_flashing.html",
    "revision": "5709a353e1e8935d9fd50fa06504143a"
  },
  {
    "url": "embedded/hw_boards.html",
    "revision": "dda28cd861e036c84ecd4e2efd4cdc17"
  },
  {
    "url": "embedded/hw_interface_ble.html",
    "revision": "d56647db162b214a721e2b87f13caf58"
  },
  {
    "url": "embedded/hw_interface_can.html",
    "revision": "47553332f86cfd1428e0c7787587a400"
  },
  {
    "url": "embedded/hw_interface_sniffer.html",
    "revision": "93cf97d7c131511ece329bfcfb8cacfd"
  },
  {
    "url": "embedded/hw_interface_spi.html",
    "revision": "444f6c97159deaa3f6473a4888c79949"
  },
  {
    "url": "embedded/hw_interface_uart.html",
    "revision": "16a4344ad3dd92941176ec60e217c36a"
  },
  {
    "url": "embedded/hw_interface_usb.html",
    "revision": "f394ec32c122bd626c7fa7bdf71a0f34"
  },
  {
    "url": "embedded/index.html",
    "revision": "23b11e589db68fd528cd84f269de5e23"
  },
  {
    "url": "faq/faq_general.html",
    "revision": "7ed21202bcb95525b3d5deac31b7a0d7"
  },
  {
    "url": "faq/faq_network.html",
    "revision": "0c76285304335716691fc7f7f55e15e2"
  },
  {
    "url": "faq/faq_rf.html",
    "revision": "19a7ab219bfb977a67f45c6aca1e9036"
  },
  {
    "url": "faq/faq_sensors.html",
    "revision": "953429d650ab90f32056429ccca6e69d"
  },
  {
    "url": "faq/index.html",
    "revision": "2644c0397574f62a1b228e355587ad2c"
  },
  {
    "url": "getstarted/index.html",
    "revision": "ef5df37c1e5c622549b2b712c11abb15"
  },
  {
    "url": "guide/index.html",
    "revision": "2738006e78378e3a147fbab1432aa904"
  },
  {
    "url": "hub/apps.html",
    "revision": "5777457e111827e2e7107ef62c57bd5d"
  },
  {
    "url": "hub/index.html",
    "revision": "126c83feb86439edce0e59d4bd9502ea"
  },
  {
    "url": "hub/installation.html",
    "revision": "7ae5e4a5cef23793a508b3a620b537e3"
  },
  {
    "url": "hub/license.html",
    "revision": "79d438cb18c5859e9d696ee83a1052be"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "a26df6d7bbd04872b205c0a3c497aece"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "2b0854356edf41c546c144bdcc9687c5"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "feb7aba948cb3a4c1a3731da39da5c26"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "5c1d09b9b7274878faf7658f1ca54dd9"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "fea47a7b29e4bca60654a2d4a1f596fe"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "79825428120837b831ea63a95df45e73"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "453a962b3b2e12b4083e9cca9862986e"
  },
  {
    "url": "img/ble.jpg",
    "revision": "96e66fb1c5756984b8b2eff04159cd92"
  },
  {
    "url": "img/logo.png",
    "revision": "3a3fad6cf00360486fb80aaaaa150565"
  },
  {
    "url": "img/logo.svg",
    "revision": "47dcbf6c319d1f1bb9febdc5e7edaeb7"
  },
  {
    "url": "index.html",
    "revision": "8dba10e8e7fd9561e08dec982ae504d1"
  },
  {
    "url": "logo.png",
    "revision": "3a3fad6cf00360486fb80aaaaa150565"
  },
  {
    "url": "manager/cxRTLS_actions.html",
    "revision": "b891c848bf5465f69e755b7789f06b2b"
  },
  {
    "url": "manager/cxRTLS_adhoc.html",
    "revision": "08d25a2ceb3d61fce25ecd320e6e2967"
  },
  {
    "url": "manager/cxRTLS_concepts.html",
    "revision": "d201830ad74f0613dcba76c96f9f00c1"
  },
  {
    "url": "manager/cxRTLS_config.html",
    "revision": "69846b718d63d54bad37b0020d261147"
  },
  {
    "url": "manager/cxRTLS_console.html",
    "revision": "72859cc3dbb1477131cd468f6ee08ef4"
  },
  {
    "url": "manager/cxRTLS_cross.html",
    "revision": "f9f1d43ea8da34d0cbdba194450172ff"
  },
  {
    "url": "manager/cxRTLS_engine.html",
    "revision": "70ebb8007409a07353ed9a2ee053a3b6"
  },
  {
    "url": "manager/cxRTLS_floor.html",
    "revision": "57f7ff613a77286679a91864a5089122"
  },
  {
    "url": "manager/cxRTLS_fwup.html",
    "revision": "20886e185e7d421592ef1638117ba319"
  },
  {
    "url": "manager/cxRTLS_layout.html",
    "revision": "c609b6c8f6433b5d0a4c30895db148bd"
  },
  {
    "url": "manager/cxRTLS_license.html",
    "revision": "3e00197712ec88af26fa97f7b6d1a11f"
  },
  {
    "url": "manager/cxRTLS_logconn.html",
    "revision": "88dc314587193c73f1b05e1e229898e7"
  },
  {
    "url": "manager/cxRTLS_replay.html",
    "revision": "4b1c92a67d4bb073f06576636f41a902"
  },
  {
    "url": "manager/cxRTLS_rfprofile.html",
    "revision": "a65b2b18c58ffff07f19ed64496a3fc0"
  },
  {
    "url": "manager/cxRTLS_tasks.html",
    "revision": "3fcdbcf270e910bc87657ddfac7391fa"
  },
  {
    "url": "manager/index.html",
    "revision": "22e0e0ea2762ccfa0de580ae7edd3287"
  },
  {
    "url": "manager/using_replays.html",
    "revision": "11754c254bf45f9aee859a51702f2ac8"
  },
  {
    "url": "mobile/characteristics.html",
    "revision": "02aafbca190e86b9ff93b54e65a26fde"
  },
  {
    "url": "mobile/connecting.html",
    "revision": "04ddaf6b2099452c0bfb9464b4320009"
  },
  {
    "url": "mobile/firmware.html",
    "revision": "179e6dcd1d6c907fe7a975f8a3001f68"
  },
  {
    "url": "mobile/index.html",
    "revision": "e2dc61d3ba18d99fd496cf0157845875"
  },
  {
    "url": "mobile/sending-data.html",
    "revision": "b78c16081f0041fb1a8b679941165da9"
  },
  {
    "url": "mobile/viewing-data.html",
    "revision": "14c849c74baf3ed9c4e9624f09984cd3"
  },
  {
    "url": "positioning/1_positioning_getting_started.html",
    "revision": "6b4f226acd02c58b1917afbaff789b74"
  },
  {
    "url": "positioning/2_configuration.html",
    "revision": "8b3eb7d62f225861a570bbd5def09f66"
  },
  {
    "url": "positioning/anchor_placement.html",
    "revision": "9a97a130f029fc6a0559a5b451e0d71b"
  },
  {
    "url": "positioning/apis_overview.html",
    "revision": "91c3faccc67600a1dad27cd22b66b7b8"
  },
  {
    "url": "positioning/basic_positioning_getting_started.html",
    "revision": "0d5bd1395041ee8711da990c69455e99"
  },
  {
    "url": "positioning/basic_positioning_introduction.html",
    "revision": "ff86194d26645b4504a1ed942dfd3775"
  },
  {
    "url": "positioning/basic_positioning_next.html",
    "revision": "64b3244e6d79948e08a0e96aa7042f49"
  },
  {
    "url": "positioning/binary_apis.html",
    "revision": "b39eab45b8add5e2fbf399d25a0f7a83"
  },
  {
    "url": "positioning/hw.html",
    "revision": "148e119fe29309ba03d538ca9be4114f"
  },
  {
    "url": "positioning/img/getting_started-faq_setup.html",
    "revision": "dc996fcc2cca59457f8d63c5e7272cca"
  },
  {
    "url": "positioning/index.html",
    "revision": "a27ed8ef0065e8d2942f133348d5e752"
  },
  {
    "url": "positioning/json_apis.html",
    "revision": "38467085fba3c333314e2eb79ff04352"
  },
  {
    "url": "positioning/redundancy.html",
    "revision": "3a247cb09577e8440438edba80a08d8d"
  },
  {
    "url": "positioning/rtls_remarks.html",
    "revision": "2bba0f453fa0f5fe8c08361dab7f7595"
  },
  {
    "url": "positioning/software_guide.html",
    "revision": "2f7194f3ba096a717a7a7e3b4b96e1cf"
  },
  {
    "url": "positioning/sw.html",
    "revision": "4f4ce060ea1803c3daa00ff588b2c9be"
  },
  {
    "url": "positioning/trying_demo_replays.html",
    "revision": "9bf6091bfdc3d1b22f9cd07a5ac95d9e"
  },
  {
    "url": "positioning/updaterate.html",
    "revision": "a823a576899b941df768d69b46e3ac68"
  },
  {
    "url": "raw/LEDS/index.html",
    "revision": "2367168a225a39a7466c1fd99a8aef92"
  },
  {
    "url": "reference/algorithms.html",
    "revision": "2ef655a0fe798be91af9c64e6e66e667"
  },
  {
    "url": "reference/fwupdate.html",
    "revision": "46c15a625f33673dc92a230ca8f1d8c1"
  },
  {
    "url": "reference/index.html",
    "revision": "3e535b59342da0e3e3842fdc71ae3cc4"
  },
  {
    "url": "reference/leds.html",
    "revision": "e0378110ce6cc7b1bee3e0b4a55c0d3e"
  },
  {
    "url": "reference/pinouts.html",
    "revision": "63677e300ec0992d46e2ea9f7d54ac3e"
  },
  {
    "url": "reference/rf.html",
    "revision": "06d532830f931aab74dcc11e6527e612"
  },
  {
    "url": "reference/terminology.html",
    "revision": "dbd052668a32e5414f4ed0fa9b6777b6"
  },
  {
    "url": "troubleshoot/index.html",
    "revision": "3268850fcebde0a4f195c9eab0b42f9d"
  },
  {
    "url": "troubleshoot/troubleshoot_embedded.html",
    "revision": "19ce5565d12de69a8fb0c74c473bd9bc"
  },
  {
    "url": "troubleshoot/troubleshoot_enet.html",
    "revision": "a9db08d628915cfbe0fbce7b1891389c"
  },
  {
    "url": "web/ble_configure.html",
    "revision": "cdcaf39aee4b57198b48fb2080d093a1"
  },
  {
    "url": "web/ble_introduction.html",
    "revision": "9db0ddc00429324a7bb35e12294e132e"
  },
  {
    "url": "web/ble_monitor.html",
    "revision": "3da6acd72a8c7e3b77c0631dfe62541b"
  },
  {
    "url": "web/ble_visualise.html",
    "revision": "b174c9116742541eea4dd41d41e3171d"
  },
  {
    "url": "web/client.html",
    "revision": "76c0906455b5f8be9b95ca938df2825a"
  },
  {
    "url": "web/data.html",
    "revision": "8b27e5e31997038d8da71741f85f8d23"
  },
  {
    "url": "web/debug.html",
    "revision": "38ff1b409da74248c7cd51c7e8346b34"
  },
  {
    "url": "web/devices_assets.html",
    "revision": "2e894498cf1cae0e0cbde4dbcb9630f3"
  },
  {
    "url": "web/index.html",
    "revision": "7974da27747bf163c6a599068c679340"
  },
  {
    "url": "web/settings.html",
    "revision": "2f0f7fed5eae2b98d2708c59e89c0638"
  },
  {
    "url": "web/viewer.html",
    "revision": "124996ca20475c9a50c90152a7fd3782"
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
