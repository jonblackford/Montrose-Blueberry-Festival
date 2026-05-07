const festivalStart = new Date('2026-08-09T08:00:00-04:00');

const featureCards = [
  {
    title: 'Blueberry Super Parade',
    date: 'Saturday, Aug. 15',
    tag: 'Signature Event',
    image: 'https://static.wixstatic.com/media/2a9074_78f4032a2c8f436fbccadee394066378~mv2.jpg/v1/fill/w_700,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2_jfif.jpg',
    body: 'A 100+ unit hometown parade with queens, bands, floats, Shriner units, and the 2026 Grand Marshal.'
  },
  {
    title: '5K/8K Run & Walk',
    date: 'Sunday, Aug. 16',
    tag: '50th Annual Race',
    image: 'https://static.wixstatic.com/media/2a9074_144d86ce8f684da08b524ac724b538cb~mv2.jpg/v1/fill/w_700,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/535422240_682432204854454_4138404284363273704_n.jpg',
    body: 'Start festival Sunday with packet pickup, the 8K, 5K run, 5K walk, and an awards ceremony.'
  },
  {
    title: 'Marketplace',
    date: 'Aug. 14–16',
    tag: 'Shop Local',
    image: 'https://static.wixstatic.com/media/2a9074_e83f360a12084f2b80d3ac625b56a426~mv2.jpg/v1/fill/w_700,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/532234300_1691096268222722_6604165325316588792_n.jpg',
    body: 'Browse flea market finds, crafters, home-based sellers, community booths, food, and festival goods.'
  },
  {
    title: 'Blueberry Pancake Breakfast',
    date: 'Saturday & Sunday',
    tag: 'Festival Favorite',
    image: 'https://static.wixstatic.com/media/2a9074_3dfde15c58474f668dc6db509c684c44~mv2.jpg/v1/crop/x_0,y_536,w_1536,h_977/fill/w_700,h_440,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/455948700_10160205065903479_4170783438393344849_n.jpg',
    body: 'All-you-can-eat blueberry pancakes and sausage in the Montrose School Cafeteria.'
  },
  {
    title: 'Blueberry Store',
    date: 'Aug. 14–16',
    tag: 'Pies & Souvenirs',
    image: 'https://static.wixstatic.com/media/2a9074_74ef8f2f9c214ea98de56d325e8791a2~mv2.jpg/v1/fill/w_700,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Blueberry%20Store%201.jpg',
    body: 'Pick up blueberry pies, baked goods, festival t-shirts, souvenirs, and discounted previous-year shirts.'
  },
  {
    title: 'Baby & Kids Contest',
    date: 'Wednesday, Aug. 12',
    tag: 'Family Event',
    image: 'https://static.wixstatic.com/media/2a9074_774922373bf840bd95a2b0380ceeffc3~mv2.jpg/v1/crop/x_0,y_75,w_2048,h_1385/fill/w_700,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/534720516_1166931742136166_5546414662711632365_n.jpg',
    body: 'Ages newborn to 14 are invited for an annual pageant-style festival tradition.'
  }
];

const schedule = [
  { dateKey: '2026-08-09', date: 'Sunday, August 9', time: '8:00 AM–3:00 PM', start: 480, title: '18th Annual Kick-Off Car Show', location: "Lion's Park, 204 Park Street", category: 'Cars', details: 'All makes and models welcome. Flea market, crafts, and food vendors.' },
  { dateKey: '2026-08-09', date: 'Sunday, August 9', time: '8:00 AM–Finish', start: 480, title: 'Co-ed Softball Tournament Finals', location: 'Seymour Road Softball Complex', category: 'Sports', details: 'Tournament play begins Saturday, August 8. Call Bill Persails at 810-602-9606 for registration information.' },
  { dateKey: '2026-08-11', date: 'Tuesday, August 11', time: '12:00 PM–3:00 PM', start: 720, title: 'Royal Tea Party', location: "Entertainment Tent in Lion's Park", category: 'Family', details: 'Meet the 2026 Blueberry Queen & Court and fairy tale princesses. Children $5; adults free.' },
  { dateKey: '2026-08-11', date: 'Tuesday, August 11', time: '5:00 PM–10:00 PM', start: 1020, title: 'Tuesday Night Entertainment Tent', location: 'Entertainment Tent', category: 'Entertainment', details: 'Family-friendly event suggestions are welcome.' },
  { dateKey: '2026-08-12', date: 'Wednesday, August 12', time: '12:00 PM–3:00 PM & 5:00 PM–10:00 PM', start: 720, title: 'Cornhole Tournament', location: 'Entertainment Tent', category: 'Sports', details: 'Fundraiser for Special Olympics. Senior Citizens & Unified Athletes from noon to 3 PM; open cornhole from 5 PM to 10 PM.' },
  { dateKey: '2026-08-12', date: 'Wednesday, August 12', time: '6:00 PM–9:00 PM', start: 1080, title: 'Baby & Kids Contest', location: 'Montrose Community Schools Auditorium', category: 'Family', details: 'Ages newborn to 14. Late registration 6–7 PM. Contest begins promptly at 7:15 PM.' },
  { dateKey: '2026-08-13', date: 'Thursday, August 13', time: '5:00 PM–9:00 PM', start: 1020, title: 'Early Set-Up Marketplace', location: "Lion's Park, 204 Park Street", category: 'Vendors', details: 'Approved vendors will be notified by mail and/or email.' },
  { dateKey: '2026-08-13', date: 'Thursday, August 13', time: '5:30 PM–10:00 PM', start: 1050, title: 'Craft Beer & Wine Tasting', location: 'Entertainment Tent', category: '21+', details: 'Sponsored by Riverside Market, Fabiano Brothers, and Great Lakes Wine & Spirits. Gate opens at 5 PM. Must be 21 to enter.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '12:00 PM–6:00 PM', start: 720, title: 'Entertainment Tent Opens', location: "Lion's Park, 204 Park Street", category: 'Entertainment', details: 'Karaoke all day long.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '12:00 PM–9:00 PM', start: 720, title: 'Marketplace: Flea Market & Crafts', location: "Lion's Park, 204 Park Street", category: 'Vendors', details: 'On-site registration and setup begins at 8 AM at the Lion’s Park Pavilion entrance on Park Drive.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '12:00 PM–7:00 PM', start: 720, title: 'Blueberry Store Opens', location: "Lion's Park, 204 Park Street", category: 'Food', details: 'Blueberry pies, baked goods, 2026 Blueberry t-shirts, souvenirs, and discounted previous-year t-shirts.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '12:00 PM–9:00 PM', start: 720, title: 'Food Booths Open', location: "Lion's Park, 204 Park Street", category: 'Food', details: 'Food booths and food trucks open for festival dining.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '12:00 PM–Close', start: 720, title: 'Anderson Midways', location: 'Hickory Street entrance behind Carter Elementary', category: 'Rides', details: 'Carnival entrance on Hickory Street. Wristband and ticket prices available during the festival.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '4:00 PM–7:00 PM', start: 960, title: "Shriner's Pig Roast", location: "Entertainment Tent in Lion's Park", category: 'Food', details: "Elf Khurafeh Shriner's Annual Pig Roast." },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '5:00 PM–9:00 PM', start: 1020, title: "Men's & Women's Slo-Pitch Softball", location: 'Seymour Road Softball Complex', category: 'Sports', details: 'Men’s tournament play begins. Women’s tournament begins Saturday. To register, call Billy P at 810-602-9606 or contact Ryan Cunningham via Facebook.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '6:00 PM–6:30 PM', start: 1080, title: "Kid's Parade", location: 'Hill-McCloy High School Circle Drive', category: 'Family', details: 'Theme to be announced. Lineup and judging from 5–6 PM.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '6:45 PM–7:30 PM', start: 1125, title: 'Blueberry Pie-Eating Contest', location: 'High School Athletic Complex', category: 'Family', details: 'Traditional pie-eating contest for all age groups immediately following the Kid’s Parade.' },
  { dateKey: '2026-08-14', date: 'Friday, August 14', time: '8:00 PM–1:00 AM', start: 1200, title: 'Friday Night Entertainment Tent', location: "Lion's Park, 204 Park Street", category: '21+', details: 'DJ Rob Mata and live music with Waylon Hanel, 8:30 PM–12:30 AM. Cover charge. Photo ID required. No one under 21 admitted.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '8:00 AM–12:00 PM', start: 480, title: 'Blueberry Pancake Breakfast', location: 'Montrose School Cafeteria, 302 Ray Street', category: 'Food', details: 'Blueberry pancake and sausage breakfast. $10 all ages. Kids under 5 eat free.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '8:00 AM–12:00 PM', start: 480, title: 'Blueberry Pie Sale', location: 'Montrose School Cafeteria, 302 Ray Street', category: 'Food', details: 'Fundraiser at the Pancake Breakfast. Regular or sugar-free pies available.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '8:00 AM–8:00 PM', start: 480, title: "Men's & Women's Slo-Pitch Softball", location: 'Seymour Road Softball Complex & Hickory Street Field', category: 'Sports', details: 'Men’s and women’s tournament play.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '9:00 AM–11:00 AM', start: 540, title: "Queen's Breakfast", location: "Montrose Schools Queen's Tent, 302 Ray Street", category: 'Royalty', details: 'Hosted by the 2026 Blueberry Queen and Court. All visiting royalty invited.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '9:00 AM–9:00 PM', start: 540, title: 'Marketplace: Flea Market & Crafts', location: "Lion's Park, 204 Park Street", category: 'Vendors', details: 'Weekend vendor setup at 8 AM.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '9:00 AM–7:00 PM', start: 540, title: 'Blueberry Store Opens', location: "Lion's Park, 204 Park Street", category: 'Food', details: 'Blueberry pies, baked goods, 2026 festival t-shirts, souvenirs, and discounted previous-year t-shirts.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '9:00 AM–9:00 PM', start: 540, title: 'Food Booths Open', location: "Lion's Park, 204 Park Street", category: 'Food', details: 'Food booths open at Lion’s Park.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '10:00 AM–6:00 PM', start: 600, title: 'Entertainment Tent Opens', location: "Lion's Park, 204 Park Street", category: 'Entertainment', details: 'Karaoke 12–2 PM, Frankentrost Band 2–4 PM, Kid’s Karaoke Contest 4–6 PM.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '12:00 PM–10:00 PM', start: 720, title: 'Anderson Midways', location: 'Hickory Street entrance behind Carter Elementary', category: 'Rides', details: 'Carnival entrance on Hickory Street. Wristband and ticket prices available during the festival.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '1:00 PM–3:00 PM', start: 780, title: 'Blueberry Festival Super Parade', location: 'Lineup: Corner of Hickory and North Genesee', category: 'Parade', details: 'Super Parade with the 2026 Grand Marshal and the 2026 Blueberry Queen & Court. Theme: RAM COUNTRY.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '2:00 PM–7:00 PM', start: 840, title: "Shriner's Pig Roast", location: "Entertainment Tent in Lion's Park", category: 'Food', details: "Elf Khurafeh Shriner's Annual Pig Roast." },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '4:00 PM', start: 960, title: 'Montrose Sports and Community Hall of Fame Induction Ceremony', location: 'Montrose Community Schools Auditorium, 302 Ray Street', category: 'Community', details: 'Community Service Award, Special Achievement Award, Individual Sports Award, and state champion marching bands recognition.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '4:00 PM–6:00 PM', start: 960, title: "Kid's Karaoke Contest", location: 'Entertainment Tent', category: 'Family', details: 'Prizes awarded for 1st, 2nd, and 3rd place. Age groups: 6–9, 10–12, 13–15, and 16–17.' },
  { dateKey: '2026-08-15', date: 'Saturday, August 15', time: '8:00 PM–1:00 AM', start: 1200, title: 'Saturday Night Entertainment Tent', location: "Lion's Park, 204 Park Street", category: '21+', details: 'DJ Rob Mata and live music with The John Vance Band, 8:30 PM–12:30 AM. Cover charge. Photo ID required. No one under 21 admitted.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '7:00 AM–11:00 AM', start: 420, title: 'Annual 5K/8K Run & Walk', location: 'Bob Hayes Athletic Complex, 301 Nanita Drive', category: 'Sports', details: '7 AM registration and packet pickup, 8 AM 8K run, 8:15 AM 5K run and walk, 10 AM awards ceremony.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '8:00 AM–12:00 PM', start: 480, title: 'Blueberry Pancake Breakfast', location: 'Montrose School Cafeteria, 302 Ray Street', category: 'Food', details: 'All-you-can-eat blueberry pancake and sausage breakfast. $10 all ages. Kids under 5 eat free.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '8:00 AM–12:00 PM', start: 480, title: 'Blueberry Pie Sale', location: 'Montrose School Cafeteria, 302 Ray Street', category: 'Food', details: 'Fundraiser at Pancake Breakfast. Regular or sugar-free pies available.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '8:00 AM–Finish', start: 480, title: "Men's & Women's Slo-Pitch Softball", location: 'Seymour Road Softball Complex', category: 'Sports', details: 'Tournament play and finals set for late afternoon.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '9:00 AM–4:00 PM', start: 540, title: 'Food Booths Open', location: "Lion's Park, 204 Park Street", category: 'Food', details: 'Food booths open.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '9:00 AM–5:00 PM', start: 540, title: 'Blueberry Store Opens', location: "Lion's Park, 204 Park Street", category: 'Food', details: 'Blueberry pies, baked goods, 2026 festival t-shirts, and souvenirs.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '9:00 AM–5:00 PM', start: 540, title: 'Marketplace: Flea Market & Crafts', location: "Lion's Park, 204 Park Street", category: 'Vendors', details: 'Some vendors open at 8 AM.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '12:00 PM–6:00 PM', start: 720, title: 'Entertainment Tent Opens', location: "Lion's Park, 204 Park Street", category: 'Entertainment', details: 'Shriner’s Pig Roast 12–5 PM, Karaoke Contest warm-up 12–3 PM, Adult Karaoke Contest 3–6 PM.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '12:00 PM–6:00 PM', start: 720, title: 'Anderson Midways', location: 'Hickory Street entrance behind Carter Elementary', category: 'Rides', details: 'Carnival entrance on Hickory Street. Wristband and ticket prices available during the festival.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '3:00 PM–6:00 PM', start: 900, title: 'Adult Karaoke Contest', location: 'Entertainment Tent', category: 'Entertainment', details: 'Adults 18 and older. $10 entry fee. Cash payout for 1st, 2nd, 3rd, and 4th place.' },
  { dateKey: '2026-08-16', date: 'Sunday, August 16', time: '3:00 PM–4:00 PM', start: 900, title: 'Chamber of Commerce Duck Race', location: 'Barber Park, Seymour Road', category: 'Community', details: '8th Annual Duck Race presented by the Montrose Chamber of Commerce. Ducks drop at 3 PM at Barber Park; livestream from the Entertainment Tent.' },
  { dateKey: '2026-10-03', date: 'Saturday, October 3', time: '8:00 AM–3:00 PM', start: 480, title: '17th Annual Golf Scramble', location: 'Briar Ridge Golf Course, 11099 Dodge Road, Montrose', category: 'Sports', details: 'Longest drive, closest to the pin, Vegas hole, 50-50, door prizes, free beverage stations, coffee and donuts, coney dogs at the turn, and catered dinner after golf.' }
];

const applicationGroups = [
  {
    title: 'Events',
    description: 'Race, pageant, softball, cornhole, and golf scramble information.',
    items: [
      ['2026 Cornhole Tournament', 'Coming soon'],
      ['2026 Road Race 5K/8K Run & Walk', 'Online + PDF'],
      ['2026 Queen Pageant', 'Deadline: 4/10/26'],
      ['2026 Softball Tournament Info', 'Download'],
      ['Golf Scramble', '10/3/26']
    ]
  },
  {
    title: 'Contests',
    description: 'Family-friendly contests and special event applications.',
    items: [
      ['Baby & Kids Contest', '8/12/26'],
      ['Classic Car Show', '8/9/26'],
      ['Karaoke Contest', '8/16/26']
    ]
  },
  {
    title: 'Vendors',
    description: 'Marketplace, camping, car show vendors, food vendors, and parade entry information.',
    items: [
      ['Camping Application', 'Download'],
      ['Marketplace Flea Market', 'Download'],
      ['Marketplace Arts & Crafts', 'Download'],
      ['Car Show Vendor', 'Download'],
      ['Food Vendor Information', 'Email required'],
      ['Super Parade', '8/15/26']
    ]
  },
  {
    title: 'Other Forms',
    description: 'Sponsor, donation, scholarship, and schedule resources.',
    items: [
      ['Parade Line-up', 'Coming soon'],
      ['5K/8K Road Race Sponsor', 'Download'],
      ['Golf Scramble Sponsor', 'Download'],
      ['Classic Car Show Sponsor', 'Download'],
      ['Scholarship Request', 'Due May 1'],
      ['Donation Request', 'Due Dec. 31, 2026'],
      ['Sponsorship Opportunities', 'Download']
    ]
  }
];

const marketplaceVendors = [
  'Adjibogoun, Pierre #12', 'Abell, Shelby #100', 'Agopian, Ena #SE3A', 'Aidif, Jim #93,94', 'Atkinson, Joani #18', 'Auciello, Peggy #9,10', 'B & B Handcrafted Jewelry #15', 'Baase, Gary #26', 'Baker, Misty #5', 'Bearup, Tanya #51', 'Benmark, Dawn #86,86B,87', 'Block, Paul #42', 'Bowyer, Marvin #SE2', 'Brown, David #70', 'Brown, Windi #44,44A,45A,45B', 'Carey, Lavinia #72B', 'Coats, Brandi #92', 'Cook, Dennis #34', 'Corbin, Gregory #43B', 'Davis, Lori #4', 'Dembinski, Amanda #52', 'Dick, James #22,23', 'Dortch, Brittany & Brandon #1', 'Dowland, Kaylee #17', 'Drew, Carrie #13', 'Dula, Rochelle-Caricatures #C', 'Duncan, Kristin #49', 'Dusenberry, Jessica #65', 'Emmendorfer, Chris #55', 'Evans, Chris #16', 'Ewell, Linda #24', 'Ewing, Devon #76', 'Frazier, Danae #59', 'Funch, Norm #48', 'Gaines, Chris #63', 'Gatica, Valeria #36,37', 'GCAC Fundraiser #SE4A', 'GCAC “Fill the Trailer” #SE4B', 'GCRP-Tammy Parillo #66', 'Graves, Vicenta #8', 'Hawk, Samantha #38', 'Hernandez, Justo #46', 'Hile, Bruce #56,57,58', 'Hill, Darrell #2', 'Holden, Terry #27', 'Homezone Windows & Roofing #SE3B', 'Hoover-Smith, Rachel #14', 'Hualpa, Ana #39', 'Irby, Tracy #80', 'Jewel, Steven #91', 'Johnson, Victoria #50', 'Jones, Charlotte #20,21', 'Jones, Cheryl #25', 'Kadlec, Patricia #71,71B', 'Klein, Amanda #11', 'Kochom, Patricia #3', 'Konrad, Nate #79', 'Kovach, June #69', 'Lane, Emma Jean #47', 'Lema, Luz #H', 'Leonard, Sadie #SE6', 'Ludens, Sarah #28,29', 'Lynch, Lucille #75', 'Marsh, Teresa #SE3', 'Matzke, Elaine #95', 'Mauer, Eric #D', 'McNight, Kelly #89', 'Meme’s Country Lights #SE5', 'Messenger, Mary #90', 'MHST #E', 'Moats, Jane #41', 'Montrose Chamber of Commerce #85', 'Montrose Football Players #61', 'Montrose Ramchargers Wrestling #96', 'Mt. Sinai Lutheran Church #62', 'Paws To Remember #SE3C', 'Persall, Cheryl #30', 'Powell, Griffin #68', 'Priebe, Deb #54', 'Raymond, Jamie #7', 'Robinson, Courtenay #33', 'Rodriguez, Felicia #53', 'Rose, Tristen #40', 'Rousseau, Leslie & Don #60', 'Schaub, Holly #73', 'Schramm, Jill #97', 'Shirey, Kevin #88', 'Sigro, Rosano #84', 'Smith, Clifford #72', 'Smith, James #35', 'St.Charles, Sharon #78', 'Taylor, Beth #74', 'Tessman, Janet #1A', 'Thick, Steven #77', 'Todd, Sharon #98', 'Town, Rodney #99', 'Unleashed Dog Training #SE4', 'Warby, Christina #67', 'Whitcomb, Jessica #31,32', 'Wiles, Rannea #43', 'Wright, Thomas #44,44A,45A,45B', 'Yanson, Craig #SE1', 'Zhang, Mai #81,82,83'
];

const foodVendors = [
  'Oasis Shrine Club @ Car Show', 'Buzy Dogs @ Car Show', 'Kona Coffee @ Car Show', 'Youth Baseball Concessions — Co-ed Softball', 'Oasis Shrine Club — Pig Roast', 'Montrose Boy Scouts — Misc. Menu', 'Maria’s Tacos', 'BB Brats', 'Main Squeeze Lemonade', 'Main Squeeze French Fries', 'Kona Ice', 'Sugar Kanes — Elephant Ears', 'Gramps Kettle Corn', 'Kona Coffee', 'Buzy Dogs @ Family Trivia Night', 'Buzy Dogs @ Cornhole Tourney', 'Buzy Dogs @ Beer & Wine Tasting', 'Youth Baseball Concessions — Men’s & Women’s Softball Tournaments', '#SE 1 Craig Yanson', '#SE 2 Marvin Bowyer', '#SE 3 Marsh, Teresa', '#SE 3A Agopian, Ena', '#SE 3B Homezone Windows & Roofing', '#SE 3C Paws To Remember', '#SE 4 Unleashed Dog Training', '#SE 4A GCAC Fundraiser', '#SE 4B GCAC “Fill the Trailer” Fundraiser', '#SE 5 Meme’s Country Lights', '#SE 6 Sadie Leonard'
];

const sponsorGroups = [
  { title: 'Golf Scramble', names: ['ChoiceOne Bank', 'Fabiano Brothers', 'SMART', 'Riverside Market', 'Ed Birkmeier Well Drilling', '4 Wheel Buy', 'Animal Health Care of Chesaning', 'Golden Comb Hair Design', 'ELGA Credit Union', 'Iverson’s Lumber', 'O’Guinn Family Funeral Homes', 'Jaime Abbott, DDS', 'Mel Ervin Ford', 'D’s Party Store', 'Murphy Electrical Services, Inc.', 'Garber Chevrolet', 'Briar Ridge Golf Course', 'Haven Country AFC'] },
  { title: 'Road Race', names: ['ChoiceOne Bank', 'Crimi Photography', 'Riverside Market', 'Cummings Enterprises', 'Paws To Remember', 'C.F. Legal', 'Montrose Pub'] },
  { title: 'Parade & Car Show', names: ['ELGA Credit Union', 'APM Mosquito Control', 'Ronnie’s Collision & Towing', 'Ed Birkmeier Well Drilling', 'John’s Used Tires', 'Discount Mufflers & Brakes', '4-Wheel Buy', 'Stone Yard Landscape Center', 'Totten Disposal', 'Auto Tech Specialists', 'Montrose Pub', 'Giesken’s Cabinetry & Flooring'] },
  { title: 'Additional Support', names: ['Wolgast Restoration', 'Riverside Market', 'Birkmeier Well Drilling', 'McDonald’s of Montrose', 'Subway', 'Fabiano Brothers', 'Great Lakes Wine & Spirits', 'Paws To Remember — Clio', 'HardWired Arcade — Flushing', 'Unleashed Dog Training — Chesaning'] }
];

const newsItems = [
  { title: '50th Annual Festival of Races', body: 'Join the annual 5K/8K Run & Walk on Sunday, August 16, with onsite registration beginning at 7 AM.' },
  { title: 'Golf Scramble Returns for the 17th Year', body: 'Get your team together for the October 3 golf scramble at Briar Ridge Golf Course.' },
  { title: '18th Annual Classic Car Show', body: 'The Car Show returns Sunday, August 9, in Lion’s Park with dash plaques and awards.' },
  { title: 'Frozen Blueberry 5K Returns in 2027', body: 'Online signup is expected through RunSignup by October 1, 2026.' }
];

function escapeHTML(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function renderFeatureCards() {
  const grid = document.querySelector('#feature-grid');
  if (!grid) return;
  grid.innerHTML = featureCards.map(card => `
    <article class="feature-card reveal">
      <img src="${card.image}" alt="${escapeHTML(card.title)}" loading="lazy" />
      <div class="feature-card-content">
        <div class="badge-row">
          <span class="badge">${escapeHTML(card.tag)}</span>
          <span class="badge">${escapeHTML(card.date)}</span>
        </div>
        <h3>${escapeHTML(card.title)}</h3>
        <p>${escapeHTML(card.body)}</p>
      </div>
    </article>
  `).join('');
}

function populateScheduleFilters() {
  const dayFilter = document.querySelector('#day-filter');
  const categoryFilter = document.querySelector('#category-filter');
  const days = [...new Map(schedule.map(item => [item.dateKey, item.date])).entries()];
  const categories = [...new Set(schedule.map(item => item.category))].sort();

  dayFilter.innerHTML = '<option value="all">All days</option>' + days
    .map(([key, label]) => `<option value="${key}">${escapeHTML(label)}</option>`).join('');
  categoryFilter.innerHTML = '<option value="all">All categories</option>' + categories
    .map(category => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join('');
}

function renderSchedule() {
  const list = document.querySelector('#schedule-list');
  const resultCount = document.querySelector('#result-count');
  const dayValue = document.querySelector('#day-filter').value;
  const categoryValue = document.querySelector('#category-filter').value;
  const query = document.querySelector('#schedule-search').value.trim().toLowerCase();

  const filtered = schedule
    .filter(item => dayValue === 'all' || item.dateKey === dayValue)
    .filter(item => categoryValue === 'all' || item.category === categoryValue)
    .filter(item => {
      const haystack = `${item.title} ${item.location} ${item.details} ${item.category} ${item.date} ${item.time}`.toLowerCase();
      return !query || haystack.includes(query);
    })
    .sort((a, b) => a.dateKey.localeCompare(b.dateKey) || a.start - b.start || a.title.localeCompare(b.title));

  resultCount.textContent = filtered.length === schedule.length
    ? `Showing all ${schedule.length} events`
    : `Showing ${filtered.length} of ${schedule.length} events`;

  if (!filtered.length) {
    list.innerHTML = '<div class="empty-state">No events match those filters. Try clearing the search or choosing a different day.</div>';
    return;
  }

  let currentDate = '';
  list.innerHTML = filtered.map(item => {
    const heading = item.dateKey !== currentDate ? `<div class="day-heading">${escapeHTML(item.date)}</div>` : '';
    currentDate = item.dateKey;
    return `
      ${heading}
      <article class="schedule-card reveal visible">
        <div class="time">${escapeHTML(item.time)}<div class="badge">${escapeHTML(item.category)}</div></div>
        <div>
          <h3>${escapeHTML(item.title)}</h3>
          <p class="location">${escapeHTML(item.location)}</p>
          <p>${escapeHTML(item.details)}</p>
        </div>
      </article>
    `;
  }).join('');
}

function renderApplications() {
  const board = document.querySelector('#application-board');
  if (!board) return;
  board.innerHTML = applicationGroups.map(group => `
    <article class="application-category">
      <h3>${escapeHTML(group.title)}</h3>
      <p>${escapeHTML(group.description)}</p>
      <div class="application-list">
        ${group.items.map(([name, note]) => `
          <a class="application-item" href="https://www.montroseblueberryfestival.net/our-applications" target="_blank" rel="noopener">
            <span>${escapeHTML(name)}</span>
            <small>${escapeHTML(note)}</small>
          </a>
        `).join('')}
      </div>
    </article>
  `).join('');
}

function renderVendorTags(items, target) {
  target.innerHTML = items.map(item => `<span class="tag">${escapeHTML(item)}</span>`).join('');
}

function renderVendors() {
  const marketplaceTarget = document.querySelector('#marketplace-vendors');
  const foodTarget = document.querySelector('#food-vendors');
  const search = document.querySelector('#vendor-search');
  const count = document.querySelector('#vendor-count');
  if (!marketplaceTarget || !foodTarget || !search || !count) return;

  const query = search.value.trim().toLowerCase();
  const filteredMarket = marketplaceVendors.filter(item => item.toLowerCase().includes(query));
  const filteredFood = foodVendors.filter(item => item.toLowerCase().includes(query));
  renderVendorTags(filteredMarket, marketplaceTarget);
  renderVendorTags(filteredFood, foodTarget);
  count.textContent = `${filteredMarket.length + filteredFood.length} shown`;

  if (!filteredMarket.length) marketplaceTarget.innerHTML = '<div class="empty-state">No marketplace vendors found.</div>';
  if (!filteredFood.length) foodTarget.innerHTML = '<div class="empty-state">No food or special vendors found.</div>';
}

function renderSponsors() {
  const grid = document.querySelector('#sponsor-grid');
  if (!grid) return;
  grid.innerHTML = sponsorGroups.map(group => `
    <article class="sponsor-column">
      <h3>${escapeHTML(group.title)}</h3>
      <ul>
        ${group.names.map(name => `<li>${escapeHTML(name)}</li>`).join('')}
      </ul>
    </article>
  `).join('');
}

function renderNews() {
  const list = document.querySelector('#news-list');
  if (!list) return;
  list.innerHTML = newsItems.map(item => `
    <article class="news-card">
      <span class="badge">Announcement</span>
      <h3>${escapeHTML(item.title)}</h3>
      <p>${escapeHTML(item.body)}</p>
    </article>
  `).join('');
}

function updateCountdown() {
  const target = document.querySelector('#countdown');
  if (!target) return;
  const now = new Date();
  const diff = festivalStart - now;
  if (diff <= 0) {
    target.textContent = 'The festival is here!';
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  target.textContent = `${days} days, ${hours} hrs, ${minutes} min`;
}

function setupNav() {
  const button = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#nav-menu');
  if (!button || !menu) return;

  button.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      button.setAttribute('aria-expanded', 'false');
    });
  });
}

function setupReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

function init() {
  document.querySelector('#year').textContent = new Date().getFullYear();
  renderFeatureCards();
  populateScheduleFilters();
  renderSchedule();
  renderApplications();
  renderVendors();
  renderSponsors();
  renderNews();
  setupNav();
  setupReveal();
  updateCountdown();
  setInterval(updateCountdown, 60000);

  document.querySelector('#schedule-search').addEventListener('input', renderSchedule);
  document.querySelector('#day-filter').addEventListener('change', renderSchedule);
  document.querySelector('#category-filter').addEventListener('change', renderSchedule);
  document.querySelector('#reset-filters').addEventListener('click', () => {
    document.querySelector('#schedule-search').value = '';
    document.querySelector('#day-filter').value = 'all';
    document.querySelector('#category-filter').value = 'all';
    renderSchedule();
  });
  document.querySelector('#vendor-search').addEventListener('input', renderVendors);
}

document.addEventListener('DOMContentLoaded', init);
