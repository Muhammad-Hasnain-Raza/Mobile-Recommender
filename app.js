        alert("Welcome to Mobile Recomender")
        alert("Please answer the following qustion to help us suggest perfect mobile")
        var userValue = prompt('What is your budget low/medium/high')
        if(userValue == 'low'){
        document.write('30,000 Price, ')
        }
        else if(userValue =='medium'){
        document.write('45,000 Price, ')
        }
        else if(userValue =='high'){
        document.write('100,000 Price, ')
        }
        var userValue2 = prompt('Which operating system do you prefer \n Android/ios')
        if(userValue2 =='Android'){
        document.write("Realme (Android), ")
        }
        else if(userValue2 == 'ios'){
        document.write('Iphone (ios), ')
        }
        var userValue3 = prompt('What camera quality do you need normal/high')
        if(userValue3 == 'normal'){
        document.write('20 Mpx Dual Camera, ')
        }
        else if(userValue3 == 'high'){
        document.write('120 Mpx Triple Camera')
        }
        var userValue4 = prompt('How is the mobile battery average/longer')
        if(userValue4 == 'average'){
        document.write('2500 mah battery, ')
        }
        else if(userValue4 =='longer'){
        document.write('5000 mah batttery longer, ')
        }
        var userValue5 = prompt('What screen size do you need small/medium/large')
        if(userValue5 == 'small'){
        document.write('4.8 inches Screen Size, ')
        }
        else if(userValue5 == 'medium'){
        document.write('5.8 inches Screen Size, ')
        }
        else if(userValue5 == 'large'){
        document.write('6.2 inches Screen Size, ')
        }
        else{
        document.write("Please Recoomend")
        }