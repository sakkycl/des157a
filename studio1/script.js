(function(){
    'use strict';
    console.log('reading js);');

    const myIntro= document.querySelector('#intro');
    const myForm = document.querySelector('form');

    myForm.addEventListener('submit', function(event){

        event.preventDefault();

        //input values
        const adj = document.querySelector('#adj').value;
        const antonymAdj = document.querySelector('#antonymAdj').value;
        const synonymAdj = document.querySelector('#synonymAdj').value;
        const place = document.querySelector('#place').value;
        const hBodyPart = document.querySelector('#hBodyPart').value;
        const hBodyPart2 = document.querySelector('#hBodyPart2').value;
        const fBodyPart = document.querySelector('#fBodyPart').value;
        const place2 = document.querySelector('#place2').value;
        const animal = document.querySelector('#animal').value;
        const fBodyPart2 = document.querySelector('#fBodyPart2').value;
        const verb = document.querySelector('#verb').value;

        //display intro text
        let introText;

        if(adj == ''){
            introText = "Please provide an adjective";
            document.querySelector('#adj').focus();
        }

        else if(antonymAdj == ''){
            introText = "Please provide an adjective";
            document.querySelector('#antonymAdj').focus();
        }

        else if(synonymAdj == ''){
            introText = "Please provide an adjective";
            document.querySelector('#synonymAdj').focus();
        }

        else if(place == ''){
            introText = "Please provide a place in your home";
            document.querySelector('#place').focus();
        } 

        else if(hBodyPart == ''){
            introText = "Please provide a human body part";
            document.querySelector('#hBodyPart').focus();
        } 

        else if(hBodyPart2 == ''){
            introText = "Please provide a human body part";
            document.querySelector('#hBodyPart2').focus();
        } 

        else if(fBodyPart == ''){
            introText = "Please provide a feline body part";
            document.querySelector('#fBodyPart').focus();
        } 

        else if(place2 == ''){
            introText = "Please provide a place in your home";
            document.querySelector('#place2').focus();
        } 

        else if(animal == ''){
            introText = "Please provide an animal";
            document.querySelector('#animal').focus();
        } 

        else if(fBodyPart2 == ''){
            introText = "Please provide a feline body part";
            document.querySelector('#fBodyPart2').focus();
        } 

        else if(verb == ''){
            introText = "Please provide a verb";
            document.querySelector('#verb').focus();
        } 

        else {

            // hide form and show intro text
            document.getElementById(`intro`).className = 'showing';
            document.getElementById(`maincontent`).className = 'hidden';

            introText = `The words “${adj}” and “cat” do not belong 
            together! They are ${antonymAdj} creatures harboring ${synonymAdj} 
            thoughts. Beware of these signs!`;

            document.querySelector('#adj').value='';
            document.querySelector('#antonymAdj').value='';
            document.querySelector('#synonymAdj').value='';
            document.querySelector('#place').value='';
            document.querySelector('#hBodyPart').value='';
            document.querySelector('#hBodyPart2').value='';
            document.querySelector('#fBodyPart').value='';
            document.querySelector('#place2').value='';
            document.querySelector('#animal').value='';
            document.querySelector('#fBodyPart2').value='';
            document.querySelector('#verb').value='';
        }

        myIntro.innerHTML = introText;

        //display signs Text
        let signsText;

        if(adj == ''){
            signsText = "Please provide an adjective";
            document.querySelector('#adj').focus();
        }

        else if(antonymAdj == ''){
            signsText = "Please provide an adjective";
            document.querySelector('#antonymAdj').focus();
        }

        else if(synonymAdj == ''){
            signsText = "Please provide an adjective";
            document.querySelector('#synonymAdj').focus();
        }

        else if(place == ''){
            signsText = "Please provide a place in your home";
            document.querySelector('#place').focus();
        } 

        else if(hBodyPart == ''){
            signsText = "Please provide a human body part";
            document.querySelector('#hBodyPart').focus();
        } 

        else if(hBodyPart2 == ''){
            signsText = "Please provide a human body part";
            document.querySelector('#hBodyPart2').focus();
        } 

        else if(fBodyPart == ''){
            signsText = "Please provide a feline body part";
            document.querySelector('#fBodyPart').focus();
        } 

        else if(place2 == ''){
            signsText = "Please provide a place in your home";
            document.querySelector('#place2').focus();
        } 

        else if(animal == ''){
            signsText = "Please provide an animal";
            document.querySelector('#animal').focus();
        } 

        else if(fBodyPart2 == ''){
            signsText = "Please provide a feline body part";
            document.querySelector('#fBodyPart2').focus();
        } 

        else if(verb == ''){
            signsText = "Please provide a verb";
            document.querySelector('#verb').focus();
        } 

        else {

            // hide form and show signs text
            document.getElementById(`signs`).className = 'showing';
            document.getElementById(`maincontent`).className = 'hidden';

            document.getElementById('signOne').textContent = `Hiding in dark 
            places: Dark places are where all evil plots are born. Not only are 
            they plotting your murder, they found the perfect spot to observe you 
            in the ${place}.`;
            document.getElementById('signTwo').textContent = `Kneading: This is 
            not a sign of affection. They are checking your body for weaknesses. 
            Do not let your ${hBodyPart} be discovered!`;
            document.getElementById('signThree').textContent = `Tummy up: This is 
            a trap! You must avoid the temptation to put your ${hBodyPart2} near 
            the cat's tummy or you will be at the mercy of its ${fBodyPart} 
            attacks.`;
            document.getElementById('signFour').textContent = `Digging litter: They 
            are practicing the art of burying a body, hiding away all the 
            evidence and making their escape through the ${place2}.`;
            document.getElementById('signFive').textContent = `Gifts: A dead 
            ${animal} is not a gift! It's a warning that you are their next target!`;
            document.getElementById('signSix').textContent = `Sleeping on your 
            electronics: They are setting their plan into motion, using their 
            ${fBodyPart2} to hack your computer and cutting you from all outside 
            communication. ${verb} before it is too late!`;

            document.querySelector('#adj').value='';
            document.querySelector('#antonymAdj').value='';
            document.querySelector('#synonymAdj').value='';
            document.querySelector('#place').value='';
            document.querySelector('#hBodyPart').value='';
            document.querySelector('#hBodyPart2').value='';
            document.querySelector('#fBodyPart').value='';
            document.querySelector('#place2').value='';
            document.querySelector('#animal').value='';
            document.querySelector('#fBodyPart2').value='';
            document.querySelector('#verb').value='';
        }

    });

}()); 