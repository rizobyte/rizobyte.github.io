//база

const ailoop = [

    {
        img: 'files/extra/newtabl1.png',
        prompt: ' (masterpiece:1.2), (best quality:1.2), perfect eyes, perfect face, 1girl, <lora:suchka:0.6>, suchka, monochrome, half body, bunny suit',
        nprompt: ' ((poorly drawn face)), (worst quality, low quality:1.4), bad face, normal quality, low res, extra fingers, mutated fingers, extra hands, extra legs, text, nickname, blur',
        sampler: ' DPM++ SDE Karras',
        seed: ' 2360959446',
        steps: ' 30',
        cfgscale: ' 7',
        res: ' 600x800',
        lora: ' <a href="https://civitai.com/models/94490/katya-tiny-bunny" class="prompt-class" target="_blank">Katya(tiny bunny)</a>',
    },
    {
        img: 'files/extra/newtabl.png',
        prompt: ' 4k, best quality, ultra high res, (photorealistic:1.4), ultra high res, ultra detailed, proffesional lighting, 1girl, bangs, bare_shoulders, blonde_hair, blue_eyes, blush, breasts, bush, cowboy_shot, crop_top, crown, earrings, gloves, grass, highleg, jewelry, leaf, long_hair, looking_at_viewer, medium_breasts, midriff, nature, navel, outdoors, panties, parted_lips, pink_bikini, pink_legwear, pink_panties, plant, princess_peach, sleeveless, solo, standing, stomach, tree, underwear, white_gloves',
        nprompt: ' ((poorly drawn face)), (worst quality, low quality:1.4), normal quality, low res, extra fingers, mutated fingers, extra hands, extra legs, text, nickname',
        sampler: ' DPM++ SDE Karras',
        seed: ' 1115527187',
        steps: ' 30',
        cfgscale: ' 7',
        res: ' 512x768',
        lora: ' ---',
    },
    {
        img: 'files/extra/tabl.jpg',
        prompt: ' (8k, raw photo), (proffesional lighting), (masterpeace:1.2), best quality, uhd, soft lighting, high quality, girl, blonde hair, bob cut, detailed eyes, half body, red dress, sky background, half body, portrait',
        nprompt: ' ((poorly drawn face)), (worst quality, low quality:1.4), normal quality, low res, extra fingers, mutated fingers, text, nickname',
        sampler: ' DPM++ SDE Karras',
        seed: ' 920888916',
        steps: ' 30',
        cfgscale: ' 7',
        res: ' 512x768',
        lora: ' ---',
    },
    {
        img: 'files/extra/shema.jpg'
    }
]

let index = 0;



