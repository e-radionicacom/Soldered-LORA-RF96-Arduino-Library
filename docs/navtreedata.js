/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "LoRa RFM96W Arduino library", "index.html", [
    [ "Radio Driver parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html", [
      [ "Repository Contents", "index.html#autotoc_md1", null ],
      [ "Hardware design", "index.html#autotoc_md2", null ],
      [ "Documentation", "index.html#autotoc_md3", null ],
      [ "About Soldered", "index.html#autotoc_md4", null ],
      [ "Original source", "index.html#autotoc_md5", null ],
      [ "Open-source license", "index.html#autotoc_md6", null ],
      [ "Radio Driver Operation", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md8", [
        [ "<tt>os_radio(RADIO_RST)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md9", null ],
        [ "<tt>os_radio(RADIO_TX)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md10", null ],
        [ "<tt>os_radio(RADIO_RX)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md11", null ],
        [ "<tt>os_radio(RADIO_RXON)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md12", null ],
        [ "<tt>os_radio(RADIO_TX_AT)</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md13", null ]
      ] ],
      [ "Common parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md14", [
        [ "<tt>LMIC.rps</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md15", null ],
        [ "<tt>LMIC.freq</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md16", null ],
        [ "<tt>LMIC.saveIrqFlags</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md17", null ],
        [ "<tt>LMIC.osjob</tt> (IN/OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md18", null ]
      ] ],
      [ "Transmit parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md19", [
        [ "<tt>LMIC.radio_txpow</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md20", null ],
        [ "<tt>LMIC.frame[]</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md21", null ],
        [ "<tt>LMIC.datalen</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md22", null ],
        [ "<tt>LMIC.txend</tt> (IN, OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md23", null ]
      ] ],
      [ "Receive parameters", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md24", [
        [ "<tt>LMIC.frame[]</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md25", null ],
        [ "<tt>LMIC.datalen</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md26", null ],
        [ "<tt>LMIC.rxtime</tt> (IN/OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md27", null ],
        [ "<tt>LMIC.lbt_ticks</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md28", null ],
        [ "<tt>LMIC.lbt_dbmax</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md29", null ],
        [ "<tt>LMIC.rxsyms</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md30", null ],
        [ "<tt>LMIC.noRXIQinversion</tt> (IN)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md31", null ],
        [ "<tt>LMIC.snr</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md32", null ],
        [ "<tt>LMIC.rssi</tt> (OUT)", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md33", null ]
      ] ]
    ] ],
    [ "Adding a new region to Arduino LMIC", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html", [
      [ "Planning", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md41", [
        [ "Determine the region/region category", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md42", null ],
        [ "Check whether the region is already listed in <tt>lmic_config_preconditions.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md43", null ]
      ] ],
      [ "Make the appropriate changes in <tt>lmic_config_preconditions.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md44", null ],
      [ "Document your region in <tt>README.md</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md45", null ],
      [ "Add the definitions for your region in <tt>lorabase.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md46", null ],
      [ "Edit <tt>lmic_bandplan.h</tt>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md47", null ],
      [ "Create <code>lmic_<em>newregion</em>.c</code>", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md48", null ],
      [ "General Discussion", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md49", null ],
      [ "Adding the region to the Arduino_LoRaWAN library", "md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library__h_o_w_t_o__a_d_d__r_e_g_i_o_n.html#autotoc_md50", null ]
    ] ],
    [ "Bug List", "bug.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", null ],
        [ "Variables", "functions_vars.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_e_s-128___v10_8cpp.html",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lmic__bandplan__au915_8h.html#abf5e6d91eb6be25f5363e44bd3fdc570",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa5fcbcd8fc726fcee63eb842870917cd1",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa966226e442bb1817911cab1e46a1d7ef",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fad6e68740f9a033ba987e60969e00dec3",
"_m_c_c_i___lo_ra_w_a_n___l_m_i_c__library_2src_2lmic_2lorabase__au915_8h.html#a50eae6a4b2574db3ed2a790591f3d95ba41a45a4adf0ab0a40f6985ca79e8953d",
"arduino__lmic__hal__configuration_8h.html#ae9453cd49c92c9fa52e033882c42e9b2ad15305d7a4e34e02489c74a5ef542f36",
"class_arduino___l_m_i_c_1_1_hal_configuration___catena4630__t.html#a96a9540642dfd6b63260fdfc326695bda97492282da7124a7c0326134357f63f0",
"class_arduino___l_m_i_c_1_1_hal_configuration__ttgo__lora32__v21.html#ac245acacaafe22b8beaa31db18608d8ba0d0f755cddce433227a0971bb853cfe9",
"lmic_2hal_8h.html#a3f47543cbb2c40851db33fb7e1ddbf30",
"lmic_2lmic_8h.html#ae56d07f3dd7152fb3fc96a0a192f9ab2",
"lmic_2lorabase_8h.html#a333009c51471e3e1d2d6a2a7b7faf2b3ab032416831a7577afa7705121c60f25b",
"lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fa1f3df51947149dffc14fe80656781ff7",
"lmic_2lorabase_8h.html#aaaf1b490270e0d46bc6b527d6c76cd0fada4802edff6acf89f8139bc8ae980287",
"lmic_2lorabase_8h.html#accbbf81b89fb64feb333a36a5eccb942",
"lmic_2oslmic_8h.html#afea74d2edf90018c31aae2aadd559347",
"md_src__m_c_c_i__lo_ra_w_a_n__l_m_i_c_library_doc__radio_driver.html#autotoc_md24",
"structlmic__t.html#a604193eed909a6b2cb84a88b3b9d99da"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';