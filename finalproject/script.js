(function(){
    'use strict';
    console.log('reading js);');

    //input values
    const turnPage = document.querySelector('#turnPage');
    const turnButton = document.querySelector('#turnButton');

    //all images
    const myPages = ['images/oct2019p1.png', 'images/april2020p1.png', 'images/april2020p2.png', 'images/april2020p3.png', 'images/april2020p4.png', 'images/june2020p1.png', 'images/june2020p2.png', 'images/2022p1.png', 'images/2022p2.png', 'images/2022p3.png', 'images/2022p4.png', 'images/2022p5.png', 'images/2022p6.png', 'images/jan2022p1.png', 'images/jan2022p2.png', 'images/jan2022p3.png', 'images/2023p1.png', 'images/2023p2.png', 'images/2023p3.png', 'images/nov2023p1.png']; 
    let currentIndex = 0;

    //movement required 
    const requiredMovement = 1;
    let initialX = null;

    //swipe mouse interaction
    turnPage.addEventListener('mouseover', function(event){
        
        const { clientX } = event;

        if (initialX === null) {
            initialX = clientX;
            return;
          }
        
        const movement = Math.abs(clientX - initialX);

        if (movement >= requiredMovement) {
            //change the image when the required movement is reached
            currentIndex = (currentIndex + 1) % myPages.length;
            turnPage.src = myPages[currentIndex];
            //resets for the next change
            initialX = clientX; 
          }

        //input values
        const aboutHeader = document.querySelector('h2');
        const aboutPara = document.querySelector('#paragraphs');
        const nav = document.querySelector('#nav');

        //change about text
        if(currentIndex == '19'){
            aboutHeader.innerHTML = '<h2>November 2023</h2>'
            aboutPara.innerHTML = '<p>In my fourth year of bullet journaling, I was more consistent with my pages and formats. For my 2023 setup, I created the same mini book format in the future log. For coloring, I used color pencil because it became my preference. The theme of this setup was inspired by SKULLPANDA&#39;s Warmth Series. As someone who enjoys collecting blind boxes, I was a fan of this series and made it my theme for 2023. I found this theme helpful throughout the year when dealing with art block because I can make the theme of the setup based on the series such as in my November 2023 spread. This helped me be more consistent and it also made my setups appear more cohesive.</p>';
            nav.innerHTML = '<img src="images/novnav1.png" alt="novnav1">';
        } else if (currentIndex == '18'){
            aboutHeader.innerHTML = '<h2>2023</h2>'
            aboutPara.innerHTML = '<p>In my fourth year of bullet journaling, I was more consistent with my pages and formats. For my 2023 setup, I created the same mini book format in the future log. For coloring, I used color pencil because it became my preference. The theme of this setup was inspired by SKULLPANDA&#39;s Warmth Series. As someone who enjoys collecting blind boxes, I was a fan of this series and made it my theme for 2023. I found this theme helpful throughout the year when dealing with art block because I can make the theme of the setup based on the series such as in my November 2023 spread. This helped me be more consistent and it also made my setups appear more cohesive.</p>';
            nav.innerHTML = '<img src="images/2023nav3.png" alt="2023nav3">';
        } else if (currentIndex == '17'){
            aboutHeader.innerHTML = '<h2>2023</h2>'
            aboutPara.innerHTML = '<p>In my fourth year of bullet journaling, I was more consistent with my pages and formats. For my 2023 setup, I created the same mini book format in the future log. For coloring, I used color pencil because it became my preference. The theme of this setup was inspired by SKULLPANDA&#39;s Warmth Series. As someone who enjoys collecting blind boxes, I was a fan of this series and made it my theme for 2023. I found this theme helpful throughout the year when dealing with art block because I can make the theme of the setup based on the series such as in my November 2023 spread. This helped me be more consistent and it also made my setups appear more cohesive.</p>';
            nav.innerHTML = '<img src="images/2023nav2.png" alt="2023nav2">';
        } else if (currentIndex == '16'){
            aboutHeader.innerHTML = '<h2>2023</h2>'
            aboutPara.innerHTML = '<p>In my fourth year of bullet journaling, I was more consistent with my pages and formats. For my 2023 setup, I created the same mini book format in the future log. For coloring, I used color pencil because it became my preference. The theme of this setup was inspired by SKULLPANDA&#39;s Warmth Series. As someone who enjoys collecting blind boxes, I was a fan of this series and made it my theme for 2023. I found this theme helpful throughout the year when dealing with art block because I can make the theme of the setup based on the series such as in my November 2023 spread. This helped me be more consistent and it also made my setups appear more cohesive.</p>';
            nav.innerHTML = '<img src="images/2023nav1.png" alt="2023nav1">';
        } else if (currentIndex == '15'){
            aboutHeader.innerHTML = '<h2>January 2022</h2>'
            aboutPara.innerHTML = '<p>A large part of the reason I bullet journal is because I enjoy the creative process and experimenting with my setup each month. I used different materials than I normally would for this setup. For coloring, I used color pencil instead of marker. I wanted this setup to appear more soft and playful and thought that the texture from color pencil could achieve that appearance. However, I found that I prefer working with color pencil more than marker. I liked how I had more control of the lightness and darkness of colors. This setup made me more open to using other materials in my future setups.</p>';
            nav.innerHTML = '<img src="images/jannav3.png" alt="jannav3">';
        } else if (currentIndex == '14'){
            aboutHeader.innerHTML = '<h2>January 2022</h2>'
            aboutPara.innerHTML = '<p>A large part of the reason I bullet journal is because I enjoy the creative process and experimenting with my setup each month. I used different materials than I normally would for this setup. For coloring, I used color pencil instead of marker. I wanted this setup to appear more soft and playful and thought that the texture from color pencil could achieve that appearance. However, I found that I prefer working with color pencil more than marker. I liked how I had more control of the lightness and darkness of colors. This setup made me more open to using other materials in my future setups.</p>';
            nav.innerHTML = '<img src="images/jannav2.png" alt="jannav2">';
        } else if (currentIndex == '13'){
            aboutHeader.innerHTML = '<h2>January 2022</h2>'
            aboutPara.innerHTML = '<p>A large part of the reason I bullet journal is because I enjoy the creative process and experimenting with my setup each month. I used different materials than I normally would for this setup. For coloring, I used color pencil instead of marker. I wanted this setup to appear more soft and playful and thought that the texture from color pencil could achieve that appearance. However, I found that I prefer working with color pencil more than marker. I liked how I had more control of the lightness and darkness of colors. This setup made me more open to using other materials in my future setups.</p>';
            nav.innerHTML = '<img src="images/jannav1.png" alt="jannav1">';
        } else if (currentIndex == '12'){
            aboutHeader.innerHTML = '<h2>2022</h2>'
            aboutPara.innerHTML = '<p>In my third year of bullet journaling, I had a better understanding of what pages I found useful and how I liked certain pages to be formatted. For example, I like to spend more time on my setup for the new year because it is useful when organizing the rest of the setups I make throughout the year. In my 2022 setup, I created pages for grid spacing, goals, future log, birthdays, and highlights. In the future log, I tried creating a mini book layout in order to conserve space and paper. The theme of this spread was Pochacco, a Sanrio character that I adore.</p>';
            nav.innerHTML = '<img src="images/2022nav6.png" alt="2022nav6">';
        } else if (currentIndex == '11'){
            aboutHeader.innerHTML = '<h2>2022</h2>'
            aboutPara.innerHTML = '<p>In my third year of bullet journaling, I had a better understanding of what pages I found useful and how I liked certain pages to be formatted. For example, I like to spend more time on my setup for the new year because it is useful when organizing the rest of the setups I make throughout the year. In my 2022 setup, I created pages for grid spacing, goals, future log, birthdays, and highlights. In the future log, I tried creating a mini book layout in order to conserve space and paper. The theme of this spread was Pochacco, a Sanrio character that I adore.</p>';
            nav.innerHTML = '<img src="images/2022nav5.png" alt="2022nav5">';
        } else if (currentIndex == '10'){
            aboutHeader.innerHTML = '<h2>2022</h2>'
            aboutPara.innerHTML = '<p>In my third year of bullet journaling, I had a better understanding of what pages I found useful and how I liked certain pages to be formatted. For example, I like to spend more time on my setup for the new year because it is useful when organizing the rest of the setups I make throughout the year. In my 2022 setup, I created pages for grid spacing, goals, future log, birthdays, and highlights. In the future log, I tried creating a mini book layout in order to conserve space and paper. The theme of this spread was Pochacco, a Sanrio character that I adore.</p>';
            nav.innerHTML = '<img src="images/2022nav4.png" alt="2022nav4">';
        } else if (currentIndex == '9'){
            aboutHeader.innerHTML = '<h2>2022</h2>'
            aboutPara.innerHTML = '<p>In my third year of bullet journaling, I had a better understanding of what pages I found useful and how I liked certain pages to be formatted. For example, I like to spend more time on my setup for the new year because it is useful when organizing the rest of the setups I make throughout the year. In my 2022 setup, I created pages for grid spacing, goals, future log, birthdays, and highlights. In the future log, I tried creating a mini book layout in order to conserve space and paper. The theme of this spread was Pochacco, a Sanrio character that I adore.</p>';
            nav.innerHTML = '<img src="images/2022nav3.png" alt="2022nav3">';
        } else if (currentIndex == '8'){
            aboutHeader.innerHTML = '<h2>2022</h2>'
            aboutPara.innerHTML = '<p>In my third year of bullet journaling, I had a better understanding of what pages I found useful and how I liked certain pages to be formatted. For example, I like to spend more time on my setup for the new year because it is useful when organizing the rest of the setups I make throughout the year. In my 2022 setup, I created pages for grid spacing, goals, future log, birthdays, and highlights. In the future log, I tried creating a mini book layout in order to conserve space and paper. The theme of this spread was Pochacco, a Sanrio character that I adore.</p>';
            nav.innerHTML = '<img src="images/2022nav2.png" alt="2022nav2">';
        } else if (currentIndex == '7'){
            aboutHeader.innerHTML = '<h2>2022</h2>'
            aboutPara.innerHTML = '<p>In my third year of bullet journaling, I had a better understanding of what pages I found useful and how I liked certain pages to be formatted. For example, I like to spend more time on my setup for the new year because it is useful when organizing the rest of the setups I make throughout the year. In my 2022 setup, I created pages for grid spacing, goals, future log, birthdays, and highlights. In the future log, I tried creating a mini book layout in order to conserve space and paper. The theme of this spread was Pochacco, a Sanrio character that I adore.</p>';
            nav.innerHTML = '<img src="images/2022nav1.png" alt="2022nav1">';
        } else if (currentIndex == '6'){
            aboutHeader.innerHTML = '<h2>June 2020</h2>'
            aboutPara.innerHTML = '<p>Although I found a lot of inspiration from other people&#39;s bullet journal setups, I also found inspiration from other sources. This setup was inspired by the anime, Haikyuu. The anime follow the journey of Shoyo Hinata, who became obsessed with volleyball after watching Karasuno High School play in the Nationals on TV. The anime focusses on both the hard times training and competing in matches and happier times having fun with friends. I felt the message and energy of the anime was fitting for the summer and made it my theme for my June 2020 setup.</p>';
            nav.innerHTML = '<img src="images/junnav2.png" alt="junnav2">';
        } else if (currentIndex == '5'){
            aboutHeader.innerHTML = '<h2>June 2020</h2>'
            aboutPara.innerHTML = '<p>Although I found a lot of inspiration from other people&#39;s bullet journal setups, I also found inspiration from other sources. This setup was inspired by the anime, Haikyuu. The anime follow the journey of Shoyo Hinata, who became obsessed with volleyball after watching Karasuno High School play in the Nationals on TV. The anime focusses on both the hard times training and competing in matches and happier times having fun with friends. I felt the message and energy of the anime was fitting for the summer and made it my theme for my June 2020 setup.</p>';
            nav.innerHTML = '<img src="images/junnav1.png" alt="junnav1">';
        } else if (currentIndex == '4'){
            aboutHeader.innerHTML = '<h2>April 2020</h2>'
            aboutPara.innerHTML = '<p>In my second year of bullet journaling, I had more time on my hands because of the pandemic and became more experimental. I started incorporating other pages like a habit tracker and a mood tracker. I also took inspiration from others. This spread was inspired by the YouTuber, AmandaRachLee. Her bullet journal setup for April 2020 had a Lo-Fi theme. I thought this theme was perfect for quarantine because of the cozy and warm imagery that is associated with the music genre. As a Lo-Fi music enjoyer, I decided to also make a Lo-fi inspired theme for my April 2020 setup.</p>';
            nav.innerHTML = '<img src="images/aprnav4.png" alt="aprnav4">';
        } else if (currentIndex == '3'){
            aboutHeader.innerHTML = '<h2>April 2020</h2>'
            aboutPara.innerHTML = '<p>In my second year of bullet journaling, I had more time on my hands because of the pandemic and became more experimental. I started incorporating other pages like a habit tracker and a mood tracker. I also took inspiration from others. This spread was inspired by the YouTuber, AmandaRachLee. Her bullet journal setup for April 2020 had a Lo-Fi theme. I thought this theme was perfect for quarantine because of the cozy and warm imagery that is associated with the music genre. As a Lo-Fi music enjoyer, I decided to also make a Lo-fi inspired theme for my April 2020 setup.</p>';
            nav.innerHTML = '<img src="images/aprnav3.png" alt="aprnav3">';
        } else if (currentIndex == '2'){
            aboutHeader.innerHTML = '<h2>April 2020</h2>'
            aboutPara.innerHTML = '<p>In my second year of bullet journaling, I had more time on my hands because of the pandemic and became more experimental. I started incorporating other pages like a habit tracker and a mood tracker. I also took inspiration from others. This spread was inspired by the YouTuber, AmandaRachLee. Her bullet journal setup for April 2020 had a Lo-Fi theme. I thought this theme was perfect for quarantine because of the cozy and warm imagery that is associated with the music genre. As a Lo-Fi music enjoyer, I decided to also make a Lo-fi inspired theme for my April 2020 setup.</p>';
            nav.innerHTML = '<img src="images/aprnav2.png" alt="aprnav2">';
        } else if (currentIndex == '1'){
            aboutHeader.innerHTML = '<h2>April 2020</h2>'
            aboutPara.innerHTML = '<p>In my second year of bullet journaling, I had more time on my hands because of the pandemic and became more experimental. I started incorporating other pages like a habit tracker and a mood tracker. I also took inspiration from others. This spread was inspired by the YouTuber, AmandaRachLee. Her bullet journal setup for April 2020 had a Lo-Fi theme. I thought this theme was perfect for quarantine because of the cozy and warm imagery that is associated with the music genre. As a Lo-Fi music enjoyer, I decided to also make a Lo-fi inspired theme for my April 2020 setup.</p>';
            nav.innerHTML = '<img src="images/aprnav1.png" alt="aprnav1">';
        } else if (currentIndex == '0'){
            aboutHeader.innerHTML = '<h2>October 2019</h2>'
            aboutPara.innerHTML = '<p>A bullet journal is an organizational system for scheduling, reminders, to-do lists, brainstorming, and other tasks in a notebook. I started my bullet journal in 2019 during my third year of high school to be more organized and productive. It also became a creative outlet. This year, my bullet journal spreads were more minimal to maintain consistency. I slowly incorporated more elements throughout the year. For example, I incorporated a habit tracker as a sticky note. I did not dedicate a whole page to the tracker because I was still finding out what spreads were useful for me.</p>';
            nav.innerHTML = '<img src="images/octnav1.png" alt="octnav1">';
        } else {
            aboutHeader.innerHTML = '<h2>October 2019</h2>'
            aboutPara.innerHTML = '<p>A bullet journal is an organizational system for scheduling, reminders, to-do lists, brainstorming, and other tasks in a notebook. I started my bullet journal in 2019 during my third year of high school to be more organized and productive. It also became a creative outlet. This year, my bullet journal spreads were more minimal to maintain consistency. I slowly incorporated more elements throughout the year. For example, I incorporated a habit tracker as a sticky note. I did not dedicate a whole page to the tracker because I was still finding out what spreads were useful for me.</p>';
            nav.innerHTML = '<img src="images/octnav1.png" alt="octnav1">';
        }
    });

}()); 