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
    "revision": "330165ec6d5817242a1f866db8c3d7b7"
  },
  {
    "url": "api/api_application_un.html",
    "revision": "86d413e5b6cfe1ba851e3e4a7242f397"
  },
  {
    "url": "api/api_ble.html",
    "revision": "c6696a763f1d605a81d16259abbc849f"
  },
  {
    "url": "api/api_console.html",
    "revision": "d6000afc6e04f190e50ac2b025d6fb7d"
  },
  {
    "url": "api/api_engine_cloud_mqtt.html",
    "revision": "25e56437f77a8b0845fe445d8a87e1a4"
  },
  {
    "url": "api/api_engine_local_bin.html",
    "revision": "2a94cb0cb22be0e415c0b8f03e78388d"
  },
  {
    "url": "api/api_engine_local_mqtt.html",
    "revision": "58e053bf0af846df6b4052177f522d22"
  },
  {
    "url": "api/api_firmware.html",
    "revision": "cc0dc15ee0e7ba07c60f80a85fb91fd5"
  },
  {
    "url": "api/api_rest.html",
    "revision": "dec371bfe59427154e076093cb459f14"
  },
  {
    "url": "api/api_uart.html",
    "revision": "b9193fc0321aef9271ec719f6090f32b"
  },
  {
    "url": "api/index.html",
    "revision": "a036476c0d2ecdb10c4d1914a3d7ec6d"
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
    "url": "assets/js/10.37db318b.js",
    "revision": "16d671b525e4a28d096c8985f8a4dfe3"
  },
  {
    "url": "assets/js/100.ccb572bb.js",
    "revision": "3b5670b8cb02cfed4a4dfba3bfb631ec"
  },
  {
    "url": "assets/js/101.20760156.js",
    "revision": "8ae49debc57c659828688f7bd27d0ff6"
  },
  {
    "url": "assets/js/102.44ed7db1.js",
    "revision": "0d0a55e935b619388f6c32dd95741a60"
  },
  {
    "url": "assets/js/103.7b79d718.js",
    "revision": "1d35c779b6ef159ab5940e9e8438659e"
  },
  {
    "url": "assets/js/104.2b9fc2b5.js",
    "revision": "ddafc80821e2b59eb5ed104ccefa4ae6"
  },
  {
    "url": "assets/js/105.9883de15.js",
    "revision": "258200d73ba2f3c29a5ce328e3a6d3ae"
  },
  {
    "url": "assets/js/106.342f8577.js",
    "revision": "750202f9c2b10219531f4df3441fee36"
  },
  {
    "url": "assets/js/107.a5304fed.js",
    "revision": "85a7cc8ea263432538004be57b7d06df"
  },
  {
    "url": "assets/js/108.56e79427.js",
    "revision": "29f0abe2181e6ed5498eb62d13eb5059"
  },
  {
    "url": "assets/js/109.fdea3581.js",
    "revision": "dadca89feacf5088ea43d1382529da4c"
  },
  {
    "url": "assets/js/11.df188757.js",
    "revision": "263e1dbc9bef94db6858936d8004e50c"
  },
  {
    "url": "assets/js/110.3d9ee697.js",
    "revision": "8cbd5fdf9de5646f3df0f637613a79b4"
  },
  {
    "url": "assets/js/111.e801ab2d.js",
    "revision": "bd481c2fc8613a6c5604eec3a84518a0"
  },
  {
    "url": "assets/js/112.07ec7aa1.js",
    "revision": "ab87918a41edfeadb5130fd40047fbe3"
  },
  {
    "url": "assets/js/113.ba5f3229.js",
    "revision": "a1bcc8bda558442ee9bd39f1228d3ab6"
  },
  {
    "url": "assets/js/114.b10aeeb3.js",
    "revision": "2d8659aab68daaf17189e7221bc9ae75"
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
    "url": "assets/js/117.504e18e7.js",
    "revision": "b938f223c48192609a03c9801d985a6b"
  },
  {
    "url": "assets/js/118.c9c6e32d.js",
    "revision": "9170de41811a679fe01bb3c0c020c1f4"
  },
  {
    "url": "assets/js/119.add24e68.js",
    "revision": "39477b4b7f20d2e248310a03eea3cd8f"
  },
  {
    "url": "assets/js/12.a9bdfe60.js",
    "revision": "e3934d373e2c7cee735713f7be13ae8f"
  },
  {
    "url": "assets/js/120.5e50c19a.js",
    "revision": "0a99072046f4a7edfeadbeb4f457850d"
  },
  {
    "url": "assets/js/121.c617ffe7.js",
    "revision": "a753d51774bd8ff5820d7f3ba8a5a9bc"
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
    "url": "assets/js/124.76c2aa04.js",
    "revision": "1a25cd412ae5d237e5fee871b0c69b02"
  },
  {
    "url": "assets/js/125.972f7b0d.js",
    "revision": "b881491e7de1e0076c5302ceb0887e05"
  },
  {
    "url": "assets/js/126.7b03b42d.js",
    "revision": "62fa08c09a58af5102b6179393ad3690"
  },
  {
    "url": "assets/js/127.416d98b3.js",
    "revision": "ac68f03478c7124fb45665d8d76f0f22"
  },
  {
    "url": "assets/js/128.b3b3ce66.js",
    "revision": "082554e42ac6d848adcdfaf8f675f127"
  },
  {
    "url": "assets/js/129.0d6c2c0c.js",
    "revision": "ad4bb144c6f46cfc0cc517fbb87f1aa7"
  },
  {
    "url": "assets/js/13.bd32371d.js",
    "revision": "505a1b3c09ad6fdff36b5ac1b5d07edb"
  },
  {
    "url": "assets/js/14.9f3b3fa1.js",
    "revision": "0e053851058c6ca44cd5257a6b391587"
  },
  {
    "url": "assets/js/15.4941dd6c.js",
    "revision": "aa362653a8e9c392ab9ba04cbc6e5d55"
  },
  {
    "url": "assets/js/16.bf46c962.js",
    "revision": "35b04d71856c11a626f7f9849f6a9e5e"
  },
  {
    "url": "assets/js/17.0ad35c1f.js",
    "revision": "e2148715d884ed1f183c452b9c5198f6"
  },
  {
    "url": "assets/js/18.86297eb1.js",
    "revision": "62579b4575c302ee1788c33833ca29ec"
  },
  {
    "url": "assets/js/19.e0a595a6.js",
    "revision": "21828223117fa6b7346bdabb2bc4d320"
  },
  {
    "url": "assets/js/2.a213fda5.js",
    "revision": "29be4aa97d4822185607674262fa7aa1"
  },
  {
    "url": "assets/js/20.288f5703.js",
    "revision": "64d0047f1d4f795e3a146dcf46660b74"
  },
  {
    "url": "assets/js/21.22d8f222.js",
    "revision": "6f5c492113188fbf8d106849221f3c56"
  },
  {
    "url": "assets/js/22.521e6b90.js",
    "revision": "3fe23cd1c7e20b4e1681d68e051e7c1b"
  },
  {
    "url": "assets/js/23.e579ddcc.js",
    "revision": "50b54c8c196c2aa59a7a454745f2db93"
  },
  {
    "url": "assets/js/24.6bf5f715.js",
    "revision": "8e6dd43bec07a55873e0a80dfeee1724"
  },
  {
    "url": "assets/js/25.0c6c5cbb.js",
    "revision": "07324c3b8e46427eb79c5fa361b9d36a"
  },
  {
    "url": "assets/js/26.744bd58d.js",
    "revision": "8476b6962f4f6f9b43f06746ed5c095f"
  },
  {
    "url": "assets/js/27.2611a955.js",
    "revision": "8214d39cc9c9153425f29513718a949a"
  },
  {
    "url": "assets/js/28.0c6f53b0.js",
    "revision": "d310a80b32afb8cc22ba13ac7cce3a26"
  },
  {
    "url": "assets/js/29.b892017c.js",
    "revision": "3b85e36a1da5643264e6e3351859751a"
  },
  {
    "url": "assets/js/3.155cc223.js",
    "revision": "3f9f95cc62c65c558e6100dec5105c64"
  },
  {
    "url": "assets/js/30.527c1d2d.js",
    "revision": "593e3e8072e448452015402f84e4c783"
  },
  {
    "url": "assets/js/31.168afd6c.js",
    "revision": "cb9988654adb3377ff745f6a9d5e348b"
  },
  {
    "url": "assets/js/32.7e2fa49f.js",
    "revision": "db0af169dc55ac47c054611d037329c1"
  },
  {
    "url": "assets/js/33.5153b574.js",
    "revision": "e4ba76ba04e3e34993ad0a8882ef54c2"
  },
  {
    "url": "assets/js/34.7c3c3753.js",
    "revision": "aba123e0a47af07b7cfc4b4df1ec01d6"
  },
  {
    "url": "assets/js/35.723dfdbd.js",
    "revision": "fef3a88341bfab29252eff606ec230b9"
  },
  {
    "url": "assets/js/36.636b888e.js",
    "revision": "cfcb96f20abcd0f79b267151a453c2f1"
  },
  {
    "url": "assets/js/37.4fc226a5.js",
    "revision": "9ef0e79e59566513133279a27842a738"
  },
  {
    "url": "assets/js/38.6f3c698d.js",
    "revision": "13c9618e04832bc1f22309a5423e3bbf"
  },
  {
    "url": "assets/js/39.2bd7f9dc.js",
    "revision": "511bb1bc15613cb60f1badc791e54410"
  },
  {
    "url": "assets/js/40.6724c350.js",
    "revision": "2ae54af6d9a15c2cb8e5faa82c088702"
  },
  {
    "url": "assets/js/41.1613f073.js",
    "revision": "ca5f7849cb6322f302ccb145cd79f869"
  },
  {
    "url": "assets/js/42.fd6a9ef4.js",
    "revision": "c885814287e023bc91d202ae01f4d2de"
  },
  {
    "url": "assets/js/43.f5be2363.js",
    "revision": "dabd8f457507537e2f006294f2e18fca"
  },
  {
    "url": "assets/js/44.a6a5b717.js",
    "revision": "5658e4efe670248961571c9c4e89f8d8"
  },
  {
    "url": "assets/js/45.cf2884e0.js",
    "revision": "133edda3aa93d80e71dd9ac249d625db"
  },
  {
    "url": "assets/js/46.fdbb8b86.js",
    "revision": "ca48e1522663c6f22a58c4d6d1160e32"
  },
  {
    "url": "assets/js/47.bb5bd240.js",
    "revision": "2901c2ce25152139d3f9b1e8dadbdcbc"
  },
  {
    "url": "assets/js/48.f7cab955.js",
    "revision": "287df126fe3fb3b046482c7adea30458"
  },
  {
    "url": "assets/js/49.7ce26893.js",
    "revision": "b49522b013de84a006deccc202eb7604"
  },
  {
    "url": "assets/js/5.b36e6374.js",
    "revision": "282e2489b0b9e39b7fb69adaf1bc5d75"
  },
  {
    "url": "assets/js/50.bfc72b3e.js",
    "revision": "596c1e866155b5b9ce84ea616d607d68"
  },
  {
    "url": "assets/js/51.cb532125.js",
    "revision": "63106a25ac1941dcf595b861d4a04455"
  },
  {
    "url": "assets/js/52.a62df305.js",
    "revision": "9dbf6c908599262dca8d2681d568f800"
  },
  {
    "url": "assets/js/53.d7252bb0.js",
    "revision": "f12128f6a1a846e0af6bdfd3a0252208"
  },
  {
    "url": "assets/js/54.ebe0a7da.js",
    "revision": "560578415dfe08c76ace2cfe49647321"
  },
  {
    "url": "assets/js/55.033b4f69.js",
    "revision": "2fa861d9635aba7913c162fa475db9ad"
  },
  {
    "url": "assets/js/56.c8a43771.js",
    "revision": "7a2fcfff461b6aafc3938fcb23a2e491"
  },
  {
    "url": "assets/js/57.ed635dba.js",
    "revision": "d11a19e1cfc5f4b6f641093a9bcd385c"
  },
  {
    "url": "assets/js/58.1273773a.js",
    "revision": "273d8e9d4b4359095e39d18d03c8db30"
  },
  {
    "url": "assets/js/59.371e97b4.js",
    "revision": "fcbeaee4a61c0c82194f6b01ace7b97e"
  },
  {
    "url": "assets/js/6.e2ea45e4.js",
    "revision": "15d0e10b2c72683c7dbd35c3a6403d1e"
  },
  {
    "url": "assets/js/60.44d87c6d.js",
    "revision": "aba6c9ae94010b22edd5296a6371e828"
  },
  {
    "url": "assets/js/61.970ae38b.js",
    "revision": "55536befbd74482317828681df09e384"
  },
  {
    "url": "assets/js/62.b2f886d8.js",
    "revision": "6922e3a6a7ff2f2c248edce73118dbaf"
  },
  {
    "url": "assets/js/63.79a9c31f.js",
    "revision": "65ce8c7517d2c6b465d67c1a4accbae2"
  },
  {
    "url": "assets/js/64.a7885cfe.js",
    "revision": "47cfb8219f71faef4abf30b0168a9ca0"
  },
  {
    "url": "assets/js/65.687b248b.js",
    "revision": "bb15f64d18edb3f22e45c8d2088cf5cf"
  },
  {
    "url": "assets/js/66.9fba527b.js",
    "revision": "9858e96763a052f0443285dd84ecd439"
  },
  {
    "url": "assets/js/67.1f2e86a7.js",
    "revision": "a6a699038024935828b0d57b206fde16"
  },
  {
    "url": "assets/js/68.433227eb.js",
    "revision": "8924063e9d64e02d83738a348040269f"
  },
  {
    "url": "assets/js/69.7045ecc2.js",
    "revision": "97c48591a2386cdcb906cf7ab47342dd"
  },
  {
    "url": "assets/js/7.927df060.js",
    "revision": "33463654f8472d3608de388faa49f18b"
  },
  {
    "url": "assets/js/70.fa79e162.js",
    "revision": "e2dbdfd1f040ff933d9855a20ad37aa7"
  },
  {
    "url": "assets/js/71.6f6f56a2.js",
    "revision": "ebe51ea2abcde691be879baa6d9cf8b8"
  },
  {
    "url": "assets/js/72.32190e2b.js",
    "revision": "d9b0c7cbe65a22e6d155408b407ab3ab"
  },
  {
    "url": "assets/js/73.90f21d94.js",
    "revision": "4ddddeaa6af7af8aa784afc67932298c"
  },
  {
    "url": "assets/js/74.ad3801d3.js",
    "revision": "7a03895b54e2c93a753e913815a3fc99"
  },
  {
    "url": "assets/js/75.079312c5.js",
    "revision": "603f0634d677d8d928278a80b89c98b8"
  },
  {
    "url": "assets/js/76.c0b05837.js",
    "revision": "1a5863a3243eee4f572abd87c21ddbe3"
  },
  {
    "url": "assets/js/77.e62fee4e.js",
    "revision": "90fbe51d62a8281da45648fa228ebbfd"
  },
  {
    "url": "assets/js/78.c5a2a1e8.js",
    "revision": "856baebc41cbe51cf02a7279e20866f4"
  },
  {
    "url": "assets/js/79.36b38e5f.js",
    "revision": "ac7978a29ad43f7a984ef9bf0ddab924"
  },
  {
    "url": "assets/js/8.17f65696.js",
    "revision": "416b5e32001fd73cddb4eaa5d5027ac6"
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
    "url": "assets/js/82.37373f14.js",
    "revision": "2c46a692b1b293f025532b571091572b"
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
    "url": "assets/js/85.6dc5c144.js",
    "revision": "4f33a7b987e288eaf9f5af8c581c0e69"
  },
  {
    "url": "assets/js/86.dc07efad.js",
    "revision": "00d5f3235e22fe91ff260ec8ed8ad3b3"
  },
  {
    "url": "assets/js/87.3b91acea.js",
    "revision": "5ef7a310605a387a1cc720bb296cdabc"
  },
  {
    "url": "assets/js/88.daf6d76f.js",
    "revision": "f1271a59ad62760a261e115234bdeedc"
  },
  {
    "url": "assets/js/89.9add072c.js",
    "revision": "61eeebad5e164668ca3628ec4b2924df"
  },
  {
    "url": "assets/js/9.43402a54.js",
    "revision": "1a41eb83af940d746699a59ff24fb314"
  },
  {
    "url": "assets/js/90.b37ecedd.js",
    "revision": "f4dcdc9d27f5c121e247094b9c386956"
  },
  {
    "url": "assets/js/91.ba263975.js",
    "revision": "1a3fca815cef74574a5c96eef8338e27"
  },
  {
    "url": "assets/js/92.afd06fc8.js",
    "revision": "2ca0d5ab8cb49338f57c172ea776e4fa"
  },
  {
    "url": "assets/js/93.284669c8.js",
    "revision": "12f9b43c8b92bb4d10878e42a4f99034"
  },
  {
    "url": "assets/js/94.58afb167.js",
    "revision": "58edfc050fe70f52504e348bd469157b"
  },
  {
    "url": "assets/js/95.9bf56338.js",
    "revision": "cad506a4801d65389d4f867ad5859ccb"
  },
  {
    "url": "assets/js/96.2537dadb.js",
    "revision": "9ac702c5a63c35bf7e03a3c0901349ca"
  },
  {
    "url": "assets/js/97.4e8a74e2.js",
    "revision": "cd7c4658d59ae3423c822420bf232cf6"
  },
  {
    "url": "assets/js/98.521c73ff.js",
    "revision": "e6d712a43aa5fdee718c578f08d41c0b"
  },
  {
    "url": "assets/js/99.a04f6548.js",
    "revision": "0faa44b0673b96d928696351ad812e6a"
  },
  {
    "url": "assets/js/app.97e34360.js",
    "revision": "5c814fe5803cf3e507c111799b6a1a63"
  },
  {
    "url": "connect/features.html",
    "revision": "b71b13f9581857ac155d52d966cf49dc"
  },
  {
    "url": "connect/index.html",
    "revision": "f281a27b5e908c03f245e0f636af8f62"
  },
  {
    "url": "connect/installation.html",
    "revision": "1a4cdb9a23728b5fb5e3dc435ed9dbd6"
  },
  {
    "url": "distancing/ble_api.html",
    "revision": "c7193d6829f3bb56fd2280d74cdcd027"
  },
  {
    "url": "distancing/distancing_lib.html",
    "revision": "a93a1f1ff98c081b9f4666e65a7283dc"
  },
  {
    "url": "distancing/gateway_desktop.html",
    "revision": "d502c394fc49c49d6cd83d6a9c97f2c6"
  },
  {
    "url": "distancing/getting_started.html",
    "revision": "dca30e22b28bf6a8b0f683acb7143b51"
  },
  {
    "url": "distancing/index.html",
    "revision": "52d4a3fe96674ebc9cc3d180c75834c3"
  },
  {
    "url": "distancing/theory.html",
    "revision": "e1fe2e32e9b148a03e8ae6966e710d7a"
  },
  {
    "url": "embedded/antenna/hw_antenna.html",
    "revision": "cd656061f1256bd7b43802f42e0a85cf"
  },
  {
    "url": "embedded/flashing/hw_building.html",
    "revision": "9a16ee546f43a5a07f9ffb350ac14355"
  },
  {
    "url": "embedded/flashing/hw_flashing.html",
    "revision": "4c06d590a13bb9d10889fcae1859639b"
  },
  {
    "url": "embedded/hw_boards.html",
    "revision": "f9525b36a1794f9e3e46d85cf20478c1"
  },
  {
    "url": "embedded/hw_interface_ble.html",
    "revision": "2e93e7dd8db81f1522cd08bda9e8728a"
  },
  {
    "url": "embedded/hw_interface_can.html",
    "revision": "3e0dfe76f65e2cd25524956168647861"
  },
  {
    "url": "embedded/hw_interface_sniffer.html",
    "revision": "c354001358c93455f088d64f453bdf0f"
  },
  {
    "url": "embedded/hw_interface_spi.html",
    "revision": "c78d60f4d83e1cc9bcf45aab825ffe82"
  },
  {
    "url": "embedded/hw_interface_uart.html",
    "revision": "07a821a8fd48e3b2f11756ad7c34f9f7"
  },
  {
    "url": "embedded/hw_interface_usb.html",
    "revision": "ead126ea7bcf110237e86c14f72a2be7"
  },
  {
    "url": "embedded/index.html",
    "revision": "9f9df361335160ac50376ce65291119d"
  },
  {
    "url": "faq/faq_general.html",
    "revision": "5da246b037ec62d878783066ce1b7f54"
  },
  {
    "url": "faq/faq_network.html",
    "revision": "10bd6d1f75c3a783979e74ea753fb9da"
  },
  {
    "url": "faq/faq_rf.html",
    "revision": "483cef64f6a0ddf4bd1e143ea1239387"
  },
  {
    "url": "faq/faq_sensors.html",
    "revision": "380c2b1af1b6cee3a87b3b5ce2c27be2"
  },
  {
    "url": "faq/index.html",
    "revision": "604cc17620ad9b7fefb2b132bf4719f9"
  },
  {
    "url": "getstarted/index.html",
    "revision": "b7f086bb3437efadb532f3b112107108"
  },
  {
    "url": "guide/index.html",
    "revision": "fd61584939afa3be730e81937d8eaaca"
  },
  {
    "url": "hub/apps.html",
    "revision": "2d6408b178370f151558b5e3a8a20990"
  },
  {
    "url": "hub/index.html",
    "revision": "4834f50469a483873dee7fbbfa0528a4"
  },
  {
    "url": "hub/installation.html",
    "revision": "73da2f2d74af6a4a8511e5de8c2d7b3b"
  },
  {
    "url": "hub/license.html",
    "revision": "09a7b7f6eb4a51560ff726276317fbd1"
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
    "revision": "bdedec3954ab2749b2a6f5800a2b82d0"
  },
  {
    "url": "logo.png",
    "revision": "3a3fad6cf00360486fb80aaaaa150565"
  },
  {
    "url": "manager/cxRTLS_actions.html",
    "revision": "454fd301c60fefff2512ba2c3802c1d6"
  },
  {
    "url": "manager/cxRTLS_adhoc.html",
    "revision": "0af45faa062043a7b6ad3a7b8b58443d"
  },
  {
    "url": "manager/cxRTLS_concepts.html",
    "revision": "1d7f83bc60645fec34dd7cd35ee828bb"
  },
  {
    "url": "manager/cxRTLS_config.html",
    "revision": "bc356b4dcc414b66ed36eda3561f51f7"
  },
  {
    "url": "manager/cxRTLS_console.html",
    "revision": "06450a0b23542e0393f2bcfe186c5274"
  },
  {
    "url": "manager/cxRTLS_cross.html",
    "revision": "6d10dd4d063c8845b566eaac08abea1b"
  },
  {
    "url": "manager/cxRTLS_engine.html",
    "revision": "ee9e8fab5cc8fea09de76c13f7c18f03"
  },
  {
    "url": "manager/cxRTLS_floor.html",
    "revision": "30eee92e8c061f17749642d4c99579b4"
  },
  {
    "url": "manager/cxRTLS_fwup.html",
    "revision": "ad0db56334075564a0a00f41f583bcc4"
  },
  {
    "url": "manager/cxRTLS_layout.html",
    "revision": "2c071085b7ecc7b0758af2b67e1a6fe5"
  },
  {
    "url": "manager/cxRTLS_license.html",
    "revision": "195296f049877d1e78983f0377076cb7"
  },
  {
    "url": "manager/cxRTLS_logconn.html",
    "revision": "72beb4ac87d67ddf7ae05fd23720ed04"
  },
  {
    "url": "manager/cxRTLS_replay.html",
    "revision": "42903d857c70fe9a818c9fb044767909"
  },
  {
    "url": "manager/cxRTLS_rfprofile.html",
    "revision": "8b1fddc1dbdb99bd018a28ca31cfd693"
  },
  {
    "url": "manager/cxRTLS_tasks.html",
    "revision": "67001111fd8b7bdfe2d65e0da16567b5"
  },
  {
    "url": "manager/index.html",
    "revision": "caaa59e9749247137d4c14da516ed669"
  },
  {
    "url": "manager/using_replays.html",
    "revision": "0e5efe1a0c0c259596a652d9bd064c1e"
  },
  {
    "url": "mobile/characteristics.html",
    "revision": "36bd334a8874b01421a1ae89515aeb9e"
  },
  {
    "url": "mobile/connecting.html",
    "revision": "9da6f78e1f222c96ee1f3ecdde4ff5db"
  },
  {
    "url": "mobile/firmware.html",
    "revision": "48b623dee3fff69e8aa7368bbd8be2c0"
  },
  {
    "url": "mobile/index.html",
    "revision": "20237c58f8a935b235d0aeb3ac19bc91"
  },
  {
    "url": "mobile/sending-data.html",
    "revision": "9f9623797ba44fcc669eaf64a9572e5e"
  },
  {
    "url": "mobile/viewing-data.html",
    "revision": "d3581a9f50347f65e725ea9aeec2ec02"
  },
  {
    "url": "positioning/1_positioning_getting_started.html",
    "revision": "b2e7e24f7ed8688cfa1450bf18dd65dd"
  },
  {
    "url": "positioning/2_configuration.html",
    "revision": "5f5cde9a61b0a98be07c34287e09a08e"
  },
  {
    "url": "positioning/anchor_placement.html",
    "revision": "a75755214c1e0199b2b455a86e1d0176"
  },
  {
    "url": "positioning/apis_overview.html",
    "revision": "ac0ccc23e81558a183545f369d600fdd"
  },
  {
    "url": "positioning/basic_positioning_getting_started.html",
    "revision": "ff30dcda9233f04ada5b10dc0d936b9a"
  },
  {
    "url": "positioning/basic_positioning_introduction.html",
    "revision": "b0a2ad9e6b18949e00fd7d56d33030ca"
  },
  {
    "url": "positioning/basic_positioning_next.html",
    "revision": "917fee523e996b1501f5815dc3f85e33"
  },
  {
    "url": "positioning/binary_apis.html",
    "revision": "32243512ef0026caa56fc984b552bdb1"
  },
  {
    "url": "positioning/hw.html",
    "revision": "0ea8301ec6e0fffd78cab657fa0492fd"
  },
  {
    "url": "positioning/img/getting_started-faq_setup.html",
    "revision": "65f3f6c3af45cb509957cd03d76c6470"
  },
  {
    "url": "positioning/index.html",
    "revision": "ad2159ee768e20a26375dbe9b20e1396"
  },
  {
    "url": "positioning/json_apis.html",
    "revision": "f65edeebda7e7438de78aa69564d7bb5"
  },
  {
    "url": "positioning/redundancy.html",
    "revision": "37b9110f493cf5aebc187489d30ea8be"
  },
  {
    "url": "positioning/rtls_remarks.html",
    "revision": "8565e18bb8efaa7a8aa68a41f842bb54"
  },
  {
    "url": "positioning/software_guide.html",
    "revision": "c764ff474a0402d639bdfdd57f4909e4"
  },
  {
    "url": "positioning/sw.html",
    "revision": "3761ba6be9098ac7059750a813ab2b47"
  },
  {
    "url": "positioning/trying_demo_replays.html",
    "revision": "f6fcc21beef514ef095ba6cf87344681"
  },
  {
    "url": "positioning/updaterate.html",
    "revision": "b6fab5ba976317358fe420888a87ee9e"
  },
  {
    "url": "raw/LEDS/index.html",
    "revision": "fafb1f23e4bdc2746384b9e3924259fd"
  },
  {
    "url": "reference/algorithms.html",
    "revision": "cb90a0209f6a208a7613bce241d95b84"
  },
  {
    "url": "reference/fwupdate.html",
    "revision": "f52e524458dbc6d4ddef2a83f3b85803"
  },
  {
    "url": "reference/index.html",
    "revision": "9d79cc7cb30a95c09599b5234c249b11"
  },
  {
    "url": "reference/leds.html",
    "revision": "58b659da3401d3d3bcf32ee953ec3f79"
  },
  {
    "url": "reference/pinouts.html",
    "revision": "995cde8a910b3656a419fe596160c859"
  },
  {
    "url": "reference/rf.html",
    "revision": "7e851e9b2cf155511039ce55468ad07d"
  },
  {
    "url": "reference/terminology.html",
    "revision": "790afd9642e713061be3b656417f38b4"
  },
  {
    "url": "troubleshoot/index.html",
    "revision": "62b0114815d1bfb015edcae4f7b9e6db"
  },
  {
    "url": "troubleshoot/troubleshoot_embedded.html",
    "revision": "16c561f994f5054ecd15ec5109186406"
  },
  {
    "url": "troubleshoot/troubleshoot_enet.html",
    "revision": "490319c274d512e152aa9e654ab112a4"
  },
  {
    "url": "web/ble_configure.html",
    "revision": "4390e112a9d368386710b63738fe5aed"
  },
  {
    "url": "web/ble_introduction.html",
    "revision": "6aac46dcda790876280c3111dd6e7e6d"
  },
  {
    "url": "web/ble_monitor.html",
    "revision": "172bd98d29f8b5bc3799968b359c7b4a"
  },
  {
    "url": "web/ble_visualise.html",
    "revision": "afb50e6abb89bde3a955ee460b2fab11"
  },
  {
    "url": "web/client.html",
    "revision": "d65a166fb18a5187b9ab7b011ebec600"
  },
  {
    "url": "web/data.html",
    "revision": "81083906c8f1a3c6c3241afee623e0f9"
  },
  {
    "url": "web/debug.html",
    "revision": "4d0ab87e2a1ff75a5a2f36e48e180601"
  },
  {
    "url": "web/devices_assets.html",
    "revision": "051c27a0c8d7efad8a00e4187bf18889"
  },
  {
    "url": "web/index.html",
    "revision": "72a6ef0b460ff779b6c47bea8ea73693"
  },
  {
    "url": "web/settings.html",
    "revision": "37a5e0757b2b6ae4505ef80b1876106f"
  },
  {
    "url": "web/viewer.html",
    "revision": "cdf7f4777b00e96b6f96859b34a8f68c"
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
