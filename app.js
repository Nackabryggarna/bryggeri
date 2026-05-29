// ── SEED DATA ────────────────────────────────────────────────────────────────
const SEED_BREWS = [{"id":1000,"name":"Cascade","style":"","status":"Klar","date":"2019-10-27","volume":null,"og":1.052,"fg":1.019,"abv":4.32,"ibu":null,"srm":null,"recipe":"Malt: 4,8 Pale Ale, 0,2 Chrystal 50\nHumle: 20 Cascade -60, 25 Simcoe -15, 60 Cascade -0\nJäst: SafAle\nPlats: Hagaberg","notes":""},{"id":1001,"name":"Amarillo","style":"","status":"Klar","date":"2019-10-27","volume":null,"og":1.048,"fg":1.02,"abv":3.67,"ibu":null,"srm":null,"recipe":"Malt: 4,8 Pale Ale, 0,2 Chrystal 150\nHumle: 20 Amarillo -60, 25 Simcoe -60, 60 Amarillo -0\nJäst: SafAle\nPlats: Hagaberg","notes":""},{"id":1002,"name":"Bedarö","style":"","status":"Klar","date":"","volume":null,"og":1.054,"fg":1.026,"abv":3.67,"ibu":null,"srm":null,"recipe":"Malt: 0,4 Pale Ale, 4 MO Pale Ale, 0,2 Vetemalt, 0,4 Chrystal 50\nHumle: 15 Chinook -60, 50 Cascade -0\nJäst: SafAle\nPlats: Hagaberg","notes":""},{"id":1003,"name":"Stout","style":"","status":"Klar","date":"2019-11-10","volume":null,"og":1.068,"fg":1.025,"abv":5.63,"ibu":null,"srm":null,"recipe":"Malt: 6,5 MO Pale Ale, 0,4 Caramel, 0,3 Svartmalt, 0,3 Choklad, 0,3 Roasted Barley, 0,2 T Wheat\nHumle: 30 Chinook -60, 15 Chinook -30, 15 Centennial -15, 15 Centennial -5\nJäst: Whitelabs WLP001\nPlats: Hagaberg","notes":"Ingen kolsyra"},{"id":1004,"name":"Amarillo XL","style":"","status":"Klar","date":"","volume":null,"og":1.064,"fg":1.023,"abv":5.37,"ibu":null,"srm":null,"recipe":"Malt: 5,3 MO Pale Ale, 0,2 Chrystal 150\nHumle: 20 Amarillo -60, 25 Cascade -15, 60 Amarillo -0\nJäst: SafAle\nPlats: Hagaberg","notes":"Mycket bra!"},{"id":1005,"name":"Amarillo II","style":"","status":"Klar","date":"2019-12-27","volume":null,"og":1.067,"fg":1.015,"abv":6.81,"ibu":null,"srm":null,"recipe":"Malt: 4,8 MO Pale Ale, 0,2 Munich T2\nHumle: 20 Amarillo -60, 30 Cascade -15, 60 Amarillo -0\nJäst: SafAle\nPlats: Älta","notes":""},{"id":1006,"name":"DIPA","style":"","status":"Klar","date":"2019-12-27","volume":null,"og":1.072,"fg":1.02,"abv":6.81,"ibu":null,"srm":null,"recipe":"Malt: 5,5 MO Pale Ale, 1,0 Munich T2\nHumle: 20 Columbus -90, 25 Simcoe -45, 25 Columbus -30, 50 Centennial -0, 25 Simcoe -0, 75 Simcoe – TH -4d, 50 Columbus TH -4d, 50 Centennial TH -4d\nJäst: SafAle\nPlats: Älta","notes":"Hög bäska"},{"id":1007,"name":"Stout II","style":"","status":"Klar","date":"","volume":null,"og":1.073,"fg":1.025,"abv":6.29,"ibu":null,"srm":null,"recipe":"Malt: 6,5 MO Pale Ale, 0,4 Munich T2, 0,3 Black, 0,3 Choklad, 0,3 Barley, 0,2 Torriefied Weat\nHumle: 30 Chinook -60, 15 Chinook -30, 15 Centennial -15, 15 Centennial -5\nJäst: Flytande+SafAle\nPlats: Älta","notes":"God, kolsyra!"},{"id":1008,"name":"Chinook","style":"","status":"Klar","date":"","volume":null,"og":1.068,"fg":1.02,"abv":6.29,"ibu":null,"srm":null,"recipe":"Malt: 5,0 Basmalt, 0,2 Munich T2, 0,1 Vetemalt\nHumle: 20 Cascade -60, 30 Chinook -15, 60 Chinook -0, 2 dl Socker\nJäst: SafAle\nPlats: Älta","notes":"God, söt smak"},{"id":1009,"name":"Amarillo III","style":"","status":"Klar","date":"","volume":null,"og":1.058,"fg":1.012,"abv":6.03,"ibu":null,"srm":null,"recipe":"Malt: 2 MO Pale Ale, 3 Basmalt, 0,3 crystal\nHumle: 20 Centennial -60, 25 Amarillo -15, 50 Amarillo -0, 2 dl Socker\nJäst: SafAle\nPlats: Älta","notes":""},{"id":1010,"name":"Melon","style":"","status":"Klar","date":"","volume":null,"og":1.06,"fg":1.012,"abv":6.29,"ibu":null,"srm":null,"recipe":"Malt: 5 basmalt, 0,2 Rödmalt\nHumle: 20 Centennial -60, 10 Melon -60, 25 Melon -15, 65 Melon -0, 2 dl bryggsocker\nJäst: Lallemand Nottingham\nPlats: Älta","notes":"Mindre lyckad"},{"id":1011,"name":"Smokey Citra","style":"","status":"Klar","date":"","volume":null,"og":1.072,"fg":1.022,"abv":6.55,"ibu":null,"srm":null,"recipe":"Malt: 5 basmalt, 0,3 rökmalt, 0,4 Carared\nHumle: 30 Simcoe -60, 20 Simcoe -15, 50 Citra -0, 2 dl bryggsocker\nJäst: Lallemand Windsor\nPlats: Älta","notes":"Speciell smak"},{"id":1012,"name":"Styrian Wolf","style":"","status":"Klar","date":"","volume":null,"og":1.07,"fg":1.02,"abv":6.55,"ibu":null,"srm":null,"recipe":"Malt: 5 MO Pale Ale, 0,3 Caramunich II, 0,3 chrystal\nHumle: 30 Columbus -60, 30 Columbus -15, 50 Styrian Wolf-0\nJäst: SafAle\nPlats: Älta","notes":"Bra"},{"id":1013,"name":"White Amarillo","style":"","status":"Klar","date":"","volume":null,"og":1.044,"fg":1.018,"abv":3.41,"ibu":null,"srm":null,"recipe":"Malt: 3 MO Pale Ale, 1,7 Vetemalt, 0,3 Torrified weat, 0,3 socker\nHumle: 30 Cascade -60, 20 Cascade -15, 50 Amarillo -0\nJäst: SafAle\nPlats: Tyresö","notes":""},{"id":1014,"name":"Stout III","style":"","status":"Klar","date":"","volume":null,"og":1.074,"fg":1.024,"abv":6.55,"ibu":null,"srm":null,"recipe":"Malt: 6 Basmalt, 0,4 Munich T2I, 0,4 Black, 0,4 ChokladI, 0,4 Barley, 0,15 Rökmalt\nHumle: 30 Chinook -60, 15 Chinook -30, 15 Cascade -15, 15 Cascade -5\nJäst: SafAle\nPlats: Tyresö","notes":""},{"id":1015,"name":"Red Citra","style":"","status":"Klar","date":"","volume":null,"og":1.045,"fg":1.018,"abv":3.54,"ibu":null,"srm":null,"recipe":"Malt: 4 basmalt, 0,7 carared, 0,3 socker\nHumle: 30 Cascade -60, 20 Simcoe -15, 50 Citra - 0\nJäst: Lallemand Windsor\nPlats: Tyresö","notes":""},{"id":1016,"name":"Dark Amarillo","style":"","status":"Klar","date":"","volume":null,"og":1.062,"fg":1.032,"abv":3.93,"ibu":null,"srm":null,"recipe":"Malt: 4 basmalt, 1,0 Munich T2\nHumle: 30 Simcoe -60, 20 Wolf -15, 50 Amarillo -0, 50 Amarillo TH-4\nJäst: Nottingham\nPlats: Tyresö","notes":"Ej jäst klart på 2v, mkt bra"},{"id":1017,"name":"Azacca","style":"","status":"Klar","date":"","volume":null,"og":1.06,"fg":1.02,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 5 basmalt, 0,2 Caramunich III\nHumle: 30 Cascade -60, 30 Wolf -15, 50 Azacca\nJäst: Safale\nPlats: Tyresö","notes":""},{"id":1018,"name":"White II","style":"","status":"Klar","date":"","volume":null,"og":1.057,"fg":1.013,"abv":5.76,"ibu":null,"srm":null,"recipe":"Malt: 6 MO Pale Ale, 1,5 Vetemalt, 0,5 veteflingor\nHumle: 10 Chinook - 60, 15 Cascade -60, 10 azacca -60, 34 Azacca -15, 50 columbus -0, 20 amarillo -0, Stora kastrullen 25 L\nJäst: Safale White\nPlats: Tyresö","notes":""},{"id":1019,"name":"Mosaic","style":"","status":"Klar","date":"","volume":null,"og":1.072,"fg":1.02,"abv":6.81,"ibu":null,"srm":null,"recipe":"Malt: 5,5 MO basmalt\nHumle: 30 Chinook - 60, 20 chinook -15, 50 Mosaic -0\nJäst: Safale\nPlats: Tyresö","notes":"Söt"},{"id":1020,"name":"Stout IV","style":"","status":"Klar","date":"","volume":null,"og":1.072,"fg":1.03,"abv":5.5,"ibu":null,"srm":null,"recipe":"Malt: 6,0 Basmalt, 1 Munich T2I, 0,5 Svartmalt, 0,5 Carafamalt, 0,15 Rökmalt, 0,5 Rostat korn\nHumle: 50 columbus -60, 30 kohatu -15, 30 citra -0, Stora kastrullen 25 L\nJäst: Bulldog universal ale B1\nPlats: Tyresö","notes":"FG på 80 - spädde ut med 10%"},{"id":1021,"name":"Kohatu","style":"","status":"Klar","date":"","volume":null,"og":1.062,"fg":1.032,"abv":3.93,"ibu":null,"srm":null,"recipe":"Malt: 6 basmalt, 1,5 Munich T2\nHumle: 20 kohatu- 60, 25 amarillo  -15, 50 Kohatu -0, Stora kastrullen 28 L\nJäst: Lallemand Windsor\nPlats: Tyresö","notes":""},{"id":1022,"name":"Fuggle","style":"","status":"Klar","date":"","volume":null,"og":1.068,"fg":1.021,"abv":6.16,"ibu":null,"srm":null,"recipe":"Malt: 7,5 basmalt, 0,4 Caramunich III\nHumle: 30 Amarillo - 60, 20 Fuggle -15, 50 Fuggle -0\nJäst: Safale S-04\nPlats: Älta","notes":"Ej prostafloc - mindre mängd jäst på botten än vanligt"},{"id":1023,"name":"Amarillo IV","style":"","status":"Klar","date":"","volume":null,"og":1.061,"fg":1.012,"abv":6.42,"ibu":null,"srm":null,"recipe":"Malt: 7,5 MO Pale Ale\nHumle: 20 Amarillo -15, 50 Amarillo -0\nJäst: Bulldog European Ale B44\nPlats: Älta","notes":""},{"id":1024,"name":"White III","style":"","status":"Klar","date":"","volume":null,"og":1.062,"fg":1.011,"abv":6.68,"ibu":null,"srm":null,"recipe":"Malt: 1,5 Vete, 0,5 Veteflingor, 6 MO Pale Ale\nHumle: 30 Amarillo -60, 30 Amarillo -15, 60 Amarillo - 0 TH\nJäst: Safale 05\nPlats: Älta","notes":"Bra, stark"},{"id":1025,"name":"White IV","style":"","status":"Klar","date":"","volume":null,"og":1.039,"fg":1.012,"abv":3.54,"ibu":null,"srm":null,"recipe":"Malt: 2,5 vetemalt, 0,5 veteflingar, 5 MO Pale Ale\nHumle: 20 Centennial -60, 20 Citra -15, 60 Citra -0\nJäst: Safale 06\nPlats: Älta","notes":""},{"id":1026,"name":"Citra II","style":"","status":"Klar","date":"","volume":null,"og":1.04,"fg":1.014,"abv":3.41,"ibu":null,"srm":null,"recipe":"Malt: 6 MO Pale Ale, 1 Vetemalt\nHumle: 35 Citra -15, 45 Citra -0, 10 Moaic -0\nJäst: Safale 04\nPlats: Älta","notes":""},{"id":1027,"name":"Mosaic II","style":"","status":"Klar","date":"","volume":null,"og":1.051,"fg":1.008,"abv":5.63,"ibu":null,"srm":null,"recipe":"Malt: 5 Basmalt, 0,5 Munich II, 2 Vetemalt\nHumle: 20 Centennial -60, 30 Citra -15, 50 Mosaic -0\nJäst: Safale 04\nPlats: Älta","notes":"bygelflaskor, 1L"},{"id":1028,"name":"Älta Ale","style":"","status":"Klar","date":"","volume":null,"og":1.09,"fg":1.04,"abv":6.55,"ibu":null,"srm":null,"recipe":"Malt: 3 Basmalt, 0,5 Munich II\nHumle: 20 Älta -15, 8 L'\nJäst: Safale 05","notes":""},{"id":1029,"name":"Stout V","style":"","status":"Klar","date":"","volume":null,"og":1.07,"fg":1.028,"abv":5.5,"ibu":null,"srm":null,"recipe":"Malt: 6,0 Basmalt, 0,5 Munich T2I, 0,5  Caramunich III, 0,5 Svartmalt, 0,5 Carafamalt, 0,5 Rostat korn\nHumle: 50 Centennial -60, 20 centennial -15, 50 Mosaic - 0\nJäst: Safale 05","notes":""},{"id":1030,"name":"Red Azacca","style":"","status":"Klar","date":"2020-10-24","volume":null,"og":1.06,"fg":1.02,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 7 basmalt, 0,5 Rödmalt\nHumle: 35 Azacca -60, 25 Azacca -15, 50 Azacca -0\nJäst: Safale 05","notes":""},{"id":1031,"name":"Dark Amarillo II","style":"","status":"Klar","date":"2020-10-24","volume":null,"og":1.051,"fg":1.011,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 6 Basmalt, 2 Munich II\nHumle: 50 Amarillo -60, 20 Amarillo -15, 50 Amarillo -0\nJäst: Safale 05","notes":""},{"id":1032,"name":"White Amarillo II","style":"","status":"Klar","date":"","volume":null,"og":1.07,"fg":1.015,"abv":7.21,"ibu":null,"srm":null,"recipe":"Malt: 5 MO Pale Ale, 2 Vete, 0,5 Veteflingor\nHumle: 50 Amarillo -60, 20 Amarillo -15, 50 Amarillo -0\nJäst: Safale 06","notes":""},{"id":1033,"name":"Dark Chinook","style":"","status":"Klar","date":"","volume":null,"og":1.05,"fg":1.015,"abv":4.59,"ibu":null,"srm":null,"recipe":"Malt: 7 bas, 0,5 Munich, 0,25 svart\nHumle: 25 Amarillo -60, 25 Chinook -60, 10 Chinook -15, 10 Amarillo -15, 65 Chniook - 0, 25 Amarillo -0\nJäst: Safale 05","notes":""},{"id":1034,"name":"Black & White","style":"","status":"Klar","date":"2020-12-28","volume":null,"og":1.054,"fg":1.011,"abv":5.63,"ibu":null,"srm":null,"recipe":"Malt: 5 MO Pale Ale, 1,5 Vete, 0,5 Veteflingor, 0,2 Svartmalt\nHumle: 50 Columbus - 60, 25 Simcoe - 15, 20 Mosaic - 0, 20 Amarillo - 0, 20 Citra - 0\nJäst: Safale 06","notes":""},{"id":1035,"name":"Super saison","style":"","status":"Klar","date":"2020-12-28","volume":null,"og":1.051,"fg":1.01,"abv":5.37,"ibu":null,"srm":null,"recipe":"Malt: 7,5 MO, 1,5 kg puffat majs, 0,25 Vetemalt\nHumle: 8g Simcoe -60, 45g Simcoe-15, 100g Amarillo -0, 50g Amarillo TH-5\nJäst: Belgian Saison","notes":""},{"id":1036,"name":"Stout VI","style":"","status":"Klar","date":"2021-01-16","volume":null,"og":1.07,"fg":1.025,"abv":5.9,"ibu":null,"srm":null,"recipe":"Malt: 6,0 Basmalt, 1 Munich T2I, 0,5 Svartmalt, 0,5 Carafamalt, 0,5 choklad, 0,5 Rostat korn\nHumle: 50 Simcoe -60, 30 Simcoe -15, 15 citra -0, 15 Simcoe -0\nJäst: Safale 05","notes":""},{"id":1037,"name":"DIPA II","style":"","status":"Klar","date":"2021-01-16","volume":null,"og":1.064,"fg":1.02,"abv":5.76,"ibu":null,"srm":null,"recipe":"Malt: 7 Basmalt, 1 Munich\nHumle: 30 Columbus -60, 30 Simcoe -15, 30 Columbus -15, 20 Mosaic -0, 30 Simcoe -0, 25 Simcoe – TH -4d, 25 Amarillo TH -4d, 25 Citra TH -4d\nJäst: Safale 05","notes":"Grymt bra"},{"id":1038,"name":"Amacitra","style":"","status":"Klar","date":"2021-02-07","volume":null,"og":1.06,"fg":1.011,"abv":6.42,"ibu":null,"srm":null,"recipe":"Malt: 5 MO Pale Ale, 2 Vete, 0,5 Veteflingor, 0,2 Munich\nHumle: 50 Magnum-60, 10 Amarillo -15, 10 Citra -15, 30 Amarillo -0, 30 Citra -0\nJäst: Safale 05","notes":""},{"id":1039,"name":"Obama Porter","style":"","status":"Klar","date":"2021-02-07","volume":null,"og":1.064,"fg":1.012,"abv":6.81,"ibu":null,"srm":null,"recipe":"Malt: 6 basmalt, 0,5 Munich, 0,5 svartmalt, 0,5 chokladmalt, 0,5 kg honung\nHumle: 50 Magnum -60, 25 Hallertau -15, 50 Hallertau -0\nJäst: Safale 05","notes":""},{"id":1040,"name":"White Amarillo III","style":"","status":"Klar","date":"2021-02-28","volume":null,"og":1.052,"fg":1.012,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 6 MO, 1,5 Vete, 0,5 Veteflingor\nHumle: 50 Magnum -60, 20 Amarillo -15, 50 Amarillo -0\nJäst: Safale 06","notes":""},{"id":1041,"name":"DIPA III","style":"","status":"Klar","date":"2021-02-28","volume":null,"og":1.055,"fg":1.016,"abv":5.11,"ibu":null,"srm":null,"recipe":"Malt: 7 Basmalt, 1 Munich\nHumle: 50 Magnum -60, 35 Simcoe -15, 15 Citra -15, 20 Amarillo -0, 20 Simcoe -0, 14 Simcoe – TH -4d, 25 Amarillo TH -4d, 25 Citra TH -4d\nJäst: Safale 04","notes":""},{"id":1042,"name":"Super saison II","style":"","status":"Klar","date":"2021-04-25","volume":null,"og":1.06,"fg":1.02,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 7,5 MO, 1,5 kg puffat majs, 0,25 Vetemalt\nHumle: 10g Simcoe -60, 45g Simcoe-15, 100g Amarillo -0, 50g Amarillo TH-5\nJäst: Saison flytande","notes":""},{"id":1043,"name":"MV Saison","style":"","status":"Klar","date":"2021-04-25","volume":null,"og":1.06,"fg":1.015,"abv":5.9,"ibu":null,"srm":null,"recipe":"Malt: 7 basmalt, 0,5 majs, 0,5 Munich, 0,5 Vete\nHumle: 10g Magnum -60, 25g Amarillo -15, 25g Mosaic -15, 25g Amarillo -0, 25g Mosaic -0, 25 Centennial -0, 25g Amarillo -TH, 25g Mosaic -TH, 25 Centennial -TH\nJäst: Saison flytande","notes":""},{"id":1044,"name":"IPA","style":"","status":"Klar","date":"2021-04-25","volume":null,"og":1.06,"fg":1.02,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 7 Basmalt, 0,5 vete, 0,5 Munich II\nHumle: 50 Warrior -60, 30 Mosaic -15, 10 Citra -15, 15 Cascade -15, 20 Mosaic -0, 40 Amarillo -0, 20 Mosaic -TH, 20 Amarillo -TH, 20 Cascade -TH\nJäst: Safale 04","notes":""},{"id":1045,"name":"Dark Amarillo II","style":"","status":"Klar","date":"2021-05-16","volume":null,"og":1.05,"fg":1.01,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 6,5 Basmalt, 0,5 Munich II\nHumle: 50 Warrior -60, 20 Amarillo -15, 50 Amarillo -0\nJäst: Safale 04","notes":""},{"id":1046,"name":"Vete","style":"","status":"Klar","date":"2021-05-16","volume":null,"og":1.044,"fg":1.011,"abv":4.32,"ibu":null,"srm":null,"recipe":"Malt: 5 Basmalt, 1,5 Vete, 0,5 Veteflingor, 0,2 Munich\nHumle: 50 Magnum - 60, 25 Simcoe - 15, 20 Mosaic - 0, 20 Amarillo - 0, 20 Citra - 0\nJäst: Safale 06","notes":""},{"id":1047,"name":"Dark vete","style":"","status":"Klar","date":"2021-06-28","volume":null,"og":1.041,"fg":1.01,"abv":4.06,"ibu":null,"srm":null,"recipe":"Malt: 5 Basmalt, 1 vete, 0,5 vetefllingor, 0,2 Rostat Vete\nHumle: 50 Magnus - 60, 10 Hallertau - 60, 20 Simcoe - 15, 24 Centennial - 15, 20 Mosaic - 0, 30 Cascade - 0, 10 Citra - 0\nJäst: Safale 06","notes":""},{"id":1048,"name":"Vete","style":"","status":"Klar","date":"2021-06-28","volume":null,"og":1.041,"fg":1.01,"abv":4.06,"ibu":null,"srm":null,"recipe":"Malt: 4 MO, 1,2 vete, 0,5 Veteflingor\nHumle: 50 Magnum -60, 10 Hallertau - 60, 18 Centennial - 15, 4 Hallertau - 15, 8 Mosai - 15, 10 Mosaic - 0, 15 Citra - 0, 25 Amarillo - 0\nJäst: Safale 06","notes":""},{"id":1049,"name":"Stout VII","style":"","status":"Klar","date":"2021-06-28","volume":null,"og":1.06,"fg":1.018,"abv":5.5,"ibu":null,"srm":null,"recipe":"Malt: 6,0 Basmalt, 0,5 Munich T2I, 0,5 Svartmalt, 0,5 Carafamalt, 0,5 choklad, 0,5 Rostat korn\nHumle: 55 Magnum -60, 20 Centennial - 15, 10 Amarillo - 15, 30 Centennial - 0, 15 Amarillo - 0\nJäst: Safale 05","notes":""},{"id":1050,"name":"Saison","style":"","status":"Klar","date":"2021-07-19","volume":null,"og":1.05,"fg":1.009,"abv":5.37,"ibu":null,"srm":null,"recipe":"Malt: 6 Basmalt, 0,5 Caramel Aromatic, 0,5 Vete\nHumle: 50 Magnus -60, 20 Cascade -15, 20 Centennial - 0, 25 Mosaic - 0, 20 Amarillo -0\nJäst: Belgian Saison","notes":""},{"id":1051,"name":"IPA","style":"","status":"Klar","date":"2021-07-19","volume":null,"og":1.064,"fg":1.013,"abv":6.68,"ibu":null,"srm":null,"recipe":"Malt: 7 Basmalt, 1 Munich T2\nHumle: 50 Magnus -60, 30 Centennial - 15, 22 Amarillo - 0, 15 Citra - 0, 13 Mosaic - 0\nJäst: Safale 05","notes":""},{"id":1052,"name":"Vete Saison","style":"","status":"Klar","date":"2021-07-19","volume":null,"og":1.043,"fg":1.009,"abv":4.45,"ibu":null,"srm":null,"recipe":"Malt: 4,5 MO, 1,0 Vete, 0,5 Veteflingor\nHumle: 50 Magnum -60, 30 Cascade - 15, 16 Amarillo - 0, 16 Cira - 0, 20 Mosaic - 0\nJäst: Belgian Saison","notes":""},{"id":1053,"name":"vete","style":"","status":"Klar","date":"2022-12-26","volume":null,"og":1.044,"fg":1.012,"abv":4.19,"ibu":null,"srm":null,"recipe":"Malt: 5 MO, 1,5 vete, 0,5 veteflingor\nHumle: 50 Magnum - 60, 30 Cascade -15, 14 Amarillo -0, 14 Mosaic -0, 20 Citra -0\nJäst: Safale 06","notes":""},{"id":1054,"name":"Ale","style":"","status":"Klar","date":"2022-12-26","volume":null,"og":1.042,"fg":1.01,"abv":4.19,"ibu":null,"srm":null,"recipe":"Malt: 5 basmalt, 0,3 rödmalt\nHumle: 50 Magnum - 60, Amarillo\nJäst: Safale 05","notes":""},{"id":1055,"name":"2023 Batch 3","style":"","status":"Klar","date":"","volume":null,"og":1.032,"fg":1.009,"abv":3.01,"ibu":null,"srm":null,"recipe":"Malt: 4,5 basmalt, 0,5 Munchen\nHumle: 50 Magnum -60, 25 Centennial -15, 25 Cascade -0, 25 Challenger -0\nJäst: Mangrove Jack New world strong ale\nPlats: Älta","notes":""},{"id":1056,"name":"2023 Batch 4","style":"","status":"Klar","date":"","volume":null,"og":1.032,"fg":1.012,"abv":2.62,"ibu":null,"srm":null,"recipe":"Malt: 4 Basmalt, 1 Vetemalt\nHumle: 50 Magnum -60, 25 Centennial -15, 7 Centennial -0, 25 Challenger -0, 25 Cascade -0\nJäst: Safale White\nPlats: Älta","notes":""},{"id":1057,"name":"2023 Batch 5","style":"","status":"Klar","date":"","volume":null,"og":1.037,"fg":1.011,"abv":3.41,"ibu":null,"srm":null,"recipe":"Malt: 4,5 basmalt, 1 Munchen, 0,1 Carafa\nHumle: 50 Magnum -60, 25 Cascade -15, 27 Cascade -0, 23 Challenger -0\nJäst: Safale\nPlats: Älta","notes":""},{"id":1058,"name":"2023 Batch 6","style":"","status":"Klar","date":"","volume":null,"og":1.03,"fg":1.01,"abv":2.62,"ibu":null,"srm":null,"recipe":"Malt: 4 basmalt, 0,5 Munchen\nHumle: 50 Magnum -60, 25 Mosaic -15, Challenger 16 -0, Mosaic 21 -0\nJäst: Safale\nPlats: älta","notes":""},{"id":1059,"name":"2023 Batch 7","style":"","status":"Klar","date":"","volume":null,"og":1.044,"fg":1.021,"abv":3.01,"ibu":null,"srm":null,"recipe":"Malt: 4,5 bas, 0,25 munchen\nHumle: 50 Magnum -60, 25 Simcoe -15, 25 simcoe -0, 25 Cascade -0, o\nJäst: Safale\nPlats: älta","notes":""},{"id":1060,"name":"2023 Batch 8","style":"","status":"Klar","date":"","volume":null,"og":1.078,"fg":1.018,"abv":7.86,"ibu":null,"srm":null,"recipe":"Malt: 4,5 basmalt, 1 vete\nHumle: 50 Magnum -60, 25 Simcoe -15, 50 amarillo - 0\nJäst: safale vete\nPlats: älta","notes":""},{"id":1061,"name":"2023 batch 9","style":"","status":"Klar","date":"","volume":null,"og":1.054,"fg":1.02,"abv":4.45,"ibu":null,"srm":null,"recipe":"Malt: 6 basmalt, 1 munchen, 0,25 carafa, 500g honung\nHumle: 50 Magnum -60, 25 simcoe -15, 25 mosaic -0, 25 cascade -0\nJäst: safale 07\nPlats: älta","notes":""},{"id":1062,"name":"2023 batch 10","style":"","status":"Klar","date":"","volume":null,"og":1.048,"fg":1.012,"abv":4.72,"ibu":null,"srm":null,"recipe":"Malt: 5 basmalt, 1 vete\nHumle: 50 Magnum -60, 27 mosaic -15, 40 Amarillo -0, 10 citra -0\nJäst: safale vete\nPlats: älta","notes":""},{"id":1063,"name":"2023 batch 11","style":"","status":"Klar","date":"","volume":null,"og":1.062,"fg":1.018,"abv":5.76,"ibu":null,"srm":null,"recipe":"Malt: 6 basmalt, 0.25.carafa, 0.25 svart, 0.25 choklad, 600g honung, 0.5 munchen\nHumle: 50 Magnum -60, 30 cascade -15, 15 cascade -0, 35 mosaic -0\nJäst: Safale\nPlats: älta","notes":""},{"id":1064,"name":"2024 Batch 1","style":"","status":"Klar","date":"2024-05-04","volume":null,"og":1.043,"fg":1.01,"abv":4.32,"ibu":null,"srm":null,"recipe":"Malt: 4 Basmalt, 1 Vetemalt\nHumle: 50 Magnum -60, 30 Mosaic -15, 40 Amarillo -0, 10 Citra -0\nJäst: Safale K97\nPlats: Älta","notes":"Mkt god"},{"id":1065,"name":"2024 Batch 2","style":"","status":"Klar","date":"2024-05-04","volume":null,"og":1.06,"fg":1.02,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 6 basmalt, 0.25 carafa, 0.25 svart, 0,1 Rostat korn, 0.6 munchen, 800g honung\nHumle: 50 Mosaic -60, 30 cascade -15, 35 cascade -0, 10 mosaic -0, 5 Citra -0\nJäst: Safale S33\nPlats: Älta","notes":"God, söt"},{"id":1066,"name":"2024 Batch 3","style":"","status":"Klar","date":"2024-05-25","volume":null,"og":1.042,"fg":1.01,"abv":4.19,"ibu":null,"srm":null,"recipe":"Malt: 4,5 Basmalt, 0,25 Munchen\nHumle: 50 Cascade -60, 30 Mosaic -15, 65 Amarillo - 0\nJäst: Safale S04\nPlats: Älta","notes":"Märklig eftersmak"},{"id":1067,"name":"2024 Batch 4","style":"","status":"Klar","date":"2024-05-26","volume":null,"og":1.041,"fg":1.014,"abv":3.54,"ibu":null,"srm":null,"recipe":"Malt: 4 Basmalt, 1 Vetemalt, 0,25 Munchen\nHumle: 50 Cascade -60, 30 cascade -15, 20 Mosaic -0, 12 Citra -0, 25 Amarillo -0\nJäst: Safale WB06\nPlats: Älta","notes":"God, lättdrucken"},{"id":1068,"name":"2024 Batch 5","style":"","status":"Klar","date":"2024-06-16","volume":null,"og":1.04,"fg":1.009,"abv":4.06,"ibu":null,"srm":null,"recipe":"Malt: 4 bas, 1 vete\nHumle: 50 Cascade -60, 30 cascade -15, 11 Citra -0, 30 Amarillo -0\nJäst: Safale WB06\nPlats: Älta","notes":"Magnifik!"},{"id":1069,"name":"2024 Batch 6","style":"","status":"Klar","date":"2024-06-17","volume":null,"og":1.06,"fg":1.012,"abv":6.29,"ibu":null,"srm":null,"recipe":"Malt: 6 bas, 1 Munchen, 0,25 Carafa, 0,1 Korn, 800g honung\nHumle: 50 Cascade -60, 30 cascade -15, 25 Cascade -0, 25 Mosaic -0\nJäst: Safale US 05\nPlats: Älta","notes":""},{"id":1070,"name":"2024 Batch 7","style":"","status":"Klar","date":"2024-07-15","volume":null,"og":1.044,"fg":1.017,"abv":3.54,"ibu":null,"srm":null,"recipe":"Malt: 4,5 bas, 0,5 Munchen, 0,25 Svart\nHumle: 50 Magnum -60, 15 cascade -15, 15 Mosaic -15, 30 cascade -0, 30 Mosaic -0\nJäst: Safale US 06\nPlats: Älta","notes":""},{"id":1071,"name":"2024 Batch 8","style":"","status":"Klar","date":"2024-07-17","volume":null,"og":1.038,"fg":1.02,"abv":2.36,"ibu":null,"srm":null,"recipe":"Malt: 4 bas, 1 vete\nHumle: 50 Magnum -60, 30 Mosaic -30, 40 Mosaic -0, 10 Citra -0\nJäst: Safale S-33\nPlats: Älta","notes":""},{"id":1072,"name":"2025 Batch 1","style":"","status":"Klar","date":"2025-06-01","volume":null,"og":1.056,"fg":1.012,"abv":5.76,"ibu":null,"srm":null,"recipe":"Malt: 5 Basmalt, 1 Vetemalt\nHumle: 50 Magnum -60, 27 Cascade -15, 40 Mosaic -0, 10 Citra -0\nJäst: Safale T58\nPlats: Älta","notes":"Grymt bra"},{"id":1073,"name":"2025 Batch 2","style":"","status":"Klar","date":"2025-06-13","volume":null,"og":1.052,"fg":1.012,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 7 Basmalt, 0,7 Munchen, 0,1 rostat korn, 0,1 Svartmalt, 0,1 Chokladmalt, 700g honung\nHumle: 50 Magnum -60, 30 Mosaic -15, 50 Mosaic -0\nJäst: Safale 05\nPlats: Älta","notes":""},{"id":1074,"name":"2025 Batch 3","style":"","status":"Klar","date":"2025-06-21","volume":null,"og":1.041,"fg":1.01,"abv":4.06,"ibu":null,"srm":null,"recipe":"Malt: 6 Basmalt, 1,5 Vete\nHumle: 60 Mosaic -60, 40 Amarillo -15, 60 Amarillo -0, 10 Citra -0\nJäst: Safale\nPlats: Älta","notes":"lite kolsyra, svag smak"},{"id":1075,"name":"2025 Batch 4","style":"","status":"Klar","date":"2025-06-29","volume":null,"og":1.042,"fg":1.01,"abv":4.19,"ibu":null,"srm":null,"recipe":"Malt: 7 Basmalt, 1 Munchen\nHumle: 50 Magnum -60, 50 Simcoe -15, 50 Cascade -0\nJäst: Safale 05\nPlats: Älta","notes":"Mkt bra"},{"id":1076,"name":"2025 Batch 5","style":"","status":"Klar","date":"2025-08-10","volume":null,"og":1.05,"fg":1.01,"abv":5.24,"ibu":null,"srm":null,"recipe":"Malt: 7 Basmalt, 0,15 rostat korn, 0,2 Carafa, 0,2 Svartmalt, 0,2 Chokladmalt, 700g honung\nHumle: 50 Magnum -60, 30 Mosaic -15, 50 Simcoe -0\nJäst: Safale 05\nPlats: Älta","notes":""},{"id":1077,"name":"2026 Batch 1","style":"","status":"Klar","date":"2026-05-10","volume":null,"og":1.05,"fg":1.012,"abv":4.98,"ibu":null,"srm":null,"recipe":"Malt: 6 Basmalt, 1 Vetemalt\nHumle: 50 Magnum -60, 30 Amarillo -45, 50 Amarillo -0\nJäst: Safale - WB06\nPlats: Älta","notes":""},{"id":1078,"name":"2026 Batch 2","style":"","status":"Klar","date":"2026-05-10","volume":null,"og":1.032,"fg":1.012,"abv":2.62,"ibu":null,"srm":null,"recipe":"Malt: 9,3 bas, 0,15 svart\nHumle: 50 Magnum -60, 80 Amarillo -45, 80 Amarillo -0\nJäst: Safale 05\nPlats: Älta","notes":""}];

// ── DB ───────────────────────────────────────────────────────────────────────
const SEED_VER = '4';
const DB = {
  get() {
    const s = localStorage.getItem('brews');
    const v = localStorage.getItem('brews_ver');
    if (!s || v !== SEED_VER) {
      localStorage.setItem('brews', JSON.stringify(SEED_BREWS));
      localStorage.setItem('brews_ver', SEED_VER);
      return SEED_BREWS;
    }
    return JSON.parse(s);
  },
  set(a) { localStorage.setItem('brews', JSON.stringify(a)); }
};

// ── STYLE GUESS ──────────────────────────────────────────────────────────────
function guessStyle(name, recipe) {
  const n = (name || '').toLowerCase();
  const r = (recipe || '').toLowerCase();
  if (/stout/.test(n)) return 'Stout';
  if (/porter/.test(n)) return 'Porter';
  if (/dipa|tipa/.test(n)) return 'DIPA / TIPA';
  if (/\bipa\b/.test(n)) return 'IPA';
  if (/saison/.test(n)) return 'Saison';
  if (/vete\b|vetemalt|weizen|white (ama|i|ii|iii)|wheat/.test(n)) return 'Weizen / Hefeweizen';
  if (/lager|pils/.test(n)) return 'Lager';
  if (/sour|kettle/.test(n)) return 'Sour / Kettle Sour';
  if (/pale ale/.test(n)) return 'Pale Ale';
  // recipe hints
  if (/svartmalt|carafamalt|chokladmalt|black malt|roasted|stout|porter/.test(r)) return 'Annan';
  return 'Pale Ale';
}
function effectiveStyle(b) { return b.style || guessStyle(b.name, b.recipe); }

// ── COLORS ───────────────────────────────────────────────────────────────────
const SRM = ['#FFE699','#FFD878','#FFCA5A','#FFBF42','#FBB123','#F8A600','#F39C00','#EA8F00','#E58500','#DE7C00','#D77200','#CF6900','#CB6200','#C35900','#BB5100','#B54C00','#B04500','#A63E00','#A13700','#9B3200','#952D00','#8E2900','#882300','#821E00','#7B1A00','#771900','#701400','#6A0F00','#660D00','#600900','#5C0800','#560600','#520500','#4C0400','#470300','#420200','#3D0100','#390100','#350100','#300000'];
const SCOL = {'IPA':'#c8841a','DIPA / TIPA':'#a05010','Stout':'#555','Imperial Stout':'#3a3a3a','Porter':'#7a3a0a','Saison':'#b8a030','Weizen / Hefeweizen':'#c89030','Pale Ale':'#c08840','Lager':'#c0b040','Pilsner':'#c8c848','Sour / Kettle Sour':'#70aa30','Annan':'#607090'};
const srmC = v => SRM[Math.min(Math.max(Math.round(v) - 1, 0), 39)];
const sc = s => SCOL[s] || '#a06018';
const brewColor = b => b.srm ? srmC(b.srm) : sc(effectiveStyle(b));

// ── VOLUME ESTIMATE ──────────────────────────────────────────────────────────
function estimateVol(b) {
  if (b.volume && b.volume > 0) return b.volume;
  const txt = ((b.recipe || '') + ' ' + (b.notes || '')).toLowerCase();
  const m = txt.match(/(\d+)\s*l\b/);
  if (m) { const v = parseInt(m[1]); if (v >= 8 && v <= 80) return v; }
  return 20; // standardbatch ~20L
}

// ── HELPERS ──────────────────────────────────────────────────────────────────
function hopsOf(brews) {
  const m = {};
  brews.forEach(b => {
    const r = (b.recipe || '').match(/Humle: (.+)/);
    if (!r) return;
    r[1].split(',').forEach(h => {
      const n = h.trim().replace(/^\d[\d,.]*\s*g?\s*/i, '').replace(/\s*[-–]\s*\d+.*$/, '').trim();
      if (n && n.length > 1) m[n] = (m[n] || 0) + 1;
    });
  });
  return m;
}
function byKey(arr, fn) {
  const m = {};
  arr.forEach(x => { const k = fn(x); if (k) m[k] = (m[k] || 0) + 1; });
  return m;
}

// ── CHART HELPER ─────────────────────────────────────────────────────────────
const _charts = {};
function mkChart(id, cfg) {
  if (_charts[id]) _charts[id].destroy();
  const el = document.getElementById(id);
  if (el) _charts[id] = new Chart(el, cfg);
}
const CGRID = { color: '#272010' };
const CTICK = { color: '#7a6840' };

// ── CARD HTML ─────────────────────────────────────────────────────────────────
function cardHtml(b, num) {
  const col = brewColor(b);
  const hops = (b.recipe || '').match(/Humle: (.+)/)?.[1] || '';
  const malt = (b.recipe || '').match(/Malt: (.+)/)?.[1] || '';
  return `<div class="brew-card" data-id="${b.id}">
    <div class="card-accent" style="background:${col}"></div>
    <div class="card-body">
      <div class="card-header">
        <div class="card-name">${b.name}</div>
        <span class="card-num">#${num}</span>
      </div>
      <div class="card-badges">
        ${effectiveStyle(b) ? `<span class="badge b-style">${effectiveStyle(b)}</span>` : ''}
        ${b.abv ? `<span class="badge b-abv">${b.abv}%</span>` : ''}
        ${b.date ? `<span class="badge b-date">${b.date}</span>` : ''}
      </div>
      <div class="card-recipe">
        ${malt ? `<strong>Malt:</strong> ${malt}` : ''}${malt && hops ? ' · ' : ''}${hops ? `<strong>Humle:</strong> ${hops}` : ''}
      </div>
    </div>
  </div>`;
}

// ── NAVIGATION ───────────────────────────────────────────────────────────────
function go(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  if (btn) btn.classList.add('active');
  else {
    const nb = document.querySelector(`.nav-btn[data-page="${name}"]`);
    if (nb) nb.classList.add('active');
  }
  window.scrollTo(0, 0);
  if (name === 'hem') renderHem();
  if (name === 'brygder') renderCards();
  if (name === 'statistik') renderStat();
}

// ── HEM ──────────────────────────────────────────────────────────────────────
function renderHem() {
  const all = DB.get();
  const sorted = [...all].sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  const wa = all.filter(b => b.abv > 0);
  const avg = (wa.reduce((s, b) => s + b.abv, 0) / (wa.length || 1)).toFixed(1);
  const hops = hopsOf(all);
  const topHop = Object.entries(hops).sort((a, b) => b[1] - a[1])[0] || ['–', 0];
  const yrs = byKey(all.filter(b => b.date), b => b.date.slice(0, 4));
  const validYrs = Object.entries(yrs).filter(([y]) => y >= '2019');
  const bestYear = validYrs.reduce((m, e) => e[1] > m[1] ? e : m, ['–', 0]);

  const totalVol = all.reduce((s, b) => s + estimateVol(b), 0);

  document.getElementById('hs-total').textContent = all.length;
  document.getElementById('hs-avg').textContent = avg + '%';
  document.getElementById('hs-vol').textContent = totalVol.toLocaleString('sv') + ' L';
  document.getElementById('hs-hop').textContent = topHop[0];
  document.getElementById('hs-year').textContent = bestYear[0];

  const grid = document.getElementById('home-grid');
  grid.innerHTML = sorted.slice(0, 12).map((b, i) => cardHtml(b, all.length - i)).join('') ||
    `<div class="empty"><div class="ico">🍺</div><p>Inga brygder ännu.</p></div>`;
}

// ── BRYGDER ──────────────────────────────────────────────────────────────────
function renderCards() {
  let all = DB.get();
  const q = (document.getElementById('q').value || '').toLowerCase();
  const so = document.getElementById('sort').value;

  const chips = document.getElementById('style-chips');
  if (!chips.dataset.built) {
    const styles = [...new Set(all.map(b => b.style).filter(Boolean))].sort();
    chips.innerHTML = `<button class="chip on" data-s="">Alla</button>` +
      styles.map(s => `<button class="chip" data-s="${s}">${s}</button>`).join('');
    chips.dataset.built = '1';
  }

  const active = chips.querySelector('.chip.on');
  const sf = active ? active.dataset.s : '';
  if (sf) all = all.filter(b => b.style === sf);
  if (q) all = all.filter(b =>
    (b.name + ' ' + (b.recipe || '') + ' ' + (b.style || '')).toLowerCase().includes(q)
  );

  const total = DB.get().length;
  all = [...all].sort((a, b) => {
    if (so === 'new') return new Date(b.date || 0) - new Date(a.date || 0);
    if (so === 'old') return new Date(a.date || 0) - new Date(b.date || 0);
    if (so === 'abv-hi') return (b.abv || 0) - (a.abv || 0);
    if (so === 'abv-lo') return (a.abv || 0) - (b.abv || 0);
    return a.name.localeCompare(b.name, 'sv');
  });

  document.getElementById('brygder-meta').textContent = all.length + ' av ' + total + ' brygder';
  const grid = document.getElementById('brygder-grid');
  const empty = document.getElementById('brygder-empty');
  if (!all.length) { grid.innerHTML = ''; empty.style.display = 'block'; return; }
  empty.style.display = 'none';
  grid.innerHTML = all.map((b, i) => cardHtml(b, total - i)).join('');
}

// ── STATISTIK ────────────────────────────────────────────────────────────────
function renderStat() {
  const all = DB.get();
  const styles = byKey(all, b => b.style || 'Okänd');
  const hops = hopsOf(all);
  const wa = all.filter(b => b.abv > 0);
  const yrs = byKey(all.filter(b => b.date), b => b.date.slice(0, 4));
  const vy = Object.keys(yrs).filter(y => y >= '2019').sort();

  // Use effectiveStyle for stats
  const estyles = byKey(all, b => effectiveStyle(b));
  const sl = Object.entries(estyles).sort((a, b) => b[1] - a[1]).slice(0, 8);
  mkChart('ch-styles', {
    type: 'doughnut',
    data: { labels: sl.map(e => e[0]), datasets: [{ data: sl.map(e => e[1]), backgroundColor: sl.map(e => sc(e[0])), borderColor: '#0f0d08', borderWidth: 2 }] },
    options: { plugins: { legend: { position: 'right', labels: { color: '#7a6840', boxWidth: 12, font: { size: 11 } } } } }
  });

  // ABV trend
  const withDate = all.filter(b => b.date && b.abv).sort((a, b) => new Date(a.date) - new Date(b.date));
  mkChart('ch-trend', {
    type: 'line',
    data: {
      labels: withDate.map(b => b.date.slice(0, 7)),
      datasets: [{ data: withDate.map(b => b.abv), borderColor: '#d4922a', backgroundColor: 'rgba(212,146,42,.08)', tension: 0.3, pointRadius: 3, pointBackgroundColor: '#d4922a', fill: true }]
    },
    options: { plugins: { legend: { display: false } }, scales: { x: { ticks: { ...CTICK, maxTicksLimit: 12 }, grid: CGRID }, y: { ticks: CTICK, grid: CGRID, title: { display: true, text: 'ABV %', color: '#7a6840' } } } }
  });

  const bkts = ['0–2', '2–4', '4–5', '5–6', '6–7', '7–8', '8+'];
  const abvd = [
    wa.filter(b => b.abv < 2).length,
    wa.filter(b => b.abv >= 2 && b.abv < 4).length,
    wa.filter(b => b.abv >= 4 && b.abv < 5).length,
    wa.filter(b => b.abv >= 5 && b.abv < 6).length,
    wa.filter(b => b.abv >= 6 && b.abv < 7).length,
    wa.filter(b => b.abv >= 7 && b.abv < 8).length,
    wa.filter(b => b.abv >= 8).length,
  ];
  mkChart('ch-abv', {
    type: 'bar',
    data: { labels: bkts, datasets: [{ data: abvd, backgroundColor: '#d4922a', borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { x: { ticks: CTICK, grid: CGRID }, y: { ticks: { ...CTICK, stepSize: 1 }, grid: CGRID } } }
  });

  mkChart('ch-years', {
    type: 'bar',
    data: { labels: vy, datasets: [{ data: vy.map(y => yrs[y] || 0), backgroundColor: '#a06018', borderRadius: 4 }] },
    options: { plugins: { legend: { display: false } }, scales: { x: { ticks: CTICK, grid: CGRID }, y: { ticks: { ...CTICK, stepSize: 1 }, grid: CGRID } } }
  });

  const th = Object.entries(hops).sort((a, b) => b[1] - a[1]).slice(0, 8);
  mkChart('ch-hops', {
    type: 'bar',
    data: { labels: th.map(e => e[0]), datasets: [{ data: th.map(e => e[1]), backgroundColor: '#6a9040', borderRadius: 4 }] },
    options: { indexAxis: 'y', plugins: { legend: { display: false } }, scales: { x: { ticks: { ...CTICK, stepSize: 1 }, grid: CGRID }, y: { ticks: CTICK, grid: CGRID } } }
  });

  const maxB = wa.reduce((m, b) => b.abv > m.abv ? b : m, wa[0] || { abv: 0, name: '–' });
  const minB = wa.reduce((m, b) => b.abv < m.abv ? b : m, wa[0] || { abv: 99, name: '–' });
  const avg = (wa.reduce((s, b) => s + b.abv, 0) / (wa.length || 1)).toFixed(1);
  const topS = Object.entries(estyles).sort((a, b) => b[1] - a[1])[0] || ['–', 0];
  const topH = Object.entries(hops).sort((a, b) => b[1] - a[1])[0] || ['–', 0];

  document.getElementById('records').innerHTML = [
    ['Starkaste brygd', maxB.name, maxB.abv + '% ABV'],
    ['Svagaste brygd', minB.name, minB.abv + '% ABV'],
    ['Snitt ABV', avg + '%', wa.length + ' brygder med data'],
    ['Mest brygd stil', topS[0], topS[1] + ' brygder'],
    ['Favorithumle', topH[0], topH[1] + ' brygder'],
    ['Totalt', all.length + ' brygder', 'i bryggeriboken'],
  ].map(([k, v, s]) => `<li><div class="rec-key">${k}</div><strong>${v}</strong> — <span style="font-size:.76rem;color:var(--muted)">${s}</span></li>`).join('');

  const mh = th[0]?.[1] || 1;
  document.getElementById('hops-rank').innerHTML = th.map(([n, c], i) => `
    <li><span class="tl-rank">${i + 1}</span>
    <div class="tl-body"><div class="tl-row"><span class="tl-name">${n}</span><span class="tl-cnt">${c}×</span></div>
    <div class="tl-bar"><div class="tl-fill" style="width:${Math.round(c / mh * 100)}%"></div></div></div></li>`).join('');
}

// ── BREW DETAIL ───────────────────────────────────────────────────────────────
let _curIdx = 0;
let _detailList = [];

function openBrew(id) {
  const all = DB.get().sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
  _detailList = all;
  const idx = all.findIndex(b => b.id === id);
  if (idx < 0) return;
  _curIdx = idx;
  showDetail(idx);
  go('brew');
}

function brewNav(dir) {
  const ni = _curIdx + dir;
  if (ni < 0 || ni >= _detailList.length) return;
  _curIdx = ni;
  showDetail(ni);
  window.scrollTo(0, 0);
}

function showDetail(idx) {
  const b = _detailList[idx];
  const col = brewColor(b);
  document.getElementById('bd-accent').style.background = col;
  document.getElementById('bd-name').textContent = b.name;
  document.getElementById('bd-sub').textContent = [b.style, b.date, b.status].filter(Boolean).join(' · ');
  document.getElementById('bd-pills').innerHTML = [
    b.style && `<span class="badge b-style">${b.style}</span>`,
    b.abv && `<span class="badge b-abv">${b.abv}%</span>`,
    b.ibu && `<span class="badge b-date">IBU ${b.ibu}</span>`,
    b.volume && `<span class="badge b-date">${b.volume} L</span>`,
  ].filter(Boolean).join('');

  const stats = [['OG', b.og], ['FG', b.fg], ['ABV', b.abv ? b.abv + '%' : null], ['IBU', b.ibu], ['SRM', b.srm], ['Vol', b.volume ? b.volume + ' L' : null]].filter(([, v]) => v);
  document.getElementById('bd-stats').innerHTML = stats.map(([k, v]) =>
    `<div class="stat-b"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('');

  const rb = document.getElementById('bd-recipe');
  if (b.recipe) { document.getElementById('bd-recipe-text').textContent = b.recipe; rb.style.display = 'block'; }
  else rb.style.display = 'none';

  const nb = document.getElementById('bd-notes');
  if (b.notes) { document.getElementById('bd-notes-text').textContent = b.notes; nb.style.display = 'block'; }
  else nb.style.display = 'none';

  document.getElementById('bd-prev').disabled = idx >= _detailList.length - 1;
  document.getElementById('bd-next').disabled = idx <= 0;

  // Image
  const imgKey = 'img_' + b.id;
  const imgData = localStorage.getItem(imgKey);
  const imgWrap = document.getElementById('bd-img-wrap');
  const imgEl = document.getElementById('bd-img');
  const imgRemove = document.getElementById('bd-img-remove');
  if (imgData) {
    imgEl.src = imgData;
    imgWrap.style.display = 'block';
    imgRemove.style.display = 'inline-block';
  } else {
    imgWrap.style.display = 'none';
    imgRemove.style.display = 'none';
  }
}

// ── SAVE BREW ─────────────────────────────────────────────────────────────────
function saveBrew(e) {
  e.preventDefault();
  const g = id => document.getElementById(id);
  const b = {
    id: Date.now(),
    name: g('fn').value.trim(),
    style: g('fs').value,
    status: g('fst').value,
    date: g('fd').value,
    volume: parseFloat(g('fv').value) || null,
    og: parseFloat(g('fog').value) || null,
    fg: parseFloat(g('ffg').value) || null,
    abv: parseFloat(g('fabv').value) || null,
    ibu: parseInt(g('fibu').value) || null,
    srm: parseInt(g('fsrm').value) || null,
    recipe: g('frec').value.trim(),
    notes: g('fnot').value.trim(),
  };
  const all = DB.get();
  all.unshift(b);
  DB.set(all);
  g('brew-form').reset();
  g('fd').valueAsDate = new Date();
  g('srm-prev').style.background = 'transparent';
  document.getElementById('style-chips').removeAttribute('data-built');
  alert('✓ "' + b.name + '" sparad!');
  go('brygder');
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {

  // Nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => go(btn.dataset.page, btn));
  });

  // Hero CTA
  document.getElementById('hero-cta').addEventListener('click', () => go('brygder'));

  // See all link on hem
  document.getElementById('hem-see-all').addEventListener('click', () => go('brygder'));

  // Card clicks – event delegation on home and brygder grids
  document.getElementById('home-grid').addEventListener('click', e => {
    const card = e.target.closest('.brew-card');
    if (card) openBrew(parseInt(card.dataset.id));
  });
  document.getElementById('brygder-grid').addEventListener('click', e => {
    const card = e.target.closest('.brew-card');
    if (card) openBrew(parseInt(card.dataset.id));
  });

  // Search & sort
  document.getElementById('q').addEventListener('input', renderCards);
  document.getElementById('sort').addEventListener('change', renderCards);

  // Style chips (delegation)
  document.getElementById('style-chips').addEventListener('click', e => {
    const chip = e.target.closest('.chip');
    if (!chip) return;
    document.querySelectorAll('#style-chips .chip').forEach(c => c.classList.remove('on'));
    chip.classList.add('on');
    renderCards();
  });

  // Brew detail navigation
  document.getElementById('bd-back').addEventListener('click', () => go('brygder'));
  document.getElementById('bd-prev').addEventListener('click', () => brewNav(1));
  document.getElementById('bd-next').addEventListener('click', () => brewNav(-1));

  // Delete brew
  document.getElementById('bd-del').addEventListener('click', () => {
    const b = _detailList[_curIdx];
    if (!b || !confirm('Ta bort "' + b.name + '"?')) return;
    DB.set(DB.get().filter(x => x.id !== b.id));
    document.getElementById('style-chips').removeAttribute('data-built');
    go('brygder');
  });

  // Form
  document.getElementById('brew-form').addEventListener('submit', saveBrew);

  // OG/FG → ABV
  ['fog', 'ffg'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
      const og = parseFloat(document.getElementById('fog').value);
      const fg = parseFloat(document.getElementById('ffg').value);
      if (og && fg && og > fg) document.getElementById('fabv').value = ((og - fg) * 131.25).toFixed(1);
    });
  });

  // SRM preview
  document.getElementById('fsrm').addEventListener('input', function () {
    const v = parseInt(this.value);
    document.getElementById('srm-prev').style.background = v >= 1 ? SRM[Math.min(v - 1, 39)] : 'transparent';
  });

  // Date default
  document.getElementById('fd').valueAsDate = new Date();

  // Export
  document.getElementById('btn-export').addEventListener('click', () => {
    const data = JSON.stringify(DB.get(), null, 2);
    const a = document.createElement('a');
    a.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(data);
    a.download = 'nackabryggarna_' + new Date().toISOString().slice(0, 10) + '.json';
    a.click();
  });

  // Import
  document.getElementById('import-file').addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      try {
        const brews = JSON.parse(e.target.result);
        if (!Array.isArray(brews)) throw new Error('Inte en lista');
        if (!confirm('Importera ' + brews.length + ' brygder? Det ersätter nuvarande data.')) return;
        DB.set(brews);
        localStorage.setItem('brews_ver', SEED_VER);
        document.getElementById('style-chips').removeAttribute('data-built');
        go('brygder');
        alert('✓ ' + brews.length + ' brygder importerade!');
      } catch (err) {
        alert('Fel: ' + err.message);
      }
    };
    reader.readAsText(file);
    this.value = '';
  });

  // Image upload in brew detail
  document.getElementById('bd-img-input').addEventListener('change', function () {
    const file = this.files[0];
    if (!file || !_detailList[_curIdx]) return;
    const reader = new FileReader();
    reader.onload = e => {
      const b = _detailList[_curIdx];
      localStorage.setItem('img_' + b.id, e.target.result);
      showDetail(_curIdx);
    };
    reader.readAsDataURL(file);
    this.value = '';
  });

  // Remove image
  document.getElementById('bd-img-remove').addEventListener('click', () => {
    const b = _detailList[_curIdx];
    if (!b) return;
    localStorage.removeItem('img_' + b.id);
    showDetail(_curIdx);
  });

  // Render start page
  renderHem();
});
