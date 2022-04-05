# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Plant.delete_all
User.delete_all
Cart.delete_all
CartItem.delete_all

plants = {
    'Snake Plant' => {
        :common_name => 'Snake Plant',
        :botanical_name => 'Sansevieria spp.',
        :light_level => [1,2,3,4],
        :flower_color => 'White',
        :water_needs => 1,
        :description => 'Sansevieria are evergreen perennials that can grow anywhere from eight inches to 12 feet high. Their sword-like leaves are approximately two feet long. The foliage is stiff, broad, and upright, in a dark green color variegated with white and yellow striping.',
        :special_notes => 'Known for its air-cleaning qualities, great for a bedroom plant because it produces oxygen even during the night.',
      },
      'Pothos' => { 
        :common_name => 'Pothos',
        :botanical_name => 'Epipremnum aureum',
        :light_level => [2,3],
        :flower_color => '',
        :water_needs => 1,
        :description => 'Pothos (also called Devil’s Ivy) is a tropical vine with shiny, heart-shaped leaves that often have gold, white, or yellow variegation.',
        :special_notes => 'Native to tropical French Polynesian islands in the South Pacific, pothos can now be found throughout the world as an attractive, easy-to-care-for houseplant. Its vining nature makes it a great choice for use in hanging baskets, draped across shelves, or climbing up a wall. Pothos is mildly toxic so use caution around curious pets/children.',
      },
      
      'ZZ Plant' => {
        :common_name => 'ZZ plant',
        :botanical_name => 'Zamioculcas zamiifolia',
        :light_level => [1,2,3,4],
        :flower_color => '',
        :water_needs => 1,
        :description => 'The ZZ plant grows similar to tree plants or palms and has stems with many leaves growing from these stems. The leaves are a fleshy type which are only a couple of inches in length and an inch or so wide.',
        :special_notes => 'The ZZ plant is an easy to grow and care for indoor plant that displays small glossy leaves on stems which can grow up to 3 ft long indoors.',
      },
      
      'Aloe Vera' => {
        :common_name => 'Aloe Vera',
        :botanical_name => 'Aloe barbadensis miller',
        :light_level => [1],
        :flower_color => 'Yellow to Red',
        :water_needs => 1,
        :description => 'Succulents are plants that are thickened, fleshy and engorged, allowing the plant to retain water in arid areas.  Aloe Vera is a succulent that can be grown indoors as a house plant, or in temperate zones as an outdoor perennial.',
        :special_notes => 'The gel in the leaves is known for its medicinal properties.',
      },
      
      'Philodendron Green' => {
        :common_name => 'Philodendron Green',
        :botanical_name => 'Philodendron hederaceum',
        :light_level => [2,3,4],
        :flower_color => 'White',
        :water_needs => 2,
        :description => 'The philodendron imperial green is an upright-growing variety with a striking appearance. It gets its name from its smooth, glossy green leaves. The large leaves fan out in all directions making it an attractive foliage plant for your home.',
        :special_notes => 'Philodendrons come in many shapes, colors, and sizes!',
      },
      
      'Peace Lily' => {
        :common_name => 'Peace Lily',
        :botanical_name => 'Spathiphyllum',
        :light_level => [2,3,4],
        :flower_color => 'White',
        :water_needs => '3',
        :description => 'Peace lilies are sturdy, easy to grow plants with glossy, dark green oval leaves that narrow to a point. The leaves rise directly from the soil. These plants also periodically produce lightly fragrant white flowers that resemble calla lilies. The long-lasting, pure white flowers will turn a pale green as they age.',
        :special_notes => 'The beautiful peace lily plant is all about its name. It symbolizes peace, prosperity, tranquillity, solitude and purification. The white flower produced by this plant is a symbol of the white flag, which is internationally understood as a symbol of truce or ceasefire.',
      },
      
      'Rubber Tree' => {
        :common_name => 'Rubber Tree',
        :botanical_name => 'Hevea brasiliensis',
        :light_level => [2,3],
        :flower_color => 'Red',
        :water_needs => '2',
        :description => "The rubber tree is one of the low-maintenance lucky indoor plants that can thrive a bit of neglect. However, keep in mind that it doesn't like change, so pick a bright spot for your rubber tree and let it do its thing. Famous for its large glossy leaves, the rubber tree prefers bright, indirect light.",
        :special_notes => 'The round leaves of the rubber plant are symbolic of wealth and financial growth in Vastu. They can bring you a lot of commercial success and money when placed in the correct zone of your house.',
      },
      
      'Chinese Evergreen' => {
        :common_name => 'Chinese Evergreen',
        :botanical_name => 'Aglaonema commutatum',
        :light_level => [1,2,3],
        :flower_color => 'White',
        :water_needs => 2,
        :description => 'The Chinese evergreens, of the genus Aglaonema, are fleshy tropical Asian herbs of slow growth, with leathery leaves often bearing silvery or colourful patterns; they are durable and are tolerant of indoor conditions.',
        :special_notes => 'Its longevity, ease of growth and striking appearance are thought beneficial to the well being and financial success of the residents who grow it.',
      },
      
      "Bird's Nest Fern" => {
        :common_name => "Bird's Nest Fern",
        :botanical_name => 'Asplenium nidus',
        :light_level => [2,3],
        :flower_color => '',
        :water_needs => '2',
        :description => "The Bird's Nest Fern has large simple fronds that are tropical-like in that they resemble banana leaves. Their fronds are light green, often crinkled or wavy, and rise from a central rosette.",
        :special_notes => "Bird's nest fern has wide, shiny leaves (fronds) that slowly uncurl from the center giving it a nest-like appearance — and its name.",
      },
      
      'Monstera Deliciosa' => {
        :common_name => 'Monstera',
        :botanical_name => 'Monstera deliciosa',
        :light_level => [2],
        :flower_color => 'White',
        :water_needs => 2,
        :description => "
      Monstera are species of evergreen tropical vines and shrubs that are native to Central America. They are famous for their natural leaf-holes, which has led to the rise of their nickname, Swiss Cheese Plant. The Monstera's leaf-holes are called fenestrations and are theorized to maximize sun fleck capture on the forest floor by increasing the spread of the leaf while decreasing the mass of leaf cells to support.",
        :special_notes => "Two different species of Monstera are cultivated as houseplants - Monstera deliciosa and Monstera adansonii. Monstera adansonii is distinguished from M. deliciosa by having longer, tapering leaves, as well as having completely enclosed leaf holes. Monstera deliciosa leaf holes eventually grow towards the edge and open up as they mature.",
      },
      
      'Dracaena' => {
        :common_name => 'Dracaena',
        :botanical_name => 'Dracaena marginata',
        :light_level => [2,3],
        :flower_color => 'White',
        :water_needs => 2,
        :description => "Dracaena marginata, more commonly known as a dragon tree, is an attractive plant with green sword-like, red-edged leaves. Native to Madagascar, the eye-catching spiky tree is known as a great entry plant for household gardeners—it's easy to care for, drought-tolerant, and nearly indestructible.",
        :special_notes => "Plants remove these pollutants from the air, and one of the most effective among them is dracaena. It can reduce indoor air pollutants like formaldehyde, benzene, trichloroethylene, and carbon dioxide.",
      },
      
      'Spider Plant' => {
        :common_name => 'Spider Plant',
        :botanical_name => 'Chlorophytum comosum',
        :light_level => [2,3],
        :flower_color => 'White',
        :water_needs => '2',
        :description => 'Chlorophytum comosum, usually called spider plant but also known as spider ivy, ribbon plant, and hen and chickens is a species of evergreen perennial flowering plant. It is native to tropical and southern Africa, but has become naturalized in other parts of the world, including western Australia.',
        :special_notes => 'Spider plants are great indoor air cleaners, and 15 spider plants would purify the air of an average size house.',
      },
      
      'Fiddle Leaf Fig' => {
        :common_name => 'Fiddle Leaf Fig',
        :botanical_name => 'Ficus lyrata',
        :light_level => [1,2],
        :flower_color => '',
        :water_needs => 2,
        :description => 'Ficus lyrata, commonly known as the fiddle-leaf fig, is a species of flowering plant in the mulberry and fig family Moraceae. It is native to western Africa, from Cameroon west to Sierra Leone, where it grows in lowland tropical rainforest. It can grow up to 12–15 m tall.',
        :special_notes => 'The fiddle leaf can make for a wonderful house plant, adding a bold statement or brightening up any dull corner in your home. Take note though that the fiddle leaf fig may be finicky and take some time to adapt when placed in a new environment.',
      },
      
      'Cactus' => {
        :common_name => 'Cactus',
        :botanical_name => 'Varies',
        :light_level => '1,2',
        :flower_color => 'Varies',
        :water_needs => 1,
        :description => 'Although cacti are known for their love of sunlight, many thrive as indoor plants. Add one to your windowsill or living space for some unique decor. Indoor cacti tend to need less light and are smaller in size, making them the perfect houseplant.',
        :special_notes => 'Cacti come in all shapes and sizes, there is a cactus that will fit whatever space you are trying to fill.  It is worth noting that not all cacti have needles.',
      },
      
      'Calathea' => {
        :common_name => 'Calathea',
        :botanical_name => 'Marantaceae',
        :light_level => [2,3],
        :flower_color => '',
        :water_needs => '2',
        :description => 'Calathea is a genus of flowering plants belonging to the family Marantaceae. They are commonly called calatheas or prayer plants. About 200 species formerly assigned to Calathea are now in the genus Goeppertia. Calathea currently contains around 60 species.',
        :special_notes => 'The Calathea plant is a popular plant used for indoor office decoration purposes. It is often used in homes and businesses as well. It is a type of plant that prefers indirect lighting, which means makes it perfect for indoor usage and office buildings. Calathea plants are popular for indoor purposes because they are generally easy to care for and they look great, offering bright green plants to liven up indoor spaces.',
      },
      
      'Laceleaf' => {
        :common_name => 'Laceleaf',
        :botanical_name => 'Anthurium',
        :light_level => [2,3],
        :flower_color => '',
        :water_needs => '2',
        :description => 'Anthurium is a genus of about 1,000 species of flowering plants, the largest genus of the arum family, Araceae. General common names include anthurium, tailflower, flamingo flower, and laceleaf.',
        :special_notes => 'Due to their open, heart-shape and long-lasting characteristics they are popular as hostess or hospitality gifts.',
      },
      
      'Croton' => {
        :common_name => 'Croton',
        :botanical_name => 'Codiaeum variegatum',
        :light_level => [1,2],
        :flower_color => '',
        :water_needs => 2,
        :description => 'Crotons come in a wide variety of leaf shapes and colors. Leaves can be short, long, twisted, thin, thick, and several of these combined. Colors range from green, variegated, yellow, red, orange, cream, pink, and black to a combination of all these.',
        :special_notes => 'At one time, the oil from one species of croton, Croton tiglium, was used medicinally as a purgative. These days, croton plants are used primarily for their aesthetic value. Adding a croton plant brings a burst of color to an office or home.',
      },
      
      'Pilea' => {
        :common_name => 'Pilea',
        :botanical_name => 'Pilea Peperomioides',
        :light_level => [2],
        :flower_color => '',
        :water_needs => 2,
        :description => 'Pilea peperomioides is an erect, evergreen perennial plant, with shiny, dark green, circular leaves up to 10 cm (4 in) in diameter on long petioles. The leaves are described as peltate—circular, with the petiole attached near the centre. The plant is completely hairless.',
        :special_notes => 'As legend has it, in 1946 the Norwegian missionary Agnar Espergren brought the plant back home from China and shared cuttings among his friends.
      
      Read more at Gardening Know How: Chinese Money Plant Info: Learn How To Grow A Pilea Plant https://www.gardeningknowhow.com/houseplants/pilea-plants/pilea-chinese-money-plant-info.htm',
      },
      
      'Jade Plant' => {
        :common_name => 'Jade Plant',
        :botanical_name => 'Crassula ovata',
        :light_level => [1,2],
        :flower_color => '',
        :water_needs => 1,
        :description => "A branched, succulent shrub commonly grown indoors, jade plant features thick, woody stems and glossy green, fleshy, oblong leaves up to two inches long. Happily, this low-maintenance plant lives a long time, taking on the appearance of a miniature tree as it ages. And it's very easy to propagate.",
        :special_notes => "Jade plant is named after jade-like, dark green color of the leaves.",
      },
      
      'African Violet' => {
        :common_name => 'African Violet',
        :botanical_name => 'Streptocarpus',
        :light_level => [2,3],
        :flower_color => '',
        :water_needs => 2,
        :description => 'African violets are excellent indoor flowering plants. Available in many flower colors, they produce flowers year-round under the proper growing conditions.',
        :special_notes => 'While you can find them thriving on countertops worldwide, African violets are teetering on extinction in the wild.',
      },
      
      'Guiana Chestnut' => {
        :common_name => 'Guiana Chestnut',
        :botanical_name => 'Pachira aquatica',
        :light_level => [2],
        :flower_color => '',
        :water_needs => 2,
        :description => 'Its showy flowers, among the largest tree flowers in the world, have long, narrow petals that open like a banana peel and reveal hairlike yellowish orange stamens. The greenish-yellow or cream-colored, hermaphroditic and very large, short and thick-stalked flowers with double perianth resemble shaving brushes long stamens.',
        :special_notes => 'They are symbolically associated with good financial fortune and are typically seen in businesses, sometimes with red ribbons or other ornamentation attached.',
      },
      
      'Yucca' => {
        :common_name => 'Yucca',
        :botanical_name => 'Asparagaceae',
        :light_level => [2],
        :flower_color => '',
        :water_needs => 1,
        :description => "Yucca plants are striking and low maintenance—a perfect combo for ideal houseplants. We're talking about years of easy greenery: slow-growing, drought-tolerant, pest-resistant. And because they're crazy easy to propagate, you can share the love with your friends.",
        :special_notes => 'There are nearly 50 known species of Yucca plants, making the genus highly diverse. Each species has unique characteristics including the fruit that it bears, its flower and leaf characteristics, and even what type of climate it thrives best in.',
      },
      
      'Peperomia' => {
        :common_name => 'Peperomia',
        :botanical_name => 'Peperomia',
        :light_level => [2,3,4],
        :flower_color => '',
        :water_needs => 1,
        :description => 'Peperomia are wonderful plants to grow indoors as they have so many features that make them ideal houseplants. With a great variety of beautiful foliage, and tolerating a wide range of growing conditions, they are ideal for anyone looking to expand their collection of houseplants.',
        :special_notes => 'Peperomia belongs to a wonderful genus of tropical plants native to Mexico, South America, and the Caribbean.',
      },
      
      'Burros-Tail' => {
        :common_name => "Burro's Tail",
        :botanical_name => 'Sedum morganianum',
        :light_level => [1,2],
        :flower_color => '',
        :water_needs => 1,
        :description => "The donkey tail or burro's tail, is a species of flowering plant in the family Crassulaceae, native to southern Mexico. It is a succulent perennial producing trailing stems up to 60 cm long, with fleshy blue-green leaves and terminal pink to red flowers in summer.",
        :special_notes => "Burro's tail cactus is not technically a cactus but a succulent. Although all cacti are succulents, not all succulents are cactus.",
      },
      
      'Parlor Palm' => {
        :common_name => 'Parlor Palm',
        :botanical_name => 'Chamaedorea elegans',
        :light_level => [3,4],
        :flower_color => '',
        :water_needs => 1,
        :description => 'The parlor palm has long been used as an indoor plant. This lovely plant with deep green foliage was first discovered in Central America and brought back to the United States where it immediately became a popular indoor palm. It grows in attractive clumps with light-textured foliage cloaking thin trunks.',
        :special_notes => 'The parlor palm is a great plant for a living room or office.',
      },
      
}

plants.each do |name, plant_hash|
    p = Plant.new
    plant_hash.each do |attribute, value|
        p[attribute] = value
    end
    p.save
end

User.create(name: "Corban", username: "Mr.React", password_digest: "guest")
User.create(name: "Sheba", username: "BestCat", password_digest: "password")
User.create(name: "Bob", username: "Bigguy", password_digest: "password")
Cart.create(user_id: 1)
Cart.create(user_id:2)
Cart.create(user_id:3)
CartItem.create(quantity: 2, plant_id: 3, cart_id: 1)
CartItem.create(quantity: 3, plant_id: 10, cart_id:1)
