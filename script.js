let first = document.querySelector('.text1');
let second = document.querySelector('.text2');
let third = document.querySelector('.text3');

first.addEventListener('click', change1);
second.addEventListener('click', change2);
third.addEventListener('click', change3);

function change1() {
    let pic = document.querySelector('img');
    let text = document.querySelector('.container__text');
    let video = document.querySelector('.video');
    pic.src = "https://kinopoisk-ru.clstorage.net/BMF167099/80bf93yX7xU/Hjwg0TUrZGdNk93rnB4iu4fs7BlmmYQ0Ens5qzYfFj18udguDzrMvSLmCH0JcOCG8jwPUgvg5d4YIx99IczvRIq4ocbn-aez2gFOat_KYumUO-xdNMuRpRU_7v3h1No3cDOEp4DwxLY6t5htDyf3UCI4WoYadHcOXT-QLKkHNZod8uLWt73mpQVG1uZdk6Iz3m1v17ZdgTCF8XMq_l4eP_w7ziBAMQDw83QdLFjufxKnetAGnPbsS176HXrsj3ER3_poF_p8Z61BhNPrlVsq_RrlI1ox0MF1hb25IbUW1TPx_UeqAfcIeLQ3HClWYbDeI7nVzd76ogZSexZ_bEI9UxRyZVR18S6nxwIb7xKUa3FXrKkW95mG-Yrw_6V32dzyNDmJ5sD3wHr5dlnrGGb80WX02Mha8CfPHvqWf6EAshAUe-vcuDMvqs8EEC1UnSl1UmThEP3TyfuCs7EqeJ6RfL15SeSGuMF-_THVZp1udNpqv1XCUDooBpr10nltDvFaHTWmk_O0r-KBwlki3pdv-RUkaZ2xUIPwirx_K3_QXjI18Eugxn4DfjywniGRoTXR476VSlCwpE7b_Nv2Isi6G14849-39azjS8uV79RXrXsd5GgR-ZtH_Mmxc2z-W9Z-PbmBIIm4RbZ8vByk2ux42Ss6EYybviRJGXibfSFJdZvXOqtXPTWqLAiK1aAaUaO3GiEoXbGaTvqMMvgl8JhWvDg6QWUEOY5xO7vc6d4od5Ng9VLPm7eqzxl2FP1rjzhVHrntVfX0ZaLAAd4lnVuoPh5iZdQ1E8h8Qvw_4D1SkD67sYHgBbfOPvh71-MVq3YeIn7aCBRwqMJbe5z5ok-515v94tT5Miejz0ySIZ3e5juebKldeBGFPUC1-SL0n9k0fn6Arky_wPd_O1zgkek2E2R6Ek9Q-y8Im3rav2jH8dJcuuTRu_bqL8rC2SrX3qX-Wmcvn_-VBHcPdTsk-5AYcXF6R-iB-Ue9_L5bpJ6g_55tsVnPWPUkQVV4nXrgBboUVTWqHPR1LCNPAhPqWhxqfJIn6x57VkW0QbX96ftZnzew9gHojXENPXT42-0VLb9WIv9aBpv7pAba-5q5rY_wXNu465S68uGoQIDd41IZL_HUJCUc-ZlAvcx0MyS3n5F1sLOKZ4I2T7I1u1bpWGG5EiIyXw8Q9emA1TUS-GpEupzT-20ZcPmv6gBMn62cUue83OztkfTcyXyMeT4utFqQvbS7huhOOMa1PPMd6lDjeRBl9hrJ2DMkARi-Xb6lgfeSX3LlVLA1JO3NhJdnHJNgcVlj61I4FYx1TbqzqzHeGft7MQGhhP7AeT142Cva4zNab3yZh5SzpUvathm4K4c52xXyJJE88yOjzU2QLZcTaPkeZClYNxVH8oryOWy31tY5PbiOqsb-SzG6e9Us1CT2Xiy2HEJe-6HCnLbe9qBI8FIceCye-X5rJoGB3alTHGE4XSsvVbUUBvNPM3IifFkYf3vwwOTG-sB4sfaTJd8hPx0hN9pFHLgoTt06HrehxX5Xmnhj1701o-1Di9fuFN_nfd4sqdV0G4m8Bbh1oDjT0fN4toFhRntDPvJz1WXU47-W5X2bh9V1JU8TtVG4a4dwnZQxZNf0NG7ng0yfpx1ab3gZYiRZ9lILckT4NaR2W929PTVOJA1xRLXzdB1s12H-GyI0nY6aMmkG1b7a8qsINhhXOGqY_f0u5wEBG2JWVOB7nuWmlbZUiXxAffcrd9tX8vS-QWVK9434O7McYlEo_Fbr_lUHk3ZqB5H0Ez2vD7hUkrGpH7Jzq62FTFNhXZtm_xhjIZa4WUNzCDy_7rgTUD_-90DtxrgJ9XHwlu6Qa7cZqvcSj1P1LEBRONY-qo_3Eda8LpE8PKdozY1T61EZJ7DSZCfRd54AdI84equ4UNS9dXuJIsn4hL8zv5Qu2uR7WWp50Mfb-m4O0vxVsajM9dpduGXT875up4uJ1uFeUq37kK1mHvnbDPAI_HMu9hFe9TE2wGzIece9MPjZ5ZAjeBciMBWH3PJmyJE4lnjkxPRcXj8kn7_zbGoIyxrg1JyvsFolblHzGA2_ALQ1oH9b0XK280ssCPOP-bh41yhc532bKrfTBBvyIAyddNe44Q92HZeyqhA3fWvvgQze4tyXbflWZyTedJ5P9wB98qq_lpP2fv2IoQb8AT19Px7lnSD302r50cjWc2gP1PUfPGcI95gWMCKW9ftv7czOXuFVEme_n-VjUTYSgbqCcLIp8RGQ9nM3gi5Evg35e3HZqt-kvxYiP9QJHnolgJCynL9twDmYVzej3PU0I27Mxltg2p2oN1Tn4F0_EsW9zLp5ZPUTlHz8MogkwvMG_Dj4m6RWp7-a7fYdxtR0ZAqUvNL_okL3FJgwoRH9dm-rSEqWqlHb6DfYai_Xs1wMssF9fu3501Qz9fDGrMZyxH06OVGmkab5UKy_VEoX9eBG1jtfNmXNPJef8ClQ-rkmKwqL2ijcnK6_mG_o3fYRjbiHuLuo9J6funD-z2lFe8Xw-zKcpBjm9xCjtJgB37AugNq6WnAlwH_Y2rRhnH2zam7MRthqlRUtvRQjLFEzFIl6SvmxbrPZlPR99YKnxPZIsPr-FCFZLjkVoLJTRxL-KIgdPNM9pY5w2NByIxH1dSpnBcjQadma67xeLqZaf1oJ9MB78GmxVZg-sLdIZozzRny8OFVs32s0EmixHMnYM6ALHjtedutOcl2YPSjcuPWmb8UFESbdUqV8EWLsX7ZahLgMNfAtuJbR9HP4TSAJOc-yfb_Q4x9oOB5kPBOJ3TJgwRk73r0lT3zfk38gEPfyLq-Mgh8qlp2hud_uZhJ2XYB9CLNw6TPf23o0MsolB_AIMjg_nCtZ6TZXoXYYTxw-6cxdORr64MB8nZ_6oBD6_GIlg80ZKVyUrrVYpS-Q-ZZJ_cC_8KQ1Vpz8_b7JaUF8BjF0OZ4sUi492-D4UsfXNiYEkQ";
    video.innerHTML= '<iframe width="560" height="315" src="https://www.youtube.com/embed/ww0eiQ49V2o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    text.innerHTML = "<h2>???????????????? ?????????? ????????????</h2><p>???????????????? ????????????????</p>";
}

function change2() {
    // let a = second.value;
    console.log(second.value);
}

function change3() {
    let a = "????????????????!"
    third.value = a;
    console.log(a);
}