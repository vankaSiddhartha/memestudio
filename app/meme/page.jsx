"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { PlaceholdersAndVanishInput } from '../components/ui/placeholders-and-vanish-input'
const { GoogleGenerativeAI } = require("@google/generative-ai");

const MemeGenrator = () => {
   const a = [
            {
                "id": "181913649",
                "name": "Drake Hotline Bling",
                "url": "https://i.imgflip.com/30b1gx.jpg",
                "width": 1200,
                "height": 1200,
                "box_count": 2,
                "captions": 1250000
            },
            {
                "id": "87743020",
                "name": "Two Buttons",
                "url": "https://i.imgflip.com/1g8my4.jpg",
                "width": 600,
                "height": 908,
                "box_count": 3,
                "captions": 1000500
            },
            {
                "id": "112126428",
                "name": "Distracted Boyfriend",
                "url": "https://i.imgflip.com/1ur9b0.jpg",
                "width": 1200,
                "height": 800,
                "box_count": 3,
                "captions": 1027750
            },
            {
                "id": "217743513",
                "name": "UNO Draw 25 Cards",
                "url": "https://i.imgflip.com/3lmzyx.jpg",
                "width": 500,
                "height": 494,
                "box_count": 2,
                "captions": 556000
            },
            {
                "id": "131087935",
                "name": "Running Away Balloon",
                "url": "https://i.imgflip.com/261o3j.jpg",
                "width": 761,
                "height": 1024,
                "box_count": 5,
                "captions": 532250
            },
            {
                "id": "124822590",
                "name": "Left Exit 12 Off Ramp",
                "url": "https://i.imgflip.com/22bdq6.jpg",
                "width": 804,
                "height": 767,
                "box_count": 3,
                "captions": 635250
            },
            {
                "id": "222403160",
                "name": "Bernie I Am Once Again Asking For Your Support",
                "url": "https://i.imgflip.com/3oevdk.jpg",
                "width": 750,
                "height": 750,
                "box_count": 2,
                "captions": 280500
            },
            {
                "id": "4087833",
                "name": "Waiting Skeleton",
                "url": "https://i.imgflip.com/2fm6x.jpg",
                "width": 298,
                "height": 403,
                "box_count": 2,
                "captions": 426500
            },
            {
                "id": "131940431",
                "name": "Gru's Plan",
                "url": "https://i.imgflip.com/26jxvz.jpg",
                "width": 700,
                "height": 449,
                "box_count": 4,
                "captions": 306250
            },
            {
                "id": "129242436",
                "name": "Change My Mind",
                "url": "https://i.imgflip.com/24y43o.jpg",
                "width": 482,
                "height": 361,
                "box_count": 2,
                "captions": 615500
            },
            {
                "id": "97984",
                "name": "Disaster Girl",
                "url": "https://i.imgflip.com/23ls.jpg",
                "width": 500,
                "height": 375,
                "box_count": 2,
                "captions": 342500
            },
            {
                "id": "135256802",
                "name": "Epic Handshake",
                "url": "https://i.imgflip.com/28j0te.jpg",
                "width": 900,
                "height": 645,
                "box_count": 3,
                "captions": 212000
            },
            {
                "id": "438680",
                "name": "Batman Slapping Robin",
                "url": "https://i.imgflip.com/9ehk.jpg",
                "width": 400,
                "height": 387,
                "box_count": 2,
                "captions": 610750
            },
            {
                "id": "80707627",
                "name": "Sad Pablo Escobar",
                "url": "https://i.imgflip.com/1c1uej.jpg",
                "width": 720,
                "height": 709,
                "box_count": 3,
                "captions": 199000
            },
            {
                "id": "252600902",
                "name": "Always Has Been",
                "url": "https://i.imgflip.com/46e43q.png",
                "width": 960,
                "height": 540,
                "box_count": 2,
                "captions": 182750
            },
            {
                "id": "91538330",
                "name": "X, X Everywhere",
                "url": "https://i.imgflip.com/1ihzfe.jpg",
                "width": 2118,
                "height": 1440,
                "box_count": 2,
                "captions": 355250
            },
            {
                "id": "247375501",
                "name": "Buff Doge vs. Cheems",
                "url": "https://i.imgflip.com/43a45p.png",
                "width": 937,
                "height": 720,
                "box_count": 4,
                "captions": 330500
            },
            {
                "id": "322841258",
                "name": "Anakin Padme 4 Panel",
                "url": "https://i.imgflip.com/5c7lwq.png",
                "width": 768,
                "height": 768,
                "box_count": 3,
                "captions": 106000
            },
            {
                "id": "188390779",
                "name": "Woman Yelling At Cat",
                "url": "https://i.imgflip.com/345v97.jpg",
                "width": 680,
                "height": 438,
                "box_count": 2,
                "captions": 353000
            },
            {
                "id": "178591752",
                "name": "Tuxedo Winnie The Pooh",
                "url": "https://i.imgflip.com/2ybua0.png",
                "width": 800,
                "height": 582,
                "box_count": 2,
                "captions": 242500
            },
            {
                "id": "309868304",
                "name": "Trade Offer",
                "url": "https://i.imgflip.com/54hjww.jpg",
                "width": 607,
                "height": 794,
                "box_count": 3,
                "captions": 98750
            },
            {
                "id": "102156234",
                "name": "Mocking Spongebob",
                "url": "https://i.imgflip.com/1otk96.jpg",
                "width": 502,
                "height": 353,
                "box_count": 2,
                "captions": 415500
            },
            {
                "id": "110163934",
                "name": "I Bet He's Thinking About Other Women",
                "url": "https://i.imgflip.com/1tl71a.jpg",
                "width": 1654,
                "height": 930,
                "box_count": 2,
                "captions": 144500
            },
            {
                "id": "93895088",
                "name": "Expanding Brain",
                "url": "https://i.imgflip.com/1jwhww.jpg",
                "width": 857,
                "height": 1202,
                "box_count": 4,
                "captions": 436500
            },
            {
                "id": "148909805",
                "name": "Monkey Puppet",
                "url": "https://i.imgflip.com/2gnnjh.jpg",
                "width": 923,
                "height": 768,
                "box_count": 2,
                "captions": 197750
            },
            {
                "id": "161865971",
                "name": "Marked Safe From",
                "url": "https://i.imgflip.com/2odckz.jpg",
                "width": 618,
                "height": 499,
                "box_count": 2,
                "captions": 171750
            },
            {
                "id": "79132341",
                "name": "Bike Fall",
                "url": "https://i.imgflip.com/1b42wl.jpg",
                "width": 500,
                "height": 680,
                "box_count": 3,
                "captions": 118000
            },
            {
                "id": "61544",
                "name": "Success Kid",
                "url": "https://i.imgflip.com/1bhk.jpg",
                "width": 500,
                "height": 500,
                "box_count": 2,
                "captions": 136000
            },
            {
                "id": "180190441",
                "name": "They're The Same Picture",
                "url": "https://i.imgflip.com/2za3u1.jpg",
                "width": 1363,
                "height": 1524,
                "box_count": 3,
                "captions": 156250
            },
            {
                "id": "61579",
                "name": "One Does Not Simply",
                "url": "https://i.imgflip.com/1bij.jpg",
                "width": 568,
                "height": 335,
                "box_count": 2,
                "captions": 450500
            },
            {
                "id": "1035805",
                "name": "Boardroom Meeting Suggestion",
                "url": "https://i.imgflip.com/m78d.jpg",
                "width": 500,
                "height": 649,
                "box_count": 4,
                "captions": 383250
            },
            {
                "id": "101470",
                "name": "Ancient Aliens",
                "url": "https://i.imgflip.com/26am.jpg",
                "width": 500,
                "height": 437,
                "box_count": 2,
                "captions": 357000
            },
            {
                "id": "195515965",
                "name": "Clown Applying Makeup",
                "url": "https://i.imgflip.com/38el31.jpg",
                "width": 750,
                "height": 798,
                "box_count": 4,
                "captions": 109500
            },
            {
                "id": "3218037",
                "name": "This Is Where I'd Put My Trophy If I Had One",
                "url": "https://i.imgflip.com/1wz1x.jpg",
                "width": 300,
                "height": 418,
                "box_count": 2,
                "captions": 134500
            },
            {
                "id": "370867422",
                "name": "Megamind peeking",
                "url": "https://i.imgflip.com/64sz4u.png",
                "width": 540,
                "height": 540,
                "box_count": 2,
                "captions": 79000
            },
            {
                "id": "55311130",
                "name": "This Is Fine",
                "url": "https://i.imgflip.com/wxica.jpg",
                "width": 580,
                "height": 282,
                "box_count": 2,
                "captions": 128500
            },
            {
                "id": "27813981",
                "name": "Hide the Pain Harold",
                "url": "https://i.imgflip.com/gk5el.jpg",
                "width": 480,
                "height": 601,
                "box_count": 2,
                "captions": 217250
            },
            {
                "id": "124055727",
                "name": "Y'all Got Any More Of That",
                "url": "https://i.imgflip.com/21uy0f.jpg",
                "width": 600,
                "height": 471,
                "box_count": 2,
                "captions": 198000
            },
            {
                "id": "119139145",
                "name": "Blank Nut Button",
                "url": "https://i.imgflip.com/1yxkcp.jpg",
                "width": 600,
                "height": 446,
                "box_count": 2,
                "captions": 299250
            },
            {
                "id": "100777631",
                "name": "Is This A Pigeon",
                "url": "https://i.imgflip.com/1o00in.jpg",
                "width": 1587,
                "height": 1425,
                "box_count": 3,
                "captions": 211000
            },
            {
                "id": "224015000",
                "name": "Bernie Sanders Once Again Asking",
                "url": "https://i.imgflip.com/3pdf2w.png",
                "width": 926,
                "height": 688,
                "box_count": 2,
                "captions": 44750
            },
            {
                "id": "252758727",
                "name": "Mother Ignoring Kid Drowning In A Pool",
                "url": "https://i.imgflip.com/46hhvr.jpg",
                "width": 782,
                "height": 1032,
                "box_count": 4,
                "captions": 50750
            },
            {
                "id": "28251713",
                "name": "Oprah You Get A",
                "url": "https://i.imgflip.com/gtj5t.jpg",
                "width": 620,
                "height": 465,
                "box_count": 2,
                "captions": 192250
            },
            {
                "id": "316466202",
                "name": "where monkey",
                "url": "https://i.imgflip.com/58eyvu.png",
                "width": 1113,
                "height": 629,
                "box_count": 2,
                "captions": 55000
            },
            {
                "id": "226297822",
                "name": "Panik Kalm Panik",
                "url": "https://i.imgflip.com/3qqcim.png",
                "width": 640,
                "height": 881,
                "box_count": 3,
                "captions": 203750
            },
            {
                "id": "166969924",
                "name": "Flex Tape",
                "url": "https://i.imgflip.com/2reqtg.png",
                "width": 510,
                "height": 572,
                "box_count": 3,
                "captions": 64500
            },
            {
                "id": "259237855",
                "name": "Laughing Leo",
                "url": "https://i.imgflip.com/4acd7j.png",
                "width": 470,
                "height": 470,
                "box_count": 2,
                "captions": 93750
            },
            {
                "id": "114585149",
                "name": "Inhaling Seagull",
                "url": "https://i.imgflip.com/1w7ygt.jpg",
                "width": 1269,
                "height": 2825,
                "box_count": 4,
                "captions": 231750
            },
            {
                "id": "135678846",
                "name": "Who Killed Hannibal",
                "url": "https://i.imgflip.com/28s2gu.jpg",
                "width": 1280,
                "height": 1440,
                "box_count": 3,
                "captions": 130000
            },
            {
                "id": "177682295",
                "name": "You Guys are Getting Paid",
                "url": "https://i.imgflip.com/2xscjb.png",
                "width": 520,
                "height": 358,
                "box_count": 2,
                "captions": 51000
            },
            {
                "id": "89370399",
                "name": "Roll Safe Think About It",
                "url": "https://i.imgflip.com/1h7in3.jpg",
                "width": 702,
                "height": 395,
                "box_count": 2,
                "captions": 314750
            },
            {
                "id": "101956210",
                "name": "Whisper and Goosebumps",
                "url": "https://i.imgflip.com/1op9wy.jpg",
                "width": 600,
                "height": 600,
                "box_count": 2,
                "captions": 47250
            },
            {
                "id": "427308417",
                "name": "0 days without (Lenny, Simpsons)",
                "url": "https://i.imgflip.com/72epa9.png",
                "width": 619,
                "height": 403,
                "box_count": 2,
                "captions": 21000
            },
            {
                "id": "61556",
                "name": "Grandma Finds The Internet",
                "url": "https://i.imgflip.com/1bhw.jpg",
                "width": 640,
                "height": 480,
                "box_count": 2,
                "captions": 156500
            },
            {
                "id": "247113703",
                "name": "A train hitting a school bus",
                "url": "https://i.imgflip.com/434i5j.png",
                "width": 920,
                "height": 1086,
                "box_count": 2,
                "captions": 54250
            },
            {
                "id": "84341851",
                "name": "Evil Kermit",
                "url": "https://i.imgflip.com/1e7ql7.jpg",
                "width": 700,
                "height": 325,
                "box_count": 2,
                "captions": 143500
            },
            {
                "id": "284929871",
                "name": "They don't know",
                "url": "https://i.imgflip.com/4pn1an.png",
                "width": 671,
                "height": 673,
                "box_count": 2,
                "captions": 38000
            },
            {
                "id": "99683372",
                "name": "Sleeping Shaq",
                "url": "https://i.imgflip.com/1nck6k.jpg",
                "width": 640,
                "height": 631,
                "box_count": 2,
                "captions": 95500
            },
            {
                "id": "21735",
                "name": "The Rock Driving",
                "url": "https://i.imgflip.com/grr.jpg",
                "width": 568,
                "height": 700,
                "box_count": 2,
                "captions": 212500
            },
            {
                "id": "119215120",
                "name": "Types of Headaches meme",
                "url": "https://i.imgflip.com/1yz6z4.jpg",
                "width": 483,
                "height": 497,
                "box_count": 2,
                "captions": 56250
            },
            {
                "id": "155067746",
                "name": "Surprised Pikachu",
                "url": "https://i.imgflip.com/2kbn1e.jpg",
                "width": 1893,
                "height": 1893,
                "box_count": 3,
                "captions": 231250
            },
            {
                "id": "5496396",
                "name": "Leonardo Dicaprio Cheers",
                "url": "https://i.imgflip.com/39t1o.jpg",
                "width": 600,
                "height": 400,
                "box_count": 2,
                "captions": 226000
            },
            {
                "id": "67452763",
                "name": "Squidward window",
                "url": "https://i.imgflip.com/145qvv.jpg",
                "width": 598,
                "height": 420,
                "box_count": 2,
                "captions": 44500
            },
            {
                "id": "221578498",
                "name": "Grant Gustin over grave",
                "url": "https://i.imgflip.com/3nx72a.png",
                "width": 500,
                "height": 475,
                "box_count": 2,
                "captions": 46500
            },
            {
                "id": "101288",
                "name": "Third World Skeptical Kid",
                "url": "https://i.imgflip.com/265k.jpg",
                "width": 426,
                "height": 426,
                "box_count": 2,
                "captions": 177250
            },
            {
                "id": "123999232",
                "name": "The Scroll Of Truth",
                "url": "https://i.imgflip.com/21tqf4.jpg",
                "width": 1280,
                "height": 1236,
                "box_count": 2,
                "captions": 217250
            },
            {
                "id": "134797956",
                "name": "American Chopper Argument",
                "url": "https://i.imgflip.com/2896ro.jpg",
                "width": 640,
                "height": 1800,
                "box_count": 5,
                "captions": 174000
            },
            {
                "id": "61520",
                "name": "Futurama Fry",
                "url": "https://i.imgflip.com/1bgw.jpg",
                "width": 552,
                "height": 414,
                "box_count": 2,
                "captions": 298250
            },
            {
                "id": "360597639",
                "name": "whe i'm in a competition and my opponent is",
                "url": "https://i.imgflip.com/5youx3.jpg",
                "width": 916,
                "height": 900,
                "box_count": 2,
                "captions": 20750
            },
            {
                "id": "224514655",
                "name": "Anime Girl Hiding from Terminator",
                "url": "https://i.imgflip.com/3po4m7.jpg",
                "width": 581,
                "height": 633,
                "box_count": 2,
                "captions": 44500
            },
            {
                "id": "50421420",
                "name": "Disappointed Black Guy",
                "url": "https://i.imgflip.com/u0pf0.jpg",
                "width": 1172,
                "height": 756,
                "box_count": 2,
                "captions": 58500
            },
            {
                "id": "171305372",
                "name": "Soldier protecting sleeping child",
                "url": "https://i.imgflip.com/2tzo2k.jpg",
                "width": 540,
                "height": 440,
                "box_count": 3,
                "captions": 33500
            },
            {
                "id": "234202281",
                "name": "AJ Styles & Undertaker",
                "url": "https://i.imgflip.com/3vfrmx.jpg",
                "width": 933,
                "height": 525,
                "box_count": 2,
                "captions": 32250
            },
            {
                "id": "267889046",
                "name": "bell curve",
                "url": "https://i.imgflip.com/4fhsie.png",
                "width": 675,
                "height": 499,
                "box_count": 4,
                "captions": 21500
            },
            {
                "id": "216523697",
                "name": "All My Homies Hate",
                "url": "https://i.imgflip.com/3kwur5.jpg",
                "width": 680,
                "height": 615,
                "box_count": 2,
                "captions": 48000
            },
            {
                "id": "91998305",
                "name": "Drake Blank",
                "url": "https://i.imgflip.com/1iruch.jpg",
                "width": 717,
                "height": 717,
                "box_count": 2,
                "captions": 58000
            },
            {
                "id": "77045868",
                "name": "Pawn Stars Best I Can Do",
                "url": "https://i.imgflip.com/19vcz0.jpg",
                "width": 624,
                "height": 352,
                "box_count": 2,
                "captions": 39250
            },
            {
                "id": "6235864",
                "name": "Finding Neverland",
                "url": "https://i.imgflip.com/3pnmg.jpg",
                "width": 423,
                "height": 600,
                "box_count": 3,
                "captions": 157000
            },
            {
                "id": "371619279",
                "name": "Megamind no bitches",
                "url": "https://i.imgflip.com/65939r.jpg",
                "width": 674,
                "height": 734,
                "box_count": 2,
                "captions": 24000
            },
            {
                "id": "14371066",
                "name": "Star Wars Yoda",
                "url": "https://i.imgflip.com/8k0sa.jpg",
                "width": 620,
                "height": 714,
                "box_count": 2,
                "captions": 129250
            },
            {
                "id": "29617627",
                "name": "Look At Me",
                "url": "https://i.imgflip.com/hmt3v.jpg",
                "width": 300,
                "height": 300,
                "box_count": 2,
                "captions": 58500
            },
            {
                "id": "110133729",
                "name": "spiderman pointing at spiderman",
                "url": "https://i.imgflip.com/1tkjq9.jpg",
                "width": 800,
                "height": 450,
                "box_count": 2,
                "captions": 53000
            },
            {
                "id": "342785297",
                "name": "Gus Fring we are not the same",
                "url": "https://i.imgflip.com/5o32tt.png",
                "width": 700,
                "height": 1000,
                "box_count": 3,
                "captions": 33250
            },
            {
                "id": "137501417",
                "name": "Friendship ended",
                "url": "https://i.imgflip.com/29v4rt.jpg",
                "width": 800,
                "height": 600,
                "box_count": 2,
                "captions": 29750
            },
            {
                "id": "91545132",
                "name": "Trump Bill Signing",
                "url": "https://i.imgflip.com/1ii4oc.jpg",
                "width": 1866,
                "height": 1529,
                "box_count": 2,
                "captions": 143250
            },
            {
                "id": "196652226",
                "name": "Spongebob Ight Imma Head Out",
                "url": "https://i.imgflip.com/392xtu.jpg",
                "width": 822,
                "height": 960,
                "box_count": 2,
                "captions": 122250
            },
            {
                "id": "61532",
                "name": "The Most Interesting Man In The World",
                "url": "https://i.imgflip.com/1bh8.jpg",
                "width": 550,
                "height": 690,
                "box_count": 2,
                "captions": 214750
            },
            {
                "id": "175540452",
                "name": "Unsettled Tom",
                "url": "https://i.imgflip.com/2wifvo.jpg",
                "width": 680,
                "height": 550,
                "box_count": 2,
                "captions": 152750
            },
            {
                "id": "142009471",
                "name": "is this butterfly",
                "url": "https://i.imgflip.com/2cjr7j.jpg",
                "width": 1587,
                "height": 1425,
                "box_count": 3,
                "captions": 27000
            },
            {
                "id": "187102311",
                "name": "Three-headed Dragon",
                "url": "https://i.imgflip.com/33e92f.jpg",
                "width": 680,
                "height": 544,
                "box_count": 4,
                "captions": 34750
            },
            {
                "id": "162372564",
                "name": "Domino Effect",
                "url": "https://i.imgflip.com/2oo7h0.jpg",
                "width": 820,
                "height": 565,
                "box_count": 2,
                "captions": 28750
            },
            {
                "id": "206151308",
                "name": "Spider Man Triple",
                "url": "https://i.imgflip.com/3eqjd8.jpg",
                "width": 600,
                "height": 551,
                "box_count": 3,
                "captions": 25500
            },
            {
                "id": "177984372",
                "name": "What Gives People Feelings of Power",
                "url": "https://i.imgflip.com/2xytmc.jpg",
                "width": 960,
                "height": 851,
                "box_count": 2,
                "captions": 36250
            },
            {
                "id": "145139900",
                "name": "Scooby doo mask reveal",
                "url": "https://i.imgflip.com/2eeunw.jpg",
                "width": 720,
                "height": 960,
                "box_count": 4,
                "captions": 23750
            },
            {
                "id": "478588645",
                "name": "Borat 2 Tonight Queen??",
                "url": "https://i.imgflip.com/7wxtd1.png",
                "width": 845,
                "height": 674,
                "box_count": 3,
                "captions": 9250
            },
            {
                "id": "20007896",
                "name": "c'mon do something",
                "url": "https://i.imgflip.com/bwu6w.jpg",
                "width": 448,
                "height": 519,
                "box_count": 2,
                "captions": 28500
            },
            {
                "id": "249257686",
                "name": "Bugs bunny communist",
                "url": "https://i.imgflip.com/44eggm.png",
                "width": 460,
                "height": 284,
                "box_count": 2,
                "captions": 41500
            },
            {
                "id": "92084495",
                "name": "Charlie Conspiracy (Always Sunny in Philidelphia)",
                "url": "https://i.imgflip.com/1itoun.jpg",
                "width": 1024,
                "height": 768,
                "box_count": 2,
                "captions": 29500
            },
            {
                "id": "208915813",
                "name": "George Bush 9/11",
                "url": "https://i.imgflip.com/3gdsh1.jpg",
                "width": 300,
                "height": 180,
                "box_count": 2,
                "captions": 12000
            },
            {
                "id": "72525473",
                "name": "say the line bart! simpsons",
                "url": "https://i.imgflip.com/176h0h.jpg",
                "width": 395,
                "height": 650,
                "box_count": 3,
                "captions": 24000
            }
        ]
  const [product,setProduct] = useState('')
  const [promptO,setPrompt0] = useState('')
  const [memeUrl,setImgUrl] = useState('')
  const [post,setPost] = useState('')
  const [loading,setLoading] = useState(false)
    const genAI = new GoogleGenerativeAI("AIzaSyCYH7ac4GvZ0Qd9Vf6GqOITZkaYTd6U62M");
    useEffect(()=>{
     const getProduct = localStorage.getItem('about')
     if(getProduct){
      setProduct(getProduct)
      localStorage.removeItem('about')
     }
    },[])
    const placeholders = [
   

   
  ];

  const handleChange = async(e) => {
    console.log(e.target.value);
    setPrompt0(e.target.value)
  

  };
  const onSubmit = async() => {
    setLoading(true)
    console.log("prouct: "+product)
 //   e.preventDefault();
 const randomNumber = Math.floor(Math.random() * 100);
 const memeName = a[randomNumber].name
    console.log("submitted");
const prompt = `
Given the meme template "${memeName}" related to the topic "${promptO}", create two engaging and relevant captions for a meme. Follow these guidelines:

1. Caption 1:
   - Start with a single hashtag (#) followed by a concise, catchy caption directly tied to the product description.
   - Aim for a caption that piques interest, highlights a key feature or benefit, or showcases the product's value proposition.
   

2. Caption 2:
   - Start with a double hashtag (##) followed by a caption that complements the first one.
   - This caption should provide an additional humorous, insightful, or relatable angle related to "${promptO}".
   - Aim for a caption that resonates with the target audience, reinforces the meme's theme, or adds an unexpected twist.
   - Keep it concise, but feel free to use slightly longer captions if needed.
3. Caption for the post:
   - Start with three hashtags (###) followed by a caption that introduces the meme and encourages engagement.
   - This caption should provide context, highlight the relevance of the meme to the product or topic, and prompt the audience to interact or share their thoughts.
   - Aim for a caption that is engaging, informative, and memorable.

Format your response as:
# Caption1 text here
## Caption2 text here

Example response:
# When your product description is on point
## But the meme template steals the show
### #MemeMonday 😂 Can you relate to this hilarious meme about our top-rated air purifier? Share your thoughts and tag a friend who needs a good laugh! 🌬️

`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    console.log(text);
    // Original string with sections starting with '#' and '##'

// Define regular expressions to match sections starting with '#' and '##'
const regexCap1 = /#\s*([^\n]*)/;
const regexCap2 = /##\s*([^\n]*)/;
const regexCap3 = /###\s*([^\n]*)/;

// Extract the parts using the regular expressions
const cap1Match = text.match(regexCap1);
const cap2Match = text.match(regexCap2);
const cap3Math = text.match(regexCap3)

// Store the matched parts in constants
const cap1 = cap1Match ? cap1Match[1] : '';
const cap2 = cap2Match ? cap2Match[1] : '';
const postCaption = cap3Math ? cap3Math[1]:'';
setPost(postCaption)
const capId = a[randomNumber].id
const params = {
			template_id: capId,
			text0: cap1,
			text1: cap2,
			username: 'MuhammadSalik',
			password: 'salik@@123'
		};

		const queryString = Object.keys(params)
			.map(key => key + '=' + encodeURIComponent(params[key]))
			.join('&');

		const url = `https://api.imgflip.com/caption_image?${queryString}`;

		// Generate the meme
		fetch(url)
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					const imgUrl = data.data.url;
					// memeImg.src = imgUrl;
					// downloadLink.href = imgUrl;
					// downloadLink.style.display = 'block';
            setImgUrl(imgUrl)
            setLoading(false)
           console.log(imgUrl)
				} else {
					alert('Failed to generate meme');
                    setLoading(false)
				}
			});
		
	} 


  
        const logoStyle = {
    background: 'linear-gradient(to right, #ff2d55, #ff5d2d, #ffb92e)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '1.125em', // Adjust the font size as needed
    fontWeight: 'normal', // Adjust the font weight as needed
    display: 'inline-block',
  };
   const handleDownload = async () => {
      fetch(memeUrl)
        .then(response => response.blob())
        .then(blob => {
          const blobUrl = URL.createObjectURL(blob);

          // Create a link element
          const link = document.createElement('a');
          link.href = blobUrl;
          link.download = 'meme.jpg'; // Set the desired file name
          
          // Append the link to the body (it's required for Firefox)
          document.body.appendChild(link);

          // Programmatically click the link to trigger the download
          link.click();

          // Clean up and remove the link
          link.remove();

          // Revoke the object URL to free up memory
          URL.revokeObjectURL(blobUrl);
        })
        .catch(error => console.error('Error downloading the image:', error));
  };

  return (
    <div className='h-full w-full text-white bg-black flex justify-center items-center'>

        {/* <button onClick={click} className='bg-slate-400 rounded-lg h-12 w-32 text-black '>genrate meme</button> */}
         <div className=" h-full w-full bg-slate-950">
      <div className="  bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
     <div className='flex justify-center items-center h-full w-full mt-3'>
            <Link
      href="https://buymeacoffee.com/vanka_siddhartha"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded transition-colors duration-200"
    >
      
      🚀 Sponsor This Project
    </Link>
     </div>
     <div className='flex justify-center items-center h-full w-full'>
        <div className=" h-[20rem] w-full flex flex-col justify-center  items-center px-4">
      <h2 className="mb-1 sm:mb-2 text-xl text-center sm:text-5xl dark:text-white text-white">
        Free AI tool
      </h2>
      <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-white">
        Turn Laughter into Leads
      </h2>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
     </div>
     {loading&&(
        <div className='flex justify-center items-center'>
            <div className="flex items-center space-x-2">
  <div className="animate-pulse rounded-full bg-gray-500 h-12 w-12 rounded-full"></div>
  <div className="space-y-2">
    <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[200px]"> </div>
    <div className="animate-pulse rounded-md bg-gray-500 h-4 w-[170px]"> </div>
  </div>
</div>
    
        </div>
     )}

    {memeUrl?(
        <>
        <div className='flex justify-center items-center m-5'>
         <button onClick = {handleDownload} className="p-[3px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
    Download
  </div>
</button>
        </div>
    <div  className='flex justify-center items-center'>
          <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="flex items-center p-4">
        <img
          className="w-10 h-10 rounded-full"
          src={'/drake.jpg'}
          alt={"Drake"}
          width={40}
          height={40}
        />
        <div className="ml-4">
          <div  className="font-bold text-black">{"User Name"}</div>
          <div className="text-sm text-gray-500">{"@user123"}</div>
        </div>
      </div>
      <img
        className="w-full"
        src={memeUrl}
        alt={"d"}
        width={500}
        height={500}
        layout="responsive"
        objectFit="cover"
        
      />
      <div className="p-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 016.364 0l.318.318.318-.318a4.5 4.5 0 116.364 6.364l-6.682 6.682a.75.75 0 01-1.06 0L4.318 12.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
          <span className="ml-2 font-semibold text-black">{'100k'} likes</span>
        </div>
        <p className="mt-2 text-sm text-black">

          {post}
        </p>
        <p className="mt-2 text-xs text-gray-500">{"19:21"}</p>
      </div>
    </div>
      </div>
      </>
      ):(
      <div className='h-screen'></div>
      )}
      </div>
      
    </div>
    </div>
  )
}

export default MemeGenrator