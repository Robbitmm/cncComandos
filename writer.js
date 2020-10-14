function Writing(){
    for(let c = 0; c < comands.length; c++){
        const newH1 = document.createElement('h1'),
              oldDiv = document.querySelector("div");

        let comandC = comands[c];

        oldDiv.append(newH1);

        newH1.innerHTML = comandC[0];

        for(let i = 1; i < comandC.length; i++){
            const newDiv = document.createElement('div'),
                  newH2 = document.createElement('h2'),
                  newP = document.createElement('p');
    
            let newParam,
                ParamUpper,
                comandCI = comandC[i],
                comand = comandCI[0].toUpperCase(), // Get the comand and make it upper case
                param = comandCI[1],
                fct = comandCI[2],
                brand = '<span class="tag">' + comand + ': </span>';
            
            oldDiv.append(newDiv)
            newDiv.append(newH2);
                
            if(comand == " "){
                multipleTags(param, fct, newDiv);
            }else{
                newDiv.append(newP);
            }
            
            newParam = param.splice(','); // Remove the commas of the params
            newParam = newParam.join(' ');  // Add a space between the params
            ParamUpper = newParam.toUpperCase() // Make the param upper case
    
            newH2.innerHTML = comand + " " + ParamUpper;
            newP.innerHTML = brand + fct;
        }
    }
}

function multipleTags(param, fct, newDiv){
    for(let i = 0; i < param.length; i++){
        const newP = document.createElement('p');

        let paramUpper = param[i][0].toUpperCase(); // Make the param upper case
            brand = '<span class="tag">' + paramUpper + ': </span>';

        newDiv.append(newP);

        newP.innerHTML = brand + fct[i];
    }
}